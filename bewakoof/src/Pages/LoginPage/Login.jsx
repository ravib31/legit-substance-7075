import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Login = () => {
  const navigate = useNavigate();
  const [num, setNum] = useState("");

  const handleOnChange = (e) => {
    setNum(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("mobile", JSON.stringify(num));
    console.log(num);
    navigate("/Signup")
  };

  return (
    <div>
      <h1 className={styles.head}>Welcome to the world of Bewakoof!</h1>
      <div className={styles.box}>
        <div>
          <img
            className={styles.box_img}
            src="https://images.bewakoof.com/web/group-19-1617704502.png"/>
        </div>
        <div className={styles.right_box}>

          <h1 className={styles.main_head}>Log in / Sign up</h1>

          <p>for Latest trends, exciting offers and everything Bewakoof!</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            
            <div className={styles.formdiv}>
              <div className={styles.mob}>
                <img style={{width: "30px", height: "30px"}}
                 src="https://emojiguide.com/wp-content/uploads/platform/joypixels/43830.png" />
                <p style={{marginTop: "1px", textAlign: "center"}}>+91</p>
              </div>

              <input className={styles.inp}
                type="text"
                placeholder="Enter Mobile Number"
                onChange={handleOnChange}
                
              />
            </div>
            <button className={styles.btn} type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};


