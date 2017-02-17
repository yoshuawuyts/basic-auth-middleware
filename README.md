# basic-auth-middleware [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Basic auth middleware

## Usage
```js
var Auth = require('basic-auth-middleware')
var http = require('http')

var auth = Auth('my-username', 'some-password')

http.createServer(function (req, res) {
  var ctx = {}
  auth(req, res, ctx, function (err) {
    if (err) return res.end('not authenticated')
    res.end('authentication successful')
  })
})
```

## API
### middleware = auth(username, password)
Create a new middleware instance.

### middleware(req, res, ctx, done([err]))
Validate an incoming HTTP request. Sets `res.statusCode` to `401`. `err` is an
instance of `boom`.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/basic-auth-middleware.svg?style=flat-square
[3]: https://npmjs.org/package/basic-auth-middleware
[4]: https://img.shields.io/travis/yoshuawuyts/basic-auth-middleware/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/basic-auth-middleware
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/basic-auth-middleware/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/basic-auth-middleware
[8]: http://img.shields.io/npm/dm/basic-auth-middleware.svg?style=flat-square
[9]: https://npmjs.org/package/basic-auth-middleware
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
