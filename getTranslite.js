/**
 * ru.en('абвгд') -> 'abvgd'
*/
const ruTranslite = {
  toEn: {
    'А': 'A',
    'Б': 'B',
    'В': 'V',
    'Г': 'G',
    'Д': 'D',
    'Е': 'E',
    'Ё': 'E',
    'Ж': 'ZH',
    'З': 'Z',
    'И': 'I',
    'Й': 'Y',
    'К': 'K',
    'Л': 'L',
    'М': 'M',
    'Н': 'N',
    'О': 'O',
    'П': 'P',
    'Р': 'R',
    'С': 'S',
    'Т': 'T',
    'У': 'U',
    'Ф': 'F',
    'Х': 'H',
    'Ц': 'TS',
    'Ч': 'CH',
    'Ш': 'SH',
    'Щ': 'SHCH',
    'Ъ': '',
    'Ы': 'Y',
    'Ь': '',
    'Э': 'E',
    'Ю': 'YU',
    'Я': 'YA',
    'а': 'a',
    'б': 'b',
    'в': 'v',
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ё': 'e',
    'ж': 'zh',
    'з': 'z',
    'и': 'i',
    'й': 'y',
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': 'p',
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': 'h',
    'ц': 'ts',
    'ч': 'ch',
    'ш': 'sh',
    'щ': 'shch',
    'ъ': '',
    'ы': 'y',
    'ь': '',
    'э': 'e',
    'ю': 'yu',
    'я': 'ya',
  }
}



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
const getTranslite = (str, options = defaultTransliteOptions) => {
  const newStr = [...str].map(element => {
    const isTransliteAvailable = ruTranslite.toEn.hasOwnProperty(`${element}`)
    if(isTransliteAvailable) {
      // console.log(`letter: "${element}", transliteLetter: "${ruTranslite.toEn[element]}" `)
      return ruTranslite.toEn[element]
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