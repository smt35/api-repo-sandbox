'use strict';

exports.courseSummaryData =
  "select a.dept_name as \"subject_area\","
      + " a.catalog_number as \"catalog_number\","
      + " nvl(a.catalog_suffix, '') as \"catalog_suffix\","
      + " a.curriculum_id as \"curriculum_id\","
      + " a.title_code as \"title_code\","
      + " a.section_size - a.total_enrolled as \"seats_available\","
      + " a.section_size as \"section_size\","
      + " a.total_enrolled as \"total_enrolled\","
      + " b.transcript_title as \"course_title\""
 + " from class_section a,"
      + " course_title b"
+ " where a.year_term = :1"
  + " and a.dept_name = :2"
  + " and a.section_status_flag = 'A'"
  + " and b.curriculum_id = a.curriculum_id"
  + " and b.title_code = a.title_code"
+ " order by 1, 2, 3";

exports.courseSummaryWaitlist =
  "select count(*) as \"count\""
 + " from waitlist a,"
      + " course_title b"
+ " where a.year_term = :1"
  + " and b.curriculum_id = a.curriculum_id"
  + " and b.title_code = a.title_code"
  + " and b.dept_name = :2"
  + " and b.catalog_number||b.catalog_suffix = :3";

exports.courseSummaryAllowAddCodes =
  "select count(*)"
 + " from course_attribute a,"
      + " course_title b"
+ " where a.attribute_name = 'PERMISSION CODE CREATION'"
  + " and a.attribute_type = :1"
  + " and b.curriculum_id = a.curriculum_id"
  + " and b.title_code = a.title_code"
  + " and b.dept_name = :2"
  + " and b.catalog_number||b.catalog_suffix = :3";

