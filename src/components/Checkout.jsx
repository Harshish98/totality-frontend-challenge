import React, { useContext, useState } from "react";
import { BookingContext } from "../context/BookingProvider";

export const Checkout = () => {
  const { getTotalCost, clearCart } = useContext(BookingContext);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "Cash on Delivery",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <h2 className="text-white text-center text-4xl md:text-6xl py-10">
        Thank you for your booking!
      </h2>
    );
  }

  return (
    <div className="p-6 text-white max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Checkout</h2>
      <p>
        Total Cost:{" "}
        <span className="text-[#007CC7] font-semibold text-xl">
          ${getTotalCost()}
        </span>
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm md:text-base">Name</label>
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={handleChange}
            placeholder="Enter Your Full Name"
            className="border p-2 w-full bg-[#152836] border-none rounded text-sm md:text-base"
            required
          />
        </div>
        <div>
          <label className="block text-sm md:text-base">Email</label>
          <input
            type="email"
            name="email"
            value={details.email}
            onChange={handleChange}
            placeholder="Enter Your Email Address"
            className="border p-2 w-full bg-[#152836] border-none rounded text-sm md:text-base"
            required
          />
        </div>
        <div>
          <label className="block text-sm md:text-base">Address</label>
          <input
            type="text"
            name="address"
            value={details.address}
            onChange={handleChange}
            placeholder="Enter Your Address"
            className="border p-2 w-full bg-[#152836] border-none rounded text-sm md:text-base"
            required
          />
        </div>
        <div>
          <label className="block text-sm md:text-base">Payment Info</label>
          <select
            name="paymentMethod"
            value={details.paymentMethod}
            onChange={handleChange}
            className="border p-2 w-full bg-[#152836] border-none rounded text-sm md:text-base"
            required
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Online">Online</option>
          </select>
        </div>
        <button
          type="submit"
          className="hover:text-white h-9 md:h-10 px-4 rounded w-full hover:bg-blue-600 transition border text-[#007CC7] border-[#007CC7] text-sm md:text-base"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};
