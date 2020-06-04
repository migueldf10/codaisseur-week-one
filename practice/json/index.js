const patients = require('./patients')

const third = JSON.stringify(patients, null, 2)

const objectShaped = JSON.parse(third)

console.log(objectShaped[2])