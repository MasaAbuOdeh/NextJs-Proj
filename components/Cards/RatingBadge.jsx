export default function RatingBadge({ rating = 0, icon = null }) {
  if (!rating) return null;

  return (
    <div className="inline-flex items-center gap-1 px-1 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-700 w-fit">
      <span>{rating}</span>
      {icon && (
        <span className="text-yellow-500 flex items-center [&_svg]:fill-current">
          {icon}
        </span>
      )}
    </div>
  );
}
