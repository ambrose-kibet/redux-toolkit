import React from "react";
import SingleItem from "./SingleItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "./features/modal/modalSlice";
const CartContainer = () => {
  const { cartItems: data, total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  if (data.length < 1) {
    return <h2 style={{ textAlign: "center" }}>Your Cart is Empty</h2>;
  }
  return (
    <section>
      <h2 style={{ textAlign: "center" }}> Your cart</h2>
      {data.map((item) => (
        <SingleItem key={item.id} {...item} />
      ))}
      <hr />
      <h5 className="total">
        Total: <span>${total.toFixed(2)}</span>
      </h5>
      <div className="clear-container">
        <button className=" clear-btn" onClick={() => dispatch(openModal())}>
          Clear Cart
        </button>
      </div>
    </section>
  );
};

export default CartContainer;
