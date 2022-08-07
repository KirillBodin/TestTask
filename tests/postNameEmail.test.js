const request = require("supertest");
const assert = require("assert");
const app= require('../app');

describe('POST /api/checkage', () => {
    it("Post Name and Email (check age) ", function(done){
        request(app)
            .post('/api/checkage')
            .set('Accept','application/json')
            .send({ "first_name":"Kirill", "last_name":"Bodin", "age":"19" })
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) {
                    assert(false, err.message);
                    return;
                }
                done();
            });
    });
});

