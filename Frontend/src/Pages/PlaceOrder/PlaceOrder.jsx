import { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreCntext";
import axios from "axios";

const PlaceOrder = () => {
  const { TotalCartAmount, food_list, cartItems, url, token } =
    useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    province: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    const orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: TotalCartAmount() + Math.round(TotalCartAmount() * 0.2),
    };

    try {
      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });
      if (response.data.success) {
        // Assuming the server responds with a Stripe session URL
        window.location.replace(response.data.session_url);
      } else {
        // Display a more user-friendly error message
        alert(
          "An error occurred while placing the order. Please try again later."
        );
        console.error("Error placing order:", response.data.error);
      }
    } catch (error) {
      // Handle any other errors that may occur
      alert("An unexpected error occurred. Please try again later.");
      console.error("Error placing order:", error);
    }
  };

  return (
    <form onSubmit={placeOrder} className="placeorfer">
      <div className="placeorder-left">
        <p className="title">Delivery Information</p>

        <div className="order-fields">
          <input
            required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name "
          />
          <input
            required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Second Name"
          />
        </div>
        <input
          required
          name="email"
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          placeholder="Email "
        />
        <input
          required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="House No., Street"
        />
        <div className="order-fields">
          <input
            required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City "
          />
          <input
            required
            name="province"
            onChange={onChangeHandler}
            value={data.province}
            type="text"
            placeholder="Province"
          />
        </div>
        <input
          required
          name="phone"
          onChange={onChangeHandler}
          value={data.phone}
          type="text"
          placeholder="Phone Number"
        />
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
              <p>{Math.round(TotalCartAmount() * 0.2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{TotalCartAmount() + Math.round(TotalCartAmount() * 0.2)}</b>
            </div>
          </div>
          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
