/**
 * * INFO(developer): Pass the topic name as cli argument .
 */
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const topicName = argv.topic;

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopic() {
  // Creates a new topic
  await pubSubClient.createTopic(topicName);
  console.log(`Topic ${topicName} created.`);
}

createTopic();