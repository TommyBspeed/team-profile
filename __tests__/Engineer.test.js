// get the Engineer consturctor
// const { describe, it } = require("node:test");
// const { describe } = require("node:test");
const Engineer = require("../lib/Engineer");

// create engineer object
describe("Engineer class"),
  () => {
    it("creates an Engineer object", () => {
      const engineer = new Engineer(
        "Tommy",
        34,
        "TommyBspeed@gmail",
        "TommyBspeed"
      );

      expect(engineer.github).toEqual(expect.any(String));
    });
  };

// test getGithub()
describe("getGithub"),
  () => {
    it("gets engineer github value", () => {
      const engineer = new Engineer(
        "Tommy",
        34,
        "TommyBspeed@gmail",
        "TommyBspeed"
      );

      expect(engineer.getGithub()).toEqual(
        expect.stringContaining(engineer.github.toString())
      );
    });
  };

// test getRole()
describe("getRole"),
  () => {
    it("gets role of engineer", () => {
      const engineer = new Engineer(
        "Tommy",
        34,
        "TommyBspeed@gmail",
        "TommyBspeed"
      );

      expect(engineer.getRole()).toEqual("Engineer");
    });
  };
