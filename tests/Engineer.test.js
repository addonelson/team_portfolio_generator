const Engineer = require("../lib/Engineer");

test("test all setters for engineer", () => {
    const engineer = new Engineer ("John Doe", 23, "email address", "github");
    expect(engineer.name).toEqual("John Doe");
    expect(engineer.id).toEqual(23);
    expect(engineer.email).toEqual("email address");
    expect(engineer.github).toEqual("github");
}) 
    test("test all getters for engineer", () => {
        const engineer = new Engineer ("Pony", 42, "A guy", "github");
        expect(engineer.name).toEqual("Pony");
        expect(engineer.id).toEqual(42);
        expect(engineer.email).toEqual("A guy");
        expect(engineer.github).toEqual("github");
    })