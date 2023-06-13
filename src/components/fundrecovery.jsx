const RADIAN = Math.PI / 180;

export const customLabel = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, payload, percent, fill } =
    props;
  const radius = innerRadius + (outerRadius - innerRadius) * 1.8;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <text x={x} y={y} textAnchor={x > cx ? "start" : "end"} fill={fill}>
        {payload.status}
      </text>
      <text x={x} y={y + 18} textAnchor={x > cx ? "start" : "end"} fill={fill}>
        ${payload.amountRecovered}
      </text>
      <text
        x={x}
        y={y + 36}
        textAnchor={x > cx ? "start" : "end"}
        fill={"#999"}
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </>
  );
};
