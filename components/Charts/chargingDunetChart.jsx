import DonutChart from "./dunetChart";
export default function ChargingTypeDonutChart({ title, data }) {
  return (
    <div className="w-full h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-50 text-right">
          {title}{" "}
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-6 p-2">
        {/* Donut Chart - Client Component */}
        <div className="w-full md:w-[400px] h-[300px] flex-shrink-0">
          <DonutChart data={data} />
        </div>

        {/* Legend - Server Rendered */}
        <div className="w-full md:flex-1 flex flex-col gap-3">
          {data.map((item, index) => {
            const total = data.reduce((sum, item) => sum + item.value, 0);
            const percentage = ((item.value / total) * 100).toFixed(0);
            return (
              <div
                key={index}
                className="flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {item.name}
                  </span>
                </div>
                <span className="text-sm font-bold text-neutral-500 dark:text-neutral-400">
                  {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
