'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var common = require("../../commonAcademicUtils.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
  var params = [];
  var sql_query = sql.sizeMixesData;
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
      data = resources.sub_resource_definitions.size_mixes;
      data.metadata.collection_size = results.rows.length;

      if(results.rows.length === 0) return data;

      processData(connection, data, results);
      return data;
    });
}

function buildDataRow(data, results) {
  var field;

  for(field in results) {
    data[field].value = results[field];
  }
}

function processData(connection, data, results) {
  var def, def2;
  var x;

  def = data.values;
  data.values = [];

  for(x = 0; x < results.rows.length; x++) {
    def2 = core.object.copy(def);
    data.values.push(def2);
    buildDataRow(def2, results.rows[x]);
    common.buildYearTermDesc(def2.year_term);
  }
}
