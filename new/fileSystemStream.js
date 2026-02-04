
const {Readable} = require('stream');
const inStream = new Readable({
    read(){

    }
})

inStream.push("Welcome to File stream sassion\n");
inStream.push("Everyone need to contribute inside the class\n");

inStream.push(null);

inStream.pipe(process.stdout);