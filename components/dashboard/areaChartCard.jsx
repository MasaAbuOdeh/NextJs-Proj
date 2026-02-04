"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function AreaChartCard({
  title,
  data,
  xKey = "date",
  series = [],
}) {
  if (!data || data.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 text-center text-gray-400">
        لا توجد بيانات
      </div>
    );
  }

  // Legend مخصص
const renderLegend = () => (
  <div className="flex justify-center gap-4 mb-2">
    {series.map((s) => (
      <div key={s.key} className="flex items-center gap-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: s.color }}
        ></div>
        <span className="text-sm text-neutral-900">{s.label}</span>
      </div>
    ))}
  </div>
);

  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-sm">
      {title && (
        <h2 className="mb-4 text-lg font-bold text-neutral-900">
          {title}
        </h2>
      )}

      {renderLegend()}

      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              {series.map((s) => (
                <linearGradient
                  key={s.key}
                  id={`gradient-${s.key}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor={s.color}
                    stopOpacity={0.6}
                  />
                  <stop
                    offset="100%"
                    stopColor={s.color}
                    stopOpacity={0.05}
                  />
                </linearGradient>
              ))}
            </defs>

            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey={xKey} />
            <Tooltip />

            {series.map((s) => (
              <Area
                key={s.key}
                type="monotone"
                dataKey={s.key}
                name={s.label}
                stroke={s.color}
                fill={`url(#gradient-${s.key})`}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


