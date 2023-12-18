import React, { useState } from "react";
import { auth } from "../modules/base";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <form onSubmit={onLogin}>
        <input
        autoComplete="firebase"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gamil.com"
        />
        <input
         autoComplete="firebase"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter the password"
        />
        <button type="Submit">
          Login
        </button>
      </form>
      <p>
        Doesn't have account?{""}
        <NavLink to="/signup">Sign up</NavLink>
      </p>
    </>
  );
};

export default Login;
