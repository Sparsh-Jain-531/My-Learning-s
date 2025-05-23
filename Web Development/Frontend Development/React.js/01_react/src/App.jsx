import { Route, Routes } from "react-router-dom";
import Navbar_03 from "./components/Navbar_03";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Form_Handling_02 from "./components/Form_Handling_02";

function App() {
  return (
    <>
      <Navbar_03 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Form_Handling_02 />} />
      </Routes>
    </>
  );
}

export default App;
