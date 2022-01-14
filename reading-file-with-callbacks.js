const fs = require('fs')

const readFiles = (path) => {
    fs.readFile(path, (err, result) => {
        if (err) {
            console.log("Can't read file!!!")
            return
        }
        console.log(result.toString())
    })
}

readFiles("text.txt")

console.log("Text after async function definition.\n(so it will called first as sunc operation)\n")