'use client'

import { useState } from "react"
import ReportTabs from "./reportTabs"

export default function ReportTabsClient({ defaultTab = "performance" }) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div>
     <ReportTabs activeTab={activeTab} onTabChange={setActiveTab}/>
    </div>
  )
}
