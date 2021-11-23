import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import CryptoList from "./components/CryptoList";
import CoinGraph from "./components/CoinGraph";

function App() {
  return (
    <div class="container">
      <div className="crypto__card">
        <Nav />
        <div className="crypto__data">
          <CryptoList />
          <CoinGraph />
        </div>
      </div>
    </div>
  );
}

export default App;
