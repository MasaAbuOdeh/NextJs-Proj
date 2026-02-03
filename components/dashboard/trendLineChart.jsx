"use client"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts"

const defaultData = [
  { date: "01/01", usage: 2400 },
  { date: "01/02", usage: 1398 },
  { date: "01/03", usage: 9800 },
  { date: "01/04", usage: 3908 },
  { date: "01/05", usage: 4800 },
  { date: "01/06", usage: 3800 },
  { date: "01/07", usage: 4300 },
  { date: "01/08", usage: 5200 },
  { date: "01/09", usage: 6100 },
  { date: "01/10", usage: 5400 },
  { date: "01/11", usage: 7200 },
  { date: "01/12", usage: 8100 },
]

export function UsageTrendLineChart({
  data = defaultData,
  title = "اتجاه الاستخدام",
  description = "عرض الاستخدام بمرور الوقت",
}) {
  return (
    <div
      className="w-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
      dir="rtl"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </div>
      <div className="h-[300px] w-full" dir="ltr">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e5e5"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#737373", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#737373", fontSize: 12 }}
              dx={-10}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              }}
              labelStyle={{
                color: "#171717",
                fontWeight: 600,
                marginBottom: "4px",
              }}
              itemStyle={{
                color: "#737373",
              }}
              formatter={(value) => [`${value.toLocaleString()}`, "الاستخدام"]}
              labelFormatter={(label) => `التاريخ: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="usage"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#usageGradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#3b82f6",
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

