import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/signup.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeVal = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:3001/api/v1/auth/signup", {
        name,
        email,
        password,
      }).then((res) => { navigate("/")});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.flexColumn}>
          <label>Name </label>
        </div>
        <div className={styles.inputForm}>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your Name"
            value={name}
            onChange={handleChangeVal}
            name="name"
          />
        </div>
        <div className={styles.flexColumn}>
          <label>Email </label>
        </div>
        <div className={styles.inputForm}>
          <input
            type="email"
            className={styles.input}
            placeholder="Enter your Email"
            value={email}
            onChange={handleChangeVal}
            name="email"
          />
        </div>
        <div className={styles.flexColumn}>
          <label>Password </label>
        </div>
        <div className={styles.inputForm}>
          <input
            type="password"
            className={styles.input}
            placeholder="Enter your Password"
            value={password}
            onChange={handleChangeVal}
            name="password"
          />
        </div>
        <button className={styles.buttonSubmit}>Sign Up</button>
        <p className={styles.p}>
          Already have an account? <span className={styles.span} ><a href="/login">Login</a></span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
