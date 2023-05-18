import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

export const Signup = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
    const ref = useRef();
    const passwordRef = useRef() 
    const handleOnChange = (e) => {
        let { name, value} = e.target;
        console.log(name);          
          setForm({
            ...form,
            [name]: value,
          });        
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        navigate("/")
    
        if(!form.username) {
            ref.current.focus();
            // console.log(ref)
            ref.current.className += styles.redBorder
            
        } else if(!form.password) {
            passwordRef.current.focus()
            passwordRef.current.className += styles.redBorder
        }   
      };

  return (
    <div className={styles.big}>
      <img
        className={styles.useCode}
        src="https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png"
      />

      <div className={styles.signup}>
        <h1 className={styles.t1}>Sign Up</h1>
        <h3 className={styles.t2}>Hi new buddy, let's get you started with the bewakoofi!</h3>
        <form onSubmit={handleSubmit} className={styles.signForm}>
        <div>          
          <input
          ref={ref}
            type="text"
            name="username"
            placeholder="Enter name"
            onChange={handleOnChange}
            className={styles.inp_box}
          />
        </div>
        <div>          
          <input
            type="text"
            name="mobile"
            placeholder="Enter MObile Number"
            onChange={handleOnChange}
            className={styles.inp_box}
          />
        </div>
        <div>          
          <input
            type="text"
            name="email"
            placeholder="Enter email"           
            onChange={handleOnChange}
            className={styles.inp_box}
          />
        </div>
        <div>          
          <input
          ref={passwordRef}
            type="password"
            name="password"
            placeholder="Enter Password"            
            onChange={handleOnChange}
            className={styles.inp_box}
          />
        </div>        
        
        <button type="submit" className={styles.sub}>Proceed</button>
      
        </form>
      </div>
    </div>
  );
};


