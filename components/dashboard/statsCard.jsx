import {
  Activity,
  Zap,
  Clock,
  BarChart3,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';

const statsData = [
  {
    id: 'resources',
    title: 'اجمالي الحسابات ',
    value: '1.23',
    icon: Activity,
    change: 12.3,
    changeType: 'increase',
  },
  {
    id: 'session',
    title: 'متوسط مدة الجلسة',
    value: '45 دقيقة',
    icon: Clock,
    change: 5.7,
    changeType: 'increase',
  },
  {
    id: 'energy',
    title: 'متوسط الطاقة المستهلكة',
    value: '2,450 كيلو واط',
    icon: Zap,
    change: 8.1,
    changeType: 'increase',
  },
  {
    id: 'transactions',
    title: 'معدل استغلال الشواحن',
    value: '78%',
    icon: BarChart3,
    change: 18.2,
    changeType: 'increase',
  },
];

export default function StatsCards() {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4" 
    >
      {statsData.map((stat) => {
        const Icon = stat.icon;
        const isIncrease = stat.changeType === 'increase';

        return (
          <div
            key={stat.id}
            className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-neutral-500">
                    {stat.title}
                  </span>
                  <p className="text-xl font-bold tracking-tight text-neutral-900">
                    {stat.value}
                  </p>
                </div>
              </div>
              <span
                className={`inline-flex items-center gap-1 rounded-full mt-2 px-2 py-1 text-xs font-medium ${
                  isIncrease
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {isIncrease ? (
                  <ArrowUp className="h-3 w-3" />
                ) : (
                  <ArrowDown className="h-3 w-3" />
                )}
                {stat.change}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
