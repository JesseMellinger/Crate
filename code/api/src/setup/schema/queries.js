// Imports
import { GraphQLObjectType } from 'graphql'

/*
  App Imports
  Import query moduels for each model
*/
import * as user from '../../modules/user/query'
import * as product from '../../modules/product/query'
import * as crate from '../../modules/crate/query'
import * as subscription from '../../modules/subscription/query'

/*
  Query
  Spread operator used in fields for list from modules
  All query modules used from imports
*/
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...product,
    ...crate,
    ...subscription
  })
})

// Export query object as module
export default query
