import React from "react";
import "./App.css";

import Login from "./components/Login";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CookiesProvider} from 'react-cookie'



function App() {
  return (
    <CookiesProvider>
    <Router>
      <Routes>
        <Route path="/articles" element={<Home />} />
        <Route path="/" element={<Login />} />
    
      </Routes>
    </Router>
    </CookiesProvider>
  );
}

export default App;
