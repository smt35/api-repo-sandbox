'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
  var params = [];
  var sql_query = sql.assignedInstructorData;
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
      data = resources.sub_resource_definitions.assigned_instructors;
      data.metadata.collection_size = results.rows.length;

      if(results.rows.length === 0) return data;

      return processData(connection, data, results)
        .then(function(results) {
           return data;
        });
    });
}

function buildDataRow(data, results) {
  var field;

  for(field in results) {
    data[field].value = results[field];
  }
}

function processData(connection, data, results) {
  var promises = [];
  var sql_query = sql.classesEmailAddress;
  var def, def2;
  var x, z;

  def = data.values;
  data.values = [];

  for(x = 0; x < results.rows.length; x++) {
    def2 = core.object.copy(def);
    data.values.push(def2);
    buildDataRow(def2, results.rows[x]);

    // get the email address
    (function(row) {
      var promise;
      var params = [];
      params[0] = row.person_id.value;
      promise = connection.ces.execute(sql_query, params);
      promise.then(function(results) {
        row.email_address.value = results.rows[0].email_address;
      });
      promises.push(promise);
    })(def2);
  }
  return q.allSettled(promises);
}
