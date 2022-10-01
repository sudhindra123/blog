// // install express via npm i express
// const express  =require("express")


// //express app
// const app = express();



//  // listen for requests
//  app.listen(3000);

//  app.get("/",(req,res)=>{
//     res.send("<p>home</p")
//  })
  



// // routing  (switching between the files)  



// const express  =require("express")


// //express app
// const app = express();



//  // listen for requests
//  app.listen(3000);

//  app.get("/",(req,res)=>{
//     res.sendFile("./views/index.html",{root:__dirname});
//  })

//  app.get("/about",(req,res)=>{
//     res.sendFile("./views/about.html",{root:__dirname})
//  })


//  //redirecting
//  app.get("/about-us",(req,res)=>{
//     res.redirect("/about")
//  })


//  //for rendering the 404 page(i.r default case)
//  //the speciality of app.use is that it fires for every url,if not matched  then it sends the response
//  // and this must be placed at the end only because if placed at top at we have know that it the browser scan
//  //from top to bootom ,if we search for a valid url ,which is at bootom the browswer renders th4 404.html page because the broswer encouters the app.use () function firts
//  // and we have set the status code for this because the browser doesnt know that it is renndering a page for  a error page
//  app.use((req,res) => {
//     res.status(404).sendFile("./views/404.html",{root:__dirname})
//  })


 //--------------------------------------------------------------------------------------------------------

 // it now we were loading a static page now we will be loadind a dyanamic pagw with the help of view engine
 // for this we will be using ejs
 // installation => npm i ejs



 
// const express  =require("express")


// //express app
// const app = express();

// // register view engine
// app.set("view engine","ejs")

//  // listen for requests
//  app.listen(3000);

//  app.get("/",(req,res)=>{

// const blogs=[
    
//         {title:"the new gun",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},
//         {title:"one man army",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},
//         {title:"the elf",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},



// ]


    
//         //      ("",data)      
//    res.render("index",{title:"Home",blogs})
 
//  })

//  app.get("/about",(req,res)=>{
//     res.render("about",{title:"About"})
//  })

//  app.get("/blogs/create",(req,res)=>{
//     res.render("create",{title:"Create A New Blog"})
//  })

 

//  app.use((req,res) => {
//     res.status(404).render("404",{title:"404"})
//  })

//-----------------------------------------------------------------------------------------------------------------
 
// middleware => the code which runs on the server before getting a request and sending a response
// app.use () is used for this purpose
// app.use() is fired for every requests whereas app.get() is used only for particular request





// const express  =require("express")


// //express app
// const app = express();

// // register view engine
// app.set("view engine","ejs")

//  // listen for requests
//  app.listen(3000);



// // writing our own middleware

// // app.use((req,res)=>{
// //    console.log("a new request is made")
// //    console.log("host is ",req.hostname)
// //    console.log("path is ", req.path);
// //    console.log("method is ",req.method);

// //    // if we write the above code,the website doesnt process it further because it doesnt know what to do next  so .....
// // })

// app.use((req,res,next)=>{
//    console.log("a new request is made")
//    console.log("host is ",req.hostname)
//    console.log("path is ", req.path);
//    console.log("method is ",req.method);
// next();
  
// })





//  app.get("/",(req,res)=>{

// const blogs=[
    
//         {title:"the new gun",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},
//         {title:"one man army",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},
//         {title:"the elf",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},



// ]


    
//         //      ("",data)      
//    res.render("index",{title:"Home",blogs})
 
//  })

//  app.get("/about",(req,res)=>{
//     res.render("about",{title:"About"})
//  })

//  app.get("/blogs/create",(req,res)=>{
//     res.render("create",{title:"Create A New Blog"})
//  })

 

//  app.use((req,res) => {
//     res.status(404).render("404",{title:"404"})
//  })


//--------------------------------------------------------------------------------------------------------
 // static files are the css files,images etc
 // now we are linking the css files to the brower as a static files 
 //this can be  achieved by app.use(express.static("file_name"))




 

// const express  =require("express")


// //express app
// const app = express();

// // register view engine
// app.set("view engine","ejs")

//  // listen for requests
//  app.listen(3000);



// app.use(express.static("public"));




//  app.get("/",(req,res)=>{

// const blogs=[
    
//         {title:"the new gun",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},
//         {title:"one man army",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},
//         {title:"the elf",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},



// ]


    
//         //      ("",data)      
//    res.render("index",{title:"Home",blogs})
 
