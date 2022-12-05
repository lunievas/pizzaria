//1- Importar o express
const express = require('express');
const { appendFile } = require('fs');
const path = require('path');



//2- Criar o servidor
const servidor = express();

//Define a pasta public como sendo a pasta de arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')));


//3- Definir uma rota neste servidor
//Endereço, método, função callback ( a ação que o servidor vai realizar quando a requisição chegar)

servidor.get('/', (req,res)=> {

    return res.sendFile(__dirname + '/views/index.html');
} );

//4- Colocar o servidor no modo "Aguardando requisição"

servidor.get('/carrinho', (req,res)=>{

    return res.sendFile(__dirname + '/views/carrinho.html');
});

servidor.get('/perfil',(req,res)=>{
    return res.sendFile(__dirname + '/views/perfil.html');
});


servidor.listen(3000)

