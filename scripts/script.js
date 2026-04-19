
/*

    Projeto Pizzaria 2001
    Desenvolvido por: André Lucas

*/

// Declarando variáveis pincipais:
const pizza = document.getElementById("pizza-img");
const logo = document.getElementById("logo");
const mensagem = document.getElementById("mensagem-inicio");


//--------------------------------------

// ADAPTAÇÕES PARA TELAS PEQUENAS:


// Função para adaptar os elementos para que não fiquem desproporcionais em telas pequenas:
function adaptarElementos() {

    if (window.innerWidth <= 860) {
        pizza.style.width = "470px";
        logo.style.width = "215px";
        logo.style.left = "calc(50% - 107.5px)";
        mensagem.style.fontSize = "6px";
    } else {
        pizza.style.width = "55vw";
        logo.style.width = "25vw";
    } 

    // Variáveis de cálculo:
    let cicunferencia = pizza.getBoundingClientRect();
    let quadrilatero = mensagem.getBoundingClientRect();

    let raio = (cicunferencia.width / 2) + 30;
    let d = (cicunferencia.left + raio) - (quadrilatero.width + 15);
    let altura = Math.round(Math.sqrt(Math.pow(raio, 2) - Math.pow(d, 2)));

    


    //Ajustando a posição da mensagem:
    if (quadrilatero.left + quadrilatero.width >= cicunferencia.left - 17 && altura >= 17) {

        mensagem.style.bottom = `${altura - altura*0.05}px`;


    } else {

        mensagem.style.bottom = "17px";
        mensagem.style.fontSize = "8px";
    }


};

// Chamando a função para adaptar os elementos:
window.addEventListener("resize", adaptarElementos);
adaptarElementos();



//--------------------------------------

// ANIMAÇÃO DE TROCA DE PIZZA:


// Declarando variáveis e arrays:
let sabor = 1;
let imagens = [
    "../arquivos/imagens/pizzas/pizzaCalabreza.png",
    "../arquivos/imagens/pizzas/pizzaCarne.png",
    "../arquivos/imagens/pizzas/pizzaFrangoCatupiry.png",
    "../arquivos/imagens/pizzas/pizzaPortuguesa.png",
    "../arquivos/imagens/pizzas/pizzaQuatroQueijo.png",
    "../arquivos/imagens/pizzas/pizzaBananaCanela.png"
];


let alturaMensagem;

// Função para trocar a pizza:
function trocarPizza() {

    alturaMensagem = mensagem.style.bottom;
    console.log(alturaMensagem);
    
    if (saida === false) {

        pizza.style.transform = "translate(-50%, 100vh) rotate(15deg)";
        logo.style.transform = "translate(0, 19vh) scale(1.1)";
        mensagem.style.bottom = "17px";


        setTimeout(() => {

            pizza.src = imagens[sabor];
            sabor++;

            if (sabor >= imagens.length) {
                sabor = 0;
            }

            pizza.style.transform = "translate(-50%, 50%) rotate(0deg)";
            logo.style.transform = "translate(0, 0vh) scale(1)";
            mensagem.style.bottom = alturaMensagem;
        

        }, 1100);
    }



}

// Chamando a função para trocar a pizza a cada 8 segundos:
setInterval(trocarPizza, 6500);


//--------------------------------------

// TROCA DE PÁGINA:


// Declarando variáveis e arrays:
let saida = false;

// Função para trocar:
function trocarPagina() {

    pizza.style.transform = "translate(-50%, 100vh) rotate(15deg)";
    logo.style.transition = "opacity 0.7s ease-in-out";
    logo.style.opacity = "0";
    mensagem.style.transition = "opacity 0.8s ease-in-out";
    mensagem.style.opacity = "0";
    saida = true;

    setTimeout(() => {
        window.location.href = "";
    }, 1200);

};

// Chamando a função:
document.body.addEventListener("keydown", trocarPagina);
document.body.addEventListener("touchstart", trocarPagina);