import { Home, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-emerald-500 text-white px-4 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Home className="h-6 w-6" />
          <span className="text-xl font-bold">ReactImóveis</span>
        </div>

        <div className="flex space-x-4">
          <a href="#" className="flex items-center space-x-2 hover:underline">
            <Mail className="w-4 h-4" />
            <span>contato@reactimoveis.com</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:underline">
            <Phone className="w-4 h-4" />
            <span>+55 (11) 1234-5678</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
