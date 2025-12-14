const btn = document.querySelector("#submitbtn");
const resultado = document.querySelector("#resultado");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  // Salvar infos no console
  const nome = document.querySelector("#nome").value.trim();
  const sobrenome = document.querySelector("#sobrenome").value.trim();
  const email = document.querySelector("#email").value.trim();

  if (!nome || !sobrenome || !email) {
    alert("Preencha todos os campos obrigatórios.");
    return;
  }

  console.table({ nome, sobrenome, email });

  // Mostrar mensagem no h4 com id="resultado"
  resultado.textContent = `Olá ${nome} ${sobrenome}, seja bem vindo!`;

  // Sistema para enviar mensagem pro whatsapp abaixo 
  const telefone = "5511947576485";
  const mensagem = `Olá, tudo bem? Sou o ${nome} ${sobrenome}, meu e-mail para contato é: ${email}. Eu gostaria de mais informações referentes a Marinho Advocacia!`;

  const url = `https://api.whatsapp.com/send/?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});
