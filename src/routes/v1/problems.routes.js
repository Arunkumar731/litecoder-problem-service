const express = require("express");

const { problemController } = require('../../controllers/index'); 

const problemRouter = express.Router();

problemRouter.get('/ping', problemController.pingController);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.post('/', problemController.addProblem);

problemRouter.put('/:id', problemController.updateProblem);

problemRouter.delete('/:id', problemController.deleteProblem);


module.exports = problemRouter;




