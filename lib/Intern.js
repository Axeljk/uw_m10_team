const Employee = require("./Employee.js");

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email, "Intern");
		this.school = school;
	}
	static role = "Intern";
	getSchool() {
		return this.school;
	}
	static questions() {
		return super.questions().concat([{
			type: "input",
			message: `${this.role}'s school:`,
			name: "school"
		}]);
	}
}

module.exports = Intern;