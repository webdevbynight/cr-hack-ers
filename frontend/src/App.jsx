import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles.scss";
import Welcome from "./pages/Welcome";
import Ocean from "./pages/Ocean";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/ocean/:id" element={<Ocean />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
