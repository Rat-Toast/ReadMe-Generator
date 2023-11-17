const inquirer = require("inquirer");

const fs = require("fs");
function writeToFile(fileName, data) {
  var fileText = "";
  fileText += `${data.name}'s README\n\n`;
  fileText += ` # ${data.title}\n\n`;
  fileText += `${generateLicense(data.license)}\n\n`;
  fileText += `## Table of Contents\n\n`;
  fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
  fileText += `## Description\n\n${data.description}\n\n`;
  fileText += `## Installation\n\n${data.installation}\n\n`;
  fileText += `## Usage Information\n\n${data.usage}\n\n`;
  fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
  fileText += `## Test Instructions\n\n${data.test}\n\n`;
  fileText += `## License\n\nNOTICE: This application is covered under the ${data.license}\n\n`;
  fileText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`;
  fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
  fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

