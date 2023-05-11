import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Ocean from "./pages/Ocean";
import ScrollToTop from "./components/ScrollToTop";
import Basket from "./pages/Basket";
import "./styles.scss";

function App() {
  const products = [
    {
      id: 1,
      title: "salut",
      img: "",
      price: 34,
    },
    {
      id: 2,
      title: "robert",
      img: "",
      price: 54,
    },
  ];
  const [carts, setCarts] = useState([]);

  const handleAddItem = (clickedItem) => {
    setCarts((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };

  const handleRemoveItem = (clickedItem) => {
    setCarts((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === clickedItem.id) {
          if (item.quantity === 1) return ack;
          return [...ack, { ...item, quantity: item.quantity - 1 }];
        }
        return [...ack, item];
      }, [])
    );
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/basket"
          element={
            <Basket
              carts={carts}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              products={products}
            />
          }
        />
        <Route path="/ocean/:id" element={<Ocean />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
