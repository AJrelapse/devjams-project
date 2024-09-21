import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/login.module.css";  // Import CSS module

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeVal = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email, password };
      const response = await axios.post(
        "http://localhost:3001/api/v1/auth/login",
        data,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["login-container"]}>
      <form className={styles["login-form"]}>
        <p className={styles["login-form-title"]}>Sign in to your account</p>
        <div className={styles["input-container"]}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={handleChangeVal}
            className={styles["login-input"]}
          />
        </div>
        <div className={styles["input-container"]}>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            name="password"
            onChange={handleChangeVal}
            className={styles["login-input"]}
          />
        </div>
        <button
          type="submit"
          className={styles["login-submit"]}
          onClick={handleSubmit}
        >
          Sign in
        </button>

        <p className={styles["signup-link"]}>
          No account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
