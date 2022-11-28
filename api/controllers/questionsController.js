const Questions = require('../models/questions');


const getAllQuestions = async (req, res) =>{
    try{
        const data = await Questions.findAll();
        res.status(200).send(data);
    }catch(err){
        console.error(err);
    }
    
}

const createQuestion = async (req, res) =>{
    try{
        const questionInfo = req.body;
        await Questions.create(questionInfo);
        res.status(200).json(questionInfo);

    }catch(err){
        console.error(err);
    }
}

const updateQuestion = async (req, res) =>{
    try{
        const updateId = req.params.questionId;
        const updated = req.body;
    
        const question = await question.findByPk(updateId);
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
        const questionId = req.params.questionId;
        const question = await Entries.findByPk(questionId);
        question.destroy();
        res.status(200).send('destroyed');
    }catch(err){

    }
}
module.exports = {getAllQuestions,createQuestion, updateQuestion, deleteQuestion};