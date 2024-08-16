import React, { useContext } from "react";
import "./BookItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreCntext";

// eslint-disable-next-line react/prop-types
const BookItem = ({
  id,
  name,
  authorName,
  description,
  image,
  price,
  category,
}) => {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);
  return (
    <div className="bookItem">
      <div className="bookItem-container">
        <img alt="" className="bookItem-image" src={url + "/images/" + image} />
      </div>

      <div className="addItem">
        <p>Add Item</p>
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className="book-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="bookItem-info">
        <div className="bookItem-name">
          <p>{name}</p>
        </div>

        <p className="bookItem-authorName">{authorName}</p>
        <p className="bookItem-category">{category}</p>

        <p className="bookItem-price">Rs {price}</p>
      </div>
    </div>
  );
};

export default BookItem;
