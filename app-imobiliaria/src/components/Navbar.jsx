import { Home } from "lucide-react";

function Navbar() {
  return (
    <header className="bg-emerald-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Home className="w-6 h-6" />
          <span className="text-xl font-bold">ReactImóveis</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
