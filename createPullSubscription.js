/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const topicName = 'YOUR_TOPIC_NAME';
const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createSubscription() {
  // Creates a new subscription
  await pubSubClient.topic(topicName).createSubscription(subscriptionName);
  console.log(`Subscription ${subscriptionName} created.`);
}

createSubscription().catch(console.error);