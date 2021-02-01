// ---------------------------------------------------------------------------------
// PARSING THE TEXT FILES TO CREATE AN OBJECT FOR USAGE
// ---------------------------------------------------------------------------------
// Requiring the file save read/write package
const fs = require("fs");
// Requiring the inquirer package
const inquirer = require("inquirer");
// ---------------------------------------------------------------------------------
// Using the inquirer prompt to ask a question
async function askQuestion () {
    const question = [{
        type: "input",
        name: "fileNameDate",
        message: "What is the file name (in date format 0000-00-00) ?"
    }];

    const fileNameToRead = await inquirer.prompt(question);

    return fileNameToRead;
}
// ---------------------------------------------------------------------------------
// Getting the answer to the question, reading the file, and creating an object
async function functionFunction () {

    const fileNameToRead = await askQuestion();

    const pathOfFile = "./textFileFormat/" + fileNameToRead.fileNameDate + ".txt"

    fs.readFile(pathOfFile, (err, data) => {
        if (err) throw err;
        
        let wordObject = {}
        
        let fileContents = data.toString();
        let initialArray = fileContents.split("\n");
        
        for (var i = 0; i < initialArray.length; i++) {
            let currentWord = initialArray[i];
            
            if (!wordObject[currentWord]) {
                wordObject[currentWord] = 1
            }
        }
        
        console.log(wordObject)
    })
}
// ---------------------------------------------------------------------------------
functionFunction ();