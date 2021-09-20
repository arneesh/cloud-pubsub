/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
const topicName = 'YOUR_TOPIC_NAME';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listTopicSubscriptions() {
  // Lists all subscriptions for the topic
  const [subscriptions] = await pubSubClient
    .topic(topicName)
    .getSubscriptions();

  console.log(`Subscriptions for ${topicName}:`);
  subscriptions.forEach(subscription => console.log(subscription.name));
}

listTopicSubscriptions().catch(console.error);