const { StatusCodes } = require("http-status-codes");
const notImplemented = require("../errors/notimplementing.error");

const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(
    new ProblemRepository()
);

function pingController(req, res) {
    return res.json({ message: "problem controller is up" });
}

async function addProblem(req, res, next) {
    try {
        console.log("Controller reached");
        console.log(req.body);

        const newProblem = await problemService.createProblem(req.body);

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'successfully created a new problem',
            error: {},
            data: newProblem
        });
    } catch (error) {
        console.log("Controller Error:", error);
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        throw new notImplemented("getProblem");
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res, next) {
    try {
        throw new notImplemented("getProblems");
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        throw new notImplemented("updateProblem");
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new notImplemented("deleteProblem");
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingController
};