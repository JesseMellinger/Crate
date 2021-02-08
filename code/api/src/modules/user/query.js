// Imports
// GraphQL type imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
// types and resolver fuctions imported
// * still dont really know how to wire all of this up correctly
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
// Returns list(array) of all users
// points to the getAll resolver function
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
// Returns a user by its ID
// points to the getById resolver expecting one argument(ID)
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Auth
// UserLoginType
// login resolver expecting 3 arguments
export const userLogin = {
  type: UserLoginType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    },

    role: {
      name: 'role',
      type: GraphQLString
    }
  },
  resolve: login
}

// Genders
// Returns list of genders
// points to the getGenders resolver function, no arguments needed
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
