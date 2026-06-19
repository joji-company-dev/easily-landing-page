import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

// ──────────────────────────────────────────────────────────
// 요금제 정책 (레이아웃은 참고 디자인, 색은 easily 주황 브랜드)
// 모든 플랜 공통: 최대 영상 길이 5분
// ──────────────────────────────────────────────────────────
// 대시보드(결제 페이지) 베이스 URL — 클릭 시 결제로 이동
const DASHBOARD_URL =
  process.env.NEXT_PUBLIC_DASHBOARD_URL ||
  "https://easily-dashboard.jojicompany.com";

const PLANS = [
  {
    name: "무료",
    description: "영상 제작을 체험해보세요",
    price: "무료",
    priceSuffix: "",
    cta: "무료로 시작",
    href: `${DASHBOARD_URL}/login`,
    highlight: false,
    quotas: ["기획안 3개까지 생성", "유튜브 영상 분석 15분 / 월"],
    features: [
      { label: "720p 화질", included: true },
      { label: "최대 영상 길이 5분", included: true },
      { label: "공유하기", included: false },
    ],
    note: "무료로 만든 기획안은 홈에 자동 게시됩니다.",
  },
  {
    name: "라이트",
    description: "개인 크리에이터를 위한 플랜",
    price: "₩6,900",
    priceSuffix: "/ 월",
    cta: "라이트 시작하기",
    href: `${DASHBOARD_URL}/dashboard/billing?plan=LIGHT`,
    highlight: true,
    badge: "추천",
    quotas: ["기획안 10개까지 생성", "유튜브 영상 분석 50분 / 월"],
    features: [
      { label: "1080p 화질", included: true },
      { label: "최대 영상 길이 5분", included: true },
      { label: "공유하기", included: false },
    ],
  },
  {
    name: "프로",
    description: "본격적인 운영을 위한 플랜",
    price: "₩19,800",
    priceSuffix: "/ 월",
    cta: "프로 시작하기",
    href: `${DASHBOARD_URL}/dashboard/billing?plan=PRO`,
    highlight: false,
    quotas: ["기획안 무제한 생성", "유튜브 영상 분석 150분 / 월"],
    features: [
      { label: "1080p 화질", included: true },
      { label: "최대 영상 길이 5분", included: true },
      { label: "공유하기", included: true },
    ],
  },
];

function FeatureRow({ label, included }) {
  return (
    <li className="flex items-center gap-2 text-sm">
      {included ? (
        <Check className="h-4 w-4 shrink-0 text-primary" />
      ) : (
        <X className="h-4 w-4 shrink-0 text-muted-foreground/50" />
      )}
      <span className={cn(!included && "text-muted-foreground/60 line-through")}>
        {label}
      </span>
    </li>
  );
}

function PlanCard({ plan }) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border bg-card p-6 sm:p-8",
        plan.highlight
          ? "border-primary ring-1 ring-primary shadow-md"
          : "border-border",
      )}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {plan.badge}
        </span>
      )}

      {/* 헤더 */}
      <h3 className="text-xl font-bold">{plan.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{plan.description}</p>

      {/* 가격 */}
      <div className="mt-6 flex items-end gap-1">
        <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
        {plan.priceSuffix && (
          <span className="pb-1 text-sm text-muted-foreground">
            {plan.priceSuffix}
          </span>
        )}
      </div>

      {/* CTA */}
      <a
        href={plan.href}
        className={cn(
          "mt-6 block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition-colors",
          plan.highlight
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        )}
      >
        {plan.cta}
      </a>

      {/* 플랜 내 포함 */}
      <div className="mt-8">
        <p className="text-sm font-semibold">플랜 내 포함</p>
        <ul className="mt-3 space-y-2.5">
          {plan.quotas.map((q) => (
            <li key={q} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 shrink-0 text-primary" />
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 주요 기능 */}
      <div className="mt-6">
        <p className="text-sm font-semibold">주요 기능</p>
        <ul className="mt-3 space-y-2.5">
          {plan.features.map((f) => (
            <FeatureRow key={f.label} label={f.label} included={f.included} />
          ))}
        </ul>
      </div>

      {plan.note && (
        <p className="mt-6 rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
          {plan.note}
        </p>
      )}
    </div>
  );
}

export default function PricePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
          나에게 맞는 플랜을
          <br />
          지금 시작하세요
        </h2>
        <p className="mt-4 text-muted-foreground">
          모든 플랜은 최대 영상 길이 5분까지 지원합니다.
        </p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    </div>
  );
}
