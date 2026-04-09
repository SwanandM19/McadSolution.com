import { Building2, Handshake, Users, Globe, Award, Target, TrendingUp, Briefcase } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection } from '../components/AnimatedSection';

interface TieUpsPageProps {
  onNavigate?: (page: string) => void;
}

export function TieUpsPage({ onNavigate }: TieUpsPageProps) {
  const industryPartners = [
    {
      category: "Automation & Robotics",
      companies: [
        "Robtech Automation", "Faith Automation", "Difacto Robotics and Automation", "Torque Robotics",
        "Lean Automation", "KUKA Robotics", "Fanuc India", "ABB India"
      ]
    },
    {
      category: "Automotive OEMs & Suppliers",
      companies: [
        "Tata Technologies", "Mahindra & Mahindra", "Sindok Automotive", "Maruti Suzuki",
        "Hyundai Motor India", "Hero MotoCorp", "Bajaj Auto", "TVS Motor"
      ]
    },
    {
      category: "Engineering Services & Technology",
      companies: [
        "L&T Technology Services", "Rheomold", "Actalent", "Raptech",
        "JEF Automation Solutions", "STI Engineering", "Siemens", "Bosch India"
      ]
    },
    {
      category: "Training & Industry Partners",
      companies: [
        "IRTI (Iconics Research & Training Institute)", "Kohler", "Varroc Engineering", "Continental",
        "ZF India", "Motherson Sumi", "Bharat Forge", "Schneider Electric"
      ]
    }
  ];

  const tieUpBenefits = [
    {
      title: "Industry Curriculum Development",
      description: "Our courses are co-developed with industry experts to ensure relevance and practical applicability",
      icon: Target
    },
    {
      title: "Guest Lectures & Workshops",
      description: "Regular sessions by industry professionals sharing real-world insights and best practices",
      icon: Users
    },
    {
      title: "Live Project Opportunities",
      description: "Students work on actual industry projects, gaining hands-on experience with real challenges",
      icon: Briefcase
    },
    {
      title: "Internship Programs",
      description: "Direct internship opportunities with partner companies for top-performing students",
      icon: TrendingUp
    },
    {
      title: "Placement Partnerships",
      description: "Exclusive hiring drives and fast-track recruitment processes with partner organizations",
      icon: Handshake
    },
    {
      title: "Technology Access",
      description: "Access to latest software, tools, and technology platforms through academic partnerships",
      icon: Globe
    }
  ];

  const collaborationTypes = [
    {
      title: "Academic Partnerships",
      description: "Collaborations with leading engineering colleges and universities for joint training programs",
      count: "25+",
      icon: Building2
    },
    {
      title: "Corporate Tie-Ups",
      description: "Strategic partnerships with 150+ companies for placement, internships, and industry projects",
      count: "200+",
      icon: Handshake
    },
    {
      title: "Technology Partners",
      description: "Partnerships with CAD software providers and technology companies for academic licenses",
      count: "10+",
      icon: Globe
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[600px] md:min-h-[700px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)'
        }}
      >
        <div className="relative z-10 max-w-[1280px] mx-auto px-[16px] md:px-[32px] py-[60px] md:py-[100px]">
          <div className="flex flex-col lg:flex-row items-center gap-[32px] md:gap-[48px]">
            {/* Left Content */}
            <div className="flex-1 flex flex-col gap-[20px] md:gap-[24px] text-white">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
                <p className="leading-[20px]">Industry Partnerships</p>
              </div>
              
              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[44px] md:leading-[56px] lg:leading-[64px] tracking-[-1.2px] md:tracking-[-1.5px]" style={{ color: '#F4F7F9' }}>
                Industry Tie-Ups & Collaborations
              </h1>
              
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                M CAD Solutions partners with 150+ leading companies and institutions to provide students with real-world exposure, industry projects, and direct career opportunities.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-[16px] md:gap-[24px] mt-[16px]">
                <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[32px] md:text-[40px] leading-[1.2] tracking-[-1px]" style={{ color: '#F9A825' }}>
                      150+
                    </div>
                    <div className="text-[13px] md:text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Partner Companies
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[32px] md:text-[40px] leading-[1.2] tracking-[-1px]" style={{ color: '#F9A825' }}>
                      25+
                    </div>
                    <div className="text-[13px] md:text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Academic Partners
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[32px] md:text-[40px] leading-[1.2] tracking-[-1px]" style={{ color: '#F9A825' }}>
                      10+
                    </div>
                    <div className="text-[13px] md:text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Tech Partners
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-[12px] mt-[16px]">
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[32px] py-[18px] relative rounded-[9999px] hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
                  }}
                >
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white">
                    <p className="leading-[24px] whitespace-pre">Partner With Us</p>
                  </div>
                </button>
                
                <button 
                  onClick={() => onNavigate?.('placements')}
                  className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center px-[32px] py-[18px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                    <p className="leading-[24px] whitespace-pre">View Placements</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative max-w-[540px] w-full">
              <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MTYwMzE2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Industry Partnerships and Collaborations"
                  className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Our Network</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Types of Collaborations</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {collaborationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div 
                  key={index}
                  className="backdrop-blur-md backdrop-filter box-border flex flex-col gap-[20px] p-[32px] relative rounded-[16px] hover:border-[rgba(107,193,227,0.3)] transition-all duration-300"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  
                  <div className="flex items-center justify-between">
                    <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[12px] p-[16px] inline-flex items-center justify-center">
                      <Icon className="w-[28px] h-[28px]" style={{ color: '#6BC1E3' }} />
                    </div>
                    <div className="text-[36px] leading-[1] tracking-[-1px]" style={{ color: '#F9A825' }}>
                      {type.count}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[22px] tracking-[-0.5px] mb-[12px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[30px]">{type.title}</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{type.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Partners */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Industry Partners</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Our Industry Network</p>
            </div>
            <p className="mt-[16px] text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] max-w-[720px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              We collaborate with leading organizations across automotive, manufacturing, and technology sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px]">
            {industryPartners.map((partner, index) => (
              <div 
                key={index}
                className="backdrop-blur-md backdrop-filter box-border p-[32px] md:p-[40px] relative rounded-[16px]"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                
                <div className="flex flex-col gap-[20px]">
                  <div className="flex items-center gap-[12px]">
                    <Building2 className="w-[24px] h-[24px]" style={{ color: '#F9A825' }} />
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[28px]">{partner.category}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-[12px]">
                    {partner.companies.map((company, idx) => (
                      <div 
                        key={idx}
                        className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] box-border p-[12px] relative rounded-[8px] hover:bg-[rgba(107,193,227,0.1)] transition-all duration-300"
                      >
                        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="text-[13px] leading-[18px] text-center" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                          {company}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Tie-Ups */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Student Benefits</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">How Partnerships Benefit You</p>
            </div>
            <p className="mt-[16px] text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] max-w-[720px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              Our industry collaborations provide direct advantages to students throughout their learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
            {tieUpBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="backdrop-blur-md backdrop-filter box-border flex flex-col gap-[16px] p-[28px] relative rounded-[16px] hover:border-[rgba(107,193,227,0.3)] transition-all duration-300"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  
                  <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[12px] p-[14px] inline-flex items-center justify-center w-fit">
                    <Icon className="w-[24px] h-[24px]" style={{ color: '#6BC1E3' }} />
                  </div>

                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] tracking-[-0.5px] mb-[12px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[26px]">{benefit.title}</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1024px] mx-auto px-[16px] md:px-[32px]">
          <div className="backdrop-blur-md backdrop-filter box-border flex flex-col items-center gap-[24px] md:gap-[32px] p-[32px] md:p-[48px] relative rounded-[24px] text-center">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
            
            <Handshake className="w-[48px] md:w-[64px] h-[48px] md:h-[64px]" style={{ color: '#F9A825' }} />
            
            <div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px] mb-[16px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Interested in Partnering With Us?</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[15px] md:text-[16px] max-w-[640px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p>Join our network of industry partners and help shape the next generation of CAD and automation professionals. Contact us to explore collaboration opportunities.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-[12px] mt-[8px]">
              <button 
                onClick={() => onNavigate?.('contact')}
                className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[32px] md:px-[42px] py-[18px] md:py-[22px] relative rounded-[9999px] hover:opacity-90 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
                }}
              >
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] md:text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[24px] whitespace-pre">Contact Us</p>
                </div>
              </button>
              
              <button 
                onClick={() => onNavigate?.('about')}
                className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] md:px-[32px] py-[18px] md:py-[22px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] md:text-[16px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[24px] whitespace-pre">Learn More About Us</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}