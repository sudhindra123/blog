const express = require("express")
const router = express.Router();
const Blog = require("../models/blog")

// attaching request handlers with the route


router.get("/add-blog",(req,res)=>{
    const blog= new Blog({
       title:"new blog 2",
       snippet:"about my new blog",
       body:"more about my new blog"
    })
    blog.save()
    .then((result)=>{
       res.send(result)
    })
    .catch((err)=>{
       console.log(err)
    })
    //this is an asynchronus task and it takes time 
    })

    router.get("/all-blogs",(req,res)=>{
        Blog.find()
        .then((result)=>{
           res.send(result)
        })
        .catch((err)=>{
           console.log(err)
        })
     
     })
     
 router.get("/blogs/create",(req,res)=>{
    res.render("create",{title:"Create A New Blog"})
 })





//for displaying the newly added data from the database

router.get("/blogs",(req,res) => {
   Blog.find().sort({createdAt:-1}) //-1 means it arranges in descending order(newly created first)
   .then((result)=>{
      res.render("index",{title:"All Blogs",blogs:result})
   })
   .catch((err)=>{
      console.log(err)
   })
})


router.post("/blogs",(req,res)=>{
    // now we create a new instance of the blog which we have added and this is done by the following code
    const blog=new Blog(req.body);
    //and to save it to the database we use the following code
    blog.save()
    .then((result)=>{
       res.redirect("/blogs")
    
    })
    .catch((err)=>{
       console.log(err)
    })
    })
    // for this ,i.e to get access of the nely added data we need to use the middlware,which is added above
    
    
     
    //regarding the route parameter
    router.get("/blogs/:id",(req,res)=>{
       const id=req.params.id
       Blog.findById(id)
       .then(result=>{
          res.render("details",{blog:result,title:"Blog Details"})
       })
       .catch(err=>{
          console.log(err)
       })
    })
    
    
    // delete
    
    
    router.delete('/blogs/:id', (req, res) => {
       const id = req.params.id;
       
       Blog.findByIdAndDelete(id)
         .then(result => {
           res.json({ redirect: '/blogs' });
         })
         .catch(err => {
           console.log(err);
         });
     });
    
     module.exports = router