import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useEffect } from "react";
import { getItems, getTotals } from "./features/cart/cartSlice";
import ModalContainer from "./ModalContainer";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const { isModalOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);
  if (isLoading) {
    return (
      <main>
        <h2 style={{ margin: "auto auto", textAlign: "center" }}>
          Loading ...
        </h2>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
      {isModalOpen && <ModalContainer />}
    </main>
  );
}

export default App;
