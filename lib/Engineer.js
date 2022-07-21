const Employee = require("./Employee.js");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email, "Engineer");
		this.github = github;
	}
	static role = "Engineer";
	getGithub() {
		return this.github;
	}
	static questions() {
		return super.questions().concat([{
			type: "input",
			message: `${this.role}'s GitHub username:`,
			name: "github",
			validate: (answer) => /^[\w-\.]+$/.test(answer) // one "word".
		}]);
	}
}

module.exports = Engineer;