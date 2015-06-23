'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
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
      buildYearTermDesc(data.basic.year_term);
      buildBlockCodeDesc(data.basic.year_term, data.basic.block_code);
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

function buildBlockCodeDesc(year_term, block_code) {

  switch(block_code.value.substr(0, 1)) {
    case '1':
      if(year_term.value.substr(4, 1) === '3') {
        block_code.desc = "Spring Term";
      } else {
        block_code.desc = "First Term";
      }
      break;
    case '2':
      if(year_term.value.substr(4, 1) === '4') {
        block_code.desc = "Summer Term";
      } else {
        block_code.desc = "Second Term";
      }
      break;
    case 'S':
      if(year_term.value.substr(4, 1) === '3') {
        block_code.desc = "Spring-Summer";
      } else {
        block_code.desc = "Semester Long";
      }
      break;
    case 'O':
      block_code.desc = "Other";
      break;
    default:
      block_code.desc = "Unknown " + block_code.value;
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
