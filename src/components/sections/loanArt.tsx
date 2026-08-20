import { cn } from "@/lib/utils";

type ArtProps = { className?: string };

function MoneyBag({
  x,
  y,
  fill,
  rupee = "#FFF7ED",
}: {
  x: number;
  y: number;
  fill: string;
  rupee?: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d="M10 12c0-5 12-5 12 0l5 22c1 8-21 8-20 0z"
        fill={fill}
      />
      <rect x="8" y="8" width="16" height="7" rx="3" fill={fill} />
      <rect x="12" y="5" width="8" height="6" rx="2" fill={fill} opacity="0.85" />
      <text
        x="16"
        y="30"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill={rupee}
      >
        ₹
      </text>
    </g>
  );
}

function ApprovedCard({
  x,
  y,
  title,
  accent,
}: {
  x: number;
  y: number;
  title: string;
  accent: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="78" height="40" rx="8" fill="white" />
      <rect x="0.5" y="0.5" width="77" height="39" rx="8" fill="none" stroke={accent} strokeWidth="1.2" />
      <text
        x="39"
        y="16"
        textAnchor="middle"
        fontSize="7.5"
        fontWeight="700"
        fill="#1F2937"
      >
        {title}
      </text>
      <text
        x="39"
        y="30"
        textAnchor="middle"
        fontSize="9"
        fontWeight="800"
        fill="#16A34A"
      >
        APPROVED
      </text>
    </g>
  );
}

function Keys({ x, y, fill }: { x: number; y: number; fill: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle cx="8" cy="8" r="6" fill="none" stroke={fill} strokeWidth="2.4" />
      <path d="M13 10 L26 16" stroke={fill} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M22 14 L24 18" stroke={fill} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M25 15.5 L27 19.5" stroke={fill} strokeWidth="2.2" strokeLinecap="round" />
    </g>
  );
}

export function PersonalArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={cn("h-full w-full", className)} aria-hidden>
      <ellipse cx="80" cy="108" rx="48" ry="7" fill="#E9D5FF" />
      <path d="M48 78c-6 18 52 22 58 2 4-14-10-24-28-24s-26 10-30 22z" fill="#8B5CF6" />
      <rect x="70" y="48" width="28" height="34" rx="10" fill="#A78BFA" />
      <circle cx="84" cy="36" r="12" fill="#C4B5FD" />
      <rect x="78" y="42" width="14" height="18" rx="4" fill="#7C3AED" />
      <rect x="88" y="52" width="8" height="14" rx="2" fill="#4C1D95" />
      <MoneyBag x={18} y={58} fill="#6366F1" />
      <circle cx="28" cy="98" r="5" fill="#F59E0B" />
      <circle cx="38" cy="102" r="4" fill="#FBBF24" />
      <ApprovedCard x={78} y={8} title="Personal Loan" accent="#8B5CF6" />
    </svg>
  );
}

export function BusinessArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={cn("h-full w-full", className)} aria-hidden>
      <ellipse cx="80" cy="108" rx="50" ry="7" fill="#BAE6FD" />
      <rect x="28" y="42" width="28" height="52" rx="3" fill="#38BDF8" />
      <rect x="60" y="28" width="34" height="66" rx="3" fill="#0EA5E9" />
      <rect x="98" y="48" width="24" height="46" rx="3" fill="#0284C7" />
      <rect x="34" y="50" width="6" height="6" rx="1" fill="#E0F2FE" />
      <rect x="44" y="50" width="6" height="6" rx="1" fill="#E0F2FE" />
      <rect x="34" y="62" width="6" height="6" rx="1" fill="#E0F2FE" />
      <rect x="66" y="38" width="7" height="7" rx="1" fill="#E0F2FE" />
      <rect x="78" y="38" width="7" height="7" rx="1" fill="#E0F2FE" />
      <rect x="66" y="52" width="7" height="7" rx="1" fill="#E0F2FE" />
      <rect x="72" y="74" width="10" height="20" rx="1" fill="#0369A1" />
      <MoneyBag x={8} y={62} fill="#0369A1" />
      <ApprovedCard x={78} y={6} title="Business Loan" accent="#0284C7" />
    </svg>
  );
}

