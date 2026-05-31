const express = require("express");

const v1_router = require("./v1"); 

const api_router = express.Router();

// if any request comes and route start with /v1 , we map it to v1_router
api_router.use("/v1", v1_router);

module.exports = api_router;