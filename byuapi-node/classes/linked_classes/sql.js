'use strict';

exports.linkedClassesFind =
  "select year_term as \"year_term\","
      + " nvl(combine_curr_id, '') as \"link_to_curriculum_id\","
      + " nvl(combine_title_code, '') as \"link_to_title_code\","
      + " nvl(combine_section, '') as \"link_to_section_number\""
 + " from class_section"
+ " where year_term = :1"
  + " and curriculum_id = :2"
  + " and title_code = :3"
  + " and section_number = :4";

exports.linkedClassesData =
  "select a.year_term as \"year_term\","
      + " a.curriculum_id as \"curriculum_id\","
      + " a.title_code as \"title_code\","
      + " a.section_number as \"section_number\","
      + " nvl(a.dept_name, 'xxxxx') as \"subject_area\","
      + " nvl(a.catalog_number, '000') as \"course_number\","
      + " nvl(a.catalog_suffix, '') as \"course_suffix\","
      + " nvl(a.section_type, 'unknown') as \"section_type\","
      + " nvl(a.credit_type, 'S') as \"block_code\","
      + " nvl(a.section_status_flag, 'N') as \"section_status\","
      + " nvl(a.combine_yyt, '') as \"link_to_year_term\","
      + " nvl(a.combine_curr_id, '') as \"link_to_curriculum_id\","
      + " nvl(a.combine_title_code, '') as \"link_to_title_code\","
      + " nvl(a.combine_section, '') as \"link_to_section_number\","
      + " b.transcript_title as \"course_title\""
 + " from class_section a,"
      + " course_title b"
+ " where a.year_term = :1"
  + " and a.combine_curr_id = :2"
  + " and a.combine_title_code = :3"
  + " and a.combine_section = :4"
  + " and b.curriculum_id = a.curriculum_id"
  + " and b.title_code = a.title_code";

