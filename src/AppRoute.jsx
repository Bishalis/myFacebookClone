import React from "react";
import App from "./App";
import Login from "./components/RouteComponents/Login";
import SignUp from "./components/RouteComponents/SignUp";
import { BrowserRouter as Router , Route } from "react-router-dom";
import { AuthProvider } from "./components/RouteComponents/Auth";

const AppRoute = () =>{
    <AuthProvider>
   <Router>
    <div>
        <Route exact path="/Home" Component={App}/>
        <Route exact path="/" Component={Login}/>
        <Route exact path="/Signup" Component={SignUp}/>
    </div>
   </Router>
   </AuthProvider>
}