//  })

//  app.get("/about",(req,res)=>{
//     res.render("about",{title:"About"})
//  })

//  app.get("/blogs/create",(req,res)=>{
//     res.render("create",{title:"Create A New Blog"})
//  })

 

//  app.use((req,res) => {
//     res.status(404).render("404",{title:"404"})
//  })






// mondodb-------------------------------------------------------------------------------
//mongoose is an odm [object document mapping library]it wraps the mongodb api and allows to interact with database
// in mongoose we have schemas,which defines the structure of a type of a Data
//  in our blog app there r two types of it
//user schema and blog schema
//usser schema => name,age
//blog schema=>title,body



// const express  =require("express")
// const mongoose = require("mongoose")
// const Blog = require("./models/blog")

// //mongodb link
// const url = "mongodb+srv://sudhindra:VfTuKIfklRc4Ph0b@netnode.f7qt1pm.mongodb.net/node-tuts?retryWrites=true&w=majority"
// //express app
// const app = express();









// // register view engine
// app.set("view engine","ejs")

//  // listen for requests
//  app.listen(3000);


//  mongoose.connect(url);
// app.use(express.static("public"));




// //mongoose routes

// app.get("/add-blog",(req,res)=>{
// const blog= new Blog({
//    title:"new blog 2",
//    snippet:"about my new blog",
//    body:"more about my new blog"
// })
// blog.save()
// .then((result)=>{
//    res.send(result)
// })
// .catch((err)=>{
//    console.log(err)
// })
// //this is an asynchronus task and it takes time 
// })



// // for retriving the blogs
// app.get("/all-blogs",(req,res)=>{
//    Blog.find()
//    .then((result)=>{
//       res.send(result)
//    })
//    .catch((err)=>{
//       console.log(err)
//    })

// })





//  app.get("/",(req,res)=>{

// const blogs=[
    
//         {title:"the new gun",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},
//         {title:"one man army",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},
//         {title:"the elf",snippet:" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae qui, incidunt ducimus perspiciatis rem fugit aliquid perferendis nisi placeat quos laboriosam dolorem eaque in corporis cumque maiores aut accusamus iure?"},



// ]


    
//         //      ("",data)      
//    res.render("index",{title:"Home",blogs})
 
//  })

//  app.get("/about",(req,res)=>{
//     res.render("about",{title:"About"})
//  })

//  app.get("/blogs/create",(req,res)=>{
//     res.render("create",{title:"Create A New Blog"})
//  })

 

//  app.use((req,res) => {
//     res.status(404).render("404",{title:"404"})


// })







 // displaying the blogs  which we habe added in the database----------------------------------------------------------------------


 
// const express  =require("express")
// const mongoose = require("mongoose")
// const Blog = require("./models/blog")

// //mongodb link
// const url = "mongodb+srv://sudhindra:VfTuKIfklRc4Ph0b@netnode.f7qt1pm.mongodb.net/node-tuts?retryWrites=true&w=majority"
// //express app
// const app = express();









// // register view engine
// app.set("view engine","ejs")

//  // listen for requests
//  app.listen(3000);


//  mongoose.connect(url);
// app.use(express.static("public"));




// //mongoose routes

// app.get("/add-blog",(req,res)=>{
// const blog= new Blog({
//    title:"new blog 2",
//    snippet:"about my new blog",
//    body:"more about my new blog"
// })
// blog.save()
// .then((result)=>{
//    res.send(result)
// })
// .catch((err)=>{
//    console.log(err)
// })
// //this is an asynchronus task and it takes time 
// })



// // for retriving the blogs
// app.get("/all-blogs",(req,res)=>{
//    Blog.find()
//    .then((result)=>{
//       res.send(result)
//    })
//    .catch((err)=>{
//       console.log(err)
//    })

// })





//  app.get("/",(req,res)=>{


// res.redirect("/blogs")

    
     
//  })

//  app.get("/about",(req,res)=>{
//     res.render("about",{title:"About"})
//  })

//  app.get("/blogs/create",(req,res)=>{
//     res.render("create",{title:"Create A New Blog"})
//  })





// //for displaying the newly added data from the database

// app.get("/blogs",(req,res) => {
//    Blog.find().sort({createdAt:-1}) //-1 means it arranges in descending order(newly created first)
//    .then((result)=>{
//       res.render("index",{title:"All Blogs",blogs:result})
//    })
//    .catch((err)=>{
//       console.log(err)
//    })
// })




 

