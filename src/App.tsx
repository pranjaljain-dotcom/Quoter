import { useState, useRef, useEffect } from "react";
import { jsPDF } from "jspdf";
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

type SelectOption = string | { value: string; health?: string; bmi?: string; disabled?: boolean; note?: string };

function SelectField({ label, value, options, onChange, placeholder, labelLink, disabled, searchable }: {
  label: string;
  value: string;
  options: SelectOption[];
  onChange: (v: string) => void;
  placeholder?: string;
  labelLink?: { text: string; href?: string; onClick?: () => void };
  disabled?: boolean;
  searchable?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
        setHasTyped(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function optValue(o: SelectOption) { return typeof o === "string" ? o : o.value; }

  const visibleOptions = searchable && hasTyped && query.trim() !== ""
    ? options.filter((o) => optValue(o).toLowerCase().includes(query.trim().toLowerCase()))
    : options;

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
            disabled={disabled}
            className={`font-['Theinhardt:Medium',sans-serif] text-[14px] leading-[20px] underline decoration-dotted underline-offset-2 bg-transparent border-none p-0 ${
              disabled ? "text-[#d4d4d4] cursor-not-allowed" : "text-[#865323] cursor-pointer"
            }`}
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {labelLink.text}
          </button>
        ) : (
          <a
            href={disabled ? undefined : labelLink.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={disabled}
            className={`font-['Theinhardt:Medium',sans-serif] text-[14px] leading-[20px] underline decoration-dotted underline-offset-2 ${
              disabled ? "text-[#d4d4d4] cursor-not-allowed pointer-events-none" : "text-[#865323] cursor-pointer"
            }`}
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {labelLink.text}
          </a>
        ))}
      </div>
      <div className="relative w-full">
        {searchable ? (
          <div
            className={`rounded-[8px] border w-full h-[56px] flex items-center px-[14px] gap-[8px] transition-shadow ${
              disabled ? "bg-[#f4f4f4] border-[#e9e9e9]" : open ? "bg-white border-[#056257] shadow-[0px_0px_0px_2px_#dae7e6]" : "bg-white border-[#d4d4d4]"
            }`}
          >
            <input
              ref={inputRef}
              type="text"
              disabled={disabled}
              value={open ? query : value}
              onFocus={(e) => { setOpen(true); setQuery(value); setHasTyped(false); e.target.select(); }}
              onChange={(e) => { setQuery(e.target.value); setHasTyped(true); if (!open) setOpen(true); }}
              placeholder={placeholder || "Select"}
              className={`flex-1 w-0 bg-transparent outline-none cursor-text font-['Theinhardt:Regular',sans-serif] text-[16px] leading-[24px] placeholder:text-[#7e7e7e] ${
                disabled ? "cursor-not-allowed text-[#7e7e7e]" : "text-[#272727]"
              }`}
              style={{ fontFeatureSettings: '"case" 1' }}
            />
            <img
              src="assets/d0a41.svg"
              alt=""
              width="24"
              height="24"
              onClick={() => {
                if (disabled) return;
                if (open) {
                  setOpen(false);
                  setQuery("");
                  setHasTyped(false);
                  inputRef.current?.blur();
                } else {
                  inputRef.current?.focus();
                }
              }}
              className={`shrink-0 transition-transform duration-200 cursor-pointer ${open ? "rotate-180" : ""}`}
            />
          </div>
        ) : (
          <button
            type="button"
            disabled={disabled}
            onClick={() => setOpen((v) => !v)}
            className={`rounded-[8px] border w-full h-[56px] flex items-center px-[14px] gap-[8px] transition-shadow ${
              disabled ? "bg-[#f4f4f4] border-[#e9e9e9] cursor-not-allowed" : open ? "bg-white border-[#056257] shadow-[0px_0px_0px_2px_#dae7e6]" : "bg-white border-[#d4d4d4]"
            }`}
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
        )}
        {open && (
          <div className="absolute z-50 left-0 right-0 top-full mt-[4px] bg-white border border-[#d4d4d4] rounded-[8px] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)] max-h-[320px] flex flex-col overflow-hidden">
            <div className="overflow-y-auto">
            {visibleOptions.length === 0 && (
              <p
                className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px] px-[14px] py-[12px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                No matches
              </p>
            )}
            {visibleOptions.map((o, i) => {
              const isDisabledOpt = typeof o !== "string" && o.disabled === true;
              return (
                <div key={optValue(o)}>
                  {i > 0 && <div className="h-px bg-[#f4f4f4]" />}
                  <div
                    className={`flex items-center min-h-[48px] px-[6px] py-[2px] ${isDisabledOpt ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#f3f7f7]"}`}
                    onClick={() => { if (isDisabledOpt) return; onChange(optValue(o)); setOpen(false); setQuery(""); setHasTyped(false); }}
                  >
                    <div className="flex-1 pl-[8px] pr-[10px] py-[10px] rounded-[6px]">
                      <p
                        className={`${typeof o !== "string" && !isDisabledOpt ? "font-['Theinhardt:Medium',sans-serif]" : "font-['Theinhardt:Regular',sans-serif]"} ${isDisabledOpt ? "text-[#b0b0b0]" : "text-[#272727]"} text-[16px] leading-[24px]`}
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        {optValue(o)}
                        {isDisabledOpt && typeof o !== "string" && o.note && ` ${o.note}`}
                      </p>
                      {typeof o !== "string" && !isDisabledOpt && (o.health || o.bmi) && (
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
              );
            })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TextField({ label, value, placeholder, onChange, suffix, dateMask, type = "text", disabled }: {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (v: string) => void;
  suffix?: string;
  dateMask?: boolean;
  type?: string;
  disabled?: boolean;
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
      <div className={`relative rounded-[8px] border w-full h-[56px] flex items-center px-[14px] ${disabled ? "bg-[#f4f4f4] border-[#e9e9e9]" : "bg-white border-[#d4d4d4]"}`}>
        <input
          type={dateMask ? "text" : type}
          value={value}
          placeholder={placeholder}
          maxLength={dateMask ? 10 : undefined}
          disabled={disabled}
          onChange={(e) => dateMask ? handleDateInput(e.target.value) : onChange(e.target.value)}
          className={`flex-1 bg-transparent font-['Theinhardt:Regular',sans-serif] text-[16px] leading-[24px] outline-none placeholder:text-[#7e7e7e] ${disabled ? "text-[#7e7e7e] cursor-not-allowed" : "text-[#272727]"}`}
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
          className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          {minLabel}
        </span>
        <span
          className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          {maxLabel}
        </span>
      </div>
    </div>
  );
}

/* ─── Included Benefits ─────────────────────────────────────── */

function BenefitCheckIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="shrink-0">
      <path d="M1 6.5L5.5 11L15 1" stroke="#054742" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ─── Quote Visualizer ──────────────────────────────────────── */

function QuotePanel({
  coverage,
  onCoverageChange,
  coverageMin,
  coverageMax,
  coverageStep,
  selectedProduct,
  adEnabled,
  onAdToggle,
  adMultiplier,
  onAdMultiplierChange,
}: {
  coverage: number;
  onCoverageChange: (v: number) => void;
  coverageMin: number;
  coverageMax: number;
  coverageStep: number;
  selectedProduct: string;
  adEnabled: boolean;
  onAdToggle: () => void;
  adMultiplier: number | null;
  onAdMultiplierChange: (v: number) => void;
}) {
  const [coverageMode, setCoverageMode] = useState<"coverage" | "premium">("coverage");

  const COVERAGE_MIN = coverageMin;
  const COVERAGE_MAX = coverageMax;
  const COVERAGE_PER_PREMIUM_DOLLAR = 2500;
  const PREMIUM_MIN = COVERAGE_MIN / COVERAGE_PER_PREMIUM_DOLLAR;
  const PREMIUM_MAX = COVERAGE_MAX / COVERAGE_PER_PREMIUM_DOLLAR;

  const adActive = adEnabled && adMultiplier != null;
  const basePremium = Math.round((coverage / 150000) * 60 * 100) / 100;
  const adPremium = adActive ? Math.round(basePremium * adMultiplier * 100) / 100 : 0;
  const totalPremium = basePremium + adPremium;
  const totalCoverage = adActive ? coverage + coverage * adMultiplier : coverage;
  const agentEarnings = Math.round(totalPremium * 12 * 9.353 * 100) / 100;
  const weeklyPremium = (totalPremium * 12) / 52;
  const dailyPremium = (totalPremium * 12) / 365;

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
              {getCoverageLabel(selectedProduct)}
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
        <div
          className="grid transition-all duration-300 ease-in-out"
          style={{
            gridTemplateRows: coverageMode === "coverage" ? "1fr" : "0fr",
            marginTop: coverageMode === "coverage" ? "0px" : "-16px",
          }}
        >
          <div className="overflow-hidden">
            <div className="pl-[40px]">
              <CoverageSlider value={coverage} min={COVERAGE_MIN} max={COVERAGE_MAX} step={coverageStep} minLabel={fmtCoverageLabel(COVERAGE_MIN)} maxLabel={fmtCoverageLabel(COVERAGE_MAX)} onChange={onCoverageChange} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#e9e9e9] shrink-0" />

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
        <div
          className="grid transition-all duration-300 ease-in-out"
          style={{
            gridTemplateRows: coverageMode === "premium" ? "1fr" : "0fr",
            marginTop: coverageMode === "premium" ? "0px" : "-16px",
          }}
        >
          <div className="overflow-hidden">
            <div className="pl-[40px]">
              <CoverageSlider
                value={basePremium}
                min={PREMIUM_MIN}
                max={PREMIUM_MAX}
                step={1}
                minLabel={fmtPremiumLabel(PREMIUM_MIN)}
                maxLabel={fmtPremiumLabel(PREMIUM_MAX)}
                onChange={(premium) => onCoverageChange(premium * COVERAGE_PER_PREMIUM_DOLLAR)}
              />
            </div>
          </div>
        </div>
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
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[28px]"
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
        <div className="flex items-start justify-between gap-[12px]">
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Estimated Premium
          </p>
          <div className="flex flex-col items-end gap-[6px]">
            <p
              className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[20px] leading-[28px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              ${totalPremium.toFixed(2)}/mo
            </p>
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[13px] leading-[18px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              ${weeklyPremium.toFixed(2)}/wk &middot; ${dailyPremium.toFixed(2)}/day
            </p>
          </div>
        </div>
        <div className="border-t border-dotted border-[#d4d4d4]" />
        <p
          className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[13px] leading-[18px]"
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          Note: Premium is billed monthly. The weekly &amp; daily rates are for illustrative purposes only.
        </p>
      </div>

      {/* Included benefits */}
      <div
        className="rounded-[8px] border-2 border-white p-[24px] flex gap-[8px] items-center"
        style={{ backgroundImage: "linear-gradient(-15deg, rgb(230,245,236) 33%, rgba(235,240,249,0.976) 69%)" }}
      >
        <div className="flex-1 flex flex-col gap-[16px]">
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#525252] text-[18px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Policy includes our free estate planning tools <span className="text-[#272727]">worth $1,198</span>
          </p>
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[12px] items-center">
              <BenefitCheckIcon />
              <p
                className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px] leading-[24px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                Estate planning, Wills & trust, +3 additional perks
              </p>
            </div>
            <div className="flex gap-[12px] items-center">
              <BenefitCheckIcon />
              <p
                className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px] leading-[24px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                Accelerated Death Benefit Option (ADBO/ABO)
              </p>
            </div>
          </div>
        </div>
        <img
          src="assets/benefit-family-illustration.png"
          alt=""
          className="shrink-0 w-[125px] h-[100px] object-contain"
        />
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

type ProductEntry = { id: string; name: React.ReactNode; provider: React.ReactNode; maxCoverage?: string };
type ProductGroup = { category: string; products: ProductEntry[] };

/* TruStage's ® mark should appear as a superscript wherever the brand name is
   written — pass any string that may contain "TruStage" through this. */
function withTrustageTrademark(text: string, supClassName: string = "text-[10px]"): React.ReactNode {
  const idx = text.indexOf("TruStage");
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      TruStage<sup className={supClassName}>®</sup>
      {text.slice(idx + "TruStage".length)}
    </>
  );
}

const PRODUCT_GROUPS: ProductGroup[] = [
  {
    category: "TERM LIFE",
    products: [
      { id: "Term Life Insurance", name: "Term Life Insurance", provider: "Banner Life, Protective & Ameritas", maxCoverage: "$2M" },
      { id: "Term Life Insurance - Choice", name: "Term Life Insurance - Choice", provider: "Ameritas", maxCoverage: "$1M" },
      {
        id: "TruStage Term Life",
        name: withTrustageTrademark("TruStage Term Life"),
        provider: withTrustageTrademark("TruStage", "text-[9px]"),
        maxCoverage: "$300K",
      },
      { id: "Return of Premium Term Life", name: "Return of Premium Term Life", provider: "John Hancock", maxCoverage: "$500K" },
      { id: "Ethos Term Life - Prime Pros", name: "Ethos Term Life - Prime Pros", provider: "Banner Life", maxCoverage: "$3M" },
      { id: "Term with Living Benefits", name: "Term with Living Benefits", provider: "Ameritas", maxCoverage: "$1M" },
    ],
  },
  {
    category: "IUL",
    products: [
      { id: "Accumulation IUL", name: "Accumulation IUL", provider: "North American", maxCoverage: "$2M" },
      { id: "Ethos Protection IUL", name: "Ethos Protection IUL", provider: "Ameritas", maxCoverage: "$3M" },
    ],
  },
  {
    category: "WHOLE LIFE",
    products: [
      {
        id: "TruStage Final Expense",
        name: withTrustageTrademark("TruStage Final Expense"),
        provider: withTrustageTrademark("TruStage", "text-[9px]"),
        maxCoverage: "$50K",
      },
      { id: "Final Expense Whole Life", name: "Final Expense Whole Life", provider: "Banner Life", maxCoverage: "$50K" },
    ],
  },
];

const STATE_OPTIONS = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

const PRODUCT_CATEGORY_BY_ID: Record<string, string> = {};
for (const group of PRODUCT_GROUPS) {
  for (const product of group.products) {
    PRODUCT_CATEGORY_BY_ID[product.id] = group.category;
  }
}

function getCoverageLabel(productId: string): string {
  const category = PRODUCT_CATEGORY_BY_ID[productId];
  if (category === "WHOLE LIFE") return "Whole Life coverage";
  if (category === "TERM LIFE") return "Term Life coverage";
  if (category === "IUL") return "IUL coverage";
  return "Coverage";
}

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
        <div className="flex items-start justify-between gap-[16px] px-[24px] py-[20px] border-b border-[#f4f4f4] shrink-0">
          <div className="flex flex-col gap-[4px]">
            <p
              className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Change Product
            </p>
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Select a different product to quote for this client.
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
                    className={`w-full text-left flex items-center justify-between gap-[12px] px-[16px] py-[12px] cursor-pointer border-none transition-colors ${
                      isActive
                        ? "bg-[#f3f7f7] border-b border-[#f4f4f4]"
                        : "bg-white hover:bg-[#f9fafb]"
                    }`}
                    onClick={() => onSelect(product.id)}
                  >
                    <div className="flex flex-col gap-[2px] min-w-0">
                      <p
                        className={`font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] ${isActive ? "text-[#056257]" : "text-[#272727]"}`}
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        {product.name}
                      </p>
                      <p
                        className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        {product.provider}
                      </p>
                    </div>
                    {product.maxCoverage && (
                      <span
                        className="shrink-0 bg-[#dae7e6] text-[#056257] text-[12px] font-['Theinhardt:Medium',sans-serif] px-[10px] py-[4px] rounded-full whitespace-nowrap"
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        Coverage up to {product.maxCoverage}
                      </span>
                    )}
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

type QuotePreview = {
  product: string;
  coverage: number;
  premium: number;
  adEnabled: boolean;
  adMultiplier: number;
  adCoverage: number;
};
type QuoteEntry = QuotePreview & { id: number };

function ShareEstimatePanel({
  open,
  onClose,
  quotes,
  onAddAnotherQuote,
  onRemoveQuote,
  email,
  onEmailChange,
  name,
  onNameChange,
}: {
  open: boolean;
  onClose: () => void;
  quotes: QuoteEntry[];
  onAddAnotherQuote: () => void;
  onRemoveQuote: (id: number) => void;
  email: string;
  onEmailChange: (v: string) => void;
  name: string;
  onNameChange: (v: string) => void;
}) {
  const canSend = email.trim() !== "";

  const fmtCoverage = (n: number) => "$" + n.toLocaleString("en-US");
  const fmtPremium = (n: number) => "$" + n.toFixed(2) + "/mo";

  const handleDownload = () => {
    const AGENCY_NAME = "Century Insurance Co.";
    const AGENT_NAME = "Pranjal Jain";
    const TEAL: [number, number, number] = [5, 98, 87];
    const DARK: [number, number, number] = [39, 39, 39];
    const GRAY: [number, number, number] = [126, 126, 126];
    const CARD_BG: [number, number, number] = [228, 221, 211];
    const TESTIMONIAL_BG: [number, number, number] = [234, 242, 251];
    const DIVIDER: [number, number, number] = [212, 212, 212];

    const doc = new jsPDF({ unit: "pt", format: "letter" });
    const pageWidth = doc.internal.pageSize.getWidth();
    const marginX = 48;
    const contentWidth = pageWidth - marginX * 2;
    let y = 56;

    const wrap = (text: string, x: number, width: number, lineHeight: number) => {
      const lines = doc.splitTextToSize(text, width);
      doc.text(lines, x, y);
      y += lines.length * lineHeight;
    };

    const clientDisplayName = name.trim() || "Your Quote";

    // Wordmark
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(...DARK);
    doc.text("ETHOS", marginX, y, { charSpace: 1.5 });
    y += 36;

    // Headline
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(...DARK);
    wrap(`${AGENCY_NAME} has partnered with Ethos to protect the ones you love.`, marginX, contentWidth, 25);
    y += 8;

    // Subtext
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(...DARK);
    wrap(
      `${AGENCY_NAME} has invited ${clientDisplayName} to apply with Ethos to protect you and your family. Based on the information provided, the following coverage option was created to fit your needs.`,
      marginX,
      contentWidth,
      16
    );
    y += 20;

    // Quote card — jsPDF has no z-order, so the card's background fill has to be
    // sized before it's drawn. Run the content pass twice: once dry (to measure
    // the final height) and once for real once the fill rect is in place.
    const cardX = marginX;
    const cardPad = 20;
    const cardTop = y;
    const cardInnerWidth = contentWidth - cardPad * 2;

    const drawCardContent = (startY: number) => {
      let cy = startY + cardPad;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(...DARK);
      doc.text(clientDisplayName, cardX + cardPad, cy + 12);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("Powered by ETHOS", cardX + cardPad + cardInnerWidth, cy + 11, { align: "right", charSpace: 0.6 });
      cy += 28;

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...GRAY);
      doc.text(`Quoted by ${AGENT_NAME}, ${AGENCY_NAME}`, cardX + cardPad, cy);
      cy += 22;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(...DARK);
      doc.text("Product Highlights:", cardX + cardPad, cy);
      cy += 20;

      quotes.forEach((quote, i) => {
        if (quotes.length > 1) {
          doc.setFont("helvetica", "bold");
          doc.setFontSize(10);
          doc.setTextColor(...DARK);
          doc.text(`Quote ${i + 1}`, cardX + cardPad, cy);
          cy += 18;
        }

        const basePremium = quote.coverage / 2500;
        const adPremiumAmt = quote.premium - basePremium;
        const totalCoverage = quote.coverage + (quote.adEnabled ? quote.adCoverage : 0);

        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.setTextColor(...TEAL);
        doc.text(`${fmtCoverage(totalCoverage)} coverage`, cardX + cardPad, cy);
        cy += 16;

        doc.setDrawColor(...DIVIDER);
        doc.line(cardX + cardPad, cy, cardX + cardPad + cardInnerWidth, cy);
        cy += 18;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10.5);
        doc.setTextColor(...DARK);
        doc.text(quote.product, cardX + cardPad, cy);
        doc.text(`${fmtPremium(basePremium)}`, cardX + cardPad + cardInnerWidth, cy, { align: "right" });
        cy += 18;

        if (quote.adEnabled) {
          doc.text("Accidental Death Benefit Rider", cardX + cardPad, cy);
          doc.text(`${fmtPremium(adPremiumAmt)}`, cardX + cardPad + cardInnerWidth, cy, { align: "right" });
          cy += 18;
        }

        cy += 6;
      });

      return cy;
    };

    const cardBottom = drawCardContent(cardTop);
    doc.setFillColor(...CARD_BG);
    doc.roundedRect(cardX, cardTop, contentWidth, cardBottom - cardTop, 8, 8, "F");
    drawCardContent(cardTop);

    y = cardBottom + 36;

    // Why life insurance?
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(...DARK);
    doc.text("Why life insurance?", marginX, y);
    y += 22;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(...DARK);
    wrap(
      "Life insurance helps provide financial security for your loved ones if they were to lose you. It can give you peace of mind knowing your family won't be left struggling to pay the mortgage, tuition, or other debts.",
      marginX,
      contentWidth,
      15
    );
    y += 20;

    // Why Ethos?
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(...DARK);
    doc.text("Why Ethos?", marginX, y);
    y += 22;

    const bullets: { title: string; body: string }[] = [
      { title: "Fast and simple", body: "With Ethos, you can apply 100% online in just about 10 minutes, usually even without a medical exam. What traditionally took weeks can now be done in minutes, so you can focus on what matters." },
      { title: "Flexible, affordable options", body: "We match you to a policy that fits your needs with a price that works for you." },
      { title: "Coverage you can trust", body: "Our policies are insured by established life insurance companies like Banner Life Insurance Company, Ameritas Life Insurance Corp., Senior Life Insurance Company, Principal, and TruStage®." },
    ];

    bullets.forEach((b) => {
      doc.setFillColor(...TEAL);
      doc.circle(marginX + 3, y - 4, 3, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.setTextColor(...DARK);
      doc.text(b.title, marginX + 14, y);
      y += 15;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...GRAY);
      wrap(b.body, marginX + 14, contentWidth - 14, 13);
      y += 14;
    });

    // Testimonial
    const testimonialText = doc.splitTextToSize(
      "The Ethos process couldn't be easier and my rates were very competitive. I would highly recommend Ethos Life.",
      contentWidth - 40
    );
    const testimonialHeight = testimonialText.length * 14 + 50;
    doc.setFillColor(...TESTIMONIAL_BG);
    doc.roundedRect(marginX, y, contentWidth, testimonialHeight, 8, 8, "F");
    doc.setFont("helvetica", "italic");
    doc.setFontSize(11);
    doc.setTextColor(...DARK);
    doc.text(testimonialText, marginX + 20, y + 24);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...TEAL);
    doc.text("*****  Leslie via Trustpilot", marginX + 20, y + 24 + testimonialText.length * 14 + 12);

    const fileName = `${clientDisplayName.trim().split(/\s+/)[0]}-Ethos-Quote.pdf`;
    doc.save(fileName);
  };

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
              Share estimate
            </p>
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Enter client's information below to share a personalized quote and track their progress:
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
        {/* Fields */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[20px] flex flex-col gap-[20px]">
          {/* Quote preview(s) */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex items-center justify-between gap-[8px]">
              <p
                className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[24px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                {quotes.length > 1 ? "Quotes" : "Quote"}
              </p>
              <button
                type="button"
                onClick={handleDownload}
                className="flex items-center gap-[4px] font-['Theinhardt:Medium',sans-serif] text-[#865323] text-[14px] leading-none underline decoration-dotted underline-offset-2 bg-transparent border-none p-0 cursor-pointer"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                <svg className="shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v12m0 0-4-4m4 4 4-4M5 21h14" stroke="#865323" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Download</span>
              </button>
            </div>
            {quotes.map((quote, i) => (
              <div key={quote.id} className="bg-[#f3f7f7] border border-[#e9e9e9] rounded-[8px] p-[16px] flex flex-col gap-[8px]">
                <div className="flex items-center justify-between gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    {quotes.length > 1 && (
                      <span
                        className="shrink-0 size-[20px] rounded-full bg-[#056257] text-white flex items-center justify-center font-['Theinhardt:Medium',sans-serif] text-[12px] leading-none"
                        style={{ fontFeatureSettings: '"case" 1' }}
                      >
                        {i + 1}
                      </span>
                    )}
                    <p
                      className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[22px]"
                      style={{ fontFeatureSettings: '"case" 1' }}
                    >
                      {withTrustageTrademark(quote.product)}
                    </p>
                  </div>
                  {quotes.length > 1 && (
                    <button
                      onClick={() => onRemoveQuote(quote.id)}
                      className="shrink-0 size-[24px] flex items-center justify-center rounded-[6px] hover:bg-[#e9e9e9] border-none bg-transparent cursor-pointer transition-colors"
                      aria-label={`Remove quote ${i + 1}`}
                    >
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5l10 10" stroke="#525252" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                    Coverage
                  </p>
                  <p className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                    {fmtCoverage(quote.coverage)}
                  </p>
                </div>
                {quote.adEnabled && (
                  <div className="flex items-center justify-between">
                    <p className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                      AD Coverage ({quote.adMultiplier}x)
                    </p>
                    <p className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                      +{fmtCoverage(quote.adCoverage)}
                    </p>
                  </div>
                )}
                {quote.adEnabled && <div className="h-px bg-[#e9e9e9] shrink-0" />}
                {quote.adEnabled && (
                  <div className="flex items-center justify-between">
                    <p className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                      Total Coverage
                    </p>
                    <p className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                      {fmtCoverage(quote.coverage + quote.adCoverage)}
                    </p>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <p className="font-['Theinhardt:Regular',sans-serif] text-[#525252] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                    Premium
                  </p>
                  <p className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                    {fmtPremium(quote.premium)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onAddAnotherQuote}
            className="w-full bg-white rounded-[8px] border border-[#525252] text-[#272727] px-[16px] py-[12px] font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] cursor-pointer hover:bg-gray-50 transition-colors"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            + Add another quote
          </button>

          <div className="h-px bg-[#f4f4f4] shrink-0" />

          <TextField
            label="Client's email address (required)"
            value={email}
            onChange={onEmailChange}
            placeholder="client@email.com"
            type="email"
          />
          <TextField label="Full Name" value={name} onChange={onNameChange} placeholder="Full name" />
        </div>
        {/* Footer CTAs */}
        <div className="sticky bottom-0 shrink-0 bg-white border-t border-[#e9e9e9] px-[24px] py-[20px] flex flex-col gap-[12px]">
          <button
            disabled={!canSend}
            onClick={onClose}
            className={`w-full rounded-[8px] border px-[16px] py-[12px] font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] transition-colors ${
              canSend ? "bg-[#000000] border-[#000000] text-white cursor-pointer hover:bg-[#1a1a1a]" : "bg-[#d4d4d4] border-[#d4d4d4] text-white cursor-not-allowed"
            }`}
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Send Estimate to Client
          </button>
          <button
            onClick={onClose}
            className="w-full bg-white rounded-[8px] border border-[#525252] text-[#272727] px-[16px] py-[12px] font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] cursor-pointer hover:bg-gray-50 transition-colors"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Start Application
          </button>
        </div>
      </div>
    </>
  );
}

/* ─── Compare Illustration Panel ─────────────────────────────── */

function UploadCloudIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M7 18a4 4 0 0 1-1-7.874A5 5 0 0 1 15.9 8.001 4.5 4.5 0 0 1 17 17H7z" stroke="#7e7e7e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12v6m0-6-2.5 2.5M12 12l2.5 2.5" stroke="#7e7e7e" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const COMPETITOR_QUOTE = {
  company: "Pacific Life Insurance Company",
  product: "PL Promise Term 20",
  coverageAmount: 250000,
  premiumAmount: 31.0,
  term: "20 Years (level premium; then increases annually to age 95)",
  medicalExam: "Unknown",
  decisionTime: "Not specified",
  healthClass: "Preferred No Nicotine use",
};

function CompareIllustrationPanel({ open, onClose, currentQuote, healthClass, clientFirstName }: { open: boolean; onClose: () => void; currentQuote: QuotePreview; healthClass: string; clientFirstName: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  useEffect(() => {
    if (!file) {
      setContentVisible(false);
      return;
    }
    // Fade the revealed preview/analysis in on the next frame rather than
    // having it snap in the instant the upload timer finishes.
    setContentVisible(false);
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setContentVisible(true)));
    return () => cancelAnimationFrame(id);
  }, [file]);

  const fmtCoverage = (n: number) => "$" + n.toLocaleString("en-US");
  const fmtPremium = (n: number) => "$" + n.toFixed(2) + "/mo";

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;

    setUploadingFile(f);
    setUploadProgress(0);
    // Defer to the next two frames so the browser paints the 0% bar before
    // animating to 100% — setting it in the same tick as mount skips the
    // transition entirely.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setUploadProgress(100));
    });

    setTimeout(() => {
      setUploadingFile(null);
      setFile(f);
    }, 3000);
  }

  // Display the file under a predictable Name-Product.pdf name (derived from the
  // client's first name once captured via Share Estimate, and the product being
  // compared) instead of whatever the uploaded file happened to be named.
  const productSlug = COMPETITOR_QUOTE.product.split(" ").join("-");
  const displayFileName = `${clientFirstName || "Pranjal"}-${productSlug}.pdf`;

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
        style={{ width: "900px" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-[16px] px-[24px] py-[20px] border-b border-[#f4f4f4] shrink-0">
          <div className="flex flex-col gap-[4px]">
            <p
              className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Compare Illustration
            </p>
            <p
              className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Upload the carrier's illustration to compare it side-by-side with your Ethos quote.
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

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-[24px] py-[20px]">
          {uploadingFile ? (
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <p
                  className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[24px] truncate"
                  style={{ fontFeatureSettings: '"case" 1' }}
                >
                  {uploadingFile.name}
                </p>
                <div className="h-[400px] flex flex-col items-center justify-center gap-[12px] border-2 border-dashed border-[#d4d4d4] rounded-[8px] px-[24px] bg-[#f9fafb]">
                  <UploadCloudIcon />
                  <div className="w-full max-w-[320px] h-[8px] bg-[#e9e9e9] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#056257] rounded-full transition-[width] duration-[3000ms] ease-linear"
                      style={{ width: `${uploadProgress}%` }}
                    />
                  </div>
                  <p
                    className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px] text-center max-w-[320px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    Uploading competitor illustration and analyzing with Ethos quote
                  </p>
                </div>
              </div>

              {/* Competitor Analysis skeleton — loads concurrently with the upload */}
              <div className="flex flex-col gap-[12px]">
                <p
                  className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[24px]"
                  style={{ fontFeatureSettings: '"case" 1' }}
                >
                  Competitor Analysis
                </p>
                <div className="h-[38px] skeleton-shimmer rounded-[8px]" />
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-[44px] skeleton-shimmer rounded-[8px]" />
                ))}
              </div>
            </div>
          ) : !file ? (
            <label className="flex flex-col items-center justify-center gap-[12px] border-2 border-dashed border-[#d4d4d4] rounded-[8px] py-[64px] cursor-pointer hover:bg-[#f9fafb] transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf,image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <UploadCloudIcon />
              <p
                className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[24px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                Click to upload illustration
              </p>
              <p
                className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                PDF or image
              </p>
            </label>
          ) : (
            <div className={`flex flex-col gap-[24px] transition-opacity duration-500 ease-out ${contentVisible ? "opacity-100" : "opacity-0"}`}>
              <div className="flex flex-col gap-[12px] min-h-0">
                <div className="flex items-center justify-between gap-[8px]">
                  <p
                    className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[24px] truncate"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    {displayFileName}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="shrink-0 font-['Theinhardt:Medium',sans-serif] text-[#865323] text-[14px] leading-[20px] underline decoration-dotted underline-offset-2 cursor-pointer bg-transparent border-none p-0"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    Replace
                  </button>
                </div>
                <div className="h-[400px] border border-[#e9e9e9] rounded-[8px] overflow-hidden bg-[#f4f4f4]">
                  {file.type === "application/pdf" ? (
                    <iframe src={previewUrl ?? undefined} title="Uploaded illustration" className="w-full h-full border-none" />
                  ) : (
                    <img src={previewUrl ?? undefined} alt="Uploaded illustration" className="w-full h-full object-contain" />
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-[12px] min-h-0">
                <p
                  className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[16px] leading-[24px]"
                  style={{ fontFeatureSettings: '"case" 1' }}
                >
                  Competitor Analysis
                </p>
                <div className="border border-[#e9e9e9] rounded-[8px] overflow-hidden">
                  <div className="grid grid-cols-[100px_1fr_1fr] bg-[#f4f4f4] px-[16px] py-[10px] gap-[8px]">
                    <span />
                    <div className="flex flex-col gap-[2px]">
                      <span className="font-['Theinhardt:Medium',sans-serif] text-[#525252] text-[13px] leading-[18px]" style={{ fontFeatureSettings: '"case" 1' }}>
                        {COMPETITOR_QUOTE.company}
                      </span>
                      <span className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[12px] leading-[16px]" style={{ fontFeatureSettings: '"case" 1' }}>
                        {COMPETITOR_QUOTE.product}
                      </span>
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <span className="font-['Theinhardt:Medium',sans-serif] text-[#056257] text-[13px] leading-[18px]" style={{ fontFeatureSettings: '"case" 1' }}>
                        Your Ethos Quote
                      </span>
                      <span className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[12px] leading-[16px]" style={{ fontFeatureSettings: '"case" 1' }}>
                        {withTrustageTrademark(currentQuote.product)}
                      </span>
                    </div>
                  </div>
                  {[
                    {
                      label: "Coverage",
                      competitor: fmtCoverage(COMPETITOR_QUOTE.coverageAmount),
                      ethos: fmtCoverage(currentQuote.coverage + (currentQuote.adEnabled ? currentQuote.adCoverage : 0)),
                      ethosSubtext: currentQuote.adEnabled
                        ? `Includes +${fmtCoverage(currentQuote.adCoverage)} AD (${currentQuote.adMultiplier}x)`
                        : undefined,
                    },
                    {
                      label: "Premium",
                      competitor: fmtPremium(COMPETITOR_QUOTE.premiumAmount),
                      competitorSubtext: `$${((COMPETITOR_QUOTE.premiumAmount / COMPETITOR_QUOTE.coverageAmount) * 1000).toFixed(2)} per $1,000 coverage`,
                      ethos: fmtPremium(currentQuote.premium),
                      ethosSubtext: `$${((currentQuote.premium / currentQuote.coverage) * 1000).toFixed(2)} per $1,000 coverage`,
                    },
                    { label: "Term", competitor: COMPETITOR_QUOTE.term, ethos: "—", ethosHighlight: true },
                    { label: "Medical Exam", competitor: COMPETITOR_QUOTE.medicalExam, ethos: "Not required", ethosHighlight: true },
                    { label: "Decision Time", competitor: COMPETITOR_QUOTE.decisionTime, ethos: "Within 10 minutes", ethosHighlight: true },
                    { label: "Health Class", competitor: COMPETITOR_QUOTE.healthClass, ethos: healthClass || "—", ethosHighlight: true },
                    { label: "Rider", competitor: "Not specified", ethos: "Accelerated Death Benefit Option (ADBO/ABO) — No Cost", ethosHighlight: true },
                    { label: "Perks", competitor: "Not specified", ethos: "Estate planning, Wills & trust, +3 additional perks", ethosHighlight: true },
                  ].map((row, i) => (
                    <div
                      key={row.label}
                      className={`grid grid-cols-[100px_1fr_1fr] px-[16px] py-[12px] gap-[8px] ${i > 0 ? "border-t border-[#f4f4f4]" : ""}`}
                    >
                      <span className="font-['Theinhardt:Medium',sans-serif] text-[#525252] text-[13px] leading-[18px]" style={{ fontFeatureSettings: '"case" 1' }}>
                        {row.label}
                      </span>
                      <div className="flex flex-col gap-[2px]">
                        <span className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[14px] leading-[20px]" style={{ fontFeatureSettings: '"case" 1' }}>
                          {row.competitor}
                        </span>
                        {row.competitorSubtext && (
                          <span
                            className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[12px] leading-[16px]"
                            style={{ fontFeatureSettings: '"case" 1' }}
                          >
                            {row.competitorSubtext}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-[2px]">
                        <span
                          className={`font-['Theinhardt:Medium',sans-serif] text-[14px] leading-[20px] ${row.ethosHighlight ? "text-[#056257]" : "text-[#272727]"}`}
                          style={{ fontFeatureSettings: '"case" 1' }}
                        >
                          {row.ethos}
                        </span>
                        {row.ethosSubtext && (
                          <span
                            className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[12px] leading-[16px]"
                            style={{ fontFeatureSettings: '"case" 1' }}
                          >
                            {row.ethosSubtext}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ─── Main content: Quote form ──────────────────────────────── */

/* Resource links shown under the product header. For products with sub-product
   tabs, the set shown updates with the active tab since guides usually differ
   per variant; products without tabs fall back to DEFAULT_RESOURCE_LINKS. */
const DEFAULT_RESOURCE_LINKS = [
  { label: "Underwriting & Product Guidelines", href: "https://online.flippingbook.com/view/406249855/" },
  { label: "Product Knockout Guide", href: "https://online.flippingbook.com/view/318795893/" },
  { label: "Rx Red Flags", href: "https://online.flippingbook.com/view/257941078/" },
];

type SubProductTabConfig = {
  tabs: string[];
  resourceLinksByTab?: Record<number, { label: string; href: string }[]>;
};

/* Sub-product tabs are specific to each top-level product — every product in
   PRODUCT_GROUPS that has variants gets its own entry here. */
const SUB_PRODUCT_TABS: Record<string, SubProductTabConfig> = {
  "Final Expense Whole Life": {
    tabs: [
      "Banner Life Simplified Issue Whole Life",
      "Banner Life Simplified Issue Whole Life — Plus",
    ],
    resourceLinksByTab: {
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
    },
  },
  "TruStage Final Expense": {
    tabs: [
      "TruStage Advantage Whole Life",
      "TruStage Guaranteed Acceptable Whole Life",
    ],
  },
};

type CoverageRangeConfig = { min: number; max: number; default: number; step?: number };

const DEFAULT_COVERAGE_RANGE: CoverageRangeConfig = { min: 15000, max: 300000, default: 150000 };

/* Coverage sliders are sized per sub-product where the range differs
   materially from the standard term life range above — keyed by the
   sub-product's display name (falls back to the top-level product name
   for products without sub-product tabs). `step` defaults to 5000 and
   should evenly divide into `default` so the slider can actually land on it. */
const COVERAGE_RANGE_BY_PRODUCT: Record<string, CoverageRangeConfig> = {
  "TruStage Advantage Whole Life": { min: 5000, max: 100000, default: 50000 },
  "TruStage Guaranteed Acceptable Whole Life": { min: 2000, max: 25000, default: 13000, step: 1000 },
};

function getCoverageRange(productKey: string): CoverageRangeConfig {
  return COVERAGE_RANGE_BY_PRODUCT[productKey] ?? DEFAULT_COVERAGE_RANGE;
}

function fmtCoverageLabel(n: number): string {
  return n % 1000 === 0 ? `$${n / 1000}K` : `$${n.toLocaleString("en-US")}`;
}

function fmtPremiumLabel(n: number): string {
  return `$${Number.isInteger(n) ? n.toString() : n.toFixed(2)}/mo`;
}

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
  showCreditEstimate?: boolean;
  showBMI: boolean;
  smokingPrefill?: string;
  smokingLocked?: boolean;
  healthClassPrefill?: string;
  healthClassLocked?: boolean;
  showKnockoutQuestions?: boolean;
  excludedStates?: string[];
};

const PRODUCT_FIELD_CONFIG: Record<string, ProductFieldConfig> = {
  "Final Expense Whole Life":  { showHealthCredit: false, showBMI: false, smokingPrefill: "Non-smoker" },
  "TruStage Final Expense":    { showHealthCredit: false, showBMI: false, smokingPrefill: "Non-smoker" },
  "TruStage Term Life":        { showHealthCredit: false, showBMI: false },
  "Return of Premium Term Life": {
    showHealthCredit: true,
    showCreditEstimate: false,
    showBMI: false,
    smokingPrefill: "Non-smoker",
    smokingLocked: true,
    healthClassPrefill: "Standard",
    healthClassLocked: true,
  },
  "Term with Living Benefits": { showHealthCredit: true, showBMI: true, showKnockoutQuestions: true },
};

// New York isn't available for any product right now.
const UNIVERSALLY_EXCLUDED_STATES = ["New York"];

function getProductConfig(product: string): ProductFieldConfig {
  const base = PRODUCT_FIELD_CONFIG[product] ?? { showHealthCredit: true, showBMI: true };
  return { ...base, excludedStates: [...new Set([...(base.excludedStates ?? []), ...UNIVERSALLY_EXCLUDED_STATES])] };
}

type KnockoutItem = { label: string; detail?: string };

const HEALTH_KNOCKOUT_ITEMS: KnockoutItem[] = [
  { label: "Disability" },
  {
    label: "Severe mental condition",
    detail: "(incl. Mental health conditions resulting in Hospitalization requiring in-patient treatment, attempted suicide, suicidal thoughts in the last 5-10 years or involving psychosis)",
  },
  { label: "Diagnosed with or tested positive for HIV/AIDS" },
];

const CRIMINAL_KNOCKOUT_ITEMS: KnockoutItem[] = [
  {
    label: "Major moving violation",
    detail: "(DUI, DWI, hit-and-run, or reckless driving) or suspended/revoked driver’s license (last 5 years).",
  },
  {
    label: "Major criminal history",
    detail: "(charged with or convicted of felony, currently in jail in past 10 years).",
  },
  { label: "Illegal drug use, drug or alcohol abuse in the last 5 years" },
];

function KnockoutCard({
  title,
  items,
  checked,
  onChange,
  disabled,
  expanded,
  onToggleExpanded,
}: {
  title: string;
  items: KnockoutItem[];
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  expanded: boolean;
  onToggleExpanded: () => void;
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <button
        type="button"
        onClick={onToggleExpanded}
        className="w-full flex items-center justify-between gap-[8px] text-left bg-transparent border-none p-0 cursor-pointer"
      >
        <div className="flex items-center gap-[8px]">
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {title}
          </p>
          {checked && (
            <span
              className="shrink-0 rounded-full bg-[#fdeceb] text-[#c0392b] px-[8px] py-[2px] font-['Theinhardt:Medium',sans-serif] text-[12px] leading-[16px]"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Flagged
            </span>
          )}
        </div>
        <img
          alt=""
          src="assets/d0a41.svg"
          width="20"
          height="20"
          className={`shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
      <p
        className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[16px] leading-[24px] pb-[12px]"
        style={{ fontFeatureSettings: '"case" 1' }}
      >
        Check the category if any condition applies.
      </p>
      <div className="border border-[#e9e9e9] rounded-[8px] overflow-hidden">
        <button
          type="button"
          role="checkbox"
          aria-checked={checked}
          disabled={disabled}
          onClick={() => onChange(!checked)}
          className={`w-full flex items-center gap-[12px] px-[16px] py-[14px] text-left border-none bg-white transition-colors ${
            disabled ? "cursor-not-allowed" : "cursor-pointer hover:bg-[#f9fafb]"
          }`}
        >
          <span
            className={`shrink-0 size-[20px] rounded-[4px] border flex items-center justify-center transition-colors ${
              checked ? "bg-[#056257] border-[#056257]" : "bg-white border-[#d4d4d4]"
            }`}
          >
            {checked && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6.5L4.5 8.5L9.5 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
          <span
            className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px] leading-[24px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Do any of the following apply?
          </span>
        </button>
        <div className="border-t border-[#e9e9e9] px-[16px] py-[14px] flex flex-col gap-[12px]">
          {items.map((item, i) => (
            <div key={i} className="flex gap-[8px]">
              <span className="shrink-0 text-[#272727] leading-[22px]">•</span>
              <div className="flex flex-col gap-[2px]">
                <p
                  className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px] leading-[22px]"
                  style={{ fontFeatureSettings: '"case" 1' }}
                >
                  {item.label}
                </p>
                {item.detail && (
                  <p
                    className="font-['Theinhardt:Regular',sans-serif] text-[#7e7e7e] text-[14px] leading-[20px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
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
  locked,
  onCancelLock,
  knockoutHealth,
  knockoutCriminal,
  onKnockoutHealthChange,
  onKnockoutCriminalChange,
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
  locked: boolean;
  onCancelLock: () => void;
  knockoutHealth: boolean;
  knockoutCriminal: boolean;
  onKnockoutHealthChange: (checked: boolean) => void;
  onKnockoutCriminalChange: (checked: boolean) => void;
}) {
  const [tabLoading, setTabLoading] = useState(false);
  const [healthExpanded, setHealthExpanded] = useState(false);
  const [criminalExpanded, setCriminalExpanded] = useState(false);

  function handleTabChange(i: number) {
    if (i === activeProduct) return;
    setTabLoading(true);
    onProductChange(i);
    setTimeout(() => setTabLoading(false), 500);
  }

  const subProductTabConfig = SUB_PRODUCT_TABS[selectedProduct];
  const hasTabs = !!subProductTabConfig;
  const tabs = subProductTabConfig?.tabs ?? [];
  const config = getProductConfig(selectedProduct);
  const heightInInvalid = formState.heightIn.trim() !== "" && Number(formState.heightIn) > 11;
  const isKnockedOut = config.showKnockoutQuestions === true && (knockoutHealth || knockoutCriminal);

  return (
    <div className="flex flex-col gap-[20px]">
      {/* Locked banner — shown while configuring an additional quote for the same product */}
      {locked && (
        <div className="flex items-center justify-between gap-[16px] bg-[#f3f7f7] border border-[#dae7e6] rounded-[8px] px-[16px] py-[12px]">
          <p
            className="font-['Theinhardt:Regular',sans-serif] text-[#056257] text-[14px] leading-[20px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Adding another quote for the same product — update coverage on the right, then click Share estimate again.
          </p>
          <button
            type="button"
            onClick={onCancelLock}
            className="shrink-0 font-['Theinhardt:Medium',sans-serif] text-[#056257] text-[14px] leading-[20px] underline decoration-dotted underline-offset-2 cursor-pointer bg-transparent border-none p-0"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Product header */}
      <div className="flex items-start justify-between gap-[8px]">
        <div className="flex flex-col gap-[4px]">
          <p
            className="font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[20px] leading-[28px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            {withTrustageTrademark(selectedProduct)}
          </p>
        </div>
        <button
          onClick={onChangeProduct}
          disabled={locked}
          className={`shrink-0 font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] underline decoration-dotted underline-offset-2 ${
            locked ? "text-[#d4d4d4] cursor-not-allowed" : "text-[#865323] cursor-pointer"
          }`}
          style={{ fontFeatureSettings: '"case" 1' }}
        >
          Change Product
        </button>
      </div>

      {/* Sub-product tabs — only for products that have variants */}
      {hasTabs && (
        <div className={`relative grid grid-cols-2 bg-[#f3f7f7] rounded-full p-[4px] ${locked ? "opacity-50" : ""}`}>
          {/* Sliding highlight */}
          <div
            className="absolute top-[4px] bottom-[4px] left-[4px] rounded-full bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.08)] transition-transform duration-300 ease-in-out"
            style={{ width: "calc(50% - 4px)", transform: `translateX(${activeProduct * 100}%)` }}
          />
          {tabs.map((name, i) => (
            <button
              key={i}
              onClick={() => !locked && handleTabChange(i)}
              disabled={locked}
              className={`relative z-10 w-full h-[40px] rounded-full px-[16px] text-center border-none bg-transparent transition-colors font-['Theinhardt:Medium',sans-serif] text-[14px] leading-[20px] truncate ${
                locked ? "cursor-not-allowed" : "cursor-pointer"
              } ${activeProduct === i ? "text-[#056257]" : "text-[#525252] hover:text-[#272727]"}`}
              style={{ fontFeatureSettings: '"case" 1', letterSpacing: "-0.14px" }}
            >
              {withTrustageTrademark(name)}
            </button>
          ))}
        </div>
      )}

      {/* Resource links — reflect the active sub-product tab when present */}
      <ResourceLinksRow links={hasTabs ? (subProductTabConfig?.resourceLinksByTab?.[activeProduct] ?? DEFAULT_RESOURCE_LINKS) : DEFAULT_RESOURCE_LINKS} />

      {/* Divider */}
      <div className="h-px bg-[#F4F4F4] mx-[-40px]" />

      {tabLoading ? (
        <div className="flex flex-col gap-[16px]">
          <div className="h-[20px] w-[140px] skeleton-shimmer rounded-[4px]" />
          <div className="h-[56px] skeleton-shimmer rounded-[8px]" />
          <div className="h-[56px] skeleton-shimmer rounded-[8px]" />
          <div className="h-[56px] w-2/3 skeleton-shimmer rounded-[8px]" />
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
            disabled={locked}
          />
        </div>
        <div className="flex-1">
          <TextField
            label="Birth date"
            value={formState.birthdate}
            placeholder="mm/dd/yyyy"
            onChange={(v) => onFormChange("birthdate", v)}
            dateMask
            disabled={locked}
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
            disabled={locked || config.smokingLocked}
          />
        </div>
        <div className="flex-1">
          <SelectField
            label="Residence"
            value={formState.residence}
            options={STATE_OPTIONS.map((s) =>
              config.excludedStates?.includes(s) ? { value: s, disabled: true, note: "(Not applicable for this product)" } : s
            )}
            onChange={(v) => onFormChange("residence", v)}
            placeholder="Select state"
            disabled={locked}
            searchable
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
              disabled={locked || config.healthClassLocked}
            />
          </div>
          {config.showCreditEstimate !== false && (
            <div className="flex-1">
              <SelectField
                label="Credit estimate"
                value={formState.credit}
                options={["Strong", "Average", "Building Credit History"]}
                onChange={(v) => onFormChange("credit", v)}
                placeholder="Estimate credit score"
                labelLink={{ text: "How it works", onClick: onShowCreditInfo }}
                disabled={locked}
              />
            </div>
          )}
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
                <div className={`relative rounded-[8px] border flex-1 h-[56px] flex items-center px-[14px] ${locked ? "bg-[#f4f4f4] border-[#e9e9e9]" : "bg-white border-[#d4d4d4]"}`}>
                  <input
                    type="text"
                    value={formState.heightFt}
                    placeholder="0"
                    disabled={locked}
                    onChange={(e) => onFormChange("heightFt", e.target.value)}
                    className={`flex-1 w-0 bg-transparent font-['Theinhardt:Regular',sans-serif] text-[16px] outline-none placeholder:text-[#7e7e7e] ${locked ? "text-[#7e7e7e] cursor-not-allowed" : "text-[#272727]"}`}
                    style={{ fontFeatureSettings: '"case" 1' }}
                  />
                  <span
                    className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[16px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    ft
                  </span>
                </div>
                <div
                  className={`relative rounded-[8px] border flex-1 h-[56px] flex items-center px-[14px] ${
                    locked ? "bg-[#f4f4f4] border-[#e9e9e9]" : heightInInvalid ? "bg-white border-[#f44b40]" : "bg-white border-[#d4d4d4]"
                  }`}
                >
                  <input
                    type="text"
                    value={formState.heightIn}
                    placeholder="0"
                    disabled={locked}
                    onChange={(e) => onFormChange("heightIn", e.target.value)}
                    className={`flex-1 w-0 bg-transparent font-['Theinhardt:Regular',sans-serif] text-[16px] outline-none placeholder:text-[#7e7e7e] ${locked ? "text-[#7e7e7e] cursor-not-allowed" : "text-[#272727]"}`}
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
              {heightInInvalid && (
                <p
                  className="font-['Theinhardt:Regular',sans-serif] text-[#f44b40] text-[13px] leading-[18px]"
                  style={{ fontFeatureSettings: '"case" 1' }}
                >
                  Inches can't be greater than 11
                </p>
              )}
            </div>
            <div className="flex-1">
              <TextField
                label="Weight"
                value={formState.weight}
                placeholder="0"
                suffix="lbs"
                onChange={(v) => onFormChange("weight", v)}
                disabled={locked}
              />
            </div>
          </div>
        </>
      )}

      {config.showKnockoutQuestions && (
        <>
          {/* Divider */}
          <div className="h-px bg-[#F4F4F4]" />

          <KnockoutCard
            title="Health"
            items={HEALTH_KNOCKOUT_ITEMS}
            checked={knockoutHealth}
            onChange={onKnockoutHealthChange}
            disabled={locked}
            expanded={healthExpanded}
            onToggleExpanded={() => setHealthExpanded((v) => !v)}
          />

          {/* Divider */}
          <div className="h-px bg-[#F4F4F4]" />

          <KnockoutCard
            title="Criminal history"
            items={CRIMINAL_KNOCKOUT_ITEMS}
            checked={knockoutCriminal}
            onChange={onKnockoutCriminalChange}
            disabled={locked}
            expanded={criminalExpanded}
            onToggleExpanded={() => setCriminalExpanded((v) => !v)}
          />
        </>
      )}

      {isKnockedOut ? (
        <div className="flex items-start gap-[8px] mt-[12px] bg-[#fdeceb] border border-[#f44b40] rounded-[8px] px-[16px] py-[12px]">
          <p
            className="font-['Theinhardt:Regular',sans-serif] text-[#272727] text-[14px] leading-[20px]"
            style={{ fontFeatureSettings: '"case" 1' }}
          >
            The applicant does not meet the eligibility requirements for the selected product. You can try{" "}
            <button
              type="button"
              onClick={onChangeProduct}
              className="font-['Theinhardt:Medium',sans-serif] text-[#865323] underline decoration-dotted underline-offset-2 cursor-pointer bg-transparent border-none p-0"
              style={{ fontFeatureSettings: '"case" 1' }}
            >
              Whole Life
            </button>
            .
          </p>
        </div>
      ) : (
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
      )}
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
  const [adMultiplier, setAdMultiplier] = useState<number | null>(null);
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
  const [subProductQuoteLoading, setSubProductQuoteLoading] = useState(false);
  const [subProductQuoteProgress, setSubProductQuoteProgress] = useState(0);
  const [showChangeProduct, setShowChangeProduct] = useState(false);
  const [showCreditInfo, setShowCreditInfo] = useState(false);
  const [showShareEstimate, setShowShareEstimate] = useState(false);
  const [showCompareIllustration, setShowCompareIllustration] = useState(false);
  const [productLoading, setProductLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Term Life Insurance");
  const [pendingQuotes, setPendingQuotes] = useState<QuoteEntry[]>([]);
  const [lockedForAdditionalQuote, setLockedForAdditionalQuote] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [knockoutHealth, setKnockoutHealth] = useState(false);
  const [knockoutCriminal, setKnockoutCriminal] = useState(false);

  const handleProductSelect = (name: string) => {
    const cfg = getProductConfig(name);
    if (cfg.smokingPrefill || cfg.healthClassPrefill || cfg.excludedStates) {
      setFormState((prev) => ({
        ...prev,
        ...(cfg.smokingPrefill ? { smoking: cfg.smokingPrefill! } : {}),
        ...(cfg.healthClassPrefill ? { rateClass: cfg.healthClassPrefill! } : {}),
        ...(cfg.excludedStates?.includes(prev.residence) ? { residence: "" } : {}),
      }));
    }
    setSelectedProduct(name);
    setActiveProduct(0);
    const newSubProductName = SUB_PRODUCT_TABS[name]?.tabs[0] ?? name;
    setCoverage(getCoverageRange(newSubProductName).default);
    setShowChangeProduct(false);
    setProductLoading(true);
    setQuoteGenerated(false);
    setQuoteLoading(false);
    setKnockoutHealth(false);
    setKnockoutCriminal(false);
    setTimeout(() => setProductLoading(false), 700);
  };

  const handleKnockoutHealthChange = (checked: boolean) => {
    setKnockoutHealth(checked);
    setQuoteGenerated(false);
    setQuoteLoading(false);
  };

  const handleKnockoutCriminalChange = (checked: boolean) => {
    setKnockoutCriminal(checked);
    setQuoteGenerated(false);
    setQuoteLoading(false);
  };

  const handleFormChange = (key: string, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    setQuoteGenerated(false);
    setQuoteLoading(false);
  };

  const handleSubProductTabChange = (i: number) => {
    if (i === activeProduct) return;
    setActiveProduct(i);
    const newSubProductName = SUB_PRODUCT_TABS[selectedProduct]?.tabs[i] ?? selectedProduct;
    setCoverage(getCoverageRange(newSubProductName).default);
    if (quoteGenerated) {
      setQuoteGenerated(false);
      setSubProductQuoteLoading(true);
      setSubProductQuoteProgress(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setSubProductQuoteProgress(100)));
      setTimeout(() => {
        setSubProductQuoteLoading(false);
        setSubProductQuoteProgress(0);
        setQuoteGenerated(true);
      }, 1000);
    }
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
    (!activeConfig.showHealthCredit || (formState.rateClass !== "" && (activeConfig.showCreditEstimate === false || formState.credit !== ""))) &&
    (!activeConfig.showBMI || (formState.heightFt.trim() !== "" && formState.heightIn.trim() !== "" && formState.weight.trim() !== "")) &&
    (!activeConfig.showKnockoutQuestions || (!knockoutHealth && !knockoutCriminal));

  const activeSubProductName = SUB_PRODUCT_TABS[selectedProduct]?.tabs[activeProduct] ?? selectedProduct;
  const coverageRange = getCoverageRange(activeSubProductName);

  const previewAdActive = adEnabled && adMultiplier != null;
  const previewBasePremium = Math.round((coverage / 150000) * 60 * 100) / 100;
  const previewAdPremium = previewAdActive ? Math.round(previewBasePremium * adMultiplier * 100) / 100 : 0;
  const currentQuote: QuotePreview = {
    product: activeSubProductName,
    coverage,
    premium: previewBasePremium + previewAdPremium,
    adEnabled: previewAdActive,
    adMultiplier: adMultiplier ?? 0,
    adCoverage: previewAdActive ? coverage * adMultiplier : 0,
  };

  const handleOpenShareEstimate = () => {
    if (lockedForAdditionalQuote) {
      setPendingQuotes((prev) => [...prev, { id: Date.now(), ...currentQuote }]);
      setLockedForAdditionalQuote(false);
    } else {
      setPendingQuotes([{ id: Date.now(), ...currentQuote }]);
      setClientEmail("");
      setClientName("");
    }
    setShowShareEstimate(true);
  };

  const handleAddAnotherQuote = () => {
    setShowShareEstimate(false);
    setLockedForAdditionalQuote(true);
  };

  const handleRemovePendingQuote = (id: number) => {
    setPendingQuotes((prev) => prev.filter((q) => q.id !== id));
  };

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
              <div className="flex flex-col gap-[16px]">
                <div className="h-[20px] w-[200px] skeleton-shimmer rounded-[4px]" />
                <div className="flex gap-[8px]">
                  <div className="h-[36px] w-[130px] skeleton-shimmer rounded-[20px]" />
                  <div className="h-[36px] w-[130px] skeleton-shimmer rounded-[20px]" />
                </div>
                <div className="h-[1px] bg-[#e9e9e9] mx-[-40px]" />
                <div className="h-[20px] w-[140px] skeleton-shimmer rounded-[4px]" />
                <div className="h-[56px] skeleton-shimmer rounded-[8px]" />
                <div className="h-[56px] skeleton-shimmer rounded-[8px]" />
                <div className="h-[56px] skeleton-shimmer rounded-[8px]" />
                <div className="h-[56px] w-2/3 skeleton-shimmer rounded-[8px]" />
                <div className="h-[20px] w-[120px] skeleton-shimmer rounded-[4px] mt-[8px]" />
                <div className="h-[56px] skeleton-shimmer rounded-[8px]" />
                <div className="h-[56px] skeleton-shimmer rounded-[8px]" />
                <div className="h-[56px] w-1/2 skeleton-shimmer rounded-[8px]" />
              </div>
            ) : (
              <QuoteForm
                activeProduct={activeProduct}
                onProductChange={handleSubProductTabChange}
                formState={formState}
                onFormChange={handleFormChange}
                isAllFilled={isFormFilled}
                isLoading={quoteLoading}
                onGenerateQuote={handleGenerateQuote}
                onChangeProduct={() => setShowChangeProduct(true)}
                selectedProduct={selectedProduct}
                onShowCreditInfo={() => setShowCreditInfo(true)}
                locked={lockedForAdditionalQuote}
                onCancelLock={() => setLockedForAdditionalQuote(false)}
                knockoutHealth={knockoutHealth}
                knockoutCriminal={knockoutCriminal}
                onKnockoutHealthChange={handleKnockoutHealthChange}
                onKnockoutCriminalChange={handleKnockoutCriminalChange}
              />
            )}
          </div>

          {/* Right: quote visualizer */}
          <div className={`shrink-0 bg-[#E6EFEE] border-l border-[#d4d4d4] overflow-y-scroll flex flex-col transition-[width] duration-500 ease-in-out ${quoteGenerated || subProductQuoteLoading ? "w-[clamp(600px,47vw,900px)]" : "w-[clamp(480px,calc(25vw_+_160px),640px)]"}`}>
            {/* Panel header */}
            <div className="sticky top-0 z-10 shrink-0 bg-white px-[24px] py-[16px] flex items-center justify-between gap-[32px] border-b border-[#e9e9e9]">
              <p
                className="min-w-0 flex-1 font-['Theinhardt:Medium',sans-serif] text-[#272727] text-[18px] leading-[26px]"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                {withTrustageTrademark(activeSubProductName)} Estimate
              </p>
              <button
                type="button"
                onClick={() => setShowCompareIllustration(true)}
                className="shrink-0 whitespace-nowrap font-['Theinhardt:Medium',sans-serif] text-[#865323] text-[16px] leading-[24px] underline decoration-dotted underline-offset-2 cursor-pointer"
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                Compare Illustration
              </button>
            </div>
            <div className="flex-1 px-[24px] py-[32px]">
              {subProductQuoteLoading ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-[24px] text-center px-[24px]">
                  <img
                    src="assets/generating-quote-illustration.png"
                    alt=""
                    className="w-[390px] h-auto"
                  />
                  <div className="w-full max-w-[363px] h-[8px] bg-[#c0d8d5] rounded-[6px] overflow-hidden">
                    <div
                      className="h-full bg-[#054742] rounded-[6px] transition-[width] duration-[1000ms] ease-linear"
                      style={{ width: `${subProductQuoteProgress}%` }}
                    />
                  </div>
                  <p
                    className="font-['Theinhardt:Medium',sans-serif] text-[#04463e] text-[20px] leading-[28px] max-w-[331px]"
                    style={{ fontFeatureSettings: '"case" 1' }}
                  >
                    Sit tight as we are generating your client&rsquo;s estimate...
                  </p>
                </div>
              ) : quoteGenerated ? (
                <QuotePanel
                  coverage={coverage}
                  onCoverageChange={setCoverage}
                  coverageMin={coverageRange.min}
                  coverageMax={coverageRange.max}
                  coverageStep={coverageRange.step ?? 5000}
                  selectedProduct={selectedProduct}
                  adEnabled={adEnabled}
                  onAdToggle={() => {
                    setAdEnabled((v) => !v);
                    setAdMultiplier(null);
                  }}
                  adMultiplier={adMultiplier}
                  onAdMultiplierChange={setAdMultiplier}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] gap-[12px] text-center px-[24px]">
                  <img
                    src="assets/generating-quote-illustration.png"
                    alt=""
                    className="w-[390px] h-auto mb-[8px]"
                  />
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
                disabled={!quoteGenerated}
                onClick={handleOpenShareEstimate}
                className={`flex-1 bg-white rounded-[8px] border px-[16px] py-[8px] font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] transition-colors ${quoteGenerated ? "border-[#525252] text-[#272727] cursor-pointer hover:bg-gray-50" : "border-[#d4d4d4] text-[#d4d4d4] cursor-not-allowed"}`}
                style={{ fontFeatureSettings: '"case" 1' }}
              >
                Share estimate
              </button>
              <button
                disabled={!quoteGenerated}
                className={`flex-1 rounded-[8px] border px-[16px] py-[8px] font-['Theinhardt:Medium',sans-serif] text-[16px] leading-[24px] transition-colors ${quoteGenerated ? "bg-[#000000] border-[#000000] text-white cursor-pointer hover:bg-[#1a1a1a]" : "bg-[#d4d4d4] border-[#d4d4d4] text-white cursor-not-allowed"}`}
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
      <ShareEstimatePanel
        open={showShareEstimate}
        onClose={() => setShowShareEstimate(false)}
        quotes={pendingQuotes}
        onAddAnotherQuote={handleAddAnotherQuote}
        onRemoveQuote={handleRemovePendingQuote}
        email={clientEmail}
        onEmailChange={setClientEmail}
        name={clientName}
        onNameChange={setClientName}
      />
      <CompareIllustrationPanel
        open={showCompareIllustration}
        onClose={() => setShowCompareIllustration(false)}
        currentQuote={currentQuote}
        healthClass={formState.rateClass}
        clientFirstName={clientName.trim().split(/\s+/)[0] || ""}
      />
    </div>
  );
}
