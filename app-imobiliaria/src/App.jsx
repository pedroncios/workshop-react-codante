import ContactForm from "./components/ContactForm";
import FeaturedProperties from "./components/FeaturedProperties";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { PropertiesProvider } from "./providers/PropertiesProvider";

function App() {
  return (
    <PropertiesProvider>
      <div>
        <Navbar />
        <Hero />
        <FeaturedProperties />
        <ContactForm />
        <Footer />
      </div>
    </PropertiesProvider>
  );
}

export default App;
