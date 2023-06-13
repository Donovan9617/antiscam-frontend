import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const ScamAmountRecoveredChart = () => {
  const [scamAmountRecoveredData, setScamAmountRecoveredData] = useState([]);

  useEffect(() => {
    // API call to get data from backend
    const data = [
      { scam: "BEC Scam", amountRecovered: 400 },
      { scam: "Job Scam", amountRecovered: 500 },
      { scam: "Investment Scam", amountRecovered: 300 },
      { scam: "Non Scam", amountRecovered: 500 },
      { scam: "Other Scam", amountRecovered: 300 },
      { scam: "COIS", amountRecovered: 500 },
      { scam: "E-Commerce Scam", amountRecovered: 300 },
      { scam: "Tech Support Scam", amountRecovered: 500 },
      { scam: "Love/Parcel Scam", amountRecovered: 300 },
      { scam: "Job Scam", amountRecovered: 500 },
      { scam: "Investment Scam", amountRecovered: 300 },
      { scam: "Non Scam", amountRecovered: 500 },
      { scam: "Other Scam", amountRecovered: 300 },
      { scam: "COIS", amountRecovered: 500 },
      { scam: "E-Commerce Scam", amountRecovered: 300 },
      { scam: "Tech Support Scam", amountRecovered: 500 },
      { scam: "Love/Parcel Scam", amountRecovered: 300 },
    ];
    setScamAmountRecoveredData(data);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginTop: 20,
      }}
    >
      <b style={{ fontFamily: "sans-serif", fontSize: 25 }}>
        Recovery by Typology
      </b>
      <BarChart
        width={550}
        height={400}
        data={scamAmountRecoveredData}
        layout="vertical"
        barCategoryGap="20%"
        margin={{ bottom: 50, right: 100 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          label={{
            value: "Amount Recovered (S$)",
            position: "insideBottom",
            dy: 20,
          }}
        />
        <YAxis width={150} dataKey="scam" type="category" interval={0} />
        <Tooltip
          formatter={(value, name, { payload }) => [
            <span>
              <span>Amount Recovered: ${payload.amountRecovered}</span>
            </span>,
          ]}
        />
        <Bar
          name="Amount Recovered (S$)"
          dataKey="amountRecovered"
          fill="#8884d8"
          maxBarSize={30}
        >
          <LabelList
            dataKey="amountRecovered"
            position="right"
            formatter={(value) => `$${value}`}
          />
        </Bar>
      </BarChart>
    </div>
  );
};
