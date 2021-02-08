// App Imports
import models from '../../setup/models'
import params from '../../config/params'

// Get crate by ID
// Resolver accepts a crate id as an angument
// Returns a crate if it exists in the database
// Retuns error message if crate does not exists
export async function getById(parentValue, { crateId }) {
  const crate = await models.Crate.findOne({ where: { id: crateId } })

  if (!crate) {
    // Crate does not exists
    throw new Error('The crate you are looking for does not exists or has been discontinued.')
  } else {
    return crate
  }
}

// Get all crates
// Resolver does not accept arguments
// Returns a list of all crates
export async function getAll(parentValue, { orderBy }) {
  return await models.Crate.findAll({ order: [['id', orderBy]] })
}

// Create crate
// Resolver accepts three arguments name, description and authentication
// Creates a new crate
// Returns operation denied if error
export async function create(parentValue, { name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.create({
      name,
      description
    })
  } else {
    throw new Error('Operation denied.')
  }
}

// Update crate
// Accepts four arguments id, name, description and authentication
// If crate with the id supplied is found it updates the crate
// Returns error message if error
export async function update(parentValue, { id, name, description }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.update(
      {
        name,
        description
      },
      {where: {id}}
    )
  } else {
    throw new Error('Operation denied.')
  }
}

// Delete crate
// Accepts two arguments id, and authenticaton
// If crate with the id supplied is found it will delete it
// Returns error message if crate not found or wrong authentication
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.role === params.user.roles.admin) {
    return await models.Crate.destroy({where: {id}})
  } else {
    throw new Error('Operation denied.')
  }
}
