'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var q = require('bluebird');

exports.get = function(connection, resources, request, response) {
  var params = [];
  var sql_query = sql.enrollmentCountsData;
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
      data = resources.sub_resource_definitions.enrollment_counts;

      data.metadata.collection_size = results.rows.length;
      if(results.rows.length === 0) return data;

      return processData(connection, data, results, params)
        .then(function(results) {
           return data;
        });
    });
}

function buildDataRow(data, results) {
  var field;

  for(field in results) {
    if(field in data) {
      data[field].value = results[field];
    }
  }
}

function processData(connection, data, results, params) {
  var promises = [];
  var sql_query1 = sql.waitlistCount;
  var sql_query2 = sql.unusedPermissionCodeCount;
  var def, def2;
  var x;

  def = data.values;
  data.values = [];

  for(x = 0; x < results.rows.length; x++) {
    def2 = core.object.copy(def);
    data.values.push(def2);
    buildDataRow(def2, results.rows[0]);

    // get the waitlist count
    (function(row) {
      var promise;
      promise = connection.ces.execute(sql_query1, params);
      promise.then(function(results) {
        row.waitlist_count.value = results.rows[0].count;
      });
      promises.push(promise);
    })(def2);

    // get the unused permission codes count
    (function(row) {
      var promise;
      promise = connection.ces.execute(sql_query2, params);
      promise.then(function(results) {
        row.unused_permission_codes.value = results.rows[0].count;
      });
      promises.push(promise);
    })(def2);
  }
  return q.settle(promises);
}
