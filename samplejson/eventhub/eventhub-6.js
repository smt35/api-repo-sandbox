{
    "event_types": {
        "event_type_definition": [
            {
                "domain": "edu.byu",
                "entity": "AIM WaitListing",
                "event_type": "Add Class",
                "description": "Add a class registration to AIM from the WaitList queue",
                "filter_names": {
                    "filter_name": [
                        "college",
                        "department",
                        "year_term",
                        "curriculum_id",
                        "title_code",
                        "teaching_area",
                        "catalog_number",
                        "section_number"
                    ]
                }
            },
            {
                "domain": "edu.byu",
                "entity": "MyMap",
                "event_type": "Add Class",
                "description": "Add a class registration from the MyMap planning module",
                "filter_names": {
                    "filter_name": [
                        "college",
                        "department",
                        "year_term",
                        "curriculum_id",
                        "title_code",
                        "teaching_area",
                        "catalog_number",
                        "section_number"
                    ]
                }
            }
        ]
    }
}