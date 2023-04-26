import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  let data = getCookie("session");
  console.log(data);

  if (data === "undefined") {
    navigate("/");
  } else {
    // data = JSON.parse(data);
  }
  return <div className="dashboard">Hello </div>;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default Dashboard;
