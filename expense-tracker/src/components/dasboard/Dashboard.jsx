import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./../../images/logo.png";
import "./dashboard.css";
import card from "./../../images/card.png";
import {
  CreateUserTransaction,
  DeleteSession,
  FetchUser,
  GetTransaction,
  UpdateTransaction,
} from "../../v1/account/account";
import TransactionGraph from "./TransactionGraph";
import CreateSummary from "./CreateSummay";
import LoadingEffect from "./LoadingEffect";
import { toast } from "react-toastify";
import { validateAmount } from "./transactionChecks";

function Dashboard() {
  let isLoading = true;
  const navigate = useNavigate();
  let [userDetails, setuserDetails] = useState("");
  let TempAmount = 0.0;
  let DepositedAmount = 0;
  let DebitedAmount = 0;

  useEffect(() => {
    FetchUser(setuserDetails, setusrTransaction).then((e) => {
      if (!e) {
        navigate("/");
        toast.error("Please log in again");
      } else {
      }
    });
  }, []);

  const [usrTransaction, setusrTransaction] = useState("");
  let totalTransc = usrTransaction.length;

  if (userDetails !== "") {
    isLoading = false;
    let transc;
    if (usrTransaction !== "") {
      transc = usrTransaction.map((e) => {
        let t = e.split(",");
        if (t[3] === "1") {
          TempAmount = TempAmount + parseFloat(t[0]);
          DepositedAmount = DepositedAmount + parseFloat(t[0]);
        } else {
          TempAmount = TempAmount - parseFloat(t[0]);
          DebitedAmount = DebitedAmount + parseFloat(t[0]);
        }

        return (
          <Transaction amount={t[0]} details={t[1]} date={t[2]} status={t[3]} />
        );
      });
    } else {
      transc = <div className="no--transaction">No Transactions till now</div>;
    }

    let FormatedAmount = (Math.round(TempAmount * 100) / 100).toFixed(2);
    return (
      <div className="dashboard">
        <NavBar userDetails={userDetails} />
        <div className="dasboard--main">
          <div className="dashboard--details">
            <TransactionSummary userTransaction={usrTransaction} />
            <div className="dashboard--graph--main">
              <TransactionGraph
                userDetails={userDetails}
                userTransaction={usrTransaction}
              />
              <TransactionMain
                userDetails={userDetails}
                setusrTransaction={setusrTransaction}
                usrTransaction={usrTransaction}
                TempAmount={TempAmount}
                totalTransc={totalTransc}
                DepositedAmount={DepositedAmount}
                DebitedAmount={DebitedAmount}
              />
            </div>
          </div>

          <div className="dashboard--card--main">
            <div className="dashboard--card--details">Phoeinix Card</div>
            <div className="card--main">
              <div className="card--details--main">
                <div className="balance--head">Balance</div>
                <div className="balance--amount">&#8377;{FormatedAmount}</div>
                <div className="card--no">{userDetails.$id}</div>
                <div className="card--holder--name">{userDetails.name}</div>
              </div>
              <img
                className="image--card"
                src={card}
                alt="Phoeinix Card"
                draggable="false"
              ></img>
            </div>
            <div className="dashboard--card--details  transaction--head">
              Transaction History
            </div>
            <div className="transaction--history">{transc}</div>
          </div>
        </div>
      </div>
    );
  } else {
    isLoading = true;
    return <LoadingEffect isLoading={isLoading} />;
  }
}

function NavBar({ userDetails }) {
  return (
    <div className="navbar">
      <div className="logo--nav">
        <img className="nav--logo--et" alt="logo" src={logo}></img>
        <div className="nav--logo--title">PHOEINIX.</div>
      </div>
      <div className="right--nav">
        <div
          className="notification"
          onMouseEnter={(e) => {
            PopupStay("notificationPop");
          }}
          onMouseLeave={(e) => {
            PopupRemove("notificationPop");
          }}
        >
          <MakePopup id={"notificationPop"} details={"No new notifications"} />

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
        <div
          className="user--details--nav"
          onMouseEnter={(e) => {
            PopupStay("profilePop");
          }}
          onMouseLeave={(e) => {
            PopupRemove("profilePop");
          }}
        >
          <div className="username--nav">{userDetails.name}</div>
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
          <MakePopup id={"profilePop"} details={"Logout"} />
        </div>
      </div>
    </div>
  );
}

function TransactionSummary() {
  return (
    <>
      <div className="summary">
        <CreateSummary
          color="#0F4C75"
          bgcolor="#3282B8"
          point="4200"
          day="Today"
        />
        <CreateSummary
          color="#50CB93"
          bgcolor="#71EFA3"
          point="1200"
          day="This Week"
        />
        <CreateSummary
          color="#E36BAE"
          bgcolor="#F8A1D1"
          point="40"
          day="This Month"
        />
      </div>
    </>
  );
}

