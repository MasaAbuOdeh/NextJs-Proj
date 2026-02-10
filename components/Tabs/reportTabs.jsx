
import TabButton from "./tabButton"

export default function ReportTabs({
  tabs,
  activeTab = "performance",
  onTabChange,
}) {
  return (
    <nav className="w-full" aria-label="تقارير">
      <div className="overflow-x-auto scrollbar-hide">
        <div 
          className="flex flex-1 gap-4 min-w-max p-2 bg-white rounded-xl border border-gray-100 shadow-sm"
          role="tablist"
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.key}
              id={tab.key}
              label={tab.label}
              icon={tab.icon}
              isActive={activeTab === tab.key}
              onTabChange={onTabChange}
            />
          ))}
        </div>
      </div>
    </nav>
  )
}




