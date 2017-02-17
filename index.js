var auth = require('basic-auth')
var assert = require('assert')
var boom = require('boom')

module.exports = middleware

function middleware (username, password) {
  assert.equal(typeof username, 'string', 'lib/basic-auth-middleware: username should be type string')
  assert.equal(typeof password, 'string', 'lib/basic-auth-middleware: password should be type string')

  return function (req, res, ctx, done) {
    var creds = auth(req, res)

    if (!creds || creds.name !== username || creds.pass !== password) {
      var statusCode = 401
      var message = 'invalid credentials'
      var err = boom.create(statusCode, message)
      res.statusCode = statusCode
      return done(err)
    } else {
      done()
    }
  }
}
