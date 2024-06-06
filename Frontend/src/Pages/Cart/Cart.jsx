import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreCntext";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          if (cartItems[index.id] > 0) {
            return (
              <>
                <div className="card-items-title card-items-item">
                  <p>{item.name}</p>
                </div>
                ;
              </>
            );
          }
        })}
        <hr />
      </div>
    </div>
  );
};

export default Cart;
