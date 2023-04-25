import React from "react";
import Login from "./components/account/login/Login";
import Register from "./components/account/register/Register";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import ForgotPass from "./components/account/forgot-password/Forgot-Password";
import Dashboard from "./components/dasboard/Main";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/forgot-password" exact element={<ForgotPass />}></Route>
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
