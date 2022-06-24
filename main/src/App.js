import './Style.css';
import Navbar from './components/nav/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Login from "./components/login/Login";
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import Feed from "./components/feed/Feed";
import CoffeeMap from "./components/map/CoffeeMap";

function App() {

    return (
      <div className="body">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/Feed" element={<Feed />} />
                  <Route path="/CoffeeMap" element={<CoffeeMap/>} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
