const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config()

const app = express();
// MongoDB (Não-relacional)
mongoose.connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

app.listen(3333);
