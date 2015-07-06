'use strict';

<<<<<<< HEAD
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
=======
exports.languageData =
  "select"
      + " l.identity_id        as \"identity_id\","
      + " l.language_code      as \"language_code\","
      + " c.description        as \"description\","
      + " l.speak_proficiency  as \"speak_proficiency\","
      + " l.read_proficiency   as \"read_proficiency\","
      + " l.write_proficiency  as \"write_proficiency\","
      + " l.native             as \"native\","
      + " l.translator         as \"translator\","
      + " l.date_time_updated  as \"date_time_updated\","
      + " l.updated_by_id      as \"updated_by_id\","
      + " p1.sort_name         as \"updated_by_name\","
      + " l.date_time_created  as \"date_time_created\","
      + " l.created_by_id      as \"created_by_id\","
      + " p2.sort_name         as \"created_by_name\""
      + " from iam.language l, code_edit_value c, person p1, person p2"
      + " where identity_id = :1"
      + " and l.language_code = c.domain_value"
      + " and c.domain_name = 'LANGUAGE'"
      + " and l.updated_by_id = p1.person_id"
      + " and l.created_by_id = p2.person_id (+)"
>>>>>>> 0a999965d75eb1ded4e482515afff9615d72ec35
      + " order by description";
