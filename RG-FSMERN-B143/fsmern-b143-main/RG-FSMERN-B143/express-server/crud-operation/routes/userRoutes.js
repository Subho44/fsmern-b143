const express = require('express');
const router = express.Router();
const User = require('../models/User');

//create
router.post('/',async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch(err) {
        res.status(400).json({error:err.message});
    }
});
//read all
router.get('/',async(req,res)=>{
    const users = await User.find();
    res.json(users);
});
//read one data
router.get('/:id',async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({error:"user not found"});
        res.json(user);
    } catch(err) {
       res.status(404).json({error:err.message}); 
    }
});
//update
router.put('/:id',async(req,res)=>{
    try {
        const updateuser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!updateuser) return res.status(404).json({error:"user not found"});
        res.json(updateuser);
    } catch(err) {
       res.status(404).json({error:err.message}); 
    }
});
//delete
router.delete('/:id',async(req,res)=>{
    try {
        const deleteuser = await User.findByIdAndDelete(req.params.id);
        if(!deleteuser) return res.status(404).json({error:"user not found"});
        res.json(deleteuser);
    } catch(err) {
       res.status(404).json({error:err.message}); 
    }
});
module.exports = router;