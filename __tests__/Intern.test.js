// get the intern constructor
const Intern = require("../lib/Intern");

//run tests for intern specific params
//make sure it can set school
test("Can set school via constructor", () => {
  const empSchool = "University of Denver";
  const intern = new Intern("Tommy", 34, "tommybspeed@gmail.com", empSchool);
  expect(intern.school).toBe(empSchool);
});
//make sure role returns correctly
test('getRole() should return "Intern"', () => {
  const empRole = "Intern";
  const intern = new Intern(
    "Tommy",
    34,
    "tommybspeed@gmail.com",
    "University of Denver"
  );
  expect(intern.getRole()).toBe(empRole);
});
//test getSchool()
test("Can get school getSchool() is called", () => {
  const empSchool = "University of Denver";
  const intern = new Intern("Tommy", 34, "tommybspeed@gmail.com", empSchool);
  expect(intern.getSchool()).toBe(empSchool);
});
