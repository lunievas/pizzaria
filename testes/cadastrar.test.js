const UsuariosServices = require('../services/UsuariosServices');



let usuario = {
    nome: "Robersval da Silva",
    email: "robes@email.com",
    senha: "robes890",
    endereco: "rua dos bobos, 0"
}
UsuariosServices.cadastrar(usuario);