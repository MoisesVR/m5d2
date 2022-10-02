import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContextApiProvider from "./context/ContextApiProvider";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { data } from "autoprefixer";

export default function App() {

  const [images, setImages] = useState({
    data: []
  });

  useEffect(() => {
    const jsonData = async () => {
      const response = await axios.get("../fotos.json");
      setImages({ data: response.data.photos });
      localStorage.setItem('heartList', JSON.stringify(response.data.photos));
    };
    jsonData();
  }, []);

  return (
    <div className="App">
      <ContextApiProvider.Provider value={images}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </ContextApiProvider.Provider>
    </div>
  );
}
