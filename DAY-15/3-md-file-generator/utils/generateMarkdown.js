function renderLicenseBadge(license){
if(license === "ISC"){
return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC";
}else{
return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
}
}

function generateMarkdown(data){
return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
  ${data.description}
## Installation Instructions
 ${data.instructions}

## Usage Instructions
  ${data.usage} 
## Contributions
  ${data.contributions}
`;
}
module.exports = generateMarkdown;