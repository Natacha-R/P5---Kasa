// Système de routage dynamique

// Importations des dépendances :
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Accommodation from "./pages/Accommodation";
import Error from "./pages/Error";
import Footer from "./components/Footer";

// fonction principale
function App() {
  return (
    <BrowserRouter>
      {/* conteneur qui encapsule l'application */}
      <Header />
      <Routes>
        {/*conteneur qui regroupe toutes les routes de l'application */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
        {/*path="*" fonctionne si jamais l'url ne correspond à rien de déclaré*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App; // permet d'exporter la fonction App afin qu'elle puisse être utilisée ailleurs dans l'application.
