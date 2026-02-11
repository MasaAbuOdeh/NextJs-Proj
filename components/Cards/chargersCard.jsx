import CircularProgress from "./circularProgress";

export default function PerformanceCard({
  title,
  subtitle,
  value = "0",
  currency = "USD",
  numberOfSession,
  rating = 0,
  progress = 0,
  sideColor,
  icon = null,
}) {
  return (
    <div
      className={`flex flex-row items-center justify-between bg-white shadow-md rounded-xl p-4 gap-4 ${sideColor}`}
    >
      {/* Value Section */}
      <div className="flex flex-col items-start justify-center text-left">
        <span className="text-green-500 font-bold text-lg">
          {value} <span className="text-gray-500 text-sm">{currency}</span>
        </span>
        {numberOfSession && (
          <span className="text-gray-400 text-sm">{numberOfSession}</span>
        )}
      </div>

      {/* Circular Progress */}
      <div className="flex-shrink-0">
        <CircularProgress percentage={progress} />
      </div>

      {/* Title, Subtitle & Icon */}
      <div className="flex flex-col items-start justify-center gap-1">
        <div className="flex items-center gap-2">
          {icon && <span className="bg-amber-400 p-2 rounded-full text-white">{icon}</span>}
          <span className="text-gray-800 font-semibold">{title}</span>
          <span className="flex items-center gap-1 text-yellow-400 font-semibold">
            ★ <span className="text-gray-800">{rating.toFixed(1)}</span>
          </span>
        </div>
        {subtitle && <span className="text-gray-400 text-sm">{subtitle}</span>}
      </div>
    </div>
  );
}


