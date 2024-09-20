import React, {useState} from "react";
import axios from "axios";
// import cookie from "universal-cookie";

const Login = () => {
  // const cookies = new cookie();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeVal = (e) => { 
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }
  const handleSubmit = async (e) => { 
    e.preventDefault();
    console.log(process.env.BACKEND_URL);
    try {
      const data = {
        email,
        password,
      };
      const response = await axios.post("http://localhost:3001/api/v1/auth/login", data, {withCredentials: true});
      console.log(response.data)
      // cookies.set(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <form className="form">
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email" value={email} name="email" onChange={handleChangeVal}
          />
          <span></span>
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter password" value={password} name="password" onChange={handleChangeVal}
          />
        </div>
        <button type="submit" className="submit" onClick={handleSubmit}>
          Sign in
        </button>

        <p className="signup-link">
          No account?
          <a href="" >Sign up</a>
        </p>
      </form>
    </div>
  );
};



export default Login;
