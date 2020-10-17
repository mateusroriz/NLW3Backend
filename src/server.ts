import express from 'express';
import path from 'path';
import cors from 'cors';
import 'express-async-errors';

import './database/connection'

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);






//Rota = conjunto
//Recurso = usuario

//Metodos HTTP = GET, POST, PUT, DELETE
//Parametros 

//GET = buscar uma informação (lista, item)
//POST = Criando uma informação 
//PUT = editando uma informação
//DELETE = deletando uma informação

//Query: http://localhost:3333/users?search=user
//Route Params: http://localhost:3333/users/1 (identificar um recurso)
//Body: http://localhost:3333/users
