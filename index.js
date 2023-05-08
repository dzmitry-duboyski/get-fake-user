const { getRandomElement, getRandomNumber, getData, checkSettings, getRandomGender } = require('./utils')
const defaultSettings = require('./getDefaultSettings')()
const { getTranslite } = require('./getTranslite')
const { getBirthdate } = require('./getBirthdate')

/**
 * Getting one random user
 * 
 * @param {settings} - user creation settings
 * @example 
 *  const settings = {
 *   count: 1,
 *   gender: "mix",
 *   language: "en"
 * }
 * 
 * @returns {Object} An object containing the data of a random user. 
 * The object contains the following fields: first name, last name, nickname, email address, password
 */
const getRandomeUser = (settings) => {
  let data = getData(settings)
  let firstName
  let lastName
  let gender
  let nickname
  let emailDomain
  let emailName
  let emailAddress
  let password
  let birthdate

  const getMaleData = () => {
    firstName = getRandomElement(data.male.firstNameArray)
    lastName = getRandomElement(data.male.lastNameArray)
    gender = 'male'
  }

  const getFemaleData = () => {
    firstName = getRandomElement(data.female.firstNameArray)
    lastName = getRandomElement(data.female.lastNameArray)
    gender = 'female'
  }

  const getMixData = () => {
    const randomGender = getRandomGender()
    if(randomGender === 'male') {
      getMaleData()
    } else {
      getFemaleData()
    }
  }

  switch(settings.gender){
    case 'male':
      getMaleData();
      break;
    case 'female':
      getFemaleData();
      break;
    case 'mix':
      getMixData();
      break;
    default:
      getMixData();
  }

  nickname = `${getRandomElement(data.common.nicknamePrefixArray)}${getRandomNumber()}`
  emailDomain = getRandomElement(data.common.mailDomainArray)
  emailName = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${getRandomNumber()}`

  // fixme ( hardcode for 'en', 'ru' language)
  // fixme: add switch case
  if(settings.language == 'en') {
    emailAddress = `${emailName}@${emailDomain}`
    password = `${firstName}${getRandomElement(data.common.specialSymbolsArray)}${getRandomNumber()}`
  } else {

    const transliteOptions = {
      input: settings.language,
      output: 'en'
    }

    emailAddress = `${getTranslite(emailName, transliteOptions)}@${emailDomain}`
    password = `${getTranslite(firstName, transliteOptions)}${getRandomElement(data.common.specialSymbolsArray)}${getRandomNumber()}`
  }

  birthdate = getBirthdate()

  const randomeUser = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    nickname: nickname,
    emailAddress: emailAddress,
    password: password,
    birthdate: birthdate
  }
  
  return randomeUser
}

/**
 * ### The user generating function generates a user according to the specified settings.
 * 
 * @param {{count, gender, language}} settings - An object containing settings for creating users. 
 * @param {number} settings.count - The count of users. Default value "1".
 * @param {string} settings.gender - Gender of created users ("male","female","mix"), default value "mix".
 * @param {string} settings.language - Language for first and last name, default value "`en`".
 * 
 * @returns {Object|Array} If a single user is created, it will be returned as an object.
 * If you need to create multiple users, an array containing objects with users will be returned.
 * 
 * @example
 * const users = getFakeUser({count: 2, language: 'es', gender: 'female'})
 * console.log(users)
 * 
 * // console output:
 * [
 *   {
 *     firstName: 'Cristina',
 *     lastName: 'Fernández',
 *     gender: 'female',
 *     nickname: 'super862349',
 *     emailAddress: 'cristina.fernandez@aol.com',
 *     password: 'Cristina@7358326'
 *   },
 *   {
 *     firstName: 'Harper',
 *     lastName: 'Álvarez',
 *     gender: 'female',
 *     nickname: 'puper2879034',
 *     emailAddress: 'harper.alvarez@gmail.com',
 *     password: 'Harper$4756566'
 *   }
 * ]
 */
const getRandomeUsers = (settings = defaultSettings) => {
  let users = []
  const isDefaultSettings = settings === defaultSettings

  if ( isDefaultSettings ) {
    users = getRandomeUser(settings)
    return users
  } else {
    settings = checkSettings(settings, defaultSettings)
  }

  if( !isDefaultSettings ) {
    const count = settings.count
    for(i = 1; i <= count; i++) {
      users.push(getRandomeUser(settings))
    }
  }

  return users
}

module.exports = getRandomeUsers