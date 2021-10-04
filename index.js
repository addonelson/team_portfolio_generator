const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');
const Engineer = require("../lib/Engineer");
const Employee = require('../lib/Employee');
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

//Employee must have Name , ID, email, getName(), getID, getEmail(), getRole(returns employee)

//Manager, inlcuded employee + office number override getRole(show manager)

//Engineer employee + GitHub user name, getGithub, getRole(show Engineer)

//Intern emplee + school getSchool(), getRole(Intern)

//add validation to each prompt to ensure proper user input

//each Employee created will become a card.
createManager();

function createManager() {
    inquirer.prompt([{
            type: 'input',
            message: "What is your name?",
            name: 'Name',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'I need you to enter your name'
                }
            }
        },
        {
            type: 'input',
            message: "What is your id number",
            name: 'id',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'I need you to enter your ID number'
                }
            }
        },
        {
            type: 'input',
            message: "What is your Email address?",
            name: 'Email',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'I need you to enter your Email'
                }
            }
        },
        {
            type: 'input',
            message: "what is your office number?",
            name: 'office',
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'I need you to enter an office number'
                }
            }
        },
    ]);
    addNewEmployee();
}


function addNewEmployee() {
    inquirer.prompt([{
            type: 'list',
            message: "Would you like to add another employee?",
            name: 'new',
            choices: ["Yes", "No"],
            validate: (value) => {
                if (value) {
                    return true
                } else {
                    return 'I need you to choose yes or no'
                }
            }
        }, ])
        .then(answers => {
            if (answers.new === "Yes") {
                createEmployee();
            } else {
                createIndex();
            }
        })
}

function createEmployee() {
    inquirer.prompt([{
                type: 'input',
                message: "What is your name?",
                name: 'Name',
                validate: (value) => {
                    if (value) {
                        return true
                    } else {
                        return 'I need you to enter your name'
                    }
                }
            },
            {
                type: 'input',
                message: "What is your id number",
                name: 'id',
                validate: (value) => {
                    if (value) {
                        return true
                    } else {
                        return 'I need you to enter your ID number'
                    }
                }
            },
            {
                type: 'input',
                message: "What is your Email address?",
                name: 'Email',
                validate: (value) => {
                    if (value) {
                        return true
                    } else {
                        return 'I need you to enter your Email'
                    }
                }
            },
            {
                type: 'list',
                message: "What is your role?",
                name: 'role',
                choices: ["Engineer", "Intern"],
                validate: (value) => {
                    if (value) {
                        return true
                    } else {
                        return 'I need you to choose a role'
                    }
                }
            },
        ])
        .then(answers => {
            if (answers.role == 'Engineer') {
                createEngineer();
            } else {
                createIntern();
            }

        })

}

function createEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'I need you to enter your github username'
            }
        }
    }, ])
    addNewEmployee();
}

function createIntern() {
    inquirer.prompt([{
        type: 'input',
        message: "What school do you go to?",
        name: 'school',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'I need you to enter your school'
            }
        }
    }, ])
    addNewEmployee();
}

function createIndex() {
    fs.writeFile
}