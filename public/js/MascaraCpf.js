const input = document.getElementById("cpf");
const onInputKeyDown = (evento)=>{

    let textoDigitado = input.value;
    let teclaPressionada = evento.key;

    evento.preventDefault();

    let regex = /[0-9]/;
    let eNumerico = regex.test(teclaPressionada);

    if(eNumerico && textoDigitado.length < 14){

        if(textoDigitado.length == 3 ||
         textoDigitado.length == 7){

            input.value += '.' +  teclaPressionada;
        }else if(textoDigitado.length == 11){
            input.value += '-' +  teclaPressionada;

        }else{
            input.value += teclaPressionada;

        }
    }
}

input.addEventListener('keydown', onInputKeyDown)