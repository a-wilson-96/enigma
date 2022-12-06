// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ title, description, installation, usage, license, contribution, tests, email, github }) => `# ${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}


## Credits

${contribution}

## License

${license}

## Tests

${tests}

## Questions

${email}
${github}

`
// TODO: Create an array of questions for user input
const questions = [];

inquirer
.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'Enter a title: ',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions: ',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage Information: ',
  },
  {
    type: 'input',
    name: 'license',
    message: 'License: ',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter additional contributors: ',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Tests: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email: ',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your github username: ',
  }
])
.then((answers) => {
  const READMEPageContent = generateREADME(answers);

  fs.writeFile('README.md', READMEPageContent, (err) => 
  err ? console.log(err) : console.log("README has been generated")
  );
});

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
