'use strict';

exports.enrollmentCountsData =
  "select year_term as \"year_term\","
      + " curriculum_id as \"curriculum_id\","
      + " title_code as \"title_code\","
      + " section_number as \"section_number\","
      + " credit_institution as \"credit_institution\","
      + " nvl(section_size, 0) as \"class_size\","
      + " nvl(total_enrolled, 0) as \"total_enrolled\","
      + " nvl(add_count_cum, 0) as \"total_adds\","
      + " nvl(drop_count_cum, 0) as \"total_drops\","
      + " nvl(total_requests, 0) as \"total_requests\""
 + " from class_section"
+ " where year_term = :1"
  + " and curriculum_id = :2"
  + " and title_code = :3"
  + " and section_number = :4";

exports.unusedPermissionCodeCount =
  "select count(*) as \"count\""
 + " from class_section_tokens"
+ " where year_term = :1"
  + " and curriculum_id = :2"
  + " and title_code = :3"
  + " and section_number = :4"
  + " and redeemed_date_time is null";

exports.waitlistCount =
  "select count(*) as \"count\""
 + " from waitlist"
+ " where year_term = :1"
  + " and curriculum_id = :2"
  + " and title_code = :3"
  + " and section_number = :4";
