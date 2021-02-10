// App Imports
import models from '../../setup/models'

// Get subscriptionCrate by ID
export async function get(parentValue, { id }) {
  return await models.SubscriptionCrate.findOne({
    where: { id },
    include: [
      { model: models.Subscription, as: 'subscription', include: [
        {model: models.User, as: 'user'},
        {model: models.Crate, as: 'crate'},
      ]}
    ],
  })
}

// Get SubscriptionCrate by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.SubscriptionCrate.findAll({
      // where: {
      //   'subscription.userId': auth.user.id
      // },
      include: [
        {
          model: models.Subscription, as: 'subscription',
          where: {
            userId: auth.user.id
          },
        },
      ]
    })
  } else {
    throw new Error('Please login to view your subscriptions.')
  }
}

// Get SubscriptionCrate by subscription
export async function getBySubscription(parentValue, { subscriptionId }) {
  return await models.SubscriptionCrate.findAll({
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
  })
}

// Get all SubscriptionCrates
export async function getAll() {
  return await models.SubscriptionCrate.findAll({
    include: [
      { model: models.Subscription, as: 'subscription' },
    ]
  })
}

// Create SubscriptionCrate
export async function create(parentValue, { subscriptionId, deliveryDate }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.SubscriptionCrate.create({
      subscriptionId,
      deliveryDate,
      userId: auth.user.id
    })
  } else {
    throw new Error('Please login to subscribe to this crate.')
  }
}

// Delete SubscriptionCrate
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.SubscriptionCrate.destroy({where: {id}})
  } else {
    throw new Error('Access denied.')
  }
}
