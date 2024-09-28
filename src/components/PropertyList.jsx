import React, { useState } from "react";
import { PropertyCard } from "./PropertyCard";
import properties from "./Properties";

export const PropertyList = () => {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
  });
  const [filterButton, setFilterButton] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProperties = properties.filter((property) => {
    const matchesLocation =
      filters.location === "" ||
      property.location.toLowerCase().includes(filters.location.toLowerCase());
    const matchesMinPrice =
      filters.minPrice === "" || property.price >= Number(filters.minPrice);
    const matchesMaxPrice =
      filters.maxPrice === "" || property.price <= Number(filters.maxPrice);
    const matchesBedrooms =
      filters.bedrooms === "" || property.bedrooms === Number(filters.bedrooms);

    return (
      matchesLocation && matchesMinPrice && matchesMaxPrice && matchesBedrooms
    );
  });

  return (
    <div className="container mx-auto p-4 flex justify-between gap-4">
      <div
        className={`mb-6 bg-[#071620] p-4 text-white xl:basis-1/4 lg:basis-1/3 ${
          showFilters
            ? "absolute top-0 left-0 h-screen w-4/5 md:w-2/5"
            : "hidden"
        } lg:block`}
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4 border-b">
          Filter Properties
        </h2>
        <div className="space-y-4">
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="Location"
            className="rounded p-2 bg-[#152836] w-full text-sm"
          />
          <div className="flex gap-4">
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              placeholder="Min Price"
              className="rounded p-2 bg-[#152836] w-full text-sm"
            />
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              placeholder="Max Price"
              className="rounded p-2 bg-[#152836] w-full text-sm"
            />
          </div>
          <input
            type="number"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
            placeholder="Bedrooms"
            className="rounded p-2 bg-[#152836] w-full text-sm"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#007CC7] text-5xl md:text-6xl text-center mb-4 md:mb-8">
            Properties
          </h1>
          <button
            className={`border border-[#4DA8DA] w-8 h-8 md:h-9 md:w-9 flex items-center justify-center rounded ${
              filterButton ? "bg-[#4DA8DA]" : "bg-[#0B0C10]"
            } lg:hidden `}
            onClick={() => {
              setShowFilters(!showFilters);
              setFilterButton(!filterButton);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              h
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`size-6 ${
                filterButton ? "text-[#0B0C10]" : "text-[#4DA8DA]"
              }`}
            >
              <path
                fillRule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              showRemoveButton={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
