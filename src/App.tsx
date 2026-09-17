import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-3az64qcjni";

/* ─── Agent Portal Dashboard ────────────────────────────────── */

function NotificationBell() {
  return (
    <div className="relative" data-name="Notification">
      <div className="relative shrink-0 size-[24px]">
        <svg className="absolute block inset-0 size-full" fill="none" height="24" viewBox="0 0 20 24" width="20">
          <g>
            <path d={svgPaths.p2681dd00} fill="#727272" />
            <path d={svgPaths.p251be680} fill="#727272" />
          </g>
        </svg>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#f44b40] h-[20px] left-[calc(50%+9px)] rounded-[23px] top-[-8px] px-1 flex items-center justify-center">
        <span className="font-['Theinhardt:Medium',sans-serif] text-[12px] text-white leading-none">32</span>
      </div>
    </div>
  );
}

/* ─── Sidebar nav data ──────────────────────────────────────── */

const primaryNav = [
  { id: "home",        label: "Home",              iconExp: "assets/81827.svg", iconCol: "assets/51741.svg" },
  { id: "quote",       label: "Quote & application", iconExp: "assets/2dd50.svg", iconCol: "assets/2dd50.svg" },
  { id: "customers",   label: "Customers",          iconExp: "assets/b6eb6.svg", iconCol: "assets/e975e.svg" },
  { id: "earnings",    label: "Earnings",           iconExp: "assets/f4771.svg", iconCol: "assets/efa7c.svg" },
  { id: "performance", label: "Performance",        iconExp: "assets/f4492.svg", iconCol: "assets/5a7f8.svg" },
  { id: "rewards",     label: "Rewards",            iconExp: "assets/ffd18.svg", iconCol: "assets/cf6f9.svg" },
];

const secondaryNav = [
  { id: "share",     label: "Share website", iconExp: "assets/c6d9c.svg", iconCol: "assets/673c4.svg" },
  { id: "resources", label: "Resources",     iconExp: "assets/61cdb.svg", iconCol: "assets/477b7.svg" },
  { id: "faq",       label: "FAQs",          iconExp: "assets/130a4.svg", iconCol: "assets/d8d0e.svg" },
  { id: "contact",   label: "Contact us",    iconExp: "assets/8234e.svg", iconCol: "assets/fc8d9.svg" },
  { id: "settings",  label: "Settings",      iconExp: "assets/5aae0.svg", iconCol: "assets/cee3d.svg" },
];

const EthosLogo = () => (
  <svg width="38" height="8" viewBox="0 0 38 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.21581 0.116915V1.41119H9.49956V7.88334H10.6412V1.41119H12.9247V0.116915H7.21581ZM0 0.116915V7.88334H5.05563V6.5888H1.14164V4.64726H4.5424V3.35299H1.14164V1.41119H5.05563V0.116915H0ZM19.7753 0.116915V3.35299H16.3502V0.116915H15.2083V7.88334H16.3502V4.64726H19.7753V7.88334H20.917V0.116915H19.7753V0.116915ZM29.6541 0.849236C29.4225 0.586652 29.1475 0.378358 28.8449 0.236249C28.5423 0.0941387 28.2179 0.0209957 27.8904 0.0209957C27.5628 0.0209957 27.2385 0.0941387 26.9358 0.236249C26.6332 0.378358 26.3583 0.586652 26.1266 0.849236C25.9859 1.00906 25.6927 1.38269 25.5925 1.56671C26.0688 1.23343 26.6302 1.09168 27.1863 1.16432C27.7423 1.23697 28.2605 1.51976 28.6575 1.96713C29.0544 2.41449 29.3069 3.00036 29.3743 3.63028C29.4416 4.26021 29.3199 4.8975 29.0287 5.43942L29.0672 5.39581C29.2342 5.28093 29.5098 5.01181 29.6541 4.84826C29.8857 4.58568 30.0694 4.27396 30.1948 3.93088C30.3201 3.5878 30.3846 3.22009 30.3846 2.84875C30.3846 2.4774 30.3201 2.10969 30.1948 1.76662C30.0694 1.42354 29.8857 1.11181 29.6541 0.849236" fill="white"/>
    <path d="M25.4256 5.64321C24.4456 4.53217 23.8453 2.48851 24.9513 0.328111L24.4343 0.914216C23.7497 1.69035 23.3651 2.74299 23.3652 3.84058C23.3652 4.93817 23.7498 5.9908 24.4344 6.76689C25.119 7.54299 26.0475 7.97898 27.0157 7.97895C27.9838 7.97893 28.9123 7.54289 29.5969 6.76676L30.1139 6.18065C28.299 7.3768 26.4931 6.85345 25.4256 5.64321ZM35.2701 8C36.9285 8 38 7.06845 38 5.62659C38 4.27479 37.1619 3.78584 35.8094 3.43588L34.9809 3.22978C34.2349 3.04284 33.8306 2.82557 33.8306 2.21288C33.8306 1.58821 34.344 1.18462 35.1387 1.18462C35.8802 1.18462 36.5328 1.49682 36.9348 2.04277L37.7952 1.25873C37.3216 0.678116 36.4861 0 35.169 0C33.6809 0 32.6007 0.959468 32.6007 2.28166C32.6007 3.79054 33.6903 4.25112 34.6396 4.48381L35.5591 4.71304C36.286 4.89201 36.7702 5.13746 36.7702 5.75255C36.7702 6.41365 36.2454 6.79233 35.3308 6.79233C34.3332 6.79233 33.5791 6.23681 33.2631 5.67676L32.319 6.44742C32.8053 7.20292 33.8296 8 35.2701 8Z" fill="white"/>
  </svg>
);

