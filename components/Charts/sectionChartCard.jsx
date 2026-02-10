import AreaChartCard from "./areaChartCard";

export default function SectionChartCard({ title, data, series }) {
  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-sm">
      {title && (
        <h2 className="mb-4 text-lg font-bold text-neutral-900">
          {title}
        </h2>
      )}

      <AreaChartCard
        data={data}
        xKey="date"
        series={series}
      />
    </div>
  );
}

