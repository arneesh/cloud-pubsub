/**
 * * INFO(developer): Pass topic and sub name as cli argument.
 */
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const topicName = argv.topic;
const subscriptionName = argv.sub;

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createPushSubscription() {
  const options = {
    pushConfig: {
      // Set to an HTTPS endpoint of your choice. If necessary, register
      // (authorize) the domain on which the server is hosted.
      pushEndpoint: `https://${pubSubClient.projectId}.appspot.com/push`,
    },
  };

  await pubSubClient
    .topic(topicName)
    .createSubscription(subscriptionName, options);
  console.log(`Subscription ${subscriptionName} created.`);
}

createPushSubscription().catch(console.error);