function Sidebar({ activeNav, onNavChange }: { activeNav: string; onNavChange: (id: string) => void }) {
  const [expanded, setExpanded] = useState(true);
  const [moreOpen, setMoreOpen] = useState(true);

  const labelClass = `overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out ${expanded ? "max-w-[180px] opacity-100" : "max-w-0 opacity-0"}`;

  return (
    <div
      className={`bg-[#056257] h-full shrink-0 flex flex-col gap-[24px] pt-[24px] overflow-hidden transition-[width] duration-300 ease-in-out drop-shadow-[0px_24px_24px_rgba(109,109,109,0.4)] ${expanded ? "w-[240px]" : "w-[64px]"}`}
    >
      {/* Header — always rendered, text fades out */}
      <div className={`flex items-center shrink-0 min-h-[44px] ${expanded ? "justify-between gap-[8px] px-[20px]" : "justify-center"}`}>
        <div className={`flex flex-col gap-[4px] overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "opacity-100 max-w-[160px]" : "opacity-0 max-w-0"}`}>
          <p
            className="font-['Cambon:Regular',Georgia,serif] text-[16px] text-white whitespace-nowrap leading-[24px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Century Insurance Co.
          </p>
          <div className="flex gap-[10px] items-center h-[16px]">
            <p className="font-['Theinhardt:Regular',sans-serif] text-[#f4f4f4] text-[12px] tracking-[0.09px] leading-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"case" 1' }}>
              Powered by
            </p>
            <EthosLogo />
          </div>
        </div>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="bg-[#f4f4f4] drop-shadow-[0px_0.875px_0.875px_rgba(16,24,40,0.06),0px_0.875px_1.313px_rgba(16,24,40,0.1)] rounded-full shrink-0 size-[28px] flex items-center justify-center cursor-pointer border-none"
        >
          <img alt="" src={expanded ? "assets/dc865.svg" : "assets/2d7d0.svg"} width="20" height="20" />
        </button>
      </div>

      {/* Nav body */}
      <div className="flex flex-1 flex-col gap-[16px] min-h-0 overflow-y-auto w-full">
        {/* Primary nav */}
        <div className="flex flex-col gap-[2px] shrink-0 w-full">
          {primaryNav.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <div key={item.id} className="flex flex-col items-center justify-center px-[8px] w-full">
                <button
                  onClick={() => onNavChange(item.id)}
                  className={`flex gap-[8px] items-center p-[12px] w-full cursor-pointer border-none transition-colors ${
                    isActive ? "bg-[rgba(255,255,255,0.8)] rounded-[8px]" : "rounded-[4px] hover:bg-[rgba(255,255,255,0.1)]"
                  }`}
                >
                  <div className="relative shrink-0 size-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={isActive ? item.iconExp : item.iconCol} />
                  </div>
                  <div className={labelClass}>
                    <p
                      className={`text-left text-[14px] leading-[20px] tracking-[-0.14px] ${isActive ? "font-['Theinhardt:Bold',sans-serif] text-[#056257]" : "font-['Theinhardt:Medium',sans-serif] text-white"}`}
                      style={{ fontFeatureSettings: '"case" 1' }}
                    >
                      {item.label}
                    </p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        {/* More section */}
        <div className="flex flex-col gap-[2px] shrink-0 w-full">
          {/* Divider (collapsed) / More toggle (expanded) */}
          <div className={`transition-all duration-300 overflow-hidden ${expanded ? "max-h-[40px] opacity-100" : "max-h-0 opacity-0"}`}>
            <button
              onClick={() => setMoreOpen((v) => !v)}
              className="flex gap-[8px] items-center mx-[8px] px-[12px] py-[4px] rounded-[4px] border-none bg-transparent cursor-pointer hover:bg-[rgba(255,255,255,0.08)] transition-colors w-[calc(100%-16px)]"
            >
              <p className="flex-1 min-w-0 font-['Theinhardt:Medium',sans-serif] text-[#d4d4d4] text-[14px] tracking-[-0.14px] leading-[20px] text-left" style={{ fontFeatureSettings: '"case" 1' }}>
                More
              </p>
              <img
                alt=""
                src="assets/0d186.svg"
                width="16"
                height="16"
                className={`shrink-0 transition-transform duration-200 ${moreOpen ? "" : "rotate-180"}`}
              />
            </button>
          </div>
          <div className={`transition-all duration-300 overflow-hidden ${!expanded ? "max-h-[4px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="mx-auto h-px w-[40px] bg-white opacity-20 my-[4px]" />
          </div>

          {/* Secondary nav items */}
          <div className={`flex flex-col gap-[2px] transition-all duration-300 overflow-hidden ${expanded && !moreOpen ? "max-h-0 opacity-0" : "max-h-[400px] opacity-100"}`}>
            {secondaryNav.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <div key={item.id} className="flex flex-col items-center justify-center px-[8px] w-full">
                  <button
                    onClick={() => onNavChange(item.id)}
                    className={`flex gap-[8px] items-center p-[12px] w-full cursor-pointer border-none transition-colors ${
                      isActive ? "bg-[rgba(255,255,255,0.8)] rounded-[8px]" : "rounded-[4px] hover:bg-[rgba(255,255,255,0.1)]"
                    }`}
                  >
                    <div className="relative shrink-0 size-[20px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isActive ? item.iconExp : item.iconCol} />
                    </div>
                    <div className={labelClass}>
                      <p
                        className={`text-left font-['Theinhardt:Medium',sans-serif] text-[14px] leading-[20px] tracking-[-0.14px] ${isActive ? "text-[#056257]" : "text-white"}`}
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Profile footer */}
      <div className="flex flex-col items-start p-[6px] shrink-0 w-full">
        <div className={`bg-[rgba(0,0,0,0.05)] drop-shadow-[0px_1px_1px_rgba(16,24,40,0.05)] flex gap-[8px] items-center rounded-[8px] w-full ${expanded ? "px-[20px] py-[16px]" : "justify-center p-[12px]"}`}>
          <div className="border border-white rounded-full shrink-0 size-[40px] relative overflow-hidden">
            <img alt="Pranjal Jain" className="absolute inset-0 size-full object-cover rounded-full" src="assets/970de.png" />
          </div>
          <div className={`flex flex-col gap-[2px] overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"}`}>
            <p className="font-['Theinhardt:Medium',sans-serif] text-white text-[14px] tracking-[-0.14px] leading-[20px] whitespace-nowrap" style={{ fontFeatureSettings: '"case" 1' }}>
              Pranjal Jain
            </p>
            <p className="font-['Theinhardt:Regular',sans-serif] text-white text-[12px] tracking-[0.09px] leading-[18px] whitespace-nowrap" style={{ fontFeatureSettings: '"case" 1' }}>
              pranjal.jain@getethos.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Form fields ───────────────────────────────────────────── */

type SelectOption = string | { value: string; health: string; bmi?: string };

function SelectField({ label, value, options, onChange, placeholder, labelLink }: {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (v: string) => void;
  placeholder?: string;
  labelLink?: { text: string; href?: string; onClick?: () => void };
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function optValue(o: SelectOption) { return typeof o === "string" ? o : o.value; }

  return (
    <div className="flex flex-col gap-[4px] items-start relative w-full" ref={ref}>
      <div className="flex items-center justify-between w-full gap-[8px]">
        <label
          className="font-['Theinhardt:Medium',sans-serif] text-[#525252] text-[16px] leading-[24px]"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          {label}
        </label>
        {labelLink && (labelLink.onClick ? (
          <button
            type="button"
            onClick={labelLink.onClick}
            className="font-['Theinhardt:Medium',sans-serif] text-[#865323] text-[14px] leading-[20px] underline decoration-dotted underline-offset-2 cursor-pointer bg-transparent border-none p-0"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {labelLink.text}
          </button>
        ) : (
          <a
            href={labelLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Theinhardt:Medium',sans-serif] text-[#865323] text-[14px] leading-[20px] underline decoration-dotted underline-offset-2 cursor-pointer"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {labelLink.text}
          </a>
        ))}
      </div>
      <div className="relative w-full">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`bg-white rounded-[8px] border w-full h-[56px] flex items-center px-[14px] gap-[8px] transition-shadow ${open ? "border-[#056257] shadow-[0px_0px_0px_2px_#dae7e6]" : "border-[#d4d4d4]"}`}
        >
          <span
            className={`flex-1 text-left font-['Theinhardt:Regular',sans-serif] text-[16px] leading-[24px] ${value ? "text-[#272727]" : "text-[#7e7e7e]"}`}
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {value || placeholder || "Select"}
          </span>
          <img
            src="assets/d0a41.svg"
            alt=""
            width="24"
            height="24"
            className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="absolute z-50 left-0 right-0 top-full mt-[4px] bg-white border border-[#d4d4d4] rounded-[8px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] max-h-[320px] overflow-y-auto">
            {options.map((o, i) => (
              <div key={optValue(o)}>
                {i > 0 && <div className="h-px bg-[#f4f4f4]" />}
                <div
                  className="flex items-center min-h-[48px] px-[6px] py-[2px] cursor-pointer hover:bg-[#f3f7f7]"
                  onClick={() => { onChange(optValue(o)); setOpen(false); }}
                >
                  <div className="flex-1 pl-[8px] pr-[10px] py-[10px] rounded-[6px]">
                    <p
                      className={`${typeof o !== "string" ? "font-['Theinhardt:Medium',sans-serif]" : "font-['Theinhardt:Regular',sans-serif]"} text-[#272727] text-[16px] leading-[24px]`}
                      style={{ fontFeatureSettings: '"case" 1' }}
                    >
                      {optValue(o)}
                    </p>
                    {typeof o !== "string" && (
                      <p
                        className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[13px] leading-[18px] mt-[2px]"
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        {o.health}{o.bmi ? <> &middot; BMI: {o.bmi}</> : null}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function TextField({ label, value, placeholder, onChange, suffix, dateMask }: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  suffix?: string;
  dateMask?: boolean;
}) {
  function handleDateInput(raw: string) {
    // Strip non-digits
    const digits = raw.replace(/\D/g, "").slice(0, 8);
    let formatted = digits;
    if (digits.length > 4) {
      formatted = digits.slice(0, 2) + "/" + digits.slice(2, 4) + "/" + digits.slice(4);
    } else if (digits.length > 2) {
      formatted = digits.slice(0, 2) + "/" + digits.slice(2);
    }
    onChange(formatted);
  }

  return (
    <div className="flex flex-col gap-[4px] items-start w-full">
      <label
        className="font-['Theinhardt:Medium',sans-serif] text-[#525252] text-[16px] leading-[24px]"
        style={{ fontFeatureSettings: '"case" 1' }}
      >
        {label}
      </label>
      <div className="relative bg-white rounded-[8px] border border-[#d4d4d4] w-full h-[56px] flex items-center px-[14px]">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          maxLength={dateMask ? 10 : undefined}
          onChange={(e) => dateMask ? handleDateInput(e.target.value) : onChange(e.target.value)}
          className="flex-1 bg-transparent font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px] leading-[24px] outline-none placeholder:text-[#7e7e7e]"
          style={{ fontFeatureSettings: '"case" 1' }}
        />
        {suffix && (
          <span
            className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px] ml-1"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Coverage Slider ───────────────────────────────────────── */

function CoverageSlider({ value, min, max, step = 5000, minLabel, maxLabel, onChange }: {
  value: number;
  min: number;
  max: number;
  step?: number;
  minLabel: string;
  maxLabel: string;
  onChange: (v: number) => void;
}) {
  const pct = Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));

  return (
    <div className="flex flex-col gap-[4px] items-start w-full">
      <div className="relative w-full h-[16px] pb-[4px]">
        <div className="absolute bottom-1/4 left-0 right-0 top-1/4 bg-[rgba(0,0,0,0.04)] rounded-[6px]" />
        <div
          className="absolute bottom-1/4 left-0 top-1/4 bg-[#054742] rounded-[6px]"
          style={{ right: `${100 - pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 size-[16px] bg-[#054742] rounded-full pointer-events-none"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      <div className="flex justify-between w-full">
        <span
          className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[14px] leading-[20px]"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          {minLabel}
        </span>
        <span
          className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[14px] leading-[20px]"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          {maxLabel}
        </span>
      </div>
    </div>
  );
}

/* ─── Included Benefits ─────────────────────────────────────── */

function CheckBadgeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M12 3l2.2 1.3 2.5-.3 1.1 2.3 2.3 1.1-.3 2.5L21 12l-1.3 2.2.3 2.5-2.3 1.1-1.1 2.3-2.5-.3L12 21l-2.2-1.3-2.5.3-1.1-2.3-2.3-1.1.3-2.5L3 12l1.3-2.2-.3-2.5 2.3-1.1 1.1-2.3 2.5.3L12 3z" stroke="#056257" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M8.5 12.5l2.3 2.3 4.7-4.8" stroke="#056257" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Icons pulled from the Ethos Brand Icons library (Figma), 1C-D variant */
const BENEFIT_ITEMS = [
  { icon: "assets/benefit-estate-planning.svg", label: "Estate Planning" },
  { icon: "assets/benefit-document-checkmark.svg", label: "Wills & Trust" },
  { icon: "assets/benefit-circle-plus.svg", label: "+3 More Perks" },
  { icon: "assets/benefit-heart-shield-group.svg", label: "ADBO/ABO Rider" },
];

/* ─── Quote Visualizer ──────────────────────────────────────── */

function QuotePanel({
  coverage,
  onCoverageChange,
  adEnabled,
  onAdToggle,
  adMultiplier,
  onAdMultiplierChange,
}: {
  coverage: number;
  onCoverageChange: (v: number) => void;
  adEnabled: boolean;
  onAdToggle: () => void;
  adMultiplier: number;
  onAdMultiplierChange: (v: number) => void;
}) {
  const [coverageMode, setCoverageMode] = useState<"coverage" | "premium">("coverage");

  const COVERAGE_MAX = 300000;
  const COVERAGE_PER_PREMIUM_DOLLAR = 2500;
  const PREMIUM_MIN = 30;
  const PREMIUM_MAX = COVERAGE_MAX / COVERAGE_PER_PREMIUM_DOLLAR;

  const basePremium = Math.round((coverage / 150000) * 60 * 100) / 100;
  const adPremium = adEnabled ? Math.round(basePremium * adMultiplier * 100) / 100 : 0;
  const totalPremium = basePremium + adPremium;
  const totalCoverage = adEnabled ? coverage + coverage * adMultiplier : coverage;
  const agentEarnings = Math.round(totalPremium * 12 * 9.353 * 100) / 100;

  const fmt = (n: number) =>
    n >= 1000
      ? "$" + n.toLocaleString("en-US")
      : "$" + n.toFixed(2);

  const adCoverageValue = (m: number) =>
    coverageMode === "premium"
      ? `$${(basePremium * m).toFixed(2)}/mo`
      : fmt(coverage * m);

  return (
    <div className="flex flex-col gap-[24px] w-full">
      {/* Coverage / Premium card */}
      <div className="bg-white rounded-[8px] border border-[#e9e9e9] p-[24px] flex flex-col gap-[16px]">

        {/* Row 1 — Term Life coverage */}
        <div className="flex items-center justify-between gap-[16px]">
          <button
            onClick={() => setCoverageMode("coverage")}
            className="flex items-center gap-[16px] bg-transparent border-none cursor-pointer p-0"
          >
            <img
              src={coverageMode === "coverage" ? "assets/7c303.svg" : "assets/5a00c.svg"}
              width={24} height={24} alt=""
            />
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[18px] leading-[28px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Term Life coverage
            </p>
          </button>
          <p
            className="font-['Theinhardt:Bold',sans-serif] text-[#272727] text-[20px] leading-[28px] shrink-0"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {fmt(coverage)}
          </p>
        </div>

        {/* Slider under coverage row */}
        {coverageMode === "coverage" && (
          <div className="pl-[40px]">
            <CoverageSlider value={coverage} min={15000} max={COVERAGE_MAX} minLabel="$15K" maxLabel="$300K" onChange={onCoverageChange} />
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-[#e9e9e9]" />

        {/* Row 2 — Premium */}
        <div className="flex items-center justify-between gap-[16px]">
          <button
            onClick={() => setCoverageMode("premium")}
            className="flex items-center gap-[16px] bg-transparent border-none cursor-pointer p-0"
          >
            <img
              src={coverageMode === "premium" ? "assets/7c303.svg" : "assets/5a00c.svg"}
              width={24} height={24} alt=""
            />
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[18px] leading-[28px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Premium
            </p>
          </button>
          <p
            className="font-['Theinhardt:Bold',sans-serif] text-[#272727] text-[20px] leading-[28px] shrink-0"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            ${basePremium.toFixed(2)}/mo
          </p>
        </div>

        {/* Slider under premium row */}
        {coverageMode === "premium" && (
          <div className="pl-[40px]">
            <CoverageSlider
              value={basePremium}
              min={PREMIUM_MIN}
              max={PREMIUM_MAX}
              step={1}
              minLabel="$30/mo"
              maxLabel={`$${PREMIUM_MAX}/mo`}
              onChange={(premium) => onCoverageChange(premium * COVERAGE_PER_PREMIUM_DOLLAR)}
            />
          </div>
        )}
      </div>

      {/* AD coverage card */}
      <div className="bg-white rounded-[8px] border border-[#e9e9e9] p-[24px] flex flex-col gap-[16px]">
        <div className="flex items-center justify-between gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <p
              className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Accidental Death (AD) coverage
            </p>
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[16px] leading-[24px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Multiply your client's cover in case of an accident.
            </p>
          </div>
          <button
            onClick={onAdToggle}
            className={`relative shrink-0 w-[54px] h-[26px] rounded-[13px] transition-colors cursor-pointer border-none ${
              adEnabled ? "bg-[#056257]" : "bg-[#d4d4d4]"
            }`}
          >
            <div
              className={`absolute top-[2px] size-[22px] rounded-full bg-white shadow-sm transition-transform ${
                adEnabled ? "translate-x-[28px]" : "translate-x-[2px]"
              }`}
            />
          </button>
        </div>
        <div
          className="grid transition-all duration-300 ease-in-out"
          style={{
            gridTemplateRows: adEnabled ? "1fr" : "0fr",
            marginTop: adEnabled ? "0px" : "-16px",
          }}
        >
          <div className="overflow-hidden">
            <div className="flex gap-[8px] pt-[0px]">
              {[1, 2, 3].map((multiplier) => {
                const isSelected = multiplier === adMultiplier;
                return (
                  <button
                    key={multiplier}
                    onClick={() => onAdMultiplierChange(multiplier)}
                    className={`flex-1 flex flex-col gap-[4px] p-[12px] rounded-[8px] border text-left cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-[#dae7e6] border-[#056257]"
                        : "bg-white border-[#e9e9e9] hover:bg-[#f3f7f7]"
                    }`}
                  >
                    <p
                      className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[12px] leading-[16px]"
                      style={{ fontFeatureSettings: '"case" 1' }}
                    >
                      {multiplier}x of Term
                    </p>
                    <p
                      className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[22px]"
                      style={{ fontFeatureSettings: '"case" 1' }}
                    >
                      {adCoverageValue(multiplier)}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Totals card */}
      <div className="bg-white rounded-[8px] border border-[#e9e9e9] p-[24px] flex flex-col gap-[16px]">
        <div className="flex items-center justify-between">
          <p
            className="font-['Theinhardt:Bold',sans-serif] text-[#272727] text-[18px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Estimated Coverage
          </p>
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[20px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {fmt(totalCoverage)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p
            className="font-['Theinhardt:Bold',sans-serif] text-[#272727] text-[18px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Estimated Premium
          </p>
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[20px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            ${totalPremium.toFixed(2)}/mo
          </p>
        </div>
      </div>

      {/* Included benefits */}
      <div className="bg-white rounded-[8px] border border-[#e9e9e9] p-[24px] flex flex-col gap-[16px]">
        <div className="flex items-center gap-[8px]">
          <CheckBadgeIcon />
          <p
            className="font-['Theinhardt:Bold',sans-serif] text-[#272727] text-[18px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Included Benefits
          </p>
        </div>
        <p
          className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[14px] leading-[20px]"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          A <span className="line-through">$1,198</span> value — included at $0
        </p>
        <div className="grid gap-[12px] grid-cols-[repeat(auto-fit,minmax(130px,1fr))]">
          {BENEFIT_ITEMS.map((benefit) => (
            <div
              key={benefit.label}
              className="bg-[#f4f4f4] rounded-[12px] p-[16px] flex flex-col items-center gap-[8px] text-center"
            >
              <div className="size-[40px] rounded-full border border-[#056257] flex items-center justify-center">
                <img src={benefit.icon} alt="" width={22} height={22} />
              </div>
              <p
                className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[14px] leading-[18px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                {benefit.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Agent earnings card */}
      <div className="bg-white rounded-[8px] border border-[#e9e9e9] p-[24px]">
        <div className="flex items-center justify-between">
          <p
            className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[18px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Agent 1st Year Earnings
          </p>
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[20px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            ${agentEarnings.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Change Product Panel ──────────────────────────────────── */

type ProductEntry = { id: string; name: React.ReactNode; provider: React.ReactNode };
type ProductGroup = { category: string; products: ProductEntry[] };

const PRODUCTS_WITH_TABS = ["Final Expense Whole Life", "TruStage Final Expense"];

const PRODUCT_GROUPS: ProductGroup[] = [
  {
    category: "TERM LIFE",
    products: [
      { id: "Term Life Insurance", name: "Term Life Insurance", provider: "Banner Life, Protective & Ameritas" },
      { id: "Term Life Insurance - Choice", name: "Term Life Insurance - Choice", provider: "Ameritas" },
      {
        id: "TruStage Term Life",
        name: <><span>TruStage</span><sup className="text-[10px]">®</sup><span> Term Life</span></>,
        provider: <><span>TruStage</span><sup className="text-[9px]">®</sup></>,
      },
      { id: "Return of Premium Term Life", name: "Return of Premium Term Life", provider: "John Hancock" },
    ],
  },
  {
    category: "IUL",
    products: [
      { id: "Accumulation IUL", name: "Accumulation IUL", provider: "North American" },
      { id: "Ethos Protection IUL", name: "Ethos Protection IUL", provider: "Ameritas" },
    ],
  },
  {
    category: "WHOLE LIFE",
    products: [
      { id: "TruStage Final Expense", name: "TruStage Final Expense", provider: "TruStage®" },
      { id: "Final Expense Whole Life", name: "Final Expense Whole Life", provider: "Banner Life" },
    ],
  },
];

function ChangeProductPanel({ open, onClose, onSelect, selectedProduct }: { open: boolean; onClose: () => void; onSelect: (name: string) => void; selectedProduct: string }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${open ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Sliding panel */}
      <div
        className={`fixed top-0 right-0 h-full z-50 bg-white flex flex-col shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "520px" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#f4f4f4] shrink-0">
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Change Product
          </p>
          <button
            onClick={onClose}
            className="size-[32px] flex items-center justify-center rounded-[6px] hover:bg-[#f4f4f4] border-none bg-transparent cursor-pointer transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="#525252" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        {/* Product list */}
        <div className="flex-1 overflow-y-auto">
          {PRODUCT_GROUPS.map((group, gi) => (
            <div key={group.category}>
              <div className={`flex items-center px-[16px] pb-[8px] pt-[20px] ${gi > 0 ? "border-t border-[#f4f4f4]" : ""}`}>
                <p
                  className="font-['Theinhardt:Medium',sans-serif] text-[#7e7e7e] text-[12px] tracking-[0.09px] leading-[16px]"
                  style={{ fontFeatureSettings: '"case" 1' }}
                >
                  {group.category}
                </p>
              </div>
              {group.products.map((product, pi) => {
                const isActive = product.id === selectedProduct;
                return (
                  <button
                    key={pi}
                    className={`w-full text-left flex items-center px-[16px] py-[12px] cursor-pointer border-none transition-colors ${
                      isActive
                        ? "bg-[#f3f7f7] border-b border-[#f4f4f4]"
                        : "bg-white hover:bg-[#f9fafb]"
                    }`}
                    onClick={() => onSelect(product.id)}
                  >
                    <div className="flex flex-col gap-[2px]">
                      <p
                        className={`font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] ${isActive ? "text-[#056257]" : "text-[#272727]"}`}
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        {product.name}
                      </p>
                      <p
                        className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[14px] leading-[20px]"
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        {product.provider}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Credit Estimate Info Panel ─────────────────────────────── */

const CREDIT_TIERS: { name: string; points: string[] }[] = [
  {
    name: "Strong",
    points: [
      "Uses credit with low revolving balances",
      "No missed payments",
      "Excellent credit score (>750)*",
    ],
  },
  {
    name: "Average",
    points: [
      "Has established credit that is not maxed out",
      "Almost never pays late",
      "Credit score > 650*",
    ],
  },
  {
    name: "Building Credit History",
    points: [
      "Doesn't have any credit or loans",
      "Has less than 2 years of credit history",
      "Regularly maxing out credit line",
      "Has missed several credit card or loan payments in the past 3 years",
      "Has filed bankruptcy in the last 7 years",
    ],
  },
];

function CreditEstimateInfoPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${open ? "opacity-40 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Sliding panel */}
      <div
        className={`fixed top-0 right-0 h-full z-50 bg-white flex flex-col shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "520px" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-[16px] px-[24px] py-[20px] border-b border-[#f4f4f4] shrink-0">
          <div className="flex flex-col gap-[4px]">
            <p
              className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Credit Estimate — How it works
            </p>
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Your client must meet ALL of these criteria
            </p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 size-[32px] flex items-center justify-center rounded-[6px] hover:bg-[#f4f4f4] border-none bg-transparent cursor-pointer transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="#525252" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        {/* Tier list */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[20px] flex flex-col gap-[24px]">
          {CREDIT_TIERS.map((tier) => (
            <div key={tier.name} className="flex flex-col gap-[8px]">
              <p
                className="font-['Theinhardt:Medium',sans-serif] text-[#056257] text-[16px] leading-[24px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                {tier.name}
              </p>
              <ul className="flex flex-col gap-[6px] pl-[20px] list-disc">
                {tier.points.map((point) => (
                  <li
                    key={point}
                    className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[14px] leading-[20px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─── Main content: Quote form ──────────────────────────────── */

const PRODUCTS = [
  "Banner Life Simplified Issue Whole Life",
  "Banner Life Simplified Issue Whole Life — Plus",
];

/* Resource links shown under the product header. For products with sub-product
   tabs, the set shown updates with the active tab since guides usually differ
   per variant; products without tabs fall back to DEFAULT_RESOURCE_LINKS. */
const DEFAULT_RESOURCE_LINKS = [
  { label: "Underwriting & Product Guidelines", href: "https://online.flippingbook.com/view/406249855/" },
  { label: "Product Knockout Guide", href: "https://online.flippingbook.com/view/318795893/" },
  { label: "Rx Red Flags", href: "https://online.flippingbook.com/view/257941078/" },
];

const RESOURCE_LINKS_BY_TAB: Record<number, { label: string; href: string }[]> = {
  0: [
    { label: "Underwriting & Product Guidelines", href: "https://online.flippingbook.com/view/406249855/" },
    { label: "Product Knockout Guide", href: "https://online.flippingbook.com/view/318795893/" },
    { label: "Rx Red Flags", href: "https://online.flippingbook.com/view/257941078/" },
  ],
  1: [
    { label: "Underwriting & Product Guidelines", href: "https://online.flippingbook.com/view/406249855/" },
    { label: "Plus Plan Knockout Guide", href: "https://online.flippingbook.com/view/318795893/" },
    { label: "Rx Red Flags", href: "https://online.flippingbook.com/view/257941078/" },
  ],
};

function ExternalLinkIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M14 5h5v5M19 5l-7 7M8 5H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2" stroke="#336cc3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ResourceLinksRow({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="flex gap-[8px] flex-wrap">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f5f8fc] flex gap-[6px] items-center px-[12px] py-[6px] rounded-[6px] cursor-pointer no-underline transition-colors hover:bg-[#eaf1fa]"
        >
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#336cc3] text-[13px] tracking-[-0.13px] leading-[18px] whitespace-nowrap"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {link.label}
          </p>
          <ExternalLinkIcon size={16} />
        </a>
      ))}
    </div>
  );
}

type ProductFieldConfig = {
  showHealthCredit: boolean;
  showBMI: boolean;
  smokingPrefill?: string;
};

const PRODUCT_FIELD_CONFIG: Record<string, ProductFieldConfig> = {
  "Final Expense Whole Life":  { showHealthCredit: false, showBMI: false, smokingPrefill: "Non-smoker" },
  "TruStage Final Expense":    { showHealthCredit: false, showBMI: false, smokingPrefill: "Non-smoker" },
};

function getProductConfig(product: string): ProductFieldConfig {
  return PRODUCT_FIELD_CONFIG[product] ?? { showHealthCredit: true, showBMI: true };
}

function QuoteForm({
  activeProduct,
  onProductChange,
  formState,
  onFormChange,
  isAllFilled,
  isLoading,
  onGenerateQuote,
  onChangeProduct,
  selectedProduct,
  onShowCreditInfo,
}: {
  activeProduct: number;
  onProductChange: (i: number) => void;
  formState: Record<string, string>;
  onFormChange: (key: string, value: string) => void;
  isAllFilled: boolean;
  isLoading: boolean;
  onGenerateQuote: () => void;
  onChangeProduct: () => void;
  selectedProduct: string;
  onShowCreditInfo: () => void;
}) {
  const [tabLoading, setTabLoading] = useState(false);

  function handleTabChange(i: number) {
    if (i === activeProduct) return;
    setTabLoading(true);
    onProductChange(i);
    setTimeout(() => setTabLoading(false), 500);
  }

  const hasTabs = PRODUCTS_WITH_TABS.includes(selectedProduct);
  const config = getProductConfig(selectedProduct);

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Product header */}
      <div className="flex items-start justify-between gap-[8px]">
        <div className="flex flex-col gap-[4px]">
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[20px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {selectedProduct}
          </p>
        </div>
        <button
          onClick={onChangeProduct}
          className="shrink-0 font-['Theinhardt:Medium',sans-serif] text-[#865323] text-[16px] leading-[24px] underline decoration-dotted underline-offset-2 cursor-pointer"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          Change Product
        </button>
      </div>

      {/* Sub-product tabs — only for products that have variants */}
      {hasTabs && (
        <div className="relative grid grid-cols-2 bg-[#f3f7f7] rounded-full p-[4px]">
          {/* Sliding highlight */}
          <div
            className="absolute top-[4px] bottom-[4px] left-[4px] rounded-full bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.08)] transition-transform duration-300 ease-in-out"
            style={{ width: "calc(50% - 4px)", transform: `translateX(${activeProduct * 100}%)` }}
          />
          {PRODUCTS.map((name, i) => (
            <button
              key={i}
              onClick={() => handleTabChange(i)}
              className={`relative z-10 h-[40px] rounded-full px-[16px] text-center cursor-pointer border-none bg-transparent transition-colors font-['Theinhardt:Medium',sans-serif] text-[14px] leading-[20px] truncate ${
                activeProduct === i ? "text-[#056257]" : "text-[#525252] hover:text-[#272727]"
              }`}
              style={{ fontFeatureSettings: '"case" 1', letterSpacing: "-0.14px" }}
            >
              {name}
            </button>
          ))}
        </div>
      )}

      {/* Resource links — reflect the active sub-product tab when present */}
      <ResourceLinksRow links={hasTabs ? (RESOURCE_LINKS_BY_TAB[activeProduct] ?? DEFAULT_RESOURCE_LINKS) : DEFAULT_RESOURCE_LINKS} />

      {/* Divider */}
      <div className="h-px bg-[#F4F4F4] mx-[-40px]" />

      {tabLoading ? (
        <div className="flex flex-col gap-[16px] animate-pulse">
          <div className="h-[20px] w-[140px] bg-[#e9e9e9] rounded-[4px]" />
          <div className="h-[56px] bg-[#e9e9e9] rounded-[8px]" />
          <div className="h-[56px] bg-[#e9e9e9] rounded-[8px]" />
          <div className="h-[56px] w-2/3 bg-[#e9e9e9] rounded-[8px]" />
        </div>
      ) : (
      <>
      {/* Basic information */}
      <div className="flex flex-col gap-[4px]">
        <p
          className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          Basic information
        </p>
      </div>

      <div className="flex gap-[20px]">
        <div className="flex-1">
          <SelectField
            label="Sex"
            value={formState.sex}
            options={["Male", "Female"]}
            onChange={(v) => onFormChange("sex", v)}
            placeholder="Select biological sex"
          />
        </div>
        <div className="flex-1">
          <TextField
            label="Birth date"
            value={formState.birthdate}
            placeholder="mm/dd/yyyy"
            onChange={(v) => onFormChange("birthdate", v)}
            dateMask
          />
        </div>
      </div>

      <div className="flex gap-[20px]">
        <div className="flex-1">
          <SelectField
            label="Smoking"
            value={formState.smoking}
            options={["Non-smoker", "Smoker"]}
            onChange={(v) => onFormChange("smoking", v)}
            placeholder="Smoker or non-smoker?"
          />
        </div>
        <div className="flex-1">
          <SelectField
            label="Residence"
            value={formState.residence}
            options={["Arizona", "California", "Texas", "Florida", "New York"]}
            onChange={(v) => onFormChange("residence", v)}
            placeholder="Select state"
          />
        </div>
      </div>

      {config.showHealthCredit && (
        <div className="flex gap-[20px]">
          <div className="flex-1">
            <SelectField
              label="Health class"
              value={formState.rateClass}
              options={[
                { value: "Preferred Plus", health: "Excellent health", bmi: "26–30" },
                { value: "Preferred", health: "Good health", bmi: "18–26" },
                { value: "Standard", health: "Average health", bmi: "30–40" },
                { value: "Substandard", health: "Poor health", bmi: ">40" },
                { value: "Substandard (Table Rating)", health: "Major health issues" },
              ]}
              onChange={(v) => onFormChange("rateClass", v)}
              placeholder="Select health class"
            />
          </div>
          <div className="flex-1">
            <SelectField
              label="Credit estimate"
              value={formState.credit}
              options={["Strong", "Average", "Building Credit History"]}
              onChange={(v) => onFormChange("credit", v)}
              placeholder="Estimate credit score"
              labelLink={{ text: "How it works", onClick: onShowCreditInfo }}
            />
          </div>
        </div>
      )}

      {config.showBMI && (
        <>
          {/* Divider */}
          <div className="h-px bg-[#F4F4F4]" />

          {/* BMI */}
          <div className="flex flex-col gap-[4px]">
            <p
              className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              BMI
            </p>
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[16px] leading-[24px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              We use BMI to automatically provide more accurate quotes on the next page.
            </p>
          </div>

          <div className="flex gap-[20px]">
            <div className="flex-1 flex flex-col gap-[4px]">
              <label
                className="font-['Theinhardt:Medium',sans-serif] text-[#525252] text-[16px] leading-[24px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                Height
              </label>
              <div className="flex gap-[8px]">
                <div className="relative bg-white rounded-[8px] border border-[#d4d4d4] flex-1 h-[56px] flex items-center px-[14px]">
                  <input
                    type="text"
                    value={formState.heightFt}
                    placeholder="0"
                    onChange={(e) => onFormChange("heightFt", e.target.value)}
                    className="flex-1 w-0 bg-transparent font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px] outline-none placeholder:text-[#7e7e7e]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  />
                  <span
                    className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    ft
                  </span>
                </div>
                <div className="relative bg-white rounded-[8px] border border-[#d4d4d4] flex-1 h-[56px] flex items-center px-[14px]">
                  <input
                    type="text"
                    value={formState.heightIn}
                    placeholder="0"
                    onChange={(e) => onFormChange("heightIn", e.target.value)}
                    className="flex-1 w-0 bg-transparent font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px] outline-none placeholder:text-[#7e7e7e]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  />
                  <span
                    className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    in
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <TextField
                label="Weight"
                value={formState.weight}
                placeholder="0"
                suffix="lbs"
                onChange={(v) => onFormChange("weight", v)}
              />
            </div>
          </div>
        </>
      )}

      <button
        onClick={onGenerateQuote}
        disabled={!isAllFilled || isLoading}
        className={`w-full mt-[12px] rounded-[8px] border px-[16px] py-[12px] font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] transition-colors flex items-center justify-center gap-[8px] ${
          isAllFilled && !isLoading
            ? "bg-[#000000] border-[#000000] text-white cursor-pointer hover:bg-[#1a1a1a]"
            : "bg-[#d4d4d4] border-[#d4d4d4] text-white cursor-not-allowed"
        }`}
        style={{ fontFeatureSettings: '"case" 1' }}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin shrink-0" fill="none" height="16" viewBox="0 0 16 16" width="16">
              <circle className="opacity-25" cx="8" cy="8" r="6" stroke="white" strokeWidth="2" />
              <path className="opacity-75" d="M8 2a6 6 0 0 1 6 6" stroke="white" strokeLinecap="round" strokeWidth="2" />
            </svg>
            Generating Quote...
          </>
        ) : (
          "Generate Quote"
        )}
      </button>
      </>
      )}
    </div>
  );
}

/* ─── App ───────────────────────────────────────────────────── */

export default function App() {
  const [activeNav, setActiveNav] = useState("quote");
  const [activeProduct, setActiveProduct] = useState(0);
  const [coverage, setCoverage] = useState(150000);
  const [adEnabled, setAdEnabled] = useState(false);
  const [adMultiplier, setAdMultiplier] = useState(1);
  const [formState, setFormState] = useState({
    sex: "",
    birthdate: "",
    smoking: "",
    residence: "",
    rateClass: "",
    credit: "",
    heightFt: "",
    heightIn: "",
    weight: "",
  });

  const [quoteGenerated, setQuoteGenerated] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [showChangeProduct, setShowChangeProduct] = useState(false);
  const [showCreditInfo, setShowCreditInfo] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Final Expense Whole Life");

  const handleProductSelect = (name: string) => {
    const cfg = getProductConfig(name);
    if (cfg.smokingPrefill) {
      setFormState((prev) => ({ ...prev, smoking: cfg.smokingPrefill! }));
    }
    setSelectedProduct(name);
    setShowChangeProduct(false);
    setProductLoading(true);
    setQuoteGenerated(false);
    setQuoteLoading(false);
    setTimeout(() => setProductLoading(false), 700);
  };

  const handleFormChange = (key: string, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setQuoteGenerated(false);
    setQuoteLoading(false);
  };

  const handleGenerateQuote = () => {
    setQuoteLoading(true);
    setQuoteGenerated(false);
    setTimeout(() => {
      setQuoteLoading(false);
      setQuoteGenerated(true);
    }, 1000);
  };

  const activeConfig = getProductConfig(selectedProduct);
  const isFormFilled =
    formState.sex !== "" &&
    formState.birthdate.trim() !== "" &&
    formState.smoking !== "" &&
    formState.residence !== "" &&
    (!activeConfig.showHealthCredit || (formState.rateClass !== "" && formState.credit !== "")) &&
    (!activeConfig.showBMI || (formState.heightFt.trim() !== "" && formState.heightIn.trim() !== "" && formState.weight.trim() !== ""));

  return (
    <div className="flex h-screen w-screen bg-white overflow-hidden">
      <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />

      {/* Workspace */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        {/* Top nav bar */}
        <div className="h-[56px] shrink-0 bg-white border-b border-[#e5e5e5] flex items-center justify-between px-[40px]">
          <button
            className="flex items-center gap-[8px] bg-transparent border-none cursor-pointer hover:opacity-70 transition-opacity"
          >
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[16.67%]">
                <svg className="absolute block inset-0 size-full" fill="none" height="16" viewBox="0 0 16 16" width="16">
                  <path d={svgPaths.p3495b780} fill="#525252" stroke="#272727" />
                </svg>
              </div>
            </div>
            <span
              className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[24px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Back
            </span>
          </button>
          <NotificationBell />
        </div>

        {/* Two-panel content */}
        <div className="flex flex-1 min-h-0 overflow-hidden">
          {/* Left: quote form */}
          <div className="flex-1 min-w-0 overflow-y-auto px-[40px] py-[40px]">
            {productLoading ? (
              <div className="flex flex-col gap-[16px] animate-pulse">
                <div className="h-[20px] w-[200px] bg-[#e9e9e9] rounded-[4px]" />
                <div className="flex gap-[8px]">
                  <div className="h-[36px] w-[130px] bg-[#e9e9e9] rounded-[20px]" />
                  <div className="h-[36px] w-[130px] bg-[#e9e9e9] rounded-[20px]" />
                </div>
                <div className="h-[1px] bg-[#e9e9e9] mx-[-40px]" />
                <div className="h-[20px] w-[140px] bg-[#e9e9e9] rounded-[4px]" />
                <div className="h-[56px] bg-[#e9e9e9] rounded-[8px]" />
                <div className="h-[56px] bg-[#e9e9e9] rounded-[8px]" />
                <div className="h-[56px] bg-[#e9e9e9] rounded-[8px]" />
                <div className="h-[56px] w-2/3 bg-[#e9e9e9] rounded-[8px]" />
                <div className="h-[20px] w-[120px] bg-[#e9e9e9] rounded-[4px] mt-[8px]" />
                <div className="h-[56px] bg-[#e9e9e9] rounded-[8px]" />
                <div className="h-[56px] bg-[#e9e9e9] rounded-[8px]" />
                <div className="h-[56px] w-1/2 bg-[#e9e9e9] rounded-[8px]" />
              </div>
            ) : (
              <QuoteForm
                activeProduct={activeProduct}
                onProductChange={setActiveProduct}
                formState={formState}
                onFormChange={handleFormChange}
                isAllFilled={isFormFilled}
                isLoading={quoteLoading}
                onGenerateQuote={handleGenerateQuote}
                onChangeProduct={() => setShowChangeProduct(true)}
                selectedProduct={selectedProduct}
                onShowCreditInfo={() => setShowCreditInfo(true)}
              />
            )}
          </div>

          {/* Right: quote visualizer */}
          <div className={`shrink-0 bg-[#e9e9e9] border-l border-[#d4d4d4] overflow-y-scroll flex flex-col transition-[width] duration-500 ease-in-out ${quoteGenerated ? "w-[clamp(600px,47vw,900px)]" : "w-[clamp(480px,calc(25vw_+_160px),640px)]"}`}>
            {/* Panel header */}
            <div className="sticky top-0 z-10 shrink-0 bg-white px-[24px] py-[16px] flex items-center justify-between border-b border-[#e9e9e9]">
              <p
                className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                {selectedProduct} Estimate
              </p>
              <button
                type="button"
                className="font-['Theinhardt:Medium',sans-serif] text-[#865323] text-[16px] leading-[24px] underline decoration-dotted underline-offset-2 cursor-pointer"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                +2 Backup Products
              </button>
            </div>
            <div className="flex-1 px-[24px] py-[32px]">
              {quoteGenerated ? (
                <QuotePanel
                  coverage={coverage}
                  onCoverageChange={setCoverage}
                  adEnabled={adEnabled}
                  onAdToggle={() => setAdEnabled((v) => !v)}
                  adMultiplier={adMultiplier}
                  onAdMultiplierChange={setAdMultiplier}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-[12px] text-center px-[24px]">
                  <div className="size-[48px] rounded-full bg-[#d4d4d4] flex items-center justify-center mb-[8px]">
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#7e7e7e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <p
                    className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[24px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    Your quote will appear here
                  </p>
                  <p
                    className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    Fill in the basic information on the left to generate a quote estimate.
                  </p>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="sticky bottom-0 shrink-0 bg-white border-t border-[#e9e9e9] px-[24px] py-[20px] flex gap-[20px]">
              <button
                disabled={!isFormFilled}
                className={`flex-1 bg-white rounded-[8px] border px-[16px] py-[8px] font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] transition-colors ${isFormFilled ? "border-[#525252] text-[#272727] cursor-pointer hover:bg-gray-50" : "border-[#d4d4d4] text-[#d4d4d4] cursor-not-allowed"}`}
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                Share estimate
              </button>
              <button
                disabled={!isFormFilled}
                className={`flex-1 rounded-[8px] border px-[16px] py-[8px] font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] transition-colors ${isFormFilled ? "bg-[#000000] border-[#000000] text-white cursor-pointer hover:bg-[#1a1a1a]" : "bg-[#d4d4d4] border-[#d4d4d4] text-white cursor-not-allowed"}`}
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                Start application
              </button>
            </div>
          </div>
        </div>
      </div>
      <ChangeProductPanel open={showChangeProduct} onClose={() => setShowChangeProduct(false)} onSelect={handleProductSelect} selectedProduct={selectedProduct} />
      <CreditEstimateInfoPanel open={showCreditInfo} onClose={() => setShowCreditInfo(false)} />
    </div>
  );
}
