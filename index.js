const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const managerInput = () =>
    inquirer.prompt([ 
        {
            type: 'input',
            name: 'managerName',
            message: "What is your manager's name?",
            validate: function (input) {
                if (input.length < 1) {
                    return console.log("Please provide a valid manager name.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is your manager's ID?",
            validate: function (input) {
                if (input.length < 1) {
                    return console.log("Please provide a valid manager ID.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your manager's email?",
            validate: function (input) {
                if (input.length < 1) {
                    return console.log("Please provide a valid manager email.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is your manager's office number?",
            validate: function (input) {
                if (input.length < 1) {
                    return console.log("Please provide a valid office number.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'description',
            message: "Description Section: provide a short description of your project.",
            validate: function (input) {
                if (input.length < 1) {
                    return console.log("Please provide a description for your project.");
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "Installation Section: describe how to install your application. ",
            validate: function (input) {
                if (input.length < 1) {
                    return console.log("Please describe how to use your application.");
                }
                return true;
            }
        },
        {
            type: "list",
            name: "addTeam",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more members."
            ]
        },
    ]);

const generateCard = (answers) => ``;

managerInput()
    .then((answers) => writeFileAsync("index.html", generateCard(answers)))
    .then(() => console.log("Your information has been saved."))
    .catch((err) => console.error(err));