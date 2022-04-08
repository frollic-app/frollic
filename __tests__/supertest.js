
const request = require("supertest");
const app = require("../server/server.js"); // Link to your server file server/server.js


//testing route integration
describe('/search', () => {
    afterAll(() => app.close())
    describe('POST', () => {
        it('respondes with 200 status and application/json content', () => {
            const search= [{
                    location: '98122',
                    radius: '5',
                    categories: 'Art Galleries'
                }]
            
            return request(app)
            .post('/api/search')
            .send(search)
            .expect('Content-Type', /application\/json/)
            .expect(200)

        });
        
        // xit('responds to invalid request with 404 status and error message in body', () => {
        //     return supertest(app)
        //     .post('/search')
        //     .send({ radius: 5 })
        //     .expect(400)
        //     .then((response) => {
        //         expect(response.body).toHaveProperty('error');
        //     })}
        // )
    
    })}
)
