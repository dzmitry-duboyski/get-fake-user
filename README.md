
# get-fake-user 

![downloads](https://img.shields.io/npm/dt/get-fake-user) ![](https://img.shields.io/npm/v/get-fake-user) ![](https://img.shields.io/npm/l/get-fake-user) ![](https://img.shields.io/github/last-commit/dzmitry-duboyski/get-fake-user) ![](https://img.shields.io/github/stars/dzmitry-duboyski/get-fake-user?style=social)

---
## Description
Random user generator.
If you need to automate the registration process for example, you need to create user data, in which case this package will help you.

## How it works
The data.js file contains a set of random data that includes first names, last names, and other data. A random first and last name is taken from this file, and an email and password are generated based on them. The generated data is exported as an object.

Example of an exported object: 
```javascript
{
  firstName: 'Arthur',
  lastName: 'Harris',
  nickname: 'strong6513903618',
  emailAddress: 'arthur.harris23248550760@aol.com',
  password: 'Arthur*73235629514'
}
```

## Install

```sh
npm install get-fake-user
```

## Usage

```javascript
const getfakeUser = require('get-fake-user')

console.log(getfakeUser())
```
```sh
// console output
{
  firstName: 'Lucas',
  lastName: 'James',
  nickname: 'hot2875558',
  emailAddress: 'lucas.james9818372@yahoo.com',
  password: 'Lucas)9958004'
}
```

To get multiple users, when calling `getFakeUser()` specify an object with the `count` field as a parameter, specify the required number of users in the `count` value. In this case, an array with the specified number of users will be returned.

```javascript
const getfakeUser = require('get-fake-user')

console.log(getfakeUser({count:3}))
```

```sh
// console output
[
  {
    firstName: 'Edward',
    lastName: 'Bryant',
    nickname: 'strong2917039',
    emailAddress: 'edward.bryant5459135@outlook.com',
    password: 'Edward_224314'
  },
  {
    firstName: 'Alfie',
    lastName: 'Miller',
    nickname: 'fast7843971',
    emailAddress: 'alfie.miller5830183@yahoo.com',
    password: 'Alfie*6656289'
  },
  {
    firstName: 'Corey',
    lastName: 'Morgan',
    nickname: 'strong461218',
    emailAddress: 'corey.morgan1531318@aol.com',
    password: 'Corey-47036'
  }
]
```


## [Demo](https://replit.com/@dzmitry-duboysk/Demo-get-fake-user?v=1)

## License

MIT

P.S. If you have thoughts on how to improve the package, you can create an [issue](https://github.com/dzmitry-duboyski/get-fake-user/issues)

