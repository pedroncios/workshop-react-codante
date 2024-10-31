import { useState } from "react";
import ContactForm from "./components/ContactForm";
import FeaturedProperties from "./components/FeaturedProperties";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

// Dados dos imóveis (mock)
const initialProperties = [
  {
    id: 1,
    name: "Apartamento Moderno",
    description: "Um belo apartamento moderno no centro da cidade",
    location: "Centro",
    price: 250000,
    image: "src/assets/properties/1.png",
    featured: true,
  },
  {
    id: 2,
    name: "Vila na Praia",
    description: "Vila luxuosa com vista deslumbrante para o oceano",
    location: "Área Costeira",
    price: 750000,
    image: "src/assets/properties/2.png",
    featured: true,
  },
  {
    id: 3,
    name: "Casa de Campo",
    description: "Espaçosa casa familiar com um grande quintal",
    location: "Interior",
    price: 450000,
    image: "src/assets/properties/3.png",
    featured: false,
  },
];

function App() {
  const [properties, setProperties] = useState(initialProperties);

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProperties properties={properties} />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
