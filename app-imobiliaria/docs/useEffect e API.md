# Effects e chamadas de APIs

Além do estado, um outro conceito importante no React é o de effects. Effects são como efeitos colaterais, ou seja, ações que acontecem no componente quando algum dado é alterado no estado.

A sintaxe do effect é um pouco estranha no começo, mas com o tempo fica fácil de entender.

Para declarar um effect, usamos o `useEffect`.

```javascript
function App() {
  useEffect(() => {
    // ...
  }, [dependencies]);
}
```

# Como funciona o useEffect

O useEffect vai executar a função que você passar como primeiro argumento sempre que alguma variável que você passou como segundo argumento mudar.

```javascript
function funcaoASerExecutada() {
  // ...
}

const [algumEstado, setAlgumEstado] = useState(0);

useEffect(funcaoASerExecutada, [algumEstado]);
```

Se você passar mais valores no array de dependências, o useEffect vai executar a função sempre que qualquer um desses valores mudar.

```javascript
useEffect(funcaoASerExecutada, [algumEstado, outroEstado]);
```

# Regra importante: Effects (e hooks em geral) só podem ser usados dentro de componentes funcionais na função principal.

Os effects devem estar dentro do bloco principal da função do componente.

```javascript
// ✅ certo
function App() {
  useEffect(() => {
    // ...
  }, []);
}

// ❌ errado
function App() {
  if (something) {
    useEffect(() => {
      // ...
    });
  }
}

// ❌ errado
useEffect(() => {
  // ...
}, []);

function App() {}
```

# Chamadas de APIs

Uma funcionalidade comum do useEffect é fazer chamadas de APIs. O mais comum para buscar dados é fazer isso no momento em que a página é carregada.

Para fazer isso, usamos um array vazio como segundo argumento do useEffect.

```javascript
function App() {
  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
}
```

Depois disso, precisamos salvar os dados em algum lugar. Você consegue imaginar como?

Exatamente! Usando o estado.

```javascript
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
}
```
