import { createContext, useContext, useEffect, useState } from "react";

const PropertiesContext = createContext();

// Propriedade especial do React "children" é passada automaticamente com o valor dos filhos do componente
export const PropertiesProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);

  // Simula o carregamento de uma API
  useEffect(() => {
    fetch("./src/data/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  return (
    // Tudo que for "filho" do Context pode acessar os dados de contexto
    <PropertiesContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertiesContext.Provider>
  );
};

// hook customizado que retorna o contexto
export function useProperties() {
  const { properties } = useContext(PropertiesContext);
  return properties;
}
