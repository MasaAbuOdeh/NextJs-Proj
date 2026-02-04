import AreaChartCard from './areaChartCard';
import { performanceData } from '@/data/reportsData';
export default function SectionChartCard({ title }) {
  return (
    <div className="w-full rounded-xl bg-white p-6 shadow-sm">
      {title && (
        <h2 className="mb-4 text-lg font-bold text-neutral-900">{title}</h2>
      )}
      <AreaChartCard
        title="تقرير الأداء"
        data={performanceData}
        xKey="date"
        series={[
          {
            key: 'revenue',
            label: 'الإيرادات الإجمالية',
            color: '#14b8a6',
          },
          {
            key: 'expenses',
            label: 'المصروفات',
            color: '#4f46e5',
          },
        ]}
      />
    </div>
  );
}
