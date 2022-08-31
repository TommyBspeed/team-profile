// get the intern constructor
// const { describe, it } = require("node:test");
const Intern = require("../lib/Intern");

// create intern object
describe("Intern class"),
  () => {
    it("creates an Intern object", () => {
      const intern = new Intern(
        "Tommy",
        34,
        "TommyBspeed@gmail",
        "University of Denver"
      );

      expect(intern.school).toEqual(expect.any(String));
    });
  };

// test getSchool()
describe("getSchool"),
  () => {
    it("gets interns school", () => {
      const intern = new Intern(
        "Tommy",
        34,
        "TommyBspeed@gmail",
        "University of Denver"
      );

      expect(intern.getSchool()).toEqual(
        expect.stringContaining(intern.school.toString())
      );
    });
  };

// test getRole()
describe("getRole"),
  () => {
    it("gets role of intern", () => {
      const intern = new Intern(
        "Tommy",
        34,
        "TommyBspeed@gmail",
        "University of Denver"
      );

      expect(intern.getRole()).toEqual("Intern");
    });
  };
