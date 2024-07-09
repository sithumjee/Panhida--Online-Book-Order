import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [book_list, setBookList] = useState([]);
  const [school_book, setSchoolBooks] = useState([]);
  const [pastPapers_list, setPastPapers] = useState([]);

  const addToCart = async (itemId) => {
    if (cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (itemId) => {
    if (cartItems[itemId] === 1) {
      setCartItems((prev) => {
        const newCartItems = { ...prev };
        delete newCartItems[itemId];
        return newCartItems;
      });
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const TotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = book_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += parseFloat(itemInfo.price) * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchBookList = async () => {
    const response = await axios.get(url + "/api/book/list");
    setBookList(response.data.data);
  };
  const fetchSchoolBookList = async () => {
    const response = await axios.get(url + "/api/schoolbooks/listschoolbook");
    setSchoolBooks(response.data.data);
  };
  const fetchPastPapersList = async () => {
    const response = await axios.get(url + "/api/pastpapers/listPastPapers");
    setPastPapers(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchBookList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadSchoolBooks() {
      await fetchSchoolBookList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadSchoolBooks();
  }, []);

  useEffect(() => {
    async function loadPastPapers() {
      await fetchPastPapersList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadPastPapers();
  }, []);

  const contextValue = {
    book_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    TotalCartAmount,
    url,
    token,
    setToken,
    school_book,
    pastPapers_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
