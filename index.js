const fs = require('fs');
const csv = require('csv-parser');

// Function to read CSV file and return a promise
function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        rows.push(row);
      })
      .on('end', () => {
        resolve(rows);
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}

// Function to write CSV file and return a promise
function writeCSV(filePath, data) {
  return new Promise((resolve, reject) => {
    const csvData = data.map(row => Object.values(row).join(',')).join('\n');
    fs.writeFile(filePath, csvData, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Main function to sort CSV file by second column in descending order
async function sortCSV(inputFile, outputFile) {
  try {
    // Read CSV file
    const data = await readCSV(inputFile);

    // Sort data by the second column in descending order
    data.sort((a, b) => b[Object.keys(b)[1]] - a[Object.keys(a)[1]]);

    // Write sorted data to output CSV file
    await writeCSV(outputFile, data);

    console.log(`CSV file sorted successfully and saved to ${outputFile}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Usage example: node sortCSV.js input.csv output.csv
const inputFile = './input.csv';``
const outputFile = './output.csv';

if (!inputFile || !outputFile) {
  console.error('Usage: node sortCSV.js <input-file> <output-file>');
} else {
  sortCSV(inputFile, outputFile);
}
