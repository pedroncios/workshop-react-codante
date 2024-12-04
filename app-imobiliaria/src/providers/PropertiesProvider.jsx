import { createContext, useContext, useEffect, useState } from "react";

export const PropertiesContext = createContext();

// Propriedade especial do React "children" é passada automaticamente com o valor dos filhos do componente
export const PropertiesProvider = ({ children }) => {
  const [propertiesComplete, setPropertiesComplete] = useState([]);
  const [properties, setProperties] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Simula o carregamento de uma API
  useEffect(() => {
    fetch("data/properties.json")
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setPropertiesComplete(data);
      });
  }, []);

  // Filtro de propriedades
  useEffect(() => {
    if (searchText == "") {
      setProperties(propertiesComplete); // todas as propriedades
      return;
    }

    setProperties(
      properties.filter((p) => {
        return (
          p.name.toLowerCase().includes(searchText.toLowerCase()) ||
          p.description.toLowerCase().includes(searchText.toLowerCase()) ||
          p.location.toLowerCase().includes(searchText.toLowerCase())
        );
      }),
    );
  }, [searchText]);

  return (
    // Tudo que for "filho" do Context pode acessar os dados de contexto
    <PropertiesContext.Provider
      value={{ properties, searchText, setSearchText }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};

// hook customizado que retorna o contexto
export function useProperties() {
  const { properties } = useContext(PropertiesContext);
  return properties;
}
