const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

//Employee must have Name , ID, email, getName(), getID, getEmail(), getRole(returns employee)

//Manager, inlcuded employee + office number override getRole(show manager)

//Engineer employee + GitHub user name, getGithub, getRole(show Engineer)

//Intern emplee + school getSchool(), getRole(Intern)

//add validation to each prompt to ensure proper user input

//each Employee created will become a card. 

inquier.prompt([
    {   
        type: 'input',
        message: "What is your name?",
        name: 'Name',
        validate: (value) =>{ if(value){return true} else {return 'I need you to enter your name'}}           
    },
    {   
        type: 'input',
        message: "What is your id number",
        name: 'id',
        validate: (value) =>{ if(value){return true} else {return 'I need you to enter your ID number'}}           
    },
    {   
        type: 'input',
        message: "What is your Email address?",
        name: 'Email',
        validate: (value) =>{ if(value){return true} else {return 'I need you to enter your Email'}}           
    },
    {   
        type: 'list',
        message: "What is your role?",
        name: 'role',
        choices: ['Manager', "Engineer", "Intern"],
        validate: (value) =>{ if(value){return true} else {return 'I need you to choose a role'}}           
    },
])
.then(answer => { 
    const role = answer.role;
    
})
