const express = require("express");

const problemRouter = require("./problems.routes"); 

const v1_router = express.Router();

// if any request comes and route continue with /problems , we map it to problemRouter
v1_router.use("/problems", problemRouter);

module.exports = v1_router;




