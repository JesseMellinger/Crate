// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'

// App Imports

import SubscriptionCrateType from '../subscription/types'
import { ProductType } from '../product/types'

// CrateProduct type
const CrateProductType = new GraphQLObjectType({
  name: 'crateProduct',
  description: 'CrateProduct Type',

  fields: () => ({
    id: { type: GraphQLInt },
    subscriptionCrate: { type: SubscriptionCrateType },
    product: { type: ProductType },
    returned: { type: GraphQLBoolean },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default CrateProductType
