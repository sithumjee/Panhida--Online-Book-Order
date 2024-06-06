import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreCntext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { TotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <form className="placeorfer">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>

        <div className="order-fields">
          <input type="text" placeholder="First Name " />
          <input type="text" placeholder="Second Name" />
        </div>
        <input type="email" placeholder="Email " />
        <input type="text" placeholder="House No., Street" />
        <div className="order-fields">
          <input type="text" placeholder="City " />
          <input type="text" placeholder="Province" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>

      <div className="placeorder-right">
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
              <p>{250}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{TotalCartAmount() + 250}</b>
            </div>
          </div>
          <button onClick={() => navigate("/")}>Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
