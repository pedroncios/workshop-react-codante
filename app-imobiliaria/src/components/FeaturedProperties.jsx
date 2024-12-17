import { useContext } from "react";
import {
  PropertiesContext,
  useProperties,
} from "../providers/PropertiesProvider";
import NumberOfProperties from "./NumberOfProperties";
import PropertyCard from "./PropertyCard";

function FeaturedProperties() {
  const properties = useProperties();
  const { searchText, setSearchText } = useContext(PropertiesContext);

  return (
    <section id="section-properties" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between space-x-2 mb-8">
          <h2 className="text-3xl font-bold  text-center text-gray-700">
            Imóveis em Destaque <NumberOfProperties />
          </h2>
          <input
            id="filtro"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Buscar"
            className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-emerald-400 focus:border-emerald-400"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {properties.map((p) => (
            <PropertyCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
