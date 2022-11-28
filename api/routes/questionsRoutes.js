const express = require('express');
const { getAllQuestions,createQuestion, updateQuestion, deleteQuestion } = require('../controllers/questionsController');
const questionsRouter = express.Router();

questionsRouter.get('/', getAllQuestions);
questionsRouter.post('/create-entry', createQuestion);
questionsRouter.patch('/update-entry/:entryId', updateQuestion);
questionsRouter.delete('/delete-entry/:entryId', deleteQuestion);
module.exports = questionsRouter;