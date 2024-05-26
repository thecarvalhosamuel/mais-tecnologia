const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

function showAlertFormData() {
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const messageValue = messageInput.value;

  alert(
    `Dados enviados\n\nNome: ${nameValue}\nEmail: ${emailValue}\nMensagem: ${messageValue}`
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showAlertFormData();
});
