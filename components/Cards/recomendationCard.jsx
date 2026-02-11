import React from "react";

export default function RecommendationCard({
  title,
  description,
  icon,
  highlightText,
}) {
  return (
    <div className="flex items-start gap-1 bg-white rounded-xl shadow-sm border-l-4 border-gray-500 p-5">
      {/* Icon */}
      {icon && (
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 text-gray-700">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {title}
          </h3>
        )}

        {description && (
          <p className="text-md text-gray-600 mb-1">
            {description}
          </p>
        )}

        {highlightText && (
          <span className="text-sm font-semibold text-green-600">
            {highlightText}
          </span>
        )}
      </div>
    </div>
  );
}
