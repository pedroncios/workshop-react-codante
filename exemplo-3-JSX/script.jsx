// Importa o React diretamente de um CDN
// Não é recomendado usar em produção, somente um exemplo didático
import React from "https://esm.sh/react@18"; // Core do React, utlizado em todas as aplicações React (native, web, etc)
import ReactDOM from "https://esm.sh/react-dom@18"; // Integração do React com o DOM, responsável por renderizar o componente no HTML

// Componente React com JSX
function App() {
  return (
    <h1 id="title">
      Bem vindo ao workshop React,{" "}
      <span id="name" onClick={(ev) => (ev.target.style.color = "red")}>
        @fulano
      </span>
    </h1>
  );
}

const rootElement = ReactDOM.createRoot(document.querySelector("#root"));
rootElement.render(<App />);

/* --------- ATENÇÃO --------- 
  O navegador não entende JSX, então precisamos transpilar o código para que ele seja entendido.
  Para isso utilizamos o Babel:
  
  npx babel script.jsx -o dist/script.js --presets=@babel/preset-react
*/