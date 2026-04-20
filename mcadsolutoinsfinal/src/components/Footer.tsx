import svgPaths from "../imports/svg-9op1xbyva3";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative shrink-0 w-full" style={{ backgroundColor: '#092B38' }}>
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-solid inset-0 pointer-events-none" style={{ borderColor: 'rgba(107, 193, 227, 0.2)' }} />
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px] py-[32px] md:py-[48px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[32px] mb-[32px] md:mb-[40px]">
          
          {/* Menu Column */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px] mb-[8px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[24px]">Menu</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">Home</p>
                </div>
              </button>
              <button onClick={() => onNavigate('about')} className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">About Us</p>
                </div>
              </button>
              <button onClick={() => onNavigate('cad-courses')} className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">Job Oriented Courses</p>
                </div>
              </button>
              <button onClick={() => onNavigate('placements')} className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">Placement</p>
                </div>
              </button>
              <button onClick={() => onNavigate('contact')} className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">Contact</p>
                </div>
              </button>
            </div>
          </div>

          {/* Programs Column */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px] mb-[8px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[24px]">Programs</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <button onClick={() => onNavigate('biw-fixture-design')} className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">BIW Fixture Design</p>
                </div>
              </button>
              <button onClick={() => onNavigate('domain-courses')} className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">Automotive Plastic Trims</p>
                </div>
              </button>
              <button onClick={() => onNavigate('cad-courses')} className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">CATIA V5</p>
                </div>
              </button>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] mt-[8px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p className="leading-[20px]">Admission</p>
              </div>
              <a href="#" className="text-left hover:text-[#6BC1E3] transition-all cursor-pointer">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">Privacy Policy</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px] mb-[8px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[24px]">Contact Info</p>
            </div>
            <div className="flex flex-col gap-[12px]">
              <div className="flex gap-[8px] items-start">
                <MapPin className="w-[16px] h-[16px] mt-[2px] shrink-0" style={{ color: '#6BC1E3' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p>1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052</p>
                </div>
              </div>
              <div className="flex gap-[8px] items-center">
                <Phone className="w-[16px] h-[16px]" style={{ color: '#6BC1E3' }} />
                <a href="tel:+917030999500" className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] hover:text-[#6BC1E3] transition-colors cursor-pointer" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">+91 7030999500</p>
                </a>
              </div>
              <div className="flex gap-[8px] items-center">
                <Phone className="w-[16px] h-[16px]" style={{ color: '#6BC1E3' }} />
                <a href="tel:+919096708490" className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] hover:text-[#6BC1E3] transition-colors cursor-pointer" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">+91 9096708490</p>
                </a>
              </div>
              <div className="flex gap-[8px] items-center">
                <Mail className="w-[16px] h-[16px]" style={{ color: '#6BC1E3' }} />
                <a href="mailto:info@mcadsolution.com" className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] hover:text-[#6BC1E3] transition-colors cursor-pointer" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p className="leading-[20px]">info@mcadsolution.com</p>
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours Column */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px] mb-[8px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[24px]">Opening Hours</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex gap-[8px] items-start">
                <Clock className="w-[16px] h-[16px] mt-[2px] shrink-0" style={{ color: '#6BC1E3' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p>Monday-Saturday:09.00 AM - 09.00PM.</p>
                  <p className="mt-[4px]">Sunday : Closed</p>
                </div>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px] mt-[8px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p>Our Support team is available 24/7 to answer your queries</p>
              </div>
              <button 
                onClick={() => onNavigate('contact')}
                className="mt-[12px] box-border flex items-center justify-center px-[20px] py-[10px] relative rounded-[9999px] hover:opacity-90 transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
                }}
              >
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[20px]">Enquire Now</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="content-stretch flex flex-col md:flex-row items-center justify-between gap-[16px] pt-[32px] border-t" style={{ borderColor: 'rgba(107, 193, 227, 0.2)' }}>
          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px]" style={{ color: 'rgba(244, 247, 249, 0.5)' }}>
            <p className="leading-[16px]">Copyright @2025 M CAD SOLUTIONS. all rights reserved. Privacy & Policy</p>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex gap-[4px] items-center hover:text-[#6BC1E3] transition-colors cursor-pointer"
          >
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px] text-nowrap" style={{ color: 'rgba(244, 247, 249, 0.5)' }}>
              <p className="leading-[16px] whitespace-pre">Back to top</p>
            </div>
            <div className="relative shrink-0 size-[14px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g>
                  <path d={svgPaths.pb2d03c0} stroke="rgba(244, 247, 249, 0.5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
                  <path d="M7 11.0833V2.91667" stroke="rgba(244, 247, 249, 0.5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
                </g>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
