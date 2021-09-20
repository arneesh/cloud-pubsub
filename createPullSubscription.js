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

async function createSubscription() {
  // Creates a new subscription
  await pubSubClient.topic(topicName).createSubscription(subscriptionName);
  console.log(`Subscription ${subscriptionName} created.`);
}

createSubscription().catch(console.error);