const fs = require('fs'); // Import the File System module

const data = [];

for (let i = 1; i <= 100; i++) {
  // Generate a random value (true for "abcd", false for "efgh")
  const isAbcd = Math.random() >= 0.5;

  data.push({
    DetailType: "My Awesome Event Name",
    Detail: `{"id": ${i}, "value": "${isAbcd ? "abcd" : "efgh"}"}`,
    EventBusName: "my-custom-event-bus",
    Resources: [],
    Source: "my-service-as-source",
  });
}

// Convert data to JSON string
const jsonString = JSON.stringify(data);

// Write JSON string to file
fs.writeFile('event.json', jsonString, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data successfully saved to event.json');
  }
});
