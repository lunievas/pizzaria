const PaginasController = {
    showIndex: (req, res) => {
        return res.sendFile(__dirname + '/views/index.html')
    },

    showCarrinho: (req,res)=>{

        return res.sendFile(__dirname + '/views/carrinho.html');
    },

    showPerfil: (req,res)=>{
        return res.sendFile(__dirname + '/views/perfil.html');
    },

    showCadastro: (req,res)=>{
        return res.sendFile(__dirname + "/views/cadastro.html")
    } 

}


module.exports = PaginasController;