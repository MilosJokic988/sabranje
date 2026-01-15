import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Stranice
import Home from "./pages/Home";
import Podcast from "./pages/Podcast";
import Politika from "./pages/Politika";
import Sport from "./pages/Sport";
import Novosti from "./pages/Novosti";
import Zabava from "./pages/Zabava";
import Nauka from "./pages/Nauka";
import Apologetika from "./pages/Apologetika";
import Manifest from "./pages/Manifest";

import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulacija učitavanja
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/politika" element={<Politika />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/novosti" element={<Novosti />} />
          <Route path="/zabava" element={<Zabava />} />
          <Route path="/nauka" element={<Nauka />} />
          <Route path="/apologetika" element={<Apologetika />} />
          <Route path="/manifest" element={<Manifest />} />

          {/* fallback 404 */}
          <Route path="*" element={<h2 style={{ padding: "2rem" }}>Stranica nije pronađena</h2>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
