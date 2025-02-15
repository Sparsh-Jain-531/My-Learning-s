// const http=require('http') // commonjs
import http from "http" // modulejs

// import and export from multiple files--------------------------------------------
// import name1,{name2, name3} from "./features.js"
import * as obj from "./features.js"

// console.log(name1,name2,name3)
// console.log(obj)

// read file--------------------------------------------
import fs from "fs"

// const home=fs.readFileSync("./index.html",()=>{
//     console.log("File read")
// })
// console.log(home)


// create a file with content
// fs.writeFile("hey.txt","hello kese ho",(err)=>{
//     if(err) console.log(err)
//     else console.log("done")
// })

// Add data to same file.
// fs.appendFile("hey.txt","mai toh acha hu",(err)=>{
//     if(err) console.log(err)
//     else console.log("done")
// })

// rename file
// fs.rename("hey.txt","hello.txt",(err)=>{
//     if(err) console.log(err)
//     else console.log("done")
// })

// copy file
// fs.copyFile("hello.txt","./copy/copy.txt",(err)=>{
//     if(err) console.log(err)
//     else console.log("done")
// })

// delete file
// fs.unlink("hello.txt",(err)=>{
//     if(err) console.log(err)
//     else console.log("removed")
// })

// remove folder  -- here recursive is used so that it will delete folder even it has a file as initially it removes only empty folder
fs.rm("./copy",{recursive: true},(err)=>{
    if(err) console.log(err?.message)
    else console.log("removed folder")
})

// create server------------------------------------
// const server=http.createServer((req,res)=>{

//     // console.log(req.url);
//     // res.end("hello server")

//     if(req.url=="/about"){
//         res.end("About")
//     } else if(req.url=="/contact"){
//         res.end("Contact")
//     }else if(req.url=="/file"){
//         res.end(home)
//     } else {
//         res.end("home")
//     }
// })

// listen server-------------------------------------------
// server.listen(4000,()=>{
//     console.log(`server is listening`)
// })