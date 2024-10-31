import { MapPin } from "lucide-react";

function PropertyCard({ name, image, description, location, price, featured }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-emerald-400">
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>

        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        <p className="text-gray-600 mb-2">{description}</p>

        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="h-4 w-4 text-emerald-500" />
          <span className="text-sm text-gray-600">{location}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-emerald-600">
            R${price.toLocaleString()}
          </span>

          {featured && (
            <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full">
              Destaque
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
