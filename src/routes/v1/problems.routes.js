const express = require("express");

const { problemController } = require('../../controllers/index'); 

const problemRouter = express.Router();

// if any request comes and route continue with /ping , we map it to pingController
problemRouter.get('/ping', problemController.pingController);

// if any request comes and route continue with /:id , we map it to getProblem
problemRouter.get('/:id', problemController.getProblem);

// if any request comes and route continue with / , we map it to getProblems
problemRouter.get('/', problemController.getProblems);

// if any request comes and route continue with / , we map it to addProblem
problemRouter.post('/', problemController.addProblem);

// if any request comes and route continue with /:id , we map it to updateProblem
problemRouter.put('/:id', problemController.updateProblem);

// if any request comes and route continue with /:id , we map it to deleteProblem
problemRouter.delete('/:id', problemController.deleteProblem);


module.exports = problemRouter;




