import { useEffect, useState } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { customLabel } from "../../../components/fundrecovery";

const COLORS = ["#00C49F", "#0088FE"];

export const FundRecoveryChart = () => {
  const [fundRecoveryData, setFundRecoveryData] = useState([]);

  useEffect(() => {
    // API call to get data from backend
    const data = [
      { status: "Recovered", amountRecovered: 91000000 },
      { status: "Lost", amountRecovered: 650000000 },
    ];
    setFundRecoveryData(data);
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
      <b style={{ fontFamily: "sans-serif", fontSize: 25 }}>Fund Recovery</b>
      <PieChart width={500} height={300}>
        <Pie
          data={fundRecoveryData}
          dataKey="amountRecovered"
          nameKey="status"
          innerRadius={90}
          label={customLabel}
        >
          {fundRecoveryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
