import request from 'request';
import { expect } from 'chai';
import app from '../../src/app';
import getPort from 'get-port';

describe('App Server', () => {
  let base_url, server;
  before(async () => {
    const port = await getPort();
    base_url = `http://127.0.0.1:${port}`;
    server = app.listen(port);
  })
  after(() => {
    server.close();
  })
  describe('GET /', () => {
    it('should return 200', (done) => {
      request.get(base_url, (error, res, body) => {
        expect(res.statusCode).to.equal(200);
      })
      done();
    });
  })
}); 