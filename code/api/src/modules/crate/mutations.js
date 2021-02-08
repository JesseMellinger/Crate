// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// imports the CrateType and resolvers
import CrateType from './types'
import { create, remove, update } from './resolvers'

// Crate create
// Mutation to create a new Create
// Points to the create resolver function
// Resolver accepts two arguments name and description
export const crateCreate = {
  type: CrateType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// Crate update
// Mutation to update an existing crate
// Points to the update resolver function
// Resolver accepts three arguments id, name and description
export const crateUpdate = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}

// Crate remove
// Mutation to delete an existing crate
// Points to the remove resolver function
// Resolver rewuires the create id
export const crateRemove = {
  type: CrateType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}