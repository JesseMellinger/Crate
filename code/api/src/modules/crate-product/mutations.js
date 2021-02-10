// Imports
import { GraphQLInt, GraphQLBoolean } from 'graphql'

// App Imports
import CrateProductType from './types'
import { create, remove, update } from './resolvers'

// CrateProduct create
export const CrateProductCreate = {
  type: CrateProductType,
  args: {
    subscriptionCrateId: {
      name: 'subscriptionId',
      type: GraphQLInt
    },
    productId: {
      name: 'productId',
      type: GraphQLInt
    },
    returned: {
      name: 'returned',
      type: GraphQLBoolean
    }
  },
  resolve: create
}

// CrateProduct remove
export const CrateProductRemove = {
  type: CrateProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

// CrateProduct udpate
export const CrateProductUpdate = {
  type: CrateProductType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    returned: {
      name: 'returned',
      type: GraphQLBoolean
    }
  },
  resolve: update
}
