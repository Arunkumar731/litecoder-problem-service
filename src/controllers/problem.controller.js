const { StatusCodes } = require("http-status-codes");
const notImplemented = require("../errors/notimplementing.error");

function pingController(req, res) {
    return res.json({ message: "problem controller is up" });
}

function addProblem(req, res, next) {
    // nothing implemented
    try {
        throw new notImplemented("addProblem")
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
    // nothing implemented
    try {
        throw new notImplemented("addProblem")
    } catch (error) {
        next(error);
    }
}

function getProblems(req, res) {
    // nothing implemented
    try {
        throw new notImplemented("addProblem")
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res) {
    // nothing implemented
    try {
        throw new notImplemented("addProblem")
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res) {
    // nothing implemented
    try {
        throw new notImplemented("addProblem")
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