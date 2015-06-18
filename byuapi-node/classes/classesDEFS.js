'use strict';

var core = require('../getCoreAPIProperties.js');

exports.getvarClassesBase = function () {
  return {
    classes: {
      links: [],
      metadata: {},
      values: []
    }
  };
}

exports.getvarClassesBaseLinks = function () {
  return [
    {
       rel: "self",
       href: "https://api.byu.edu/rest/v1/byuapi/instructors/:instructor_id",
       method: "GET"
    }
  ];
}

exports.getvarClassesBaseMeta = function () {
  return {
    collection_size: 0,
    page_start: 1,
    page_end: 1,
    page_size: 20,
    default_page_size: 20,
    max_page_size: 20,
    field_sets_returned: [],
    field_sets_available: [
      "basic",
      "add_permission_codes",
      "assigned_instructors",
      "assigned_schedules",
      "class_limitations",
      "course_limitations",
      "department_room_preferences",
      "enrolled_students",
      "enrolled_student_logs",
      "linked_classes",
      "notes",
      "permission_to_add_codes",
      "prerequisites",
      "priority_schedules",
      "section_headers",
      "supplemental_counts",
      "waitlisted_students",
      "waitlisted_student_logs"
    ],
    default_field_sets: [
      "basic"
    ],
    contexts_available: {
      class_roll: [
        "basic",
        "assigned_instructors",
        "assigned_schedules",
        "enrolled_students"
      ],
      class_schedule_record: [
        "basic",
        "add_approved_students",
        "assigned_instructors",
        "assigned_schedules",
        "class_limitations",
        "course_limitations",
        "linked_classes",
        "notes",
        "permission_to_add_codes",
        "prerequisites",
        "section_headers",
        "supplemental_counts"
      ],
      proof: [
        "course_proof"
      ],
      summary: [
        "course_summary"
      ],
    }
  };
}

exports.getvarClassesBaseValues = function () {
  return {
    links: [],
    basic: {}
  };
}

exports.getvarClassesValuesLinks = function () {
  return [
    {
       rel: "self",
       href: "https://api.byu.edu/rest/v1/byuapi/classes/:values_links_stuff",
       method: "GET"
    }
  ];
}

exports.getvarClassesValuesBasic = function () {
  return {
    year_term: core.getCoreAPIProperties({ api_type: "key"}),
    curriculum_id: core.getCoreAPIProperties({ api_type: "key"}),
    title_code: core.getCoreAPIProperties({ api_type: "key"}),
    section_number: core.getCoreAPIProperties({ api_type: "key"}),
    subject_area: core.getCoreAPIProperties({ api_type: "related", related_resource: "courses"}),
    course_number: core.getCoreAPIProperties({ api_type: "related", related_resource: "courses"}),
    course_suffix: core.getCoreAPIProperties({ api_type: "related", related_resource: "courses"}),
    course_title: core.getCoreAPIProperties({ api_type: "related", related_resource: "courses"}),
    section_type: core.getCoreAPIProperties({ api_type: "modifiable"}),
    block_code: core.getCoreAPIProperties({ api_type: "modifiable"}),
    section_status: core.getCoreAPIProperties({ api_type: "modifiable"}),
    reg_method: core.getCoreAPIProperties({ api_type: "modifiable"}),
    lab_quiz_flag: core.getCoreAPIProperties({ api_type: "modifiable"}),
    fee: core.getCoreAPIProperties({ api_type: "modifiable"}),
    honors: core.getCoreAPIProperties({ api_type: "modifiable"}),
    service_learning: core.getCoreAPIProperties({ api_type: "modifiable"}),
    fixed_or_variable: core.getCoreAPIProperties({ api_type: "modifiable"}),
    credit_hours: core.getCoreAPIPropertiesInt({ api_type: "modifiable"}),
    minimum_credit_hours: core.getCoreAPIPropertiesInt({ api_type: "related", related_resource: "courses"}),
    section_size: core.getCoreAPIPropertiesInt({ api_type: "modifiable"}),
    total_enrolled: core.getCoreAPIPropertiesInt({ api_type: "modifiable"}),
    class_start_date: core.getCoreAPIProperties({ api_type: "modifiable"}),
    class_end_date: core.getCoreAPIProperties({ api_type: "modifiable"}),
    reg_start_date: core.getCoreAPIProperties({ api_type: "modifiable"}),
    reg_end_date: core.getCoreAPIProperties({ api_type: "modifiable"}),
    withdraw_deadline_date: core.getCoreAPIProperties({ api_type: "modifiable"}),
    control_mix_date: core.getCoreAPIProperties({ api_type: "modifiable"}),
    waitlist_status: core.getCoreAPIProperties({ api_type: "modifiable"}),
    combine_link_to_rolls: core.getCoreAPIProperties({ api_type: "modifiable"}),
    combine_link_to_counts: core.getCoreAPIProperties({ api_type: "modifiable"}),
    link_to_year_term: core.getCoreAPIProperties({ api_type: "modifiable"}),
    link_to_curriculum_id: core.getCoreAPIProperties({ api_type: "modifiable"}),
    link_to_title_code: core.getCoreAPIProperties({ api_type: "modifiable"}),
    link_to_section_number: core.getCoreAPIProperties({ api_type: "modifiable"})
  }
}

