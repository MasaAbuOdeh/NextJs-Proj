'use client';

export default function TabButton({
  id,
  label,
  icon: Icon,
  isActive,
  onTabChange,
}) {
  return (
    <button
      onClick={() =>{ onTabChange?.(id) ;console.log(label)}}
      className={`
        flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg
        font-medium text-xs sm:text-sm whitespace-nowrap
        transition-all duration-200 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2
        ${
          isActive
            ? "bg-yellow-400 text-gray-900 shadow-md"
            : "bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }
        w-full min-w-0 sm:w-auto sm:min-w-28 md:min-w-32
      `}
      aria-selected={isActive}
      role="tab"
    >
      <Icon className="w-4 h-4" />
      <span>{label}</span>
    </button>
  )
}

