{ "car": {
    "links": [
      { "rel": "self",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/73",
        "method": "GET"
      },
      { "rel": "tutorial2-cars.modify",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/73",
        "method": "PUT"
      },
      { "rel": "tutorial2-cars.sell",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/73",
        "method": "PUT"
      },
      { "rel": "tutorial2-cars.delete",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-cars/73",
        "method": "DELETE"
      },
      { "rel": "tutorial2-owners.info",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-owners/783783783",
        "method": "GET"
      }
    ],
    "basic": {
      "vin": {
        "value": "73",
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
  }
}
