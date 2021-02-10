// App Imports
import models from '../../setup/models'

// Get CrateProduct by ID
export async function get(parentValue, { id }) {
  return await models.CrateProduct.findOne({
    where: { id },
    include: [
      {
        model: models.SubscriptionCrate, as: 'subscriptionCrate', include: [
          {
            model: models.Subscription, as: 'subscription', include: [
              { model: models.Crate, as: 'crate' },
              { model: models.User, as: 'user' }
            ]
          },

        ]
      },
      { model: models.Product, as: 'product' }
    ],
  })
}

// Get CrateProduct by user
export async function getByUser(parentValue, { }, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.CrateProduct.findAll({
      include: [
        {
          model: models.SubscriptionCrate, as: 'subscriptionCrate', include: [
            {
              model: models.Subscription, as: 'subscription',
              where: {
                userId: auth.user.id
              },
              include: [
                { model: models.Crate, as: 'crate' },
                { model: models.User, as: 'user' }
              ]
            },

          ]
        },
      ]
    })
  } else {
    throw new Error('Please login to view your products.')
  }
}

// Get CrateProduct by subscription
export async function getBySubscription(parentValue, { subscriptionId }) {
  return await models.CrateProduct.findAll({
    include: [
      {
        model: models.SubscriptionCrate, as: 'subscriptionCrate',
        where: {
          subscriptionId: subscriptionId
        },
        include: [
          {
            model: models.Subscription, as: 'subscription',

            include: [
              { model: models.Crate, as: 'crate' },
              { model: models.User, as: 'user' }
            ]
          }
        ]
      }
    ]
  })
}

// Get CrateProduct by subscription crate
export async function getBySubscriptionCrate(parentValue, { subscriptionCrateId }) {
  return await models.CrateProduct.findAll({
    where: {
      subscriptionCrateId: subscriptionCrateId
    },
    include: [
      {
        model: models.SubscriptionCrate, as: 'subscriptionCrate',
        include: [
          {
            model: models.Subscription, as: 'subscription',

            include: [
              { model: models.Crate, as: 'crate' },
              { model: models.User, as: 'user' }
            ]
          }
        ]
      }
    ]
  })
}

// Get all CrateProducts
export async function getAll() {
  return await models.CrateProduct.findAll({
    include: [
      {
        model: models.SubscriptionCrate, as: 'subscriptionCrate', include: [
          {
            model: models.Subscription, as: 'subscription', include: [
              { model: models.Crate, as: 'crate' },
              { model: models.User, as: 'user' }
            ]
          },

        ]
      },
      { model: models.Product, as: 'product' }
    ]
  })
}

// Create CrateProduct
export async function create(parentValue, { subscriptionCrateId, productId }, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.CrateProduct.create({
      subscriptionCrateId,
      productId,
    })
  } else {
    throw new Error('Access denied.')
  }
}

// Delete CrateProduct
export async function remove(parentValue, { id }, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.CrateProduct.destroy({ where: { id } })
  } else {
    throw new Error('Access denied.')
  }
}
