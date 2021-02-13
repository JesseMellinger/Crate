import request from 'supertest'; // import request library from supertest
import express from 'express'; // import express so we can create a mock server
import graphqlHTTP from 'express-graphql'; // import graphqlHTTP express library
import schema from '../../../setup/schema'; // import our graphql schema
import authentication from '../../../setup/authentication'
import models from '../../../setup/models'


// we create describe functions similar to RSpec
describe('user queries', () => {
    let server = express();

    beforeAll(() => {
        server.use(authentication)

        server.use(
            "/",
            graphqlHTTP(request => ({
                schema: schema,
                graphiql: false,
                context: {
                    auth: {
                        user: request.user,
                        isAuthenticated: request.user && request.user.id > 0
                    }
                }
            }))
        )
    }
    )

    afterEach(() =>
        models.User.update({email: "admin@crate.com", shippingAddress: "Sample Address", bio: "Sample data"},{ where: {email: "admin2@crate.com"}})
    )

    it('can successfully update a User', async () => {
        let response = await request(server)
            .post('/')
            .send({ query: `{ userLogin(email: "admin@crate.com", password: "123456") { token } }` })
            .expect(200)

        const userToken = response.body.data.userLogin.token

        let secondResponse = await request(server)
            .post('/')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ query: `mutation{userUpdate(email: "admin2@crate.com", bio: "Updated", shippingAddress: "Updated address"){email shippingAddress bio}}` })
            .expect(200)

        console.log(secondResponse.body.data.userUpdate)
        expect(secondResponse.body.data.userUpdate.email).toBe("admin2@crate.com")
        expect(secondResponse.body.data.userUpdate.shippingAddress).toBe("Updated address")
        expect(secondResponse.body.data.userUpdate.bio).toBe("Updated")
    })
})