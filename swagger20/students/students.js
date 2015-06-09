{
    "swagger": "2.0",
    "info": {
        "title": "Students",
        "description": "Students Resource of the University API",
        "version": "0.1.1"
    },
    "host": "api.byu.edu",
    "schemes": [
        "https"
    ],
    "basePath": "/byuapi/students",
    "produces": [
        "application/json"
    ],
    "paths": {
        "/": {
            "get": {
                "summary": "Students",
                "description": "Returns a collection of BYU-IAM Students",
                "parameters": [
                    {
                        "name": "person_id",
                        "in": "query",
                        "description": "External PRO identifier",
                        "required": false,
                        "type": "string"
                    }
                ],
                "tags": [
                    "Students"
                ],
                "responses": {
                    "200": {
                        "description": "A collection of Students",
                        "schema": {
                            "$ref": "#/definitions/students"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "$ref": "#/definitions/error"
                        }
                    }
                }
            },
            "put": {
                "summary": "Students",
                "description": "Update a student (groups of students) not by ID",
                "responses": {
                    "200": {
                        "description": "The students that were put",
                        "schema": {
                            "$ref": "#/definitions/student"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "$ref": "#/definitions/error"
                        }
                    }
                }
            }
        },
        "/{person_id}": {
            "get": {
                "summary": "Student",
                "description": "Returns a BYU-IAM Student\n",
                "parameters": [
                    {
                        "name": "person_id",
                        "in": "path",
                        "description": "External BYU-IAM identifier",
                        "required": true,
                        "type": "string"
                    },
                    {
                        "name": "page_size",
                        "in": "query",
                        "description": "Portion of identity collection returned",
                        "required": false,
                        "type": "string"
                    }
                ],
                "tags": [
                    "Student"
                ],
                "responses": {
                    "200": {
                        "description": "A Student",
                        "schema": {
                            "$ref": "#/definitions/student"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "$ref": "#/definitions/error"
                        }
                    }
                }
            },
            "put": {
                "summary": "Student",
                "description": "Update a Student\n",
                "parameters": [
                    {
                        "name": "person_id",
                        "in": "path",
                        "description": "External BYU identifier",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The student that was updated",
                        "schema": {
                            "$ref": "#/definitions/student"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "$ref": "#/definitions/error"
                        }
                    }
                }
            }
        },
        "/{person_id}/enrolled_classes": {
            "get": {
                "summary": "enrolled_classes",
                "description": "Returns all enrolled_classes for the students",
                "parameters": [
                    {
                        "name": "person_id",
                        "in": "path",
                        "description": "External BYU Identifier",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The enrolled_class for the student",
                        "schema": {
                            "$ref": "#/definitions/enrolled_class"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "$ref": "#/definitions/error"
                        }
                    }
                }
            },
            "post": {
                "summary": "enrolled_classes",
                "description": "put an enrolled_class in",
                "parameters": [
                    {
                        "name": "person_id",
                        "in": "path",
                        "description": "External BYU identifier",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The enrolled_class that was updated",
                        "schema": {
                            "$ref": "#/definitions/enrolled_class"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "$ref": "#/definitions/error"
                        }
                    }
                }
            },
            "put": {
                "summary": "enrolled_classes",
                "description": "bulk update of classes",
                "parameters": [
                    {
                        "name": "person_id",
                        "in": "path",
                        "required": true,
                        "type": "string"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "The enrolled_class that was updated",
                        "schema": {
                            "$ref": "#/definitions/enrolled_class"
                        }
                    },
                    "default": {
                        "description": "Unexpected error",
                        "schema": {
                            "$ref": "#/definitions/error"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "students": {
            "type": "object",
            "required": [
                "values"
            ],
            "properties": {
                "links": {
                    "description": "HATEAOS links",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "metadata": {
                    "type": "string"
                },
                "values": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/student"
                    }
                }
            }
        },
        "student": {
            "type": "object",
            "required": [
                "basic"
            ],
            "properties": {
                "metadata": {
                    "$ref": "#/definitions/top_level_metadata"
                },
                "links": {
                    "$ref": "#/definitions/links"
                },
                "basic": {
                    "$ref": "#/definitions/basic"
                },
                "enrolled_classes": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/enrolled_class"
                    }
                },
                "waitlist": {
                    "$ref": "#/definitions/waitlist"
                },
                "student_programs": {
                    "$ref": "#/definitions/student_programs"
                },
                "academic_plans": {
                    "$ref": "#/definitions/academic_plans"
                },
                "suggested_classes": {
                    "$ref": "#/definitions/suggested_classes"
                },
                "enrolled_class_logs": {
                    "$ref": "#/definitions/enrolled_class_logs"
                },
                "waitlist_logs": {
                    "$ref": "#/definitions/waitlist_logs"
                }
            }
        },
        "links": {
            "description": "Hypermedia links format",
            "type": "object",
            "required": [
                "rel",
                "href",
                "method"
            ],
            "properties": {
                "rel": {
                    "type": "string"
                },
                "href": {
                    "type": "string",
                    "format": "uri"
                },
                "method": {
                    "type": "string",
                    "enum": [
                        "DELETE",
                        "GET",
                        "OPTIONS",
                        "POST",
                        "PUT"
                    ]
                }
            }
        },
        "basic": {
            "type": "string"
        },
        "enrolled_class": {
            "type": "string"
        },
        "waitlist": {
            "type": "string"
        },
        "student_programs": {
            "type": "string"
        },
        "academic_plans": {
            "type": "string"
        },
        "suggested_classes": {
            "type": "string"
        },
        "enrolled_class_logs": {
            "type": "string"
        },
        "waitlist_logs": {
            "type": "string"
        },
        "student_id": {
            "type": "string"
        },
        "credit_institution": {
            "type": "string"
        },
        "curriculum_id": {
            "type": "string"
        },
        "year_term": {
            "type": "string"
        },
        "title_code": {
            "type": "string"
        },
        "section_number": {
            "type": "string"
        },
        "dept_name": {
            "type": "string"
        },
        "catalog_number": {
            "type": "string"
        },
        "catalog_suffix": {
            "type": "string"
        },
        "transcript_title": {
            "type": "string"
        },
        "credit_hours": {
            "type": "string"
        },
        "grade": {
            "type": "string"
        },
        "class_repeated": {
            "type": "string"
        },
        "honors_flag": {
            "type": "string"
        },
        "service_learning": {
            "type": "string"
        },
        "start_date": {
            "type": "string"
        },
        "end_date": {
            "type": "string"
        },
        "credit_type": {
            "type": "string"
        },
        "credit_type_descr": {
            "type": "string"
        },
        "section_type": {
            "type": "string"
        },
        "section_type_descr": {
            "type": "string"
        },
        "lab_quiz_section": {
            "type": "string"
        },
        "lab_quiz_section_descr": {
            "type": "string"
        },
        "date_graded": {
            "type": "string"
        },
        "graded_by_id": {
            "type": "string"
        },
        "graded_by_name": {
            "type": "string"
        },
        "date_added": {
            "type": "string"
        },
        "added_by_id": {
            "type": "string"
        },
        "added_by_name": {
            "type": "string"
        },
        "add_drop_card": {
            "type": "string"
        },
        "envelope_type": {
            "type": "string"
        },
        "envelope_id": {
            "type": "string"
        },
        "date_time_updated": {
            "type": "string"
        },
        "updated_by_id": {
            "type": "string"
        },
        "updated_by_name": {
            "type": "string"
        },
        "instructors": {
            "type": "string"
        },
        "schedules": {
            "type": "string"
        },
        "top_level_metadata": {
            "type": "object",
            "properties": {
                "collection_size": {
                    "type": "integer",
                    "minimum": 0
                },
                "page_start": {
                    "type": "integer",
                    "minimum": 0
                },
                "page_end": {
                    "type": "integer",
                    "minimum": 0
                },
                "page_size": {
                    "type": "integer",
                    "minimum": 0
                },
                "default_page_size": {
                    "type": "integer",
                    "minimum": 1
                },
                "maximum_page_size": {
                    "type": "integer"
                },
                "field_sets_returned": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "basic"
                        ]
                    }
                },
                "field_sets_available": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "basic"
                        ]
                    }
                },
                "field_sets_default": {
                    "type": "array",
                    "items": {
                        "type": "string",
                        "enum": [
                            "basic"
                        ]
                    }
                }
            }
        },
        "error": {
            "properties": {
                "code": {
                    "type": "integer",
                    "format": "int32"
                },
                "message": {
                    "type": "string"
                },
                "fields": {
                    "type": "string"
                }
            }
        },
        "enrollments": {
            "type": "array",
            "properties": {
                "links": {
                    "$ref": "#/definitions/links"
                },
                "metadata": {
                    "type": "string"
                }
            },
            "items": {
                "$ref": "#/definitions/enrollment"
            }
        },
        "enrollment": {
            "type": "object",
            "properties": {
                "links": {
                    "$ref": "#/definitions/enrollment"
                },
                "person_id": {
                    "$ref": "#/definitions/student_id"
                },
                "credit_institution": {
                    "$ref": "#/definitions/credit_institution"
                },
                "year_term": {
                    "$ref": "#/definitions/year_term"
                },
                "curriculum_id": {
                    "$ref": "#/definitions/curriculum_id"
                },
                "title_code": {
                    "$ref": "#/definitions/title_code"
                },
                "section_number": {
                    "$ref": "#/definitions/section_number"
                },
                "dept_name": {
                    "$ref": "#/definitions/dept_name"
                },
                "catalog_number": {
                    "$ref": "#/definitions/catalog_number"
                },
                "catalog_suffix": {
                    "$ref": "#/definitions/catalog_suffix"
                },
                "transcript_title": {
                    "$ref": "#/definitions/transcript_title"
                },
                "credit_hours": {
                    "$ref": "#/definitions/credit_hours"
                },
                "grade": {
                    "$ref": "#/definitions/grade"
                },
                "class_repeated": {
                    "$ref": "#/definitions/class_repeated"
                },
                "honors_flag": {
                    "$ref": "#/definitions/honors_flag"
                },
                "service_learning": {
                    "$ref": "#/definitions/service_learning"
                },
                "start_date": {
                    "$ref": "#/definitions/start_date"
                },
                "end_date": {
                    "$ref": "#/definitions/end_date"
                },
                "credit_type": {
                    "$ref": "#/definitions/credit_type"
                },
                "credit_type_descr": {
                    "$ref": "#/definitions/credit_type_descr"
                },
                "section_type": {
                    "$ref": "#/definitions/section_type"
                },
                "section_type_desc": {
                    "$ref": "#/definitions/section_type_descr"
                },
                "lab_quiz_section": {
                    "$ref": "#/definitions/lab_quiz_section"
                },
                "lab_quiz_section_descr": {
                    "$ref": "#/definitions/lab_quiz_section_descr"
                },
                "date_graded": {
                    "$ref": "#/definitions/date_graded"
                },
                "graded_by_id": {
                    "$ref": "#/definitions/graded_by_id"
                },
                "graded_by_name": {
                    "$ref": "#/definitions/graded_by_name"
                },
                "date_added": {
                    "$ref": "#/definitions/date_added"
                },
                "added_by_id": {
                    "$ref": "#/definitions/added_by_id"
                },
                "added_by_name": {
                    "$ref": "#/definitions/added_by_name"
                },
                "add_drop_card": {
                    "$ref": "#/definitions/add_drop_card"
                },
                "envelope_type": {
                    "$ref": "#/definitions/envelope_type"
                },
                "envelope_id": {
                    "$ref": "#/definitions/envelope_id"
                },
                "date_time_updated": {
                    "$ref": "#/definitions/date_time_updated"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/updated_by_id"
                },
                "updated_by_name": {
                    "$ref": "#/definitions/updated_by_name"
                },
                "instructors": {
                    "$ref": "#/definitions/instructors"
                },
                "schedules": {
                    "$ref": "#/definitions/schedules"
                }
            }
        }
    }
}