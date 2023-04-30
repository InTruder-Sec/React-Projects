import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    Deposit: 200,
    Withdraw: 150,
    // amt: 2400,
  },
  {
    name: "Tue",
    Deposit: 400,
    Withdraw: 100,
    amt: 2210,
  },
  {
    name: "Wed",
    Deposit: 200,
    Withdraw: 400,
    amt: 2290,
  },
  {
    name: "Thur",
    Deposit: 300,
    Withdraw: 280,
    amt: 2000,
  },
  {
    name: "Fri",
    Deposit: 230,
    Withdraw: 200,
    amt: 2181,
  },
  {
    name: "Sat",
    Deposit: 100,
    Withdraw: 200,
    amt: 2500,
  },
  {
    name: "Sun",
    Deposit: 400,
    Withdraw: 320,
    amt: 200,
  },
];

function TransactionGraph() {
  return (
    <div className="transaction--graph">
      <div className="dashboard--transction--head dashboard--card--details">
        Statistical
      </div>
      <ResponsiveContainer width="90%" minWidth={"460px"} height="100%">
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
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="Deposit" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="Withdraw" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TransactionGraph;