export function HomeArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={cn("h-full w-full", className)} aria-hidden>
      <ellipse cx="80" cy="108" rx="50" ry="7" fill="#FED7AA" />
      <path d="M30 62 L80 24 L130 62 Z" fill="#F97316" />
      <rect x="42" y="62" width="76" height="38" rx="3" fill="#FDBA74" />
      <rect x="70" y="74" width="20" height="26" rx="2" fill="#C2410C" />
      <rect x="50" y="70" width="14" height="12" rx="1.5" fill="#FFEDD5" />
      <rect x="96" y="70" width="14" height="12" rx="1.5" fill="#FFEDD5" />
      <MoneyBag x={8} y={58} fill="#EA580C" />
      <Keys x={118} y={78} fill="#C2410C" />
      <ApprovedCard x={78} y={4} title="Home Loan" accent="#EA580C" />
    </svg>
  );
}

export function PropertyArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={cn("h-full w-full", className)} aria-hidden>
      <ellipse cx="80" cy="108" rx="50" ry="7" fill="#BBF7D0" />
      <rect x="48" y="22" width="64" height="76" rx="4" fill="#22C55E" />
      <rect x="56" y="30" width="12" height="12" rx="1.5" fill="#DCFCE7" />
      <rect x="74" y="30" width="12" height="12" rx="1.5" fill="#DCFCE7" />
      <rect x="92" y="30" width="12" height="12" rx="1.5" fill="#BBF7D0" />
      <rect x="56" y="48" width="12" height="12" rx="1.5" fill="#BBF7D0" />
      <rect x="74" y="48" width="12" height="12" rx="1.5" fill="#DCFCE7" />
      <rect x="92" y="48" width="12" height="12" rx="1.5" fill="#DCFCE7" />
      <rect x="56" y="66" width="12" height="12" rx="1.5" fill="#DCFCE7" />
      <rect x="92" y="66" width="12" height="12" rx="1.5" fill="#BBF7D0" />
      <rect x="72" y="74" width="16" height="24" rx="2" fill="#166534" />
      <MoneyBag x={8} y={58} fill="#15803D" />
      <Keys x={118} y={78} fill="#166534" />
      <ApprovedCard x={78} y={4} title="Property Loan" accent="#16A34A" />
    </svg>
  );
}

export function EducationArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={cn("h-full w-full", className)} aria-hidden>
      <ellipse cx="80" cy="108" rx="48" ry="7" fill="#A5F3FC" />
      <rect x="42" y="68" width="62" height="12" rx="2" fill="#67E8F9" />
      <rect x="46" y="78" width="62" height="12" rx="2" fill="#22D3EE" />
      <rect x="50" y="88" width="62" height="12" rx="2" fill="#0E7490" />
      <path d="M40 36 L80 22 L120 36 L80 50 Z" fill="#14B8A6" />
      <path d="M120 36 V52" stroke="#0F766E" strokeWidth="3" />
      <circle cx="120" cy="55" r="4" fill="#F59E0B" />
      <rect x="52" y="34" width="56" height="10" rx="2" fill="#0D9488" />
      <MoneyBag x={10} y={58} fill="#0F766E" />
      <ApprovedCard x={78} y={4} title="Education Loan" accent="#0D9488" />
    </svg>
  );
}

export function CarArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={cn("h-full w-full", className)} aria-hidden>
      <ellipse cx="80" cy="108" rx="52" ry="7" fill="#FECDD3" />
      <path
        d="M24 70c6-18 22-28 48-28 28 0 46 10 56 28h12c4 0 8 4 8 9v10c0 5-4 9-9 9H21c-5 0-9-4-9-9V79c0-5 4-9 8-9z"
        fill="#F43F5E"
      />
      <path d="M48 44c10-8 20-10 28-10 16 0 34 8 42 22H48z" fill="#FB7185" />
      <rect x="52" y="48" width="22" height="12" rx="3" fill="#FEE2E2" />
      <rect x="80" y="48" width="26" height="12" rx="3" fill="#FEE2E2" />
      <circle cx="44" cy="96" r="10" fill="#1F2937" />
      <circle cx="44" cy="96" r="4" fill="#E5E7EB" />
      <circle cx="116" cy="96" r="10" fill="#1F2937" />
      <circle cx="116" cy="96" r="4" fill="#E5E7EB" />
      <MoneyBag x={6} y={52} fill="#BE123C" />
      <Keys x={122} y={62} fill="#9F1239" />
      <ApprovedCard x={78} y={4} title="Car Loan" accent="#E11D48" />
    </svg>
  );
}

export const loanArt = {
  personal: PersonalArt,
  business: BusinessArt,
  home: HomeArt,
  property: PropertyArt,
  education: EducationArt,
  car: CarArt,
} as const;

export type LoanArtKey = keyof typeof loanArt;
