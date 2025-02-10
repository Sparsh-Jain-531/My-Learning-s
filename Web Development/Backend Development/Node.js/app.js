// const http=require('http') // commonjs
import http from "http" // modulejs

// import and export from multiple files--------------------------------------------
// import name1,{name2, name3} from "./features.js"
import * as obj from "./features.js"

// console.log(name1,name2,name3)
console.log(obj)

// read file--------------------------------------------
import fs from "fs"

const home=fs.readFileSync("./index.html",()=>{
    console.log("File read")
})
console.log(home)

// create server------------------------------------
const server=http.createServer((req,res)=>{

    // console.log(req.url);
    // res.end("hello server")

    if(req.url=="/about"){
        res.end("About")
    } else if(req.url=="/contact"){
        res.end("Contact")
    }else if(req.url=="/file"){
        res.end(home)
    } else {
        res.end("home")
    }
})

// listen server-------------------------------------------
server.listen(4000,()=>{
    console.log(`server is listening`)
})