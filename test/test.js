var mocha = require('mocha');
var runkoa = require('..');
var request = require('request-promise');
var assert = require('assert');

describe("runkoa", function() {
  this.timeout(5000);

  before(function() {
    runkoa(__dirname + '/bin/www', {});
  });

  it('服务器正常响应', function(done) {
    request('http://localhost:3000').then(function(body) {
      assert.strictEqual('Hello Koa in app.js', body);
      done();
    });
  });
});