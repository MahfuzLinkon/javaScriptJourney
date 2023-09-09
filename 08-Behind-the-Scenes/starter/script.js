'use strict';

const jecika = {
  fastName: 'Jecika',
  lastName: 'Devid',
  family: ['Meri', 'Jon'],
};

// Copying object
const jecilaCopy = Object.assign({}, jecika); // Object.assign only copy first level data it does not copy in deep level. For copy a object in deep level we need to use library like "Lo-Dash".
jecilaCopy.lastName = 'Willam';

jecilaCopy.family.push('Alex');

console.log(jecika);
console.log(jecilaCopy);
