import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../Redux/Auth/action";


export const Signup = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const ref = useRef();
  const passwordRef = useRef();
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    console.log(name);
    setForm({
      ...form,
      [name]: value,
    });
  };


  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(register(form))
    navigate("/login");
    alert("Registered Successfully")

    if (!form.username) {
      ref.current.focus();
      // console.log(ref)
      ref.current.className += styles.redBorder;
    } else if (!form.password) {
      passwordRef.current.focus();
      passwordRef.current.className += styles.redBorder;
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
        <h3 className={styles.t2}>
          Hi new buddy, let's start bewakoofi!
        </h3>
        <form onSubmit={handleSubmit} className={styles.signForm}>
          <div>
            <input
              ref={ref}
              type="text"
              name="username"
              placeholder="Enter username"
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
              type="text"
              name="password"
              placeholder="Enter password"
              onChange={handleOnChange}
              className={styles.inp_box}
            />
          </div>
          <div>
            <input
              type="text"
              name="age"
              placeholder="Enter Age"
              onChange={handleOnChange}
              className={styles.inp_box}
            />
          </div>
          <div>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              onChange={handleOnChange}
              className={styles.inp_box}
            />
          </div>

          <button type="submit" className={styles.sub}>
            Proceed
          </button>
        </form>
        <div className={styles.loginForm}>
            <p>Please login if you are Registered</p>
            <button className={styles.sub} onClick={()=>(navigate("/login"))}>Login</button>
            </div>
      </div>
    </div>
  );
};

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [age, setAge] = useState(0);
//   const [location, setLocation] = useState("");
//   const handleSubmit = () => {
//     const payload = {
//       username: username,
//       email: email,
//       password: password,
//       location: location,
//       age: age,
//     }
//     // console.log(payload);
//     fetch ("http//localhost:8080/user/register",{
//       method:"POST",
//       headers:{
//         "Content-type":"application/json"
//       },
//       body:JSON.stringify(payload)
//     }).then(res=>res.json())
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter Username"
//         className={styles.inp_box}
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter Email"
//         className={styles.inp_box}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Enter Password"
//         className={styles.inp_box}
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Enter Location"
//         className={styles.inp_box}
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Enter Age"
//         className={styles.inp_box}
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//       />
//       <button type="submit" className={styles.sub} onClick={handleSubmit}>
//         Procced
//       </button>
//     </div>
//   );
// };

// export { Signup };
