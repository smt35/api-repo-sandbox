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
                    "$ref": "#/definitions/top_level_metadata"
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
                    "$ref": "#/definitions/enrolled_classes"
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
            "type": "object",
            "properties": {
                "links": {
                    "$ref": "#/definitions/links"
                },
                "student_id": {
                    "$ref": "#/definitions/student_id"
                },
                "student_name": {
                    "type": "string"
                },
                "byu_id": {
                    "type": "string"
                },
                "net_id": {
                    "type": "string"
                },
                "email_address": {
                    "type": "string"
                },
                "student_status": {
                    "type": "string"
                },
                "current_hours": {
                    "type": "string"
                },
                "primary_major": {
                    "type": "string"
                },
                "as_of_date": {
                    "type": "string"
                },
                "restricted": {
                    "type": "string"
                }
            }
        },
        "confidential_information": {
            "type": "object",
            "properties": {
                "links": {
                    "$ref": "#/definitions/links"
                },
                "secret_marital_status": {
                    "type": "string"
                }
            }
        },
        "enrolled_classes": {
            "type": "array",
            "items": {
                "$ref": "#/definitions/enrolled_class"
            }
        },
        "enrolled_class": {
            "type": "object",
            "properties": {
                "links": {
                    "$ref": "#/definitions/links"
                },
                "student_id": {
                    "$ref": "#/definitions/student_id"
                },
                "credit_institution": {
                    "type": "string"
                },
                "year_term": {
                    "type": "string"
                },
                "curriculum_id": {
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
                "audit_status": {
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
                "lab_quiz_section": {
                    "type": "string"
                },
                "lab_quiz_section_desc": {
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
                "updateed_by_id": {
                    "type": "string"
                },
                "updated_by_name": {
                    "type": "string"
                },
                "instructors": {
                    "$ref": "#/definitions/instructors"
                },
                "schedules": {
                    "$ref": "#/definitions/schedules"
                }
            }
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
        "instructors": {
            "type": "array",
            "items": {
                "type": "string"
            }
        },
        "schedules": {
            "type": "array",
            "items": {
                "type": "string"
            }
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
        }
    }
}