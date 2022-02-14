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

// creates a function that returns the license section of README and if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ["", ""];
  } else {
    return [
      `## License \nThis project was developed under the ${license} license.`,
      `* [License](#License)`,
    ];
  }
}

// generate installation instructions or blank string if not available
function renderInstallationSection(install) {
  if (!install) {
    return ["", ""];
  } else {
    return [`## Installation \n${install}`, `* [Installation](#Installation)`];
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
${renderInstallSection(data.installinstructions)[1]}

* [Usage](#Usage)
${renderLicenseSection(data.license)[1]}

* [Contributions](#Contributions)

* [Questions](#Questions)

## Usage
${data.usage}
${renderLicenseSection(data.license)[0]}
${renderLicenseLink(data.license)}

## Contributions
${data.contributions}

## Questions
You may direct any questions about the project to [${
    data.github
  }](https://github.com/${data.github}), via email: [${data.email}](mailto:${
    data.email
  }).
  `;
}

module.exports = generateMarkdown;
