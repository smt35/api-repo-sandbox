{
  "swagger": "2.0",
  "info": {
    "title": "Class",
    "description": "Class Resource of the University API",
    "version": "1.0.0"
  },
  "host": "api.byu.edu",
  "schemes": [
    "https"
  ],
  "basePath": "/v1/classes",
  "produces": [
    "application/json"
  ],
  "paths": {
    "/": {
      "get": {
        "summary": "Classes",
        "description": "Returns a collection of AIM Classes",
        "parameters": [
          {
            "name": "year_term",
            "in": "query",
            "required": false,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "query",
            "required": false,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "query",
            "required": false,
            "description": "Differentiates the different curriculum offerings",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "query",
            "required": false,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "teaching_area",
            "in": "query",
            "required": false,
            "description": "The subject area of the class offering",
            "type": "string"
          },
          {
            "name": "catalog_number",
            "in": "query",
            "required": false,
            "description": "The catalog number of the class offering",
            "type": "string"
          },
          {
            "name": "catalog_suffix",
            "in": "query",
            "required": false,
            "description": "The catalog suffix of the class offering",
            "type": "string"
          },
          {
            "name": "enrollment_status",
            "in": "query",
            "required": false,
            "description": "Indicates what enrollment actions may be performed on the class",
            "type": "string"
          },
          {
            "name": "credit_hours",
            "in": "query",
            "required": false,
            "description": "How many credit hours is the class worth?",
            "type": "string"
          },
          {
            "name": "section_type",
            "in": "query",
            "required": false,
            "description": "What type of section (DAY, EVENING, SLC)?",
            "type": "string"
          },
          {
            "name": "honors",
            "in": "query",
            "required": false,
            "description": "Is the section an honors section?",
            "type": "string"
          },
          {
            "name": "instructor_id",
            "in": "query",
            "required": false,
            "description": "Classes with this instructor - use person_id of the instructor",
            "type": "string"
          },
          {
            "name": "instructor_net_id",
            "in": "query",
            "required": false,
            "description": "Classes with this instructor - use net_id of the instructor",
            "type": "string"
          },
          {
            "name": "days_taught",
            "in": "query",
            "required": false,
            "description": "Limit the classes collection to the following days",
            "type": "string"
          },
          {
            "name": "time_taught",
            "in": "query",
            "required": false,
            "description": "Limit the classes collection to the following times",
            "type": "string"
          },
          {
            "name": "context",
            "in": "query",
            "required": false,
            "description": "Defines a group of field sets to be returned in collection",
            "type": "string"
          },
          {
            "name": "field_sets",
            "in": "query",
            "required": false,
            "description": "List of field sets to be returned in collection",
            "type": "string"
          },
          {
            "name": "page_start",
            "in": "query",
            "required": false,
            "description": "Skip into the classes collection before starting to return items",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the classes collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "204": {
            "description": "page_start is too large for the collection returned",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to access data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "404": {
            "description": "No Classes satisfy the query parameters - the collection is empty",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "409": {
            "description": "Query parameters conflict or are malformed",
            "schema": {
              "$ref": "#/definitions/error"
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
        "summary": "Classes",
        "description": "Create a new AIM Class",
        "parameters": [
          {
            "name": "class",
            "in": "body",
            "description": "The class to be added",
            "required": true,
            "schema": {
              "$ref": "#/definitions/classes"
            }
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "201": {
            "description": "Returns the class that was added",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to schedule a new class",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied - not authorized to schedule the new class",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Body of the request contains conflicting, malformed, or invalid data",
            "schema": {
              "$ref": "#/definitions/error"
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
        "summary": "Classes",
        "description": "Modify a specific AIM Class (defined by query parameters)",
        "parameters": [
          {
            "name": "class",
            "in": "body",
            "description": "The class to be modified",
            "required": true,
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          {
            "name": "year_term",
            "in": "query",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "teaching_area",
            "in": "query",
            "required": true,
            "description": "The subject area of the class offering",
            "type": "string"
          },
          {
            "name": "catalog_number",
            "in": "query",
            "required": true,
            "description": "The catalog number of the class offering",
            "type": "string"
          },
          {
            "name": "catalog_suffix",
            "in": "query",
            "required": true,
            "description": "The catalog suffix of the class offering",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "query",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "context",
            "in": "query",
            "required": false,
            "description": "Defines a group of field sets to be returned in collection",
            "type": "string"
          },
          {
            "name": "field_sets",
            "in": "query",
            "required": false,
            "description": "List of field sets to be returned in collection",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Returns the class that was modified",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to modify a class",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied - not authorized to modify the class",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Body of the request contains conflicting, malformed, or invalid data",
            "schema": {
              "$ref": "#/definitions/error"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}": {
      "get": {
        "summary": "Classes",
        "description": "Returns a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different curriculum offerings",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "field_sets",
            "in": "query",
            "required": false,
            "description": "List of field sets to be returned in collection",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Item Retrieved",
            "schema": {
              "$ref": "#/definitions/class"
            }
          },
          "204": {
            "description": "No class found that matches key values",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to schedule a new class",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Query parameters conflict or are malformed",
            "schema": {
              "$ref": "#/definitions/error"
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
      "delete": {
        "summary": "Classes",
        "description": "Delete/Cancel a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different curriculum offerings",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "The specific AIM class that was deleted",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "204": {
            "description": "No class found that matches key values",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to delete/cancel a class",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Unable to perform delete/cancel request",
            "schema": {
              "$ref": "#/definitions/error"
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
        "summary": "Classes",
        "description": "Modify a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different curriculum offerings",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "field_sets",
            "in": "query",
            "required": false,
            "description": "List of field sets to be modified in collection",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "The specific AIM class that was modified",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "204": {
            "description": "No class found that matches key values",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to modify a class",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Unable to perform update request",
            "schema": {
              "$ref": "#/definitions/error"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/add-approved-students": {
      "get": {
        "summary": "Classes",
        "description": "Returns the add permission codes for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_start",
            "in": "query",
            "required": false,
            "description": "Skip into the add_approved_students collection before starting to return items",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the add_approved_students collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/add_approved_students"
            }
          },
          "204": {
            "description": "page_start is too large for the collection returned",
            "schema": {
              "$ref": "#/definitions/add_approved_students"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to view add_approved_students",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Query parameters conflict or are malformed",
            "schema": {
              "$ref": "#/definitions/error"
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
        "summary": "Classes",
        "description": "Add an add permission code for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "A collection of Classes",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "204": {
            "description": "No class found that matches key values",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to add add_approved_students",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Body of the request contains conflicting, malformed, or invalid data",
            "schema": {
              "$ref": "#/definitions/error"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/add-approved-students/{student_id}": {
      "get": {
        "summary": "Classes",
        "description": "Returns the add permission codes for a specific AIM Class and student",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "student_id",
            "in": "path",
            "required": true,
            "description": "The person_id of the student",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Item Retrieved",
            "schema": {
              "$ref": "#/definitions/add_approved_student"
            }
          },
          "204": {
            "description": "No class/student combination found that matches key values",
            "schema": {
              "$ref": "#/definitions/add_approved_students"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to view add_approved_students",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Query parameters conflict or are malformed",
            "schema": {
              "$ref": "#/definitions/error"
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
      "delete": {
        "summary": "Classes",
        "description": "Delete an add permission code for a specific AIM Class and student combination",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "student_id",
            "in": "path",
            "required": true,
            "description": "The person_id of the student",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "A collection of Classes",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "204": {
            "description": "No class/student combination found that matches key values",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to delete add_approved_students",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Query parameters conflict or are malformed",
            "schema": {
              "$ref": "#/definitions/error"
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
        "summary": "Classes",
        "description": "Modifies/Redeems an add permission code for a specific AIM Class and student combination",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "student_id",
            "in": "path",
            "required": true,
            "description": "The person_id of the student",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "A collection of Classes",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "204": {
            "description": "No class/student combination found that matches key values",
            "schema": {
              "$ref": "#/definitions/classes"
            }
          },
          "400": {
            "description": "Invalid Request - unable to interpret request",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "401": {
            "description": "Authentication required to modify add_approved_students",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "403": {
            "description": "Access denied to protected data",
            "schema": {
              "$ref": "#/definitions/error"
            }
          },
          "409": {
            "description": "Body of the request contains conflicting, malformed, or invalid data",
            "schema": {
              "$ref": "#/definitions/error"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/assigned-instructors": {
      "get": {
        "summary": "Classes",
        "description": "Returns the instructors assigned to a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/assigned_instructors"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/class-limitations": {
      "get": {
        "summary": "Classes",
        "description": "Returns the class limitations for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/class_limitations"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/assigned-schedules": {
      "get": {
        "summary": "Classes",
        "description": "Returns the schedules for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/assigned_schedules"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/course-limitations": {
      "get": {
        "summary": "Classes",
        "description": "Returns the course limitations for the course associated with a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/course_limitations"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/enrolled_students": {
      "get": {
        "summary": "Classes",
        "description": "Returns the students enrolled in a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/enrolled_students"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/linked-classes": {
      "get": {
        "summary": "Classes",
        "description": "Returns the other sections linked to a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/linked_classes"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/size-mixes": {
      "get": {
        "summary": "Classes",
        "description": "",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/size_mixes"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/summary": {
      "get": {
        "summary": "Classes",
        "description": "",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/summary"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/notes": {
      "get": {
        "summary": "Classes",
        "description": "Returns the class schedule notes a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/notes"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/permission-to-add-codes": {
      "get": {
        "summary": "Classes",
        "description": "Returns the set of allocated permission-to-add codes a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/permission_to_add_codes"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/prerequisites": {
      "get": {
        "summary": "Classes",
        "description": "Returns the prerequisite courses for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/prerequisites"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/section-headers": {
      "get": {
        "summary": "Classes",
        "description": "Returns the class schedule section headers for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/section_headers"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/supplemental-counts": {
      "get": {
        "summary": "Classes",
        "description": "Returns the counts for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/supplemental_counts"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/waitlisted-students": {
      "get": {
        "summary": "Classes",
        "description": "Returns the set of students in the wait list queue for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/waitlisted_students"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/enrolled-student-logs": {
      "get": {
        "summary": "Classes",
        "description": "Returns the log records for enrollment actions for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/enrolled_student_logs"
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
    "/{year_term},{curriculum_id},{title_code},{section_number}/waitlisted-student-logs": {
      "get": {
        "summary": "Classes",
        "description": "Returns the log records for wait list actions for a specific AIM Class",
        "parameters": [
          {
            "name": "year_term",
            "in": "path",
            "required": true,
            "description": "Enrollment period in which the class is offered",
            "type": "string"
          },
          {
            "name": "curriculum_id",
            "in": "path",
            "required": true,
            "description": "The curriculum designator for the course",
            "type": "string"
          },
          {
            "name": "title_code",
            "in": "path",
            "required": true,
            "description": "Differentiates the different offerings of the course",
            "type": "string"
          },
          {
            "name": "section_number",
            "in": "path",
            "required": true,
            "description": "The section designator",
            "type": "string"
          },
          {
            "name": "page_size",
            "in": "query",
            "required": false,
            "description": "How many items of the identity collection are returned?",
            "type": "string"
          }
        ],
        "tags": [
          "Classes"
        ],
        "responses": {
          "200": {
            "description": "Collection Retrieved",
            "schema": {
              "$ref": "#/definitions/waitlisted_student_logs"
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
    "classes": {
      "description": "A collection of Classes",
      "type": "object",
      "required": [
        "values"
      ],
      "properties": {
        "links": {
          "description": "Hypermedia Links that impact the entire Classes collection",
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
            "$ref": "#/definitions/class"
          }
        }
      }
    },
    "class": {
      "description": "A specific class",
      "type": "object",
      "required": [
        "basic"
      ],
      "properties": {
        "basic": {
          "$ref": "#/definitions/basic"
        },
        "add_approved_students": {
          "$ref": "#/definitions/add_approved_students"
        },
        "assigned_instructors": {
          "$ref": "#/definitions/assigned_instructors"
        },
        "class_limitations": {
          "$ref": "#/definitions/class_limitations"
        },
        "assigned_schedules": {
          "$ref": "#/definitions/assigned_schedules"
        },
        "course_limitations": {
          "$ref": "#/definitions/course_limitations"
        },
        "enrolled_students": {
          "$ref": "#/definitions/enrolled_students"
        },
        "linked_classes": {
          "$ref": "#/definitions/linked_classes"
        },
        "notes": {
          "$ref": "#/definitions/notes"
        },
        "permission_to_add_codes": {
          "$ref": "#/definitions/permission_to_add_codes"
        },
        "prerequisites": {
          "$ref": "#/definitions/prerequisites"
        },
        "section_headers": {
          "$ref": "#/definitions/section_headers"
        },
        "supplemental_counts": {
          "$ref": "#/definitions/supplemental_counts"
        },
        "waitlisted_students": {
          "$ref": "#/definitions/waitlisted_students"
        },
        "enrolled_student_logs": {
          "$ref": "#/definitions/enrolled_student_logs"
        },
        "waitlisted_student_logs": {
          "$ref": "#/definitions/waitlisted_student_logs"
        }
      }
    },
    "basic": {
      "description": "Class Basic Item",
      "type": "object",
      "required": [
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number"
      ],
      "properties": {
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
        "credit_institution": {
          "$ref": "#/definitions/credit_institution"
        },
        "enrollment_status": {
          "$ref": "#/definitions/enrollment_status"
        },
        "subject_area": {
          "$ref": "#/definitions/subject_area"
        },
        "course_number": {
          "$ref": "#/definitions/course_number"
        },
        "course_suffix": {
          "$ref": "#/definitions/course_suffix"
        },
        "course_title": {
          "$ref": "#/definitions/course_title"
        },
        "section_type": {
          "$ref": "#/definitions/section_type"
        },
        "block_code": {
          "$ref": "#/definitions/block_code"
        },
        "class_status": {
          "$ref": "#/definitions/class_status"
        },
        "reg_method": {
          "$ref": "#/definitions/reg_method"
        },
        "lab_quiz_flag": {
          "$ref": "#/definitions/lab_quiz_flag"
        },
        "fee": {
          "$ref": "#/definitions/fee"
        },
        "honors": {
          "$ref": "#/definitions/honors"
        },
        "service_learning": {
          "$ref": "#/definitions/service_learning"
        },
        "fixed_or_variable": {
          "$ref": "#/definitions/fixed_or_variable"
        },
        "credit_hours": {
          "$ref": "#/definitions/credit_hours"
        },
        "minimum_credit_hours": {
          "$ref": "#/definitions/minimum_credit_hours"
        },
        "class_size": {
          "$ref": "#/definitions/class_size"
        },
        "class_start_date": {
          "$ref": "#/definitions/class_start_date"
        },
        "class_end_date": {
          "$ref": "#/definitions/class_end_date"
        },
        "reg_start_date": {
          "$ref": "#/definitions/reg_start_date"
        },
        "reg_end_date": {
          "$ref": "#/definitions/reg_end_date"
        },
        "control_mix_date": {
          "$ref": "#/definitions/control_mix_date"
        },
        "waitlist_status": {
          "$ref": "#/definitions/waitlist_status"
        },
        "combine_rolls": {
          "$ref": "#/definitions/combine_rolls"
        },
        "combine_counts": {
          "$ref": "#/definitions/combine_counts"
        },
        "link_relation": {
          "$ref": "#/definitions/link_relation"
        },
        "link_to_year_term": {
          "$ref": "#/definitions/link_to_year_term"
        },
        "link_to_curriculum_id": {
          "$ref": "#/definitions/link_to_curriculum_id"
        },
        "link_to_title_code": {
          "$ref": "#/definitions/link_to_title_code"
        },
        "link_to_section_number": {
          "$ref": "#/definitions/link_to_section_number"
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
    "add_approved_students": {
      "description": "A collection of add permission codes",
      "type": "object",
      "required": [
        "values"
      ],
      "properties": {
        "values": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/add_approved_student"
          }
        }
      }
    },
    "add_approved_student": {
      "description": "Add permission code for a single class",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "person_id",
        "student_name",
        "audit_flag",
        "created_by_id",
        "date_time_created",
        "date_time_redeemed"
      ],
      "properties": {
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
        "person_id": {
          "$ref": "#/definitions/person_id"
        },
        "student_name": {
          "$ref": "#/definitions/student_name"
        },
        "audit_flag": {
          "$ref": "#/definitions/audit_flag"
        },
        "created_by_id": {
          "$ref": "#/definitions/created_by_id"
        },
        "date_time_created": {
          "$ref": "#/definitions/date_time_created"
        },
        "date_time_redeemed": {
          "$ref": "#/definitions/date_time_redeemed"
        }
      }
    },
    "assigned_instructors": {
      "description": "Assigned instructors for a class",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "instructor_type",
        "instructor_name",
        "person_id",
        "byu_id",
        "net_id",
        "email_address",
        "updated_by_id",
        "date_time_updated"
      ],
      "properties": {
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
        "instructor_type": {
          "$ref": "#/definitions/instructor_type"
        },
        "instructor_name": {
          "$ref": "#/definitions/instructor_name"
        },
        "person_id": {
          "$ref": "#/definitions/person_id"
        },
        "byu_id": {
          "$ref": "#/definitions/byu_id"
        },
        "net_id": {
          "$ref": "#/definitions/net_id"
        },
        "email_address": {
          "$ref": "#/definitions/email_address"
        },
        "updated_by_id": {
          "$ref": "#/definitions/updated_by_id"
        },
        "date_time_updated": {
          "$ref": "#/definitions/date_time_updated"
        }
      }
    },
    "class_limitations": {
      "description": "Limitations to a class",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "limitation_type",
        "limitation_name",
        "limitation_value",
        "updated_by_id",
        "date_time_updated",
        "expired_date"
      ],
      "properties": {
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
        "limitation_type": {
          "$ref": "#/definitions/limitation_type"
        },
        "limitation_name": {
          "$ref": "#/definitions/limitation_name"
        },
        "limitation_value": {
          "$ref": "#/definitions/limitation_value"
        },
        "updated_by_id": {
          "$ref": "#/definitions/updated_by_id"
        },
        "date_time_updated": {
          "$ref": "#/definitions/date_time_updated"
        },
        "expired_date": {
          "$ref": "#/definitions/expired_date"
        }
      }
    },
    "assigned_schedules": {
      "description": "Schedule for a class",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "schedule_type",
        "schedule_id",
        "sequence_number",
        "institution",
        "building",
        "room",
        "days_taught",
        "mon",
        "tue",
        "wed",
        "thu",
        "fri",
        "sat",
        "sun",
        "use_start_date",
        "use_end_date",
        "time_taught",
        "begin_time",
        "end_time",
        "status",
        "set_up_id",
        "set_up_name",
        "set_up_description",
        "schedule_reason",
        "updated_by_id",
        "date_time_updated",
        "allow_conflict"
      ],
      "properties": {
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
        "schedule_type": {
          "description": "Type of schedule",
          "type": "string",
          "maxLength": 15
        },
        "schedule_id": {
          "description": "",
          "type": "string",
          "maxLength": 50
        },
        "sequence_number": {
          "description": "",
          "type": "integer",
          "maxLength": 9
        },
        "institution": {
          "description": "BYU Provo",
          "type": "string",
          "maxLength": 15
        },
        "building": {
          "description": "",
          "type": "string",
          "maxLength": 15
        },
        "room": {
          "description": "",
          "type": "string",
          "maxLength": 10
        },
        "days_taught": {
          "description": "",
          "type": "string"
        },
        "mon": {
          "description": "",
          "type": "string"
        },
        "tue": {
          "description": "",
          "type": "string"
        },
        "wed": {
          "description": "",
          "type": "string"
        },
        "thu": {
          "description": "",
          "type": "string"
        },
        "fri": {
          "description": "",
          "type": "string"
        },
        "sat": {
          "description": "",
          "type": "string"
        },
        "sun": {
          "description": "",
          "type": "string"
        },
        "use_start_date": {
          "description": "",
          "type": "string"
        },
        "use_end_date": {
          "description": "",
          "type": "string"
        },
        "time_taught": {
          "description": "",
          "type": "string"
        },
        "begin_time": {
          "description": "",
          "type": "string"
        },
        "end_time": {
          "description": "",
          "type": "string"
        },
        "status": {
          "description": "",
          "type": "string"
        },
        "set_up_id": {
          "description": "",
          "type": "string"
        },
        "set_up_name": {
          "description": "",
          "type": "string"
        },
        "set_up_description": {
          "description": "",
          "type": "string"
        },
        "schedule_reason": {
          "description": "",
          "type": "string"
        },
        "updated_by_id": {
          "$ref": "#/definitions/updated_by_id"
        },
        "date_time_updated": {
          "$ref": "#/definitions/date_time_updated"
        },
        "allow_conflict": {
          "$ref": "#/definitions/allow_conflict"
        }
      }
    },
    "course_limitations": {
      "description": "Limitations to a class",
      "type": "object",
      "required": [
        "curriculum_id",
        "title_code",
        "effective_date",
        "expired_date",
        "limitation_name",
        "limitation_type",
        "limitation_value"
      ],
      "properties": {
        "curriculum_id": {
          "$ref": "#/definitions/curriculum_id"
        },
        "title_code": {
          "$ref": "#/definitions/title_code"
        },
        "effective_date": {
          "description": " date for class",
          "type": "string",
          "maxLength": 23
        },
        "expired_date": {
          "$ref": "#/definitions/expired_date"
        },
        "limitation_name": {
          "$ref": "#/definitions/limitation_name"
        },
        "limitation_type": {
          "$ref": "#/definitions/limitation_type"
        },
        "limitation_value": {
          "$ref": "#/definitions/limitation_value"
        }
      }
    },
    "enrolled_students": {
      "description": "Students enrolled in a class",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "student_id",
        "credit_hours",
        "grade",
        "byu_id",
        "net_id",
        "student_name",
        "email_address",
        "date_time_added",
        "class_standing"
      ],
      "properties": {
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
        "student_id": {
          "description": "id of a student",
          "type": "string",
          "maxLength": 9
        },
        "credit_hours": {
          "$ref": "#/definitions/credit_hours"
        },
        "grade": {
          "description": "grade",
          "type": "string",
          "maxLength": 5
        },
        "byu_id": {
          "$ref": "#/definitions/byu_id"
        },
        "net_id": {
          "$ref": "#/definitions/net_id"
        },
        "student_name": {
          "$ref": "#/definitions/student_name"
        },
        "email_address": {
          "$ref": "#/definitions/email_address"
        },
        "date_time_added": {
          "description": "added date time",
          "type": "string",
          "maxLength": 23
        },
        "class_standing": {
          "description": "",
          "type": "string",
          "maxLength": 20
        },
        "gender": {
          "description": "",
          "type": "string",
          "maxLength": 7
        },
        "program_id": {
          "description": "",
          "type": "string"
        },
        "home_state": {
          "description": "",
          "type": "string"
        },
        "country_code": {
          "description": "",
          "type": "string"
        },
        "student_disability": {
          "description": "",
          "type": "string"
        },
        "ESL": {
          "description": "",
          "type": "string"
        }
      }
    },
    "linked_classes": {
      "description": "Sections linked to a class",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "teaching_area",
        "catalog_number",
        "catalog_suffix",
        "course_description",
        "section_type",
        "linked_curriculum_id",
        "linked_title_code",
        "linked_section_number",
        "linked_teaching_area",
        "linked_catalog_number",
        "linked_catalog_suffix",
        "linked_course_description",
        "linked_section_type"
      ],
      "properties": {
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
        "teaching_area": {
          "description": "",
          "type": "string"
        },
        "catalog_number": {
          "description": "",
          "type": "string"
        },
        "catalog_suffix": {
          "description": "",
          "type": "string"
        },
        "course_description": {
          "description": "",
          "type": "string"
        },
        "section_type": {
          "$ref": "#/definitions/section_type"
        },
        "linked_curriculum_id": {
          "description": "",
          "type": "string"
        },
        "linked_title_code": {
          "description": "",
          "type": "string"
        },
        "linked_section_number": {
          "description": "",
          "type": "string"
        },
        "linked_teaching_area": {
          "description": "",
          "type": "string"
        },
        "linked_catalog_number": {
          "description": "",
          "type": "string"
        },
        "linked_catalog_suffix": {
          "description": "",
          "type": "string"
        },
        "linked_course_description": {
          "description": "",
          "type": "string"
        },
        "linked_section_type": {
          "description": "",
          "type": "string"
        }
      }
    },
    "size_mixes": {
      "description": "",
      "type": "object",
      "required": [

      ],
      "properties": {

      }
    },
    "summary": {
      "description": "",
      "type": "object",
      "required": [

      ],
      "properties": {

      }
    },
    "notes": {
      "description": "Class schedule notes",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "note_type",
        "note_value",
        "updated_by_id",
        "date_time_updated"
      ],
      "properties": {
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
        "note_type": {
          "description": "",
          "type": "string"
        },
        "note_value": {
          "description": "",
          "type": "string"
        },
        "updated_by_id": {
          "$ref": "#/definitions/updated_by_id"
        },
        "date_time_updated": {
          "$ref": "#/definitions/date_time_updated"
        }
      }
    },
    "permission_to_add_codes": {
      "description": "Add permission codes",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "group_number",
        "token_value",
        "created_by_id",
        "date_time_created",
        "redeemed_by_id",
        "date_time_redeemed"
      ],
      "properties": {
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
        "group_number": {
          "description": "",
          "type": "string"
        },
        "token_value": {
          "description": "",
          "type": "string"
        },
        "created_by_id": {
          "$ref": "#/definitions/created_by_id"
        },
        "date_time_created": {
          "$ref": "#/definitions/date_time_created"
        },
        "redeemed_by_id": {
          "description": "",
          "type": "string"
        },
        "date_time_redeemed": {
          "$ref": "#/definitions/date_time_redeemed"
        }
      }
    },
    "prerequisites": {
      "description": "Prerequisite courses for a class",
      "type": "object",
      "required": [
        "curriculum_id",
        "title_code",
        "seq_num",
        "enforced",
        "instructor_approval",
        "effective_date",
        "expired_date",
        "updated_by_id",
        "date_time_updated",
        "prerequisite_list"
      ],
      "properties": {
        "curriculum_id": {
          "$ref": "#/definitions/curriculum_id"
        },
        "title_code": {
          "$ref": "#/definitions/title_code"
        },
        "seq_num": {
          "description": "",
          "type": "string"
        },
        "enforced": {
          "description": "",
          "type": "string"
        },
        "instructor_approval": {
          "description": "",
          "type": "string"
        },
        "effective_date": {
          "description": "",
          "type": "string"
        },
        "expired_date": {
          "$ref": "#/definitions/expired_date"
        },
        "updated_by_id": {
          "$ref": "#/definitions/updated_by_id"
        },
        "date_time_updated": {
          "$ref": "#/definitions/date_time_updated"
        },
        "prerequisite_list": {
          "description": "",
          "type": "string"
        }
      }
    },
    "section_headers": {
      "description": "Class section headers",
      "type": "object",
      "required": [
        "header_type",
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "dept_name",
        "sequence_number",
        "message_type",
        "display_flag",
        "header_text",
        "updated_by_id",
        "date_time_updated"
      ],
      "properties": {
        "header_type": {
          "description": "",
          "type": "string"
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
          "description": "",
          "type": "string"
        },
        "sequence_number": {
          "description": "",
          "type": "string"
        },
        "message_type": {
          "description": "",
          "type": "string"
        },
        "display_flag": {
          "description": "",
          "type": "string"
        },
        "header_text": {
          "description": "",
          "type": "string"
        },
        "updated_by_id": {
          "$ref": "#/definitions/updated_by_id"
        },
        "date_time_updated": {
          "$ref": "#/definitions/date_time_updated"
        }
      }
    },
    "supplemental_counts": {
      "description": "Supplemental counts",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "count_category",
        "count_type",
        "count_catsize",
        "total_enrolled",
        "add_count_cum",
        "drop_count_cum",
        "total_requests",
        "updated_by_id",
        "date_time_updated"
      ],
      "properties": {
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
        "count_category": {
          "description": "",
          "type": "string"
        },
        "count_type": {
          "description": "",
          "type": "string"
        },
        "count_catsize": {
          "description": "",
          "type": "string"
        },
        "total_enrolled": {
          "description": "",
          "type": "string"
        },
        "add_count_cum": {
          "description": "",
          "type": "string"
        },
        "drop_count_cum": {
          "description": "",
          "type": "string"
        },
        "total_requests": {
          "description": "",
          "type": "string"
        },
        "updated_by_id": {
          "$ref": "#/definitions/updated_by_id"
        },
        "date_time_updated": {
          "$ref": "#/definitions/date_time_updated"
        }
      }
    },
    "waitlisted_students": {
      "description": "Students on the waitlist queue for a class",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "person_id",
        "student_name",
        "date_requested",
        "sequencer",
        "teaching_area",
        "catalog_number",
        "catalog_suffix",
        "credit_hours",
        "size_mix_category",
        "added_by_id",
        "date_time_added",
        "add_error_message",
        "date_time_error"
      ],
      "properties": {
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
        "person_id": {
          "$ref": "#/definitions/person_id"
        },
        "student_name": {
          "$ref": "#/definitions/student_name"
        },
        "date_requested": {
          "description": "",
          "type": "string"
        },
        "sequencer": {
          "description": "",
          "type": "string"
        },
        "teaching_area": {
          "description": "",
          "type": "string"
        },
        "catalog_number": {
          "description": "",
          "type": "string"
        },
        "catalog_suffix": {
          "description": "",
          "type": "string"
        },
        "credit_hours": {
          "$ref": "#/definitions/credit_hours"
        },
        "size_mix_category": {
          "$ref": "#/definitions/size_mix_category"
        },
        "added_by_id": {
          "description": "",
          "type": "string"
        },
        "date_time_added": {
          "description": "",
          "type": "string"
        },
        "add_error_message": {
          "description": "",
          "type": "string"
        },
        "date_time_error": {
          "description": "",
          "type": "string"
        }
      }
    },
    "enrolled_student_logs": {
      "description": "Log record for enrolled students",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "person_id",
        "credit_hours",
        "grade",
        "student_name",
        "log_action",
        "log_by_id",
        "date_time_log"
      ],
      "properties": {
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
        "person_id": {
          "$ref": "#/definitions/person_id"
        },
        "credit_hours": {
          "$ref": "#/definitions/credit_hours"
        },
        "grade": {
          "description": "",
          "type": "string"
        },
        "student_name": {
          "$ref": "#/definitions/student_name"
        },
        "log_action": {
          "description": "",
          "type": "string"
        },
        "log_by_id": {
          "description": "",
          "type": "string"
        },
        "date_time_log": {
          "description": "",
          "type": "string"
        }
      }
    },
    "waitlisted_student_logs": {
      "description": "Log record of waitlisted students",
      "type": "object",
      "required": [
        "credit_institution",
        "year_term",
        "curriculum_id",
        "title_code",
        "section_number",
        "person_id",
        "student_name",
        "teaching_area",
        "catalog_number",
        "catalog_suffix",
        "credit_hours",
        "log_action",
        "log_by_id",
        "date_time_log"
      ],
      "properties": {
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
        "person_id": {
          "$ref": "#/definitions/person_id"
        },
        "student_name": {
          "$ref": "#/definitions/student_name"
        },
        "teaching_area": {
          "description": "",
          "type": "string"
        },
        "catalog_number": {
          "description": "",
          "type": "string"
        },
        "catalog_suffix": {
          "description": "",
          "type": "string"
        },
        "credit_hours": {
          "$ref": "#/definitions/credit_hours"
        },
        "log_action": {
          "description": "",
          "type": "string"
        },
        "log_by_id": {
          "description": "",
          "type": "string"
        },
        "date_time_log": {
          "description": "",
          "type": "string"
        }
      }
    },
    "top_level_metadata": {
      "type": "object",
      "required": [
        "collection_size",
        "page_start",
        "page_end",
        "page_size",
        "default_page_size",
        "maximum_page_size",
        "field_sets_returned",
        "field_sets_available",
        "default_field_sets"
      ],
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
          "type": "integer",
          "minimum": 0
        },
        "field_sets_returned": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "basic",
              "enrollment_counts",
              "add_approved_students",
              "assigned_instructors",
              "class_limitations",
              "assigned_schedules",
              "course_limitations",
              "enrolled_students",
              "linked_classes",
              "notes",
              "permission_to_add_codes",
              "prerequisites",
              "section_headers",
              "supplemental_counts",
              "waitlisted_students",
              "enrolled_students_log",
              "waitlisted_students_log"
            ]
          }
        },
        "field_sets_available": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "basic",
              "enrollment_counts",
              "add_approved_students",
              "assigned_instructors",
              "class_limitations",
              "assigned_schedules",
              "course_limitations",
              "enrolled_students",
              "linked_classes",
              "notes",
              "permission_to_add_codes",
              "prerequisites",
              "section_headers",
              "supplemental_counts",
              "waitlisted_students",
              "enrolled_students_log",
              "waitlisted_students_log"
            ]
          }
        },
        "default_field_sets": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "basic",
              "enrollment_counts",
              "add_approved_students",
              "assigned_instructors",
              "class_limitations",
              "assigned_schedules",
              "course_limitations",
              "enrolled_students",
              "linked_classes",
              "notes",
              "permission_to_add_codes",
              "prerequisites",
              "section_headers",
              "supplemental_counts",
              "waitlisted_students",
              "enrolled_students_log",
              "waitlisted_students_log"
            ]
          }
        }
      }
    },
    "error": {
      "description": "Error Information",
      "type": "object",
      "properties": {
        "return_code": {
          "type": "integer",
          "format": "int32"
        },
        "explanation": {
          "type": "string"
        },
        "error_data": {
          "type": "string"
        }
      }
    },
    "year_term": {
      "description": "Year and term for class",
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "description": "Winter 2015",
          "type": "string",
          "maxLength": 15
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "curriculum_id": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 5
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "title_code": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "section_number": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "credit_institution": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "description": "BYU Provo Campus",
          "type": "string",
          "maxLength": 15
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "enrollment_status": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 10
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "derived"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "subject_area": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 5
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "related"
          ]
        }
      }
    },
    "course_number": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "related"
          ]
        }
      }
    },
    "course_suffix": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string"
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "related"
          ]
        }
      }
    },
    "course_title": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 30
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "related"
          ]
        }
      }
    },
    "section_type": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 5
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "block_code": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "class_status": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "reg_method": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "lab_quiz_flag": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string"
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "fee": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "related"
          ]
        }
      }
    },
    "honors": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "service_learning": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "fixed_or_variable": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "credit_hours": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "minimum_credit_hours": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "related"
          ]
        }
      }
    },
    "size_mix_category": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 30
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "related"
          ]
        }
      }
    },
    "class_size": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "class_start_date": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 10
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "class_end_date": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 10
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "reg_start_date": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 10
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "derived"
          ]
        }
      }
    },
    "reg_end_date": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 10
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "derived"
          ]
        }
      }
    },
    "control_mix_date": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "waitlist_status": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "combine_rolls": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "combine_counts": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "link_relation": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 15
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "derived"
          ]
        }
      }
    },
    "link_to_year_term": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "link_to_curriculum_id": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "link_to_title_code": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "link_to_section_number": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 3
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "person_id": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 9
        },
        "api_type": {
          "type": "string",
          "enum": [
            "key",
            "read-only",
            "modifiable"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "student_name": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 50
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "related"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "audit_flag": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 1
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "created_by_id": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 9
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "operational"
          ]
        }
      }
    },
    "date_time_created": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 23
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "operational"
          ]
        }
      }
    },
    "date_time_redeemed": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 23
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "operational"
          ]
        }
      }
    },
    "instructor_type": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 20
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "instructor_name": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 50
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "byu_id": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 9
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "net_id": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 15
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "email_address": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 30
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    },
    "updated_by_id": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 9
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "operational"
          ]
        }
      }
    },
    "date_time_updated": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 23
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "operational"
          ]
        }
      }
    },
    "expired_date": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 23
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable",
            "operational"
          ]
        }
      }
    },
    "limitation_type": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 20
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "limitation_name": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 50
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "limitation_value": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 20
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        },
        "key": {
          "type": "boolean"
        }
      }
    },
    "allow_conflict": {
      "type": "object",
      "required": [
        "value",
        "api_type"
      ],
      "properties": {
        "value": {
          "type": "string",
          "maxLength": 20
        },
        "api_type": {
          "type": "string",
          "enum": [
            "read-only",
            "modifiable"
          ]
        }
      }
    }
  }
}