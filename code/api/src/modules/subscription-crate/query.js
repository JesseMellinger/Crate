// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import SubscriptionCrateType from './types'
import { getAll, getByUser, getBySubscription, get } from './resolvers'

// SubscriptionCrates All
export const subscriptionCrates = {
  type: new GraphQLList(SubscriptionCrateType),
  resolve: getAll
}

// SubscriptionCrates by user
export const subscriptionCratesByUser = {
  type: new GraphQLList(SubscriptionCrateType),
  resolve: getByUser
}

// SubscriptionCrates by subscription
export const subscriptionCratesBySubscription = {
  type: new GraphQLList(SubscriptionCrateType),
  args: {
    subscriptionId: { type: GraphQLInt }
  },
  resolve: getBySubscription
}

// SubscriptionCrate By id
export const subscriptionCrate = {
  type: SubscriptionCrateType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
