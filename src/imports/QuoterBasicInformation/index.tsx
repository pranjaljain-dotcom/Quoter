function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[0] not-italic relative shrink-0">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] flex flex-col font-['Theinhardt:Medium',sans-serif] h-[26px] justify-center relative shrink-0 text-[#272727] text-[18px] w-[459px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[26px]">Accidental Death (AD) coverage</p>
      </div>
      <div className="flex flex-col font-['Theinhardt:Regular',sans-serif] justify-center relative shrink-0 text-[#525252] text-[0px] w-[448px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[24px] text-[16px]" style={{ fontFeatureSettings: '"case" 1' }}>
          Multiply your client’s cover in case of an accident.
        </p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame5 />
      <div className="h-[26px] relative shrink-0" data-name="Toggle">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="bg-[#dae7e6] h-[26.182px] relative rounded-[13.091px] shrink-0 w-[54px]" data-name="_Toggle base 2">
            <div className="flex flex-row items-center justify-end overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-end p-[2.182px] relative size-full">
                <div className="relative shrink-0 size-[21.818px]" data-name="Button">
                  <div className="absolute inset-[-10%_-15%_-20%_-15%]">
                    <svg className="block size-full" fill="none" height="28.3636" preserveAspectRatio="none" viewBox="0 0 28.3636 28.3636" width="28.3636">
                      <g filter="url(#filter0_dd_0_70)" id="Button">
                        <circle cx="14.1818" cy="13.0909" fill="#056257" r="10.9091" />
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.3636" id="filter0_dd_0_70" width="28.3636" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="1.09091" />
                          <feGaussianBlur stdDeviation="1.09091" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_70" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="1.09091" />
                          <feGaussianBlur stdDeviation="1.63636" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                          <feBlend in2="effect1_dropShadow_0_70" mode="normal" result="effect2_dropShadow_0_70" />
                          <feBlend in="SourceGraphic" in2="effect2_dropShadow_0_70" mode="normal" result="shape" />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[529px]">
      <Frame3 />
    </div>
  );
}

function Left() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Theinhardt:Medium',sans-serif] gap-[4px] items-start justify-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Left">
      <div className="flex flex-col justify-center relative shrink-0 text-[#7e7e7e] text-[14px] tracking-[-0.14px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[20px]">1x of Term</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#272727] text-[18px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[28px]">$150,000</p>
      </div>
    </div>
  );
}

function DecorativeRadio() {
  return (
    <div className="bg-[#dae7e6] content-stretch flex flex-[1_0_34px] flex-col items-start justify-center min-w-px p-[16px] relative rounded-[8px]" data-name="Decorative Radio">
      <div aria-hidden className="absolute border border-[#056257] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Left />
    </div>
  );
}

function Left1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Theinhardt:Medium',sans-serif] gap-[4px] items-start justify-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Left">
      <div className="flex flex-col justify-center relative shrink-0 text-[#7e7e7e] text-[14px] tracking-[-0.14px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[20px]">2x of Term</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#272727] text-[18px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[28px]">$150,000</p>
      </div>
    </div>
  );
}

function DecorativeRadio1() {
  return (
    <div className="bg-[#f3f7f7] content-stretch flex flex-[1_0_34px] flex-col items-start justify-center min-w-px p-[16px] relative rounded-[8px]" data-name="Decorative Radio">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Left1 />
    </div>
  );
}

function Left2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Theinhardt:Medium',sans-serif] gap-[4px] items-start justify-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Left">
      <div className="flex flex-col justify-center relative shrink-0 text-[#7e7e7e] text-[14px] tracking-[-0.14px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[20px]">3x of Term</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#272727] text-[18px]" style={{ fontFeatureSettings: '"case" 1' }}>
        <p className="leading-[28px]">$150,000</p>
      </div>
    </div>
  );
}

function DecorativeRadio2() {
  return (
    <div className="bg-[#f3f7f7] content-stretch flex flex-[1_0_34px] flex-col items-start justify-center min-w-px p-[16px] relative rounded-[8px]" data-name="Decorative Radio">
      <div aria-hidden className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Left2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <DecorativeRadio />
      <DecorativeRadio1 />
      <DecorativeRadio2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      <Frame1 />
      <Frame6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[529px]">
      <Frame2 />
    </div>
  );
}

export default function QuoterBasicInformation() {
  return (
    <div className="bg-white border-[#e9e9e9] border-solid border-t content-stretch flex flex-col items-start overflow-clip px-[24px] py-[20px] relative rounded-[8px] size-full" data-name="Quoter Basic information">
      <Frame />
    </div>
  );
}