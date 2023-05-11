import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Welcome from "./pages/Welcome";
import Ocean from "./pages/Ocean";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Welcome />} />
        <Route path="/ocean" element={<Ocean />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
