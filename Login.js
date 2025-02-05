// Validar o login (exemplo simples)
document.getElementById('login-form')?.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio do formulário

    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    if (!cpf || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validação simples (isso pode ser substituído por uma validação real)
    if (cpf === '12345678900' && senha === '1234') {
        alert('Login realizado com sucesso!');
        togglePopup(); // Fecha o pop-up após login bem-sucedido
    } else {
        alert('CPF ou senha inválidos.');
    }
});