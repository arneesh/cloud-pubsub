/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const topicName = 'YOUR_TOPIC_NAME';
const subscriptionName = 'YOUR_SUBSCRIPTION_NAME';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function modifyPushConfig() {
  const options = {
    // Set to an HTTPS endpoint of your choice. If necessary, register
    // (authorize) the domain on which the server is hosted.
    pushEndpoint: `https://${pubSubClient.projectId}.appspot.com/push`,
  };

  await pubSubClient
    .topic(topicName)
    .subscription(subscriptionName)
    .modifyPushConfig(options);
  console.log(`Modified push config for subscription ${subscriptionName}.`);
}

modifyPushConfig().catch(console.error);