import React, { useState } from "react";

export const BookingContext = React.createContext();

export const BookingProvider = ({ children }) => {
  const [bookedProperties, setBookedProperties] = useState([]);

  const addToCart = (property) => {
    setBookedProperties((prev) => [...prev, property]);
  };

  const removeFromCart = (id) => {
    setBookedProperties((prev) =>
      prev.filter((property) => property.id !== id)
    );
  };

  const clearCart = () => {
    setBookedProperties([]);
  };

  const getTotalCost = () => {
    return bookedProperties.reduce(
      (total, property) => total + property.price,
      0
    );
  };

  return (
    <BookingContext.Provider
      value={{
        bookedProperties,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalCost,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
