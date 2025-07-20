import React from "react";
import { PropertyCardProps } from "@/interfaces";
import { Star } from "lucide-react";

const PropertyCard: React.FC<PropertyCardProps> = ({ name, image, price, rating }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition duration-200 bg-white">
      <img src={image} alt={name} className="h-48 w-full object-cover" />

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold truncate">{name}</h3>
        <p className="text-blue-600 font-medium">{price}</p>

        <div className="flex items-center text-sm text-gray-600">
          <Star className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" />
          <span>{rating.toFixed(1)} / 5</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
