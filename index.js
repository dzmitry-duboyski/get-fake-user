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
  let nickname
  let emailDomain
  let emailName
  let emailAddress
  let password

  const getMenData = () => {
    firstName = getRandomElement(data.men.firstNameArray)
    lastName = getRandomElement(data.men.lastNameArray)
  }

  const getWomanData = () => {
    firstName = getRandomElement(data.woman.firstNameArray)
    lastName = getRandomElement(data.woman.lastNameArray)
  }

  const getMixData = () => {
    const randomGender = getRandomGender()
    if(randomGender === 'men') {
      getMenData()
    } else {
      getWomanData()
    }
  }

  switch(settings.gender){
    case 'men':
      getMenData();
      break;
    case 'woman':
      getWomanData();
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
 * settings.gender - gender of created users ("men","woman","mix"), default value "mix".
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