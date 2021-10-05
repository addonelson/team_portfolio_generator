const Employee = require('../lib/Employee');

test("test all setters", () => {
const employee = new Employee ("John Doe", 23, "email address");
expect(employee.name).toEqual("John Doe");
expect(employee.id).toEqual(23);
expect(employee.email).toEqual("email address");

})


test("test all getters", () => {
    const employee = new Employee ("Pony", 42, "A guy");
    expect(employee.name).toEqual("Pony");
    expect(employee.id).toEqual(42);
    expect(employee.email).toEqual("A guy");
})