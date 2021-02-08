/*

In thie file we are going to want to setup some new queries. We will need to be able to return
a histroy of prodcuts delivered to a user along with what they have kept. We will also need to
return when the next delivery is coming for a user.

*/

// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { UserType, UserLoginType, UserGenderType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
export const users = {
  type: new GraphQLList(UserType),
  resolve: getAll
}

// By ID
export const user = {
  type: UserType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

// Auth
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
export const userGenders = {
  type: new GraphQLList(UserGenderType),
  resolve: getGenders
}
