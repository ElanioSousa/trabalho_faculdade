// Aguarda o carregamento completo do documento
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o formulário de contato
    const formContato = document.getElementById("formContato");

    // Verifica se o formulário existe na página atual
    if (formContato) {

        formContato.addEventListener("submit", function (evento) {
            evento.preventDefault();

            // Captura os campos do formulário
            const nome = document.getElementById("nome");
            const email = document.getElementById("email");
            const mensagem = document.getElementById("mensagem");

            // Captura os elementos de erro
            const erroNome = document.getElementById("erroNome");
            const erroEmail = document.getElementById("erroEmail");
            const erroMensagem = document.getElementById("erroMensagem");
            const mensagemSucesso = document.getElementById("mensagemSucesso");

            // Limpa mensagens anteriores
            erroNome.textContent = "";
            erroEmail.textContent = "";
            erroMensagem.textContent = "";
            mensagemSucesso.textContent = "";

            let formularioValido = true;

            // Validação do campo nome
            if (nome.value.trim() === "") {
                erroNome.textContent = "Por favor, digite seu nome.";
                formularioValido = false;
            }

            // Validação do campo e-mail
            if (email.value.trim() === "") {
                erroEmail.textContent = "Por favor, digite seu e-mail.";
                formularioValido = false;
            } else if (!validarEmail(email.value)) {
                erroEmail.textContent = "Digite um e-mail válido. Exemplo: usuario@dominio.com";
                formularioValido = false;
            }

            // Validação do campo mensagem
            if (mensagem.value.trim() === "") {
                erroMensagem.textContent = "Por favor, digite sua mensagem.";
                formularioValido = false;
            }

            // Simulação de envio
            if (formularioValido) {
                mensagemSucesso.textContent = "Mensagem enviada com sucesso!";

                // Limpa os campos do formulário
                formContato.reset();

                // Também exibe um alerta de confirmação
                alert("Mensagem enviada com sucesso!");
            }
        });
    }

});

// Função para validar o formato do e-mail
function validarEmail(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padraoEmail.test(email);
}