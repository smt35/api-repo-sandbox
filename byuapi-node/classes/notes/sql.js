'use strict';

exports.notesData =
  "select a.credit_institution as \"credit_institution\","
      + " a.year_term as \"year_term\","
      + " a.curriculum_id as \"curriculum_id\","
      + " a.title_code as \"title_code\","
      + " a.section_number as \"section_number\","
      + " rpad(b.dept_name, 6)||b.catalog_number||b.catalog_suffix as \"course_name\","
      + " a.attribute_type as \"note_type\","
      + " a.attribute_value as \"note_value\","
      + " to_char(a.date_time_updated, 'dd Mon yyyy hh24:mi:ss') as \"date_time_updated\","
      + " a.updated_by_id as \"updated_by_id\","
      + " c.sort_name as \"updated_by_name\""
 + " from class_attribute a,"
      + " course_title b,"
      + " person c"
+ " where a.year_term = :1"
  + " and a.curriculum_id = :2"
  + " and a.title_code = :3"
  + " and a.section_number = :4"
  + " and a.attribute_name = 'NOTE'"
  + " and b.curriculum_id = a.curriculum_id"
  + " and b.title_code = a.title_code"
  + " and c.person_id (+) = a.updated_by_id"
+ " order by a.attribute_value";

