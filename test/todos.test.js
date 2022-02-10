import { app } from "../index.js"
import { expect } from 'chai';
import request from 'supertest';

describe("Todo Apis", () => {
    it('it should GET Todos', (done) => {
        request(app)
        .get('/api/v1/todos')
        .end((err, res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf(3);
            done();
        });
    });
    it('it should GET One Todo', (done) => {
        request(app)
        .get('/api/v1/todos/1')
        .end((err, res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.an('object');
            done();
        });
    });
    it('it should not get Todo', (done) => {
        request(app)
        .get('/api/v1/todos/33343')
        .end((err, res) => {
            expect(res.status).to.be.equal(404);
            done();
        });
    });

})

