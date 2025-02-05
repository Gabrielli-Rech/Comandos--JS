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

// Atualizar total exibido no dropdown
function atualizarTotal() {
    totalElemento.textContent = total.toFixed(2);
}