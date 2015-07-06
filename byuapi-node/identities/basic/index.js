'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
    var params = [];
    var sql_query = sql.basicData;
    var data = {};
    console.log("Got to here 1");
    if(request.params.resource_id) {
        params = request.params.resource_id;
    } else {
        params[0] = request.query.identity_id;
    }
    console.log("Got to here 2")
    return connection.ces.execute(sql_query, params)
        .then(function(results) {
            data = resources.sub_resource_definitions.languages;
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
    var sql_query = sql.basicData;
    var def, def2;
    var x, z;

    def = data.values;
    data.values = [];

    for(x = 0; x < results.rows.length; x++) {
        def2 = core.object.copy(def);
        data.values.push(def2);
        buildDataRow(def2, results.rows[x]);
    }
    return q.allSettled(promises);
}

