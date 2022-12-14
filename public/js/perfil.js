//Mostrar alerta caso o campo de nome 
//seja abandonado sem ser preenchido

//1 - Representar esse campo nome para o mundo js

let inputNome = document.getElementById("nome");
// console.log(inputNome);
//2 - Associar uma ação a ser realizada ao evento "deixou o campo" 

inputNome.addEventListener('blur',verificaSeCampoDigitado);

//3 - Definir a ação que será executada...
function verificaSeCampoDigitado(){
    if(inputNome.value == ''){
        prompt("Preencha o campo!");
    }
}