{
  "swagger": "2.0",
    "info": {
      "title": "Identity",
      "description": "Identity Resources of the University API",
      "version": "1.0.0"
    },
    "host": "api.byu.edu",
    "schemes": [
        "https"
    ],
    "basePath": "/byuapi/identities",
    "produces": [
      "application/json"
    ],
    "paths": {
      "/": {
        "get": {
          "summary": "Identities",
          "description": "Returns a collection of BYU-IAM Identities",
          "operationId": "LookupIdentity",
          "parameters": [
            {
              "name": "person_id",
              "in": "query",
              "description": "External PRO identifier",
              "required": false,
              "type": "string"
            },
            {
              "name": "net_id",
              "in": "query",
              "description": "External PRO identifier",
              "required": false,
              "type": "string"
            },
            {
              "name": "byu_id",
              "in": "query",
              "description": "External PRO identifier",
              "required": false,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "A collection of Identities",
              "schema": {
                "$ref": "#/definitions/identities"
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
              "description": "There is no matching Identity",
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
        "post": {
          "summary": "Identities",
          "description": "Creates an Identity",
          "operationId": "CreateIdentity",
          "parameters": [
            {
             "name": "person name",
             "in": "body",
             "description": "The name of the person that an Identity is being created for.",
             "required": true,
             "schema": {
               "$ref": "#/definitions/identity"
             }
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "A collection of Identities",
              "schema": {
                "$ref": "#/definitions/identity"
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
              "description": "There is no matching Identity",
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
          "summary": "Identities",
          "description": "Deletes ONE Identity through a query of one of the three standard IDs",
          "operationId": "deleteIdentity",
          "parameters": [
            {
              "name": "person_id",
              "in": "query",
              "description": "External PRO identifier",
              "required": false,
              "type": "string"
            },
            {
              "name": "net_id",
              "in": "query",
              "description": "External PRO identifier",
              "required": false,
              "type": "string"
            },
            {
              "name": "byu_id",
              "in": "query",
              "description": "External PRO identifier",
              "required": false,
              "type": "string"
            }
          ],
          "tags": [
             "Identities"
          ],
          "responses": {
            "204": {
              "description": "Identity successfully removed"
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
            "default": {
              "description": "Unexpected error",
              "schema": {
                  "$ref": "#/definitions/error"
              }
            }
          }
        },
        "options": {
          "summary": "Identities",
          "description": "Gives a list of the operations this end point can use",
          "operationId": "slashOperations",
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "Supported HTTP Methods",
              "schema": {
                "$ref": "#/definitions/methods"
              }
            },
            "400": {
              "description": "Invalid Request - unable to interpret request",
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
      "/{identity_id}": {
        "get": {
          "summary": "Identities",
          "description": "Returns a singular BYU-IAM Identity",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "A collection of Identities",
              "schema": {
                "$ref": "#/definitions/identity"
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
          "summary": "Identities",
          "description": "Merges two identities (currently not active)",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            },
            {
              "name": "identity_id_2",
              "in": "query",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "Identities successfully merged",
              "schema": {
                "$ref": "#/definitions/identities"
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
              "description": "There is no matching Identity",
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
          "summary": "Identities",
          "description": "Updates an Identity",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "Identity successfully updated",
              "schema": {
                "$ref": "#/definitions/identities"
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
              "description": "There is no matching Identity",
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
          "summary": "Identities",
          "description": "Deletes an Identity through the Identity ID",
          "operationId": "deleteIdentity",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
             "Identities"
          ],
          "responses": {
            "204": {
              "description": "Identity successfully removed"
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
            "default": {
              "description": "Unexpected error",
              "schema": {
                  "$ref": "#/definitions/error"
              }
            }
          }
        },
        "options": {
          "summary": "Identities",
          "description": "Gives a list of the operations this end point can use",
          "operationId": "slashOperations",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "Supported HTTP Methods",
              "schema": {
                "$ref": "#/definitions/methods"
              }
            },
            "400": {
              "description": "Invalid Request - unable to interpret request",
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
      "/{identity_id}/clearances": {
        "get": {
          "summary": "Identities",
          "description": "Retrieve a list of clearances associated with the given identity",
          "operationId": "LookupClearances",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "The list of clearances",
              "schema": {
                "$ref": "#/definitions/identities"
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
              "description": "There is no matching Identity",
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
        "post": {
          "summary": "Identities",
          "description": "Creates a clearance",
          "operationId": "CreateClearance",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "A successful creation of a clearance",
              "schema": {

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
              "description": "There is no matching Identity",
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
        "options": {
          "summary": "Identities",
          "description": "Gives a list of the operations this end point can use",
          "operationId": "slashOperations",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "Supported HTTP Methods",
              "schema": {
                "$ref": "#/definitions/methods"
              }
            },
            "400": {
              "description": "Invalid Request - unable to interpret request",
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
      "/{identity_id}/access_attempts": {
        "get": {
          "summary": "Identities",
          "description": "Retrieve a list of access_attempts associated with the given identity",
          "operationId": "LookupAccesses",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            },
            {
              "name": "credential_id",
              "in": "query",
              "description": "the id of the person accessing the information",
              "required": false,
              "type": "integer"
            },
            {
              "name": "success",
              "in": "query",
              "description": "whether or not the access list is made up of successful attempts",
              "required": false,
              "type": "boolean"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "The list of clearances",
              "schema": {
                "$ref": "#/definitions/identities"
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
              "description": "There is no matching Identity",
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
        "options": {
          "summary": "Identities",
          "description": "Gives a list of the operations this end point can use",
          "operationId": "slashOperations",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "Supported HTTP Methods",
              "schema": {
                "$ref": "#/definitions/methods"
              }
            },
            "400": {
              "description": "Invalid Request - unable to interpret request",
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
      "/{identity_id}/email": {
        "put": {
          "summary": "Identities",
          "description": "Updates the selected email address",
          "operationId": "updateEmailAddress",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            },
            {
              "name": "email_address",
              "in": "query",
              "description": "The email that is going to be changed",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "Email successfully changed",
              "schema": {
                "$ref": "#/definitions/identities"
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
              "description": "There is no matching Identity",
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
        "post": {
          "summary": "Identities",
          "description": "Adds an Email",
          "operationId": "addEmail",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            },
            {
             "name": "email_address",
             "in": "body",
             "description": "The Email that is going to be added",
             "required": true,
             "schema": {
               "$ref": "#/definitions/identities"
             }
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "201": {
              "description": "The email has been added",
              "schema": {
                "$ref": "#/definitions/identities"
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
              "description": "There is no matching Identity",
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
          "summary": "Identities",
          "description": "Deletes and email",
          "operationId": "deleteEmail",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            },
            {
              "name": "email_address",
              "in": "query",
              "description": "The email address that will be deleted",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
             "Identities"
          ],
          "responses": {
            "204": {
              "description": "Identity successfully removed"
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
            "default": {
              "description": "Unexpected error",
              "schema": {
                  "$ref": "#/definitions/error"
              }
            }
          }
        },
        "options": {
          "summary": "Identities",
          "description": "Gives a list of the operations this end point can use",
          "operationId": "slashOperations",
          "parameters": [
            {
              "name": "identity_id",
              "in": "path",
              "description": "External BYU-IAM identifier",
              "required": true,
              "type": "string"
            }
          ],
          "tags": [
            "Identities"
          ],
          "responses": {
            "200": {
              "description": "Supported HTTP Methods",
              "schema": {
                "$ref": "#/definitions/methods"
              }
            },
            "400": {
              "description": "Invalid Request - unable to interpret request",
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
      }
    },
    "definitions": {
      "identities": {
        "description": "A collection of Identities",
        "type": "object",
        "required": [
          "values"
        ],
        "properties": {
          "links": {
            "description": "Hypermedia Links that impact the identity collection",
            "type": "object",
            "properties": {
              "identities.info": {
                "$ref": "#/definitions/links"
              },
              "identities.added": {
                "$ref": "#/definitions/links"
              },
              "identities.next": {
                "$ref": "#/definitions/links"
              },
              "identities.previous": {
                "$ref": "#/definitions/links"
              }
            }
          },
          "metadata": {
            "$ref": "#/definitions/top_level_metadata"
          },
          "values": {
            "type": "array",
            "items": {
              "$ref": "#/definitions/identity"
            }
          }
        }
      },
      "methods": {
        "description": "Supported HTTP Methods",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "identity_id": {
        "description": "assigned 9 character id",
        "type": "object",
        "required": [
          "value",
          "api_type",
          "key"
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
          },
          "key": {
            "type": "boolean"
          }
        }
      },
      "date_time_updated": {
        "description": "the most recent time updated",
        "type": "object",
        "required": [
          "value",
          "api_type"
        ],
        "properties": {
          "value": {
            "type": "string",
            "format": "date_time"
          },
          "api_type": {
            "type": "string",
            "enum": [
              "system"
            ]
          }
        }
      },
      "updated_by_id": {
        "description": "The ID of the person who last updated the identity",
        "type": "object",
        "required": [
          "value",
          "api_type",
          "description"
        ],
        "properties": {
          "value": {
            "type": "string",
            "maxLength": 9
          },
          "api_type": {
            "type": "string",
            "enum": [
              "system"
            ]
          },
          "description": {
            "type": "string"
          }
        }
      },
      "date_time_created": {
        "description": "When was the identity created",
        "type": "object",
        "required": [
          "value",
          "api_type"
        ],
        "properties": {
          "value": {
            "type": "string",
            "format": "date-time"
          },
          "api_type": {
            "type": "string",
            "enum": [
                "system"
            ]
          }
        }
      },
      "created_by_id": {
        "description": "The ID of the person who created the identity",
        "type": "object",
        "required": [
          "value",
          "api_type",
          "description"
        ],
        "properties": {
          "value": {
            "type": "string",
            "maxLength": 9
          },
          "api_type": {
            "type": "string",
            "enum": [
              "system"
            ]
          },
          "description": {
            "type": "string"
          }
        }
      },
      "identity_type": {
        "description": "The form of the user accessing the identity table",
        "type": "object",
        "required": [
          "value",
          "api_type",
          "description"
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
              "derived"
            ]
          },
          "description": {
            "type": "string"
          }
        }
      },
      "identity_name": {
        "description": "The name of the identity",
        "type": "object",
        "required": [
          "value",
          "api_type",
        ],
        "properties": {
          "value": {
            "type": "string",
            "maxLength": 100
          },
          "api_type": {
            "type": "string",
            "enum": [
              "modifiable",
              "read-only"
            ]
          }
        }
      },
      "uuid": {
        "description": "A unique identifier given when needed",
        "type": "object",
        "required": [
          "value",
          "api_type",
          "key"
        ],
        "properties": {
          "value": {
            "type": "string",
            "maxLength": 36
          },
          "api_type": {
            "type": "string",
            "enum": [
              "system",
              "modifiable",
              "read-only"
            ]
          },
          "key": {
            "type": "boolean"
          }
        }
      },
      "credential_id": {
        "description": "A sub resource id dealing with the access system",
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
              "system",
              "read_only"
            ]
          }
        }
      },
      "success": {
        "description": "A boolean set int the access sub resource id",
        "type": "object",
        "required": [
          "value",
          "api_type"
        ],
        "properties": {
          "value": {
            "type": "boolean"
          },
          "api_type": {
            "type": "boolean"
          }
        }
      },
      "identity": {
        "type": "object",
        "properties": {
          "links": {
            "description": "Hypermedia Links that impact an individual identity in the collection",
            "type": "object",
            "properties": {
              "identities.info": {
                "$ref": "#/definitions/links"
              },
              "identities.modify": {
                "$ref": "#/definitions/links"
              },
              "identities.create": {
                "$ref": "#/definitions/links"
              },
              "identities.delete": {
                "$ref": "#/definitions/links"
              }
            }
          },
          "identity_id": {
            "$ref": "#/definitions/identity_id"
          },
          "date_time_updated": {
            "$ref": "#/definitions/date_time_updated"
          },
          "date_time_created": {
            "$ref": "#/definitions/date_time_created"
          },
          "updated_by_id": {
            "$ref": "#/definitions/updated_by_id"
          },
          "created_by_id": {
            "$ref": "#/definitions/created_by_id"
          },
          "identity_type": {
            "$ref": "#/definitions/identity_type"
          },
          "identity_name": {
            "$ref": "#/definitions/identity_name"
          },
          "uuid": {
            "$ref": "#/definitions/uuid"
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
      "sub_level_metadata": {
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