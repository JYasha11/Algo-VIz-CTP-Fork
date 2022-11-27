const {Users} = require('../models');
const {Questions} = require('../models');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config/auth.config');

const getAllUsers = async(req, res) =>{
    try{
        const users = await Users.findAll({ include: Questions})
        res.status(200).send(users);
    }catch(err){
        console.error(err);
        res.status(500).send('No users Found');
    }
}

const getSingleUser = async(req, res) =>{
    try{
        const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[1];
        jwt.verify(token, secret, (err, authorizedData) =>{
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
    }
        res.send('no.');
        // const user = await Users.findOne({where: {email: req.params.email}});
        // res.status(200).send(user);
    }catch(err){
        console.error(err);
        res.status(500).send(`Unable to find user with ${req.params.id}`);
    }
}

const createUser = async(req, res) =>{
    try{
        if (await Users.findOne({where: {email: req.body.email}}) !== null){
            res.status(500).send('email exists');
        } 
        else{
            await Users.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
            })
            res.status(200).send('user created');
        }
    }catch(err){
        console.error(err);
        res.status(500).send('Unable to create a user'+err);
    }
}

const updateUser = async(req, res) =>{
    try{
      
        const user = await Users.findOne({
            where: {
                id: req.params.id
            }
        });
        await user.update(req.body);
        res.status(200).send('updated user');

    }catch(err){
        res.status(500).send('Unable to update user');
    }
}

const deleteUser = async(req, res) =>{
    try{
        await Users.destroy({where: {id: req.params.id}});
        res.status(200).send('deleted user');

    }catch(err){
        res.status(500).send('unable to delete user');
    }
}


module.exports={getAllUsers,getSingleUser, createUser, updateUser, deleteUser};