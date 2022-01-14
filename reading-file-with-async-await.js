const fs = require('fs').promises

const readFiles = async (path) => {
    return await fs.readFile(path)
}

readFiles("text.txt").then(
    r => console.log(r.toString()),
    e => console.log("Can't read file :(")
)