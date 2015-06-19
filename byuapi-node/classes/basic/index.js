'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var common = require("../../commonAcademicUtils.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
  var params = [];
  var sql_query = sql.basicData;
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
      data = resources.sub_resource_definitions.basic;
      if(results.rows.length === 0) return data;

      buildDataRow(data.basic, results.rows[0]);
      common.buildYearTermDesc(data.basic.year_term);
      common.buildBlockCodeDesc(data.basic.year_term, data.basic.block_code);
      if(data.basic.link_to_curriculum_id.value > " ") {
        if((data.basic.link_to_curriculum_id.value === data.basic.curriculum_id.value)
        && (data.basic.link_to_title_code.value === data.basic.title_code.value)
        && (data.basic.link_to_section_number.value === data.basic.section_number.value)) {
          data.basic.link_relation.value = "parent";
        } else {
          data.basic.link_relation.value = "child";
        }
      }

      return data;

    });
}

function buildDataRow(data, results) {
  var field;

  for(field in results) {
    data[field].value = results[field];
  }
}

