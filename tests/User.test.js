const request = require("supertest");
const assert = require("assert");
const app= require('../app');


describe('Post /api/users', () => {
it("Register user ", function(done){
    request(app)
        .post('/api/users')
        .set('Accept','application/json')
        .send({ "first_name":"Kirill", "last_name":"Bodin", "age":"19", "email":"keddreagol@gmail.com" })
        .expect({ message: "Done" })
        .end(function(err, res) {
            if (err) {
                assert(false, err.message);
                return;
            }
            done();
        });
});
});


describe('Get /api/users', () => {
    it("Get user by email ", function(done){
        request(app)
            .get('/api/users')
            .set('Accept','application/json')
            .send({ "email":"KereBod@gmail.com" })
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    assert(false, err.message);
                    return;
                }
                done();
            });
    });
});