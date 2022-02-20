// load packages
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// questions to generate README - github name
const questions = [
  {
    type: "input",
    name: "gitHub",
    message: "Please enter your GitHub user name (required).",
    validate: (gitHubName) => {
      if (gitHubName) {
        return true;
      } else {
        console.log("You must enter your GitHub user name.");
        return false;
      }
    },
  },

  // enter email input
  {
    type: "input",
    name: "email",
    message: "Kindly enter your email address (required).",
    validate: (emailAddress) => {
      if (emailAddress) {
        return true;
      } else {
        console.log(
          "We require your email address. We don't like to give ours out, either."
        );
        return false;
      }
    },
  },

  // enter project title
  {
    type: "input",
    name: "title",
    message: "What is your project title? (required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log(
          "No really, we need your project title. Please enter it now."
        );
        return false;
      }
    },
  },

  // enter project description
  {
    type: "input",
    name: "description",
    message: "Describe your project (required).",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log(
          "You gotta give us something to work with here. Enter a description. Even a short one."
        );
        return false;
      }
    },
  },

  // questions on specific installation to run app
  {
    type: "confirm",
    name: "installRequired",
    message: "Are there specific requirements to run your app?",
    default: true,
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please enter installation instructions for your project. (required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log(
          "You told us we need to do something to install... so please let us know what that is."
        );
        return false;
      }
    },
  },

  // usage question
  {
    type: "input",
    name: "usage",
    message: "How will this app be used (required)?",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log(
          "You gotta let us know how its going to be used. Clue us in."
        );
        return false;
      }
    },
  },

  // license type
  {
    type: "list",
    name: "license",
    message: "What license does this app fall under?",
    choices: ["MIT", "GNU", "Apache", "None"],
  },

  // test instructions
  {
    type: "input",
    name: "testInstructions",
    message: "How should we deploy tests on your app?",
  },

  // developer contribution instructions
  {
    type: "input",
    name: "contributions",
    message: "How should a developer contribute to this app?",
  },
];

// function to write readme file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.clear();
        console.log("Something went wrong. File was not created.");
        reject(err);
        return;
      } else {
        console.clear();
        console.log("Great success! Your README.md has been created. It lives at ./readme/README.md.");
      }
      resolve({
        ok: true,
        message: "Great success! Your README.md has been created. It lives at ./readme/README.md.",
      });
    });
  });
}

// function to initialize app
function init() {
  console.clear();
  console.log(`
    =============================
    PROFESSIONAL README GENERATOR   
    =============================
    `);
  return inquirer.prompt(questions);
}

// function call to initialize app
init()
  .then((readmeData) => {
    return generateMarkdown(readmeData);
  })
  .then((completedReadme) => {
    return writeToFile("./readme/README.md", completedReadme);
  });
