import React from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/common/PropertyCard";
import { FILTERS, PROPERTYLISTINGSAMPLE, HERO_IMAGE } from "@/constants";

const HERO_IMAGE = ;
const filters = ["Top Villa", "Self Checkin", "Beachfront", "Countryside", "City View"];
const [activeFilter, setActiveFilter] = useState<string>("");


const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        <Image
          src={HERO_IMAGE}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute z-10 text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-8 px-4 md:px-16 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Popular Filters</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="py-8 px-4 md:px-16">
        <h2 className="text-2xl font-semibold mb-6">Property Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              name={property.name}
              image={property.image}
              price={property.price}
              rating={property.rating}
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
function useState<T>(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}

