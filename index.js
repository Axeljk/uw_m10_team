// Modules required.
const fs = require("fs");
const inquirer = require("inquirer");
const toHtml = require("./utils/generateHtml.js");

// Constants.
const DEPLOY_DIR = "./dist/";

// Questions.
const questions = [
	{
		type: "input",
		message: "What is the size of your team?",
		name: "teamSize",
	}
];

// Creates the team from answers given.
createTeam(answers) {
	return { }
}

// Called when program starts.
function init() {
	inquirer
	.prompt(questions)
	.then(answers => createTeam(answers))
	.then((team) => toHtml(team))
	.catch((err) => console.error(err));
}

// Function call to initialize app.
init();