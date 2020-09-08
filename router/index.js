const express = require('express');
const router = express.Router()
const Name = require('../model/Todo')

router.post('/',(req,res)=>{
    const NewTodo = new Name({
        name: req.body.name
    })
    NewTodo.save()
        .then(name =>{
            res.json(name)
        })
        .catch(err => console.log(err))
})

router.get('/',(req,res)=>{
    Name.find()
        .then(name =>{
            res.json(name)
        })
        .catch(err =>{
            console.log(err)
        })
})

router.delete('/:id',(req,res)=>{
    let {id} = req.params;
    Name.findOneAndDelete({_id:id})
    .then(name =>{
        res.json(name)
    })
    .catch(err =>{
        console.log(err)
    })
})

module.exports = router