//  const subtrair = document.querySelector("#subtrair")
//  const somar = document.querySelector("#somar")


const controle = document.querySelectorAll ("[data-controle]")

    controle.forEach( (elemento) =>{
        elemento.addEventListener("click" , (evento) => {
           manipulaDados(evento.target.dataset.controle , evento.target.parentNode)
        })
    })

function manipulaDados (operacao , controle){
    const peca = controle.querySelector("[data-contador]")

    if (operacao === "-"){
        peca.value = parseInt (peca.value) -1
    } else {
        peca.value = parseInt (peca.value) +1
    }
}





























// var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"];
// var pos = lista.indexOf("vermelho")
// lista.splice(1 , 1)
//     console.log(lista)  ***exercicio***   


















/*
function dizOi(nome) {
    console.log ('oi' + nome)
    console.log('Bem-vindo ao Robotron! ')
}

dizOi("felipe") */
