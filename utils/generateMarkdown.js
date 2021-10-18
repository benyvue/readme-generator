// function to return licensure badge
// returns empty string if no license
function licenseBadge(license) {
  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blue)`
  } else if (license == "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue)`
  } else if (license == "GNU GPL v3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GNU%20GPL%20v3-blue)`
  } else if (license == "Mozilla Public License 2.0") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-blue)`
  } else if (license == "Eclipse Public License v2.0") {
    return `![License: EPL v2.0](https://img.shields.io/badge/License-EPL%20v2.0-blue)`
  } else if (license == "No License") {
    return ''
  }
};

// function to return license link
// Returns empty string if no license
function licenseLink(license) {
  if (license == "MIT") {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license == "Apache 2.0") {
    return `(https://opensource.org/licenses/Apache-2.0)`
  } else if (license == "GNU GPL v3") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license == "Mozilla Public License 2.0") {
    return `(https://opensource.org/licenses/MPL-2.0)`
  } else if (license == "Eclipse Public License v2.0") {
    return `(https://www.eclipse.org/legal/epl-2.0/)`
  } else if (license == "No License") {
    return ''
  }
};


// returns license to readme section
//returns empty string if no license
function licenseSection(license) {
  if (license !== 'No License') {
    return `## License
    
  This project is licensed under [${license}]` + licenseLink(license)
  }
  return ''
};

function licenseTable(license) {
  if(license !== 'No License') {
    return `* [License](#license)`
  }
  return ''
};



// function that creates/generates markdown for READme
function generateMarkdown(data) {
  return `# ${data.Title}
  ${licenseBadge(data.license)}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation-Instructions)
  * [Usage Instructions](#Usage-Instructions)
  ${licenseTable(data.license)}
  * [Contributing Members](#Contributing-Members)
  * [Testing](#Testing)    
  * [Questions/Inquiries](#Questions/Inquiries)

  ## Built with
  ${data.language}

  ## Description
  ${data.Description}

  ## Installation Instructions 
  ${data.Installation}

  ## Usage Instructions
  ${data.Usage}

  ${licenseSection(data.license)}

  ## Contributing Members
  ${data.Contributors}

  ## Testing 
   ${data.Test}

  ### GitHub Profile
  [GitHub Profile](http://github.com/${data.Github})

  ### Email
  Please reach me at the provided email with any questions. ${data.Email}
  
`;
}

module.exports = {generateMarkdown};
