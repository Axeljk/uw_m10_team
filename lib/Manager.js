const Employee = require("./Employee.js");

class Manager extends Employee {
	constructor(name, id, email, number) {
		super(name, id, email, "Manager");
		this.officeNumber = number;
	}
	static role = "Manager";
	getOfficeNumber() {
		return this.officeNumber;
	}
	static questions() {
		return super.questions().concat([{
			type: "input",
			message: `${this.role}'s office extension:`,
			name: "number",
		}]);
	}
}

module.exports = Manager;