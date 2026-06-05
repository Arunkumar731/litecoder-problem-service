const express = require('express');

const { problemController } = require('../../controllers');

const problemRouter = express.Router();

// If any request comes and route continues with /ping, we map it to pingProblemController
problemRouter.get('/ping', problemController.pingProblemController);

// if any request comes and route continue with /:id , we map it to getProblem
problemRouter.get('/:id', problemController.getProblem);

// if any request comes and route continue with / , we map it to getProblems

problemRouter.get('/', problemController.getProblems);

// if any request comes and route continue with / , we map it to addProblem

problemRouter.post('/', problemController.addProblem);

// if any request comes and route continue with /:id , we map it to updateProblem

problemRouter.delete('/:id', problemController.deleteProblem);

// if any request comes and route continue with /:id , we map it to deleteProblem

problemRouter.put('/:id', problemController.updateProblem);


module.exports = problemRouter;




