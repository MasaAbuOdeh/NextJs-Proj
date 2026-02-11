export function InfoBadge({ label, value }) {
  if (!value) return null;

  return (
    <div
      className="
        flex flex-1 items-center justify-between gap-2
        px-3 py-2
        bg-gray-100 rounded-lg
        text-xs sm:text-sm
      "
    >
      <span className="font-medium text-gray-500 whitespace-nowrap">
        {label}
      </span>
      <span className="font-semibold text-gray-800">
        {value}
      </span>
    </div>
  );
}