// const express =require("express")

const Post=require("../models/postModel");
const Like=require("../models/likeModel")

exports.createPost= async(req, res)=>{
   

    try{
            const {title,body}=req.body;
            const post=new Post({
                title,body
            })

            const savedPost=await post.save();

            res.json({
                post:savedPost
            })
    }
    catch(err){
        return res.status(400).json({
            error:err.message
        })
    }
}


exports.getAllPost=async(req,res)=>{
    try{
       const posts=(await Post.find().populate("likes").populate("comments"));
       res.json({
                post:posts
            })
    }
    catch(err){
        return res.status(400).json({
            error:err.message
        })
    }
}