import React from "react";
import "../styles/App.css";
import "../styles/pages.css";
import Navbar from "../components/navbar";
import Parallax from "../components/parallax";
import Footer from "../components/footer";
import Cards from "../components/cards";
import {useNavigate} from "react-router-dom";


function Home() {
  return (
    <div className="App">
      <Navbar />
      <Parallax />
      <Cards/>
      <Footer />
    </div>
  );
}

export default Home;
