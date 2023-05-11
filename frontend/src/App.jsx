import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles.scss";
import Welcome from "./pages/Welcome";
import Ocean from "./pages/Ocean";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/ocean" element={<Ocean />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
