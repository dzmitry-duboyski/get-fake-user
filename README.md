
# get-fake-user 

![downloads](https://img.shields.io/npm/dt/get-fake-user) ![](https://img.shields.io/npm/v/get-fake-user) ![](https://img.shields.io/npm/l/get-fake-user) ![](https://img.shields.io/github/last-commit/dzmitry-duboyski/get-fake-user) ![](https://img.shields.io/github/stars/dzmitry-duboyski/get-fake-user?style=social)

---
## Description
Random user generator.
If you need to automate the registration process for example, you need to create user data, in which case this package will help you.

## How it works
The data.js file contains a set of random data that includes first names, last names, and other data. A random first and last name is taken from this file, and an email and password are generated based on them. The generated data is exported as an object.

Example of an exported object: 
```json
{
  firstName: 'Arthur',
  lastName: 'Harris',
  nickname: 'strong6513903618',
  emailAddres: 'arthur.harris23248550760@aol.com',
  password: 'Arthur*73235629514'
}
```

## Install

```sh
npm install get-fake-user
```

## Usage

```javascript
const user = require('get-fake-user')

console.log(user)
console.log(user.firstName)
console.log(user.lastName)
console.log(user.nickname)
console.log(user.emailAddres)
console.log(user.password)
```

## [Demo](https://replit.com/@dzmitry-duboysk/Demo-get-fake-user?v=1)

## License

MIT

P.S. If you have thoughts on how to improve the package, you can create an [issue](https://github.com/dzmitry-duboyski/get-fake-user/issues)

