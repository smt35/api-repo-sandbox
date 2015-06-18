'use strict';

var q = require('q');

exports.getCoreAPIProperties = function (properties) {
  if(arguments.length === 0) properties = {};
  return {
           value: properties.value || "",
           api_type: properties.api_type || "",
           related_resource: properties.related_resource || "",
           descr: properties.descr || "",
           long_descr: properties.long_desc || "",
           domain: properties.domain || ""
         };
};

exports.getCoreAPIPropertiesInt = function (properties) {
  if(arguments.length === 0) properties = {};
  return {
           value: properties.value || 0,
           api_type: properties.api_type || "",
           related_resource: properties.related_resource || "",
           descr: properties.descr || "",
           long_descr: properties.long_desc || "",
           domain: properties.domain || ""
         };
};

exports.getDBConnection = function(req) {
  var deferred = q.defer();
  req.app.get('pool').acquire(function(err, connection) {
    if(err) {
      return deferred.reject(err);
    } else {
      return deferred.resolve(connection);
    }
  });
  return deferred.promise;
};

exports.executeSQLQuery = function(connection, sql_query, params) {
  var deferred = q.defer();

//console.log("query: ", sql_query);
//console.log("params: ", params);
  connection.execute(sql_query, params,
    function(err, results) {
      if(err) {
//console.log("err: ", err);
        return deferred.reject(err);
      } else {
//console.log("success: ", results[0]);
        return deferred.resolve(results);
      }
    }
  );

  return deferred.promise;
};

exports.buildQueryClassesEmailAddress = function () {
  return "select email_address as \"email_address\""
        + " from email_address"
       + " where person_id = :1";
};

exports.getClassesEmailAddress = function(connection, params) {
  var sql_query =  exports.buildQueryClassesEmailAddress();

  return exports.executeSQLQuery(connection, sql_query, params)
    .then(function(results) {
      if(results.length === 0) return;
      return results;
    });
};

