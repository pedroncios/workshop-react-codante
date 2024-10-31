import { createContext, useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import FeaturedProperties from "./components/FeaturedProperties";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// Exporta para poder acessar de outros arquivos
export const PropertiesContext = createContext();

function App() {
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
    <PropertiesContext.Provider value={{ properties }}>
      <div>
        <Navbar />
        <Hero />
        <FeaturedProperties properties={properties} />
        <ContactForm />
        <Footer />
      </div>
    </PropertiesContext.Provider>
  );
}

export default App;
