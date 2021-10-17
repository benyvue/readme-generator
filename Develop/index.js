// this requires/calls inquirer
const inquirer = require('inquirer');
// this requires the generateMarkdown in ifle
const generateMarkdown = require('./utils/generateMarkdown.js')
// this requires/calls file system
const fs = require('fs')
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project? (REQUIRED)',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description of your project. (REQUIRED)',
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
        message: 'Please provide required installations for this application.',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please provide the usage instructions.',
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        message: 'Select the type of license.',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Please provide names of contributing members to your application.'
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Please provide testing instructions for this application.'
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Please provide your email for inquiries regarding your application.',
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
}

// function call to initialize program
init();
