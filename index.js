const { getRandomElement, getRandomNumber, getData, checkSettings, getRandomGender } = require('./utils')
const defaultSettings = require('./getDefaultSettings')()

/**
 * Getting one random user
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
  emailAddress = `${emailName}@${emailDomain}`
  password = `${firstName}${getRandomElement(data.specialSymbolsArray)}${getRandomNumber()}`

  const randomeUser = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    nickname: nickname,
    emailAddress: emailAddress,
    password: password,
  }
  
  return randomeUser
}

/**
 * Creating the required number of users.
 * 
 * @settings {Object} settings - An object containing settings for creating users. 
 * settings.count - how many users need to be created, default value "1".
 * settings.gender - gender of created users ("male","female","mix"), default value "mix".
 * settings.language - language for first and last name, default value "en".
 * 
 * @returns {Object|Array} If a single user is created, it will be returned as an object. If you need to create multiple users, an array containing objects with users will be returned.
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