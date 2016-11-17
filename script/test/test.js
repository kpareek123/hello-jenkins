var request = require('supertest');
var app = require('/root/GitApp/hello-jenkins/app.js');
 
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello world', done);
  });
});
