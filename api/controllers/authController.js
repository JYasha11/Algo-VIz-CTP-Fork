const {Users} = require('../../db/models');
const jwt = require('jsonwebtoken');
const {secret} = require('../../config/auth.config');

const auth = async(req, res) =>{
    try{
        const user = await Users.findOne({where: {email: req.body.email}})
        if(user.correctPassword(req.body.password)){
            //res.status(200).send('correct password!');
            jwt.sign({user}, secret, (err, token)=>{
                if(err) console.log(err);
                res.status(200).send({
                    token: token
                });
            })
            // res.status(200).send({
            //     id: user.id,
            //     username: user.username,
            //     email: user.email
            // });
        }else{
            res.status(500).send('wrong password');
        }
    }catch(err){
        res.status(500).send('wrong password');
    }
}

module.exports={auth};