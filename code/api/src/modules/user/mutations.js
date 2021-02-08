// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// UserType and resolver methods bieng imported
import { UserType } from './types'
import { create, remove } from './resolvers'

// Create
// Mutation for user signup
// Arguments passed into the resolver
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
// Mutation to remover user
// Id is required for the resolver
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}