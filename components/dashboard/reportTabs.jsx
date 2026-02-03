import {
  BarChart3,
  DollarSign,
  Zap,
  Users,
  Activity,
  Wrench,
  FileText,
} from "lucide-react"
import TabButton from "./tabButton"
const tabs = [
  { id: "performance", label: "تقرير الأداء", icon: BarChart3 },
  { id: "financial", label: "تقرير مالي", icon: DollarSign },
  { id: "energy", label: "تقرير الطاقة", icon: Zap },
  { id: "customers", label: "تقرير العملاء", icon: Users },
  { id: "usage", label: "تقرير الاستخدام", icon: Activity },
  { id: "maintenance", label: "تقرير الصيانة", icon: Wrench },
  { id: "general", label: "تقرير عام", icon: FileText },
]

export default function ReportTabs({
  activeTab = "performance",
  onTabChange,
}) {
  return (
    <nav dir="rtl" className="w-full" aria-label="تقارير">
      <div className="overflow-x-auto scrollbar-hide">
        <div 
          className="flex flex-1 gap-4 min-w-max p-2 bg-white rounded-xl border border-gray-100 shadow-sm"
          role="tablist"
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              id={tab.id}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.id}
              onTabChange={onTabChange}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}




