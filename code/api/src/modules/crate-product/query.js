// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import CrateProductType from './types'
import { getAll, getByUser, getBySubscription, getBySubscriptionCrate, get } from './resolvers'

// CrateProducts All
export const CrateProducts = {
  type: new GraphQLList(CrateProductType),
  resolve: getAll
}

// CrateProducts by user
export const CrateProductsByUser = {
  type: new GraphQLList(CrateProductType),
  resolve: getByUser
}

// CrateProducts by subscription
export const CrateProductsBySubscription = {
  type: new GraphQLList(CrateProductType),
  args: {
    subscriptionId: { type: GraphQLInt }
  },
  resolve: getBySubscription
}

// CrateProducts by subscription crate
export const CrateProductsBySubscriptionCrate = {
  type: new GraphQLList(CrateProductType),
  args: {
    subscriptionCrateId: { type: GraphQLInt }
  },
  resolve: getBySubscriptionCrate
}

// CrateProduct By id
export const CrateProduct = {
  type: CrateProductType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
