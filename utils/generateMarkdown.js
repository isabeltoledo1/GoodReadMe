// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
 
    ## Description
    ${data.description}

    ## Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributors)
    * [Tests](#tests)
    * [Questions](#questions)


    ## Installation
    To install necessary dependencies, run the following command:
    ${data.install}


    ## Usage
    ${data.usage} 

    ## License
    
    This project is licensed under ${data.license} license.

    ## Contributing
    ${data.contributors}

    ## Tests
    To run tests, run the following command:
    ${data.test}
    

    ## Questions
    If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).
    

`

;
}

module.exports = generateMarkdown;
