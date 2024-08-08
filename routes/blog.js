const express = require('express')
const router = express.Router()
const path=require('path')
const blogs= require('../data/blogs')

router.get('/',(req, res)=>{
    // res.sendFile(path.join(__dirname,'../template/index.html'))
    res.render('home')
})

router.get('/blog',(req, res)=>{
    // blogs.forEach(e => {
    //     console.log(e.title);
    // });
    // res.sendFile(path.join(__dirname,'../views/bloghome.html'))
    res.render('blogHome',{
        blogs:blogs
    })
})

router.get('/blogpost/:slug',(req, res)=>{
    myblog=blogs.filter((e)=>(
        e.slug==req.params.slug
    ))
    // console.log(myblog);
    // res.sendFile(path.join(__dirname,'../template/blogPage.html'))
    res.render('blogPage',{
        title:myblog[0].title,
        content:myblog[0].content
    })
})

module.exports = router