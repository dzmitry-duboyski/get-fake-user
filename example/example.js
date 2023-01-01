const getfakeUser = require('../index')

// If you call getfakeUser() without additional settings, the function getfakeUser() will be called with DefaultSettings.
// The default settings are in the file getDefaultSettings.js
//
// const defaultSettings = {
//   count: 1,
//   language: "en",
//   gender: "mix",
// }


console.log("First example - getfakeUser() :")
console.log(getfakeUser())
console.log('\n')

console.log("Second example - getfakeUser({count: 3, gender: 'male'}) :")
console.log(getfakeUser({count: 3, gender: 'male'}))
console.log('\n')

console.log("Third example - getfakeUser({count: 1, language: 'en'}) :")
console.log(getfakeUser({count: 1, language: 'en'}))
console.log('\n')

console.log("Fourth example - getfakeUser({language: 'ru'}) :")
console.log(getfakeUser({language: 'ru'}))
console.log('\n')

console.log("Fifth example - getfakeUser({language: 'uk'}) :")
console.log(getfakeUser({language: 'uk'}))
console.log('\n')