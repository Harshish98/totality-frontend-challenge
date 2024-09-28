import React, { useContext } from "react";
import { BookingContext } from "../context/BookingProvider";

export const PropertyCard = ({ property, showRemoveButton }) => {
  const { addToCart, removeFromCart } = useContext(BookingContext);

  const { title, description, price, bedrooms, location, amenities, image } =
    property;

  const handleBookNow = () => {
    addToCart(property);
  };
  return (
    <div className="border-2 border-[#12232E] rounded-lg shadow-lg p-4 w-full md:max-w-sm mx-auto mb-6 text-white">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg md:text-xl font-semibold mb-2">{title}</h2>
      <p
        className={`text-gray-400 mb-4 text-sm md:text-base ${
          showRemoveButton ? "hidden md:block" : "block"
        }`}
      >
        {description}
      </p>

      <div className="mb-4 flex justify-between">
        <p>
          <span className="font-semibold text-sm md:text-base">Bedrooms:</span>{" "}
          {bedrooms}
        </p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-[#007CC7]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <p className="text-sm md:text-base">{location}</p>
        </div>
      </div>

      <div
        className={`mb-4 flex justify-between ${
          showRemoveButton ? "hidden md:flex" : "block"
        }`}
      >
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="text-gray-200 bg-[#152836] py-1 px-3 rounded-full text-xs md:text-sm"
          >
            {amenity}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        {showRemoveButton ? (
          <button
            onClick={() => removeFromCart(property.id)}
            className="bg-red-500 text-white h-9 md:h-10 px-4 rounded text-sm md:text-base"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={handleBookNow}
            className="hover:text-white h-9 md:h-10 px-4 rounded hover:bg-blue-600 transition border text-[#007CC7] border-[#007CC7] text-sm md:text-base"
          >
            Book Now
          </button>
        )}
        <p className="text-[#007CC7] text-xl md:text-2xl font-medium">
          ${price}/night
        </p>
      </div>
    </div>
  );
};
