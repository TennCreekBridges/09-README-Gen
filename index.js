// load packages
const fs = require('fs');
const inquirer = require('inquirer');

// questions to generate README
const questions = [
      {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter your GitHub user name (required).',
            validate: gitHubName => {
                if (gitHubName) {
                    return true;
                } else {
                    console.log('You must enter your GitHub user name.');
                    return false;
                }
            }
        },
        {  
            type: 'input',
            name: 'email',
            message: 'Kindly enter your email address (required).',
            validate: emailAddress => {
                if (emailAddress) {
                    return true;
                } else {
                    console.log('We require your email address. We don\'t like to give ours out, either.');
                    return false;
                }
            }
        },
        {
          type: 'input',
          name: 'title',
          message: 'What is your project title? (required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log('No really, we need your project title. Please enter it now.');
                  return false;
              }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project (required).',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You gotta give us something to work with here. Enter a description. Even a short one.');
                    return false;
                }
            }
        },
        
// questions on specific requirements to run app
        {
            type: 'confirm',
            name: 'installRequred',
            message: 'Are there specific requirements to run your app?',
            default: true,
        },
        {
            type: 'input',
            name: 'installInstructions',
            message: 'Enter requirements to run your app.',
            when: ({installRequired}) => {
                if (installRequired) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: installInstruct => {
                if (installInstruct) {
                    return true;
                } else {
                    console.log('You told us we need to do something to install.... so will you let us know what that is?');
                    return false;
                }
            }
        },

// usage questions
        {
            type: 'input',
            name: 'usage',
            message: 'How will this app be used (required)?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('You gotta let us know how its going to be used. Clue us in.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does this app fall under?',
            choices: ['MIT', 'GNU', 'Apache', 'None']
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Describe how to run tests on your app.',
        },
]

// function to write readme file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                console.clear();
                console.log("Something went wrong. File was not created.");
                reject(err);
                return;
            } else { 
                console.clear();
                console.log("Great success! Your file has been created.");
            }
            resolve ({
                ok: true,
                message: "Great success! Your file has been created."
            });
        });
    });
};

// function to initialize app
function init() {
    console.clear();
    console.log(`
    *****************************
    ***    README GENERATOR   ***
    *****************************
    `);
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(readmeData => {
        return generateMarkdown(readmeData)
    })
    .then((completedReadme) => {
        return writeToFile('./readme/README.md', completedReadme);
    })