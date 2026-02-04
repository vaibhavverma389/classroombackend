const {Writable} = require("stream");

const outStream = new Writable({
    write(chunk , encoding, call){
        console.log(chunk.toString())
        call();    
    }
});

process.stdin.pipe(outStream);
