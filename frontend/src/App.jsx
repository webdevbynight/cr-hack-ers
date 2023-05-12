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
  const [showreservation, setShowreservation] = useState(false);
  const handleAddItem = () => {
    console.info("hello");
    setShowreservation(true);
    // setCarts((prev) => {
    //   const isItemInCart = prev.find((item) => item.id === clickedItem.id);
    //   if (isItemInCart) {
    //     return prev.map((item) =>
    //       item.id === clickedItem.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     );
    //   }
    //   return [...prev, { ...clickedItem, quantity: 1 }];
    // });
  };

  const handleTest = (clickedItem) => {
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
              showreservation={showreservation}
              setShowreservation={setShowreservation}
              handleAddItem={handleAddItem}
              handleTest={handleTest}
              handleRemoveItem={handleRemoveItem}
            />
          }
        />
        <Route
          path="/ocean/:id"
          element={
            <Ocean
              showreservation={showreservation}
              setShowreservation={setShowreservation}
              articles={articles}
              carts={carts}
              handleAddItem={handleAddItem}
              handleTest={handleTest}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
