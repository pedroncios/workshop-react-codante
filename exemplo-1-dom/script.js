// Abordagem imperativa
// É como se você estivesse "mandando" o browser fazer o que você quer

const newH1 = document.createElement("h1");
newH1.textContent = "Bem vindo ao workshop React, ";

const newSpan = document.createElement("span");
newSpan.textContent = "@fulano";

newSpan.addEventListener("click", () => {
  newSpan.style.color = "red";
});

newH1.appendChild(newSpan);
document.body.appendChild(newH1);
