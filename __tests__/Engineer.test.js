// get the Engineer consturctor
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

//run test for engineer specific params
//make sure it can set github
test("Can set GitHUb account via constructor", () => {
  const engGithub = "TommyBspeed";
  const engineer = new Engineer(
    "Tommy",
    34,
    "tommybspeed@gmail.com",
    engGithub
  );
  expect(engineer.github).toBe(engGithub);
});
//make sure it will return correct role
test('getRole() should return "Engineer"', () => {
  const engRole = "Engineer";
  const engineer = new Engineer(
    "Tommy",
    34,
    "tommybspeed@gmail.com",
    "TommyBspeed"
  );
  expect(engineer.getRole()).toBe(engRole);
});
//test getGithub()
test("Can get GitHub username getGithub() is called", () => {
  const engGithub = "TommyBspeed";
  const engineer = new Engineer(
    "Tommy",
    34,
    "tommybspeed@gmail.com",
    engGithub
  );
  expect(engineer.getGithub()).toBe(engGithub);
});
