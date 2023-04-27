import React from "react";
import logo from "./../../images/logo.png";
import "./dashboard.css";
import card from "./../../images/card.png";

function Dashboard() {
  let data = getCookie("session");
  console.log(data);

  if (data === "undefined") {
    // navigate("/");
  } else {
    // data = JSON.parse(data);
  }
  return (
    <div className="dashboard">
      <NavBar />
      <div className="dasboard--main">
        <div className="dashboard--details"></div>
        <div className="dashboard--card--main">
          <div className="dashboard--card--details">Phoeinix Card</div>
          <div className="card--main">
            <div className="card--details--main">
              <div className="balance--head">Balance</div>
              <div className="balance--amount">&#8377;3,232.20</div>
              <div className="card--no">8263 9038 4590 2224</div>
              <div className="card--holder--name">InTruder Security</div>
            </div>
            <img
              className="image--card"
              src={card}
              alt="Phoeinix Card"
              draggable="false"
            ></img>
          </div>
          <div className="dashboard--card--details transaction--head">
            Transaction History
          </div>
          <div className="transaction--history">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function NavBar() {
  return (
    <div className="navbar">
      <div className="logo--nav">
        <img className="nav--logo--et" alt="logo" src={logo}></img>
        <div className="nav--logo--title">PHOEINIX.</div>
      </div>
      <div className="notification">
        <svg
          width="34px"
          height="34px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12.0196 2.91016C8.7096 2.91016 6.0196 5.60016 6.0196 8.91016V11.8002C6.0196 12.4102 5.7596 13.3402 5.4496 13.8602L4.2996 15.7702C3.5896 16.9502 4.0796 18.2602 5.3796 18.7002C9.6896 20.1402 14.3396 20.1402 18.6496 18.7002C19.8596 18.3002 20.3896 16.8702 19.7296 15.7702L18.5796 13.8602C18.2796 13.3402 18.0196 12.4102 18.0196 11.8002V8.91016C18.0196 5.61016 15.3196 2.91016 12.0196 2.91016Z"
              stroke="#570dea"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            ></path>{" "}
            <path
              d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
              stroke="#570dea"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
            <path
              opacity="0.4"
              d="M15.0195 19.0601C15.0195 20.7101 13.6695 22.0601 12.0195 22.0601C11.1995 22.0601 10.4395 21.7201 9.89953 21.1801C9.35953 20.6401 9.01953 19.8801 9.01953 19.0601"
              stroke="#570dea"
              stroke-width="1.5"
              stroke-miterlimit="10"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="user--details--nav">
        <div className="username--nav">InTruder Security</div>
        <div className="user--profile">
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M18 18.7023C18 15.6706 14.5 15 12 15C9.5 15 6 15.6706 6 18.7023M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                stroke="#7437ed"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Transaction() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 185);
  const g = randomBetween(100, 185);
  const b = randomBetween(0, 185);
  const background = `rgb(${r},${g},${b}, 0.5)`;
  const textcolor = `rgb(${r},${g},${b})`;
  const styles = { background: background, color: textcolor };
  return (
    <div className="transction--main">
      <div style={styles} className="transaction--icon">
        <center>AD</center>
      </div>
    </div>
  );
}

export default Dashboard;
