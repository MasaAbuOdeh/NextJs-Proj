// components/Charts/ChartCard.jsx
export default function ChartCard({ title, children }) {
  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-sm">
      {title && (
        <h2 className="mb-4 text-lg font-bold text-neutral-900">
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}
