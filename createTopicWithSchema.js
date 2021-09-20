/**
 * TODO(developer): Uncomment these variables before running the sample.
 */
const topicName = 'YOUR_TOPIC_NAME';
const schemaName = 'YOUR_SCHEMA_NAME';
const encodingType = 'BINARY';

// Imports the Google Cloud client library
const {PubSub} = require('@google-cloud/pubsub');

// Creates a client; cache this for further use
const pubSubClient = new PubSub();

async function createTopicWithSchema(topicName, schemaName, encodingType) {
  // Get the fully qualified schema name.
  const schema = pubSubClient.schema(schemaName);
  const fullName = await schema.getName();

  // Creates a new topic with a schema. Note that you might also
  // pass Encodings.Json or Encodings.Binary here.
  await pubSubClient.createTopic({
    name: topicName,
    schemaSettings: {
      schema: fullName,
      encoding: encodingType,
    },
  });
  console.log(`Topic ${topicName} created with schema ${fullName}.`);
}