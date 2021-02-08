// App Imports
import models from '../../setup/models'

// Get subscriptionCrate by ID
export async function get(parentValue, { id }) {
  return await models.SubscriptionCrate.findOne({
    where: { id },
    include: [
      { model: models.Subscription, as: 'subscription' },
    ]
  })
}

// Get SubscriptionCrate by user
export async function getByUser(parentValue, {}, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.SubscriptionCrate.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.Subscription, as: 'subscription'},
      ]
    })
  } else {
    throw new Error('Please login to view your subscriptions.')
  }
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
