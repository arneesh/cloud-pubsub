/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const subscriptionName = 'YOUR_EXISTING_SUBSCRIPTION_NAME';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function detachSubscription() {
  // Gets the status of the existing subscription
  const sub = pubSubClient.subscription(subscriptionName);
  const [detached] = await sub.detached();
  console.log(
    `Subscription ${subscriptionName} 'before' detached status: ${detached}`
  );

  await pubSubClient.detachSubscription(subscriptionName);
  console.log(`Subscription ${subscriptionName} detach request was sent.`);

  const [updatedDetached] = await sub.detached();
  console.log(
    `Subscription ${subscriptionName} 'after' detached status: ${updatedDetached}`
  );
}

detachSubscription();