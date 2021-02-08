'use strict';

// SubscriptionCrate
module.exports = (sequelize, DataTypes) => {
  let SubscriptionCrate = sequelize.define('subscriptionCrates', {
    deliveryDate: {
      type: DataTypes.STRING
    },
    subscriptionId: {
      type: DataTypes.INTEGER
    }
  });

  SubscriptionCrate.associate = function(models) {
    SubscriptionCrate.belongsTo(models.Subscription)
  }

  return SubscriptionCrate;
};
