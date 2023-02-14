//1- Importar o express
const express = require('express');
const path = require('path');
const router = require('./router');



//2- Criar o servidor
const servidor = express();

//Define a pasta public como sendo a pasta de arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')));


//3- Definir uma rota neste servidor
//Endereço, método, função callback ( a ação que o servidor vai realizar quando a requisição chegar)
servidor.use(router);

servidor.listen(8000)

