const {Users} = require('../models');
const {Questions} = require('../models');

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
        const user = await Users.findOne({where: {email: req.params.email}});
        res.status(200).send(user);
    }catch(err){
        console.error(err);
        res.status(500).send(`Unable to find user with ${req.params.email}`);
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


module.exports={getAllUsers, getSingleUser, createUser, updateUser, deleteUser};