
// const http = require("http");

// const server = http.createServer((req,res)=>{

// console.log("request made")

// })

// server.listen(3000,"localhost",()=>{
// console.log("on 3000")
// })


// in the above code what we have done is that  we are establishing a http request and  and creating a const server which takes two arugements i.e a request  and a response to be sent.
//in server.listen => it has a port number of 3000 and on localhost ,it firebacks a function (i.e it logs "on 3000")





//-------------------------------------------------
// loading the html


// const http = require("http");
// const fs= require("fs");

// const server = http.createServer((req,res)=>{

// console.log(req.url,req.method)


// // set header content type
//  res.setHeader("Content-Type","text/html");
// // res.write("<p>hey</p>");
// // res.end();

// fs.readFile("./views/index.html",(err,data)=>{
//     if(err){
//         console.log(err);
//         res.end();
//     }
//     else{
//         res.write(data);
//         res.end();
//     }
// })


// //this is really messy  to write more html lines


// })

// server.listen(3000,"localhost",()=>{
// console.log("on 3000")
// })



//-------------------------------------------------------------
// switching between the html pages(routing)



// const http = require("http");
// const fs= require("fs");

// const server = http.createServer((req,res)=>{

// console.log(req.url,req.method)



//  res.setHeader("Content-Type","text/html");
// let path="./views/";
// switch(req.url){
//     case "/":
//         path+="index.html";
//         break;
//         case "/about":
//             path+="about.html";
//             break;



//             //redirecting-------------------------------
// case "/about-me":
//     res.statusCode=301;
//     res.setHeader("Location","/about");
//     res.end();
//     break;

// //--------------------------------------------------------
//             default:
//                 path+="404.html";
//                 break;
// }

// fs.readFile(path,(err,data)=>{
//     if(err){
//         console.log(err);
//         res.end();
//     }
//     else{
//         res.write(data);
//         res.end();
//     }
// })

// })

// server.listen(3000,"localhost",()=>{
// console.log("on 3000")
// })


//---------------------------------------------------------------------------------------------
// setting up nodemon => npm install -g  nodemon => nodemon file_name.js -L (or nodemon file_name.js) [ -g means globally to all the files]
 // for local or for file specific  dependencies,go for npm init

 const http = require("http");
 const _ = require("lodash");

 const server = http.createServer((req,res)=>{
    const  num = _.random(0,20);
    console.log(num)
 })

 server.listen(3000,"localhost",()=>{
    // console.log("on 3000")
     })