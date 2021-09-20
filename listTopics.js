// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function listAllTopics() {
  // Lists all topics in the current project
  const [topics] = await pubSubClient.getTopics();
  console.log('Topics:');
  topics.forEach(topic => console.log(topic.name));
}

listAllTopics().catch(console.error);