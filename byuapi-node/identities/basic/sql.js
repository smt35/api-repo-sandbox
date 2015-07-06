'use strict';

exports.basicData =
    "select i.created_by_id as \"created_by_id\","
        + " i.date_time_created as \"date_time_created\","
        + " i.updated_by_id as \"updated_by_id\","
        + " i.date_time_updated as \"date_time_updated\","
        + " i.identity_id as \"identity_id\","
        + " i.identity_name as \"identity_name\","
        + " i.identity_type as\"identity_type\","
        + " i.uuid as \"uuid\""
    + " from iam.identity i"
    + " where i.identity_id = :1";
