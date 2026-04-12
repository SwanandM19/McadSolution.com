const image_4f32e47319f416bc5a1fcfd8c3414978deec94e7 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTASection() {
  return (
    <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
      <div className="max-w-[1280px] mx-auto px-[32px]">
        <div className="backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.4)] relative rounded-[16px] p-[64px]">
          <div className="flex items-center gap-[48px] max-w-[1000px] mx-auto">
            {/* Image */}

            {/* Content */}
            <div className="flex-1 text-center">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[24px] text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[44px]">We provided all type of CAD courses</p>
              </div>
              
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px] mb-[32px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                <p>Uncover the limitless potential of CAD in the realm of mechanical engineering. Our experienced instructors guide you through complex principles and practical applications, equipping you with the tools to thrive in your future profession. Enroll today and embark on a transformative path towards mastering Computer-Aided Design tailored specifically for mechanical engineering.</p>
              </div>

              <button className="relative rounded-[9999px] px-[32px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex items-center justify-center px-[16px] py-[12px] relative">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px] text-center" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[24px]">Get Started</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
    </section>
  );
}