

const image_b35101142138a676df8e83286978e23b32e23140 = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_0e74e53b305e05e80116d128abd85a19559c807b = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_f2bb52ac5685e285d785d72f76d52726576b04d6 = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_bceaf5653f58461c3fbe5a0f38a3365061d2eef8 = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_0143bfac427bcddce5033bde72c213f52a8a0c19 = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_d522dad8d28baf2be6363d15008aa0030c7e556b = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_4b78ba3a097d72e04d73789d6cf5de40c2ed840e = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_12f5757f8e88eb479419179a68b340411f62795a = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_8b5d23a6b60274c4c51cbe3a5a26297e94bd36f5 = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_4e32cc44c25a7ea352da79300705f331e1afb446 = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_01e0d13ce24618ae2ceb108fb84770640eae1075 = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const image_1fa568b7fa3b445e95f1f443f4833c53a681d6a4 = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const imgManojPotdar = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const imgVaishnaviGore = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const imgHistoryTimeline = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const img2017Milestone = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const img2018Milestone = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const img2019Milestone = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const img2020Milestone = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
import svgPaths from "../imports/svg-9op1xbyva3";
const imgSection = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const imgTechnicalHero = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const imgGradient = "";
const imgTrainingEnvironment = "https://placehold.co/800x600/0A1C26/00D4FF?text=M aAD+Solution";
const imgGalleryCollage = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const imgEvolution = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
const imgIndustry5Vision = "https://placehold.co/800x600/0A1C26/00D4FF?text=M CAD+Solution";
import { Monitor, Users, Award, BookOpen, Linkedin, Twitter, Instagram, Target, Zap } from "lucide-react";
import { AnimatedSection } from '../components/AnimatedSection';

interface AboutPageProps {
  onNavigate?: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      {/* About Us Hero Section */}
      <section
        className="relative w-full min-h-[500px] overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)',
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-[32px] py-12 sm:py-16 md:py-[60px]">
          
