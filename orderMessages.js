/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const topicName = 'YOUR_TOPIC_NAME';
const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createSubscriptionWithOrdering() {
  // Creates a new subscription
  await pubSubClient.topic(topicName).createSubscription(subscriptionName, {
    enableMessageOrdering: true,
  });
  console.log(
    `Created subscription ${subscriptionName} with ordering enabled.`
  );
  console.log(
    'To process messages in order, remember to add an ordering key to your messages.'
  );
}

createSubscriptionWithOrdering().catch(console.error);