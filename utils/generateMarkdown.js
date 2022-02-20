// creates a function that returns a license badge based on which license is passed in and if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "No License";
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
}

// creates a function that returns the license link, and if there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `[More information about ${license}](https://opensource.org/licenses/${license})`;
  }
}

// creates a function that returns the license section of README and if there is no license, return 'No License'
function renderLicenseSection(license) {
  if (license === "None") {
    return "No License";
  } else {
    return [
      `## License \nThis project was developed under the ${license} license.`,
      `* [License](#License)`,
    ];
  }
}

// creates a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseSection(data.license)[1]}
* [Contributions](#contributions)
* [Questions](#questions)
* [Testing](#testing)

<a name="installation"></a>
## Installation
${data.installation}


<a name="usage"></a>
## Usage
${data.usage}
${renderLicenseSection(data.license)[0]}
${renderLicenseLink(data.license)}

<a name="contributions"></a>
## Contributions
${data.contributions}

<a name="questions"></a>
## Questions
You may direct any questions about the project to [${
    data.gitHub
  }](https://github.com/${data.gitHub}), via email: [${data.email}](mailto:${
    data.email
  }).

<a name="testing"></a>
## Testing
${data.testInstructions}
`;
}

module.exports = generateMarkdown;
