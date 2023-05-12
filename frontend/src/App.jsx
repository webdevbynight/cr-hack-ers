import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import Ocean from "./pages/Ocean";
import ScrollToTop from "./components/ScrollToTop";
import Basket from "./pages/Basket";
import articles from "./data/articles.json";
import "./styles.scss";

function App() {
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
            />
          }
        />
        <Route
          path="/ocean/:id"
          element={
            <Ocean
              articles={articles}
              carts={carts}
              handleAddItem={handleAddItem}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
