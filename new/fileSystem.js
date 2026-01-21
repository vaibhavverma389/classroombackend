const fs = require('fs');

//  fs.writeFile("glau.txt","this is gla university and this is node js class",(error)=>{
// if(error){
//         console.log("error is creating the file");
//     }else{
//         console.log("file is created successfully");
//     }   
// });

fs.readFile("glau.txt","utf-8",(error,data)=>{
    if(error)
    {
        console.log("error in reading Data");        
    }else
    {
        console.log("File Data:",data);
    }
});