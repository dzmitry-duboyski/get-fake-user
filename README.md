# get-fake-user
Random user generator.
If you need to automate the registration process for example, you need to create user data, in which case this package will help you.

## How it works..
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

## How to use

install:
`npm install get-fake-user`

Use declaring a variable:
`const user = require(get-fake-user)`

Use the variable as you wish
```javascript
console.log(user)
console.log(user.firstName)
console.log(user.lastName)
console.log(user.nickname)
console.log(user.emailAddres)
console.log(user.password)
```

## License

MIT

