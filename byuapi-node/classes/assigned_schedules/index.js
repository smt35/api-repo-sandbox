'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
  var params = [];
  var sql_query = sql.assignedSchedulesData;
  var data = {};

  if(request.params.resource_id) {
    params = request.params.resource_id;
  } else {
    params[0] = request.query.year_term;
    params[1] = request.query.curriculum_id;
    params[2] = request.query.title_code;
    params[3] = request.query.section_number;
  }

  return connection.ces.execute(sql_query, params)
    .then(function(results) {
      data = resources.sub_resource_definitions.assigned_schedules;

      data.metadata.collection_size = results.rows.length;
      if(results.rows.length === 0) return data;

      processData(data, results);
      return data;
    });
}

function buildDataRow(data, results) {
  var field;

  for(field in results) {
    data[field].value = results[field];
  }
}

function processData(data, results) {
  var def, def2;
  var x;

  def = data.values;
  data.values = [];

  for(x = 0; x < results.rows.length; x++) {
    def2 = core.object.copy(def);
    data.values.push(def2);
    buildDataRow(def2, results.rows[x]);
    buildYearTermDesc(def2.year_term);
  }
}

function buildYearTermDesc(year_term) {

  switch(year_term.value.substr(4, 1)) {
    case '1':
      year_term.desc = "Winter " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Winter Semester " + year_term.value.substr(0, 4);
      break;
    case '3':
      year_term.desc = "Spring " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Spring Term " + year_term.value.substr(0, 4);
      break;
    case '4':
      year_term.desc = "Summer " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Summer Term " + year_term.value.substr(0, 4);
      break;
    case '5':
      year_term.desc = "Fall " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Fall Semester " + year_term.value.substr(0, 4);
      break;
    default:
      year_term.desc = "Unknown " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Unknown " + year_term.value.substr(0, 4);
  }
}

