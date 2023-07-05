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
import { CASE_SCAMTYPE_ENUM } from "../../types/enums";
import { CaseScamTypeType } from "../../types/types";
import { useTheme } from "../darkmode/themeprovider";

interface TypologyRecoveryChartData {
  scam: CaseScamTypeType;
  amount: number;
}

const data: TypologyRecoveryChartData[] = [
  {
    scam: CASE_SCAMTYPE_ENUM.JOB_SCAM,
    amount: 2400,
  },
  {
    scam: CASE_SCAMTYPE_ENUM.INVESTMENT_SCAM,
    amount: 1398,
  },
  {
    scam: CASE_SCAMTYPE_ENUM.PARCEL_SCAM,
    amount: 9800,
  },
  {
    scam: CASE_SCAMTYPE_ENUM.ECOMMERCE_SCAM,
    amount: 3908,
  },
  {
    scam: CASE_SCAMTYPE_ENUM.CREDIT_CARD_SCAM,
    amount: 4800,
  },
  {
    scam: CASE_SCAMTYPE_ENUM.LOTTERY_SCAM,
    amount: 3800,
  },
  {
    scam: CASE_SCAMTYPE_ENUM.OTHERS,
    amount: 4300,
  },
];

export const TypologyRecoveryChart: React.FC = () => {
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
      <h5 style={{ textAlign: "center" }}>Typology Recovery</h5>
      <div style={{ fontSize: "13px" }}>
        <BarChart
          layout="vertical"
          width={400}
          height={350}
          data={data}
          margin={{
            top: 10,
            right: 40,
            left: 25,
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
                value: "Amount Recovered (S$)",
                type: "rect",
                color: "#8884d8",
              },
            ]}
          />
          <Bar
            dataKey="amount"
            fill="#8884d8"
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
