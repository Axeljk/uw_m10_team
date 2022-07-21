// Modules required.
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const toHtml = require("./util/generateHtml.js");

// Constants.
const DEPLOY_DIR = "./dist/";
const DEPLOY_NAME = "index.html";
const CHOICE_ENGINEER = "Add Engineer";
const CHOICE_INTERN = "Add Intern";
const CHOICE_FINISH = "Complete Team and Deploy";

// Global variables.
const team = [];

function select() {
	inquirer.prompt([{
		type: "list",
		choices: [CHOICE_ENGINEER, CHOICE_INTERN, CHOICE_FINISH],
		name: "selection"
	}]).then(ans => {
		switch(ans.selection) {
			case (CHOICE_ENGINEER):
				addEmployee(Engineer);
				break;
			case (CHOICE_INTERN):
				addEmployee(Intern);
				break;
			case (CHOICE_FINISH):
				fs.writeFileSync(DEPLOY_DIR + DEPLOY_NAME, toHtml(team));
				console.log(DEPLOY_DIR + DEPLOY_NAME + " created.");
				break;
		}
	});
}

// Takes a class as an argument and calls its questions().
// "...Object.values(answers)" spreads the answers into an array and passes all of them to the class's constructor.
function addEmployee(person) {
	inquirer
	.prompt(person.questions())
	.then(answers => {
		team.push(new person(...Object.values(answers)));
		select();
	})
}

// Function call to initialize app.
addEmployee(Manager);