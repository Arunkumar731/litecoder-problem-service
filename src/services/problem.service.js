const sanitizeMarkdownContent = require('../utils/markdownSanitizer');

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async addProblem(req, res, next) {
        try {

            // check whether request reached controller
            console.log("Controller reached");

            // print request body
            console.log("Request Body:", req.body);

            const newProblem = await this.problemRepository.createProblem(req.body);

            return res.status(StatusCodes.CREATED).json({
                success: true,
                message: 'successfully created a new problem',
                error: {},
                data: newProblem
            });

        } catch (error) {

            // print exact error
            console.log("Controller Error:", error);

            next(error);
        }
    }
}

module.exports = ProblemService;