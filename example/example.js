const getFakeUser = require('../index')

// If you call getFakeUser() without additional settings, the function getFakeUser() will be called with DefaultSettings.
// The default settings are in the file getDefaultSettings.js
//
// const defaultSettings = {
//   count: 1,
//   language: "en",
//   gender: "mix",
// }


console.log("First example - getFakeUser() :")
console.log(getFakeUser())
console.log('\n')

console.log("Second example - getFakeUser({count: 3, gender: 'male'}) :")
console.log(getFakeUser({count: 3, gender: 'male'}))
console.log('\n')

console.log("Third example - getFakeUser({count: 1, language: 'en'}) :")
console.log(getFakeUser({count: 1, language: 'en'}))
console.log('\n')

console.log("Fourth example - getFakeUser({language: 'ru'}) :")
console.log(getFakeUser({language: 'ru'}))
console.log('\n')

console.log("Fifth example - getFakeUser({language: 'uk'}) :")
console.log(getFakeUser({language: 'uk'}))
console.log('\n')