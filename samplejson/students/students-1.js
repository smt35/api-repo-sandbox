//To be focused on: the student basic subresource and the enrolled_classes subresource


{//This is the "students" object. It doesn't need a wrapper
    "links": {
        "students.info" : {
            "rel" : "self",
            "href": "",
            "http_method" : "GET",
            "title" : "",
        },
        "students.next" : {
            "rel" : "students.next",
            "href" : "GET",
            "http_method" : "GET",
            "title" : ""
        },
        "students.prev" : {
            "rel" : "students.prev",
            "href" : "GET",
            "http_method" : "GET",
            "title" : ""
        }
        //we probably don't need an "add student" resource
        //unless we have something like independent study weirdom
    },
    ////links related to the collection
    //next/previous collection, get myself again, etc
    //add a item to the collection
    
    //self - how do I get me?
    //name students.info
    //rel - self
    //next - the next PAGE of students
    //previous - the previous PAGE
    "metadata": {},
    "values": [
      { 
        "basic": {
            //things only related to this particular student
            "links": {
                //Only apply to this item of the collection
                //edit/delete this item
                //etc
            },
            "student_id" : {
                "value" : "314",
                "api_type" : "system",
                "key" : true,
            },
            "student_name" : {
                "value" : "taylor",
                "api_type" : "related",//This is actually defined under something else
                "related_resource" : "person",//this is where we go to update the name    
            },
            "byu_id" : {
                "value" : "093559394",
                "api_type" : "related",
                "related_resource" : "identity"
            },
            "net_id" : {
                "value" : "tcowley0",
                "api_type" : "related",
                "related_resource" : "identity"
            },
            "email_address" : {
                "value" : "taycowley@gmail.com",
                "api_type" : "related",
                "related_resource" : "identity"
            },
            "student_status" : {//This one is kindof complex...
                //talk to... steve and lots of people
                "value" : "EXPELLED",
                "api_type" : "",
            },
            "current_hours" : {
                "value" : 4,
                "api_type" : "derived"
            },
            "primary_major" : {
                "value" : "314159",
                "api_type" : "derived"
                "description" : "Computer Engineering"
            },
            "as_of_date" : {
            //we might want to make this an object with all the time-sensitive information in it    
            },
            "restricted" : {
                "value" : "false"
            }
        },
        "confidential_information" : {
            //things like GPA, etc
        },
        "enrolled_classes": {   //all classes that I have ever been enrolled in
          "links": {
                "enrolled_classes.info": {
                    "rel" : "self",
                    "href" : "",
                    "http_method" : "GET",
                    "title": ""
                },
                "enrolled_classed.add" : {
                    "rel" : "enrolled_classes.add",
                    "href" : "",
                    "http_method" : "GET",
                    "title" : ""
                }
              
          },
          "metadata": {},
          "values": [
            "links": {
              "enrolled_classes.info": {
                "rel": "self",
                "href": "https://api.byu.edu/byuapi/students/{identity_id}/enrolled_classes/{year_term},{curriculum_id},{title_code},{section_number}",
                "http_method": "GET",
                "title": "enrolled_classes.getEnrollment"
              },
              "enrolled_classes.drop": {
                "rel": "enrolled_classes.drop",
                "href": "https://api.byu.edu/byuapi/students/{identity_id}/enrolled_classes/{year_term},{curriculum_id},{title_code},{section_number}",
                "http_method": "DELETE",
                "title": "enrolled_classes.dropEnrollment"
              },
              "enrolled_classes.dropImpactInfo": {
                "rel": "enrolled_classes.dropImpactInfo",
                "href": "https://api.byu.edu/byuapi/students/{identity_id}/enrolled_classes/{year_term},{curriculum_id},{title_code},{section_number}?drop=ImpactInfo",
                "http_method": "GET",
                "title": "enrolled_classes.getDropImpactInfo"
              },
              "enrolled_classes.dropWithImpact": {
                "rel": "enrolled_classes.dropWithImpact",
                "href": "https://api.byu.edu/byuapi/students/{identity_id}/enrolled_classes/{year_term},{curriculum_id},{title_code},{section_number}?drop=WithImpact",
                "http_method": "DELETE",
                "title": "enrolled_classes.dropWithImpact"
              },
              "persons.info": {
                "rel": "persons.info",
                "href": "https://api.byu.edu/byuapi/persons/{person_id}",
                "http_method": "GET",
                "title": "classes.getPerson"
              },
              "classes.info": {
                "rel": "classes.info",
                "href": "https://api.byu.edu/byuapi/classes/{year_term},{curriculum_id},{title_code},{section_number}",
                "http_method": "GET",
                "title": "classes.getClass"
              },
              "courses.info": {
                "rel": "courses.info",
                "href": "https://api.byu.edu/byuapi/courses/{curriculum_id},{title_code}",
                "http_method": "GET",
                "title": "courses.getCourse"
              },
              "curriculum_units.info": {
                "rel": "curriculum_units.info",
                "href": "https://api.byu.edu/byuapi/curriculum_units/{curriculum_id}",
                "http_method": "GET",
                "title": "courses.getCurriculum"
              }
            },
            "student_id": {
              "value": "string(9)",
              "api_type": "key",
              "description": "string(30)"
            },
            "credit_institution": { //Probably to be thrown out
              "value": "P",
              "api_type": "key",
              "description": "BYU-PROVO",
              "domain": "?"
            },
            "year_term": {
              "value": "20145",
              "api_type": "key",
              "description": "Fall 2014",
              "long_description": "Fall Semester 2014",
              "domain": "?"
            },
            "curriculum_id": {
               "value": "string(5)",
               "api_type": "key"
            },
            "title_code": {
               "value": "string(3)",
               "api_type": "key"
            },
            "section_number": {
               "value": "string(3)",
               "api_type": "key"
            },
            "dept_name": {
               "value": "ECEN",
               "api_type": "related",
               "related_resource" : "classes",
               "description": "Electrical and Computer Engineering"
            },
            "catalog_number": {
               "value": "string(3)",
               "api_type": "read-only"
            },
            "catalog_suffix": {
               "value": "string(2)",
               "api_type": "read-only"
            },
            "transcript_title": {
               "value": "string(30)",
               "api_type": "read-only"
            },
            "credit_hours": {
               "value": "number(4.2)",
               "api_type": "modifiable"
            },
            "grade": {
               "value": "string(5)",
               "api_type": "modifiable",
               "domain": "?"
            },
            "audit_status" : {
                "value" : false,
                "api_type" : "derived"
            }
            "class_repeated": "string(1)",
            "honors_flag": "string(1)",
            "service_learning": "string(1)",
            "start_date": "date",
            "end_date": "date",
            "credit_type": "string(10)",
            "credit_type_descr": "string(15)",
            "section_type" : {  //An example of a fixed-up field.
                "value" : "SLC",
                "api_type" : "related",
                "related_resource" : "classes",
                "description" : "Salt Lake Center"
            }
            "lab_quiz_section": "string(1)",
            "lab_quiz_section_descr": "string(15)",
            "date_graded": "date",
            "graded_by_id": "string(9)",
            "graded_by_name": "string(50)",
            "date_added": "date",
            "added_by_id": "string(9)",
            "added_by_name": "string(50)",
            "add_drop_card": "string(1)",
            "envelope_type": "string(10)",
            "envelope_id": "string(5)",
            "date_time_updated": "date",
            "updated_by_id": "string(9)",
            "updated_by_name": "string(50)",
            "instructors": [
              { "instructor_role": "string(30)",
                "person_id": "string(9)",
                "byu_id": "string(9)",
                "net_id": "string(15)",
                //"surname": "string(40)",
                //"rest_of_name": "string(80)",
                //"suffix": "string(10)",
                //"surname_position": "string(1)",
                //"preferred_first_name": "string(25)",
                "sort_name": "string(50)",
                "office_address": {
                  "address_line_1": "string(40)",
                  "address_line_2": "string(40)",
                  "address_line_3": "string(40)",
                  "address_line_4": "string(40)",
                  "country_code": "string(3)",
                  "country": "string(30)",
                  "city": "string(30)",
                  "state_code": "string(6)",
                  "state": "string(30)",
                  "postal_code": "string(20)",
                  "contact_status": "string(1)",
                  "unlisted": "string(1)",
                  "campus_address_f": "string(1)"
                },
                "instructor_email": {
                  "email_address": "string(70)",
                  "contact_status": "string(1)",
                  "unlisted": "string(1)"
                },
                "instructor_phone": {
                  "phone_type": "string(3)",
                  "phone_type_desc": "string(30)",
                  "phone_number": "string(30)",
                  "type_of_device": "string(10)",
                  "country_code": "string(3)",
                  "country": "string(30)",
                  "mobile": "string(1)",
                  "contact_status": "string(1)",
                  "unlisted": "string(1)",
                  "primary_f": "string(1)",
                  "contact_person": "string(30)"
                },
                "links": [
                  { "ref": "instructor.info",
                    "href": "https://api.byu.edu/rest/v1/instructors/:person_id",
                    "http_method": "GET"
                  }
                ]
              }
            ],
            "schedules": [
              { "sequence_number": "string(3)",
                "location_id": {
                  "building": "string(4)",
                  "room": "string(5)"
                }
                //we should do this
                "days_taught" : {
                    "value" : "MW",
                    "api_type" : "derived"
                },
                "time_taught" : {
                    "value" : some_time,
                    "api_type" : "derived"
                }
                //instead of all of these
                "mon": "string(1)",
                "tue": "string(1)",
                "wed": "string(1)",
                "thu": "string(1)",
                "fri": "string(1)",
                "sat": "string(1)",
                "sun": "string(1)",
                "use_start_date": "date",
                "use_end_date": "date",
                "begin_time": "string(4)",
                "end_time": "string(4)",
                "links": [
                  { "rel": "schedule.info",
                    "hrel": "https://api.byu.edu/rest/v1/scheduled-classes/:class-id/schedules",
                    "http_method": "GET"
                  },
                  { "rel": "schedule.modify",
                    "hrel": "https://api.byu.edu/rest/v1/scheduled-classes/:class_id/schedules",
                    "http_method": "PUT"
                  },
                  { "rel": "location.info",
                    "hrel": "https://api.byu.edu/rest/v1/location/:location_id",
                    "http_method": "GET"
                  }
                ]
              }
            ]
          },
        "waitlist": {
          "person_id": "string(9)",
          "year_term": "string(5)",
          "section_id": {
            "year_term": "string(5)",
            "course_id": {
              "curriculum_id": "string(5)",
              "title_code": "string(3)"
            },
            "section_number": "string(3)"
          },
          "credit_hours": "number(4.2)",
          "waitlist_derived": {
            "year_term_short": "string(11)",
            "year_term_long": "string(20)",
            "date_requested": "dateTime",
            "sequencer": "number(12)"
            "dept_name": "string(5)",
            "catalog_number": "string(3)",
            "catalog_suffix": "string(1)",
            "transcript_title": "string(30)",
            "size_mix_category": "string(30)",
            "added_by_id": "string(9)",
            "added_by_name": "string(50)",
            "add_error_message": "string(500)",
            "error_timestamp": "dateTime"
          }
        },
        "student_programs": {
          "links": {},
          "metadata": {},
          "values": [
            "links": {},
            "student_id": "string(9)"
            "program_id": "string(?)",
            "declared_date": "date",
            "prog_eff_date": "date"
          ]
        },
        "academic_plans": {
          "links": {},
          "metadata": {},
          "values": [
            "links": {},
            "student_id": {
              "value": "string(9)",
              "api_type": "key",
              "description": "string(30)"
            },
            "planned_year_term": {
              "value": "20145",
              "api_type": "key",
              "description": "Fall 2014",
              "long_description": "Fall Semester 2014",
              "domain": "?"
            },
            "credit_institution?": "string(30)",
            "curriculum_id": {
              "value": "string(5)",
              "api_type": "key"
            },
            "title_code": {
              "value": "string(3)",
              "api_type": "key"
            },
            "dept_name": {
              "value": "string(5)",
              "api_type": "read-only",
              "description": "string(30)"
            },
            "catalog_number": {
              "value": "string(3)",
              "api_type": "read-only"
            },
            "catalog_suffix": {
              "value": "string(2)",
              "api_type": "read-only"
            },
            "transcript_title": {
              "value": "string(30)",
              "api_type": "read-only"
            },
            "credit_hours": {
              "value": "number(4.2)",
              "api_type": "read-only"
            },
            "start_date": "date",
            "end_date": "date",
            "section_type": {
              "value": "string(10)",
              "api_type": "read-only",
              "description": "string(30)",
              "domain": "?"
            },
            "lab_quiz_section": {
              "value": "string(1)",
              "api_type": "read-only",
              "description": "string(30)",
              "domain": "?"
            },
            "prereqs_required?": {
              "value": "string(1)",
              "api_type": "derived"
            },
            "program_required": {
              "program_id": "?",
              "requirement_id": "?"
            },
            "ge_required": {
              "program_id": "?",
              "requirement_id": "?"
            },
          ]
        },
        "suggested_classes": {
          "links": {
            "suggested_classes.info": {
              "rel": "self",
              "href": "https://api.byu.edu/byuapi/students/{identity_id}/suggested_classes",
              "http_method": "GET",
              "title": "enrolled_classes.getSuggestedClasses"
            }
          },
          "metadata": {},
          "values": [
            "links": {
              "suggested_classes.info": {
                "rel": "self",
                "href": "https://api.byu.edu/byuapi/students/{identity_id}/suggested_classes/{year_term},{curriculum_id},{title_code},{section_number}",
                "http_method": "GET",
                "title": "suggested_classes.getSuggestedClass"
              },
              "lottery.preregister": {
                "rel": "lottery.preregister",
                "href": "https://api.byu.edu/byuapi/students/{identity_id}/lottery",
                "http_method": "PUT",
                "title": "lottery.addRequest"
              },
              "enrolled_classes.add": {
                "rel": "enrolled_classes.add",
                "href": "https://api.byu.edu/byuapi/students/{identity_id}/enrolled_classes",
                "http_method": "PUT",
                "title": "enrolled_classes.addEnrollment"
              },
              "waitlists.enqueue": {
                "rel": "waitlists.enqueue",
                "href": "https://api.byu.edu/byuapi/students/{identity_id}/waitlists",
                "http_method": "PUT",
                "title": "waitlists.addStudent"
              },
              "classes.info": {
                "rel": "classes.info",
                "href": "https://api.byu.edu/byuapi/classes/{year_term},{curriculum_id},{title_code},{section_number}",
                "http_method": "GET",
                "title": "classes.getClass"
              },
              "courses.info": {
                "rel": "courses.info",
                "href": "https://api.byu.edu/byuapi/courses/{curriculum_id},{title_code}",
                "http_method": "GET",
                "title": "courses.getCourse"
              },
              "curriculum_units.info": {
                "rel": "curriculum_units.info",
                "href": "https://api.byu.edu/byuapi/curriculum_units/{curriculum_id}",
                "http_method": "GET",
                "title": "courses.getCurriculum"
              }
            },
            "student_id": {
              "value": "string(9)",
              "api_type": "key",
              "description": "string(30)"
            },
            "credit_institution": {
              "value": "string(15)",
              "api_type": "key",
              "description": "string(30)",
              "domain": "?"
            },
            "year_term": {
              "value": "20145",
              "api_type": "key",
              "description": "Fall 2014",
              "long_description": "Fall Semester 2014",
              "domain": "?"
            },
            "curriculum_id": {
              "value": "string(5)",
              "api_type": "key"
            },
            "title_code": {
              "value": "string(3)",
              "api_type": "key"
            },
            "section_number": {
              "value": "string(3)",
              "api_type": "key"
            },
            "dept_name": {
              "value": "string(5)",
              "api_type": "read-only",
              "description": "string(30)"
            },
            "catalog_number": {
              "value": "string(3)",
              "api_type": "read-only"
            },
            "catalog_suffix": {
              "value": "string(2)",
              "api_type": "read-only"
            },
            "transcript_title": {
              "value": "string(30)",
              "api_type": "read-only"
            },
            "fixed_or_variable": {
              "value": "string(1)",
              "api_type": "read-only",
              "description": "string(10)"
            },
            "credit_hours": {
              "value": "number(4.2)",
              "api_type": "read-only"
            },
            "minimum_credit_hours": {
              "value": "number(4.2)",
              "api_type": "read-only",
            },
            "honors_flag": "string(1)",
            "service_learning": "string(1)",
            "start_date": "date",
            "end_date": "date",
            "credit_type": {
              "value": "string(10)",
              "api_type": "read-only",
              "description": "string(30)",
              "domain": "?"
            },
            "section_type": {
              "value": "string(10)",
              "api_type": "read-only",
              "description": "string(30)",
              "domain": "?"
            },
            "lab_quiz_section": {
              "value": "string(1)",
              "api_type": "read-only",
              "description": "string(30)",
              "domain": "?"
            },
            "repeat_class": {
              "year_term": {
                "value": "string(5)",
                "api_type": "derived",
                "description": "Fall 2014",
                "long_description": "Fall Semester 2014",
                "domain": "?"
              },
              "section_number": {
                "value": "string(3)",
                "api_type": "derived"
              },
              "grade": {
                "value": "string(5)",
                "api_type": "derived"
              }
            },
            "plan_year_term": {
              "value": "string(5)",
              "api_type": "derived",
              "description": "Fall 2014",
              "long_description": "Fall Semester 2014",
              "domain": "?"
            },
            "prereqs_required": {
              "value": "string(1)",
              "api_type": "derived"
            },
            "program_required": {
              "program_id": "?",
              "requirement_id": "?"
            },
            "ge_required": {
              "program_id": "?",
              "requirement_id": "?"
            },
            "seats_available": {
              "value": "number(4)",
              "api_type": "derived"
            },
            "instructors": [
              { "instructor_role": "string(30)",
                "person_id": "string(9)",
                "byu_id": "string(9)",
                "net_id": "string(15)",
                "surname": "string(40)",
                "rest_of_name": "string(80)",
                "suffix": "string(10)",
                "surname_position": "string(1)",
                "preferred_first_name": "string(25)",
                "sort_name": "string(50)",
                "office_address": {
                  "address_line_1": "string(40)",
                  "address_line_2": "string(40)",
                  "address_line_3": "string(40)",
                  "address_line_4": "string(40)",
                  "country_code": "string(3)",
                  "country": "string(30)",
                  "city": "string(30)",
                  "state_code": "string(6)",
                  "state": "string(30)",
                  "postal_code": "string(20)",
                  "contact_status": "string(1)",
                  "unlisted": "string(1)",
                  "campus_address_f": "string(1)"
                },
                "instructor_email": {
                  "email_address": "string(70)",
                  "contact_status": "string(1)",
                  "unlisted": "string(1)"
                },
                "instructor_phone": {
                  "phone_type": "string(3)",
                  "phone_type_desc": "string(30)",
                  "phone_number": "string(30)",
                  "type_of_device": "string(10)",
                  "country_code": "string(3)",
                  "country": "string(30)",
                  "mobile": "string(1)",
                  "contact_status": "string(1)",
                  "unlisted": "string(1)",
                  "primary_f": "string(1)",
                  "contact_person": "string(30)"
                },
                "links": [
                  { "ref": "instructor.info",
                    "href": "https://api.byu.edu/rest/v1/instructors/:person_id",
                    "http_method": "GET"
                  },
                  { "ref": "instructor.assign",
                    "href": "https://api.byu.edu/rest/v1/scheduled-classes/:class_id/instructors",
                    "http_method": "PUT"
                  }
                ]
              }
            ],
            "schedules": [
              { "sequence_number": "string(3)",
                "location_id": {
                  "building": "string(4)",
                  "room": "string(5)"
                }
                "mon": "string(1)",
                "tue": "string(1)",
                "wed": "string(1)",
                "thu": "string(1)",
                "fri": "string(1)",
                "sat": "string(1)",
                "sun": "string(1)",
                "use_start_date": "date",
                "use_end_date": "date",
                "begin_time": "string(4)",
                "end_time": "string(4)",
                "links": [
                  { "rel": "schedule.info",
                    "hrel": "https://api.byu.edu/rest/v1/scheduled-classes/:class-id/schedules",
                    "http_method": "GET"
                  },
                  { "rel": "schedule.modify",
                    "hrel": "https://api.byu.edu/rest/v1/scheduled-classes/:class_id/schedules",
                    "http_method": "PUT"
                  },
                  { "rel": "location.info",
                    "hrel": "https://api.byu.edu/rest/v1/location/:location_id",
                    "http_method": "GET"
                  }
                ]
              }
            ]
          ]
        },
        "enrollment_logs": {
      "future_enrollment_logs": {}
      "current_enrollment_logs": {}
      "waitlist_log": {}
      "completed_enrollment_logs": {}
    },
        "waitlist_logs": {}
      }
    ]
  }
}
