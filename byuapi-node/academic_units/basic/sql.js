'use strict';

exports.academicUnitData =
  "select a.credit_institution as \"credit_institution\","
      + " a.academic_unit_id as \"academic_unit_id\","
      + " to_char(a.effective_date, 'yyyy-mm-dd') as \"effective_date\","
      + " to_char(a.expired_date, 'yyyy-mm-dd') as \"expired_date\","
      + " nvl(a.unit_type, 'Unknown') as \"unit_type\","
      + " nvl(a.unit_name, 'Unknown') as \"unit_name\","
      + " nvl(a.official_name, 'Unknown') as \"official_name\","
      + " nvl(a.parent_academic_unit_id, 'XXXX') as \"parent_academic_unit_id\","
      + " nvl(c.official_name, 'Unknown') as \"parent_official_name\","
      + " to_char(c.effective_date, 'yyyy-mm-dd') as \"parent_effective_date\","
      + " nvl(a.old_unit_id, 'XXXX') as \"old_unit_id\""
 + " from academic_unit a,"
      + " academic_unit c"
+ " where a.academic_unit_id = :1"
  + " and to_date(:2, 'yyyymmdd') between a.effective_date and a.expired_date"
  + " and c.academic_unit_id = a.parent_academic_unit_id"
  + " and to_date(:2, 'yyyymmdd') between c.effective_date and c.expired_date";