//  app.use((req,res) => {
//     res.status(404).render("404",{title:"404"})
//  })








 //////////////////////////////////////////////////////////////////////////////////////////////
 //differnet type of requests,now we have only seen the get request
 //GET=> REQUESTS TO GET A RESOURCE
 //POST => REQUESTS TO CREATE A NEW DATA BASE
 //DELETE=> REQUESTS TO DELETE A DATA
 //PUT=> REQUESTS TO  UPDATE THE DATA




 // POST REQUEST -----------------------------------------------------------------------------


 // go to create.ejs



const express  =require("express");
const { result } = require("lodash");
const mongoose = require("mongoose")
// const Blog = require("./models/blog") => we r removing this becuase its no longer needed here
const blogRoutes= require("./routes/blogroutes")
//mongodb link
const url = "mongodb+srv://sudhindra:VfTuKIfklRc4Ph0b@netnode.f7qt1pm.mongodb.net/node-tuts?retryWrites=true&w=majority"
//express app
const app = express();


//added for the post requests through the objects
app.use(express.urlencoded({extended:true}));


//controller




// register view engine
app.set("view engine","ejs")

 // listen for requests
 app.listen(3000);


 mongoose.connect(url);
app.use(express.static("public"));




//mongoose routes

// app.get("/add-blog",(req,res)=>{
// const blog= new Blog({
//    title:"new blog 2",
//    snippet:"about my new blog",
//    body:"more about my new blog"
// })
// blog.save()
// .then((result)=>{
//    res.send(result)
// })
// .catch((err)=>{
//    console.log(err)
// })
// //this is an asynchronus task and it takes time 
// })



// for retriving the blogs
// app.get("/all-blogs",(req,res)=>{
//    Blog.find()
//    .then((result)=>{
//       res.send(result)
//    })
//    .catch((err)=>{
//       console.log(err)
//    })

// })





 app.get("/",(req,res)=>{


res.redirect("/blogs")

    
     
 })

 app.get("/about",(req,res)=>{
    res.render("about",{title:"About"})
 })

//  app.get("/blogs/create",(req,res)=>{
//     res.render("create",{title:"Create A New Blog"})
//  })





//for displaying the newly added data from the database

// app.get("/blogs",(req,res) => {
//    Blog.find().sort({createdAt:-1}) //-1 means it arranges in descending order(newly created first)
//    .then((result)=>{
//       res.render("index",{title:"All Blogs",blogs:result})
//    })
//    .catch((err)=>{
//       console.log(err)
//    })
// })




// //handling post request
// app.post("/blogs",(req,res)=>{
// // now we create a new instance of the blog which we have added and this is done by the following code
// const blog=new Blog(req.body);
// //and to save it to the database we use the following code
// blog.save()
// .then((result)=>{
//    res.redirect("/blogs")

// })
// .catch((err)=>{
//    console.log(err)
// })
// })
// // for this ,i.e to get access of the nely added data we need to use the middlware,which is added above


 
// //regarding the route parameter
// app.get("/blogs/:id",(req,res)=>{
//    const id=req.params.id
//    Blog.findById(id)
//    .then(result=>{
//       res.render("details",{blog:result,title:"Blog Details"})
//    })
//    .catch(err=>{
//       console.log(err)
//    })
// })


// // delete


// app.delete('/blogs/:id', (req, res) => {
//    const id = req.params.id;
   
//    Blog.findByIdAndDelete(id)
//      .then(result => {
//        res.json({ redirect: '/blogs' });
//      })
//      .catch(err => {
//        console.log(err);
//      });
//  });


// we have paseted all the routes regarding blog in blogroutes.js



// all of the ocode can be used here by this code
app.use(blogRoutes)

 app.use((req,res) => {
    res.status(404).render("404",{title:"404"})
 })



 // route parameters => the variable parts of the route that may change value
 //example => 
//localhost:3000/blogs/:id
//localhost:3000/blogs/:50
//localhost:3000/blogs/:12345

// routing paramaters
// for this we are enclosing the the title and snippet in the index.ejs with anchor tag
// also we create a new details.ejs page 



// express routes => in order to minimize the code,handle more efficintly (i.e grouping all the similar codes togethere)
//MVC(model,view,controller)
//it is a way of structuring our code and files
//it keeps the code modular,easy to read and reusable
//views=> html templeate
//model=> how we use the data structure and how we interact with the database
//controller => it acts a pathway b/w views and model