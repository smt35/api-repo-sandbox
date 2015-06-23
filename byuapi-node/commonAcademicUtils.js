'use strict';

var q = require('q');

exports.buildBlockCodeDesc = function (year_term, block_code) {
  switch(block_code.value.substr(0, 1)) {
    case '1':
      if(year_term.value.substr(4, 1) === '3') {
        block_code.desc = "Spring Term";
      } else {
        block_code.desc = "First Term";
      }
      break;
    case '2':
      if(year_term.value.substr(4, 1) === '4') {
        block_code.desc = "Summer Term";
      } else {
        block_code.desc = "Second Term";
      }
      break;
    case 'S':
      if(year_term.value.substr(4, 1) === '3') {
        block_code.desc = "Spring-Summer";
      } else {
        block_code.desc = "Semester Long";
      }
      break;
    case 'O':
      block_code.desc = "Other";
      break;
    default:
      block_code.desc = "Unknown " + block_code.value;
  }
}

exports.buildYearTermDesc = function (year_term) {
  switch(year_term.value.substr(4, 1)) {
    case '1':
      year_term.desc = "Winter " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Winter Semester " + year_term.value.substr(0, 4);
      break;
    case '3':
      year_term.desc = "Spring " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Spring Term " + year_term.value.substr(0, 4);
      break;
    case '4':
      year_term.desc = "Summer " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Summer Term " + year_term.value.substr(0, 4);
      break;
    case '5':
      year_term.desc = "Fall " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Fall Semester " + year_term.value.substr(0, 4);
      break;
    default:
      year_term.desc = "Unknown " + year_term.value.substr(0, 4);
      year_term.ext_desc = "Unknown " + year_term.value.substr(0, 4);
  }
}

