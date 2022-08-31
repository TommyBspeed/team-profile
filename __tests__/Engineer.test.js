// get the Engineer consturctor
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

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

test("Can get GitHub username via getGithub()", () => {
  const engGithub = "TommyBspeed";
  const engineer = new Engineer(
    "Tommy",
    34,
    "tommybspeed@gmail.com",
    engGithub
  );
  expect(engineer.getGithub()).toBe(engGithub);
});
