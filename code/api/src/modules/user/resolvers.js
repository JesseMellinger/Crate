// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

/*
  Create
  Resolver function with two parameters of four inputs
  First parameter references result of previous resolver level
  Get user from database by email if exists
  If user not found with email, create hash of password & create user with name,
  email, and hashed password
  If user already exists with email error message is thrown
*/
export async function create(parentValue, { name, email, password }) {
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)

    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)
  }
}

/*
  Resolver function called from query
  Find user in database by email if exists
  If user record not found, erro thrown
  Otherwise get user details and confirm passwords match
  If passwords don't match throw error
  Else create token object and return user details and toke
*/
export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })

  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

/*
  Get by ID
  Get user record by id provided as argument
*/
export async function getById(parentValue, { id }) {
  return await models.User.findOne({ where: { id } })
}

/*
  Get all
  Retrieve all user records
*/
export async function getAll() {
  return await models.User.findAll()
}

/*
  Delete
  Remove user record from table by referencing ID
*/
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
}

/*
  User genders
  Get values from json supplied in params
*/
export async function getGenders() {
  return Object.values(params.user.gender)
}
