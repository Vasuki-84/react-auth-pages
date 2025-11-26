import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/signup";
import Login from "./Components/Login";
import "./App.css";
import Home from "./Components/Home"



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
