"use client";

import { ExecutiveSummary } from "@/components/dashboard/executive-summary";
import { StrategicMetrics } from "@/components/dashboard/strategic-metrics";
import { RevenuePulseChart } from "@/components/dashboard/revenue-pulse-chart";
import { RevenueForecast } from "@/components/dashboard/revenue-forecast";
import { IntelligentAlerts } from "@/components/dashboard/intelligent-alerts";
import { OpportunityRadarWidget } from "@/components/dashboard/opportunity-radar-widget";
import { RevenueLeakMapWidget } from "@/components/dashboard/revenue-leak-map-widget";
import { AIStrategicInsights } from "@/components/dashboard/ai-strategic-insights";
import { ActionCommandCenter } from "@/components/dashboard/action-command-center";

export default function DashboardPage() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-8 pb-12">
      {/* 1 & 2: Central Revenue & Health Index */}
      <section>
        <ExecutiveSummary />
      </section>

      {/* 3: Strategic Metrics Panel */}
      <section>
        <StrategicMetrics />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Charts and Forecast (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* 4: Revenue Pulse Chart */}
          <RevenuePulseChart />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 5: Predictive Revenue Forecast */}
            <RevenueForecast />
            {/* 8: Revenue Leak Map */}
            <RevenueLeakMapWidget />
          </div>

          {/* 9: AI Strategic Insights */}
          <AIStrategicInsights />
        </div>

        {/* Right Column: Alerts, Radar, Actions (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* 6: Valence Intelligent Alerts */}
          <IntelligentAlerts />

          {/* 7: Opportunity Radar */}
          <OpportunityRadarWidget />

          {/* 10: Action Command Center */}
          <ActionCommandCenter />
        </div>
      </div>
    </div>
  );
}
