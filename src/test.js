/**
 * Multiply two numbers.
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {number} - the product of a and b
 */
function multiply (a, b) {
  return a * b
}

/**
 * Another function.
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns - the product of a and b
 */
function anotherFunction (a, b) {
  return a * b
}

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
function aasdfasdf (a, b) {
  return a * b
}