'use strict';

exports.enrolledStudentsData =
  "select a.person_id as \"person_id\","
      + " a.year_term as \"year_term\","
      + " a.curriculum_id as \"curriculum_id\","
      + " a.title_code as \"title_code\","
      + " a.section_number as \"section_number\","
      + " b.byu_id as \"byu_id\","
      + " b.sort_name as \"student_name\","
      + " nvl(a.credit_hours, 0.0) as \"credit_hours\""
 + " from std_classes a,"
      + " person b"
+ " where a.year_term = :1"
  + " and a.curriculum_id = :2"
  + " and a.title_code = :3"
  + " and a.section_number = :4"
  + " and b.person_id = a.person_id"
+ " order by b.sort_name";

exports.classesEmailAddress =
  "select email_address as \"email_address\""
  + " from email_address"
  + " where person_id = :1";
