const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super (name, id, email, github);
        this.github = github;
    }
    getgithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = Engineer;