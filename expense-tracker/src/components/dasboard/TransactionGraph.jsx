import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

function TransactionGraph(props) {
  let WeeklyDate = props.WeeklyDate;
  let WeekDay = props.WeekDay;

  let day1profit = 0;
  let day2profit = 0;
  let day3profit = 0;
  let day4profit = 0;
  let day5profit = 0;
  let day6profit = 0;
  let day7profit = 0;
  let day1loss = 0;
  let day2loss = 0;
  let day3loss = 0;
  let day4loss = 0;
  let day5loss = 0;
  let day6loss = 0;
  let day7loss = 0;

  if (props.userTransaction !== "") {
    let userTransaction = props.userTransaction;
    userTransaction = [...userTransaction].reverse();
    userTransaction.map((e) => {
      let t = e.split(",");
      if (props.WeekDates.includes(t[2])) {
        let index = props.WeekDates.indexOf(t[2]);
        if (t[3] === "1") {
          if (index === 0) {
            day1profit = day1profit + parseInt(t[0]);
          } else if (index === 1) {
            day2profit = day2profit + parseInt(t[0]);
          } else if (index === 2) {
            day3profit = day3profit + parseInt(t[0]);
          } else if (index === 3) {
            day4profit = day4profit + parseInt(t[0]);
          } else if (index === 4) {
            day5profit = day5profit + parseInt(t[0]);
          } else if (index === 5) {
            day6profit = day6profit + parseInt(t[0]);
          } else if (index === 6) {
            day7profit = day7profit + parseInt(t[0]);
          }
        } else {
          if (index === 0) {
            day1loss = day1loss + parseInt(t[0]);
          } else if (index === 1) {
            day2loss = day2loss + parseInt(t[0]);
          } else if (index === 2) {
            day3loss = day3loss + parseInt(t[0]);
          } else if (index === 3) {
            day4loss = day4loss + parseInt(t[0]);
          } else if (index === 4) {
            day5loss = day5loss + parseInt(t[0]);
          } else if (index === 5) {
            day5loss = day5loss + parseInt(t[0]);
          } else if (index === 6) {
            day7loss = day7loss + parseInt(t[0]);
          }
        }
      }
    });
  }

  const data = [
    {
      name: WeekDay[0].slice(0, 3),
      Deposit: day1profit,
      Withdraw: day1loss,
    },
    {
      name: WeekDay[1].slice(0, 3),
      Deposit: day2profit,
      Withdraw: day2loss,
    },
    {
      name: WeekDay[2].slice(0, 3),
      Deposit: day3profit,
      Withdraw: day3loss,
    },
    {
      name: WeekDay[3].slice(0, 3),
      Deposit: day4profit,
      Withdraw: day4loss,
    },
    {
      name: WeekDay[4].slice(0, 3),
      Deposit: day5profit,
      Withdraw: day5loss,
    },
    {
      name: WeekDay[5].slice(0, 3),
      Deposit: day6profit,
      Withdraw: day6loss,
    },
    {
      name: WeekDay[6].slice(0, 3),
      Deposit: day7profit,
      Withdraw: day7loss,
    },
  ];
  return (
    <div className="transaction--graph">
      <div className="dashboard--transction--head padding--b dashboard--card--details">
        Statistical
      </div>
      <ResponsiveContainer width="80%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#666" />
          <YAxis yAxisId="right" orientation="right" stroke="#666" />
          {/* <Tooltip /> */}
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="Deposit"
            fill="#88E570"
            barSize={15}
            radius={[15, 15, 15, 15]}
          />
          <Bar
            yAxisId="right"
            dataKey="Withdraw"
            fill="#5853BC"
            radius={[15, 15, 15, 15]}
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TransactionGraph;
