{
  "links": [
    "classes.info": {
      "rel": "self",
      "href": "https://api.byu.edu/rest/v1/universityapi/classes?teaching_area=NURS,page_start=51,page_size=50",
      "method": "GET",
      "title": "classes.getClasses"
    },
    "classes.prev": {
      "rel": "classes.prev",
      "href": "https://api.byu.edu/rest/v1/universityapi/classes?teaching_area=NURS,page_start=1,page_size=50",
      "method": "GET",
      "title": "classes.getClasses"
    },
    "classes.next": {
      "rel": "classes.next",
      "href": "https://api.byu.edu/rest/v1/universityapi/classes?teaching_area=NURS,page_start_101,page_size=50",
      "method": "GET",
      "title": "classes.getClasses"
    },
    "classes.schedule": {
      "rel": "classes.schedule",
      "href": "https://api.byu.edu/rest/v1/universityapi/classes",
      "method": "POST",
      "title": "classes.scheduleClass"
    }
  ],
    "metadata": {
      "collection_size": 436,
      "page_start": 51,
      "page_end": 100,
      "page_size": 50,
      "default_page_size": 50,
      "max_page_size": 1000,
      "field_sets_returned": [
        "basic"
      ],
      "field_sets_available": [
        "add_permission_codes",
        "assigned_instructors",
        "class_limitations",
        "class_schedules",
        "course_limitations",
        "enrolled_students",
        "linked_classes",
        "notes",
        "permission_to_add_codes",
        "prerequisites",
        "section_headers",
        "supplemental_counts",
        "waitlisted_students",
        "enrolled_student_logs",
        "waitlisted_student_logs"
      ],
      "default_field_sets": [
        "basic"
      ]
    },
    "values": [
      { "links": [
          { "rel": "self",
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "GET"
          },
          { "rel": "classes.cancel",
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "DELETE"
          },
          { "rel": "classes.modify",
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "PUT"
          },
          { "rel": "classes.open",
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "PUT"
          },
          { "rel": "classes.start",
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "PUT"
          },
          { "rel": "classes.close,
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "PUT"
          },
          { "rel": "classes.end",
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "PUT"
          },
          { "rel": "classes.combine",
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "PUT"
          },
          { "rel": "classes.split",
            "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001",
            "method": "PUT"
          },
          { "rel": "courses.info",
            "href": "https://api.byu.edu/rest/v1/universityapi/courses/11463,000",
            "method": "GET"
          },
          { "rel": "curriculum-units.info",
            "href": "https://api.byu.edu/rest/v1/universityapi/curriculum-units/11463",
            "method": "GET"
          }
        ],
        "basic": {
          "year_term": {
            "value": "20151",
            "api_type": "key",
            "descr": "Winter 2015",
            "long_descr": "Winter Semester 2015",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
          },
          "curriculum_id": {
            "value": "11463",
            "api_type": "key"
          },
          "title_code": {
            "value": "000",
            "api_type": "key"
          },
          "section_number": {
             "value": "001",
             "api_type": "key"
          },
          "class_status": {
            "value": "Future",
            "api_type": "derived",
            ""
          },
          "enrollment_status": {
            "value": "Open",
            "api_type": "derived",
            ""
          },
          "teaching_area": {
            "value": "NURS",
            "api_type": "related",
            "related_resource": "courses"
            "descr": "Nursing",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/teaching-areas"
          },
          "catalog_number": {
            "value": "295",
            "api_type": "related",
            "related_resource": "courses"
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-numbers?year_term=20151&teaching_area=NURS"
          },
          "catalog_suffix": {
            "value": "",
            "api_type": "related",
            "related_resource": "courses",
            "descr": "",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-suffixes"
          },
          "course_description": {
            "value": "Fund Nurs Concepts & Care",
            "api_type": "related",
            "related_resource": "courses"
          },
          "section_type": {
            "value": "DAY",
            "api_type": "modifiable",
            "descr": "Day Classes",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/section-types"
          },
          "credit_type": {
            "value": "S",
            "api_type": "modifiable",
            "descr": "Semester",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-types"
          },
          "reg_method": {
            "value": "S",
            "api_type": "modifiable",
            "descr": "Permission Required",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/reg-methods"
          },
          "lab_quiz_section": {
            "value": "",
            "api_type": "modifiable",
            "descr": "Lecture",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/lab-quiz-sections"
          },
          "section_status_flag": {
            "value": "A",
            "api_type": "modifiable",
            "descr": "Approved",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/lab-quiz-sections"
          },
          "section_size": {
            "value": 64,
            "api_type": "modifiable"
          },
          "total_enrolled": {
            "value": 57,
            "api_type": "derived"
          },
          "fixed_or_variable": {
            "value": "F",
            "api_type": "modifiable",
            "descr": "Fixed",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/fixed-or-variable"
          },
          "credit_hours": {
            "value": "3",
            "api_type": "modifiable"
          },
          "minimum_credit_hours": {
            "value": "3",
            "api_type": "related",
            "related_resource": "courses"
          },
          "class_start_date": {
            "value": "2015-01-05",
            "api_type": "modifiable",
            "descr": "05 Jan 2015",
            "long_descr": "05 January 2015"
          },
          "class_end_date": {
            "value": "2015-04-14",
            "api_type": "modifiable",
            "descr": "14 Apr 2015",
            "long_descr": "14 April 2015"
          },
          "waitlist_status": {
            "value": "E",
            "api_type": "modifiable",
            "descr": "Bill does not know what these codes mean",
            "domain": "https://api.byu.edu/rest/v1/universityapi/meta/waitlist-status"
          },
          "fee": {
            "value": "0",
            "api_type": "modifiable"
          },
          "honors": {
            "value": "",
            "api_type": "modifiable",
            "descr": "Not an Honors Section"
          },
          "service_learning": {
            "value": "",
            "api_type": "modifiable",
            "descr": "Not a Service Learning Section"
          },
          "control_mix_date": {
            "value": "",
            "api_type": "modifiable"
          },
          "combine_curriculum_id": {
            "value": "",
            "api_type": "modifiable"
          },
          "combine_title_code": {
            "value": "",
            "api_type": "modifiable"
          },
          "combine_section": {
            "value": "",
            "api_type": "modifiable"
          },
          "combine_counts": {
            "value": "N",
            "api_type": "modifiable"
          },
          "waitlist_count": {
            "value": 0,
            "api_type": "derived"
          },
          "unused_permission_codes": {
            "value": 0,
            "api_type": "derived"
          }
        },
        "add_permission_codes": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/add-permission-codes",
              "method": "GET"
            },
            { "rel": "add_permission_codes.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/add-permission-codes?{query_parameters}",
              "method": "GET"
            },
            { "rel": "add_permission_codes.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/add-permission-codes",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50",
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/add-permission-codes/585241162",
                  "method": "GET"
                },
                { "rel": "add_permission_codes.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/add-permission-codes/585241162",
                  "method": "DELETE"
                },
                { "rel": "students.info",
                  "href": "https://api.byu.edu/rest/v1/universityapi/students/585241162",
                  "method": "GET"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "person_id": {
                "value": "585241162",
                "api_type": "key"
              },
              "student_name": {
                "value": "Bugs Bunny Ithaca",
                "api_type": "related",
                "related_resource": "students"
              },
              "audit_flag": {
                "value": "",
                "api_type": "modifiable"
              },
              "created_by_id": {
                "value": "584584584",
                "api_type": "operational",
                "descr": "Joe Faculty"
              },
              "created_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              },
              "redeemed_dttm": {
                "value": "2014-05-14T13:45:53.20Z",
                "api_type": "operational"
              }
            }
          ]
        },
        "assigned_instructors": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/assigned-instructors",
              "method": "GET"
            },
            { "rel": "assigned_instructors.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/assigned-instructors?{query_parameters}",
              "method": "GET"
            },
            { "rel": "assigned_instructors.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/assigned-instructors",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/assigned-instructors/585241162",
                  "method": "GET"
                },
                { "rel": "add_permission_codes.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/assigned-instructors/585241162",
                  "method": "DELETE"
                },
                { "rel": "add_permission_codes.modify",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/assigned-instructors/585241162",
                  "method": "PUT"
                },
                { "rel": "instructors.info",
                  "href": "https://api.byu.edu/rest/v1/universityapi/instructors/585241162",
                  "method": "GET"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "instructor_type": {
                "value": "?"
                "api_type": "?"
              },
              "instructor_name": {
                "value": "?"
                "api_type": "?"
              },
              "person_id": {
                "value": "?"
                "api_type": "?"
              },
              "byu_id": {
                "value": "?"
                "api_type": "?"
              },
              "net_id": {
                "value": "?"
                "api_type": "?"
              },
              "email_address": {
                "value": "?"
                "api_type": "?"
              },
              "updated_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "updated_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              },
              "expired_date": {
                "value": "?"
                "api_type": "?"
              }
            }
          ]
        },
        "class_limitations": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-limitations",
              "method": "GET"
            },
            { "rel": "class_limitations.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-limitation",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-limitations/?",
                  "method": "GET"
                },
                { "rel": "class_limitationss.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-limitations/?",
                  "method": "DELETE"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "limitation_name": {
                "value": "?"
                "api_type": "key"
              },
              "limitation_type": {
                "value": "?"
                "api_type": "key"
              },
              "limitation_value": {
                "value": "?"
                "api_type": "key"
              },
              "updated_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "updated_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              },
              "expired_date": {
                "value": "?"
                "api_type": "?"
              }
            }
          ]
        },
        "class_schedules": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-schedules",
              "method": "GET"
            },
            { "rel": "class_schedules.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-schedules?{query_parameters}",
              "method": "GET"
            },
            { "rel": "class_schedules.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-schedules",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-schedules/?",
                  "method": "GET"
                },
                { "rel": "class_schedules.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-schedules/?",
                  "method": "DELETE"
                },
                { "rel": "class_schedules.modify",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/class-schedules/?",
                  "method": "PUT"
                },
                { "rel": "locations.info",
                  "href": "https://api.byu.edu/rest/v1/universityapi/locations/ITB,2019",
                  "method": "GET"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "schedule_type": {
                "value": "?",
                "api_type": "?"
              },
              "schedule_id": {
                "value": "?",
                "api_type": "?"
              },
              "sequence_number": {
                "value": "?",
                "api_type": "?"
              },
              "institution": {
                "value": "?",
                "api_type": "?"
              },
              "building": {
                "value": "?",
                "api_type": "?"
              },
              "room": {
                "value": "?",
                "api_type": "?"
              },
              "days_taught": {
                "value": "?",
                "api_type": "?"
              },
              "mon": {
                "value": "?",
                "api_type": "?"
              },
              "tue": {
                "value": "?",
                "api_type": "?"
              },
              "wed": {
                "value": "?",
                "api_type": "?"
              },
              "thu": {
                "value": "?",
                "api_type": "?"
              },
              "fri": {
                "value": "?",
                "api_type": "?"
              },
              "sat": {
                "value": "?",
                "api_type": "?"
              },
              "sun": {
                "value": "?",
                "api_type": "?"
              },
              "use_start_date": {
                "value": "?",
                "api_type": "?"
              },
              "use_end_date": {
                "value": "?",
                "api_type": "?"
              },
              "time_taught": {
                "value": "?",
                "api_type": "?"
              },
              "begin_time": {
                "value": "?",
                "api_type": "?"
              },
              "end_time": {
                "value": "?",
                "api_type": "?"
              },
              "status": {
                "value": "?",
                "api_type": "?"
              },
              "set_up_id": {
                "value": "?",
                "api_type": "?"
              },
              "set_up_name": {
                "value": "?",
                "api_type": "?"
              },
              "set_up_description": {
                "value": "?",
                "api_type": "?"
              },
              "schedule_reason": {
                "value": "?",
                "api_type": "?"
              },
              "updated_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "updated_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              },
              "allow_conflict": {
                "value": "?",
                "api_type": "?"
              }
            }
          ]
        },
        "course_limitations": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/course-limitations",
              "method": "GET"
            },
            { "rel": "course_limitations.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/course-limitation",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/course-limitations/?",
                  "method": "GET"
                },
                { "rel": "course_limitations.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/course-limitations/?",
                  "method": "DELETE"
                }
              ],
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "effective_date": {
                "value": "?",
                "api_type": "?"
              },
              "expired_date": {
                "value": "?",
                "api_type": "?"
              },
              "limitation_name": {
                "value": "?"
                "api_type": "key"
              },
              "limitation_type": {
                "value": "?"
                "api_type": "key"
              },
              "limitation_value": {
                "value": "?"
                "api_type": "key"
              }
            }
          ]
        },
        "enrolled_students": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-students",
              "method": "GET"
            },
            { "rel": "enrolled_students.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-students?{query_parameters}",
              "method": "GET"
            },
            { "rel": "enrolled_students.prev",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-students?page_start=1,page_size=50",
              "method": "GET"
            },
            { "rel": "enrolled_students.next",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-students?page_start=101,page_size=50",
              "method": "GET"
            },
            { "rel": "enrolled_students.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-students",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 60,
            "page_start": 1,
            "page_end": 50,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-students/585241162",
                  "method": "GET"
                },
                { "rel": "enrolled-students.drop",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-students/585241162",
                  "method": "DELETE"
                },
                { "rel": "enrolled-students.modify",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-students/585241162",
                  "method": "PUT"
                },
                { "rel": "students.info",
                  "href": "https://api.byu.edu/rest/v1/universityapi/students/585241162",
                  "method": "GET"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "description": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "person_id": {
                "value": "?",
                "api_type": "?"
              },
              "credit_hours": {
                "value": "?",
                "api_type": "?"
              },
              "grade": {
                "value": "?",
                "api_type": "?"
              },
              "byu_id": {
                "value": "?",
                "api_type": "?"
              },
              "net_id": {
                "value": "?",
                "api_type": "?"
              },
              "student_name": {
                "value": "Doug Walker",
                "api_type": "related",
                "related_resource": "students",
              },
              "email": {
                "value": "?",
                "api_type": "?"
              },
              "added_date_time": {
                "value": "?",
                "api_type": "system"
              },
              "class_standing": {
                "value": "?",
                "api_type": "?"
              }
            }
          ]
        },
        "linked_classes": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/linked-classes",
              "method": "GET"
            },
            { "rel": "linked_classes.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/linked-classes?{query_parameters}",
              "method": "GET"
            },
            { "rel": "linked_classes.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/linked-classes",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/linked-classes/585241162",
                  "method": "GET"
                },
                { "rel": "linked_classes.unlink",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/linked-classes/11463,001,003",
                  "method": "DELETE"
                },
                { "rel": "classes.info",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,001,003",
                  "method": "GET"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "teaching_area": {
                "value": "NURS",
                "api_type": "related",
                "related_resource": "courses"
                "descr": "Nursing",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/teaching-areas"
              },
              "catalog_number": {
                "value": "295",
                "api_type": "related",
                "related_resource": "courses"
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-numbers?year_term=20151&teaching_area=NURS"
              },
              "catalog_suffix": {
                "value": "",
                "api_type": "related",
                "related_resource": "courses",
                "descr": "",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-suffixes"
              },
              "course_description": {
                "value": "Fund Nurs Concepts & Care",
                "api_type": "related",
                "related_resource": "courses"
              },
              "section_type": {
                "value": "DAY",
                "api_type": "modifiable",
                "descr": "Day Classes",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/section-types"
              },
              "linked_curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "linked_title_code": {
                "value": "001",
                "api_type": "key"
              },
              "linked_section_number": {
                "value": "003",
                "api_type": "key"
              },
              "linked_teaching_area": {
                "value": "NURS",
                "api_type": "related",
                "related_resource": "courses"
                "descr": "Nursing",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/teaching-areas"
              },
              "linked_catalog_number": {
                "value": "296",
                "api_type": "related",
                "related_resource": "courses"
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-numbers?year_term=20151&teaching_area=NURS"
              },
              "linked_catalog_suffix": {
                "value": "",
                "api_type": "related",
                "related_resource": "courses",
                "descr": "",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-suffixes"
              },
              "linked_course_description": {
                "value": "Fund Nurs Liabilities",
                "api_type": "related",
                "related_resource": "courses"
              },
              "linked_section_type": {
                "value": "DAY",
                "api_type": "modifiable",
                "descr": "Day Classes",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/section-types"
              }
            }
          ]
        },
        "notes": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/notes",
              "method": "GET"
            },
            { "rel": "notes.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/notes?{query_parameters}",
              "method": "GET"
            },
            { "rel": "notes.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/notes",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/notes/?",
                  "method": "GET"
                },
                { "rel": "notes.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/notes/?",
                  "method": "DELETE"
                },
                { "rel": "notes.modify",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/notes/?",
                  "method": "PUT"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "note_type": {
                "value": "?"
                "api_type": "?"
              },
              "note_value": {
                "value": "?"
                "api_type": "?"
              },
              "updated_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "updated_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              }
            }
          ]
        },
        "permission_to_add_codes": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/permission-to-add-codes",
              "method": "GET"
            },
            { "rel": "permission_to_add_codes.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/permission-to-add-codes?{query_parameters}",
              "method": "GET"
            },
            { "rel": "permission_to_add_codes.allocate",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/permission-to-add-codes?count=",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/permission-to-add-codes/?",
                  "method": "GET"
                },
                { "rel": "permission_to_add_codes.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/permission-to-add-codes/?",
                  "method": "DELETE"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "group_number": {
                "value": "?",
                "api_type": "?"
              },
              "token_value": {
                "value": "?",
                "api_type": "?"
              },
              "created_by_id": {
                "value": "584584584",
                "api_type": "operational",
                "descr": "Joe Faculty"
              },
              "created_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              },
              "redeemed_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "redeemed_dttm": {
                "value": "2014-05-14T13:45:53.20Z",
                "api_type": "operational"
              }
            }
          ]
        },
        "prerequisites": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/prerequisites",
              "method": "GET"
            },
            { "rel": "prerequisites.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/prerequisites?{query_parameters}",
              "method": "GET"
            },
            { "rel": "prerequisites.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/prerequisites",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/prerequisites/?",
                  "method": "GET"
                },
                { "rel": "prerequisites.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/prerequisites/?",
                  "method": "DELETE"
                },
                { "rel": "prerequisites.modify",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/prerequisites/?",
                  "method": "PUT"
                }
              ],
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "seq_num": {
                "value": 1,
                "api_type": "key"
              },
              "enforced": {
                "value": "Y",
                "api_type": "modifiable"
              },
              "instructor_approval": {
                "value": "N",
                "api_type": "modifiable"
              },
              "effective_date": {
                "value": "2014-01-01",
                "api_type": "modifiable"
              },
              "expired_date": {
                "value": "2016-05-01",
                "api_type": "modifiable"
              },
              "updated_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "updated_dttm": {
                "value": "2013-11-15",
                "api_type": "operational"
              },
              "prerequisite_list": [
                { "curriculum_id": {
                    "value": "09975",
                    "api_type": "modifiable"
                  },
                  "title_code": {
                    "value": "001",
                    "api_type": "modifiable"
                  },
                  "group_num": {
                    "value": 1,
                    "api_type": "modifiable"
                  },
                  "order_in_group": {
                    "value": 1,
                    "api_type": "modifiable"
                  }
                },
                { "curriculum_id": {
                    "value": "10146",
                    "api_type": "modifiable"
                  },
                  "title_code": {
                    "value": "002",
                    "api_type": "modifiable"
                  },
                  "group_num": {
                    "value": 1,
                    "api_type": "modifiable"
                  },
                  "order_in_group": {
                    "value": 2,
                    "api_type": "modifiable"
                  }
                }
              ]
            }
          ]
        },
        "section_headers": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/section-headers",
              "method": "GET"
            },
            { "rel": "section_headers.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/section-headers?{query_parameters}",
              "method": "GET"
            },
            { "rel": "section_headers.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/section-headers",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/section-headers/?",
                  "method": "GET"
                },
                { "rel": "section_headers.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/section-headers/?",
                  "method": "DELETE"
                },
                { "rel": "section_headers.modify",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/section-headers/?",
                  "method": "PUT"
                }
              ],
              "header_type": {
                "value": "?",
                "api_type": "?"
              },
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "type": "key"
              },
              "title_code": {
                "value": "000",
                "type": "key"
              },
              "section_number": {
                "value": "001",
                "type": "key"
              },
              "dept_name":{
                "value": "?",
                "api_type": "?"
              }
              "sequence_number":{
                "value": "?",
                "api_type": "?"
              }
              "message_type":{
                "value": "?",
                "api_type": "?"
              }
              "display_flag":{
                "value": "?",
                "api_type": "?"
              }
              "header_text":{
                "value": "?",
                "api_type": "?"
              }
              "updated_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "updated_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              }
            }
          ]
        },
        "supplemental_counts": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/supplemental-counts",
              "method": "GET"
            },
            { "rel": "supplemental_counts.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/supplemental-counts",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/supplemental-counts/?",
                  "method": "GET"
                },
                { "rel": "supplemental_counts.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/supplemental-counts/?",
                  "method": "DELETE"
                },
                { "rel": "supplemental_counts.modify",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/supplemental-counts/?",
                  "method": "PUT"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "count_category": {
                "value": "?",
                "api_type": "?"
              },
              "count_type": {
                "value": "?",
                "api_type": "?"
              },
              "count_catsize": {
                "value": "?",
                "api_type": "?"
              },
              "total_enrolled": {
                "value": "?",
                "api_type": "?"
              },
              "add_count_cum": {
                "value": "?",
                "api_type": "?"
              },
              "drop_count_cum": {
                "value": "?",
                "api_type": "?"
              },
              "total_requests": {
                "value": "?",
                "api_type": "?"
              },
              "updated_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "updated_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              }
            }
          ]
        },
        "waitlisted_students": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-students",
              "method": "GET"
            },
            { "rel": "waitlisted_students.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-students?{query_parameters}",
              "method": "GET"
            },
            { "rel": "waitlisted_students.add",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-students",
              "method": "PUT"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-students/?",
                  "method": "GET"
                },
                { "rel": "waitlisted_students.delete",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-students/?",
                  "method": "DELETE"
                },
                { "rel": "waitlisted_students.modify",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-students/?",
                  "method": "PUT"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "person_id": {
                "value": "?",
                "api_type": "?"
              },
              "student_name": {
                "value": "?",
                "api_type": "?"
              },
              "date_requested": {
                "value": "?",
                "api_type": "?"
              },
              "sequencer": {
                "value": "?",
                "api_type": "?"
              },
              "teaching_area": {
                "value": "NURS",
                "api_type": "related",
                "related_resource": "courses"
                "descr": "Nursing",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/teaching-areas"
              },
              "catalog_number": {
                "value": "295",
                "api_type": "related",
                "related_resource": "courses"
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-numbers?year_term=20151&teaching_area=NURS"
              },
              "catalog_suffix": {
                "value": "",
                "api_type": "related",
                "related_resource": "courses",
                "descr": "",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-suffixes"
              },
              "credit_hours": {
                "value": "?",
                "api_type": "?"
              },
              "size_mix_category": {
                "value": "?",
                "api_type": "?"
              },
              "added_by_id": {
                "value": "585241162",
                "api_type": "operational",
                "descr": "Bugs Bunny Ithaca"
              },
              "added_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              },
              "add_error_message":{
                "value": "?",
                "api_type": "?"
              },
              "error_dttm": {
                "value": "2014-05-11T13:45:53.20Z",
                "api_type": "operational"
              }
            }
          ]
        },
        "enrolled_student_logs": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-student-logs",
              "method": "GET"
            },
            { "rel": "enrolled_student_logs.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-student-logs?{query_parameters}",
              "method": "GET"
            },
            { "rel": "enrolled_student_logs.prev",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-student-logs?page_start=1,page_size=50",
              "method": "GET"
            },
            { "rel": "enrolled_student_logs.next",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-student-logs?page_start=101,page_size=50",
              "method": "GET"
            }
          ],
          "metadata": {
            "collection_size": 105,
            "page_start": "1,
            "page_end": 50,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/enrolled-student-logs/585241162,?",
                  "method": "GET"
                },
                { "rel": "students.info",
                  "href": "https://api.byu.edu/rest/v1/universityapi/students/585241162",
                  "method": "GET"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "person_id": {
                "value": "?",
                "api_type": "?"
              },
              "credit_hours": {
                "value": "?",
                "api_type": "?"
              },
              "grade": {
                "value": "?",
                "api_type": "?"
              },
              "student_name": {
                "value": "?",
                "api_type": "?"
              },
              "log_action": {
                "value": "?",
                "api_type": "?"
              },
              "log_by_id": {
                "value": "?",
                "api_type": "?"
              },
              "log_dttm": {
                "value": "?",
                "api_type": "?"
              }
            }
          ]
        },
        "waitlisted_student_logs": {
          "links": [
            { "rel": "self",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-student-logs",
              "method": "GET"
            },
            { "rel": "waitlisted_student_logs.filter",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-student-logs?{query_parameters}",
              "method": "GET"
            },
            { "rel": "waitlisted_student_logs.prev",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-student-logs?page_start=1,page_size=50",
              "method": "GET"
            },
            { "rel": "waitlisted_student_logs.next",
              "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-student-logs?page_start=101,page_size=50",
              "method": "GET"
            }
          ],
          "metadata": {
            "collection_size": 3,
            "page_start": 1,
            "page_end": 3,
            "page_size": 50,
            "default_page_size": 50,
            "max_page_size": 1000
          },
          "values": [
            { "links": [
                { "rel": "self",
                  "href": "https://api.byu.edu/rest/v1/universityapi/classes/20151,11463,000,001/waitlisted-student-logs/585241162",
                  "method": "GET"
                },
                { "rel": "students.info",
                  "href": "https://api.byu.edu/rest/v1/universityapi/students/585241162",
                  "method": "GET"
                }
              ],
              "credit_institution": {
                "value": "BYU PROVO",
                "api_type": "key",
                "descr": "BYU Provo Campus",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/credit-institutions"
              },
              "year_term": {
                "value": "20151",
                "api_type": "key",
                "descr": "Winter 2015",
                "long_descr": "Winter Semester 2015",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/year-terms"
              },
              "curriculum_id": {
                "value": "11463",
                "api_type": "key"
              },
              "title_code": {
                "value": "000",
                "api_type": "key"
              },
              "section_number": {
                "value": "001",
                "api_type": "key"
              },
              "person_id": {
                "value": "?",
                "api_type": "?"
              },
              "student_name": {
                "value": "?",
                "api_type": "?"
              },
              "teaching_area": {
                "value": "NURS",
                "api_type": "related",
                "related_resource": "courses"
                "descr": "Nursing",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/teaching-areas"
              },
              "catalog_number": {
                "value": "295",
                "api_type": "related",
                "related_resource": "courses"
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-numbers?year_term=20151&teaching_area=NURS"
              },
              "catalog_suffix": {
                "value": "",
                "api_type": "related",
                "related_resource": "courses",
                "descr": "",
                "domain": "https://api.byu.edu/rest/v1/universityapi/meta/catalog-suffixes"
              },
              "credit_hours": {
                "value": "?",
                "api_type": "?"
              },
              "log_action": {
                "value": "?",
                "api_type": "?"
              },
              "log_by_id": {
                "value": "?",
                "api_type": "?"
              },
              "log_dttm": {
                "value": "?",
                "api_type": "?"
              }
            }
          ]
        }
      }
    ]
  }
}
