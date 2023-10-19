const fs = require('fs');

const jsContent = fs.readFileSync('./jest-html-reporters-attach/jest_html_reporters/result.js', 'utf8');

// Extract the JSON data
const jsonStart = jsContent.indexOf('{');
const jsonEnd = jsContent.lastIndexOf('}') + 1;
const jsonData = jsContent.substring(jsonStart, jsonEnd);
console.log('jsonData:', jsonData)

const testResults = () => {
  // Parse the JSON data
try {
  const parsedData = JSON.parse(jsonData);
  console.log('parsedData:', parsedData)
  
    let testResult = {
        passedTestCases: parsedData.numPassedTests,
        failedTestCases: parsedData.numFailedTests,
        pendingTestCases: parsedData.numPendingTests,
        // performanceStats: perfStats
    }
 
    return testResult;
  // console.log("testResultResponses:", testResult)

} catch (error) {
  console.error('Error parsing JSON data:', error);
}
};

const testRes = testResults();
console.log('jjj:', testRes);
console.log(`export FAILED_TEST_CASES=${testRes.failedTestCases}`);


module.exports = { testResults };