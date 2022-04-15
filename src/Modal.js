import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./features/cart/cartSlice";
import { closeModal } from "./features/modal/modalSlice";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <h4>Are you sure you want to clear your cart ?</h4>
      <div className="modal-btn">
        <button className="cancel" onClick={() => dispatch(closeModal())}>
          Cancel
        </button>
        <button
          className="confirm"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Modal;
