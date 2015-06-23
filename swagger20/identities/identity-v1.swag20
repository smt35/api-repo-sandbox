{
    "swagger": "2.0",
    "info": {
        "title": "Identity",
        "description": "Identity Resource of the University API",
        "version": "1.0.0"
    },
    "host": "api.byu.edu",
    "schemes": [
        "https"
    ],
    "basePath": "/v1/identities",
    "produces": [
        "application/json"
    ],
    "paths": {
        "/": {
            "get": {
                "summary": "Identities",
                "description": "Returns a collection of BYU-IAM Identities\n",
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
                    "Identities"
                ],
                "responses": {
                    "200": {
                        "description": "A collection of Identities",
                        "schema": {
                            "$ref": "#/definitions/identities"
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
                "description": "Returns a collection of BYU-IAM Identities\n",
                "parameters": [
                    {
                        "name": "identity_id",
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
            }
        }
    },
    "definitions": {
        "identities": {
            "type": "object",
            "required": [
                "values"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact the entire Identities collection",
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
                        "$ref": "#/definitions/identity"
                    }
                }
            }
        },
        "identity": {
            "type": "object",
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "basic": {
                    "$ref": "#/definitions/item.basic"
                },
                "addresses": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Addresses Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.addresses"
                            }
                        }
                    }
                },
                "associated_identities": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Associated Identities Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.associated_identities"
                            }
                        }
                    }
                },
                "credentials": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Credentials Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.credentials"
                            }
                        }
                    }
                },
                "emails": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Emails Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.emails"
                            }
                        }
                    }
                },
                "family_phones": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Family Phones Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.family_phones"
                            }
                        }
                    }
                },
                "group_memberships": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Group Memberships Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.group_memberships"
                            }
                        }
                    }
                },
                "groups_administered_by": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Groups Administered By Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.groups_administered_by"
                            }
                        }
                    }
                },
                "guest_accesses": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Guest Accesses Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.guest_accesses"
                            }
                        }
                    }
                },
                "guest_validation_phrases": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Guest Validation Phrases Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.guest_validation_phrases"
                            }
                        }
                    }
                },
                "info_area_authorizations": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Info Area Authorizations Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.info_area_authorizations"
                            }
                        }
                    }
                },
                "info_areas_administered_by": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Info Areas Administered By Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.info_areas_administered_by"
                            }
                        }
                    }
                },
                "phones": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Phones Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.phones"
                            }
                        }
                    }
                },
                "address_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Address Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.address_logs"
                            }
                        }
                    }
                },
                "associated_identity_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Associated Identity Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.associated_identity_logs"
                            }
                        }
                    }
                },
                "authentication_histories": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Authentication Histories Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.authentication_histories"
                            }
                        }
                    }
                },
                "credential_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Credential Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.credential_logs"
                            }
                        }
                    }
                },
                "email_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Email Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.email_logs"
                            }
                        }
                    }
                },
                "family_phone_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Family Phone Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.family_phone_logs"
                            }
                        }
                    }
                },
                "group_membership_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Group Membership Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.group_membership_logs"
                            }
                        }
                    }
                },
                "groups_administered_by_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Groups Administered By Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.groups_administered_by_logs"
                            }
                        }
                    }
                },
                "guest_access_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Guest Access Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.guest_access_logs"
                            }
                        }
                    }
                },
                "guest_validation_phrase_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Guest Validation Phrase Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.guest_validation_phrase_logs"
                            }
                        }
                    }
                },
                "identity_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Identity Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.identity_logs"
                            }
                        }
                    }
                },
                "info_area_authorization_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Info Area Authorization Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.info_area_authorization_logs"
                            }
                        }
                    }
                },
                "info_areas_administered_by_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Info Areas Administered By Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.info_areas_administered_by_logs"
                            }
                        }
                    }
                },
                "phone_logs": {
                    "type": "object",
                    "required": [
                        "values"
                    ],
                    "properties": {
                        "links": {
                            "description": "Hypermedia Links that impact the Phone Logs Collection",
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/links"
                            }
                        },
                        "metadata": {
                            "$ref": "#/definitions/sub_level_metadata"
                        },
                        "values": {
                            "type": "array",
                            "items": {
                                "$ref": "#/definitions/item.phone_logs"
                            }
                        }
                    }
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
            "required": [
                "collection_size",
                "page_start",
                "page_end",
                "page_size",
                "default_page_size",
                "maximum_page_size",
                "field_sets_returned",
                "field_sets_available",
                "field_sets_default"
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
            "required": [
                "collection_size",
                "page_start",
                "page_end",
                "page_size",
                "default_page_size",
                "maximum_page_size"
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
                    "type": "integer"
                }
            }
        },
        "item.addresses": {
            "type": "object",
            "required": [
                "identity_id",
                "address_type",
                "address_line_1",
                "address_line_2",
                "address_line_3",
                "address_line_4",
                "country_code",
                "city",
                "state_code",
                "postal_code",
                "room",
                "building",
                "unlisted",
                "campus_address_f",
                "created_by_id",
                "created_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Addresses collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "address_type": {
                    "$ref": "#/definitions/attr.address_type"
                },
                "address_line_1": {
                    "$ref": "#/definitions/attr.address_line_1"
                },
                "address_line_2": {
                    "$ref": "#/definitions/attr.address_line_2"
                },
                "address_line_3": {
                    "$ref": "#/definitions/attr.address_line_3"
                },
                "address_line_4": {
                    "$ref": "#/definitions/attr.address_line_4"
                },
                "country_code": {
                    "$ref": "#/definitions/attr.country_code"
                },
                "city": {
                    "$ref": "#/definitions/attr.city"
                },
                "state_code": {
                    "$ref": "#/definitions/attr.state_code"
                },
                "postal_code": {
                    "$ref": "#/definitions/attr.postal_code"
                },
                "room": {
                    "$ref": "#/definitions/attr.room"
                },
                "building": {
                    "$ref": "#/definitions/attr.building"
                },
                "unlisted": {
                    "$ref": "#/definitions/attr.unlisted"
                },
                "campus_address_f": {
                    "$ref": "#/definitions/attr.campus_address_f"
                },
                "created_by_id": {
                    "$ref": "#/definitions/attr.created_by_id"
                },
                "created_dttm": {
                    "$ref": "#/definitions/attr.created_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.associated_identities": {
            "type": "object",
            "required": [
                "identity_id",
                "associated_identity_id",
                "association_type",
                "created_by_id",
                "created_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "associated_identity_id": {
                    "$ref": "#/definitions/attr.associated_identity_id"
                },
                "association_type": {
                    "$ref": "#/definitions/attr.association_type"
                },
                "created_by_id": {
                    "$ref": "#/definitions/attr.created_by_id"
                },
                "created_dttm": {
                    "$ref": "#/definitions/attr.created_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.basic": {
            "description": "Basic attributes for the Identity Resource",
            "type": "object",
            "required": [
                "byu_iam_guid",
                "identity_id",
                "person_id",
                "byu_id",
                "net_id",
                "identity_name",
                "identity_type",
                "restricted",
                "email",
                "phone_number",
                "texts_okay",
                "created_by_id",
                "created_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "byu_iam_guid": {
                    "$ref": "#/definitions/attr.byu_iam_guid"
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "person_id": {
                    "$ref": "#/definitions/attr.person_id"
                },
                "byu_id": {
                    "$ref": "#/definitions/attr.byu_id"
                },
                "net_id": {
                    "$ref": "#/definitions/attr.net_id"
                },
                "identity_name": {
                    "$ref": "#/definitions/attr.identity_name"
                },
                "identity_type": {
                    "$ref": "#/definitions/attr.identity_type"
                },
                "restricted": {
                    "$ref": "#/definitions/attr.restricted"
                },
                "email": {
                    "$ref": "#/definitions/attr.email"
                },
                "phone_number": {
                    "$ref": "#/definitions/attr.phone_number"
                },
                "texts_okay": {
                    "$ref": "#/definitions/attr.texts_okay"
                },
                "created_by_id": {
                    "$ref": "#/definitions/attr.created_by_id"
                },
                "created_dttm": {
                    "$ref": "#/definitions/attr.created_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.credentials": {
            "type": "object",
            "required": [
                "identity_id",
                "credential_name",
                "authentication_domain",
                "created_by_id",
                "created_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "credential_name": {
                    "$ref": "#/definitions/attr.credential_name"
                },
                "authentication_domain": {
                    "$ref": "#/definitions/attr.authentication_domain"
                },
                "created_by_id": {
                    "$ref": "#/definitions/attr.created_by_id"
                },
                "created_dttm": {
                    "$ref": "#/definitions/attr.created_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.emails": {
            "type": "object",
            "required": [
                "identity_id",
                "email",
                "unlisted",
                "created_by_id",
                "created_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "email": {
                    "$ref": "#/definitions/attr.email"
                },
                "unlisted": {
                    "$ref": "#/definitions/attr.unlisted"
                },
                "created_by_id": {
                    "$ref": "#/definitions/attr.created_by_id"
                },
                "created_dttm": {
                    "$ref": "#/definitions/attr.created_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.family_phones": {
            "type": "object",
            "required": [
                "identity_id",
                "phone_number",
                "permanent_tracking_f",
                "emergency_use_f",
                "country_code",
                "cell",
                "contact_person",
                "relationship",
                "created_by_id",
                "created_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "phone_number": {
                    "$ref": "#/definitions/attr.phone_number"
                },
                "permanent_tracking_f": {
                    "$ref": "#/definitions/attr.permanent_tracking_f"
                },
                "emergency_use_f": {
                    "$ref": "#/definitions/attr.emergency_use_f"
                },
                "country_code": {
                    "$ref": "#/definitions/attr.country_code"
                },
                "cell": {
                    "$ref": "#/definitions/attr.cell"
                },
                "contact_person": {
                    "$ref": "#/definitions/attr.contact_person"
                },
                "relationship": {
                    "$ref": "#/definitions/attr.relationship"
                },
                "created_by_id": {
                    "$ref": "#/definitions/attr.created_by_id"
                },
                "created_dttm": {
                    "$ref": "#/definitions/attr.created_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.group_memberships": {
            "type": "object",
            "required": [
                "identity_id",
                "group_id",
                "group_type",
                "effective_date",
                "expiration_date",
                "granted_by_id",
                "granted_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "group_id": {
                    "$ref": "#/definitions/attr.group_id"
                },
                "group_type": {
                    "$ref": "#/definitions/attr.group_type"
                },
                "effective_date": {
                    "$ref": "#/definitions/attr.effective_date"
                },
                "expiration_date": {
                    "$ref": "#/definitions/attr.expiration_date"
                },
                "granted_by_id": {
                    "$ref": "#/definitions/attr.granted_by_id"
                },
                "granted_dttm": {
                    "$ref": "#/definitions/attr.granted_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.groups_administered_by": {
            "type": "object",
            "required": [
                "identity_id",
                "group_id",
                "owner_f",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "group_id": {
                    "$ref": "#/definitions/attr.group_id"
                },
                "owner_f": {
                    "$ref": "#/definitions/attr.owner_f"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.guest_accesses": {
            "type": "object",
            "required": [
                "identity_id",
                "guest_access_role",
                "related_identity_id",
                "access_type",
                "categories",
                "expiration_date",
                "created_by_id",
                "created_dttm",
                "accepted_dttm",
                "revoked_by_id",
                "revoked_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "guest_access_role": {
                    "$ref": "#/definitions/attr.guest_access_role"
                },
                "related_identity_id": {
                    "$ref": "#/definitions/attr.related_identity_id"
                },
                "access_type": {
                    "$ref": "#/definitions/attr.access_type"
                },
                "categories": {
                    "$ref": "#/definitions/attr.categories"
                },
                "expiration_date": {
                    "$ref": "#/definitions/attr.expiration_date"
                },
                "created_by_id": {
                    "$ref": "#/definitions/attr.created_by_id"
                },
                "created_dttm": {
                    "$ref": "#/definitions/attr.created_dttm"
                },
                "accepted_dttm": {
                    "$ref": "#/definitions/attr.accepted_dttm"
                },
                "revoked_by_id": {
                    "$ref": "#/definitions/attr.revoked_by_id"
                },
                "revoked_dttm": {
                    "$ref": "#/definitions/attr.revoked_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.guest_validation_phrases": {
            "type": "object",
            "required": [
                "identity_id",
                "validation_phrase",
                "ferpa_last_displayed_dttm",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "validation_phrase": {
                    "$ref": "#/definitions/attr.validation_phrase"
                },
                "ferpa_last_displayed_dttm": {
                    "$ref": "#/definitions/attr.ferpa_last_displayed_dttm"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.info_area_authorizations": {
            "type": "object",
            "required": [
                "identity_id",
                "credit_institution",
                "info_area",
                "effective_date",
                "limitation_type",
                "limitation_value",
                "granted_dttm",
                "expired_date",
                "revoked_dttm",
                "update_type",
                "clock_start_time",
                "clock_end_time",
                "allowable_domain"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "credit_institution": {
                    "$ref": "#/definitions/attr.credit_institution"
                },
                "info_area": {
                    "$ref": "#/definitions/attr.info_area"
                },
                "effective_date": {
                    "$ref": "#/definitions/attr.effective_date"
                },
                "limitation_type": {
                    "$ref": "#/definitions/attr.limitation_type"
                },
                "limitation_value": {
                    "$ref": "#/definitions/attr.limitation_value"
                },
                "granted_dttm": {
                    "$ref": "#/definitions/attr.granted_dttm"
                },
                "expired_date": {
                    "$ref": "#/definitions/attr.expired_date"
                },
                "revoked_dttm": {
                    "$ref": "#/definitions/attr.revoked_dttm"
                },
                "update_type": {
                    "$ref": "#/definitions/attr.update_type"
                },
                "clock_start_time": {
                    "$ref": "#/definitions/attr.clock_start_time"
                },
                "clock_end_time": {
                    "$ref": "#/definitions/attr.clock_end_time"
                },
                "allowable_domain": {
                    "$ref": "#/definitions/attr.allowable_domain"
                }
            }
        },
        "item.info_areas_administered_by": {
            "type": "object",
            "required": [
                "identity_id",
                "credit_institution",
                "info_area",
                "effective_date",
                "limitation_type",
                "limitation_value",
                "granted_by_id",
                "granted_dttm",
                "expired_date",
                "revoked_by_id",
                "revoked_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Info Areas Administered By collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "credit_institution": {
                    "$ref": "#/definitions/attr.credit_institution"
                },
                "info_area": {
                    "$ref": "#/definitions/attr.info_area"
                },
                "effective_date": {
                    "$ref": "#/definitions/attr.effective_date"
                },
                "limitation_type": {
                    "$ref": "#/definitions/attr.limitation_type"
                },
                "limitation_value": {
                    "$ref": "#/definitions/attr.limitation_value"
                },
                "granted_by_id": {
                    "$ref": "#/definitions/attr.granted_by_id"
                },
                "granted_dttm": {
                    "$ref": "#/definitions/attr.granted_dttm"
                },
                "expired_date": {
                    "$ref": "#/definitions/attr.expired_date"
                },
                "revoked_by_id": {
                    "$ref": "#/definitions/attr.revoked_by_id"
                },
                "revoked_dttm": {
                    "$ref": "#/definitions/attr.revoked_dttm"
                },
                "update_type": {
                    "$ref": "#/definitions/attr.update_type"
                },
                "clock_start_time": {
                    "$ref": "#/definitions/attr.clock_start_time"
                },
                "clock_end_time": {
                    "$ref": "#/definitions/attr.clock_end_time"
                },
                "allowable_domain": {
                    "$ref": "#/definitions/attr.allowable_domain"
                }
            }
        },
        "item.phones": {
            "type": "object",
            "required": [
                "identity_id",
                "phone_number",
                "country_code",
                "time_code",
                "cell",
                "texts_okay",
                "tty",
                "primary_f",
                "unlisted",
                "created_by_id",
                "created_dttm",
                "updated_by_id",
                "updated_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Phones collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "phone_number": {
                    "$ref": "#/definitions/attr.phone_number"
                },
                "country_code": {
                    "$ref": "#/definitions/attr.country_code"
                },
                "time_code": {
                    "$ref": "#/definitions/attr.time_code"
                },
                "cell": {
                    "$ref": "#/definitions/attr.cell"
                },
                "texts_okay": {
                    "$ref": "#/definitions/attr.texts_okay"
                },
                "tty": {
                    "$ref": "#/definitions/attr.tty"
                },
                "primary_f": {
                    "$ref": "#/definitions/attr.primary_f"
                },
                "unlisted": {
                    "$ref": "#/definitions/attr.unlisted"
                },
                "created_by_id": {
                    "$ref": "#/definitions/attr.created_by_id"
                },
                "created_dttm": {
                    "$ref": "#/definitions/attr.created_dttm"
                },
                "updated_by_id": {
                    "$ref": "#/definitions/attr.updated_by_id"
                },
                "updated_dttm": {
                    "$ref": "#/definitions/attr.updated_dttm"
                }
            }
        },
        "item.address_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "address_type",
                "log_dttm",
                "log_action",
                "log_by_id",
                "address_line_1",
                "address_line_2",
                "address_line_3",
                "address_line_4",
                "country_code",
                "city",
                "state_code",
                "postal_code",
                "room",
                "building",
                "unlisted",
                "campus_address_f"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Address Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "address_type": {
                    "$ref": "#/definitions/attr.address_type"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                },
                "address_line_1": {
                    "$ref": "#/definitions/attr.address_line_1"
                },
                "address_line_2": {
                    "$ref": "#/definitions/attr.address_line_2"
                },
                "address_line_3": {
                    "$ref": "#/definitions/attr.address_line_3"
                },
                "address_line_4": {
                    "$ref": "#/definitions/attr.address_line_4"
                },
                "country_code": {
                    "$ref": "#/definitions/attr.country_code"
                },
                "city": {
                    "$ref": "#/definitions/attr.city"
                },
                "state_code": {
                    "$ref": "#/definitions/attr.state_code"
                },
                "postal_code": {
                    "$ref": "#/definitions/attr.postal_code"
                },
                "room": {
                    "$ref": "#/definitions/attr.room"
                },
                "building": {
                    "$ref": "#/definitions/attr.building"
                },
                "unlisted": {
                    "$ref": "#/definitions/attr.unlisted"
                },
                "campus_address_f": {
                    "$ref": "#/definitions/attr.campus_address_f"
                }
            }
        },
        "item.associated_identity_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "associated_identity_id",
                "association_type",
                "log_dttm",
                "log_action",
                "log_by_id"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identity Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "associated_identity_id": {
                    "$ref": "#/definitions/attr.associated_identity_id"
                },
                "association_type": {
                    "$ref": "#/definitions/attr.association_type"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                }
            }
        },
        "item.authentication_histories": {
            "type": "object",
            "required": [
                "identity_id",
                "credential_name",
                "authentication_domain",
                "federated_system_id",
                "log_dttm",
                "log_action"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Authentication Histories collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "credential_name": {
                    "$ref": "#/definitions/attr.credential_name"
                },
                "authentication_domain": {
                    "$ref": "#/definitions/attr.authentication_domain"
                },
                "federated_system_id": {
                    "$ref": "#/definitions/attr.federated_system_id"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                }
            }
        },
        "item.credential_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "credential_name",
                "authentication_domain",
                "log_dttm",
                "log_action",
                "log_by_id"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Credential Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "credential_name": {
                    "$ref": "#/definitions/attr.credential_name"
                },
                "authentication_domain": {
                    "$ref": "#/definitions/attr.authentication_domain"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                }
            }
        },
        "item.email_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "email",
                "unlisted",
                "log_dttm",
                "log_action",
                "log_by_id"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Email Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "email": {
                    "$ref": "#/definitions/attr.email"
                },
                "unlisted": {
                    "$ref": "#/definitions/attr.unlisted"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                }
            }
        },
        "item.family_phone_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "phone_number",
                "log_dttm",
                "log_action",
                "log_by_id",
                "permanent_tracking_f",
                "emergency_use_f",
                "country_code",
                "cell",
                "contact_person",
                "relationship"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Family Phone Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "phone_number": {
                    "$ref": "#/definitions/attr.phone_number"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                },
                "permanent_tracking_f": {
                    "$ref": "#/definitions/attr.permanent_tracking_f"
                },
                "emergency_use_f": {
                    "$ref": "#/definitions/attr.emergency_use_f"
                },
                "country_code": {
                    "$ref": "#/definitions/attr.country_code"
                },
                "cell": {
                    "$ref": "#/definitions/attr.cell"
                },
                "contact_person": {
                    "$ref": "#/definitions/attr.contact_person"
                },
                "relationship": {
                    "$ref": "#/definitions/attr.relationship"
                }
            }
        },
        "item.group_membership_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "group_id",
                "log_dttm",
                "log_action",
                "log_by_id",
                "group_type",
                "effective_date",
                "expiration_date"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Group Membership Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "group_id": {
                    "$ref": "#/definitions/attr.group_id"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                },
                "group_type": {
                    "$ref": "#/definitions/attr.group_type"
                },
                "effective_date": {
                    "$ref": "#/definitions/attr.effective_date"
                },
                "expiration_date": {
                    "$ref": "#/definitions/attr.expiration_date"
                }
            }
        },
        "item.groups_administered_by_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "group_id",
                "owner_f",
                "log_dttm",
                "log_action",
                "log_by_id"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Groups Administered By Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "group_id": {
                    "$ref": "#/definitions/attr.group_id"
                },
                "owner_f": {
                    "$ref": "#/definitions/attr.owner_f"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                }
            }
        },
        "item.guest_access_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "guest_access_role",
                "related_identity_id",
                "log_dttm",
                "log_action",
                "log_by_id",
                "access_type",
                "categories",
                "expiration_date"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Guest Access Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "guest_access_role": {
                    "$ref": "#/definitions/attr.guest_access_role"
                },
                "related_identity_id": {
                    "$ref": "#/definitions/attr.related_identity_id"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                },
                "access_type": {
                    "$ref": "#/definitions/attr.access_type"
                },
                "categories": {
                    "$ref": "#/definitions/attr.categories"
                },
                "expiration_date": {
                    "$ref": "#/definitions/attr.expiration_date"
                }
            }
        },
        "item.guest_validation_phrase_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "log_dttm",
                "log_action",
                "log_by_id",
                "validation_phrase",
                "ferpa_last_displayed_dttm"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Guest Validation Phrase Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                },
                "validation_phrase": {
                    "$ref": "#/definitions/attr.validation_phrase"
                },
                "ferpa_last_displayed_dttm": {
                    "$ref": "#/definitions/attr.ferpa_last_displayed_dttm"
                }
            }
        },
        "item.identity_logs": {
            "description": "Basic attributes for the Identity Logs Resource",
            "type": "object",
            "required": [
                "byu_iam_guid",
                "identity_id",
                "person_id",
                "byu_id",
                "net_id",
                "identity_name",
                "identity_type",
                "restricted",
                "email",
                "phone_number",
                "texts_okay",
                "log_dttm",
                "log_action",
                "log_by_id"
            ],
            "properties": {
                "byu_iam_guid": {
                    "$ref": "#/definitions/attr.byu_iam_guid"
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "person_id": {
                    "$ref": "#/definitions/attr.person_id"
                },
                "byu_id": {
                    "$ref": "#/definitions/attr.byu_id"
                },
                "net_id": {
                    "$ref": "#/definitions/attr.net_id"
                },
                "identity_name": {
                    "$ref": "#/definitions/attr.identity_name"
                },
                "identity_type": {
                    "$ref": "#/definitions/attr.identity_type"
                },
                "restricted": {
                    "$ref": "#/definitions/attr.restricted"
                },
                "email": {
                    "$ref": "#/definitions/attr.email"
                },
                "phone_number": {
                    "$ref": "#/definitions/attr.phone_number"
                },
                "texts_okay": {
                    "$ref": "#/definitions/attr.texts_okay"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                }
            }
        },
        "item.info_area_authorization_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "credit_institution",
                "info_area",
                "effective_date",
                "log_dttm",
                "log_action",
                "log_by_id",
                "limitation_type",
                "limitation_value",
                "expired_date",
                "update_type",
                "clock_start_time",
                "clock_end_time",
                "allowable_domain"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Associated Identities collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "credit_institution": {
                    "$ref": "#/definitions/attr.credit_institution"
                },
                "info_area": {
                    "$ref": "#/definitions/attr.info_area"
                },
                "effective_date": {
                    "$ref": "#/definitions/attr.effective_date"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                },
                "limitation_type": {
                    "$ref": "#/definitions/attr.limitation_type"
                },
                "limitation_value": {
                    "$ref": "#/definitions/attr.limitation_value"
                },
                "expired_date": {
                    "$ref": "#/definitions/attr.expired_date"
                },
                "update_type": {
                    "$ref": "#/definitions/attr.update_type"
                },
                "clock_start_time": {
                    "$ref": "#/definitions/attr.clock_start_time"
                },
                "clock_end_time": {
                    "$ref": "#/definitions/attr.clock_end_time"
                },
                "allowable_domain": {
                    "$ref": "#/definitions/attr.allowable_domain"
                }
            }
        },
        "item.info_areas_administered_by_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "credit_institution",
                "info_area",
                "effective_date",
                "log_dttm",
                "log_action",
                "log_by_id",
                "limitation_type",
                "limitation_value",
                "expired_date"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Info Areas Administered By Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "credit_institution": {
                    "$ref": "#/definitions/attr.credit_institution"
                },
                "info_area": {
                    "$ref": "#/definitions/attr.info_area"
                },
                "effective_date": {
                    "$ref": "#/definitions/attr.effective_date"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                },
                "limitation_type": {
                    "$ref": "#/definitions/attr.limitation_type"
                },
                "limitation_value": {
                    "$ref": "#/definitions/attr.limitation_value"
                },
                "expired_date": {
                    "$ref": "#/definitions/attr.expired_date"
                }
            }
        },
        "item.phone_logs": {
            "type": "object",
            "required": [
                "identity_id",
                "phone_number",
                "log_dttm",
                "log_action",
                "log_by_id",
                "country_code",
                "time_code",
                "cell",
                "texts_okay",
                "tty",
                "primary_f",
                "unlisted"
            ],
            "properties": {
                "links": {
                    "description": "Hypermedia Links that impact an item in the Phone Logs collection",
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/links"
                    }
                },
                "identity_id": {
                    "$ref": "#/definitions/attr.identity_id"
                },
                "phone_number": {
                    "$ref": "#/definitions/attr.phone_number"
                },
                "log_dttm": {
                    "$ref": "#/definitions/attr.log_dttm"
                },
                "log_action": {
                    "$ref": "#/definitions/attr.log_action"
                },
                "log_by_id": {
                    "$ref": "#/definitions/attr.log_by_id"
                },
                "country_code": {
                    "$ref": "#/definitions/attr.country_code"
                },
                "time_code": {
                    "$ref": "#/definitions/attr.time_code"
                },
                "cell": {
                    "$ref": "#/definitions/attr.cell"
                },
                "texts_okay": {
                    "$ref": "#/definitions/attr.texts_okay"
                },
                "tty": {
                    "$ref": "#/definitions/attr.tty"
                },
                "primary_f": {
                    "$ref": "#/definitions/attr.primary_f"
                },
                "unlisted": {
                    "$ref": "#/definitions/attr.unlisted"
                }
            }
        },
        "attr.accepted_dttm": {
            "description": "When was the authorization accepted?",
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
                        "modifiable",
                        "read-only"
                    ]
                }
            }
        },
        "attr.access_type": {
            "description": "Defines the access granted in a delegation",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
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
                        "modifiable",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.address_line_1": {
            "description": "Free-format entry of the first line of the address",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 40
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
        "attr.address_line_2": {
            "description": "Free-format entry of the second line of the address",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 40
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
        "attr.address_line_3": {
            "description": "Free-format entry of the third line of the address",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 40
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
        "attr.address_line_4": {
            "description": "Free-format entry of fourth line of the address",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 40
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
        "attr.address_type": {
            "description": "Type of address as defined by the individual",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 3,
                    "enum": [
                        "MAL",
                        "PRM",
                        "RES",
                        "WRK"
                    ]
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.allowable_domain": {
            "description": "IP addresses allowed to utilize authorization",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "format": "ipv6"
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
        "attr.associated_identity_id": {
            "description": "External BYU-IAM identifier of the associated identity",
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
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.association_type": {
            "description": "Association between two identities",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 6
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.authentication_domain": {
            "description": "Name of the Authentication Credential Provider",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
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
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.building": {
            "description": "Second portion of address_line_1 when campus_flag_f = \"Y\"",
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
                        "derived"
                    ]
                }
            }
        },
        "attr.byu_iam_guid": {
            "description": "Internal BYU-IAM identifier",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 36
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.byu_id": {
            "description": "External PRO identifier",
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
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.campus_address_f": {
            "description": "Is this an on-campus address?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": [
                        "N",
                        "Y"
                    ]
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "modifiable",
                        "read-only",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                }
            }
        },
        "attr.categories": {
            "description": "Category of applications granted in guest delegation",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
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
        "attr.cell": {
            "description": "Is this phone a cell phone?",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": [
                      "N",
                      "Y"
                    ]
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
        "attr.city": {
            "description": "Free-format entry of city name",
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
        "attr.clock_start_time": {
            "description": "Time of Day authorization starts",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "format": "time"
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
        "attr.clock_end_time": {
            "description": "Time of Day authorization ends",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "format": "time"
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
        "attr.contact_person": {
            "description": "What is most likely to answer the phone?",
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
        "attr.created_by_id": {
            "description": "Who created the identity resource?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "description": "identity_id of the entity that created this identity",
                    "type": "string"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "operational"
                    ]
                },
                "descr": {
                    "description": "identity_name associated with the created_by_id",
                    "type": "string"
                }
            }
        },
        "attr.created_dttm": {
            "description": "When was the identity resource created?",
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
                        "operational"
                    ]
                }
            }
        },
        "attr.credential_name": {
            "description": "Public Credential, such as net_id or google user account",
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
        "attr.credit_institution": {
            "description": "Institutions allowed to grant university credit",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 15
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.country_code": {
            "description": "Standard Country Codes",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
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
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.effective_date": {
            "description": "When will the authorization take effect?",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "format": "date"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.email": {
            "description": "E-mail address used by university",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "format": "email"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related",
                        "operational",
                        "derived"
                    ]
                }
            }
        },
        "attr.emergency_use_f": {
            "description": "Can this phone be used for emergency contact?",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": [
                      "N",
                      "Y"
                    ]
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
        "attr.expiration_date": {
            "description": "When will the authorization expire?",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "format": "date"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.expired_date": {
            "description": "When will the authorization expire?",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "format": "date"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.federated_system_id": {
            "description": "Federated System ID involved in the authenication action",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "type": "string"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "operational"
                    ]
                },
                "descr": {
                    "type": "string"
                }
            }
        },
        "attr.ferpa_last_displayed_dttm": {
            "description": "When was the ferpa agreement last displayed?",
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
                        "modifiable"
                    ]
                }
            }
        },
        "attr.granted_by_id": {
            "description": "Who granted the authorization?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "description": "identity_id of the entity that granted the authorization",
                    "type": "string"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "operational"
                    ]
                },
                "descr": {
                    "description": "identity_name associated with the granted_by_id",
                    "type": "string"
                }
            }
        },
        "attr.granted_dttm": {
            "description": "When was the authorization granted?",
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
                        "operational"
                    ]
                }
            }
        },
        "attr.group_id": {
            "description": "Group identifier",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "long_descr"
            ],
            "properties": {
                "value": {
                    "type": "string"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "long_descr": {
                    "type": "string"
                }
            }
        },
        "attr.group_type": {
            "description": "Type of Group",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "related_resource",
                "descr",
                "domain"
            ],
            "properties": {
                "value": {
                    "type": "string"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "related_resource": {
                  "type": "string"
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.guest_access_role": {
            "description": "Defines relationship in a guest access delegation",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 1
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.identity_id": {
            "description": "External BYU-IAM identifier",
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
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.identity_name": {
            "description": "Display name (first_name last_name) of the BYU-IAM identity",
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
                },
                "related_resource": {
                    "type": "string"
                }
            }
        },
        "attr.identity_type": {
            "description": "Is there a supporting entity (person, device, etc.) for the identity?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": [
                        "PERSON",
                        "DEVICE",
                        "SYSTEM",
                        "ORGANIZATION",
                        "IDENTITY"
                    ]
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "derived"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.info_area": {
            "description": "Informational Area",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 20
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.limitation_type": {
            "description": "Limitation Type",
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
                        "related"
                    ]
                }
            }
        },
        "attr.limitation_value": {
            "description": "Limitation Value",
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
        "attr.log_action": {
            "description": "Business action that created the log record",
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
                        "read-only"
                    ]
                }
            }
        },
        "attr.log_by_id": {
            "description": "Who caused the log record?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "description": "identity_id of the entity that caused the log to be created",
                    "type": "string"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "operational"
                    ]
                },
                "descr": {
                    "description": "identity_name associated with the log_by_id",
                    "type": "string"
                }
            }
        },
        "attr.log_dttm": {
            "description": "When was the log entry created?",
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
                        "operational"
                    ]
                }
            }
        },
        "attr.net_id": {
            "description": "External Directory identifier",
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
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.owner_f": {
            "description": "Does this identity own this group?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "related_resource"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": ["N", "Y"]
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "related_resource": {
                  "type": "string"
                }
            }
        },
        "attr.permanent_tracking_f": {
            "description": "Is this a permanent phone that can be used for tracking?",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": [
                      "N",
                      "Y"
                    ]
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
        "attr.person_id": {
            "description": "Internal BYU-IAM identifier",
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
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.phone_number": {
            "description": "Phone number registered with the university",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "format": "phone"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "key",
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.postal_code": {
            "description": "Zip code",
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
        "attr.primary_f": {
            "description": "Is this the primary phone?",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": ["N", "Y"]
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
        "attr.related_identity_id": {
            "description": "External BYU-IAM identifier of the related identity",
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
                        "modifiable",
                        "related"
                    ]
                }
            }
        },
        "attr.relationship": {
            "description": "What is the relationship of the person most likely to answer the phone?",
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
        "attr.restricted": {
            "description": "Is the identity associated with a person who has a restricted status?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": [
                        "N",
                        "Y"
                    ]
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "modifiable",
                        "related"
                    ]
                },
                "related_resource": {
                    "type": "string"
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.revoked_by_id": {
            "description": "Who revoked the authorization?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "description": "identity_id of the entity that granted the authorization",
                    "type": "string"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "operational"
                    ]
                },
                "descr": {
                    "description": "identity_name associated with the granted_by_id",
                    "type": "string"
                }
            }
        },
        "attr.revoked_dttm": {
            "description": "When was the authorization revoked?",
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
                        "modifiable",
                        "read-only"
                    ]
                }
            }
        },
        "attr.room": {
            "description": "First portion of address_line_1 when campus_flag_f = \"Y\"",
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
                        "derived"
                    ]
                }
            }
        },
        "attr.state_code": {
            "description": "Standard State/Province Codes",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 2
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.texts_okay": {
            "description": "Can the primary phone registered with the university receive SMS texts?",
            "type": "object",
            "required": [
                "value",
                "api_type"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": [
                        "N",
                        "Y"
                    ]
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
        "attr.time_code": {
            "description": "Time of Day Designator",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr",
                "domain"
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
                        "modifiable",
                        "related"
                    ]
                },
                "descr": {
                    "type": "string"
                },
                "domain": {
                    "type": "string",
                    "format": "uri"
                }
            }
        },
        "attr.tty": {
            "description": "Does this phone have tty capabilities?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "related_resource"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": ["N", "Y"]
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "read-only",
                        "modifiable",
                        "related"
                    ]
                },
                "related_resource": {
                  "type": "string"
                }
            }
        },
        "attr.unlisted": {
            "description": "Has the person requested that the address not appear in public directories?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "enum": [
                        "N",
                        "Y"
                    ]
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "modifiable",
                        "related_resource"
                    ]
                },
                "descr": {
                    "type": "string"
                }
            }
        },
        "attr.update_type": {
            "description": "What update privileges have been granted?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "type": "string",
                    "maxLength": 1
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "modifiable",
                        "read-only"
                    ]
                },
                "descr": {
                    "type": "string"
                }
            }
        },
        "attr.updated_by_id": {
            "description": "Who performed the last modification on the identity resource?",
            "type": "object",
            "required": [
                "value",
                "api_type",
                "descr"
            ],
            "properties": {
                "value": {
                    "description": "identity_id of the entity that modified the identity",
                    "type": "string"
                },
                "api_type": {
                    "type": "string",
                    "enum": [
                        "operational"
                    ]
                },
                "descr": {
                    "description": "identity_name associated with the created_by_id",
                    "type": "string"
                }
            }
        },
        "attr.updated_dttm": {
            "description": "When was the identity resource last modified?",
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
                        "operational"
                    ]
                }
            }
        },
        "attr.validation_phrase": {
             "description": "Pass phrase presented over the phone or in person to verify identity",
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