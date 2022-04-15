import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <h3>Redux-toolkit</h3>
      <div className="cart">
        <FaShoppingCart className="cart-icon" />
        <span className="pill">{amount}</span>
      </div>
    </nav>
  );
};

export default Navbar;
