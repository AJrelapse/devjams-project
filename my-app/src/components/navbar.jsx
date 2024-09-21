import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Navbar() {
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".custom-navbar");
      if (window.scrollY > 5) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand px-4 mx-4" href="/home">
          AgroPulse{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Pricing
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Prediction
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/tomato">
                    Tomato
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/potato">
                    Potato
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/pepper">
                    Pepper
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex mx-4 px-4" role="search">
            <button className="button1 mx-4 px-4" type="submit">
            <span>Login</span>
            </button>
            <button className="button1 mx-4 px-4" type="submit">
            <span>Sign Up</span>
            </button>

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
