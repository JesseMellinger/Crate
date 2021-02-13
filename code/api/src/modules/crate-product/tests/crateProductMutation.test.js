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
        models.CrateProduct.destroy({ where: { productId: 2 } })
    )

    it('can successfully create a crateProduct', async () => {
        let response = await request(server)
            .post('/')
            .send({ query: `{ userLogin(email: "admin@crate.com", password: "123456") { token } }` })
            .expect(200)

        const userToken = response.body.data.userLogin.token

        let secondResponse = await request(server)
            .post('/')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ query: `mutation{ CrateProductCreate(subscriptionCrateId: 1, productId: 2) { returned } }` })
            .expect(200)

        expect(secondResponse.body.data.CrateProductCreate.returned).toBe(false)
    })

    it('can successfully update a crateProducrt', async () => {
        let response = await request(server)
            .post('/')
            .send({ query: `{ userLogin(email: "admin@crate.com", password: "123456") { token } }` })
            .expect(200)

        const userToken = response.body.data.userLogin.token

        let secondResponse = await request(server)
            .post('/')
            .set('Authorization', `Bearer ${userToken}`)
            .send({ query: `mutation{ CrateProductUpdate(id: 1, returned: true) { returned } }` })
            .expect(200)

        expect(secondResponse.body.data.CrateProductUpdate.returned).toBe(true)
    })
})