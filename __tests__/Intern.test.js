// get the intern constructor
const Intern = require("../lib/Intern");
//run tests for intern specific params

test("Can set school via constructor", () => {
  const empSchool = "University of Denver";
  const intern = new Intern("Tommy", 34, "tommybspeed@gmail.com", empSchool);
  expect(intern.school).toBe(empSchool);
});

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

test("Can get school getSchool() is called", () => {
  const empSchool = "University of Denver";
  const intern = new Intern("Tommy", 34, "tommybspeed@gmail.com", empSchool);
  expect(intern.getSchool()).toBe(empSchool);
});
