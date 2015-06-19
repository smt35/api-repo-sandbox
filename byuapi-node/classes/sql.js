'use strict';

exports.testQuery1 =
  "select nvl(to_char(start_date, 'dd Mon yyyy'), '*') as \"start_date\","
      + " nvl(to_char(end_date, 'dd Mon yyyy'), '*') as \"end_date\""
 + " from control_dates"
+ " where year_term = :1"
+ "   and date_type = :2";

