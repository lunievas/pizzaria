//CAPTURA DE ELEMENTOS DE INTERESSE PARA O CONSUMO DA API//
const inputCep = document.querySelector("#cep");




//==================================================//

//FUNÇÕES QUE LIDAM COM OS EVENTOS: handlers///
function onInputCepKeyup() {
    if (inputCep.value.length == 9) {
        carregaInfoCepAsync(inputCep.value);
    }

}

//==================================================//
function carregaInfoCep(cep) {

    let url = `https://viacep.com.br/ws/${inputCep.value}/json/`;
    let promiseRes = fetch(url);

    promiseRes.then((response) => {

        let promiseResult = response.json();
        promiseResult.then(
            (resultado) => {
                console.log(resultado)
            }
        )

    }
    )
   
}

//======= MESMA FUNÇÃO ACIMA PORÉM COM ASYNC E AWAIT =======//

async function carregaInfoCepAsync(cep){
    let url = `https://viacep.com.br/ws/${inputCep.value}/json/`;
    let response = await fetch(url);
    let result = await response.json()

    
    console.log(result);

}


//==================================================//
//ASSICIAÇÃO DE EVENTOS E HANDLERS//
inputCep.addEventListener('keyup', onInputCepKeyup);
