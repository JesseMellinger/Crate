import request from 'supertest'; // import request library from supertest
import express from 'express'; // import express so we can create a mock server
import graphqlHTTP from 'express-graphql'; // import graphqlHTTP express library
import schema from '../../../setup/schema'; // import our graphql schema

// we create describe functions similar to RSpec
describe('crateProduct queries', () => {
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

    it('can successfully query all cratePorducts', async () => {
        const response = await request(server)
        .post('/')
        .send({query: `{ CrateProducts { id subscriptionCrate { id } } }`})
        .expect(200)

        expect(response.body.data.CrateProducts.length).toBe(4)
        expect(response.body.data.CrateProducts[0].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProducts[1].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProducts[2].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProducts[3].subscriptionCrate.id).toBe(1)
      })

      it('can successfully query a cratePorduct by id', async () => {
        const response = await request(server)
        .post('/')
        .send({query: `{ CrateProduct( id: 1 ) { id subscriptionCrate { id } } }`})
        .expect(200)

        expect(response.body.data.CrateProduct.id).toBe(1)
        expect(response.body.data.CrateProduct.subscriptionCrate.id).toBe(1)
      })

      it('can successfully query all cratePorducts by subscription', async () => {
        const response = await request(server)
        .post('/')
        .send({query: `{ CrateProductsBySubscription(subscriptionId: 1) { id subscriptionCrate { id } } }`})
        .expect(200)

        expect(response.body.data.CrateProductsBySubscription.length).toBe(4)
        expect(response.body.data.CrateProductsBySubscription[0].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProductsBySubscription[1].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProductsBySubscription[2].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProductsBySubscription[3].subscriptionCrate.id).toBe(1)
      })

      it('can successfully query all cratePorducts by subscriptionCrate', async () => {
        const response = await request(server)
        .post('/')
        .send({query: `{ CrateProductsBySubscriptionCrate(subscriptionCrateId: 1) { id subscriptionCrate { id } } }`})
        .expect(200)

        expect(response.body.data.CrateProductsBySubscriptionCrate.length).toBe(4)
        expect(response.body.data.CrateProductsBySubscriptionCrate[0].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProductsBySubscriptionCrate[1].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProductsBySubscriptionCrate[2].subscriptionCrate.id).toBe(1)
        expect(response.body.data.CrateProductsBySubscriptionCrate[3].subscriptionCrate.id).toBe(1)
      })
})