const getDefaultSettings = () => {
  
/**
 * Default settings for creating user
 * @property {number} count - The count of users. Default value "1".
 * @property {string} gender - Gender of created users ("male","female","mix"), default value "mix".
 * @property {string} count - Language for first and last name, default value "en".
 * 
 */
  const defaultSettings = {
    count: 1,
    gender: "mix",
    language: "en"
  }

  return defaultSettings
}

module.exports = getDefaultSettings
