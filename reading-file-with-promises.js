const fs = require('fs').promises

const readFiles = (path) => new Promise(function (res, rej) {
    res(fs.readFile(path))
})

readFiles("text.txt")
    .then(
        result => console.log(result.toString()),
        error => console.log("Can't read file :(")
    )