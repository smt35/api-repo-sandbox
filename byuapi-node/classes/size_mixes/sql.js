'use strict';

exports.sizeMixesData =
  "select a.credit_institution as \"credit_institution\","
      + " a.year_term as \"year_term\","
      + " a.curriculum_id as \"curriculum_id\","
      + " a.title_code as \"title_code\","
      + " a.section_number as \"section_number\","
      + " a.count_category as \"category\","
      + " a.count_type as \"type\","
      + " a.countcat_size as \"size\","
      + " a.total_enrolled as \"total_enrolled\","
      + " a.add_count_cum as \"number_of_adds\","
      + " a.drop_count_cum as \"number_of_drops\","
      + " a.total_requests as \"total_requests\","
      + " nvl(a.updated_by_id, ' ') as \"updated_by_id\","
      + " nvl(to_char(a.date_time_updated, 'dd Mon yyyy'), ' ') as \"date_time_updated\","
      + " nvl(b.sort_name, '') as \"updated_by_name\""
  + " from class_sched_supplement_count a,"
       + " person b"
  + " where a.year_term = :1"
  + " and a.curriculum_id = :2"
  + " and a.title_code = :3"
  + " and a.section_number = :4"
  + " and b.person_id (+) = a.updated_by_id"
  + " order by a.count_category";
