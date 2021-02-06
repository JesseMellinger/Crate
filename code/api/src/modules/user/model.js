'use strict'

/*
   User
   Function defining User model
   Users table explicitly passed into definition
   Sequelize automatically adds the fields createdAt and updatedAt
   No default values being set and Sequelize assumes default value of column to null
   Built-in data types being used
   No custom column names
   No class or instance methods on User model
   Association with User has many subscriptions
   Foreign key automatically added to subscription table
   Return model
*/
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
