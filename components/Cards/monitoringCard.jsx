import { InfoBadge } from "./valueLable";
export default function MonitoringCard({
  deviceName,
  status,
  statusConfig,
  infoItems = [],
}) {
  const currentStatus = statusConfig[status];

  return (
    <div
      className={`
        bg-white shadow-sm rounded-xl
        p-4 sm:p-5
        border-l-4 ${currentStatus.border}
      `}
    >
      {/* Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
        <h3 className="md:text-xl sm:text-base font-semibold text-gray-800">
          {deviceName}
        </h3>

        <span
          className={`
            text-xs sm:text-sm font-semibold
            ${currentStatus.text}
          `}
        >
          {currentStatus.label[0]}
        </span>
      </div>

      {/* Info badges */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {infoItems.map((item) => (
          <InfoBadge
            key={item.key}
            label={item.label.ar}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}

