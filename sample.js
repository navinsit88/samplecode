const fs = require('fs');
const { exec } = require('child_process');

const outputDir = "output";
const numFiles = 10;

for (let i = 1; i <= numFiles; i++) {
  const fileName = `${outputDir}/file-${i}.json`;

  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
    } else {
      const jsonData = JSON.parse(data); // Parse JSON data
      const entryString = `--entries file://${fileName}`;

      const command = `aws events put-events ${entryString}`;

      // Execute the AWS CLI command
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error('Error executing AWS CLI command:', error);
        } else {
          console.log(`File processed: ${fileName}`);
          console.log('AWS CLI command output:', stdout);
          if (stderr) {
            console.error('AWS CLI command error output:', stderr);
          }
        }
      });
    }
  });
}

console.log("Processing files and executing AWS CLI commands...");
