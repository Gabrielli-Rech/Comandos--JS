// Aviso de Mensagem Enviada ou Não
document.getElementById('form-contato')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita envio padrão do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Verificar campos
    if (!nome || !validarEmail(email) || !validarTelefone(telefone) || !mensagem) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // Simular envio
    alert('Mensagem enviada com sucesso!');
    event.target.reset(); // Limpa o formulário
});
