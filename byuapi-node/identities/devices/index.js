'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
    var params = [];
    var sql_query = sql.devicesData;
    var data = {};