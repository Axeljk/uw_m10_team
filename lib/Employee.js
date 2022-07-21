class Employee {
	constructor(name, id, email, role="Employee") {
		this.id = id;
		this.name = name;
		this.email = email;
	}
	static role = "Employee";
	getName() {
		return this.name;
	}
	getId() {
		return this.id;
	}
	getEmail() {
		return this.email;
	}
	getRole() {
		return this.constructor.role;
	}
	static questions() {
		return [
			{
				type: "input",
				message: `${this.role}'s name:`,
				name: "name"
			},
			{
				type: "input", // type "number" can't delete NaN.
				message: `${this.role}'s ID:`,
				name: "id",
				validate: (answer) => /^\d+$/.test(answer) // Any number of numbers.
			},
			{
				type: "input",
				message: `${this.role}'s email:`,
				name: "email",
				validate: (answer) => /^[\w-\.]+@[\w-]+\.[\w-]+$/.test(answer) // [...]@[...].[...]
			}
		];
	}
}

module.exports = Employee;