          {/* Left Text Column */}
          <div className="flex-1 flex flex-col gap-4 text-left text-white">
            <h5 className="text-[#6BC1E3] uppercase text-sm sm:text-base lg:text-lg tracking-[0.7px] font-['Geist:Regular',sans-serif]">
              About Us
            </h5>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] leading-tight lg:leading-[54px] font-['Geist:Regular',sans-serif] font-normal tracking-[-1.2px]">
              Leading Mechanical Design & Placement-Focused Training Institute in Pune
            </h1>

            <p className="text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] text-gray-300 max-w-[520px]">
              Transforming engineering graduates into industry-ready professionals with domain expertise in BIW Fixture Design, Plastic Product Design, Robotics, and Digital Twin technologies — backed by strong placement support since 2015.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="flex-1 relative max-w-[480px] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
              <img
                src={'/aboutustop.png'}
                alt="Young Engineer in Modern Factory"
                className="w-full h-auto sm:h-[300px] md:h-[350px] lg:h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <AnimatedSection>
        <section className="relative shrink-0 w-full py-6 md:py-8 lg:py-[24px] md:py-[32px]" style={{ 
          background: 'linear-gradient(to bottom, transparent 0%, rgba(10, 28, 38, 0.5) 20%, #0A1C26 50%)'
        }}>
          <div className="max-w-[800px] mx-auto px-4 sm:px-6 md:px-[24px]">
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-4 md:gap-[16px] items-start p-6 md:p-8 lg:p-[32px] relative rounded-[12px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-xl sm:text-2xl md:text-[22px] lg:text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-snug md:leading-[32px]">From CAD Training to Automation Leadership</p>
              </div>
              
              {/* Evolution Image */}
              <div className="w-full rounded-[8px] overflow-hidden">
                <img 
                  src={'/aboutus_froMCAD_training_to_automation_leadership.png'} 
                  alt="The evolution of M CAD Solutions from CAD training to Industry 4.0 leadership" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-6 text-sm md:text-[14px] lg:text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                {/* Empty div kept for structure */}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection>
        <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#092B38' }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
            <div className="text-center mb-8 sm:mb-12 md:mb-[48px]">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-tight md:leading-[40px]">Our Vision & Mission</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[24px]">
              {/* Vision */}
              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-4 md:gap-[20px] items-start p-6 sm:p-8 md:p-10 lg:p-[40px] relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                
                <div className="rounded-[8px] overflow-hidden w-24 h-24 sm:w-28 sm:h-28 md:w-[120px] md:h-[120px]">
                  <img 
                    src={'/aboutus_shaping_the_engineers_of_industry5.png'} 
                    alt="Industry 5.0 Vision" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px] mb-3 md:mb-[16px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-snug md:leading-[36px]">Shaping the Engineers of Industry 5.0</p>
                  </div>
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm sm:text-base md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                    <p>We believe engineers should design intelligent, connected, and human-centric factories. Our goal is to train professionals who can conceptualize, simulate, and validate automation systems virtually before building them physically.</p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-4 md:gap-[20px] items-start p-6 sm:p-8 md:p-10 lg:p-[40px] relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                
                <div className="rounded-[8px] overflow-hidden w-24 h-24 sm:w-28 sm:h-28 md:w-[120px] md:h-[120px]">
                  <img 
                    src={'/Gemini_Generated_Image_3ctz443ctz443ctz.png'} 
                    alt="Industry 5.0 Vision" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px] mb-3 md:mb-[16px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-snug md:leading-[36px]">Empowering Engineers to Design Smarter Factories</p>
                  </div>
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm sm:text-base md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                    <p>Our mission is to bridge mechanical design and automation intelligence. Through domain-specific programs in CAD, robotics, and Digital Twin engineering, we prepare students for the future of manufacturing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection>
        <section className="bg-gradient-to-r bg-repeat bg-size-[1920px_1076px,auto] bg-top-left relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundImage: `url('${imgGradient}')`, backgroundColor: '#092B38' }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
            <div className="text-center mb-8 sm:mb-12 md:mb-[48px]">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-tight md:leading-[40px]">What Drives Us</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[24px]">
              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-4 md:gap-[16px] items-start p-6 sm:p-8 md:p-[32px] relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-10 sm:size-12 md:size-[48px]">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                </div>
                <div className="content-stretch flex flex-col items-start w-full">
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-lg sm:text-xl md:text-[20px] tracking-[-0.5px] w-full mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-snug md:leading-[28px]">Innovation in Education</p>
                  </div>
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm md:text-[14px] w-full" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                    <p>Constantly evolving to match industry advancements.</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-4 md:gap-[16px] items-start p-6 sm:p-8 md:p-[32px] relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-10 sm:size-12 md:size-[48px]">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                </div>
                <div className="content-stretch flex flex-col items-start w-full">
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-lg sm:text-xl md:text-[20px] tracking-[-0.5px] w-full mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-snug md:leading-[28px]">Practical Learning</p>
                  </div>
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm md:text-[14px] w-full" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                    <p>Every concept taught through a real project.</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-4 md:gap-[16px] items-start p-6 sm:p-8 md:p-[32px] relative rounded-[16px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-10 sm:size-12 md:size-[48px]">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                </div>
                <div className="content-stretch flex flex-col items-start w-full">
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-lg sm:text-xl md:text-[20px] tracking-[-0.5px] w-full mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-snug md:leading-[28px]">Career Focus</p>
                  </div>
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm md:text-[14px] w-full" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                    <p>Training programs built around real job roles and technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Lecturers Section */}
      <AnimatedSection>
        <section className="bg-gradient-to-r bg-repeat bg-size-[1920px_1076px,auto] bg-top-left relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundImage: `url('${imgGradient}')`, backgroundColor: '#092B38' }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
            <div className="text-center mb-8 sm:mb-12 md:mb-[64px]">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-tight md:leading-[40px]">Our Lecturers</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-[48px] items-start">
              {/* Left Side - Text Content */}
              <div className="flex-1 content-stretch flex flex-col gap-6 md:gap-[24px] items-start relative">
                <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-6 md:gap-[24px] items-start p-6 sm:p-8 md:p-10 lg:p-[40px] relative rounded-[16px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-2xl sm:text-3xl md:text-4xl lg:text-[32px] tracking-[-0.8px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-tight md:leading-[40px]">Competent Instructors And Lecturers</p>
                  </div>
                  
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm sm:text-base md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                    <p className="mb-4 md:mb-[16px]">Our faculty includes industry Experts who will provide you with valuable insights into the latest trends and developments in the field. "Gain the practical knowledge and hands-on experience from these seasoned professionals, and you'll be well-equipped to excel in your career."</p>
                    
                    <p>Learn from experienced instructors and industry experts to experience the transformative power of learning. Come join M CAD Solutions on an exciting journey toward enlightenment and self-improvement!</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Instructor Cards */}
              <div className="flex-1 grid grid-cols-1 gap-6 md:gap-[24px]">
                {/* Instructor Card 1 - Manoj Potdar */}
                <div className="group backdrop-blur-md backdrop-filter box-border content-stretch relative rounded-[16px] overflow-hidden">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-[24px] items-center sm:items-center p-6 sm:p-8 md:p-[32px] relative">
                    <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] rounded-[12px] overflow-hidden bg-white">
                      <img 
                        alt="Manoj Potdar" 
                        className="absolute inset-0 w-full h-full object-contain" 
                        src={'/aboutus_ourlecturers_manojpotdar.png'} 
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-1 sm:gap-[8px] text-center sm:text-left">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-xl sm:text-2xl md:text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[32px]">Manoj Potdar</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-sm sm:text-base md:text-[16px]" style={{ color: '#6BC1E3' }}>
                        <p className="leading-relaxed md:leading-[24px]">Founder and CEO</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Icons - Appear on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,28,38,0.95)] via-[rgba(10,28,38,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6 md:pb-[32px] gap-3 sm:gap-4 md:gap-[16px] z-20">
                    <a href="#" className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.1)] rounded-[8px] p-2 sm:p-3 md:p-[12px] hover:bg-[rgba(107,193,227,0.2)] transition-colors">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </a>
                    <a href="#" className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.1)] rounded-[8px] p-2 sm:p-3 md:p-[12px] hover:bg-[rgba(107,193,227,0.2)] transition-colors">
                      <Twitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </a>
                    <a href="#" className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.1)] rounded-[8px] p-2 sm:p-3 md:p-[12px] hover:bg-[rgba(107,193,227,0.2)] transition-colors">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </a>
                  </div>
                </div>

                {/* Instructor Card 2 - Vaishnavi Gore */}
                <div className="group backdrop-blur-md backdrop-filter box-border content-stretch relative rounded-[16px] overflow-hidden">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                  
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-[24px] items-center sm:items-center p-6 sm:p-8 md:p-[32px] relative">
                    <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] rounded-[12px] overflow-hidden bg-white">
                      <img 
                        alt="Vaishnavi Gore" 
                        className="absolute inset-0 w-full h-full object-contain" 
                        src={'/aboutus_ourlecturers_vaishnavigore.png'} 
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-1 sm:gap-[8px] text-center sm:text-left">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-xl sm:text-2xl md:text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[32px]">Vaishnavi Gore</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-sm sm:text-base md:text-[16px]" style={{ color: '#6BC1E3' }}>
                        <p className="leading-relaxed md:leading-[24px]">Admin and Trainer</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Icons - Appear on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,28,38,0.95)] via-[rgba(10,28,38,0.8)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 sm:pb-6 md:pb-[32px] gap-3 sm:gap-4 md:gap-[16px] z-20">
                    <a href="#" className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.1)] rounded-[8px] p-2 sm:p-3 md:p-[12px] hover:bg-[rgba(107,193,227,0.2)] transition-colors">
                      <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </a>
                    <a href="#" className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.1)] rounded-[8px] p-2 sm:p-3 md:p-[12px] hover:bg-[rgba(107,193,227,0.2)] transition-colors">
                      <Twitter className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </a>
                    <a href="#" className="backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.1)] rounded-[8px] p-2 sm:p-3 md:p-[12px] hover:bg-[rgba(107,193,227,0.2)] transition-colors">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* History of M CAD Solutions Section */}
      <AnimatedSection>
        <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
            <div className="text-center mb-8 sm:mb-12 md:mb-[48px]">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-2 sm:mb-3 md:mb-[12px] text-xs sm:text-sm md:text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
                <p className="leading-tight md:leading-[20px]">Our Journey</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] tracking-[-0.9px] mb-4 sm:mb-6 md:mb-[24px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-tight md:leading-[40px]">History of M CAD Solutions</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm sm:text-base md:text-[18px] max-w-[800px] mx-auto px-4" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                <p>M CAD Solutions, founded in 2017 by Mr. Manoj Potdar, aims to provide job-oriented mechanical design education to empower young people for successful engineering careers.</p>
              </div>
            </div>

            {/* Milestone Cards */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[24px] relative z-10">
                {[
                  { year: '2017', title: 'Foundation', description: 'M CAD Solutions established with a vision to transform CAD education' },
                  { year: '2018', title: 'First Batch', description: '100+ students trained with 95% placement success rate' },
                  { year: '2019', title: 'Expansion', description: 'New facility launched with state-of-the-art infrastructure' },
                  { year: '2020', title: 'Industry Recognition', description: 'Awarded Best CAD Training Institute in Pune' }
                ].map((milestone, index) => (
                  <div key={index} className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-4 md:gap-[16px] items-start p-4 sm:p-5 md:p-6 lg:p-[24px] relative rounded-[16px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                    
                    {milestone.year === '2017' && (
                      <div className="relative w-full h-28 sm:h-32 md:h-40 lg:h-[160px] rounded-[12px] overflow-hidden mb-2 md:mb-[8px]">
                        <img 
                          alt="2017 Foundation Milestone" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          src={'/aboutus_foundation_2017.png'} 
                        />
                      </div>
                    )}
                    
                    {milestone.year === '2018' && (
                      <div className="relative w-full h-28 sm:h-32 md:h-40 lg:h-[160px] rounded-[12px] overflow-hidden mb-2 md:mb-[8px]">
                        <img 
                          alt="2018 First Batch Milestone" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          src={'/aboutus_firstbatch_2018.png'} 
                        />
                      </div>
                    )}
                    
                    {milestone.year === '2019' && (
                      <div className="relative w-full h-28 sm:h-32 md:h-40 lg:h-[160px] rounded-[12px] overflow-hidden mb-2 md:mb-[8px]">
                        <img 
                          alt="2019 Expansion Milestone" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          src={'/bceaf5653f58461c3fbe5a0f38a3365061d2eef8.png'} 
                        />
                      </div>
                    )}
                    
                    {milestone.year === '2020' && (
                      <div className="relative w-full h-28 sm:h-32 md:h-40 lg:h-[160px] rounded-[12px] overflow-hidden mb-2 md:mb-[8px]">
                        <img 
                          alt="2020 Industry Recognition Milestone" 
                          className="absolute inset-0 w-full h-full object-cover" 
                          src={'/b35101142138a676df8e83286978e23b32e23140.png'} 
                        />
                      </div>
                    )}
                    
                    <div className="rounded-[8px] px-3 py-1 sm:px-4 sm:py-1.5 md:px-[16px] md:py-[8px]" style={{ background: 'linear-gradient(135deg, #10162F 0%, #1a2456 100%)' }}>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-lg sm:text-xl md:text-2xl lg:text-[24px] tracking-[-0.6px]" style={{ color: '#F9A825' }}>
                        <p className="leading-snug md:leading-[32px]">{milestone.year}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1 md:gap-[8px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-relaxed md:leading-[28px]">{milestone.title}</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-tight text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                        <p>{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    
      {/* Training Environment Section */}
      <AnimatedSection>
        <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col lg:flex-row gap-6 lg:gap-[48px] items-center p-6 sm:p-8 md:p-10 lg:p-[48px] relative rounded-[24px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
              
              <div className="relative w-full lg:w-[420px] h-auto lg:h-[420px] rounded-[16px] overflow-hidden mb-4 lg:mb-0">
                <img alt="Professional CAD Training Environment" className="w-full h-full object-cover" src={"/8167ab17da84ae73edfbdd14ea0b1857aa23adac.png"} />
              </div>
              
              <div className="flex-1 content-stretch flex flex-col gap-4 md:gap-6 lg:gap-[24px] items-start relative">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-xs sm:text-sm md:text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
                  <p className="leading-tight md:leading-[20px]">Our Facilities</p>
                </div>
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
                  <p className="leading-tight lg:leading-[48px]">State-of-the-Art Training Environment</p>
                </div>
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm sm:text-base md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p>Our modern training facility is equipped with the latest CAD software and high-performance workstations to provide you with the best learning experience possible.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-[20px] w-full mt-2 md:mt-[8px]">
                  <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-2 md:gap-3 lg:gap-[12px] items-start p-4 sm:p-5 md:p-6 lg:p-[24px] relative rounded-[12px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="rounded-[8px] p-2 sm:p-2.5 md:p-[10px]" style={{ background: 'linear-gradient(135deg, #10162F 0%, #1a2456 100%)' }}>
                      <Monitor className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[28px]">High-End Workstations</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-tight text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                        <p>Latest hardware & CAD software</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-2 md:gap-3 lg:gap-[12px] items-start p-4 sm:p-5 md:p-6 lg:p-[24px] relative rounded-[12px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="rounded-[8px] p-2 sm:p-2.5 md:p-[10px]" style={{ background: 'linear-gradient(135deg, #10162F 0%, #1a2456 100%)' }}>
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[28px]">Expert Mentorship</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-tight text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                        <p>Personal guidance & support</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-2 md:gap-3 lg:gap-[12px] items-start p-4 sm:p-5 md:p-6 lg:p-[24px] relative rounded-[12px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="rounded-[8px] p-2 sm:p-2.5 md:p-[10px]" style={{ background: 'linear-gradient(135deg, #10162F 0%, #1a2456 100%)' }}>
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[28px]">Industry Projects</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-tight text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                        <p>Real-world design experience</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-2 md:gap-3 lg:gap-[12px] items-start p-4 sm:p-5 md:p-6 lg:p-[24px] relative rounded-[12px]">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                    <div className="rounded-[8px] p-2 sm:p-2.5 md:p-[10px]" style={{ background: 'linear-gradient(135deg, #10162F 0%, #1a2456 100%)' }}>
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                    </div>
                    <div className="flex flex-col gap-1 md:gap-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[28px]">Updated Curriculum</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-tight text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                        <p>Industry-aligned course content</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Training Approach */}
      <AnimatedSection>
        <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#092B38' }}>
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
            <div className="text-center mb-8 sm:mb-12 md:mb-[48px]">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-2 sm:mb-3 md:mb-[12px] text-xs sm:text-sm md:text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
                <p className="leading-tight md:leading-[20px]">Training Methodology</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-tight md:leading-[40px]">Our Training Approach</p>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-6 md:gap-8 lg:gap-[32px] p-6 sm:p-8 md:p-10 lg:p-[40px] relative rounded-[16px] mb-8 md:mb-[32px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-sm sm:text-base md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                <p className="mb-4 md:mb-[16px]">At M CAD Solutions, we believe in practical, industry-oriented learning that goes beyond theoretical knowledge. Our training approach is designed to transform mechanical engineering graduates into job-ready CAD professionals through a carefully structured methodology:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-[24px]">
                <div className="flex gap-3 md:gap-[16px]">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px] rounded-[12px] bg-gradient-to-br from-[#10162F] to-[#1a2456] flex items-center justify-center">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[1]" style={{ color: '#F9A825' }}>70%</div>
                  </div>
                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px] mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-snug md:leading-[28px]">Job-Oriented Domain Training</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>Practical, industry-focused curriculum designed to make you job-ready.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-[16px]">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px] rounded-[12px] bg-gradient-to-br from-[#10162F] to-[#1a2456] flex items-center justify-center">
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[1]" style={{ color: '#F9A825' }}>30%</div>
                  </div>
                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px] mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-snug md:leading-[28px]">Soft Skills Development</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>Communication, presentation, and workplace etiquette training.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-[16px]">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px] rounded-[12px] bg-gradient-to-br from-[#10162F] to-[#1a2456] flex items-center justify-center">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                  </div>
                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px] mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-snug md:leading-[28px]">Personal Development Programs</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>Activities and sessions focused on building confidence and leadership skills.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-[16px]">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px] rounded-[12px] bg-gradient-to-br from-[#10162F] to-[#1a2456] flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                  </div>
                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px] mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-snug md:leading-[28px]">100% Lifetime Placement Support</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>Continuous placement assistance even after course completion.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-[16px]">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px] rounded-[12px] bg-gradient-to-br from-[#10162F] to-[#1a2456] flex items-center justify-center">
                    <Monitor className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                  </div>
                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px] mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-snug md:leading-[28px]">15+ Years Experienced Instructors</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>Learn from highly qualified professionals with extensive industry experience.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-[16px]">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px] rounded-[12px] bg-gradient-to-br from-[#10162F] to-[#1a2456] flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                  </div>
                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px] mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-snug md:leading-[28px]">Flexible Timings</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>Choose batch timings that suit your schedule.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-[16px]">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px] rounded-[12px] bg-gradient-to-br from-[#10162F] to-[#1a2456] flex items-center justify-center">
                    <Monitor className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                  </div>
                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px] mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-snug md:leading-[28px]">Access to All Session Recordings</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>Revisit and revise concepts anytime with lifetime access to recorded sessions.</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-[16px]">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-[48px] md:h-[48px] rounded-[12px] bg-gradient-to-br from-[#10162F] to-[#1a2456] flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px]" style={{ color: '#6BC1E3' }} />
                  </div>
                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-base sm:text-lg md:text-[18px] tracking-[-0.45px] mb-1 md:mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-snug md:leading-[28px]">Lifetime Course Availability</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>Once enrolled, access your course content anytime in the future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
  
            {/* Stats Section */}
      {/* Stats Section */}
<AnimatedSection>
  <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-[24px]">
        {[
          { number: '5000+', label: 'Students Trained' },
          { number: '98%', label: 'Placement Rate' },
          { number: '150+', label: 'Partner Companies' },
          { number: '15+', label: 'Years of Excellence' }
        ].map((stat, index) => (
          <div key={index} className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-2 md:gap-[8px] items-center p-4 sm:p-6 md:p-8 lg:p-[32px] relative rounded-[16px]">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] tracking-[-0.9px]" style={{ color: '#F9A825' }}>
              <p className="leading-tight md:leading-[40px]">{stat.number}</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-xs sm:text-sm md:text-[14px] text-center" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              <p className="leading-tight md:leading-[20px]">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</AnimatedSection>

      {/* SEPARATOR - Visual divider between content and footer - ADD THIS HERE */}
      <div className="relative w-full">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F9A825] to-transparent" />
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-[20px]">
          <div className="bg-[#092B38] p-[8px] rounded-full">
            <div className="w-[8px] h-[8px] rounded-full bg-[#F9A825]" />
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-[rgba(249,168,37,0.2)] w-full" />
    </>
  );
}

export default AboutPage;