function TransactionMain(props) {
  const [Amt, setAmt] = useState("");
  return (
    <>
      <div className="transaction--money">
        <div className="dashboard--transction--head dashboard--card--details padding--b-2">
          Transaction Menu
        </div>
        <div class="input-container ic1">
          <input
            value={Amt}
            id="amount"
            class="input"
            placeholder=" "
            required
            autoComplete="off"
            onKeyDown={(e) => {
              validateAmount(e.key, setAmt, Amt);
            }}
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            Amount
          </label>
        </div>
        <div class="input-container ic1 ic2">
          <input
            id="paid-to"
            class="input"
            placeholder=" "
            required
            autoComplete="off"
          />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">
            Detials
          </label>
        </div>
        <div className="transaction--buttons">
          <button
            className="transaction--button transaction--add"
            type="submit"
            onClick={(e) => {
              MakeTransaction(
                props.userDetails,
                props.setusrTransaction,
                props.usrTransaction,
                1,
                props.TempAmount,
                setAmt
              );
            }}
          >
            Add
          </button>
          <button
            className="transaction--button transaction--debit"
            type="submit"
            onClick={(e) => {
              MakeTransaction(
                props.userDetails,
                props.setusrTransaction,
                props.usrTransaction,
                0,
                props.TempAmount,
                setAmt
              );
            }}
          >
            Withdraw
          </button>
        </div>
        <div className="total--tran">
          <div className="total--transaction r1">
            Total
            <br /> Transactions
            <br />
            <div className="amount--value">{props.totalTransc}</div>
          </div>
          <div className="total--transaction r2">
            Deposited
            <br />
            Amount
            <br />
            <div className="amount--value">{props.DepositedAmount}</div>
          </div>
          <div className="total--transaction r3">
            Amount
            <br /> Spent
            <div className="amount--value">{props.DebitedAmount}</div>
          </div>
        </div>
      </div>
    </>
  );
}

function Transaction(props) {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 225);
  const g = randomBetween(100, 225);
  const b = randomBetween(0, 225);
  const background = `rgb(${r},${g},${b}, 0.5)`;
  const textcolor = `rgb(${r},${g},${b})`;

  const styles = { background: background, color: textcolor };
  let textstyle;
  let transactionAmount = props.amount;
  if (props.status === "1") {
    textstyle = { color: "green" };
  } else {
    textstyle = { color: "red" };
  }
  let Display = props.details[0] + props.details[1];
  return (
    <div className="transction--main">
      <div style={styles} className="transaction--icon">
        <center>{Display}</center>
      </div>
      <div className="transaction--details">
        {props.details}
        <div className="transaction--date">{props.date}</div>
      </div>
      <div className="transaction--amount" style={textstyle}>
        &#8377; {transactionAmount}
      </div>
    </div>
  );
}

function MakeTransaction(
  details,
  setTransaction,
  usrTransaction,
  transactionStatus,
  TempAmount,
  setAmt
) {
  let amount = document.getElementById("amount").value;
  let summary = document.getElementById("paid-to").value;
  const date = new Date().toJSON().slice(0, 10);
  if (amount === "" && summary === "") {
    toast.error("Please fill all parameters");
  } else {
    amount = (Math.round(amount * 100) / 100).toFixed(2);
    let newTransaction = `${amount},${summary},${date},${transactionStatus}`;
    if (usrTransaction === "") {
      newTransaction = [newTransaction];
      if (!transactionStatus) {
        if (TempAmount < amount) {
          toast.error("Not enough balance");
          return 0;
        }
      }
      CreateUserTransaction(details.$id, newTransaction).then((e) => {
        GetTransaction(details.$id, setTransaction);
        document.getElementById("paid-to").value = "";
        setAmt("");
        document.getElementById("amount").value = "";
      });
    } else {
      if (!transactionStatus) {
        if (TempAmount < amount) {
          toast.error("Not enough balance");
          return 0;
        }
      }
      let newT = usrTransaction;
      newT.push(newTransaction);

      let temp = { UserTransaction: newT };
      setAmt("");
      document.getElementById("paid-to").value = "";
      document.getElementById("amount").value = "";
      UpdateTransaction(details.$id, temp, setTransaction);
    }
  }
}

function MakePopup(props) {
  const navigate = useNavigate();
  return (
    <div
      className="div--pop"
      id={props.id}
      onMouseEnter={(e) => {
        PopupStay(props.id);
      }}
      onMouseLeave={(e) => {
        PopupRemove(props.id);
      }}
      onClick={(e) => {
        if (props.id === "profilePop") {
          DeleteSession(props.setuserDetails);
          navigate("/");
        }
      }}
    >
      <div className="logout--btn">{props.details}</div>
    </div>
  );
}

function PopupStay(id) {
  document.getElementById(id).style.opacity = "1";
  document.getElementById(id).style.height = "70px";
}

function PopupRemove(id) {
  document.getElementById(id).style.opacity = "0";
  document.getElementById(id).style.height = "0px";
}

export default Dashboard;
