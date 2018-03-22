const request = require('supertest');
const app = require('../../server/server');

describe('GET /project', () => {
  it('respond with json', (done) => {
    request(app)
      .get('/project')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('responds to non-existant routes with 404', () => (
    request(app)
      .get('/api/hello')
      .expect(404)
  ));
});
