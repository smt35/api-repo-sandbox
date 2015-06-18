'use strict';

exports.assignedInstructorData =
  "select a.credit_institution as \"credit_institution\","
      + " a.year_term as \"year_term\","
      + " a.curriculum_id as \"curriculum_id\","
      + " a.title_code as \"title_code\","
      + " a.section_number as \"section_number\","
      + " a.attribute_type as \"instructor_type\","
      + " b.sort_name as \"instructor_name\","
      + " b.person_id as \"person_id\","
      + " b.byu_id as \"byu_id\","
      + " b.net_id as \"net_id\","
      + " nvl(a.updated_by_id, ' ') as \"updated_by_id\","
      + " nvl(to_char(a.date_time_updated, 'dd Mon yyyy'), ' ') as \"date_time_updated\","
      + " nvl(c.sort_name, '') as \"updated_by_name\""
  + " from class_attribute a,"
       + " person b,"
       + " person c"
  + " where a.year_term = :1"
  + " and a.curriculum_id = :2"
  + " and a.title_code = :3"
  + " and a.section_number = :4"
  + " and a.attribute_name = 'INSTRUCTOR'"
  + " and b.person_id = a.attribute_value"
  + " and c.person_id (+) = a.updated_by_id"
  + " order by a.attribute_type, b.sort_name";

exports.classesEmailAddress =
  "select email_address as \"email_address\""
  + " from email_address"
  + " where person_id = :1";
