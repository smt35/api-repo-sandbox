{ "cars": {
    "links": [
      { "rel": "self",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars",
        "method": "GET"
      },
      { "rel": "tutorial3-cars.create",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars",
        "method": "POST"
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
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1FTBE14A4NP05962",
            "method": "GET"
          },
          { "rel": "tutorial3-cars.modify",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1FTBE14A4NP05962",
            "method": "PUT"
          },
          { "rel": "tutorial3-cars.sell",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1FTBE14A4NP05962",
            "method": "PUT"
          },
          { "rel": "tutorial3-cars.delete",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1FTBE14A4NP05962",
            "method": "DELETE"
          },
          { "rel": "tutorial3-owners.info",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-owners/783783783",
            "method": "GET"
          }
        ],
        "basic": {
          "vin": {
            "value": "1FTBE14A4NP05962",
            "api_type": "key"
          },
          "plate_state": {
            "value": "UT",
            "api_type": "modifiable",
            "description": "Utah",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/plate-state"
          },
          "plate_number": {
            "value": "Q580RT",
            "api_type": "modifiable"
          },
          "vehicle_type": {
            "value": "Truck/SUV",
            "api_type": "derived",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/vehicle-type"
          },
          "vehicle_year": {
            "value": "2013",
            "api_type": "modifiable"
          },
          "make": {
            "value": "Toyota",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/make"
          },
          "model": {
            "value": "RAV4",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/model/Toyota"
          },
          "color": {
            "value": "Dark Green",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/color"
          },
          "owner_id": {
            "value": "783783783",
            "api_type": "modifiable"
          },
          "owner_name": {
            "value": "Daisy Duck",
            "api_type": "related",
            "related_resource": "tutorial3-owners"
          },
          "created_by_id": {
            "value": "586586586",
            "api_type": "system",
            "description": "Daffy Duck"
          },
          "created_date_time": {
            "value": "2014-05-11T13:45:53.09Z",
            "api_type": "system"
          },
          "updated_by_id": {
            "value": "783783783",
            "api_type": "system",
            "description": "Daisy Duck"
          },
          "updated_date_time": {
            "value": "2014-09-15T08:12:44.03Z",
            "api_type": "system"
          }
        }
      },
      { "links": [
          { "rel": "self",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1DTGR14A6NP38861",
            "method": "GET"
          },
          { "rel": "tutorial3-cars.modify",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1DTGR14A6NP38861",
            "method": "PUT"
          },
          { "rel": "tutorial3-cars.sell",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1DTGR14A6NP38861",
            "method": "PUT"
          },
          { "rel": "tutorial3-cars.delete",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1DTGR14A6NP38861",
            "method": "DELETE"
          },
          { "rel": "tutorial3-owners.info",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-owners/586586586",
            "method": "GET"
          }
        ],
        "basic": {
          "vin": {
            "value": "1DTGR14A6NP38861",
            "api_type": "key"
          },
          "plate_state": {
            "value": "UT",
            "api_type": "modifiable",
            "description": "Utah",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/plate-state"
          },
          "plate_number": {
            "value": "C49D3T",
            "api_type": "modifiable"
          },
          "vehicle_type": {
            "value": "Truck/SUV",
            "api_type": "derived",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/vehicle-type"
          },
          "vehicle_year": {
            "value": "1997",
            "api_type": "modifiable"
          },
          "make": {
            "value": "Ford",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/make"
          },
          "model": {
            "value": "Ranger",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/model/Toyota"
          },
          "color": {
            "value": "Blue",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/color"
          },
          "owner_id": {
            "value": "586586586",
            "api_type": "modifiable"
          },
          "owner_name": {
            "value": "Daffy Duck",
            "api_type": "related",
            "related_resource": "tutorial3-owners"
          },
          "created_by_id": {
            "value": "586586586",
            "api_type": "system",
            "description": "Daffy Duck"
          },
          "created_date_time": {
            "value": "2014-05-11T13:45:53.09Z",
            "api_type": "system"
          },
          "updated_by_id": {
            "value": "783783783",
            "api_type": "system",
            "description": "Daisy Duck"
          },
          "updated_date_time": {
            "value": "2014-09-15T08:12:44.03Z",
            "api_type": "system"
          }
        }
      },
      { "links": [
          { "rel": "self",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1CRTW25A3NX78232",
            "method": "GET"
          },
          { "rel": "tutorial3-cars.modify",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1CRTW25A3NX78232",
            "method": "PUT"
          },
          { "rel": "tutorial3-cars.sell",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1CRTW25A3NX78232",
            "method": "PUT"
          },
          { "rel": "tutorial3-cars.delete",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/1CRTW25A3NX78232",
            "method": "DELETE"
          },
          { "rel": "tutorial3-owners.info",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-owners/586586586",
            "method": "GET"
          }
        ],
        "basic": {
          "vin": {
            "value": "1CRTW25A3NX78232",
            "api_type": "key"
          },
          "plate_state": {
            "value": "UT",
            "api_type": "modifiable",
            "description": "Utah",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/plate-state"
          },
          "plate_number": {
            "value": "L43S3T",
            "api_type": "modifiable"
          },
          "vehicle_type": {
            "value": "Truck/SUV",
            "api_type": "derived",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/vehicle-type"
          },
          "vehicle_year": {
            "value": "2003",
            "api_type": "modifiable"
          },
          "make": {
            "value": "Chevrolet",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/make"
          },
          "model": {
            "value": "Sierra",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/model/Toyota"
          },
          "color": {
            "value": "Tan",
            "api_type": "modifiable",
            "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/color"
          },
          "owner_id": {
            "value": "586586586",
            "api_type": "modifiable"
          },
          "owner_name": {
            "value": "Daffy Duck",
            "api_type": "related",
            "related_resource": "tutorial3-owners"
          },
          "created_by_id": {
            "value": "586586586",
            "api_type": "system",
            "description": "Daffy Duck"
          },
          "created_date_time": {
            "value": "2014-05-11T13:45:53.09Z",
            "api_type": "system"
          },
          "updated_by_id": {
            "value": "783783783",
            "api_type": "system",
            "description": "Daisy Duck"
          },
          "updated_date_time": {
            "value": "2014-09-15T08:12:44.03Z",
            "api_type": "system"
          }
        }
      }
    ]
  }
}
