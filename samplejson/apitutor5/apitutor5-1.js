{
  "links": {
    "tutorial5-cars.info": {
      "rel": "self",
      "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars",
      "method": "GET",
      "title": "tutorial5-cars.getCars"
    },
    "tutorial5-cars.create": {
      "rel": "tutorial5-cars.create",
      "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars",
      "method": "POST",
      "title": "tutorial5-cars.createCar"
    }
  },
  "metadata": {
    "collection_size": 3,
    "page_start": 1,
    "page_end": 3,
    "page_size": 50,
    "default_page_size": 50,
    "max_page_size": 1000,
    "field_sets_returned": [
      "basic",
      "odometer_log",
      "trips",
      "insurance",
      "maintenance_log"
    ],
    "field_sets_available": [
      "basic",
      "odometer_log",
      "trips",
      "insurance",
      "maintenance_log"
    ],
    "default_field_sets": [
      "basic"
    ],
    "contexts_available": {
      "mileage": [
        "basic",
        "odometer_log",
        "trips"
      ]
    }
  },
  "values": [
    {
      "basic": {
        "links": {
          "tutorial5-cars.info": {
            "rel": "self",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1FTBE14A4NP05962",
            "method": "GET",
            "title": "tutorial5-cars.getCar"
          },
          "tutorial5-cars.modify": {
            "rel": "tutorial5-cars.modify",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1FTBE14A4NP05962",
            "method": "PUT",
            "title": "tutorial5-cars.modifyCar"
          },
          "tutorial5-cars.sell": {
            "rel": "tutorial5-cars.sell",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1FTBE14A4NP05962",
            "method": "PUT",
            "title": "tutorial5-cars.modifyCar"
          },
          "tutorial5-cars.delete": {
            "rel": "tutorial5-cars.delete",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1FTBE14A4NP05962",
            "method": "DELETE",
            "title": "tutorial5-cars.deleteCar"
          },
          "tutorial5-owners.info": {
             "rel": "tutorial5-owners.info",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-owners/783783783",
            "method": "GET",
            "title": "tutorial5-owners.getOwner"
          }
        },
        "vin": {
          "value": "1FTBE14A4NP05962",
          "api_type": "modifiable",
          "key": true
        },
        "plate_state": {
          "value": "UT",
          "api_type": "modifiable",
          "description": "Utah",
          "display_label": "Licence Plate State",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/plate_state"
        },
        "plate_number": {
          "value": "Q580RT",
          "api_type": "modifiable",
          "display_label": "Licence Plate Number"
        },
        "vehicle_type": {
          "value": "Truck/SUV",
          "api_type": "derived",
          "display_label": "Vehicle Type",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/vehicle-type"
        },
        "vehicle_year": {
          "value": "2013",
          "api_type": "modifiable",
          "display_label": "Vehicle Year"
        },
        "make": {
          "value": "Toyota",
          "api_type": "modifiable",
          "display_label": "Make",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/make"
        },
        "model": {
          "value": "RAV4",
          "api_type": "modifiable",
          "display_label": "Model",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/model/Toyota"
        },
        "color": {
          "value": "Dark Green",
          "api_type": "modifiable",
          "display_label": "Color",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/color"
        },
        "owner_id": {
          "value": "783783783",
          "api_type": "modifiable"
        },
        "owner_name": {
          "value": "Daisy Duck",
          "api_type": "related",
          "related_resource": "tutorial5-owners"
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
    },
    {
      "basic": {
        "links": {
          "tutorial5-cars.info": {
            "rel": "self",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1DTGR14A6NP38861",
            "method": "GET",
            "title": "tutorial5-cars.getCar"
          },
          "tutorial5-cars.modify": {
            "rel": "tutorial5-cars.modify",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1DTGR14A6NP38861",
            "method": "PUT",
            "title": "tutorial5-cars.modifyCar"
          },
          "tutorial5-cars.sell": {
            "rel": "tutorial5-cars.sell",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1DTGR14A6NP38861",
            "method": "PUT",
            "title": "tutorial5-cars.modifyCar"
          },
          "tutorial5-cars.delete": {
            "rel": "tutorial5-cars.delete",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1DTGR14A6NP38861",
            "method": "DELETE",
            "title": "tutorial5-cars.deleteCar"
          },
          "tutorial5-owners.info": {
            "rel": "tutorial5-owners.info",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-owners/586586586",
            "method": "GET",
            "title": "tutorial5-cars.getOwner"
          }
        },
        "vin": {
          "value": "1DTGR14A6NP38861",
          "api_type": "modifiable",
          "key": true
        },
        "plate_state": {
          "value": "UT",
          "api_type": "modifiable",
          "description": "Utah",
          "display_label": "Licence Plate State",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/plate-state"
        },
        "plate_number": {
          "value": "C49D3T",
          "api_type": "modifiable",
          "display_label": "Licence Plate Number"
        },
        "vehicle_type": {
          "value": "Truck/SUV",
          "api_type": "derived",
          "display_label": "Vehicle Type",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/vehicle-type"
        },
        "vehicle_year": {
          "value": "1997",
          "api_type": "modifiable",
          "display_label": "Vehicle Year"
        },
        "make": {
          "value": "Ford",
          "api_type": "modifiable",
          "display_label": "Make",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/make"
        },
        "model": {
          "value": "Ranger",
          "api_type": "modifiable",
          "display_label": "Model",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/model/Toyota"
        },
        "color": {
          "value": "Blue",
          "api_type": "modifiable",
          "display_label": "Color",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/color"
        },
        "owner_id": {
          "value": "586586586",
          "api_type": "modifiable"
        },
        "owner_name": {
          "value": "Daffy Duck",
          "api_type": "related",
          "related_resource": "tutorial5-owners"
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
        { "vin": "1DTGR14A6NP38861",
          "read_date": "2014-05-09",
          "miles": 26438,
          "read_by_id": "586586586",
          "read_by_name": "Daffy Duck"
        },
        { "vin": "1DTGR14A6NP38861",
          "read_date": "2014-06-11",
          "miles": 29521,
          "read_by_id": "586586586",
          "read_by_name": "Daffy Duck"
        },
        { "vin": "1DTGR14A6NP38861",
          "read_date": "2014-07-15",
          "miles": 30114,
          "read_by_id": "783783783",
          "read_by_name": "Daisy Duck"
        }
      ],
      "trips": [
        { "vin": "1DTGR14A6NP38861",
          "trip_id": "A326",
          "destination": "Butte, Montana",
          "start_date": "2012-09-06",
          "end_date": "2012-09-10",
          "start_miles": 8265,
          "end_miles": 9854
        },
        { "vin": "1DTGR14A6NP38861",
          "trip_id": "D551",
          "destination": "St. Louis, Missouri",
          "start_date": "2013-01-02",
          "end_date": "2013-01-12",
          "start_miles": 11843,
          "end_miles": 15365
        },
        { "vin": "1DTGR14A6NP38861",
          "trip_id": "A776",
          "destination": "Los Angeles, California",
          "start_date": "2013-04-01",
          "end_date": "2013-04-06",
          "start_miles": 17221,
          "end_miles": 19632
        }
      ],
      "insurance": {
        "vin": "1DTGR14A6NP38861",
        "policy_id": "421T84GX333",
        "insurer": "State Farm"
      },
      "maintenance_logs": [
        { "vin": "1DTGR14A6NP38861",
          "maintenance_id": "000401",
          "maintenance_date": "2013-08-01",
          "description": "New Tires",
          "cost": "533.12"
        },
        { "vin": "1DTGR14A6NP38861",
          "maintenance_id": "000663",
          "maintenance_date": "2014-02-01",
          "description": "Replace Alternator",
          "cost": "486.23"
        }
      ]
    },
    {
      "basic": {
        "links": {
          "tutorial5-cars.info": {
            "rel": "self",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1CRTW25A3NX78232",
            "method": "GET",
            "title": "tutorial5-cars.getCar"
          },
          "tutorial5-cars.modify": {
            "rel": "tutorial5-cars.modify",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1CRTW25A3NX78232",
            "method": "PUT",
            "title": "tutorial5-cars.modifyCar"
          },
          "tutorial5-cars.sell": {
            "rel": "tutorial5-cars.sell",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1CRTW25A3NX78232",
            "method": "PUT",
            "title": "tutorial5-cars.modifyCar"
          },
          "tutorial5-cars.delete": {
            "rel": "tutorial5-cars.delete",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-cars/1CRTW25A3NX78232",
            "method": "DELETE",
            "title": "tutorial5-cars.deleteCar"
          },
          "tutorial5-owners.info": {
            "rel": "tutorial5-owners.info",
            "href": "https://edge-wso2.byu.edu:8243/byuapi/tutorial5-owners/586586586",
            "method": "GET",
            "title": "tutorial5-owners.getOwner"
          }
        },
        "vin": {
          "value": "1CRTW25A3NX78232",
          "api_type": "modifiable",
          "key": true
        },
        "plate_state": {
          "value": "UT",
          "api_type": "modifiable",
          "description": "Utah",
          "display_label": "Licence Plate State",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/plate-state"
        },
        "plate_number": {
          "value": "L43S3T",
           "api_type": "modifiable",
           "display_label": "Licence Plate Number"
        },
        "vehicle_type": {
          "value": "Truck/SUV",
          "api_type": "derived",
          "display_label": "Vehicle Type",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/vehicle-type"
        },
        "vehicle_year": {
          "value": "2003",
          "api_type": "modifiable",
          "display_label": "Vehicle Year"
        },
        "make": {
          "value": "Chevrolet",
          "api_type": "modifiable",
          "display_label": "Make",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/make"
        },
        "model": {
          "value": "Sierra",
          "api_type": "modifiable",
          "display_label": "Model",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/model/Toyota"
        },
        "color": {
          "value": "Tan",
          "api_type": "modifiable",
          "display_label": "Color",
          "domain": "https://edge-wso2.byu.edu:8243/byuapi/meta/cars/color"
        },
        "owner_id": {
          "value": "586586586",
          "api_type": "modifiable"
        },
        "owner_name": {
          "value": "Daffy Duck",
          "api_type": "related",
          "related_resource": "tutorial5-owners"
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
        {
          "vin": {
            "value": "1CRTW25A3NX78232",
            "api_type": "modifiable",
            "key": true
          },
          "read_date": {
            "value": "2014-05-03",
            "api_type": "modifiable",
            "key": true
          },
          "miles": {
            "value": 85919,
            "api_type": "modifiable",
            "display_label": ""
          },
          "read_by_id": {
            "value": "586586586",
            "api_type": "modifiable",
            "display_label": ""
          },
          "read_by_name": {
            "value": "Daffy Duck",
            "api_type": "related",
            "display_label": ""
          }
        },
        {
          "vin": {
            "value": "1CRTW25A3NX78232",
            "api_type": "modifiable",
            "key": true
          },
          "read_date": {
            "value": "2014-06-22",
            "api_type": "modifiable",
            "key": true,
            "display_label": ""
          },
          "miles": {
            "value": 90652,
            "api_type": "modifiable",
            "display_label": ""
          },
          "read_by_id": {
            "values": "586586586",
            "api_type": "modifiable",
            "display_label": ""
          },
          "read_by_name": {
            "value": "Daffy Duck",
            "api_type": "related",
            "display_label": ""
          }
        },
        {
          "vin": {
            "value": "1CRTW25A3NX78232",
            "api_type": "modifiable",
            "key": true
          },
          "read_date": {
            "value": "2014-07-21",
            "api_type": "modifiable",
            "key": true,
            "display_label": ""
          },
          "miles": {
            "value": 94126,
            "api_type": "modifiable",
            "display_label": ""
          },
          "read_by_id": {
            "value": "783783783",
            "api_type": "modifiable",
            "display_label": ""
          },
          "read_by_name": {
            "value": "Daisy Duck",
            "api_type": "related",
            "display_label": ""
          }
        }
      ],
      "trips": [
        { "vin": "1CRTW25A3NX78232",
          "trip_id": "B111",
          "destination": "Pocatello, Idaho",
          "start_date": "2011-04-01",
          "end_date": "2011-04-10",
          "start_miles": 18542,
          "end_miles": 19296
        },
        { "vin": "1CRTW25A3NX78232",
          "trip_id": "E028",
          "destination": "Ely, Nevada",
          "start_date": "2013-04-01",
          "end_date": "2013-04-10",
          "start_miles": 60181,
          "end_miles": 60946
        }
      ],
      "insurance": {
        "vin": "1CRTW25A3NX78232",
        "policy_id": "Y583958CV43",
        "insurer": "All State"
      },
      "maintenance_logs": [
        { "vin": "1CRTW25A3NX78232",
          "maintenance_id": "000710",
          "maintenance_date": "2013-10-31",
          "description": "New Transmission",
          "cost": "2436.11"
        }
      ]
    }
  ]
}
