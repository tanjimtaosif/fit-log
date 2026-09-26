import { PLAN_TABS } from "@/constants/plan.constants";
import type { PlanTab } from "@/types/plan.types";

interface PlanTabsProps {
  activeTab: PlanTab;
  onChange: (tab: PlanTab) => void;
}

export default function PlanTabs({ activeTab, onChange }: PlanTabsProps) {
  return (
    <div role="tablist" aria-label="Plan lists" className="inline-flex rounded-xl border border-line bg-surface p-1">
      {PLAN_TABS.map(({ value, label }) => {
        const isActive = value === activeTab;

        return (
          <button
            key={value}
            type="button"
            role="tab"
            id={`tab-${value}`}
            aria-selected={isActive}
            aria-controls="plan-panel"
            onClick={() => onChange(value)}
            className={`rounded-lg px-4 py-2 text-[13px] transition-colors sm:px-5 ${
              isActive ? "bg-surface-2 font-semibold text-white" : "text-muted hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
