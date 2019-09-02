require('./eCalendar/math_tar.js')
require('./eCalendar/math_src.js')
require('./eCalendar/biol_tar.js')
require('./eCalendar/biol_src.js')
require('./eCalendar/comp_tar.js')
require('./eCalendar/comp_src.js')
require('./eCalendar/phys_tar.js')
require('./eCalendar/phys_src.js')
require('./eCalendar/ecse_tar.js')
require('./eCalendar/ecse_src.js')
require('./eCalendar/econ_tar.js')
require('./eCalendar/econ_src.js')
require('./eCalendar/acct_tar.js')
require('./eCalendar/acct_src.js')

global.departments = {
  'ACCT': [acct_tar, acct_src],
  'BIOL': [biol_tar, biol_src],
  'COMP': [comp_tar, comp_src],
  'ECSE': [ecse_tar, ecse_src],
  'ECON': [econ_tar, econ_src],
  'MATH': [math_tar, math_src],
  'PHYS': [phys_tar, phys_src]
}

global.courses = [];
for ( var d in departments ){
  for ( course in departments[d][1] ) {
    if ( !courses.includes(course) ) courses.push([ course, departments[d][1][course]['text']['name'] ]);
  }
}
