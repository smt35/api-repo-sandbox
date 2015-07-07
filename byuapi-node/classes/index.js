'use strict';

var sql = require('./sql.js');
var q = require('bluebird');

exports.get = function(connection, resources, request, response) {
  var sub_resource_name, store = {};
  var promises, data = {};
  var resource_name = request.params.resource_name;

  if(request.params.sub_resource_name) {
    return resources.sub_resources[request.params.sub_resource_name].get(connection, resources, request, response)
      .then(function (results) {
        store[request.params.sub_resource_name] = results;
        return store;
      });
  } else {
    promises = [];
    data[resource_name] = resources.resource_definition;
    for(sub_resource_name in resources.sub_resources) {
      (function(sub_resource_name) {
        var promise;
        promise = resources.sub_resources[sub_resource_name].get(connection, resources, request, response)
          .then(function (results) {
            store[sub_resource_name] = results;
            return store;
          });
        promises.push(promise);
      })(sub_resource_name);
    }
    return q.settle(promises)
      .then(function() {
        data[resource_name].values[0] = store;
        return data;
      }
    )
  }

};

exports.delete = function(connection, resources, request, response) {
};

exports.post = function(connection, resources, request, response) {
};

exports.put = function(connection, resources, request, response) {
};

exports.options = function(connection, resources, request, response) {
};
