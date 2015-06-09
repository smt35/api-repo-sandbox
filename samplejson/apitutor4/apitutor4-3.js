{
  "basic": {
    "links": {
      "tutorial4-cars.info": {
        "rel": "self",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial4-cars/73",
        "method": "GET",
        "title": "tutorial4-cars.getCar"
      },
      "tutorial4-cars.modify": {
        "rel": "tutorial4-cars.modify",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial4-cars/73",
        "method": "PUT",
        "title": "tutorial4-cars.modifyCar"
      },
      "tutorial4-cars.sell": {
        "rel": "tutorial4-cars.sell",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial4-cars/73",
        "method": "PUT",
        "title": "tutorial4-cars.modifyCar"
      },
      "tutorial4-cars.delete": {
        "rel": "tutorial4-cars.delete",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial4-cars/73",
        "method": "DELETE",
        "title": "tutorial4-cars.deleteCar"
      },
      "tutorial2-owners.info": {
        "rel": "tutorial2-owners.info",
        "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial3-owners/783783783",
        "method": "GET",
        "title": "tutorial4-owners.getOwner"
      }
    },
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
  },
  "odometer_logs": [
    { "vin": "1FTBE14A4NP05962",
      "read_date": "2014-05-11",
      "miles": 32459,
      "read_by_id": "586586586",
      "read_by_name": "Daffy Duck"
    },
    { "vin": "1FTBE14A4NP05962",
      "read_date": "2014-06-08",
      "miles": 33782,
      "read_by_id": "586586586",
      "read_by_name": "Daffy Duck"
    },
    { "vin": "1FTBE14A4NP05962",
      "read_date": "2014-07-12",
      "miles": 35121,
      "read_by_id": "783783783",
      "read_by_name": "Daisy Duck"
    }
  ],
  "trips": [
    { "vin": "1FTBE14A4NP05962",
      "trip_id": "A148",
      "destination": "Seattle, Washington",
      "start_date": "2012-08-10",
      "end_date": "2012-08-16",
      "start_miles": 10745,
      "end_miles": 14826
    },
    { "vin": "1FTBE14A4NP05962",
      "trip_id": "C233",
      "destination": "Denver, Colorado",
      "start_date": "2013-02-04",
      "end_date": "2013-02-09",
      "start_miles": 17386,
      "end_miles": 18144
    },
    { "vin": "1FTBE14A4NP05962",
      "trip_id": "A432",
      "destination": "San Francisco, California",
      "start_date": "2013-06-22",
      "end_date": "2013-06-26",
      "start_miles": 22354,
      "end_miles": 24193
    }
  ],
  "insurance": {
    "vin": "1FTBE14A4NP05962",
    "policy_id": "A842B53E41",
    "insurer": "GEICO"
  },
  "maintenance_logs": [
    { "vin": "1FTBE14A4NP05962",
      "maintenance_id": "000354",
      "maintenance_date": "2013-06-01",
      "description": "Tune-up",
      "cost": "283.45"
    },
    { "vin": "1FTBE14A4NP05962",
      "maintenance_id": "000418",
      "maintenance_date": "2013-11-01",
      "description": "Oil & Lube",
      "cost": "152.83"
    }
  ]
}