import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles.scss";
import Locations from "@components/Locations";
// import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route to="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
