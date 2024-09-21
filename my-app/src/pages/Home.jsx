import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import Parallax from "../components/parallax";
import Footer from "../components/footer";
import Cards from "../components/cards";
import Yield from "../components/yield";
import Map from "../components/map";
import Weather from "../components/weather";


function Home() {
  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <Cards/>
      <Yield />
      <Map />
      <Weather/>
      <Footer />
    </div>
  );
}

export default Home;
