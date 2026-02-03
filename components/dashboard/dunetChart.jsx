"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export default function DonutChart({ data }) {
  return (
    <ResponsiveContainer className="w-[300px] h-[300px]">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={3}
          dataKey="value"
          strokeWidth={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}
