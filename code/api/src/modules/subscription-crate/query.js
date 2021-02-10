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

// Subscriptions by user
export const subscriptionCratesByUser = {
  type: new GraphQLList(SubscriptionCrateType),
  resolve: getByUser
}

// Subscriptions by user
export const subscriptionCratesBySubscription = {
  type: new GraphQLList(SubscriptionCrateType),
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
