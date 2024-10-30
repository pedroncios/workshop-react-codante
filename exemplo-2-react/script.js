// Abordagem Declarativa
// Esta abordagem é chamada de Abordagem Declarativa. 
// Em vez de dar instruções passo a passo sobre como manipular o DOM, declaramos como queremos que nossa interface pareça, e o React se encarrega de fazer as atualizações necessárias.

// Importa o React diretamente de um CDN
// Não é recomendado usar em produção, somente um exemplo didático
import React from "https://esm.sh/react@18"; // Core do React, utlizado em todas as aplicações React (native, web, etc)
import ReactDOM from "https://esm.sh/react-dom@18"; // Integração do React com o DOM, responsável por renderizar o componente no HTML

// Componente React sem JSX (somente para exemplo e entender como funciona)
const newH1 = React.createElement(
  "h1", 
  { id: "title" },
  "Bem vindo ao workshop React, ",
  React.createElement(
    "span",
    { id: "name", onClick: (ev) => (ev.target.style.color = "red") },
    "@fulano"
  )
);

// Pega o elemento root do HTML e passa para o React utilizar na renderização
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(newH1);
