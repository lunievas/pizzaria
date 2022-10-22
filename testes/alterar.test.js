const UsuariosServices = require("../services/UsuariosServices");


let usuario = {
    nome: "Luiz Ignácio",
    email: "lulu@email.com",
    senha: "lulu13",
}
UsuariosServices.alterar(usuario,5);