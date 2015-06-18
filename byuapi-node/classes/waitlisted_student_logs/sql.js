'use strict';

exports.waitlistedStudentLogsData =
  "select a.person_id as \"person_id\","
      + " a.year_term as \"year_term\","
      + " a.curriculum_id as \"curriculum_id\","
      + " a.title_code as \"title_code\","
      + " a.section_number as \"section_number\","
      + " b.byu_id as \"byu_id\","
      + " b.sort_name as \"student_name\","
      + " a.action as \"action\","
      + " to_char(a.action_date, 'dd Mon yyyy hh24:mi:ss') as \"action_date_time\","
      + " a.action_by_id as \"action_by_id\","
      + " c.sort_name as \"action_by_name\","
      + " rpad(a.dept_name, 6)||a.catalog_number||a.catalog_suffix as \"course_name\","
      + " a.credit_hours as \"credit_hours\""
 + " from waitlist_log a,"
      + " person b,"
      + " person c"
+ " where a.year_term = :1"
  + " and a.curriculum_id = :2"
  + " and a.title_code = :3"
  + " and a.section_number = :4"
  + " and b.person_id = a.person_id"
  + " and c.person_id = a.action_by_id"
+ " order by b.sort_name";

