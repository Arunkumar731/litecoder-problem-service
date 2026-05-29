const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const { PORT } = require("./config/server.config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.get('/ping', (req, res) => {
    return res.json({message : "problem service has arrived"});
});

app.listen(PORT, () => {
    console.log(`server has started at port ${PORT}`);
});


