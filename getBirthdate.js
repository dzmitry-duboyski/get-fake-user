/**
 * Date of birth generation function. Generates a random date of birth in the range of 21-65 years.
 *
 * If you need users of a certain age, then specify them here in "minAge" and "maxAge".
 * Perhaps in the future, I will implement the possibility of specifying the age when creating users.
 * To tell the truth, I have not tested this function well, so maybe it can be return wrong date(+- one year).😉
 *
 * And in general, dates are not generated completely randomly, for example, the function will not be able
 * to create a date of birth in which the day will be equal to 29, 30, 31, because the maximum value for is limited.
 * Birthdays are limited to dates 1-28 in this file `./getBirthdate.js#L54`. This simplification is done because
 * I didn't want to write additional code and check if there is a generated day for the generated month and year.
 *
 * @param {number} minAge Minimum age of created users
 * @param {number} maxAge Maximum age of created users
 *
 * @returns {object} returns an object of the following type: `{monthNumber:7,monthName:'July',dayNumber:18,yearNumber:1982,fullDateString:'1982-07-18'}`
 * @example
 * ```
 * console.log(getBirthdate())
 *
 * // console output:
 * {
 *   monthNumber: 7,
 *   monthName: 'July',
 *   dayNumber: 18,
 *   yearNumber: 1982,
 *   fullDateString: '1982-07-18'
 * }
 * ```
 */
const getBirthdate = (minAge = 21, maxAge = 65) => {
  let birthdate = {};

  // `getRandomNumber(min,max)` returns a random number in the specified range, including the maximum and minimum number
  const getRandomNumber = (min, max) =>
    Math.floor(min + Math.random() * (max + 1 - min));

  const monthNameArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getRandomYear = (minAge, maxAge) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const minYear = currentYear - maxAge;
    const maxYear = currentYear - minAge;
    return getRandomNumber(minYear, maxYear);
  };

  const getRandomMonthNumber = getRandomNumber((min = 1), (max = 12));
  const getRandomDay = getRandomNumber((min = 1), (max = 28));
  const getMonthName = (monthNumber) => monthNameArr[monthNumber - 1];
  birthdate.monthNumber = getRandomMonthNumber;
  birthdate.monthName = getMonthName(birthdate.monthNumber);
  birthdate.dayNumber = getRandomDay;
  birthdate.yearNumber = getRandomYear(minAge, maxAge);
  const monthNumberWithZero =
    birthdate.monthNumber <= 9
      ? "0" + birthdate.monthNumber
      : birthdate.monthNumber;
  const dayNumberWithZero =
    birthdate.dayNumber <= 9 ? "0" + birthdate.dayNumber : birthdate.dayNumber;
  birthdate.fullDateString = `${birthdate.yearNumber}-${monthNumberWithZero}-${dayNumberWithZero}`;

  return birthdate;
};

module.exports = { getBirthdate };