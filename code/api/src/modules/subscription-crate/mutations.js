// Imports
import { GraphQLInt, GraphQLString } from 'graphql'

// App Imports
import SubscriptionCrateType from './types'
import { create, remove, update } from './resolvers'

// Subscription create
export const subscriptionCrateCreate = {
  type: SubscriptionCrateType,
  args: {
    subscriptionId: {
      name: 'subscriptionId',
      type: GraphQLInt
    },
    deliveryDate: {
      name: 'deliveryDate',
      type: GraphQLString
    }
  },
  resolve: create
}

// Subscription remove
export const subscriptionCrateRemove = {
  type: SubscriptionCrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// Subscription udpate
export const subscriptionCrateUpdate = {
  type: SubscriptionCrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    deliverDate: {
      name: 'deliveryDate',
      type: GraphQLString
    }
  },
  resolve: update
}
