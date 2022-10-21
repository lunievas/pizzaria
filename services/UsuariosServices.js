const usuarios = require('../databases/usuarios.json');
const bcrypt = require('bcrypt');
const fs = require('fs');



function listar(){

    console.table(usuarios.map(
        usuario => {
            return{
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email,

            }
        }
    ));

    //OUTRA FORMA DE FAZER
    // const formatUsuario = usuario =>{

    
    //     return{
    //             id: usuario.id,
    //             nome: usuario.nome,
    //             email: usuario.email,
    //         }
    //     };

    // let usuariosFormatados = usuarios.map(formatUsuario);

    // console.table(usuariosFormatados);
    


}

function listarNomes(){ 

    console.table(usuarios.map(usuario => usuario.nome));

}


function buscarPorTrecho(trecho){
    
    const buscaTrecho = usuarios.filter(usuario => usuario.nome.includes(trecho));
        
        
    
    console.log(buscaTrecho);
}

function salvar(arrayDeUsuarios){
    // Seu código aqui
}

function cadastrar(objeto){
    let novoId = usuarios[usuarios.length - 1].id + 1;

    
    let senhaCripto = bcrypt.hashSync(objeto.senha,10);

    let usuario = {
        id: novoId,
        nome: objeto.nome,
        email: objeto.email,
        senha: senhaCripto,
        enderecos: [objeto.endereco],
        formasDePagamento: []
    }

    usuarios.push(usuario);

    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(usuarios,null,4))
}

function detalhar(idUsuario){
    let detailId = usuarios.find(usuario => usuario.id === idUsuario);

    console.log(`Nome: ${detailId.nome}`);
    console.log(`Email: ${detailId.email}`);

    console.table(detailId.enderecos);
    console.table(detailId.formasDePagamento);
}

function remover(idDoUsuarioParaRemover){
    let userToRemove = usuarios.find(usuario => usuario.id === idDoUsuarioParaRemover);
    let userPositionInUsers = usuarios.indexOf(userToRemove);

    usuarios.splice(userPositionInUsers,1);
    
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(usuarios,null,4))
    
    
}

function alterar(novosDados, idUsuario){
    let modifiedPassword = bcrypt.hashSync(novosDados.senha,10);

    let findUser = usuarios.find(usuario => usuario.id == idUsuario);

   
      const userModified =  usuarios.map(
            usuario => {
                return {
                    nome: novosDados.nome,
                    email: novosDados.email,
                    senha: modifiedPassword,
                }
            }
        )
}


function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    listarNomes,
    buscarPorTrecho,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento
}

module.exports = UsuariosServices;