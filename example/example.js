const getfakeUser = require('../index')

// If you call getfakeUser() without additional settings, the function getfakeUser() will be called with DefaultSettings.
// The default settings are in the file getDefaultSettings.js
//
// const defaultSettings = {
//   count: 1,
//   language: "en",
//   gender: "mix",
// }

console.log('First example:')
console.log(getfakeUser())

console.log('Second example:')
console.log(getfakeUser({count: 3, gender: 'male'}))

console.log('Third example:')
console.log(getfakeUser({count: 1, language: 'en'}))