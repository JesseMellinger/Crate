/*
  Imports
  Sequelize ORM module imported
*/
import Sequelize from 'sequelize'

/*
  App Imports
  Database connection imported
*/
import databaseConnection from './database'

/*
  Import bindings exported by model modules
*/
const models = {
  User: databaseConnection.import('../modules/user/model'),
  Product: databaseConnection.import('../modules/product/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model')
}

/*
  Array of keys from models object iterated over
  Establish associations if relationships defined on model
*/
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})

/*
  Create tables with defined fields for each model
*/
models.sequelize = databaseConnection
models.Sequelize = Sequelize

// Export models object
export default models
