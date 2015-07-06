'use strict';

var sql = require('./sql.js');
var core = require("../../core.js");
var common = require("../../commonAcademicUtils.js");
var q = require('q');

exports.get = function(connection, resources, request, response) {
  var params = [];
  var sql_query = sql.summaryData;
  var data = {};

  if(request.params.resource_id) {
    params = request.params.resource_id;
//    params[0] = "20153";
//    params[1] = "MATH";
  } else {
    params[0] = request.query.year_term;
    params[1] = request.query.teaching_area;
  }

  return connection.ces.execute(sql_query, params)
    .then(function(results) {
      data = resources.sub_resource_definitions.summary;

      if(results.rows.length === 0) return data;

      processData(connection, data, results);
      return data;
//      return processData(connection, data, results)
//        .then(function(results) {
//           return data;
//        });
    });
}

function buildDataRow(data, results) {
  data.teaching_area.value = results.teaching_area;
  data.course_number.value = results.course_number;
  data.course_suffix.value = results.course_suffix;
  data.curriculum_id.value = results.curriculum_id;
  data.title_code.value = results.title_code;
  data.course_title.value = results.course_title;
  data.multiple_title_codes.value = "N";
  data.allow_add_codes.value = "Y";
}

function processData(connection, data, results) {
  var promises = [];
  var sql_query = sql.courseSummaryAllowAddCodes;
  var sql_query2 = sql.courseSummaryWaitlist;
  var course_number_suffix_check = "000";
  var course_number_suffix, title_code;
  var def, def2;
  var x;

  common.buildYearTermDesc(data.values.teaching_area_summary.year_term);
  def = data.values.course_number_summary;
  data.values.course_number_summary = [];

console.log("pre loop: ", course_number_suffix_check);
  for(x = 0; x < results.rows.length; x++) {
//console.log("looping: ", x);
    course_number_suffix = results.rows[x].course_number
          + (results.rows[x].course_suffix ? results.rows[x].course_suffix : "");
    if(course_number_suffix_check != course_number_suffix) {
      course_number_suffix_check = course_number_suffix;
      def2 = core.object.copy(def);
      data.values.course_number_summary.push(def2);
      buildDataRow(def2, results.rows[x]);
      title_code = def2.title_code.value;
console.log("not equal: ", x);
//      // get allow to add codes value
//      (function(row) {
//        var promise, params = [];
//        params[0] = row.year_term.value;
//        params[1] = row.teaching_area.value;
//        params[2] = row.catalog_number.value
//                  + row.catalog_suffix.value;
//        promise = connection.ces.execute(sql_query, params);
//        promise.then(function(results) {
//          if(results.rows[0].count > 0) {;
//            row.allow_add_codes.value = "N";
//          }
//        });
//        promises.push(promise);
//      })(def2);
//      // get waitlisted count
//      (function(row) {
//        var promise, params = [];
//        params[0] = row.year_term.value;
//        params[1] = row.teaching_area.value;
//        params[2] = row.catalog_number.value
//                  + row.catalog_suffix.value;
//        promise = connection.ces.execute(sql_query, params);
//        promise.then(function(results) {
//          row.number_waitlisted.value = results.rows[0].count;
//          data.values.teaching_area_summary.total_waitlisted.value += results.rows[0].count;
//        });
//        promises.push(promise);
//      })(def2);
    } else {
console.log("equal: ", x);
      if(title_code != results.rows[x].title_code) {
        // course has multiple titles
        def2.multiple_title_codes.value = "Y";
      }
    }
console.log("both: ", x);

    // number of sections
    def2.number_of_sections.value++;
    data.values.teaching_area_summary.total_sections.value++;

    // number of seats offered
    def2.seats_offered.value += results.rows[x].section_size;
    data.values.teaching_area_summary.total_seats_offered.value += results.rows[x].section_size;

    // number enrolled
    def2.total_enrolled.value += results.rows[x].total_enrolled;
    data.values.teaching_area_summary.total_enrolled.value += results.rows[x].total_enrolled;

    if(results.rows[x].seats_available > 0) {
      // number of seats still available
      def2.seats_available.value += results.rows[x].seats_available;
      data.values.teaching_area_summary.total_seats_available.value += results[x].seats_available;
    } else {
      // number of full sections
      def2.number_of_full_sections.value++;
      data.values.teaching_area_summary.total_full_sections.value++;
    }
  }
//  return q.allSettled(promises);
}
