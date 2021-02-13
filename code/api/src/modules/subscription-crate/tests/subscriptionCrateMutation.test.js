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
        models.SubscriptionCrate.destroy({ where: { deliveryDate: "Some Day" } })
    )

    it('can successfully create a subscription crate', async () => {
        let response = await request(server)
            .post('/')
            .send({ query: `{ userLogin(email: "admin@crate.com", password: "123456") { token } }` })
            .expect(200)

        const userToken = response.body.data.userLogin.token

        let secondResponse = await request(server)
            .post('/')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ query: `mutation { subscriptionCrateCreate(subscriptionId: 1, deliveryDate: "Some Day") { id deliveryDate} }` })
            .expect(200)

        expect(secondResponse.body.data.subscriptionCrateCreate.deliveryDate).toBe("Some Day")
    })
})