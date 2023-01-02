/**
 *  Returns a random element from the given array
 * 
 * @param {Array} arr - an array containing something
 * @returns {string} random element from the given array
 */
 const getRandomElement = (arr = []) => {
  const min = 0
  const max = arr.length - 1
  
  let randIndex = Math.floor(min + Math.random() * (max + 1 - min))
  const randomeElement = arr[randIndex]
  
  return randomeElement
}

/**
 * Returns a random number in the specified range
 * 
 * @param {number} min - minimum return number
 * @param {number} max - maximum return number
 * @returns {number} random number in range min max
 */
const getRandomNumber = (min = 10000, max = 10000000) => {
  const randomeNumber = Math.floor(Math.random() * (max - min) + min)
  return randomeNumber
}

const dataEnCommon = require('./data/en/data-en-common')
const dataEnMale = require('./data/en/data-en-male')
const dataEnFemale = require('./data/en/data-en-female')

const dataRuCommon = require('./data/ru/data-ru-common')
const dataRuMale = require('./data/ru/data-ru-male')
const dataRuFemale = require('./data/ru/data-ru-female')

const dataUkCommon = require('./data/uk/data-uk-common')
const dataUkMale = require('./data/uk/data-uk-male')
const dataUkFemale = require('./data/uk/data-uk-female')

const getData = (settings = defaultSettings) => {
  let data = {}
  const language = settings.language.toLowerCase()

  switch(language) {
    case'en':
      data.common = dataEnCommon
      data.male = dataEnMale
      data.female = dataEnFemale
      break;

    case'ru':
      data.common = dataRuCommon
      data.male = dataRuMale
      data.female = dataRuFemale
      break;

    case'uk':
      data.common = dataUkCommon
      data.male = dataUkMale
      data.female = dataUkFemale
      break;
  }

  return data
}


const checkSettings = (settings, defaultSettings) => {

  // FixMe (correctGenderArr and correctLanguageArr is const)
  // need a separate file
  const correctGenderArr = ['male','female','mix']
  const correctLanguageArr = ['en','ru','uk']

  const isGenderExist = settings.hasOwnProperty('gender')
  let isGenderIncorrect
  if ( isGenderExist ) {
    settings.gender = String(settings.gender).toLowerCase()
    isGenderIncorrect = !correctGenderArr.includes(settings.gender)
  }

  if( isGenderIncorrect ) {
    console.log('\x1b[33m', 'Package "get-fake-user" - You have specified an incorrect "gender", gender will be specified randomly(gender=mix).'+ '\x1b[0m')
  }

  if ( !isGenderExist || isGenderIncorrect) {
    settings.gender = defaultSettings.gender    
  }

  const isLanguageExist = settings.hasOwnProperty('language')
  let isLanguageIncorrect
  if( isLanguageExist ) {
    settings.language = String(settings.language).toLowerCase()
    isLanguageIncorrect = !correctLanguageArr.includes(settings.language)
  }

  if( isLanguageIncorrect ) {
    console.log('\x1b[33m', 'Package "get-fake-user" - You have specified an incorrect "language", language will be specified "en".'+ '\x1b[0m')
  }

  if ( !isLanguageExist || isLanguageIncorrect) {
    settings.language = defaultSettings.language    
  }

  const isCountExist = settings.hasOwnProperty('count')
  let isCountIncorrect
  if( isCountExist ) {
    let isCountNaN = Number.isNaN(Number(settings.count))
    isCountIncorrect = isCountNaN
    if(!isCountIncorrect) {
      settings.count = Number(settings.count)
    }
  }

  if ( isCountIncorrect ) {
    console.log('\x1b[33m', 'Package "get-fake-user" - You have specified an incorrect "count", count will be specified 1.'+ '\x1b[0m')
  }

  if( !isCountExist || isCountIncorrect) {
    settings.count = defaultSettings.count
  }

  return settings
}

getRandomGender = () => {
  let randomNumberStr = Math.random().toString()
  let lastRandomeNumber = Number(randomNumberStr[randomNumberStr.length - 1])
  if( lastRandomeNumber >= 5 ) {
    return 'male'
  } else {
    return 'female'
  }
}

module.exports = { getRandomElement, getRandomNumber, getData, checkSettings, getRandomGender }