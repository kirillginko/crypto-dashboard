import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import CryptoList from "./components/CryptoList";

function App() {
  return (
    <div class="container">
      <div className="crypto__card">
        <Nav />
        <CryptoList />
      </div>
    </div>
  );
}

export default App;
