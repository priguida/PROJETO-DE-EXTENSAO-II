document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Exibe uma mensagem de confirmação (pode ser substituído por uma lógica de envio real)
    alert('Mensagem enviada com sucesso! Nome: ' + data.name + ', Email: ' + data.email + ', Mensagem: ' + data.message);

    // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário
  });
});
