const data = require('./data')

const createNewUser = () => {

  const getRandomElement = (arr = []) => {
    const min = 0
    const max = arr.length - 1

    let randIndex = Math.floor(min + Math.random() * (max + 1 - min))
    const randomeElement = arr[randIndex]

    return randomeElement
  }

  const getRandomNumber = (min = 1, max = 100000000000) => {
    return Math.floor(Math.random() * (max - min) + min);
  }
 
  const firstName = getRandomElement(data.firstName)
  const lastName = getRandomElement(data.lastName)
  const nickname = `${getRandomElement(data.nicknamePrefix)}${getRandomNumber()}`
  const emailAddres = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${getRandomNumber()}@${getRandomElement(data.mailDomain)}`
  const password = `${firstName}${getRandomElement(data.specialSymbols)}${getRandomNumber()}`

  const newUser = {
    firstName: firstName,
    lastName: lastName,
    nickname: nickname,
    emailAddres: emailAddres,
    password: password,
  }

  return newUser  
}

module.exports = createNewUser()