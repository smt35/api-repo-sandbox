'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
  var params = [];
  var sql_query = sql.academicUnitData;
  var data = {};

  if(request.params.resource_id) {
    params = request.params.resource_id;
  } else {
    params[0] = request.query.unit_id;
    params[1] = request.query.date;
  }

  return connection.ces.execute(sql_query, params)
    .then(function(results) {
      data = resources.sub_resource_definitions.basic;
      if(results.rows.length === 0) return data;

      buildDataRow(data.basic, results.rows[0]);

      return data;

    });
}

function buildDataRow(data, results) {
  var field;

  for(field in results) {
    if(field in data) {
      data[field].value = results[field];
    }
  }
  data.parent_academic_unit_id.description = results.parent_official_name;
}

