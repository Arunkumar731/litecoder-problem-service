const { problem } = require("../models");

class ProblemRepository {

    async createProblem(problemData) {
        try {
            const createdProblem = await problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty,
                constrains: problemData.constrains,
                tags: problemData.tags,
                testCases: problemData.testCases ? problemData.testCases : []
            });

            return createdProblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;