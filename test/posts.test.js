import { app } from "../index.js"
import { expect } from 'chai';
import request from 'supertest';
import posts from '../data/posts.js'

describe("Post Apis", () => {
        it('it should GET Posts', (done) => {
            request(app)
            .get('/api/v1/posts')
            .end((err, res) => {
                expect(res.status).to.be.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(posts.length);
                done();
            });
        });
})
