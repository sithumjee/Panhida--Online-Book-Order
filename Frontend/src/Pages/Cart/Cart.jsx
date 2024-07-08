import { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreCntext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, book_list, removeFromCart, TotalCartAmount, url } =
    useContext(StoreContext);

  const navigate = useNavigate();

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

        <div className="card-items-container">
          {book_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <>
                  <div key={index} className="card-items-title card-items-item">
                    <img src={url + "/images/" + item.image} alt="" />
                    <p>{item.name}</p>
                    <p>Rs{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>Rs{item.price * cartItems[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </>
              );
            }
            return null; // Remember to return null if the condition is not met
          })}
        </div>

        <div className="cart-bottom">
          <div className="cart-total">
            <h2>cart-total</h2>
            <div className="qqqq">
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{TotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{Math.round(TotalCartAmount() * 0.2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{TotalCartAmount() + Math.round(TotalCartAmount() * 0.2)}</b>
              </div>
            </div>
            <button onClick={() => navigate("/order")}>
              Proceed to checkout
            </button>
          </div>

          <div className="cart-promoCode">
            <p>Enter the promo code</p>
            <div className="promocode-input">
              <input type="text" placeholder="Enter code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
