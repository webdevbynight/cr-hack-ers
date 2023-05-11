import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Welcome from "./pages/Welcome";
import Basket from "./pages/Basket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
