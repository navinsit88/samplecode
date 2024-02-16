const fs = require('fs');

const numObjects = 10; // Number of objects per file
const numFiles = 10; // Number of files to generate

function generateUniqueIds(count) {
  const usedIds = new Set();
  const ids = [];
  while (ids.length < count) {
    let id = Math.floor(Math.random() * 10000); // Generate random ID
    if (!usedIds.has(id)) {
      usedIds.add(id);
      ids.push(id);
    }
  }
  return ids;
}

for (let i = 1; i <= numFiles; i++) {
  const ids = generateUniqueIds(numObjects); // Generate unique IDs for this file
  const data = [];

  for (let j = 0; j < numObjects; j++) {
    const isAbcd = Math.random() >= 0.5;
    data.push({
      id: ids[j], // Use unique ID from generated list
      DetailType: "My Awesome Event Name",
      Detail: `{"value": "${isAbcd ? "abcd" : "efgh"}"}`,
      EventBusName: "my-custom-event-bus",
      Resources: [],
      Source: "my-service-as-source",
    });
  }

  const fileName = `output/file-${i}.json`;
  const jsonString = JSON.stringify(data, null, 2);

  fs.writeFile(fileName, jsonString, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`File saved: ${fileName}`);
    }
  });
}

console.log("Data successfully generated and written to separate files!");
