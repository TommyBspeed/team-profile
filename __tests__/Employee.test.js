// get the Employee constructor
const Employee = require("../lib/Employee");

// Create the employee object
describe("Employee", () => {
  it("creates a new employee object", () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  it("Can set a name", () => {
    const name = "Tommy";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  it("Can set an id", () => {
    const empId = 34;
    const employee = new Employee("Tommy", empId);
    expect(employee.id).toBe(empId);
  });

  it("Can set employee email", () => {
    const empEmail = "tommybspeed@gmail.com";
    const employee = new Employee("Foo", 1, empEmail);
    expect(employee.email).toBe(empEmail);
  });

  //check the functions on the employee
  describe("getName", () => {
    it("Can get name when called", () => {
      const empName = "Tommy";
      const employee = new Employee(empName);
      expect(employee.getName()).toBe(empName);
    });
  });

  describe("getId", () => {
    it("Can get id when called", () => {
      const empId = 34;
      const employee = new Employee("Tommy", empId);
      expect(employee.getId()).toBe(empId);
    });
  });

  describe("getEmail", () => {
    it("Can get email when called", () => {
      const empEmail = "tommybspeed@gmail.com";
      const employee = new Employee("Tommy", 34, empEmail);
      expect(employee.getEmail()).toBe(empEmail);
    });
  });

  describe("getRole", () => {
    it("should show the role of them employee, in this case 'employee'", () => {
      const empRole = "Employee";
      const employee = new Employee("Tommy", 34, "tommybspeed@gmail.com");
      expect(employee.getRole()).toBe(empRole);
    });
  });
});
