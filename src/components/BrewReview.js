import React, { useState } from "react";
// import NavBar from "./nav/NavBar";
import {ApplicationViews} from "./ApplicationViews";
import { Routes, Route, Navigate} from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
// import "./BrewReview.css";

export const BrewReview = () => {
  const [loggedin, setLoggedin] = useState(false);

  const changeState = (bool) => setLoggedin(bool);
  
  if (localStorage.getItem("brew_User")) {
    return (
      <>
        {/* <NavBar /> */}
        <ApplicationViews />
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login setLoggedin={changeState} />} />
        <Route path="/register" element={<Register setLoggedin={changeState} />} />
      </Routes>
    );
  }
};