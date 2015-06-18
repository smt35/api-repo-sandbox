'use strict';

var core = require('../getCoreAPIProperties.js');
var defs = require('./classesDEFS.js');
var sql = require('./classesSQL.js');
var basic = require('./basic/basic.js');
var class_roll = require('./enrolled_students/enrolled_students.js');
var dummy = require('./dummy/dummy.js');
var instr = require('./assigned_instructors/assigned_instructors.js');
var crs = require('./course_summary/course_summary.js');
var sched = require('./assigned_schedules/assigned_schedules.js');
var q = require('q');
var express = require('express');
var router  = express.Router();
var debug_msg = require('oit').debug_msg;

// The '/' is for post operations.
//router.all(['/','/:id/:address_type'], function(req, res) {
//router.all(['/','/:class_id','/:class_id/:sub_resource','/:class_id/:sub_resource/:sub_id'], function(req, res) {
//router.all(['/:class_id'], function(req, res) {
//router.all(['/:class_id/:sub_resource/:sub_id', '/:class_id/:sub_resource', '/:class_id', '/'], function(req, res) {
//
router.all(['/'], router_function);
router.all(['/:class_id'], router_function);
router.all(['/:class_id/:sub_resource'], router_function);
router.all(['/:class_id/:sub_resource/:sub_id'], router_function);

function router_function(req, res) {
  // Get Database Connection
  var store = {};

  core.getDBConnection(req)
    .then(function(connection) {
      if(req.query.context) {
        return executeClassesContext(connection, req)
          .then(function(data) {
            store = data;
          });
      } else if(req.params.sub_resource) {
        return executeSubResource(store, connection, req, req.params.sub_resource);
      } else {
        return executeClassesDefault(connection, req)
          .then(function(data) {
            store = data;
            var promises = [];
            var promise, fieldset;
            var x;
            if(req.query.fieldset) {
              fieldset = req.query.fieldset.split(',');
              for(x = 0; x < fieldset.length; x++) {
                promise = executeSubResource(store.classes.values[0], connection, req, fieldset[x]);
                promises.push(promise);
              }
              return q.all(promises);
            }
          });
      };
    })

    // will be performed if everything was successful.
    .then(function(data) {
      res.send(store);
    })

    // will catch any errors for the request
    .fail(function(err) {
      if((typeof err === 'string')
      || (err instanceof Error)) {
         return res.status(500).send(err);
      } else {
         return res.status(err.code).send(err.message);
      }
    })

    .done();
}

function executeClassesContext(connection, req) {
  var data = {};
  var meta, fieldset, context;
  var promises = [];
  var promise;
  var x;

  data = defs.getvarClassesBase();
  meta = defs.getvarClassesBaseMeta();
  context = req.query.context.split(',')[0];
  if(meta.contexts_available[context]) {
    fieldset = meta.contexts_available[context];
    data.classes.values[0] = {};
    for(x = 0; x < fieldset.length; x++) {
      promise = executeSubResource(data.classes.values[0], connection, req, fieldset[x]);
      promises.push(promise);
    }
  }
  return q.all(promises)
    .then(function() {
      return data;
    });

}

function executeClassesDefault(connection, req) {
  var data = {};
  var fieldset;
  var promises = [];
  var promise;
  var x;

  data = defs.getvarClassesBase();
  data.classes.links = defs.getvarClassesBaseLinks();
  data.classes.metadata = defs.getvarClassesBaseMeta();

  data.classes.values[0] = {};
  for(x = 0; x < data.classes.metadata.default_field_sets.length; x++) {
    promise = executeSubResource(data.classes.values[0], connection, req,
              data.classes.metadata.default_field_sets[x]);
    promises.push(promise);
  }
  return q.all(promises)
    .then(function() {
      return data;
    });
}

function executeSubResource(store, connection, req, sub_resource) {
   if(sub_resource === "basic") {
     return basic.getBasic(connection, req)
       .then(function(results) {
         store.basic = results;
       });
   } else if(sub_resource === "enrolled_students") {
     return class_roll.getEnrolledStudents(connection, req)
       .then(function(results) {
         store.enrolled_students = results;
       });
   } else if(sub_resource === "assigned_instructors") {
     return instr.getAssignedInstructors(connection, req)
       .then(function(results) {
         store.assigned_instructors = results;
       });
   } else if(sub_resource === "assigned_schedules") {
     return sched.getAssignedSchedules(connection, req)
       .then(function(results) {
         store.assigned_schedules = results;
       });
   } else if(sub_resource === "course_summary") {
     return crs.getCourseSummary(connection, req)
       .then(function(results) {
         store.course_summary = results;
       });
   } else if(sub_resource === "dummy") {
     return dummy.getDummy(connection, req)
       .then(function(results) {
         store.dummy = results;
       });
   } else {
     return q(new Error("invalid sub resource entry"));
   }
}

// Functions visible to other programs.
exports.router        = router;
