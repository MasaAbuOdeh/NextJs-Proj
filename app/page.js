import ChargingTypeDonutChart from '@/components/dashboard/chargingDunetChart';
import ReportTabsClient from '@/components/dashboard/reportTabsClient';
import StatsCards from '@/components/dashboard/statsCard';
import { UsageTrendLineChart } from '@/components/dashboard/trendLineChart';

const sampleData = [
  { date: '01/01', usage: 2400 },
  { date: '01/02', usage: 1398 },
  { date: '01/03', usage: 9800 },
  { date: '01/04', usage: 3908 },
  { date: '01/05', usage: 4800 },
  { date: '01/06', usage: 3800 },
  { date: '01/07', usage: 4300 },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="flex flex-col gap-2 justify-center">
        <StatsCards className="w-full" />
        <ReportTabsClient className="w-full" />
        <div dir="rtl" className="flex flex-col md:flex-row gap-3 mt-2">
          <div className="w-full md:flex-1">
            <UsageTrendLineChart
              data={sampleData}
              title="احصائيات الاستخدام"
              description="تتبع استخدامك خلال اسبوع"
            />
          </div>
          <div className="w-full md:flex-1">
            <ChargingTypeDonutChart />
          </div>
        </div>
      </div>
    </main>
  );
}
