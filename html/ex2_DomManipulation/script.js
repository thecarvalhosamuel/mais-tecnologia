document.getElementById("handleMessage").addEventListener("click", function () {
  document.getElementById("message").textContent =
    "Este é um exemplo de manipulação do DOM.";
});

document.getElementById("handleReset").addEventListener("click", function () {
  document.getElementById("message").textContent = "Olá Mundo!";
});
