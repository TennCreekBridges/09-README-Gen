// load packages
const fs = require('fs');
const inquirer = require('inquirer');

// questions to generate README
const questions = () => {
    return inquirer.prompt ([
      {
          type: 'input',
          name: 'title',
          message: 'What is your project title? (Required)',
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log('Please enter your project title!');
                  return false;
              }
            }
        },


    ]);

// function to write readme file
function writeToFile(fileName, data) {}

// function to initialize app
function init() {}

// Function call to initialize app
init();
