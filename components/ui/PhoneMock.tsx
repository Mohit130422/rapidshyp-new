import Icon from "@/components/ui/Icon";

// A stylized phone frame containing a shipping dashboard mock.
export default function PhoneMock({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative w-[260px] rounded-[2.5rem] border-[10px] border-ink bg-ink p-0 shadow-card ${className}`}
    >
      {/* notch */}
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="overflow-hidden rounded-[1.8rem] bg-white">
        {/* status bar */}
        <div className="flex items-center justify-between px-4 pb-1 pt-3 text-[10px] font-semibold text-ink">
          <span>9:41</span>
          <span className="flex gap-1 text-muted">●●●</span>
        </div>

        {/* header */}
        <div className="flex items-center justify-between px-4 py-2">
          <span className="text-sm font-bold text-ink">Dashboard</span>
          <Icon.bot className="h-4 w-4 text-brand-600" />
        </div>

        {/* tabs */}
        <div className="mx-3 flex gap-1 rounded-full bg-surface-muted p-1 text-[9px] font-semibold">
          {["Business", "COD", "NDR", "Insight"].map((t, i) => (
            <span
              key={t}
              className={`flex-1 rounded-full px-1 py-1 text-center ${
                i === 0 ? "bg-brand-800 text-white" : "text-muted"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* metric cards */}
        <div className="grid grid-cols-2 gap-2 px-3 py-3">
          {[
            { label: "Today's Order Count", value: "74", trend: "+4.5%" },
            { label: "Total Revenue", value: "₹9279", trend: "+1.5%" },
            { label: "Average Orders", value: "16", trend: "+0.9%" },
            { label: "Average Order Value", value: "₹3015", trend: "+2.2%" },
          ].map((m) => (
            <div key={m.label} className="rounded-xl bg-surface-muted p-2">
              <p className="text-[8px] leading-tight text-muted">{m.label}</p>
              <p className="mt-1 text-sm font-bold text-ink">{m.value}</p>
              <p className="text-[8px] font-semibold text-emerald-500">{m.trend}</p>
            </div>
          ))}
        </div>

        {/* shipment overview */}
        <div className="px-3 pb-4">
          <p className="text-[10px] font-bold text-ink">Shipment Overview</p>
          <p className="mb-2 text-[8px] text-muted">Shipment split by shipping mode</p>
          <div className="flex items-end justify-center">
            <div className="relative h-16 w-32">
              <div className="absolute inset-0 rounded-t-full border-[10px] border-brand-200 border-b-transparent" />
              <div
                className="absolute inset-0 rounded-t-full border-[10px] border-brand-700 border-b-transparent border-l-transparent"
                style={{ transform: "rotate(15deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
