import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const FundFlowChart = () => {
  const [fundFlowData, setFundFlowData] = useState([]);

  useEffect(() => {
    // API call to get data from backend
    const data = [
      { name: "Local-Local", amountOfFunds: 542875415.08, numOfCases: 2 },
      { name: "Local-Overseas", amountOfFunds: 35359732.51, numOfCases: 5 },
      { name: "Overseas-Local", amountOfFunds: 88173449.07, numOfCases: 3 },
      { name: "Overseas-Overseas", amountOfFunds: 7523.12, numOfCases: 4 },
    ];
    setFundFlowData(data);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <b style={{ fontFamily: "sans-serif", fontSize: 25 }}>
        Breakdown of Fund Flow
      </b>
      <BarChart
        width={550}
        height={400}
        data={fundFlowData}
        layout="vertical"
        barCategoryGap="20%"
        margin={{ bottom: 50, right: 100, left: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          label={{
            value: "Amount of Funds (S$)",
            position: "insideBottom",
            dy: 20,
          }}
        />
        <YAxis width={100} dataKey="name" type="category" interval={0} />
        <Tooltip
          formatter={(value, name, { payload }) => [
            <span>
              <span>Amount of Funds: ${payload.amountOfFunds}</span>
              <br />
              <span>Number of Cases: {payload.numOfCases}</span>
            </span>,
          ]}
        />
        <Bar
          name="Amount of Funds (S$)"
          dataKey="amountOfFunds"
          fill="#EA638C"
          maxBarSize={30}
        >
          <LabelList
            dataKey="amountOfFunds"
            position="right"
            formatter={(value) => `$${value}`}
          />
        </Bar>
      </BarChart>
    </div>
  );
};
