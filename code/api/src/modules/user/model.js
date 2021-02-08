/*

After running the migrations we'll need to update our models. Once again, the User model will
need to reflect the columns that we added.

We will also need to create two new models under the /api/src/modules directory which will
reflect the new tables we created in our migrations. This new models with also contain the
appropriate associations.

*/

'use strict'

// User
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
