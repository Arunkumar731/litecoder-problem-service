const { StatusCodes } = require("http-status-codes");
const notImplemented = require("../errors/notimplementing.error");

function pingController(req, res) {
    return res.json({ message: "problem controller is up" });
}

function addProblem(req, res, next) {
    try {
        throw new notImplemented("addProblem")
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "not implemented"
    });
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "not implemented"
    });
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "not implemented"
    });
}

function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "not implemented"
    });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingController
};