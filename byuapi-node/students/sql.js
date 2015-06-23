'use strict';

exports.buildQueryCheckAuthorization = function () {
  return "select person_id as \"person_id\""
        + " from pro.person_group"
       + " where person_id = :1"
         + " and group_id = :2";
}

exports.buildQueryPersonalInfo = function () {
  return "select person_id as \"person_id\","
             + " byu_id as \"byu_id\","
             + " nvl(net_id, ' ') as \"net_id\","
             + " sort_name as \"sort_name\","
             + " surname as \"surname\","
             + " preferred_first_name as \"preferred_first_name\","
             + " nvl(to_char(date_of_birth, 'dd Mon yyyy'), ' ') as \"date_of_birth\","
             + " marital_status as \"marital_status\","
             + " gender as \"gender\""
        + " from pro.person"
       + " where person_id = :1";
}

exports.testQuery1 = function () {
  return "select nvl(to_char(start_date, 'dd Mon yyyy'), '*') as \"start_date\","
             + " nvl(to_char(end_date, 'dd Mon yyyy'), '*') as \"end_date\""
        + " from control_dates"
       + " where year_term = :1"
       + "   and date_type = :2";
}

exports.buildQueryClassesBasic = function () {
  return "select a.year_term as \"year_term\","
             + " a.curriculum_id as \"curriculum_id\","
             + " a.title_code as \"title_code\","
             + " a.section_number as \"section_number\","
             + " nvl(a.dept_name, 'xxxxx') as \"subject_area\","
             + " nvl(a.catalog_number, '000') as \"course_number\","
             + " nvl(a.catalog_suffix, ' ') as \"course_suffix\","
             + " nvl(a.section_type, 'xxx') as \"section_type\","
             + " nvl(a.credit_type, 'S') as \"block_code\","
             + " nvl(a.section_status_flag, 'N') as \"section_status\","
             + " nvl(a.reg_method, 'O') as \"reg_method\","
             + " nvl(a.lab_quiz_section, 'N') as \"lab_quiz_flag\","
             + " nvl(a.fee, ' ') as \"fee\","
             + " nvl(a.honors, 'N') as \"honors\","
             + " nvl(a.service_learning, 'N') as \"service_learning\","
             + " nvl(a.fixed_or_variable, 'F') as \"fixed_or_variable\","
             + " nvl(a.credit_hours, 0.0) as \"credit_hours\","
             + " nvl(a.minimum_credit_hours, 0.0) as \"minimum_credit_hours\","
             + " nvl(a.section_size, 0) as \"section_size\","
             + " nvl(a.total_enrolled, 0) as \"total_enrolled\","
             + " nvl(to_char(a.start_date, 'dd Mon yyyy'), ' ') as \"class_start_date\","
             + " nvl(to_char(a.end_date, 'dd Mon yyyy'), ' ') as \"class_end_date\","
             + " nvl(to_char(a.reg_start_date, 'dd Mon yyyy'), ' ') as \"reg_start_date\","
             + " nvl(to_char(a.reg_end_date, 'dd Mon yyyy'), ' ') as \"reg_end_date\","
             + " nvl(to_char(a.wdrop_date, 'dd Mon yyyy'), ' ') as \"withdraw_deadline_date\","
             + " nvl(to_char(a.control_mix_date, 'dd Mon yyyy'), ' ') as \"control_mix_date\","
             + " nvl(a.waitlist_status, 'D') as \"waitlist_status\","
             + " nvl(a.combine_rolls, 'N') as \"combine_link_to_rolls\","
             + " nvl(a.combine_counts, 'N') as \"combine_link_to_counts\","
             + " nvl(a.combine_yyt, ' ') as \"link_to_year_term\","
             + " nvl(a.combine_curr_id, '*') as \"link_to_curriculum_id\","
             + " nvl(a.combine_title_code, ' ') as \"link_to_title_code\","
             + " nvl(a.combine_section, ' ') as \"link_to_section_number\","
             + " b.transcript_title as \"course_title\""
        + " from class_section a,"
             + " course_title b"
       + " where a.year_term = :1"
         + " and a.curriculum_id = :2"
         + " and a.title_code = :3"
         + " and a.section_number = :4"
         + " and b.curriculum_id = a.curriculum_id"
         + " and b.title_code = a.title_code";
}

exports.buildQueryClassesFinalExamSchedule = function () {
  return "select nvl(to_char(use_start_date, 'dd Mon yyyy'), 'TBA') as \"exam_date\","
             + " nvl(mon || tue || wed || decode(thu, 'R', 'Th', '') || fri || sat || sun, 'TBA') as \"exam_day\","
             + " nvl(begin_time,'TBA') as \"begin_time\","
             + " nvl(end_time,'TBA') as \"end_time\","
             + " nvl(building, 'TBA') as \"building\","
             + " nvl(room, 'TBA') as \"room\""
        + " from event_schedule"
       + " where event_type = 'FINAL EXAM'"
         + " and event_id = rpad('BYU PROVO', 15, ' ') || :1 || :2 || :3 || :4"
         + " and rownum < 2";
}

exports.buildQueryClassesInstructors = function () {
  return "select a.attribute_value as \"instructor_id\","
             + " a.attribute_type as \"instructor_type\","
             + " b.sort_name as \"instructor_name\""
        + " from class_attribute a,"
             + " person b"
       + " where a.year_term = :1"
         + " and a.curriculum_id = :2"
         + " and a.title_code = :3"
         + " and a.section_number = :4"
         + " and a.attribute_name = 'INSTRUCTOR'"
         + " and a.attribute_type IN ('PRIMARY', 'TEAM')"
         + " and b.person_id = a.attribute_value"
       + " order by a.attribute_type, b.sort_name";
}

exports.buildQueryClassesWhenTaught = function () {
  return "select sequence_number as \"sequence_number\","
             + " nvl(building, 'TBA') as \"building\","
             + " nvl(room, 'TBA') as \"room\","
             + " nvl(mon || tue || wed || decode(thu, 'R', 'Th', '') || fri || sat || sun, 'TBA') as \"days_taught\","
             + " nvl(begin_time,'TBA') as \"begin_time\","
             + " nvl(end_time,'TBA') as \"end_time\""
        + " from event_schedule"
       + " where event_type IN ('CLS', 'CLASS')"
         + " and event_id = rpad('BYU PROVO', 15, ' ') || :1 || :2 || :3 || :4"
       + " order by sequence_number";
}

