const express = require('express');
const { getAllQuestions,createQuestion, updateQuestion, deleteQuestion } = require('../controllers/questionsController');
const questionsRouter = express.Router();

questionsRouter.get('/', getAllQuestions);
questionsRouter.post('/create-question', createQuestion);
questionsRouter.patch('/update-question/:uuid', updateQuestion);
questionsRouter.delete('/delete-entry/:uuid', deleteQuestion);
module.exports = questionsRouter;