const fs = require('fs').promises

const writeToFile = (fileName) => (data) => new Promise((res, rej) => res(fs.writeFile(fileName, data)))

const writeToTextFileAndPrintResult = (fileName) => (text) => writeToFile(fileName)(text)
    .then(() => fs.readFile("text.txt"))
    .then(data => console.log(data.toString()))

writeToTextFileAndPrintResult("text.txt")("Some text in file")