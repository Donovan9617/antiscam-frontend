import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  CustomisedAxisTick,
  CustomisedLabel,
} from "../../../components/recoverytrend";

export const RecoveryTrendChart = () => {
  const [recoveryTrendData, setRecoveryTrendData] = useState([]);

  useEffect(() => {
    // API call to get data from backend
    const data = [
      {
        month: "January",
        amountRecovered: 2400,
      },
      {
        month: "February",
        amountRecovered: 1398,
      },
      {
        month: "March",
        amountRecovered: 4800,
      },
      {
        month: "April",
        amountRecovered: 3508,
      },
    ];
    setRecoveryTrendData(data);
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
      <b style={{ fontFamily: "sans-serif", fontSize: 25 }}>Recovery Trend</b>
      <LineChart
        width={730}
        height={250}
        data={recoveryTrendData}
        margin={{ top: 15, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tick={<CustomisedAxisTick />}
          label={{
            value: "Amount Recovered (S$)",
            position: "insideBottom",
            dy: 45,
          }}
        />
        <YAxis />
        <Tooltip
          formatter={(value, name, { payload }) => [
            <span>
              <span>Amount Recovered: ${payload.amountRecovered}</span>
            </span>,
          ]}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="amountRecovered"
          stroke="#8884d8"
          label={<CustomisedLabel />}
        />
      </LineChart>
    </div>
  );
};
