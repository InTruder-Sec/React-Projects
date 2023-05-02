import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";

function CreateSummary(props) {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 2000,
      pv: 7398,
      amt: 4210,
    },
    {
      name: "Page C",
      uv: 3000,
      pv: 7800,
      amt: 5290,
    },
    {
      name: "Page E",
      uv: 1000,
      pv: 7800,
      amt: 2290,
    },
    {
      name: "Paged",
      uv: props.point,
      pv: 9800,
      amt: props.points,
    },
  ];
  return (
    <>
      <div className="s-transaction">
        <ResponsiveContainer width="40%" height="80%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <Area
              type="monotone"
              dataKey="uv"
              stroke={props.color}
              fill={props.bgcolor}
            />
          </AreaChart>
        </ResponsiveContainer>
        <div className="summary--details">
          <div className="s--head">{props.day}</div>
          <div className="s--transactions">&#8377; 240</div>
        </div>
      </div>
    </>
  );
}

export default CreateSummary;
