import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { login, loginSuccess } from "../../Redux/Auth/action";
import { useDispatch } from "react-redux";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    
    const payload = {
      username:email,
      password,
    };
    axios
      .post(`http://localhost:8080/user/login`, payload)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", email);
        dispatch(loginSuccess(res.data));
        if(res.data.token){
          alert("Login Successful")
          navigate("/")
        }
      })
      .catch((error) => {});
    console.log("username");
  };

  return (
    <div>
      <h1 className={styles.head}>Welcome to the world of Bewakoof!</h1>
      <div className={styles.box}>
        <div>
          <img
            className={styles.box_img}
            src="https://images.bewakoof.com/web/group-19-1617704502.png"
            alt="imae"
          />
        </div>
        <div className={styles.right_box}>
          <h1 className={styles.main_head}>Log in / Sign up</h1>

          <p>for Latest trends, exciting offers and everything Bewakoof!</p>

          <div className={styles.inputs}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.loginButton} onClick={handleLogin}>
              LOGIN
            </button>
          </div>
          <div>
            <p> Signup if you are not a Registered user</p>
            <button
              className={styles.loginButton}
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
