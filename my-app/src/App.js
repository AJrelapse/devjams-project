import React from "react";
import './App.css';
import Navbar from "./components/navbar";
import Parallax from "./components/parallax";
import Footer from "./components/footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <Footer />
    </div>
  );
}

export default App;
