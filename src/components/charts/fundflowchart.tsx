import React from "react";
import { Container } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "../darkmode/themeprovider";

type FundFlowScamDataType =
  | "Local Local"
  | "Local Overseas"
  | "Overseas Local"
  | "Local Local";

interface FundFlowDataType {
  scam: FundFlowScamDataType;
  amount: number;
}

const data: FundFlowDataType[] = [
  {
    scam: "Local Local",
    amount: 550000000.0,
  },
  {
    scam: "Local Overseas",
    amount: 35000000.0,
  },
  {
    scam: "Overseas Local",
    amount: 88000000.0,
  },
  {
    scam: "Local Local",
    amount: 8000.0,
  },
];

export const FundFlowChart: React.FC = () => {
  const [currentTheme] = useTheme();

  const axisLabelStyle = {
    color: currentTheme === "dark" ? "white" : "black",
    filter: currentTheme === "dark" ? "invert(0)" : "none",
  };

  const axisTickStyle = {
    fill: currentTheme === "dark" ? "white" : "black",
    filter: currentTheme === "dark" ? "invert(0)" : "none",
  };

  return (
    <Container fluid className="mt-4">
      <h5 style={{ textAlign: "center" }}>Fundflow Breakdown</h5>
      <div style={{ fontSize: "13px" }}>
        <BarChart
          layout="vertical"
          width={400}
          height={350}
          data={data}
          margin={{
            top: 10,
            right: 70,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis
            dataKey="scam"
            type="category"
            tick={axisTickStyle}
            axisLine={{ stroke: axisLabelStyle.color }}
            tickLine={{ stroke: axisLabelStyle.color }}
          />
          <XAxis
            type="number"
            tick={axisTickStyle}
            axisLine={{ stroke: axisLabelStyle.color }}
            tickLine={{ stroke: axisLabelStyle.color }}
          />
          <Tooltip />
          <Legend
            payload={[
              {
                value: "Amount of Funds (S$)",
                type: "rect",
                color: "#0088FE",
              },
            ]}
          />
          <Bar
            dataKey="amount"
            fill="#0088FE"
            barSize={20}
            label={{
              position: "right",
              style: {
                fill: axisTickStyle.fill,
                filter: currentTheme === "dark" ? "invert(0)" : "none",
              },
            }}
          />
        </BarChart>
      </div>
    </Container>
  );
};
