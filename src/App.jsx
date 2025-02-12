import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  const handleFinishLoading = () => {
    setLoading(false); // ✅ Cambia a la página principal cuando termine el loader
  };

  return loading ? (
    <Loader onFinish={handleFinishLoading} />
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}

export default App;
