// Imports
import { GraphQLInt, GraphQLString } from 'graphql'

// App Imports
import SubscriptionCrateType from './types'
import { create, remove, update } from './resolvers'

// SubscriptionCrate create
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

// SubscriptionCrate remove
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

// SubscriptionCrate udpate
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
