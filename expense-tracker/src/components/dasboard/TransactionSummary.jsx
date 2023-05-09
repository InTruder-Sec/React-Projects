import React from "react";
import CreateSummary from "./CreateSummay";

function TransactionSummary(props) {
  let WeekDates = props.WeekDates;
  let TodaysTransaction = 0;
  let WeeklyTransaction = 0;
  let MonthlyTransaction = 0;
  if (props.userTransaction !== "") {
    let userTransaction = props.userTransaction;
    userTransaction = [...userTransaction].reverse();
    let TransactionDate;
    let TransactionMonth;
    let TransactionYear;
    let Today = new Date();
    let TodaysDate = Today.getDate();
    let CurrentMonth = Today.getMonth() + 1;
    let CurrentYear = Today.getFullYear();

    userTransaction.map((e) => {
      let t = e.split(",");
      TransactionDate = new Date(t[2]).getDate();
      TransactionMonth = new Date(t[2]).getMonth() + 1;
      TransactionYear = new Date(t[2]).getFullYear();

      if (TransactionDate === TodaysDate) {
        if (t[3] === "1") {
          TodaysTransaction = TodaysTransaction + parseInt(t[0]);
        } else {
          TodaysTransaction = TodaysTransaction - parseInt(t[0]);
        }
      }

      if (
        CurrentMonth === TransactionMonth &&
        TransactionYear === CurrentYear
      ) {
        if (t[3] === "1") {
          MonthlyTransaction = MonthlyTransaction + parseInt(t[0]);
        } else {
          MonthlyTransaction = MonthlyTransaction - parseInt(t[0]);
        }
      }

      if (WeekDates.includes(t[2])) {
        if (t[3] === "1") {
          WeeklyTransaction = WeeklyTransaction + parseInt(t[0]);
        } else {
          WeeklyTransaction = WeeklyTransaction - parseInt(t[0]);
        }
      }
    });
  }

  return (
    <>
      <div className="summary">
        <CreateSummary
          color="#0F4C75"
          bgcolor="#3282B8"
          point="4200"
          day="Today"
          newAmount={TodaysTransaction}
        />
        <CreateSummary
          color="#50CB93"
          bgcolor="#71EFA3"
          point="1200"
          day="This Week"
          newAmount={WeeklyTransaction}
        />
        <CreateSummary
          color="#E36BAE"
          bgcolor="#F8A1D1"
          point="40"
          day="This Month"
          newAmount={MonthlyTransaction}
        />
      </div>
    </>
  );
}

export default TransactionSummary;
