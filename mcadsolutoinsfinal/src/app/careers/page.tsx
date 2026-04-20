'use client'
import Link from 'next/link';
import { Briefcase, TrendingUp, Award, Target, CheckCircle2, Users, Rocket, Building2 } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
// import { AnimatedSection } from '../components/AnimatedSection';

export default function CareersPage() {
  const careerPaths = [
    {
      title: "CAD Design Engineer",
      description: "Work with automotive OEMs and suppliers on vehicle design, part modeling, and assembly creation",
      salary: "₹4-8 LPA",
      companies: "Tata Motors, Mahindra, Maruti Suzuki",
      icon: Target
    },
    {
      title: "BIW Fixture Design Specialist",
      description: "Design and validate Body-In-White fixtures for automotive manufacturing and assembly lines",
      salary: "₹5-10 LPA",
      companies: "Volkswagen, Hyundai, BMW India",
      icon: Building2
    },
    {
      title: "Digital Twin Engineer",
      description: "Create virtual simulations and digital twins for Industry 4.0 automation systems",
      salary: "₹6-12 LPA",
      companies: "Bosch, Siemens, ABB India",
      icon: Rocket
    },
    {
      title: "Product Design Engineer",
      description: "Design and develop innovative products from concept to manufacturing using CAD tools",
      salary: "₹5-9 LPA",
      companies: "Hero MotoCorp, Bajaj Auto, TVS Motor",
      icon: Award
    },
    {
      title: "Robotics Simulation Engineer",
      description: "Design and simulate robotic automation cells for smart manufacturing environments",
      salary: "₹6-11 LPA",
      companies: "KUKA, Fanuc, ABB Robotics",
      icon: Users
    },
    {
      title: "Manufacturing Engineer",
      description: "Optimize production processes, tooling design, and manufacturing workflows",
      salary: "₹4-8 LPA",
      companies: "Motherson Sumi, Bharat Forge, Sundram Fasteners",
      icon: TrendingUp
    }
  ];

  const careerBenefits = [
    {
      title: "High Demand Industry",
      description: "Automotive and manufacturing sectors are constantly hiring skilled CAD professionals",
      icon: TrendingUp
    },
    {
      title: "Competitive Salaries",
      description: "Entry-level positions start at ₹4-6 LPA with rapid growth potential",
      icon: Briefcase
    },
    {
      title: "Global Opportunities",
      description: "Work with international OEMs and suppliers across automotive hubs",
      icon: Award
    },
    {
      title: "Career Growth",
      description: "Progress from junior engineer to lead designer or project manager roles",
      icon: Rocket
    }
  ];

  const skillsRequired = [
    "CATIA V5 / SOLIDWORKS / NX CAD Proficiency",
    "GD&T (Geometric Dimensioning & Tolerancing)",
    "Assembly Design & Bill of Materials",
    "Sheet Metal & Surface Design",
    "FEA & Simulation Basics",
    "Product Lifecycle Management (PLM)",
    "Technical Drawing & Documentation",
    "Problem-Solving & Analytical Thinking"
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
                <p className="leading-[20px]">Build Your Future</p>
              </div>
              
              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[44px] md:leading-[56px] lg:leading-[64px] tracking-[-1.2px] md:tracking-[-1.5px]" style={{ color: '#F4F7F9' }}>
                Launch Your CAD Career
              </h1>
              
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                Discover exciting career opportunities in automotive design, manufacturing engineering, and Industry 4.0 automation with comprehensive training from M CAD Solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-[12px] mt-[16px]">
                <Link
                  href="/contact"
                  className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[32px] py-[18px] relative rounded-[9999px] hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
                  }}
                >
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white">
                    <p className="leading-[24px] whitespace-pre">Start Your Journey</p>
                  </div>
                </Link>
                
                <Link
                  href="/placements"
                  className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center px-[32px] py-[18px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                    <p className="leading-[24px] whitespace-pre">View Placements</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative max-w-[540px] w-full">
              <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGNhcmVlcnxlbnwxfHx8fDE3NjE2MDMxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Engineering Career Opportunities"
                  className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Career Opportunities</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Explore Career Paths After Training</p>
            </div>
            <p className="mt-[16px] text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] max-w-[720px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              Our training prepares you for diverse roles in automotive, manufacturing, and automation industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
            {careerPaths.map((career, index) => {
              const Icon = career.icon;
              return (
                <div 
                  key={index}
                  className="backdrop-blur-md backdrop-filter box-border flex flex-col gap-[16px] md:gap-[20px] p-[24px] md:p-[32px] relative rounded-[16px] hover:border-[rgba(107,193,227,0.3)] transition-all duration-300"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  
                  <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[12px] p-[16px] inline-flex items-center justify-center w-fit">
                    <Icon className="w-[28px] h-[28px]" style={{ color: '#6BC1E3' }} />
                  </div>

                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] md:text-[22px] tracking-[-0.5px] mb-[12px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[28px] md:leading-[32px]">{career.title}</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[24px] text-[14px] md:text-[15px] mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{career.description}</p>
                    </div>
                    
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex items-center gap-[8px]">
                        <div className="text-[16px] font-medium" style={{ color: '#F9A825' }}>
                          {career.salary}
                        </div>
                        <div className="text-[13px]" style={{ color: 'rgba(244, 247, 249, 0.5)' }}>
                          Average Salary
                        </div>
                      </div>
                      <div className="text-[13px]" style={{ color: 'rgba(244, 247, 249, 0.6)' }}>
                        <span style={{ color: '#6BC1E3' }}>Companies: </span>{career.companies}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Benefits Section */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Why Choose This Path</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Career Benefits in CAD & Automation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {careerBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="backdrop-blur-md backdrop-filter box-border flex gap-[20px] items-start p-[28px] md:p-[36px] relative rounded-[16px]"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  
                  <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[12px] p-[14px] flex items-center justify-center shrink-0">
                    <Icon className="w-[24px] h-[24px]" style={{ color: '#6BC1E3' }} />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] tracking-[-0.5px] mb-[12px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[28px]">{benefit.title}</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Required Section */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1024px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">What You'll Need</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Essential Skills for Success</p>
            </div>
            <p className="mt-[16px] text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] max-w-[720px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              Master these core skills through our comprehensive training programs
            </p>
          </div>

          <div className="backdrop-blur-md backdrop-filter box-border p-[32px] md:p-[48px] relative rounded-[24px]">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {skillsRequired.map((skill, index) => (
                <div key={index} className="flex gap-[12px] items-start">
                  <CheckCircle2 className="w-[20px] h-[20px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                    <p>{skill}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1024px] mx-auto px-[16px] md:px-[32px]">
          <div className="backdrop-blur-md backdrop-filter box-border flex flex-col items-center gap-[24px] md:gap-[32px] p-[32px] md:p-[48px] relative rounded-[24px] text-center">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
            
            <Rocket className="w-[48px] md:w-[64px] h-[48px] md:h-[64px]" style={{ color: '#F9A825' }} />
            
            <div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px] mb-[16px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Ready to Start Your Career Journey?</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[15px] md:text-[16px] max-w-[640px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p>Get industry-ready training, hands-on experience, and dedicated placement support to launch your dream career in CAD and automation.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-[12px] mt-[8px]">
              <Link
                href="/contact"
                className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[32px] md:px-[42px] py-[18px] md:py-[22px] relative rounded-[9999px] hover:opacity-90 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
                }}
              >
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] md:text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[24px] whitespace-pre">Enroll Now</p>
                </div>
              </Link>
              
              <Link
                href="/cad-courses"
                className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] md:px-[32px] py-[18px] md:py-[22px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] md:text-[16px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[24px] whitespace-pre">Explore Courses</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}