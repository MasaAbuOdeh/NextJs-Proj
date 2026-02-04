import { Activity, Zap, Clock, BarChart3 } from "lucide-react";

export const performanceData = [
  { date: '11/6', revenue: 30, expenses: 20 },
  { date: '12/6', revenue: 45, expenses: 35 },
  { date: '13/6', revenue: 38, expenses: 50 },
  { date: '15/6', revenue: 15, expenses: 30 },
  { date: '16/6', revenue: 40, expenses: 100 },
  { date: '17/6', revenue: 90, expenses: 8 },
  { date: '18/6', revenue: 10, expenses: 28 },
];

export const statsData = [
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

export const sectionsData = [
  {
    title: "الاداء التشغيلي",
    cards: [
      { icon: Clock, title: "وقت التشغيل", subtitle: "الهدف 99 ", value: "12%" },
      { icon: Activity, title: "متوسط وقت الاستجابة", subtitle: "الهدف :>2 ثانية", value: "8%" },
      { icon: BarChart3, title: "معدل نجاح الجلسات", subtitle: "الهدف :>95", value: "12%" },
      { icon: Clock, title: "وقت التشغيل", subtitle: "الهدف 99 ", value: "12%" },
    ],
  },
  {
    title: "الكفاءة المالية",
    cards: [
      { icon: Clock, title: "وقت التشغيل", subtitle: "الهدف 99 ", value: "12%" },
      { icon: Activity, title: "متوسط وقت الاستجابة", subtitle: "الهدف :>2 ثانية", value: "8%" },
      { icon: BarChart3, title: "معدل نجاح الجلسات", subtitle: "الهدف :>95", value: "12%" },
      { icon: Clock, title: "وقت التشغيل", subtitle: "الهدف 99 ", value: "12%" },
    ],
  },
  {
    title: "رضا العملاء",
    cards: [
      { icon: Clock, title: "وقت التشغيل", subtitle: "الهدف 99 ", value: "12%" },
      { icon: Activity, title: "متوسط وقت الاستجابة", subtitle: "الهدف :>2 ثانية", value: "8%" },
      { icon: BarChart3, title: "معدل نجاح الجلسات", subtitle: "الهدف :>95", value: "12%" },
      { icon: Clock, title: "وقت التشغيل", subtitle: "الهدف 99 ", value: "12%" },
    ],
  },
];