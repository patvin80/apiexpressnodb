import 'mocha'
import {assert, expect} from 'chai'
import {app } from '../index.js'
import request from 'supertest';

describe("Default", () => {
    it("Checks for null", () => {
        let result = 1
        assert(result != null, "Error")
    })
})

describe("Express Server", () => {
    it('it should GET /', (done) => {
        request(app)
        .get('/')
        .end((err, res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).to.be.an('object');
            done();
        });
    });
})