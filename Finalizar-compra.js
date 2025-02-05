// Função para validar se todos os campos obrigatórios foram preenchidos
document.querySelector('form').addEventListener('submit', function (event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const logradouro = document.getElementById('logradouro').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const cep = document.getElementById('cep').value;
    const pagamento = document.getElementById('pagamento').value;

    // Verificando se todos os campos obrigatórios estão preenchidos
    if (!nome || !email || !telefone || !logradouro || !numero || !bairro || !cidade || !cep || !pagamento) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Validação do CEP
    if (!/^\d{5}-\d{3}$/.test(cep)) {
        alert('Por favor, insira um CEP válido (xxxxx-xxx).');
        event.preventDefault();
        return;
    }

    // Caso todas as validações passem, o formulário é enviado
    alert('Compra finalizada com sucesso!');
});

// Mostrar os campos de pagamento com base na seleção
document.getElementById('pagamento').addEventListener('change', function () {
    const pagamentoSelecionado = this.value;

    // Esconder todos os campos de pagamento
    document.querySelectorAll('.campo').forEach(function (campo) {
        campo.style.display = 'none';
    });

    // Mostrar os campos correspondentes ao método de pagamento selecionado
    if (pagamentoSelecionado === 'cartao') {
        document.querySelectorAll('.cartao').forEach(function (campo) {
            campo.style.display = 'block';
        });
    } else if (pagamentoSelecionado === 'boleto') {
        document.querySelectorAll('.boleto').forEach(function (campo) {
            campo.style.display = 'block';
        });
    } else if (pagamentoSelecionado === 'pix') {
        document.querySelectorAll('.pix').forEach(function (campo) {
            campo.style.display = 'block';
        });
    }
});