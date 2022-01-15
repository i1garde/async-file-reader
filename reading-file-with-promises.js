const fs = require('fs').promises

const readFiles = (path) => new Promise(function (res, rej) {
    res(fs.readFile(path))
})

readFiles("text.txt")
    .finally(() => console.log("Print text in finally block."))
    .then(
        result => console.log(result.toString()),
        error => console.log("Can't read file :(")
    )