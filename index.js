const data = require('./data')
const { getRandomElement, getRandomNumber } = require('./utils')

/**
 * Getting one random user
 * 
 * @returns {Object} An object containing the data of a random user. 
 * The object contains the following fields: first name, last name, nickname, email address, password
 */
const getRandomeUser = () => {
  const firstName = getRandomElement(data.firstNameArray)
  const lastName = getRandomElement(data.lastNameArray)
  const nickname = `${getRandomElement(data.nicknamePrefixArray)}${getRandomNumber()}`
  const emailDomain = getRandomElement(data.mailDomainArray)
  const emailName = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${getRandomNumber()}`
  const emailAddress = `${emailName}@${emailDomain}`
  const password = `${firstName}${getRandomElement(data.specialSymbolsArray)}${getRandomNumber()}`
  
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
 * Default user creation settings
 */
const defaultParam = {
  count: 1
}

/**
 * Creating the required number of users.
 * 
 * @param {Object} param - An object containing settings for creating users. param.count - how many users need to be created
 * @returns {Object|Array} If a single user is created, it will be returned as an object. If you need to create multiple users, an array containing objects with users will be returned.
 */
const getRandomeUsers = (param = defaultParam) => {
  let users = []

  if ( param === defaultParam) {
    users = getRandomeUser()
  } else {
    const count = param.count
    for(i = 1; i <= count; i++) {
      users.push(getRandomeUser())
    }
  }

  return users
}

module.exports = getRandomeUsers