const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

  {
    type: "input",
    name: "title",
    message: "What is the title of this Project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of this Project?",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "What steps are neeeded to install this Project?",
  },
  {
    type: "input",
    name: "usageInformation",
    message: "How do you use this Project?",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "What (in theory) would a person (or persons) need to know to contribute to this PARTICULAR Project?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "How do you test this Project?",
  },
  {
    type: "list",
    name: "badgeLicense",
    message: "Describe the license for this Project.",
    choices: ["Hippocratic_2.1", "GPLv3", "WTFPL", "Apache_2.0", "A Fire Truck"]
  },
  {
    type: "input",
    name: "gitHubName",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(answers => {
    const readMeData = generateMarkdown(answers);
    fs.writeFile("generatedREADME.md", readMeData, () => {
      console.log("Donion Rings!")
    })
  })
}

// Function call to initialize app
init();
