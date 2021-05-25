var output

/*
 * Generate random string (e.g for a randomly generated password)
 */

function generateRandomString (desiredLengthOfRandomString) {
  var result = ''
  var possibleCharactersForRandomString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < desiredLengthOfRandomString; i++) {
    result += possibleCharactersForRandomString.charAt(Math.floor(Math.random() * possibleCharactersForRandomString.length))
  }

  return result
}

var randomString = generateRandomString(32)

output = { randomStr: randomString }


/*
 * Increase input number variable by one and return it (as a new variable)
 */

output = { newNumber: Number(input.noInputExample)+1 }
