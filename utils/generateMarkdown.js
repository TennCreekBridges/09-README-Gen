// create a function that returns a license badge based on which license is passed in and if there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return 'No License';
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
