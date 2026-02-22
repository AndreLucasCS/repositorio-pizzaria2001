
/*

    Projeto Pizzaria 2001
    Desenvolvido por: André Lucas

*/

// Declarando variáveis e arrays:
let pizza = document.getElementById("pizza-img");

let sabor = 1;

let imagens = [
    "../arquivos/imagens/pizzas/pizzaCalabreza.png",
    "../arquivos/imagens/pizzas/pizzaCarne.png",
    "../arquivos/imagens/pizzas/pizzaFrangoCatupiry.png",
    "../arquivos/imagens/pizzas/pizzaPortuguesa.png",
    "../arquivos/imagens/pizzas/pizzaQuatroQueijo.png",
    "../arquivos/imagens/pizzas/pizzaBananaCanela.png"
]



// Função para trocar a pizza:
function trocarPizza() {

    pizza.style.transform = "translate(-50%, 100vh) rotate(15deg)";


    setTimeout(() => {

    pizza.src = imagens[sabor];
    sabor++;

    if (sabor >= imagens.length) {
        sabor = 0;
    }

    pizza.style.transform = "translate(-50%, 50%) rotate(0deg)";

    }, 1100);




}


// Iniciando o loop de troca de pizza:
setTimeout(trocarPizza, 8000);


// Chamando a função para trocar a pizza a cada 8 segundos:
setInterval(trocarPizza, 8000);

