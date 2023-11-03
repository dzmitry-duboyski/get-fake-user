<p align="center">
 <img src="https://github.com/dzmitry-duboyski/get-fake-user/assets/38065632/eb277479-e5db-47a3-a78b-3e1dceb062e8">
</p>

![downloads](https://img.shields.io/npm/dt/get-fake-user) ![](https://img.shields.io/npm/v/get-fake-user) ![](https://img.shields.io/npm/l/get-fake-user) ![](https://img.shields.io/github/last-commit/dzmitry-duboyski/get-fake-user) ![](https://img.shields.io/github/stars/dzmitry-duboyski/get-fake-user?style=social) [![run on repl.it](https://img.shields.io/badge/Run_on_Replit-f26207?logo=replit&logoColor=white)](https://replit.com/@dzmitry-duboysk/get-fake-user)

# Random user generator

## Description
Random user generation including the following data firstName, lastName, nickname, emailAddres, password, birthdate, gender. If you need to automate the registration process for example, you need to create user data, in which case this package will help you.

## How it works
The `/data` folder contains a set of random data that includes first names, last names, and other data. A random first and last name is taken from files in this folder, and an email and password are generated based on them. The generated data is exported as an object in array.
When a single user is created, it is returned as an object. When creating multiple users, user objects are returned in an array.

English, Spanish, Ukrainian and Russian languages are supported for the "firstName", "lastName" fields.

Example of an exported data(one user): 
```javascript
{
  firstName: 'Alfie',
  lastName: 'Macey',
  gender: 'male',
  nickname: 'strong9173452',
  emailAddress: 'alfie.macey5713177@yahoo.com',
  password: 'Alfie$5009314',
  birthdate: {
      monthNumber: 7,
      monthName: 'July',
      dayNumber: 15,
      yearNumber: 1972,
      fullDateString: '1972-07-15'
    }
}
```

## Install

```sh
npm install get-fake-user
```

## Usage

```javascript
const getFakeUser = require('get-fake-user')
console.log(getFakeUser())

// console output
{
  firstName: 'Alfie',
  lastName: 'Macey',
  gender: 'male',
  nickname: 'strong9173452',
  emailAddress: 'alfie.macey5713177@yahoo.com',
  password: 'Alfie$5009314',
  birthdate: {
      monthNumber: 12,
      monthName: 'December',
      dayNumber: 5,
      yearNumber: 1967,
      fullDateString: '1967-12-05'
    }
}
```
## Additional parameters

You can specify additional options to customize the created users.

| Name       | Default value | Description      | Examples                    |
| ---------- | ------------- | ---------------- | --------------------------- |
| `count`    | `1`           | Number of users. | `getFakeUser({ count:10 })` |
| `gender`   | `mix`         |Gender of users.<br/><br/>**Supported values:**  `male`, `female`, `mix`.<br/><br/>`male` - created users will be male<br/>`female` - created users will be female <br/>`mix` - created users will be of random sex (`male` or `female`) | `getFakeUser({ gender: 'female' })` |
| `language` | `en`          | Supported languages: English, Spanish, Ukrainian, Russian. the specified language only affects the `firstName` and `lastName` fields.<br/><br/>**Supported values:** `en`,`es`, `uk`, `ru`.<br/><br/>`en` - English<br/>`es` - Spanish<br/>`uk` - Ukrainian<br/>`ru` - Russian |  `getFakeUser({ language: 'uk' })` |


### `count`
To get multiple users, when calling `getFakeUser()` specify an object with the `count` field as a parameter, specify the required number of users in the `count` value. In this case, an array with the specified number of users will be returned.



```javascript
const getFakeUser = require('get-fake-user')
console.log(getFakeUser({count:3}))

// console output
[
  {
    firstName: 'Brian',
    lastName: 'Bargeman',
    gender: 'male',
    nickname: 'fast746322',
    emailAddress: 'brian.bargeman6495334@aol.com',
    password: 'Brian#602241',
    birthdate: {
      monthNumber: 3,
      monthName: 'March',
      dayNumber: 18,
      yearNumber: 1994,
      fullDateString: '1994-03-18'
    }
  },
  {
    firstName: 'Terence',
    lastName: 'Birch',
    gender: 'male',
    nickname: 'sweetie4996015',
    emailAddress: 'terence.birch9865994@gmail.com',
    password: 'Terence@2515067',
    birthdate: {
      monthNumber: 10,
      monthName: 'October',
      dayNumber: 19,
      yearNumber: 1962,
      fullDateString: '1962-10-19'
    }
  },
  {
    firstName: 'Cheryl',
    lastName: 'Samuels',
    gender: 'female',
    nickname: 'fast9219228',
    emailAddress: 'cheryl.samuels7309146@yahoo.com',
    password: 'Cheryl$7425514',
    birthdate: {
      monthNumber: 2,
      monthName: 'February',
      dayNumber: 17,
      yearNumber: 1961,
      fullDateString: '1961-02-17'
    }
  }
]
```
### `gender`
When creating a user, you can specify the required gender for users using the `gender` parameter.  Use the following values `male`, `female`, `mix`. The `mix` parameter can be omitted, it is set by default if the `gender` parameter is missing. Thus, if the `gender` parameter is not manually specified by you, then the gender of the users will be randomly selected.

```javascript
const getFakeUser = require('get-fake-user')
console.log(getFakeUser({count:2, gender: 'female'}))

// console output
[
  {
    firstName: 'Whitney',
    lastName: 'Gustman',
    gender: 'female',
    nickname: 'hot2586687',
    emailAddress: 'whitney.gustman9004751@gmail.com',
    password: 'Whitney)5540391',
    birthdate: {
      monthNumber: 11,
      monthName: 'November',
      dayNumber: 8,
      yearNumber: 1990,
      fullDateString: '1990-11-08'
    }
  },
  {
    firstName: 'Carol',
    lastName: 'Sykes',
    gender: 'female',
    nickname: 'lazy3778840',
    emailAddress: 'carol.sykes9959462@gmail.com',
    password: 'Carol$7241265',
    birthdate: {
      monthNumber: 11,
      monthName: 'November',
      dayNumber: 4,
      yearNumber: 1991,
      fullDateString: '1991-11-04'
    }
  }
]
```

### `language`
With the `language` setting, you can choose in which language fields such as `firstName` and `lastName`. By default `language=en`. Supported languages: English, Ukrainian, Russian. To select a language, enter it in the following format `language: 'en'` or `language: 'es'` or `language: 'uk'` or `language: 'ru'`.
`language: 'en'` is optional, as it is the default.
```javascript
const getFakeUser = require('get-fake-user')
console.log(getFakeUser({language: 'ru'}))

// console output
[
  {
    firstName: 'Владислав',
    lastName: 'Виноградов',
    gender: 'male',
    nickname: 'strong3297577',
    emailAddress: 'vladislav.vinogradov@aol.com',
    password: 'Vladislav#6393212',
    birthdate: {
      monthNumber: 1,
      monthName: 'January',
      dayNumber: 3,
      yearNumber: 1971,
      fullDateString: '1971-01-03'
    }
  }
]
```

## [Demo](https://replit.com/@dzmitry-duboysk/get-fake-user)

## License

MIT

P.S. If you have thoughts on how to improve the package, you can create an [issue](https://github.com/dzmitry-duboyski/get-fake-user/issues)

