const {sequelize, Question, User} = require ('../models');


const getAllQuestions = async (req, res) =>{
    try{
        const data = await Question.findAll({include: 'user'});
        res.status(200).send(data);
    }catch(err){
        console.error(err);
    }
    
}

const createQuestion = async (req, res) =>{
    const { userUuid, url, comment, is_completed } = req.body

  try {
    const user = await User.findOne({ where: { uuid: userUuid } })

    const question = await Question.create({ url, comment, is_completed, userId: user.id })

    return res.json(question)
  } catch (err) {
    console.log(err)
    return res.status(500).json(err)
  }
}

const updateQuestion = async (req, res) =>{
    try{
        const updateId = req.params.uuid;
        const updated = req.body;
    
        const question = await Question.findByPk(updateId);
        if(!question) res.status(404).send(`No question found with ID ${updateId}`)
        await entry.update(req.body);
        
        res.status(200).send(`updated entry with 
        ${updated.question_comment} 
        ${updated.is_completed}`);
    }
    catch(err){
        console.error(err);
    }
}

const deleteQuestion = async (req, res) =>{
    try{
        const questionId = req.params.uuid;
        const question = await Question.findByPk(questionId);
        question.destroy();
        res.status(200).send('destroyed');
    }catch(err){

    }
}
module.exports = {getAllQuestions,createQuestion, updateQuestion, deleteQuestion};