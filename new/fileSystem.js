const fs = require('fs').promises;
const {promisify} = require('util');
const readFileAsync = promisify(require('fs').readFile);





// fs.writeFile("glau.txt","this is gla university and this is node js class",(error)=>{
// if(error){
//         console.log("error is creating the file");
//     }else{
//         console.log("file is created successfully");
//     } 
// });
// 


// fs.readFile("glau.txt","utf-8",(error,data)=>{
//     if(error)
//     {
        // console.log("error in reading Data");        
//     }else
//     {
//         console.log("File Data:",data);
//     }
// });






// async function readFile(){
//     try{
//         const data=await fs.readFile("glau.txt","utf-8");
//         console.log("file Content:",data);
//     }catch(error){
//         console.error("error in reading file",error);
//     }    
// }






async function readWithPromisify(){
    try{
        const data = await readFileAsync("glau.txt","utf-8");
        console.log(data);
    }catch(error){
        console.log(error);
    }
}





// readFile();
readWithPromisify()
