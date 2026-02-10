import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
export default function DonutChart({
  data,
  containerSize = 240,
  thickness = 60,
}) {
  const outer = containerSize / 2
  const inner = outer - thickness

  return (
    <ResponsiveContainer width={containerSize} height={containerSize}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={inner}
          outerRadius={outer}
          dataKey="value"
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

