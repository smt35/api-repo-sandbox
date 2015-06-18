'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
  var promises = [], params = [];
  var sql_query1 = sql.linkedClassesFind;
  var sql_query2 = sql.linkedClassesData;
  var data = {};

  if(request.params.resource_id) {
    params = request.params.resource_id;
  } else {
    params[0] = request.query.year_term;
    params[1] = request.query.curriculum_id;
    params[2] = request.query.title_code;
    params[3] = request.query.section_number;
  }

  return connection.ces.execute(sql_query1, params)
    .then(function(results) {
      var params = [];

      data = resources.sub_resource_definitions.linked_classes;

      if(results.rows[0].link_to_curriculum_id > " ") {
        params[0] = results.rows[0].year_term;
        params[1] = results.rows[0].link_to_curriculum_id;
        params[2] = results.rows[0].link_to_title_code;
        params[3] = results.rows[0].link_to_section_number;
        return connection.ces.execute(sql_query2, params);
      } else {
        return data;
      }
    })
    .then(function(results) {
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
  }
}
