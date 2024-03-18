const fs = require('fs'); // Import file system module
const uuidv4 = require('uuid/v4');

function generateSampleJsonArray(numObjects = 1) {
  const sampleJsonArray = [];

  for (let i = 0; i < numObjects; i++) {
    const eventId = uuidv4(); // Generate unique eventId

    const sampleObject = {
      eventId,
      eventAction: "ScheduleEvent",
      scheduledInMin: "1",
      outboundChannelAdapter: {
        eventType: "string",
        channels: [
          {
            channelType: "SNS",
            channelName: "string"
          }
        ],
        referenceData: [
          {
            referenceDataKey: "string",
            referenceDataValue: "string"
          }
        ]
      }
    };

    sampleJsonArray.push(sampleObject);
  }

  return sampleJsonArray;
}

// Generate the array
const highlightedObjects = generateSampleJsonArray(5);

// Write the array to a JSON file
try {
  const jsonString = JSON.stringify(highlightedObjects, null, 2); // Pretty-print for readability
  fs.writeFileSync('messages.json', jsonString);
  console.log('Successfully wrote messages.json');
} catch (error) {
  console.error('Error writing messages.json:', error);
}
