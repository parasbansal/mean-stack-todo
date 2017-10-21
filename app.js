const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const config = require('./env');
const todos = require('./routes/todos');

const app = express();

mongoose.connect(config.database, { useMongoClient: true });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/todos', todos);


app.get("/", (req, res, next) => {
	res.send(config.appName + "! Go away!");
});

app.listen(config.port, () => {
	console.log("Server on " + config.port);
});
