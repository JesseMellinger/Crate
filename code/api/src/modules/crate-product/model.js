'use strict';
module.exports = (sequelize, DataTypes) => {
  const CrateProduct = sequelize.define('CrateProduct', {
    subscriptionCrateId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    returned: DataTypes.BOOLEAN
  }, {});
  CrateProduct.associate = function (models) {
    CrateProduct.belongsTo(models.SubscriptionCrate)
    CrateProduct.belongsTo(models.Product)
  };
  return CrateProduct;
};
