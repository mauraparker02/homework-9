// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor(name, id, email, school) {
        this.name = name;
        this.role = "Intern";
        this.id = id;
        this.email = email;
        this.school = school;
    }
    getName() {
        return this.name;
    }
    getRole() {
        return this.role;
    }
    getEmail() {
        return this.email;
    }
    getId() {
        return this.id;
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;