const mongoose = require("mongoose");
const { ATLAS_DB_URL, Node_Env } = require("./server.config");

async function connectToDb() {
    try {
        if (Node_Env == "development"){
        await mongoose.connect(ATLAS_DB_URL);
    }
    } catch (error) {
        console.log("unable to connect the DB server");
        console.log(error);
    }
}

module.exports = connectToDb;