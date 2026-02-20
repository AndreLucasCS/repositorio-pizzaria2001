
let pizza = document.getElementById("pizza-img");

let sabor = 1;

function trocarPizza() {

    pizza.style.transform = "translate(-50%, 100vh) rotate(15deg)";

    setTimeout(() => {

        switch (sabor) {
        case 0:

            pizza.src = "../arquivos/imagens/pizzas/pizzaCalabresa.png";
            break;

        case 1:
            pizza.src = "../arquivos/imagens/pizzas/pizzaCarne.png";
            break;

        case 2:
            pizza.src = "../arquivos/imagens/pizzas/pizzaFrangoCatupiry.png";
            break;

        case 3:
            pizza.src = "../arquivos/imagens/pizzas/pizzaPortuguesa.png";
            break;

        case 4:
            pizza.src = "../arquivos/imagens/pizzas/pizzaQuatroQueijo.png";
            break;

        case 5:
            pizza.src = "../arquivos/imagens/pizzas/pizzaBananaCanela.png";
            break;

        case 6:
            pizza.src = "../arquivos/imagens/pizzas/pizzaCalabreza.png";

            sabor = 1;
            break;
    }

    sabor++;


    pizza.style.transform = "translate(-50%, 50%) rotate(0deg)";

    }, 1100);


}


setInterval(trocarPizza, 8000);

trocarPizza();