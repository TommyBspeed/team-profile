// get the Manager constructor
const Manager = require("../lib/Manager");
//test manager specific params
//make sure it can set the office number
test("Can set office number via constructor", () => {
  const empOffice = 1;
  const manager = new Manager("Tommy", 34, "tommybspeed@gmail.com", empOffice);
  expect(manager.officeNumber).toBe(empOffice);
});
//make sure get role retuns correctly
test('getRole() should return "Manager"', () => {
  const empRole = "Manager";
  const manager = new Manager("Tommy", 34, "tommybspeed@gmail.com", 1);
  expect(manager.getRole()).toBe(empRole);
});
//test the getOfficeNumber()
test("Can get office number when getOffice() is called", () => {
  const empOffice = 1;
  const manager = new Manager("Tommy", 34, "tommybspeed@gmail.com", empOffice);
  expect(manager.getOfficeNumber()).toBe(empOffice);
});
