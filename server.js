const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
//inicinado o DB
mongoose.connect('mongodb://localhost:27017/nodeapi',{ useUnifiedTopology: true, useNewUrlParser: true,  },);

requireDir('./src/models/');

//Rotas
app.use('/api', require("./src/routes"));

app.listen(3001);