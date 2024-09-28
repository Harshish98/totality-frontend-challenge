import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { PropertyList } from "./components/PropertyList";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<PropertyList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
