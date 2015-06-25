{
  "links": {
    "academicunits.info": {
      "rel": "self",
      "href": "https://api.byu.edu/byuapi/academicunits?page_start=51,page_size=50",
      "method": "GET",
      "title": "academicunits.getAcademicUnits"
    },
    "academicunits.prev": {
      "rel": "academicunits.prev",
      "href": "https://api.byu.edu/byuapi/academicunits?page_start=1,page_size=50",
      "method": "GET",
      "title": "academicunits.getAcademicUnits"
    },
    "academicunits.next": {
      "rel": "academicunits.next",
      "href": "https://api.byu.edu/byuapi/academicunits?page_start_101,page_size=50",
      "method": "GET",
      "title": "academicunits.getAcademicUnits"
    },
    "academicunits.create": {
      "rel": "academicunits.create",
      "href": "https://api.byu.edu/byuapi/academicunits",
      "method": "POST",
      "title": "academicunits.createAcademicUnit"
    }
  },
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
      "basic",
      "assigned_programs",
      "assigned_teaching_areas",
      "contacts",
      "sub_units"
    ],
    "default_field_sets": [
      "basic",
      "sub_units"
    ],
    "contexts": {
      "all": [
        "basic",
        "assigned_programs",
        "assigned_teaching_areas",
        "contacts",
        "sub_units"
      ]
    }
  },
  "values": [
    {
      "basic": {
        "links": {
          "academicunits.info": {
            "rel": "self",
            "href": "https://api.byu.edu/byuapi/academicunits/1115",
            "method": "GET",
            "title": "academicunits.getAcademicUnit"
          },
          "academicunits.modify": {
            "rel": "self",
            "href": "https://api.byu.edu/byuapi/academicunits/1115",
            "method": "PUT",
            "title": "academicunits.modifyAcademicUnit"
          },
          "academicunits.delete": {
            "rel": "self",
            "href": "https://api.byu.edu/byuapi/academicunits/1115",
            "method": "DELETE",
            "title": "academicunits.deleteAcademicUnit"
          },
          "academicunitsparent.info": {
            "rel": "academicunitsparent.info",
            "href": "https://api.byu.edu/byuapi/academicunits/1008",
            "method": "GET",
            "title": "academicunits.getAcademicUnitParent"
          }
        },
        "academic_unit_id": {
          "value": "1115",
          "api_type": "system",
          "key": true,
          "display_label": "Unit ID"
        },
        "effective_date": {
          "value": "2001-01-25",
          "api_type": "modifiable",
          "display_label": "Effective"
        },
        "expired_date": {
          "value": "2999-12-31",
          "api_type": "modifiable"
        },
        "unit_name": {
          "value": "Instructional Psych&Tech",
          "api_type": "modifiable"
        },
        "official_name": {
          "value": "Instructional Psychology and Technology, Department of",
          "api_type": "modifiable"
        },
        "unit_type": {
          "value": "DEPARTMENT",
          "api_type": "modifiable",
          "domain": "https://api.byu.edu/byuapi/meta/academic_unit_types"
        },
        "parent_academic_unit_id": {
          "value": "1008",
          "api_type": "related",
          "related_resource": "academicunitsparent"
        },
        "parent_academic_unit_name": {
          "value": "Education, David O. McKay School of",
          "api_type": "related",
          "related_resource": "academicunitsparent"
        },
        "old_unit_id": {
          "value": "3554",
          "api_type": "modifiable"
        }
      },
      "assigned_programs": {
        "links": {
          "assigned_programs.info": {
            "rel": "self",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_programs?page_start=51,page_size=50",
            "method": "GET",
            "title": "academicunits.getAssignedPrograms"
          },
          "assigned_programs.prev": {
            "rel": "assigned_programs.prev",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_programs?page_start=1,page_size=50",
            "method": "GET",
            "title": "academicunits.getAssignedPrograms"
          },
          "assigned_programs.next": {
            "rel": "assigned_programs.next",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_programs?page_start=101,page_size=50",
            "method": "GET",
            "title": "academicunits.getAssignedPrograms"
          },
          "assigned_programs.add": {
            "rel": "assigned_programs.add",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_programs",
            "method": "POST",
            "title": "academicunits.addAssignedProgram"
          }
        },
        "metadata": {
          "collection_size": 3,
          "page_start": 1,
          "page_end": 3,
          "page_size": 50,
          "default_page_size": 50,
          "max_page_size": 1000
        },
        "values": [
          {
            "links": {
              "assigned_programs.info": {
                "rel": "self",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_programs/30815",
                "method": "GET",
                "title": "assigned_programs.getAssignedProgram"
              },
              "assigned_programs.modify": {
                "rel": "assigned_programs.modify",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_programs/30815",
                "method": "PUT",
                "title": "assigned_programs.getAssignedProgram"
              },
              "assigned_programs.delete": {
                "rel": "assigned_programs.delete",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_programs/30815",
                "method": "DELETE",
                "title": "assigned_programs.getAssignedProgram"
              },
              "identity.info": {
                "rel": "identity.info",
                "href": "https://api.byu.edu/byuapi/identity/111111111",
                "method": "GET",
                "title": "assigned_programs.getUpdatedBy"
              }
            },
            "academic_program_id": {
              "value": "30815",
              "api_type": "system",
              "key": true
            },
            "effective_date": {
              "value": "2001-01-01",
              "api_type": "modifiable"
            },
            "expired_date": {
              "value": "2099-12-31",
              "api_type": "modifiable"
            },
            "program_type": {
              "value": "MAJOR",
              "api_type": "modifiable",
              "domain": "https://api.byu.edu/byuapi/meta/academic_program_types"
            },
            "description": {
              "value": "Instructional Psychology & Technology",
              "api_type": "modifiable"
            },
            "diploma_description": {
              "value": "Instructional Psychology & Technology",
              "api_type": "modifiable"
            },
            "long_description": {
              "value": "Instructional Psychology & Technology",
              "api_type": "modifiable"
            },
            "degree": {
              "value": "MS",
              "api_type": "modifiable",
              "domain": "https://api.byu.edu/byuapi/meta/academic_program_degree"
            },
            "admission_required": {
              "value": "true",
              "api_type": "modifiable"
            },
            "is_teaching_program": {
              "value": "false",
              "api_type": "modifiable"
            },
            "is_limited_enrollment_program": {
              "value": "false",
              "api_type": "modifiable"
            },
            "committee_members_needed_count": {
              "value": "0",
              "api_type": "modifiable"
            },
            "major_program_id": {
              "value": "",
              "api_type": "modifiable"
            },
            "ge_program_id": {
              "value": "",
              "api_type": "modifiable"
            },
            "core_program_id": {
              "value": "",
              "api_type": "modifiable"
            },
            "emphasis_required" : {
              "value": "true",
              "api_type": "modifiable"
            },
            "minor_required": {
              "value": "false",
              "api_type": "modifiable"
            },
            "study_list_required": {
              "value": "true",
              "api_type": "modifiable"
            },
            "has_honors_recognition": {
              "value": "false",
              "api_type": "modifiable"
            },
            "maximum_years_to_complete": {
              "value": "5",
              "api_type": "modifiable"
            },
            "program_hours": {
              "value": "30",
              "api_type": "modifiable"
            },
            "minimum_program_hours": {
              "value": "30",
              "api_type": "modifiable"
            },
            "maximum_program_hours": {
              "value": "30",
              "api_type": "modifiable"
            },
            "maximum_requirement_hours": {
              "value": "0",
              "api_type": "modifiable"
            },
            "maximum_requirement_classes": {
              "value": "0",
              "api_type": "modifiable"
            },
            "prior_program_id": {
              "value": "20005",
              "api_type": "read-only"
            },
            "comments": {
              "value": "Comments...",
              "api_type": "modifiable"
            },
            "date_time_updated": {
              "value": "2001-01-01",
              "api_type": "read-only"
            },
            "updated_by_id": {
              "value": "111111111",
              "api_type": "related",
              "related_resource": "identity"
            },
            "updated_by_name": {
              "value": "John Smith",
              "api_type": "related",
              "related_resource": "identity"
            }
          }
        ]
      },
      "assigned_teaching_areas": {
        "links": {
          "assigned_teaching_areas.info": {
            "rel": "self",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_teaching_areas?page_start=51,page_size=50",
            "method": "GET",
            "title": "academicunits.getAssignedTeachingAreas"
          },
          "assigned_teaching_areas.prev": {
            "rel": "assigned_teaching_areas.prev",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_teaching_areas?page_start=1,page_size=50",
            "method": "GET",
            "title": "academicunits.getAssignedTeachingAreas"
          },
          "assigned_teaching_areas.next": {
            "rel": "assigned_teaching_areas.next",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_teaching_areas?page_start=101,page_size=50",
            "method": "GET",
            "title": "academicunits.getAssignedTeachingAreas"
          },
          "assigned_teaching_areas.add": {
            "rel": "assigned_teaching_areas.add",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_teaching_areas",
            "method": "POST",
            "title": "academicunits.addAssignedTeachingArea"
          }
        },
        "metadata": {
          "collection_size": 3,
          "page_start": 1,
          "page_end": 3,
          "page_size": 50,
          "default_page_size": 50,
          "max_page_size": 1000
        },
        "values": [
          {
            "links": {
              "assigned_teaching_areas.info": {
                "rel": "self",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_teaching_areas/IPT&amp;T",
                "method": "GET",
                "title": "assigned_teaching_areas.getAssignedTeachingArea"
              },
              "assigned_teaching_areas.modify": {
                "rel": "assigned_teaching_areas.modify",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_teaching_areas/IPT&amp;T",
                "method": "PUT",
                "title": "assigned_teaching_areas.modifyAssignedTeachingArea"
              },
              "assigned_teaching_areas.delete": {
                "rel": "assigned_teaching_areas.delete",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/assigned_teaching_areas/IPT&amp;T",
                "method": "DELETE",
                "title": "assigned_teaching_areas.deleteAssignedTeachingArea"
              },
              "identity.info": {
                "rel": "identity.info",
                "href": "https://api.byu.edu/byuapi/identity/111111111",
                "method": "GET",
                "title": "assigned_teaching_areas.getUpdatedBy"
              }
            },
            "name": {
              "value": "IP&T",
              "api_type": "modifiable",
              "key": true
            },
            "long_name": {
              "value": "Instructional Psychology and Technology",
              "api_type": "modifiable"
            },
            "effective_date": {
              "value": "1997-09-02",
              "api_type": "modifiable"
            },
            "expired_date": {
              "value": "2099-12-31",
              "api_type": "modifiable"
            },
            "date_time_updated": {
              "value": "2001-01-01",
              "api_type": "read-only"
            },
            "updated_by_id": {
              "value": "111111111",
              "api_type": "related",
              "related_resource": "identity"
            },
            "updated_by_name": {
              "value": "John Smith",
              "api_type": "related",
              "related_resource": "identity"
            }
          }
        ]
      },
      "contacts": {
        "links": {
          "contacts.info": {
            "rel": "self",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/contacts?page_start=51,page_size=50",
            "method": "GET",
            "title": "contacts.getContacts"
          },
          "contacts.prev": {
            "rel": "contacts.prev",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/contacts?page_start=1,page_size=50",
            "method": "GET",
            "title": "contacts.getContacts"
          },
          "contacts.next": {
            "rel": "contacts.next",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/contacts?page_start=101,page_size=50",
            "method": "GET",
            "title": "contacts.getContacts"
          },
          "contacts.add": {
            "rel": "contacts.add",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/contacts",
            "method": "POST",
            "title": "contacts.addContact"
          }
        },
        "metadata": {
          "collection_size": 3,
          "page_start": 1,
          "page_end": 3,
          "page_size": 50,
          "default_page_size": 50,
          "max_page_size": 1000
        },
        "values": [
          {
            "links": {
              "contacts.info": {
                "rel": "self",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/contacts/CHAIR,1997-09-02",
                "method": "GET",
                "title": "contacts.getContact"
              },
              "contacts.modify": {
                "rel": "contacts.modify",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/contacts/CHAIR,1997-09-02",
                "method": "PUT",
                "title": "contacts.getContact"
              },
              "contacts.delete": {
                "rel": "contacts.delete",
                "href": "https://api.byu.edu/byuapi/academicunits/1115/contacts/CHAIR,1997-09-02",
                "method": "DELETE",
                "title": "contacts.getContact"
              },
              "identity.info": {
                "rel": "identity.info",
                "href": "https://api.byu.edu/byuapi/identity/111111111",
                "method": "GET",
                "title": "contacts.getPerson"
              }
            },
            "contact_type": {
              "value": "CHAIR",
              "api_type": "modifiable",
              "key": true
            },
            "effective_date": {
              "value": "1997-09-02",
              "api_type": "modifiable",
              "key": true
            },
            "expired_date": {
              "value": "2099-12-31",
              "api_type": "modifiable"
            },
            "person_id": {
              "value": "111111111",
              "api_type": "related",
              "related_resource": "identity"
            },
            "person_name": {
              "value": "Charles Graham",
              "api_type": "related",
              "related_resource": "identity"
            }
          }
        ]
      },
      "sub_units": {
        "links": {
          "sub_units.info": {
            "rel": "self",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/sub_units?page_start=51,page_size=50",
            "method": "GET",
            "title": "sub_units.getSubUnits"
          },
          "sub_units.prev": {
            "rel": "sub_units.prev",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/sub_units?page_start=1,page_size=50",
            "method": "GET",
            "title": "sub_units.getSubUnits"
          },
          "sub_units.next": {
            "rel": "sub_units.next",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/sub_units?page_start=101,page_size=50",
            "method": "GET",
            "title": "sub_units.getSubUnits"
          },
          "sub_units.add": {
            "rel": "sub_units.add",
            "href": "https://api.byu.edu/byuapi/academicunits/1115/sub_units",
            "method": "POST",
            "title": "sub_units.addSubUnit"
          }
        },
        "metadata": {
          "collection_size": 3,
          "page_start": 1,
          "page_end": 3,
          "page_size": 50,
          "default_page_size": 50,
          "max_page_size": 1000
        },
        "values": [
          {
            "links": {
              "academicunits.info": {
                "rel": "self",
                "href": "https://api.byu.edu/byuapi/academicunits/1115",
                "method": "GET",
                "title": "academicunits.getAcademicUnit"
              },
              "academicunits.modify": {
                "rel": "self",
                "href": "https://api.byu.edu/byuapi/academicunits/1115",
                "method": "PUT",
                "title": "academicunits.modifyAcademicUnit"
              },
              "academicunits.delete": {
                "rel": "self",
                "href": "https://api.byu.edu/byuapi/academicunits/1115",
                "method": "DELETE",
                "title": "academicunits.deleteAcademicUnit"
              },
              "academicunitsparent.info": {
                "rel": "academicunitsparent.info",
                "href": "https://api.byu.edu/byuapi/academicunits/1008",
                "method": "GET",
                "title": "academicunits.getAcademicUnitParent"
              }
            },
            "academic_unit_id": {
              "value": "1115",
              "api_type": "system",
              "key": true,
              "display_label": "Unit ID"
            },
            "effective_date": {
              "value": "2001-01-25",
              "api_type": "modifiable",
              "display_label": "Effective"
            },
            "expired_date": {
              "value": "2999-12-31",
              "api_type": "modifiable"
            },
            "unit_name": {
              "value": "Instructional Psych&Tech",
              "api_type": "modifiable"
            },
            "official_name": {
              "value": "Instructional Psychology and Technology, Department of",
              "api_type": "modifiable"
            },
            "unit_type": {
              "value": "DEPARTMENT",
              "api_type": "modifiable",
              "domain": "https://api.byu.edu/byuapi/meta/academic_unit_types"
            },
            "parent_academic_unit_id": {
              "value": "1008",
              "api_type": "related",
              "related_resource": "academicunitsparent"
            },
            "parent_academic_unit_name": {
              "value": "Education, David O. McKay School of",
              "api_type": "related",
              "related_resource": "academicunitsparent"
            },
            "old_unit_id": {
              "value": "3554",
              "api_type": "modifiable"
            }
          }
        ]
      }
    }
  ]
}
