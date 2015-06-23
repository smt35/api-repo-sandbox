'use strict';

exports.academicUnitData =
  "select a.credit_institution as \"credit_institution\","
      + " a.academic_unit_id as \"unit_id\","
      + " to_char(a.effective_date, 'dd Mon yyyy') as \"effective_date\","
      + " to_char(a.expired_date, 'dd Mon yyyy') as \"expired_date\","
      + " nvl(a.unit_type, 'Unknown') as \"unit_type\","
      + " nvl(a.unit_level, 'X') as \"unit_level\","
      + " nvl(a.unit_name, 'Unknown') as \"unit_name\","
      + " nvl(a.official_name, 'Unknown') as \"official_name\","
      + " nvl(a.parent_academic_unit_id, 'XXXX') as \"parent_unit_id\","
      + " nvl(a.old_unit_id, 'XXXX') as \"old_unit_id\","
      + " nvl(to_char(a.date_time_updated, 'dd Mon yyyy'), ' ') as \"date_time_updated\","
      + " nvl(a.updated_by_id, 'XXXX') as \"updated_by_id\","
      + " nvl(b.sort_name, a.updated_by_id) as \"updated_by_name\""
 + " from academic_unit a,"
      + " person b"
+ " where a.academic_unit_id = :1"
  + " and to_date(:2, 'yyyymmdd') between a.effective_date and a.expired_date"
  + " and b.person_id (+) = a.updated_by_id";

