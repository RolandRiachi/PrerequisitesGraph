require('./math_tar.js')
require('./math_src.js')
require('./bio_tar.js')
require('./bio_src.js')

global.departments = {
    'MATH': [math_tar, math_src],
    'BIOL': [bio_tar, bio_src]
}

global.courses = [];
for ( var d in departments ){
  for ( course in departments[d][1] ) {
    if ( !courses.includes(course) ) courses.push(course);
  }
}
