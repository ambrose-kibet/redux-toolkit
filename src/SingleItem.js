import React from "react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "./features/cart/cartSlice";
const SingleItem = ({ id, title, price, amount, img }) => {
  const dispatch = useDispatch();
  return (
    <article>
      <div className="container">
        <div className="img-container">
          <img src={img} alt="title" width={"100"} />
        </div>
        <div className="info-container">
          <h5>{title}</h5>
          <h5>${price}</h5>
          <button
            className="remove-btn"
            onClick={() => dispatch(removeItem({ id }))}
          >
            remove
          </button>
        </div>
      </div>
      <div className="amount-container">
        <button className="toggle-btn" onClick={() => dispatch(increase(id))}>
          <BiUpArrow />
        </button>
        <p style={{ marginBottom: "0" }}>{amount}</p>
        <button className="toggle-btn" onClick={() => dispatch(decrease(id))}>
          <BiDownArrow />
        </button>
      </div>
    </article>
  );
};

export default SingleItem;
