import React, { useCallback, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../modules/base";
const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="signUpContainer">
      <form className="signUpForm">

        <input
        className="signUpEmailInput"
          name="email"
          autoComplete="shahibishal786526@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="example@gamil.com"
          required
        />
        <input
        autoComplete="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter the password"
          required
        />
        <button type="submit" onClick={onSubmit}>
          SignUp
        </button>
      </form>
      <p>
        Already have account?{''}
        <NavLink to="/login">Sign in</NavLink>
      </p>
    </div>
  );
};

export default SignUp;
