// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![ChosenLicense](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.badgeLicense)}

## Table Of Contents: 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Testing](#testing)
  * [Contact](#contact)

## Description
${data.description}

## Installation 
${data.installationInstructions}

## Usage
${data.usageInformation}

## Contribution
${data.contributionGuidelines}

## Testing
${data.testInstructions}

## Contact 
${data.gitHubName}
${data.email}


`;
}

module.exports = generateMarkdown;
