const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController');
const express = require('express');
const userRouter = express.Router();

userRouter.get('/',getAllUsers);
userRouter.get('/me', getSingleUser);
userRouter.post('/create-user',createUser);
userRouter.patch('/update-user/:uuid',updateUser);
userRouter.delete('/delete-user/:uuid',deleteUser);
module.exports= userRouter;