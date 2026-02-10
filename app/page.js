"use client";

import { useState } from "react";
import {dashboardTabsConfig, statsData, chargerCards} from "../data/dashboardTabs.config"
import ChartRenderer from "@/components/Charts/chartRender";
import ReportTabs from "@/components/Tabs/reportTabs";
import SectionCard from "@/components/Cards/sectionCard";
import Card from "@/components/Cards/Card";
import PerformanceCard from "@/components/Cards/chargersCard";


export default function DashboardClient() {
  const [activeTab, setActiveTab] = useState(dashboardTabsConfig[0].key);
  console.log(activeTab);
  const tabData = dashboardTabsConfig.find((t) => t.key === activeTab);

  return (
    <main className="min-h-screen bg-background bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="flex flex-col gap-2 justify-center">
        <div className="grid grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <Card
              key={stat.id}
              icon={stat.icon}
              value={stat.change}
              title={stat.title}
              subtitle={stat.value}
            />
          ))}
        </div>
        {/* Tabs */}
        <ReportTabs
          tabs={dashboardTabsConfig}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        {/* Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {tabData.charts.map((chart, index) => (
            <ChartRenderer
              title={chart.title}
              key={index}
              type={chart.type}
              data={chart.data}
              xKey={chart.type === "area" ? "date" : "label"}
              valueKey="value"
              series={chart.series || []}
            />
          ))}
        </div>

        {/* Cards */}
        {tabData.sections.map((section) => (
          
          <SectionCard
            key={section.title}
            title={section.title}
            cards={section.cards}
            CardComponent={Card}
          />
        ))}
        {/* Section الشواحن */}
        <SectionCard
          title="الشواحن الاعلى أداء"
          subtitle="ترتيب الشواحن حسب الاداء و الايرادات"
          cards={chargerCards}
          CardComponent={PerformanceCard}
        />
      </div>
    </main>
  );
}
