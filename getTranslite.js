
const { ruTranslite } = require('./data/ru/data-ru-translite')

const defaultTransliteOptions = {
  input: 'ru',
  output: 'en'
}

/**
 * option = {
 * str ()
 * input ()
 * output ()
 * }
 */
const getTranslite = (str, transliteOptions = defaultTransliteOptions) => {

  const inputLanguage = transliteOptions.input
  let activeTranslite

  switch(inputLanguage) {
    case 'ru':
      // code block
      activeTranslite = ruTranslite
      break;
/*
    case 'es':
      // code block
      break;
    default:
      // code block
*/
  }


  const newStr = [...str].map(element => {
    const isTransliteAvailable = activeTranslite.toEn.hasOwnProperty(`${element}`)
    if(isTransliteAvailable) {
      return activeTranslite.toEn[element]
    } else if(element === '.'){
      return '.'
    } else {
      return ''
    }
  })
  
  return newStr.join('')
}

module.exports = { getTranslite }