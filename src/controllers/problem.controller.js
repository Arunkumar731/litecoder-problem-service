function pingController(req, res) {
    return res.json({message : "problem controller is up"})
};

function addProblem(req, res){
    return res.status(501).json({
        message: "not implemented"
    });
};

function getProblem(req, res){
    return res.status(501).json({
        message: "not implemented"
    });
};

function getProblems(req, res){
    return res.status(501).json({
        message: "not implemented"
    });
};

function updateProblem(req, res){
    return res.status(501).json({
        message: "not implemented"
    });
};

function deleteProblem(req, res){
    return res.status(501).json({
        message: "not implemented"
    });
};

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    pingController
};
