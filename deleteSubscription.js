/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function deleteSubscription() {
  // Deletes the subscription
  await pubSubClient.subscription(subscriptionName).delete();
  console.log(`Subscription ${subscriptionName} deleted.`);
}

deleteSubscription().catch(console.error);