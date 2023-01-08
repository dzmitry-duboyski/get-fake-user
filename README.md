<p align="center">
 <img src="https://user-images.githubusercontent.com/38065632/187552707-895d9211-0a38-4ad7-817c-9fd3c6c556ec.png">
</p>

![downloads](https://img.shields.io/npm/dt/get-fake-user) ![](https://img.shields.io/npm/v/get-fake-user) ![](https://img.shields.io/npm/l/get-fake-user) ![](https://img.shields.io/github/last-commit/dzmitry-duboyski/get-fake-user) ![](https://img.shields.io/github/stars/dzmitry-duboyski/get-fake-user?style=social)

---
## Description
Random user generator.
If you need to automate the registration process for example, you need to create user data, in which case this package will help you.

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
  password: 'Alfie$5009314'
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
```
```javascript
// console output
{
  firstName: 'Alfie',
  lastName: 'Macey',
  gender: 'male',
  nickname: 'strong9173452',
  emailAddress: 'alfie.macey5713177@yahoo.com',
  password: 'Alfie$5009314'
}
```
## Additional parameters

You can specify additional options to customize the created users.

| Name | Description | Default value | Examples |
| --- | --- | --- | --- |
| `count` | Number of users. | `1` | `getFakeUser({ count:10 })` |
| `gender` | Gender of users.<br/><br/>**Supported values:**  `male`, `female`, `mix`.<br/><br/>`male` - created users will be male<br/>`female` - created users will be female <br/>`mix` - created users will be of random sex (`male` or `female`) | `mix` | `getFakeUser({ gender: 'female' })` |
| `language` | Supported languages: English, Ukrainian, Russian. the specified language only affects the `firstName` and `lastName` fields.<br/><br/>**Supported values:** `en`,`es`, `uk`, `ru`.<br/><br/>`en` - English<br/>`es` - Spanish<br/>`uk` - Ukrainian<br/>`ru` - Russian | `en` | `getFakeUser({ language: 'uk' })` |


### `count`
To get multiple users, when calling `getFakeUser()` specify an object with the `count` field as a parameter, specify the required number of users in the `count` value. In this case, an array with the specified number of users will be returned.



```javascript
const getFakeUser = require('get-fake-user')

console.log(getFakeUser({count:3}))
```

```javascript
// console output
[
  {
    firstName: 'Brian',
    lastName: 'Bargeman',
    gender: 'male',
    nickname: 'fast746322',
    emailAddress: 'brian.bargeman6495334@aol.com',
    password: 'Brian#602241'
  },
  {
    firstName: 'Terence',
    lastName: 'Birch',
    gender: 'male',
    nickname: 'sweetie4996015',
    emailAddress: 'terence.birch9865994@gmail.com',
    password: 'Terence@2515067'
  },
  {
    firstName: 'Cheryl',
    lastName: 'Samuels',
    gender: 'female',
    nickname: 'fast9219228',
    emailAddress: 'cheryl.samuels7309146@yahoo.com',
    password: 'Cheryl$7425514'
  }
]
```
### `gender`
When creating a user, you can specify the required gender for users using the `gender` parameter.  Use the following values `male`, `female`, `mix`. The `mix` parameter can be omitted, it is set by default if the `gender` parameter is missing. Thus, if the `gender` parameter is not manually specified by you, then the gender of the users will be randomly selected.

```javascript
const getfakeUser = require('get-fake-user')

console.log(getFakeUser({count:2, gender: 'female'}))
```


```javascript
// console output
[
  {
    firstName: 'Whitney',
    lastName: 'Gustman',
    gender: 'female',
    nickname: 'hot2586687',
    emailAddress: 'whitney.gustman9004751@gmail.com',
    password: 'Whitney)5540391'
  },
  {
    firstName: 'Carol',
    lastName: 'Sykes',
    gender: 'female',
    nickname: 'lazy3778840',
    emailAddress: 'carol.sykes9959462@gmail.com',
    password: 'Carol$7241265'
  }
]
```

### `language`
With the `language` setting, you can choose in which language fields such as `firstName` and `lastName`. By default `language=en`. Supported languages: English, Ukrainian, Russian. To select a language, enter it in the following format `language: 'en'` or `language: 'es'` or `language: 'uk'` or `language: 'ru'`.
`language: 'en'` is optional, as it is the default.
```javascript
const getfakeUser = require('get-fake-user')

console.log(getFakeUser({language: 'ru'}))
```
```javascript
// console output
[
  {
    firstName: 'Владислав',
    lastName: 'Виноградов',
    gender: 'male',
    nickname: 'strong3297577',
    emailAddress: 'vladislav.vinogradov@aol.com',
    password: 'Vladislav#6393212'
  }
]
```

## [Demo](https://replit.com/@dzmitry-duboysk/get-fake-user)

## License

MIT

P.S. If you have thoughts on how to improve the package, you can create an [issue](https://github.com/dzmitry-duboyski/get-fake-user/issues)

