/*
  Imports
  GraphQL scalar types and wrapping type to point to other type
*/
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

/*
  App Imports
  Import object types
  Import resolver functions
*/
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

/*
  All
  List type marker, array of User type elements
  Resolver function to get all users
*/
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

/*
  By ID
  Type User
  Single argument, ID passed to resolver function
*/
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

/*
  Auth
  UserLoginType as object type
  Three arguments passed to resolver function
*/
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

/*
  Genders
  UserGenderType as object type in list
  No arguments passed to resolver function
*/
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
