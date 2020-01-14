const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:
// Query Params: request.query (filtros, ordenação, paginação, ...)
// Route Params: request.params (identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Não-relacional)

const app = express();

mongoose.connect('mongodb+srv://richard:omnistack@cluster0-2q4qf.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);


app.listen(3333);