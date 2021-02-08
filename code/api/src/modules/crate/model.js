'use strict'
/*
    - Where the Crate  model is defined
    - Using built in data types
    - Has a Hasmany relationship with subscriptions
    - Crate model exported
*/
module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }

  return Crate
}