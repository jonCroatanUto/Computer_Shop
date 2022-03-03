import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NavbarComp from "./components/Navbar/NavbarComp";
import StorageContext from "./context";
function App() {
  const [readLocalStorage, setReadLocalStorage] = useState(false);

  function toogleReadLocalStorage() {
    setReadLocalStorage((readLocalStorage) =>
      readLocalStorage === false ? true : false
    );
  }

  return (
    <>
      <StorageContext.Provider
        value={{
          readLocalStorage,

          toogleReadLocalStorage,
        }}
      >
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </StorageContext.Provider>
    </>
  );
}

export default App;
