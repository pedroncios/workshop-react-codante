// Importa o React diretamente de um CDN
// Não é recomendado usar em produção, somente um exemplo didático
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _httpsEsmShReact18 = require("https://esm.sh/react@18");

var _httpsEsmShReact182 = _interopRequireDefault(_httpsEsmShReact18);

// Core do React, utlizado em todas as aplicações React (native, web, etc)

var _httpsEsmShReactDom18 = require("https://esm.sh/react-dom@18");

var _httpsEsmShReactDom182 = _interopRequireDefault(_httpsEsmShReactDom18);

// Integração do React com o DOM, responsável por renderizar o componente no HTML

// Componente React com JSX
function App() {
  return _httpsEsmShReact182["default"].createElement(
    "h1",
    { id: "title" },
    "Bem vindo ao workshop React,",
    " ",
    _httpsEsmShReact182["default"].createElement(
      "span",
      { id: "name", onClick: function (ev) {
          return ev.target.style.color = "red";
        } },
      "@fulano"
    )
  );
}

var rootElement = _httpsEsmShReactDom182["default"].createRoot(document.querySelector("#root"));
rootElement.render(_httpsEsmShReact182["default"].createElement(App, null));

/* --------- ATENÇÃO --------- 
  O navegador não entende JSX, então precisamos transpilar o código para que ele seja entendido.
  Para isso utilizamos o Babel:
  
  npx babel script.jsx -o dist/script.js --presets=@babel/preset-react
*/
