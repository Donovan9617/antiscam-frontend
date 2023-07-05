import { Container } from "react-bootstrap";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

type FundRecoveryType = "Recovered" | "Lost";

interface FundRecoveryChartData {
  name: FundRecoveryType;
  amount: number;
}

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}

const data: FundRecoveryChartData[] = [
  { name: "Recovered", amount: 91000000 },
  { name: "Lost", amount: 6250000 },
];

export const FundRecoveryChart: React.FC = () => {
  const COLORS = ["#00C49F", "#FF8042"];
  const RADIAN = Math.PI / 180;

  const CustomLabel: React.FC<CustomLabelProps> = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: CustomLabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        ({`${(percent * 100).toFixed(0)}%`})
      </text>
    );
  };

  return (
    <Container fluid className="mt-4">
      <h5 style={{ textAlign: "center" }}>Fund Recovery</h5>
      <ResponsiveContainer width="100%" height={335}>
        <PieChart>
          <Pie
            data={data}
            cx={180}
            cy={135}
            labelLine={false}
            outerRadius={110}
            dataKey="amount"
            label={CustomLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            payload={[
              {
                value: `Recovered (S$): ${data[0].amount}`,
                type: "rect",
                color: `${COLORS[0]}`,
              },
              {
                value: `Lost (S$): ${data[1].amount}`,
                type: "rect",
                color: `${COLORS[1]}`,
              },
            ]}
          />
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
};
