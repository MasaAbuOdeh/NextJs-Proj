"use client"; // لأن عندنا SVG تفاعلي
import CircularProgress from "./circularProgress";
export default function PerformanceCard({
  title,
  subtitle,
  value = "0",
  currency = "ريال",
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
      {/* اليسار: السعر وعدد الجلسات */}
      <div className="flex flex-col items-center justify-center text-center">
        <span className="text-green-500 font-bold text-lg">
          {value} <span className="text-gray-500 text-sm">{currency}</span>
        </span>
        <span className="text-gray-400 text-sm">{numberOfSession} جلسة</span>
      </div>

      {/* الوسط: دائرة النسبة */}
      <div>
        <CircularProgress percentage={progress} />
      </div>

      {/* اليمين: العنوان، الأيقونة، التقييم، الوصف */}
      <div className="flex flex-col items-start justify-center gap-1">
        <div className="flex items-center gap-2">  
          <span className="flex items-center gap-1 text-yellow-400 font-semibold">
            ★ <span className="text-gray-800">{rating.toFixed(1)}</span>
          </span>
          <span className="text-gray-800 font-semibold">{title}</span>
          {icon && <span className="bg-amber-400 p-2 rounded-full text-white">{icon}</span>}
        </div>
        <span className="text-gray-400 text-sm">{subtitle}</span>
      </div>
    </div>
  );
}

