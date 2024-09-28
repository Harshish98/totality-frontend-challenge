import React, { useContext } from "react";
import { BookingContext } from "../context/BookingProvider";
import { useNavigate } from "react-router-dom";
import { PropertyCard } from "./PropertyCard";

export const Cart = () => {
  const { bookedProperties, getTotalCost } = useContext(BookingContext);
  const navigate = useNavigate();

  if (bookedProperties.length === 0) {
    return (
      <p className="text-white text-center text-6xl py-10">
        Your cart is empty.
      </p>
    );
  }

  return (
    <div className="p-6 text-white flex flex-col lg:flex-row xl:justify-center lg:justify-between">
      <div className="order-2 lg:order-none">
        <h2 className="text-lg md:text-2xl font-semibold mb-4">Your Bookings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-3">
          {bookedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              showRemoveButton={true}
            />
          ))}
        </div>
      </div>
      <div className="lg:space-y-4 flex items-center justify-between lg:block mb-8 lg:mb-0">
        <h3 className="md:text-xl md:font-semibold">
          Total Cost: ${getTotalCost()}
        </h3>
        <button
          className="hover:text-white h-9 md:h-10 px-4 rounded text-sm md:text-base hover:bg-blue-600 border text-[#007CC7] border-[#007CC7]"
          onClick={() => navigate("/checkout")}
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};
