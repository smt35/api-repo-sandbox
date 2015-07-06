'use strict';

exports.languages =
  "select language_code      as \"language_code    \","
      + " description        as \"description      \","
      + " speak_proficiency  as \"speak_proficiency\","
      + " read_proficiency   as \"speak_proficiency\","
      + " write_proficiency  as \"speak_proficiency\","
      + " native             as \"native           \","
      + " translator         as \"translator       \","
      + " date_time_updated  as \"date_time_updated\","
      + " updated_by_id      as \"updated_by_id    \","
      + " date_time_created  as \"date_time_created\","
      + " created_by_id      as \"created_by_id    \","
      + " from iam.language" 
      + " where identity_id = :1"
      + " order by description";
