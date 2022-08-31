// require link to template
const generateHTML = require("./src/generateHTML");

// require team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// require node modules
const fs = require("fs");
const inquirer = require("inquirer");

// team array
const teamArray = [];

// start of manager prompts
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Who is the manager of this team?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
      },
    ])
    .then((managerInput) => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  console.log(`
    Add more employees to your team.
    `);

  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Please choose your employee's role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What's the name of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter the employee's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
      },
      {
        type: "input",
        name: "github",
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "additionalMembers",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      // data for each type of employee

      let { name, id, email, role, github, school, additionalMembers } =
        employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);

        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);

        console.log(employee);
      }

      teamArray.push(employee);

      if (additionalMembers) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

// function to generate HTML page with fs
const writeFile = (data) => {
  fs.writeFile("./dist/index.js", (data) => {
    //let user know the profile has been created
    console.log(
      "Your team profile has been successfully created! Please check out the index.html"
    );
  });
};

addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((data) => {
    return writeFile(data);
  });
