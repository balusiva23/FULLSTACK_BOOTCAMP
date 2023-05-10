const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
const prompt = inquirer.createPromptModule();
const fs = require("fs");
const questions = [{
    type:"input",
    name:"title",
    message:"What is your project title?",
},
{
    type:"input",
    name:"description",
    message:"Enter Your Project Description",
},
{
    type:"editor",
    name:"instructions",
    message:"Enter the instalation instructions",
},
{
    type:"editor",
    name:"usage",
    message:"Enter the usage instructions",
},
{
    type:"input",
    name:"contributions",
    message:"Enter the contributions",
},
{
    type:"list",
    name:"license",
    message:"what type of license you prefer?",
    choices:["ISC","MIT"],
},
]
function writeToFile(filename,data){
    const content = generateMarkdown(data);
    fs.writeFile(filename,content,(err)=>{
     if(err){
        console.log(err);
     } 
     console.log("file created");  
    })
}
prompt(questions).then((answers)=>{
//console.log(answers);
const result = generateMarkdown(answers);
//console.log(result);
writeToFile("README.md",answers);
}).catch((error) => {
    if (error.isTtyError) {
      console.log(answers);
        // Prompt couldn't be rendered in the current environment
    } else {
        console.log(error);
      // Something else went wrong
    }
})