// modules for app
const inquirer = require('inquirer');
const fs = require('fs');
const { licenseBadge, generateMarkdown } = require('./utils/generateMarkdown.js');




// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project? (REQUIRED)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
              console.log('Please enter your project title name!');
              return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'language',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
        message: 'What did you build this project with?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project. (REQUIRED)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
              console.log('Please enter a description of your project!');
              return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'Contents',
        choices: ['Title', 'Description', 'Table of Contents', 'Installations', 'Usage', 'License', 'Contributors', 'Testing', 'GitHub Repo', 'Email for question inquiries'],
        message: 'Please select what you would like to add to your table of contents. Press enter to not include a table of contents.',

    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please provide required installations for this application. (REQUIRED)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
              console.log('Please provide installation info for this application!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide the usage instructions. (REQUIRED)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
              console.log('Please provide instructions on how to use the application!');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0', 'GNU gpl', 'No License'],
        message: 'Select the license this application is covered under.',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Please provide names of contributing members to your application. (REQUIRED)',
        validate: contributorsInput => {
            if (contributorsInput) {
                return true;
            } else {
              console.log('Please provide names of contributing members!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Please provide testing instructions for this application.'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your GitHub username? (REQUIRED)',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
              console.log('Please provide your GitHub username!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Please provide your email for inquiries regarding your application.(REQUIRED)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
              console.log('Please provide your email!');
              return false;
            }
        }
    }
];

// function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    // initiates questions object prompt
    inquirer.prompt(questions)
        // writes file to READMEGENERATED.md using data from generateMarkdown
        .then((data) => writeToFile('READMEGENERATED.md', generateMarkdown(data)))
        // once printed w/o erros succesful comand  is printed
        .then(() => console.log("README successfully written."))
        // this will print any erros in the command line, if any.
        .catch((err) => console.log(err))
};

// function call to initialize program
init();
