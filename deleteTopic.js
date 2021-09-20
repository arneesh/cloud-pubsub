/**
 * TODO(developer): Uncomment this variable before running the sample.
 */
const topicName = 'YOUR_TOPIC_NAME';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function deleteTopic() {
  /**
   * TODO(developer): Uncomment the following line to run the sample.
   */
  // const topicName = 'my-topic';

  // Deletes the topic
  await pubSubClient.topic(topicName).delete();
  console.log(`Topic ${topicName} deleted.`);
}

deleteTopic().catch(console.error);