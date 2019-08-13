require('./math_tar.js')
require('./math_src.js')
require('./bio_tar.js')
require('./bio_src.js')

global.faculties = {
    'MATH': [math_tar, math_src],
    'BIOL': [bio_tar, bio_src]
}

global.arr = [];
for ( var faculty in faculties ){
  for ( course in faculties[faculty][1] ) {
    if ( !arr.includes(course) ) arr.push(course);
  }
}
