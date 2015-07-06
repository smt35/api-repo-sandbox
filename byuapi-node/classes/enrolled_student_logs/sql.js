'use strict';

exports.enrolledStudentLogsData =
  "select a.person_id as \"person_id\","
      + " a.year_term as \"year_term\","
      + " a.curriculum_id as \"curriculum_id\","
      + " a.title_code as \"title_code\","
      + " a.section_number as \"section_number\","
      + " b.byu_id as \"byu_id\","
      + " b.sort_name as \"student_name\","
      + " nvl(a.credit_hours, 0.0) as \"credit_hours\","
      + " nvl(a.grade, '') as \"grade\","
      + " nvl(a.action, '') as \"action\","
      + " to_char(a.date_time_updated, 'dd Mon yyyy hh24:mi:ss') as \"date_time_updated\","
      + " nvl(a.updated_by_id, '') as \"updated_by_id\","
      + " c.sort_name as \"updated_by_name\""
 + " from std_class_log a,"
      + " person b,"
      + " person c"
+ " where a.year_term = :1"
  + " and a.curriculum_id = :2"
  + " and a.title_code = :3"
  + " and a.section_number = :4"
  + " and b.person_id = a.person_id"
  + " and c.person_id (+) = a.updated_by_id"
+ " order by a.date_time_updated";

