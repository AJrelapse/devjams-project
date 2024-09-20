import React from "react";
import "../App.css";
import "../pages.css";
import Navbar from "../components/navbar";
import Parallax from "../components/parallax";
import Footer from "../components/footer";
import Cards from "../components/cards";
import {useNavigate} from "react-router-dom";


function Home() {
    const history=useNavigate();
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
