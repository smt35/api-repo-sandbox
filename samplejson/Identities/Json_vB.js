{"Identity": {
  "links": {
    "identities.info": {
      "rel": "self",
      "href": "https://api.byu.edu/byuapi/identities/123456789",
      "method": "GET"
    },
    "identities.next": {
      "rel": "identities.next",
      "href": "https://api.byu.edu/byuapi/identities/123456789",
      "method": "GET"
    },
    "identities.previous": {
      "rel": "identities.previous",
      "href": "https://api.byu.edu/byuapi/identities/123456789",
      "method": "GET"
    }
  },
  "metadata": {
    "collection_size": 3,
    "page_start": 1,
    "page_end": 3,
    "page_size": 50,
    "default_page_size": 50,
    "max_page_size": 100,
    "field_sets_returned": [
      "basic"
    ],
    "field_sets_available": [
      "basic"
    ],
    "default_field_sets": [
      "basic"
    ],
    "contexts_available": [
      "basic"
    ]
  },
  "values": [
    {
      "basic": {
        "links": {
          "identities.added": {
            "rel": "identities.added",
            "href": "https://api.byu.edu/byuapi/identities/123456789",
            "method": "POST"
          }
        },
        "created_by_id": {
          "value" : "",
          "api-type": "system",
          "description": "Id of the original creator"
        },
        "date_time_created": {
          "value": "",
          "api_type": "system"
        },
        "updated_by_id": {
          "value": "",
          "api_type": "system",
          "description": "Id of the most recent person to update the value"
        },
        "date_time_updated": {
          "value": "",
          "api_type": "system"
        },
        "identity_id": {
          "value": "123456789",
          "api_type": "modifiable",
          "key": "boolean"
        },
        "identity_name": {
          "value": "",
          "api_type": "modifiable"
        },
        "identity_type": {
          "value": "",
          "api_type": "derived",
          "description": "The type of identity being accessed"
        },
        "uuid": {
          "value": "",
          "api_type": "system",
          "key": "boolean"
        }
      }
    }
  ]
}
}

