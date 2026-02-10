// dashboardTabs.config.js
import {
  BarChart3,
  DollarSign,
  Clock,
  Zap,
  Users,
  Activity,
  Wrench,
  FileText,
  icons,
} from "lucide-react";
export const dashboardTabsConfig = [
  {
    key: "overview",
    label: "نظرة عامة",
    icon: BarChart3,

    charts: [
      {
        type: "donut",
        title: "توزيع انواع الشحن",
        data: [
          { name: "شحن سريع", value: 35, color: "#22c55e" },
          { name: "شحن عادي", value: 30, color: "#3b82f6" },
          { name: "شحن ليلي", value: 20, color: "#8b5cf6" },
          { name: "شحن تجريبي", value: 15, color: "#f59e0b" },
        ],
      },
      {
        type: "area",
        title: "اتجاه الاستخدام",
        data: [
          { date: "1/1", revenue: 30, expenses: 10 },
          { date: "1/2", revenue: 45, expenses: 20 },
          { date: "1/3", revenue: 50, expenses: 25 },
          { date: "1/4", revenue: 70, expenses: 30 },
          { date: "1/5", revenue: 90, expenses: 50 },
        ],
        series: [{ key: "revenue", label: "معدل الاستخدام", color: "#14b8a6" }],
      },
    ],

    sections: [
      {
        title: "الاداء التشغيلي",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "الكفاءة المالية",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "رضا العملاء",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
    ],
  },

  {
    key: "Financial",
    label: " التقرير المالي",
    icon: DollarSign,

    charts: [
      {
        title: "اتجاه الايرادات",
        type: "area",
        data: [
          { date: "1/1", revenue: 30, expenses: 10 },
          { date: "1/2", revenue: 45, expenses: 20 },
          { date: "1/3", revenue: 50, expenses: 25 },
          { date: "1/4", revenue: 70, expenses: 30 },
        ],
        series: [
          { key: "revenue", label: "الإيرادات", color: "#14b8a6" },
          { key: "expenses", label: "المصروفات", color: "#4f46e5" },
        ],
      },
      {
        type: "donut",
        title: "توزيع الايرادات",
        data: [
          { name: "شحن سريع", value: 35, color: "#22c55e" },
          { name: "شحن عادي", value: 30, color: "#3b82f6" },
          { name: "شحن ليلي", value: 20, color: "#8b5cf6" },
          { name: "شحن تجريبي", value: 15, color: "#f59e0b" },
        ],
      },
    ],

    sections: [
      {
        title: "الاداء التشغيلي",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "الكفاءة المالية",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "رضا العملاء",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
    ],
  },
  {
    key: "energy",
    label: "تقرير الطاقة",
    icon: Zap,

    charts: [
      {
        type: "bar",
        title: "كفاءة الاستخدام",
        data: [
          {
            name: "المشروع 1",
            value: 80,
            fill: "#F59E0B",
          },
          {
            name: "المشروع 2",
            value: 90,
            fill: "#10B981",
          },
          {
            name: "المشروع 3",
            value: 55,
            fill: "#22D3EE",
          },
          {
            name: "المشروع 4",
            value: 58,
            fill: "#5B21B6",
          },
          {
            name: "المشروع 5",
            value: 58,
            fill: "#5B21B6",
          },
          {
            name: "المشروع 6",
            value: 10,
            fill: "#5B21B6",
          },
          {
            name: "المشروع 7",
            value: 100,
            fill: "#5B21B6",
          },
        ],
      },
      {
        type: "area",
        title: "استهلاك الطاقة الشهري",
        data: [
          { date: "1/1", revenue: 70, expenses: 20 },
          { date: "1/2", revenue: 60, expenses: 25 },
          { date: "1/3", revenue: 80, expenses: 40 },
          { date: "1/4", revenue: 70, expenses: 25 },
        ],
        series: [{ key: "revenue", label: "استهلاك الطاقة", color: "#14b8a6" }],
      },
    ],

    sections: [
      {
        title: "الاداء التشغيلي",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "الكفاءة المالية",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "رضا العملاء",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
    ],
  },
  {
    key: "customers",
    label: "تقرير العملاء",
    icon: Users,

    charts: [
      {
        type: "donut",
        title: "رضا العملاء",
        data: [
          { name: "ممتاز", value: 35, color: "#22c55e" },
          { name: "جيد جدا", value: 35, color: "#227cc5" },
          { name: "جيد", value: 30, color: "#f63bd7" },
          { name: "مقبول", value: 20, color: "#f6735c" },
          { name: "ضعيف", value: 15, color: "#f59e0b" },
        ],
      },
      {
        type: "area",
        data: [
          { date: "1/1", revenue: 30, expenses: 10 },
          { date: "1/2", revenue: 45, expenses: 20 },
          { date: "1/3", revenue: 50, expenses: 25 },
          { date: "1/4", revenue: 70, expenses: 30 },
        ],
        series: [
          { key: "revenue", label: "الإيرادات", color: "#14b8a6" },
          { key: "expenses", label: "المصروفات", color: "#4f46e5" },
        ],
      },
    ],

    sections: [
      {
        title: "الاداء التشغيلي",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "الكفاءة المالية",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "رضا العملاء",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
    ],
  },
  {
    key: "maintenance",
    label: "تقرير الصيانة",
    icon: Wrench,

    charts: [
      {
        type: "donut",
        title: "توزيع انواع الشحن",
        data: [
          { name: "شحن سريع", value: 35, color: "#22c55e" },
          { name: "شحن عادي", value: 30, color: "#3b82f6" },
          { name: "شحن ليلي", value: 20, color: "#8b5cf6" },
          { name: "شحن تجريبي", value: 15, color: "#f59e0b" },
        ],
      },
      {
        type: "area",
        title: "اتجاه الاستخدام",
        data: [
          { date: "1/1", revenue: 30, expenses: 10 },
          { date: "1/2", revenue: 45, expenses: 20 },
          { date: "1/3", revenue: 50, expenses: 25 },
          { date: "1/4", revenue: 70, expenses: 30 },
        ],
        series: [
          { key: "revenue", label: "الإيرادات", color: "#14b8a6" },
          { key: "expenses", label: "المصروفات", color: "#4f46e5" },
        ],
      },
    ],

    sections: [
      {
        title: "الاداء التشغيلي",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "الكفاءة المالية",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "رضا العملاء",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
    ],
  },
  {
    key: "usage",
    label: "تقرير الاستخدام",
    icon: BarChart3,

    charts: [
      {
        type: "donut",
        data: [
          { name: "شحن سريع", value: 35, color: "#22c55e" },
          { name: "شحن عادي", value: 30, color: "#3b82f6" },
          { name: "شحن ليلي", value: 20, color: "#8b5cf6" },
          { name: "شحن تجريبي", value: 15, color: "#f59e0b" },
        ],
      },
      {
        type: "area",
        data: [
          { date: "1/1", revenue: 30, expenses: 10 },
          { date: "1/2", revenue: 45, expenses: 20 },
          { date: "1/3", revenue: 50, expenses: 25 },
          { date: "1/4", revenue: 70, expenses: 30 },
          { date: "1/5", revenue: 90, expenses: 50 },
        ],
        series: [{ key: "revenue", label: "معدل الاستخدام", color: "#14b8a6" }],
      },
    ],

    sections: [
      {
        title: "الاداء التشغيلي",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "الكفاءة المالية",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "رضا العملاء",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
    ],
  },
  {
    key: "ocpp2.0.1",
    label: "تقرير ocpp2.0.1",
    icon: FileText,

    charts: [
      {
        type: "donut",
        title: "Ocpp2.0.1 مؤشرات",
        data: [
          { name: "شحن سريع", value: 35, color: "#22c55e" },
          { name: "شحن عادي", value: 30, color: "#3b82f6" },
          { name: "شحن ليلي", value: 20, color: "#8b5cf6" },
          { name: "شحن تجريبي", value: 15, color: "#f59e0b" },
        ],
      },
      {
        type: "area",
        data: [
          { date: "1/1", revenue: 30, expenses: 10 },
          { date: "1/2", revenue: 45, expenses: 20 },
          { date: "1/3", revenue: 50, expenses: 25 },
          { date: "1/4", revenue: 70, expenses: 30 },
          { date: "1/5", revenue: 90, expenses: 50 },
        ],
        series: [{ key: "revenue", label: "معدل الاستخدام", color: "#14b8a6" }],
      },
    ],

    sections: [
      {
        title: "الاداء التشغيلي",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "الكفاءة المالية",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
      {
        title: "رضا العملاء",
        cards: [
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
          {
            icon: Activity,
            title: "متوسط وقت الاستجابة",
            subtitle: "الهدف :>2 ثانية",
            value: "8%",
          },
          {
            icon: BarChart3,
            title: "معدل نجاح الجلسات",
            subtitle: "الهدف :>95",
            value: "12%",
          },
          {
            icon: Clock,
            title: "وقت التشغيل",
            subtitle: "الهدف 99 ",
            value: "12%",
          },
        ],
      },
    ],
  },
];

export const statsData = [
  {
    id: "resources",
    title: "اجمالي الحسابات ",
    value: "1.23",
    icon: Activity,
    change: 12.3,
    changeType: "increase",
  },
  {
    id: "session",
    title: "متوسط مدة الجلسة",
    value: "45 دقيقة",
    icon: Clock,
    change: 5.7,
    changeType: "increase",
  },
  {
    id: "energy",
    title: "متوسط الطاقة المستهلكة",
    value: "2,450 كيلو واط",
    icon: Zap,
    change: 8.1,
    changeType: "increase",
  },
  {
    id: "transactions",
    title: "معدل استغلال الشواحن",
    value: "78%",
    icon: BarChart3,
    change: 18.2,
    changeType: "increase",
  },

];

export const chargerCards = [
  {
    id: 1,
    title: "شاحن الرياض",
    subtitle:"محطة الرياض الرئيسية",
    value: "3,480",
    currency: "ر.س",
    numberOfSession: "156 جلسة",
    rating: 4.9,
    reviewsCount: 128,
    progress: 50,
    sideColor: "border-l-4 border-green-500",
    icon: <BarChart3 />,
  },
  {
    id: 2,
    title: "شاحن جدة",
    subtitle:"محطة الرياض الرئيسية",
    value: "2,150",
    currency: "ر.س",
    numberOfSession: "98 جلسة",
    progress: 72,
    sideColor: "border-l-4 border-yellow-500",
    icon: <BarChart3 />,
  },
  {
    id: 3,
    title: "شاحن الدمام",
    subtitle:"محطة الرياض الرئيسية",
    value: "1,980",
    currency: "ر.س",
    numberOfSession: "75 جلسة",
    progress: 60,
    sideColor: "border-l-4 border-red-500",
    icon: <BarChart3 />,
  },
];

