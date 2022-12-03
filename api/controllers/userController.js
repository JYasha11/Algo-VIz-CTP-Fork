const {sequelize, User, Question} = require ('../models');
const question = require('../models/question');


const getAllUsers = async(req, res) =>{
    try{
        const users = await User.findAll({include:'questions'})
        res.status(200).send(users);
    }catch(err){
        console.error(err);
        res.status(500).send('No users Found');
    }
}

const getSingleUser = async(req, res) =>{
    const uuid = req.params.uuid
    try{
        const user = await User.findOne({where: {uuid}, include:'questions'});
        res.status(200).send(user);
    }catch(err){
        console.error(err);
        res.status(500).send(`Unable to find user with ${req.params.email}`);
    }
}

const createUser = async(req, res) =>{
    try{
        if (await User.findOne({where: {email: req.body.email}}) !== null){
            res.status(500).send('email exists');
        } 
        else{
            await User.create({
            name: req.body.name,
            email: req.body.email,
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
      
        const user = await User.findOne({where: {uuid}});
        await user.update(req.body);
        res.status(200).send('updated user');

    }catch(err){
        res.status(500).send('Unable to update user');
    }
}

const deleteUser = async(req, res) =>{
    const uuid = req.params.uuid
  try {
    const user = await User.findOne({ where: { uuid } })

    await user.destroy()

    return res.json({ message: 'User deleted!' })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: 'Cannot delete user' })
  }
}


module.exports={getAllUsers, getSingleUser, createUser, updateUser, deleteUser};