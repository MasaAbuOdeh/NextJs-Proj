import { InfoBadge } from "./valueLable";
import Link from "next/link";

export default function ExpectationCard({
  title,
  subtitle,
  suggestion,
  values = {},
}) {
  return (
    <div
      className="
        bg-white
        rounded-xl
        shadow-sm
        border-l-4
        border-l-green-500
        p-3 sm:p-4
        flex flex-col
        gap-4
        transition-all duration-200 hover:shadow-md
      "
    >
      {/* 🔹 Top Section */}
      <div className="flex flex-col gap-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 leading-snug">
            {title}
          </h3>

          <Link
            href="#"
            className="
              text-yellow-500
              text-sm sm:text-base
              font-semibold
              hover:text-yellow-600
              transition-colors
              whitespace-nowrap
            "
          >
            جدولة الصيانة
          </Link>
        </div>

        <p className="text-sm sm:text-base text-gray-500">
          {subtitle}
        </p>
      </div>

      {/* 🔹 Middle Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <InfoBadge label="الاحتمالية" value={values.efficiency} />
        <InfoBadge label="الإطار الزمني" value={values.duration} />
        <InfoBadge label="التكلفة المتوقعة" value={values.cost} />
        <InfoBadge label="آخر صيانة" value={values.lastUpdate} />
      </div>

      {/* 🔹 Suggested Action Section */}
      {suggestion && (
        <div className="flex flex-wrap items-center gap-1 text-sm sm:text-base">
          <span className="text-gray-600 font-medium">
            الإجراء المقترح:
          </span>
          <span className="text-yellow-500 font-semibold">
            {suggestion}
          </span>
        </div>
      )}
    </div>
  );
}


