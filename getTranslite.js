
const { ruTranslite } = require('./data/ru/data-ru-translite')

/**
 * option = {
 * str ()
 * input ()
 * output ()
 * }
 */

// not used yet
const defaultTransliteOptions = {
input: 'ru',
output: 'en'
}

// fixme (not used "options")
const getTranslite = (str, transliteOptions = defaultTransliteOptions) => {

  const inputLanguage = transliteOptions.input
  let activeTranslite

  switch(inputLanguage) {
    case 'ru':
      // code block
      activeTranslite = ruTranslite
      break;
    // case 'es':
    //   // code block
    //   break;
    // default:
    //   // code block
  }


  const newStr = [...str].map(element => {
    const isTransliteAvailable = activeTranslite.toEn.hasOwnProperty(`${element}`)
    if(isTransliteAvailable) {
      // console.log(`letter: "${element}", transliteLetter: "${ruTranslite.toEn[element]}" `)
      return activeTranslite.toEn[element]
    } else if(element === '.'){
      return '.'
    } else {
      // console.log(`letter: "${element}", transliteLetter not found" `)
      return ''
    }
  })
  
  return newStr.join('')
}

// console.log(getTranslite('qwertyфйцуке-анатой дояркин'))

module.exports = { getTranslite }