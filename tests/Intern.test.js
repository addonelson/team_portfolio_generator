const Intern = require("../lib/Intern");

test("testing all intern setters", () => {
    const intern = new Intern ("Darryl", 7, "email@darryl.com", "Parkway Manor");
    expect(intern.name).toEqual("Darryl");
    expect(intern.id).toEqual(7);
    expect(intern.email).toEqual("email@darryl.com");
    expect(intern.school).toEqual("Parkway Manor");
})

test("testing getters for intern", () => {
    const intern = new Intern ("Darryl", 7, "email@darryl.com", "Parkway Manor");
    expect(intern.name).toEqual("Darryl");
    expect(intern.id).toEqual(7);
    expect(intern.email).toEqual("email@darryl.com");
    expect(intern.school).toEqual("Parkway Manor");
})