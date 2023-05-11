// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Locations from "@components/Locations";
// import Welcome from "./pages/Welcome";

function App() {
  return (
    <Locations />
    // <BrowserRouter>
    //   <Routes>
    //     <Route to="/" element={<Welcome />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
