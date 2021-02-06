/*
  Imports
  Import object type module
*/
import { GraphQLObjectType } from 'graphql'

/*
  App Imports
  Import mutation modules for each model
*/
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

/*
  Mutation
  Spread operator used for each mutation module in fields
  All mutation modules used from imports
*/
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

// Export mutation module
export default mutation
