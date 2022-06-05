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

module.exports = { getRandomElement, getRandomNumber }