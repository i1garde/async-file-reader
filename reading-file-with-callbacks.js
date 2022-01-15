const fs = require('fs')

const readFiles = (path) => {
    fs.readFile(path, (err, result) => {
        if (err) {
            console.log("Can't read file!!!")
            return
        }
        console.log("Callback inside function definition: " + result.toString())
    })
}

readFiles("text.txt")

console.log("Text after async function definition.\n(so it will called first as sunc operation)\n")

const readFiles2 = (path) => (callback) => fs.readFile(path, callback)

readFiles2("text.txt")((err, res) =>
    err ?
        console.log("Can't read file!!!") : console.log("Callback outside function definition: " + res.toString()))