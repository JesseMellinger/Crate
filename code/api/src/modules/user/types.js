/*
  Imports
  Object type for developer-defined types
*/
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

/*
  User type
  Object type with fields corresponding to model
  Built-in scalar types used for fields
*/
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    role: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

/*
  User Login type
  Object type with user and token fields
  User type used on user field
  String scalar type on token field
*/
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',

  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

/*
  User Gender type
  Object type with two fields
*/
const UserGenderType = new GraphQLObjectType({
  name: 'userGender',
  description: 'User Gender Type',

  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  })
})

// Export objects for use in other file
export { UserType, UserLoginType, UserGenderType }
