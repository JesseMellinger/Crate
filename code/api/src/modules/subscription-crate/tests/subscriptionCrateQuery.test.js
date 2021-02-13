import request from 'supertest'; // import request library from supertest
import express from 'express'; // import express so we can create a mock server
import graphqlHTTP from 'express-graphql'; // import graphqlHTTP express library
import schema from '../../../setup/schema'; // import our graphql schema
import authentication from '../../../setup/authentication'


// we create describe functions similar to RSpec
describe('user queries', () => {
    let server = express();

    beforeAll(() => {
        server.use(authentication)

        server.use(
            "/",
            graphqlHTTP(request =>({
                schema: schema,
                graphiql: false,
                context: {
                  auth: {
                    user: request.user,
                    isAuthenticated: request.user && request.user.id > 0
                  }
            }
        }))
    )}
  )


    it('can successfully query all subscription crates', async () => {
        const response = await request(server)
            .post('/')
            .send({ query: `{ subscriptionCrates { id } }` })
            .expect(200)

        expect(response.body.data.subscriptionCrates.length).toBe(1)
    })

    it('can successfully query subscription crates by id', async () => {
        const response = await request(server)
            .post('/')
            .send({ query: `{ subscriptionCrate(id: 1) { id } }` })
            .expect(200)

        expect(response.body.data.subscriptionCrate.id).toBe(1)
    })

    it('can successfully query subscription crates by subscription', async () => {
        const response = await request(server)
            .post('/')
            .send({ query: `{ subscriptionCratesBySubscription(subscriptionId: 1) { id deliveryDate } }` })
            .expect(200)

        expect(response.body.data.subscriptionCratesBySubscription[0].id).toBe(1)
        expect(response.body.data.subscriptionCratesBySubscription[0].deliveryDate).toBe("Never")
    })

    it('can successfully query subscription crates by subscription', async () => {
        let response = await request(server)
        .post('/')
        .send({ query: `{ userLogin(email: "admin@crate.com", password: "123456") { token } }` })
        .expect(200)

        const userToken = response.body.data.userLogin.token

        let secondResponse = await request(server)
        .post('/')
        .set('Authorization', `Bearer ${userToken}`)
        .send({ query: `{ subscriptionCratesByUser { id deliveryDate } }` })
        .expect(200)

        console.log(secondResponse.body.data.subscriptionCratesByUser)

    })
})
