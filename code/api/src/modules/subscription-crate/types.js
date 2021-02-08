// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import  SubscriptionType  from '../subscription/types'

// Subscription type
const SubscriptionCrateType = new GraphQLObjectType({
  name: 'subscriptionCrate',
  description: 'SubscriptionCrate Type',

  fields: () => ({
    id: { type: GraphQLInt },
    subscription: { type: SubscriptionType },
    deliveryDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default SubscriptionCrateType
