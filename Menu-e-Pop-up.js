// Função para abrir e fechar o menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Função para abrir e fechar o pop-up
function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

// Fechar o pop-up ao clicar fora dele
window.onclick = function (event) {
    const popup = document.getElementById('popup');
    if (event.target === popup) {
        popup.classList.remove('active');
    }
}

// Fechar o menu ao clicar fora dele
document.addEventListener("click", (event) => {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");
    if (sidebar.classList.contains("active") && !sidebar.contains(event.target) && event.target !== menuIcon) {
        sidebar.classList.remove("active");
    }
});