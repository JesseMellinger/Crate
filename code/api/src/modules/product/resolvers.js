// App Imports
import params from '../../config/params'
import models from '../../setup/models'

// Get all products
// Returns all products in the database
// does not accept arguments
export async function getAll() {
  return await models.Product.findAll({ order: [['id', 'DESC']] })
}

// Get product by slug
// Returns product by the slug
// Resolver returnes a slug argument to be given to
// Returns error message if it does not exists or is discontinued
export async function getBySlug(parentValue, { slug }) {
  const product = await models.Product.findOne({ where: { slug } })

  if (!product) {
    // Product does not exists
    throw new Error('The product you are looking for does not exists or has been discontinued.')
  } else {
    return product
  }
}

// Get product by ID
// Returns product by its id
// Resolver returnes a product
// Returns error message if product does not exists or is discontinued
export async function getById(parentValue, { productId }) {
  const product = await models.Product.findOne({ where: { id: productId } })

  if (!product) {
    // Product does not exists
    throw new Error('The product you are looking for does not exists or has been discontinued.')
  } else {
    return product
  }
}

// Get related products
// Returns array 3 of related products
export async function getRelated(parentValue, { productId }) {
  return await models.Product.findAll({
    where: {
      id: { [models.Sequelize.Op.not]: productId }
    },
    limit: 3,
    order: [[models.Sequelize.fn('RAND')]] // mock related products by showing random products
  })
}

// Create product
// Creates and returns a new create if the right authentication is provided
// Requires 6 arguments as well as authentication
// Returns an error message if there is an error 
export async function create(parentValue, { name, slug, description, type, gender, image }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Product.create({
      name,
      slug,
      description,
      type,
      gender,
      image
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update product
// Requires 7 arguments as well as authentication
// Updates an existing product
// Returns an error message if there is an error
export async function update(parentValue, { id, name, slug, description, type, gender, image }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Product.update(
      {
        name,
        slug,
        description,
        type,
        gender,
        image
      },
      { where: { id } }
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete product
// Requires 1 argument and authentication
// Deletes an existing product if found
// Returns an error message if there is an error
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    const product = await models.Product.findOne({where: {id}})

    if (!product) {
      // Product does not exists
      throw new Error('The product does not exists.')
    } else {
      return await models.Product.destroy({where: {id}})
    }
  } else {
    throw new Error('Operation denied.')
  }
}

// Product types
export async function getTypes() {
  return Object.values(params.product.types)
}