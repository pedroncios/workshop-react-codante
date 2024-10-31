# Formulários

O React tem algumas particularidades em relação a formulários, vamos aprender como lidar com elas, implementando a interação do formulário de contato do nosso projeto.

# Formulários controlados x não controlados

Existem duas principais abordagens para lidar com formulários no React:

- **Formulários controlados**: O estado do formulário é gerenciado pelo componente React.
- **Formulários não controlados**: O estado do formulário é gerenciado pelo DOM.

# Formulários não controlados

Essa abordagem é mais próxima do HTML tradicional, onde o estado do formulário é gerenciado pelo DOM. Ela traz algumas vantagens, como a simplicidade e a facilidade de uso, mas também algumas desvantagens, como a dificuldade de validação e a falta de controle sobre o estado do formulário.

```javascript
//src/ContactForm.jsx
function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    alert(`Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

# Formulários controlados

Nesse caso, vamos usar o useState para guardar o estado de cada campo do formulário. Dessa forma, conseguimos ter um controle maior sobre o estado. Por exemplo: podemos fazer validações enquanto o usuário está preenchendo o formulário, podemos fazer consultas na API enquanto ele está digitando, etc. Por outro lado, o código fica um pouco mais complexo e dependendo do form pode ficar mais lento, já que o formulário é renderizado a cada vez que o estado é alterado.

```javascript
//src/ContactForm.jsx
function ContactForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```
