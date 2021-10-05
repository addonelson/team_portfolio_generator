const inquirer = require('inquirer');
const fs = require('fs');
// const generateHTML = require('./src/html');
const chalk = require('chalk');
const Engineer = require("./lib/Engineer");
const Employee = require('./lib/Employee');
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const {
    get
} = require('http');
const emptyArray = [];


function startQuestions() {
    inquirer.prompt(createManager)
        .then((answer) => {
            const manager = new Manager(answer.name, answer.id, answer.email, answer.office);
            emptyArray.push(manager);

            if (answer.new === "Engineer") {
                engineer();
            } else if (answer.new === "Intern") {
                intern();
            } else {
                generateTeam();
                return;
            }
        })
}

function engineer() {
    const newEngineer = [...createEmployee, ...createEngineer]
    
    inquirer.prompt(newEngineer)
        .then((answer) => {
            const engineerGuy = new Engineer(answer.name, answer.id, answer.email, answer.github)
            emptyArray.push(engineerGuy);


            if (answer.new === "Engineer") {
                engineer();
            } else if (answer.new === "Intern") {
                intern();
            } else {
                generateTeam();
                return;
            }
        })
}

function intern() {
    const newIntern = [...createEmployee, ...createIntern]
    inquirer.prompt(newIntern)
        .then((answer) => {
            const internGuy = new Intern(answer.name, answer.id, answer.email, answer.school)

            emptyArray.push(internGuy);


            if (answer.new === "Engineer") {
                engineer();
            } else if (answer.new === "Intern") {
                intern();
            } else {
                generateTeam();
                return;
            }
        })
}
const createManager = [{
        type: 'input',
        message: "Hey Manager what is your name?",
        name: 'name',
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
        name: 'email',
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
    {
        type: 'list',
        message: "Would you like to add another employee?",
        name: 'new',
        choices: ["Engineer", "Intern", "No"],
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'I need you to choose yes or no'
            }
        }
    }
]

const createEmployee = [{
        type: 'input',
        message: "What is your name?",
        name: 'name',
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
        name: 'email',
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'I need you to enter your Email'
            }
        }
    },
]


const createEngineer = [{
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
    },
    {
        type: 'list',
        message: "Would you like to add another employee?",
        name: 'new',
        choices: ["Engineer", "Intern", "No"],
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'I need you to choose an option'
            }
        }
    }

]

const createIntern = [{
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
    },
    {
        type: 'list',
        message: "Would you like to add another employee?",
        name: 'new',
        choices: ["Engineer", "Intern", "No"],
        validate: (value) => {
            if (value) {
                return true
            } else {
                return 'I need you to choose an option'
            }
        }
    }
]


function createIndex(cards) {
    const indexFile = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Card Generator</title>
        <link rel="stylesheet" type="text/css" href="./assets/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body>
    <div class = "container">
    <h1 class= "bg-primary text-white text-align center text"> Penn State employee roster</h1>
    <div class="card-deck">
        ${cards}
    </div>
    </div>
    </body>
    </html>`

    fs.writeFileSync('./assets/index.html', indexFile);
}



function updateIndex(employee) {

    
    let section = "";
    let title = "";

    if (employee.getRole() === "Manager") {
        title = `<i class="fas fa-user-secret fa-3x"></i>`
        section = `<p> Office Number: ${employee.officeNumber}</p>`
    } else if (employee.getRole() === "Engineer") {
        title = `<i class="fas fa-laptop-code fa-3x"></i>`
        section = `<a class="btn btn-seconday" href= "https://github.com/${employee.github}" role="button">Checkout my GitHub </a>`
    } else {
        title = `<i class="fa-solid fa-user-graduate fa-3x"></i>`
        section = `<p>School: ${employee.school}</p>`
    }


    const employeeCard = `
<div class="card bg-primary text-white">
<h2 class="card-title">${employee.getRole()}</h2>

${title} <h3 class="card-text">${employee.name}</h3>
<p class="card-text">ID: ${employee.id}</p>
<a class="card-text btn btn-seconday" role="button" href="mailto:${employee.email}" >Email me</a>
${section}
</div>
`
    return employeeCard;
}

startQuestions();

function generateTeam() {

    let cards = "";
    for (let i = 0; i < emptyArray.length; i++) {
        cards = cards + updateIndex(emptyArray[i])

    }

    createIndex(cards);

}
