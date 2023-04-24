import React from "react";
import Login from "./components/account/login/Login";
import Register from "./components/account/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPass from "./components/account/forgot-password/Forgot-Password";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/register" exact element={<Register />}></Route>
          <Route path="/forgot-password" exact element={<ForgotPass />}></Route>
        </Routes>
      </BrowserRouter>
      <Login />
    </div>
  );
}

export default App;
