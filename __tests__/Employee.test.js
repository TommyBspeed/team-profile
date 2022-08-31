// get the Employee constructor
// const { describe, it } = require("node:test");
// const { describe } = require("node:test");
const Employee = require("../lib/Employee");

// create employee object
describe("Employee class"),
  () => {
    it("creates an emplyee object.", () => {
      const employee = new Employee("Tommy", 34, "TommyBspeed@gmail.com");

      expect(employee.name).toEqual(expect.any(String));
      expect(employee.id).toEqual(expect.any(Number));
      expect(employee.email).toEqual(expect.any(String));
    });
  };
// test getName()
describe("getName"),
  () => {
    it("gets employee name", () => {
      const employee = new Employee("Tommy", 34, "TommyBspeed@gmail.com");

      expect(employee.getName()).toEqual(expect.any(String));
    });
  };
// test getId()
describe("getId"),
  () => {
    test("gets employee ID", () => {
      const employee = new Employee("Tommy", 34, "TommyBspeed@gmail.com");

      expect(employee.getId()).toEqual(expect.any(Number));
    });
  };
// test getEmail()
describe("getEmail"),
  () => {
    it("gets employee email", () => {
      const employee = new Employee("Tommy", 34, "TommyBspeed@gmail.com");

      expect(employee.getEmail()).toEqual(
        expect.stringContaining(employee.email.toString())
      );
    });
  };
// test getRole()
describe("getRole");
it("gets role of employee", () => {
  const employee = new Employee("Tommy", 34, "TommyBspeed@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
