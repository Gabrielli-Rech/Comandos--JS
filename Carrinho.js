// Seletores
const checkboxes = document.querySelectorAll(".beneficios input[type='checkbox']");
const carrinhoLista = document.getElementById("carrinho-lista");
const totalElemento = document.getElementById("total");
const carrinhoIcone = document.querySelector(".bi-cart2");
const dropdownCarrinho = document.getElementById("dropdown-carrinho");
const finalizarCompraBtn = document.getElementById("finalizar-compra");

let total = 0;
let itensNoCarrinho = [];

// Abrir/fechar dropdown ao clicar no ícone do carrinho
carrinhoIcone.addEventListener("click", (event) => {
    dropdownCarrinho.classList.toggle("ativo");
    event.stopPropagation(); // Evita fechar imediatamente ao clicar
});

// Fechar dropdown ao clicar fora dele
document.addEventListener("click", (event) => {
    if (!dropdownCarrinho.contains(event.target) && !carrinhoIcone.contains(event.target)) {
        dropdownCarrinho.classList.remove("ativo");
    }
});

// Atualizar carrinho ao selecionar/desmarcar itens
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
        const itemNome = this.dataset.name;
        const itemValor = parseFloat(this.dataset.value);

        if (this.checked) {
            adicionarItemAoCarrinho(itemNome, itemValor);
        } else {
            removerItemDoCarrinho(itemNome, itemValor);
        }

        atualizarTotal();
        atualizarIconeCarrinho();
    });
});

// Adicionar item ao carrinho
function adicionarItemAoCarrinho(nome, valor) {
    const listItem = document.createElement("li");
    listItem.textContent = `${nome} - R$ ${valor.toFixed(2)}`;
    listItem.dataset.name = nome;
    carrinhoLista.appendChild(listItem);
    
    total += valor;
    itensNoCarrinho.push(nome);
}

// Remover item do carrinho
function removerItemDoCarrinho(nome, valor) {
    const itens = carrinhoLista.querySelectorAll("li");
    itens.forEach(item => {
        if (item.dataset.name === nome) {
            item.remove();
        }
    });

    total -= valor;
    itensNoCarrinho = itensNoCarrinho.filter(item => item !== nome);
}

// Atualizar total exibido no dropdown
function atualizarTotal() {
    totalElemento.textContent = total.toFixed(2);
}

// Atualizar o ícone do carrinho
function atualizarIconeCarrinho() {
    if (itensNoCarrinho.length > 0) {
        carrinhoIcone.classList.add("ativo");
    } else {
        carrinhoIcone.classList.remove("ativo");
    }
}

// Redirecionar para a página do carrinho ao clicar no botão
finalizarCompraBtn.addEventListener("click", () => {
    if (itensNoCarrinho.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
        window.location.href = "carrinho.html"; // Altere para a URL da sua página de carrinho
    }
});
