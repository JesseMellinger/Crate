// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

/*
  App Imports
  Import user type from types file in same directory
  Import resolver functions from resolvers file in same directory
*/
import { UserType } from './types'
import { create, remove } from './resolvers'

/*
  Create
  Mutation type part of schema
  Root field type as user
  Arguments provided to resolver function
*/
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

/*
  Remove
  Mutation operation
  User type for root field
  ID passed as argument to resolver function (remove)
*/
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
