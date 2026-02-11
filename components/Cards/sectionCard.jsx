import MonitoringCard from './monitoringCard';
import { Star, User, Settings } from 'lucide-react';
import UserStatsCard from '@/components/Cards/bestUsersCard';
import RecommendationCard from './recomendationCard';
import ExpectationCard from '@/components/Cards/expectationCard';
const STATUS_CONFIG = {
  connected: {
    border: 'border-l-green-500',
    text: 'text-green-600',
    label: { en: 'Connected', ar: 'متصل' },
  },
  maintenance: {
    border: 'border-l-yellow-500',
    text: 'text-yellow-600',
    label: { en: 'Maintenance', ar: 'صيانة' },
  },
  disconnected: {
    border: 'border-l-red-500',
    text: 'text-red-600',
    label: { en: 'Disconnected', ar: 'غير متصل' },
  },
};
export default function SectionCard({ title, subtitle, cards, CardComponent }) {
  console.log(cards);
  console.log(CardComponent);

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 mt-4">{title}</h2>
      <h3 className="text-xl mb-4 mt-4">{subtitle}</h3>
      <div
        className={`${
          title === 'الشواحن الاعلى أداء'
            ? 'grid grid-cols-3 gap-4 overflow-x-auto'
            : 'grid grid-cols-4 gap-4 overflow-x-auto'
        }`}
      >
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
      <div className=" mt-4 grid grid-cols-3 gap-4">
        <MonitoringCard
          deviceName="شاحن الرياض الرئيسي"
          status="maintenance"
          statusConfig={STATUS_CONFIG}
          infoItems={[
            {
              key: 'voltage',
              label: { ar: 'الجهد', en: 'Voltage' },
              value: '220V',
            },
            {
              key: 'temp',
              label: { ar: 'الحرارة', en: 'Temperature' },
              value: '35°C',
            },
            {
              key: 'load',
              label: { ar: 'الحمل', en: 'Load' },
              value: '70%',
            },
          ]}
        />
        <UserStatsCard
          amount={18750}
          lable="ر.س"
          userName="احمد محمد الاحمد"
          numberOfSession="جلسة 128"
          rating={4.7}
          ratingIcon={<Star size={14} />}
          icon={<User size={18} />}
        />
        <RecommendationCard
          title="جدولة الصيانة الذكية"
          description="جدولة الصيانة في اوقات الاستخدام المنخفض"
          highlightText="تقليل التوقف 25%"
          icon={<Settings />}
        />
      </div>
      <div className=" mt-4 grid grid-cols-3 gap-4">
        <ExpectationCard
        title="شاحن جدة المركزي"
        subtitle="تحديث البرنامج مطلوب"
        suggestion="استبدال الموصل"
        values={{
          duration: "5-7 أيام",
          efficiency: "95%",
          cost: "0 رس",
          lastUpdate: "2024-01-20",
        }
        }
        />
      </div>
    </div>
  );
}
