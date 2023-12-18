import React from "react";
import "../dist/output.css";
import "./App.css";
import { Routes,Route,BrowserRouter as Router } from "react-router-dom";
import Home from "./components/MainBody/Home";
import SignUp from "./components/RouteComponents/SignUp";
import Login from "./components/RouteComponents/Login";
function App() {
 
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
