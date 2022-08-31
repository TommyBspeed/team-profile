// get the Manager constructor
// const { describe, it } = require("node:test");
const Manager = require("../lib/Manager");

// create manager object
describe("Manager class"),
  () => {
    it("creates a Manager object", () => {
      const manager = new Manager("Tommy", 34, "TommyBspeed@gmail", 1);

      expect(manager.officeNumber).toEqual(expect.any(Number));
    });
  };

// test getRole()
describe("getRole"),
  () => {
    test("gets role of manager", () => {
      const manager = new Manager("Tommy", 34, "TommyBspeed@gmail", 1);

      expect(manager.getRole()).toEqual("Manager");
    });
  };
