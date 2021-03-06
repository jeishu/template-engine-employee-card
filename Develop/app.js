// Global Variables
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let teamArr = [];

// ========================================================================================
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Functions
const validInput = (input, type) => {
    if (input.length < 1) {
        return console.log(`Please provide a valid input.`);
    }
    return true;
}

const startPrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "addTeam",
            message: "Which type of team member would you like to add?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "I don't want to add any more members."
            ]
        }
    ])
    .then(function(data){
        console.log(data);
        switch (data.addTeam) {
            case "Manager":
                managerPrompt();
                break;
            case "Engineer":
                engineerPrompt();
                break;
            case "Intern":
                internPrompt();
                break;
            default:
                completeTeam();
        }
    })
    .catch(function(err) {
        console.log(err);
    });
}

// Manager
const managerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's ID?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?",
            validate: validInput
        }
    ])
    .then(function(data){
        // Pushes into an array
        const newMember = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamArr.push(newMember);
        // Goes back to the starting prompt
        startPrompt();
    })
    .catch(function(err) {
        console.log(err);
    });;
}

const engineerPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username",
            validate: validInput
        }
    ])
    .then(function(data){
        // Pushes into an array
        const newMember = new Engineer(data.name, data.id, data.email, data.github);
        teamArr.push(newMember);
        // Goes back to the starting prompt
        startPrompt();
    })
    .catch(function(err) {
        console.log(err);
    });;
}

const internPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's ID?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
            validate: validInput
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school name",
            validate: validInput
        }
    ])
    .then(function(data){
        // Pushes into an array
        const newMember = new Intern(data.name, data.id, data.email, data.school);
        teamArr.push(newMember);
        // Goes back to the starting prompt
        startPrompt();
    });
}

// ========================================================================================
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// Completing Teams
const completeTeam = () => {
    // console.log(teamArr);

    // ========================================================================================
    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.
    fs.writeFileSync(outputPath, render(teamArr), err => { 
        if(err) throw err;
        console.log("Your team employee cards are created in the output folder.");
    });
    console.log("Your team employee cards are created in the output folder.");
}

// Calling the start prompt
startPrompt();

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// Constructor Function
// const Manager = (name, id, email, office) => {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.office = office;
// }
// const Engineer = (name, id, email, github) => {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.github = github;
// }
// const Intern = (name, id, email, school) => {
//     this.name = name;
//     this.id = id;
//     this.email = email;
//     this.school = school;
// }