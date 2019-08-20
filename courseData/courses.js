require('./eCalendar/math_tar.js')
require('./eCalendar/math_src.js')
require('./eCalendar/bio_tar.js')
require('./eCalendar/bio_src.js')
require('./eCalendar/comp_tar.js')
require('./eCalendar/comp_src.js')
require('./eCalendar/phys_tar.js')
require('./eCalendar/phys_src.js')
require('./eCalendar/ecse_tar.js')
require('./eCalendar/ecse_src.js')

global.departments = {
    'MATH': [math_tar, math_src],
    'BIOL': [bio_tar, bio_src],
    'COMP': [comp_tar, comp_src],
    'PHYS': [phys_tar, phys_src],
    'ECSE': [ecse_tar, ecse_src]
}

global.courses = [];
for ( var d in departments ){
  for ( course in departments[d][1] ) {
    if ( !courses.includes(course) ) courses.push(course);
  }
}
