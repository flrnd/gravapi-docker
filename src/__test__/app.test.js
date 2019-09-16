import request from 'supertest';
import app from '../app';

describe('Test valid email', () => {
  const validEmail = 'valid@email.com';

  test('It should response 200', done => {
    request(app)
      .get(`/api/v1/${validEmail}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
