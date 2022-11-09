//1- Importar o express
const express = require('express');



//2- Criar o servidor
const servidor = express();

//3- Definir uma rota neste servidor
//Endereço, método, função callback ( a ação que o servidor vai realizar quando a requisição chegar)

servidor.get('/usuarios', (req,res)=> {
    console.log("chegou uma requisição");
    // return res.send("Sua ligação é muito importante...");
    return res.sendFile(__dirname + '/views/index.html');
} );

//4- Colocar o servidor no modo "Aguardando requisição"

servidor.listen(3000)