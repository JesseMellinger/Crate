// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { ProductType, ProductTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// Products All
// Querie returns all products in the database
// Points to the getAll resolver function
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// Product By slug
// Querie returns product by the slig type
// Points to the getBySlug resolver function
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
// Querie returns a single product by its id
// Points to the getById resolver function
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
// Querie returns any related products
// Points to the getRelated resolver function
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
// Querie returns the product types
// Points to the getTypes resolver function
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}
