import React from "react";
import './App.css';
import './pages.css'
import Navbar from "./components/navbar";
import Parallax from "./components/parallax";
import Footer from "./components/footer";
import Login from "./pages/login"
import Signup from "./pages/signup"

function App() {

  return (
    <div className="App">
      {/* <Navbar />
      <Parallax />
      <Footer /> */}
      <Login />
      <Signup/>
    </div>
  );
}

export default App;
