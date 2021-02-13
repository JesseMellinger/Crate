import request from 'supertest'; // import request library from supertest
import express from 'express'; // import express so we can create a mock server
import graphqlHTTP from 'express-graphql'; // import graphqlHTTP express library
import schema from '../../../setup/schema'; // import our graphql schema

// we create describe functions similar to RSpec
describe('user queries', () => {
    let server = express();

    beforeAll(() => {
        server.use(
            "/",
            graphqlHTTP({
                schema: schema,
                graphiql: false
            })
        )
    })

    it('can successfully query all users', async () => {
        const response = await request(server)
        .post('/')
        .send({query: `{ subscriptions { id } }`})
        .expect(200)

        expect(response.body.data.subscriptions.length).toBe(1)
      })

      it('can successfully query all users', async () => {
        const response = await request(server)
        .post('/')
        .send({query: `{ subscription( id: 1 ) { id } }`})
        .expect(200)

        expect(response.body.data.subscription.id).toBe(1)
      })
})