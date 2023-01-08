const getFakeUser = require('../index')

// If you call getFakeUser() without additional settings, the function getFakeUser() will be called with DefaultSettings.
// The default settings are in the file getDefaultSettings.js
//
// const defaultSettings = {
//   count: 1,
//   language: "en",
//   gender: "mix",
// }


console.log("Example #1 - getFakeUser() :")
console.log(getFakeUser())
console.log('\n')

console.log("Example #2 - getFakeUser({count: 3, gender: 'male'}) :")
console.log(getFakeUser({count: 3, gender: 'male'}))
console.log('\n')

console.log("Example #3 - getFakeUser({count: 1, language: 'en'}) :")
console.log(getFakeUser({count: 1, language: 'en'}))
console.log('\n')

console.log("Example #4 - getFakeUser({language: 'ru'}) :")
console.log(getFakeUser({language: 'ru'}))
console.log('\n')

console.log("Example #5 - getFakeUser({language: 'uk'}) :")
console.log(getFakeUser({language: 'uk'}))
console.log('\n')

console.log("Example #6 - getFakeUser({language: 'es'}) :")
console.log(getFakeUser({language: 'es', count: 1}))
console.log('\n')