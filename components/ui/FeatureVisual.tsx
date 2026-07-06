import type { ReactNode } from "react";
import type { FeatureVisualName } from "@/types";
import Icon from "@/components/ui/Icon";

// Card frame shared by every visual: gradient top bar + white body.
function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-white shadow-card">
      <div className="h-12 gradient-brand" />
      <div className="relative -mt-6 p-5">{children}</div>
      {/* warm accent edge */}
      <div className="absolute bottom-0 right-0 top-0 w-2 bg-gradient-to-b from-brand-600 to-orange-accent" />
    </div>
  );
}

function FloatChip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`absolute z-20 rounded-2xl border border-line bg-white px-3 py-2 text-center shadow-soft ${className}`}
    >
      {children}
    </div>
  );
}

function Domestic() {
  return (
    <Frame>
      <div className="rounded-xl border border-line bg-white p-3">
        {["Surface", "Express", "Same Day"].map((row, i) => (
          <div
            key={row}
            className="flex items-center justify-between border-b border-line py-2 last:border-0"
          >
            <span className="text-xs font-medium text-ink-soft">{row}</span>
            <span className="rounded-md bg-brand-700 px-2 py-0.5 text-[10px] font-semibold text-white">
              Ship Now
            </span>
            <span className="text-[10px] text-amber-accent">★★★★</span>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-line bg-surface-muted p-4">
        <p className="text-[10px] text-muted">Business Insights</p>
        <p className="mt-1 text-lg font-extrabold text-ink">4,505</p>
        <p className="text-[10px] font-semibold text-emerald-500">+12.5% Avg orders</p>
      </div>
      <FloatChip className="-top-2 right-3">
        <p className="text-[9px] text-muted">Fastest Shipping</p>
        <p className="text-xs font-bold text-brand-700">Across India</p>
      </FloatChip>
    </Frame>
  );
}

function Ayumi() {
  return (
    <Frame>
      <div className="flex flex-col items-center py-2">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-rose-200 to-brand-200">
          <Icon.bot className="h-10 w-10 text-brand-700" />
        </div>
        <div className="mt-3 rounded-2xl bg-surface-muted px-4 py-2 text-center">
          <p className="text-xs font-bold text-ink">Hey, I am Ayumi</p>
          <p className="text-[10px] text-muted">Ask me anything…</p>
        </div>
        <div className="mt-3 self-end rounded-2xl bg-brand-700 px-3 py-1.5 text-[11px] font-semibold text-white">
          Track my Order.
        </div>
        <div className="mt-3 flex w-full justify-between gap-2 text-[10px] font-medium text-ink-soft">
          <span className="rounded-lg border border-line px-2 py-1">Track Order</span>
          <span className="rounded-lg border border-line px-2 py-1">Insights</span>
          <span className="rounded-lg border border-line px-2 py-1">Create</span>
        </div>
      </div>
      <FloatChip className="-top-1 right-3">
        <p className="text-[9px] text-muted">Response in</p>
        <p className="text-sm font-extrabold text-brand-700">5 Sec</p>
      </FloatChip>
    </Frame>
  );
}

function Ndr() {
  return (
    <Frame>
      <div className="flex items-center justify-between px-2 py-3">
        {[
          { label: "Order", tone: "bg-rose-100 text-rose-500" },
          { label: "Call", tone: "bg-amber-100 text-amber-500" },
          { label: "Delivered", tone: "bg-emerald-100 text-emerald-500" },
        ].map((s, i) => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <span className={`grid h-9 w-9 place-items-center rounded-full ${s.tone}`}>
              <Icon.check className="h-4 w-4" />
            </span>
            <span className="text-[10px] text-muted">{s.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-xl bg-emerald-50 p-4 text-center">
        <p className="text-[10px] text-muted">RTO</p>
        <p className="text-2xl font-extrabold text-emerald-600">↓ 32%</p>
        <p className="text-[10px] font-semibold text-emerald-600">Reduction</p>
      </div>
      <FloatChip className="-left-2 top-10">
        <p className="text-[9px] text-muted">AI Retry Success</p>
        <p className="text-sm font-extrabold text-brand-700">8 Sec</p>
      </FloatChip>
    </Frame>
  );
}

function Cargo() {
  return (
    <Frame>
      <div className="relative h-36">
        <div className="absolute left-2 top-8 h-24 w-24 overflow-hidden rounded-xl bg-gradient-to-br from-amber-200 to-orange-300">
          <span className="absolute bottom-1 left-2 text-[10px] font-bold text-white drop-shadow">
            Delhi
          </span>
        </div>
        <div className="absolute right-2 top-0 h-24 w-24 overflow-hidden rounded-xl bg-gradient-to-br from-sky-200 to-indigo-300">
          <span className="absolute bottom-1 left-2 text-[10px] font-bold text-white drop-shadow">
            Mumbai
          </span>
        </div>
        <div className="absolute bottom-0 right-8 grid h-9 w-9 place-items-center rounded-full bg-brand-700 text-white">
          <Icon.truck className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-2 flex items-center gap-3 rounded-xl bg-amber-50 p-3">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-accent text-brand-900">
          <Icon.pin className="h-4 w-4" />
        </span>
        <div>
          <p className="text-sm font-bold text-ink">29000+ PIN Codes</p>
          <p className="text-[10px] text-muted">Available</p>
        </div>
      </div>
      <FloatChip className="-left-2 top-2">
        <p className="text-[9px] text-muted">Track in</p>
        <p className="text-sm font-extrabold text-brand-700">5 Sec</p>
      </FloatChip>
    </Frame>
  );
}

function Fulfillment() {
  return (
    <Frame>
      <div className="flex items-end justify-center gap-1 py-2">
        <div className="h-24 w-40 rounded-t-[2rem] bg-gradient-to-b from-brand-100 to-brand-50">
          <div className="mx-auto mt-8 grid grid-cols-3 gap-1 px-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="h-5 rounded-sm bg-amber-300/80" />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 rounded-xl bg-surface-muted p-4 text-center">
        <p className="text-[10px] text-muted">Order Packed</p>
        <p className="text-2xl font-extrabold text-gradient-brand">2,430</p>
        <p className="text-[10px] text-muted">Today</p>
      </div>
      <FloatChip className="-left-2 top-6">
        <p className="text-[9px] text-muted">Avg. Speed</p>
        <p className="text-sm font-extrabold text-brand-700">4–5 Hrs</p>
      </FloatChip>
    </Frame>
  );
}

function Checkout() {
  return (
    <Frame>
      <div className="space-y-2">
        {[
          { label: "UPI", icon: Icon.bolt },
          { label: "Wallet", icon: Icon.wallet },
          { label: "Cards", icon: Icon.card },
        ].map((m) => (
          <div
            key={m.label}
            className="flex items-center justify-between rounded-xl border border-line bg-white px-3 py-2.5"
          >
            <span className="flex items-center gap-2 text-xs font-medium text-ink-soft">
              <m.icon className="h-4 w-4 text-brand-600" />
              {m.label}
            </span>
            <Icon.arrowRight className="h-3.5 w-3.5 text-muted" />
          </div>
        ))}
        <div className="flex items-center justify-between rounded-xl bg-brand-700 px-3 py-3 text-white">
          <span className="flex items-center gap-2 text-xs font-semibold">
            <Icon.lock className="h-4 w-4" /> Pay Securely
          </span>
          <span className="text-sm font-bold">₹4,600.00</span>
        </div>
        <div className="flex justify-between pt-1 text-[10px] text-muted">
          <span className="flex items-center gap-1">
            <Icon.shield className="h-3.5 w-3.5" /> 100% Secure
          </span>
          <span className="flex items-center gap-1">
            <Icon.bolt className="h-3.5 w-3.5" /> Checkout in 15s
          </span>
        </div>
      </div>
      <FloatChip className="-left-2 top-8">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <Icon.check className="h-3.5 w-3.5" />
        </span>
        <p className="mt-1 text-[9px] font-semibold text-ink">Payment Successful</p>
      </FloatChip>
    </Frame>
  );
}

const visuals: Record<string, () => ReactNode> = {
  domestic: Domestic,
  ayumi: Ayumi,
  ndr: Ndr,
  cargo: Cargo,
  fulfillment: Fulfillment,
  checkout: Checkout,
};

export default function FeatureVisual({ name }: { name: FeatureVisualName | string }) {
  const Cmp = visuals[name] || Domestic;
  return (
    <div className="relative mx-auto w-full max-w-md">
      <Cmp />
    </div>
  );
}
