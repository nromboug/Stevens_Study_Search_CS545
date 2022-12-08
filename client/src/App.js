import "./App.css";
import HomePage from "./components/HomePage";
import Topbar from "./components/Topbar";
import StudySessionGrid from "./components/StudySessionGrid";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Login from "./components/Login";
import useToken from "./useToken";

function App() {
  console.log(sessionStorage.getItem("token"));
  function setToken(token) {
    if (!token) return;
    sessionStorage.setItem("token", token);
  }
  if (sessionStorage.getItem("token"))
    return (
      <div className="App">
        <header>
          <Topbar />
        </header>
        <HomePage />
      </div>
    );
  else
    return (
      <div className="App">
        <header>
          <Topbar />
        </header>
        <Login setToken={setToken} />
      </div>
    );
}

export default App;
