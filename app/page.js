import { performanceData, statsData, sectionsData } from '@/data/reportsData';
import ChargingTypeDonutChart from '@/components/dashboard/chargingDunetChart';
import ReportTabsClient from '@/components/dashboard/reportTabsClient';
import Card from '@/components/dashboard/Card';
import SectionCard from '@/components/dashboard/sectionCard';
import SectionChartCard from '@/components/dashboard/sectionChartCard';

export default function Page() {
  return (
    <main className="min-h-screen bg-background bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="flex flex-col gap-2 justify-center">
        <div className="grid grid-cols-4 gap-4">
           {statsData.map((stat)=>(
          <Card key={stat.id} icon={stat.icon} value={stat.change} title={stat.title} subtitle={stat.value}/>
        ))}
        </div>
        <ReportTabsClient className="w-full" />
        <div className="flex flex-col md:flex-row gap-3 mt-2">
          <div className="w-full md:flex-1">
            <SectionChartCard title={"اتجاه الاستخدام"}/>
          </div>
          <div className="w-full md:flex-1">
            <ChargingTypeDonutChart />
          </div>
        </div>
        <div className="p-1" >
      {sectionsData.map((section, index) => (
        < SectionCard key={index} title={section.title} cards={section.cards} />
      ))}
    </div>
      </div>
    </main>
  );
}
