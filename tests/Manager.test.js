const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("testing all manager setters", () => {
    const manager = new Manager ("Darryl", 7, "email@darryl.com", 3124);
    expect(manager.name).toEqual("Darryl");
    expect(manager.id).toEqual(7);
    expect(manager.email).toEqual("email@darryl.com");
    expect(manager.officeNumber).toEqual(3124);
})

test("testing getters for manager", () => {
    const manager = new Manager ("Darryl", 7, "email@darryl.com", 3124);
    expect(manager.name).toEqual("Darryl");
    expect(manager.id).toEqual(7);
    expect(manager.email).toEqual("email@darryl.com");
    expect(manager.officeNumber).toEqual(3124);
})
