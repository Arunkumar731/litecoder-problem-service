const express = require("express");

const problemRouter = require("./problems.routes"); 

const v1_router = express.Router();

v1_router.use("/problems", problemRouter);

module.exports = v1_router;




