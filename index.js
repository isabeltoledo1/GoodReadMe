const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
const axios = require("axios");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "Type in your GitHub username",
        name: "username"
      },
    
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "Generate a README.md file"
      },
    
      {
        type: "input",
        message: "What is the name of your repository?",
        name: "repo",
        default: "GoodREADME"
      },
    
      {
        type: "input",
        message: "What is a brief description of your project?",
        name: "description",
        default: "An application that will generate a README.md file for your current project"
      },
    
      {
        type: "input",
        message: "What are the steps installation instructions for your project?",
        name: "install",
        default: "Step1: Run npm install and Step2: Run node index.js"
      },
    
      {
        type: "input",
        message: "Write instructions for using your project.",
        name: "usage",
        default:
          "1.Run node index.js 2.Answers the questions 3.The README.md file will be created. "
      },
    
      {
        type: "input",
        message:
          "please enter git hub user names of all contributors (If there are mulitple contributors, seperate names with comma and no space! )",
        name: "contributors",
        default: "isabel toledo",
      },
      {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "test",
        default: "npm test"
      },

      {
        type: 'list',
        name: 'license',
        message: 'What kind of License should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
    

];




// // function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
      console.log(response);
     
      // function to write README file    
      fs.writeFile("NewReadMe.md", generateMarkdown(response), function(err) {
            if (err) {
              throw err;
            }
          });
       
    }).catch(err=>console.log(err));
  }


// function call to initialize program
init();
