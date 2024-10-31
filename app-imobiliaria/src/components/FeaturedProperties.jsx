import { useProperties } from "../providers/PropertiesProvider";
import NumberOfProperties from "./NumberOfProperties";
import PropertyCard from "./PropertyCard";

function FeaturedProperties() {
  const properties = useProperties();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Imóveis em Destaque <NumberOfProperties />
        </h2>
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
