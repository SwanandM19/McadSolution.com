import { Building2, Users, FileText, Briefcase, CheckCircle2, TrendingUp, Award, Target } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
const imgStudentsSharing = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { AnimatedSection } from '../components/AnimatedSection';

interface PlacementsPageProps {
  onNavigate?: (page: string) => void;
}

export function PlacementsPage({ onNavigate }: PlacementsPageProps) {
  const companyLogos = [
    "Robtech Automation", "Mahindra", "Tata Technologies", "Rheomold Virtual to Reality", 
      "Faith Automation", "Actalent", "IRTI", "L&T Technology Services",
    "Kohler", "JEET", "Believant", "Three M Software",
    "DIFACTO Robotics And Automation", "LEAN Automation", "Sindok", "ShivamTech",
    "MoldTEK", "Torque Robotics", "RAPTECH Engineering PVT LTD", "OasisServe"
  ];

  const successStories = [
  {
    name: "Rahul Sharma",
    role: "BIW Design Engineer",
    company: "Tata Motors",
    batch: "2024",
    image: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=0D8ABC&color=fff&size=256",
    quote: "M CAD Solutions transformed my career. The hands-on training in CATIA V5 and real industry projects gave me the confidence to excel in my role."
  },
  {
    name: "Priya Deshmukh",
    role: "CAD Engineer",
    company: "Mahindra & Mahindra",
    batch: "2024",
    image: "https://ui-avatars.com/api/?name=Priya+Deshmukh&background=6C5CE7&color=fff&size=256",
    quote: "The placement support team was incredible. They helped me prepare for interviews and connected me with leading automotive companies."
  },
  {
    name: "Amit Patil",
    role: "Fixture Design Engineer",
    company: "Volkswagen India",
    batch: "2023",
    image: "https://ui-avatars.com/api/?name=Amit+Patil&background=00B894&color=fff&size=256",
    quote: "From zero CAD knowledge to landing my dream job in just 6 months. M CAD Solutions delivers on their promise."
  },
  {
    name: "Sneha Kulkarni",
    role: "Product Design Engineer",
    company: "Bosch India",
    batch: "2023",
    image: "https://ui-avatars.com/api/?name=Sneha+Kulkarni&background=E17055&color=fff&size=256",
    quote: "The faculty's industry experience and personalized mentorship made all the difference. Highly recommend M CAD Solutions!"
  }
];

  const placementProcess = [
    {
      step: "01",
      title: "Profile Building",
      description: "We help craft a professional resume and portfolio highlighting your CAD skills and project work",
      icon: FileText
    },
    {
      step: "02",
      title: "Skill Assessment",
      description: "Regular assessments ensure you're industry-ready with strong technical and soft skills",
      icon: CheckCircle2
    },
    {
      step: "03",
      title: "Interview Preparation",
      description: "Mock interviews, technical questions, and HR round preparation with industry experts",
      icon: Users
    },
    {
      step: "04",
      title: "Company Connect",
      description: "Direct connections with 150+ partner companies actively hiring CAD professionals",
      icon: Building2
    },
    {
      step: "05",
      title: "Placement Drive",
      description: "Exclusive campus drives and recruitment events with top automotive and manufacturing companies",
      icon: Briefcase
    },
    {
      step: "06",
      title: "Career Growth Support",
      description: "Post-placement support and guidance for career advancement and skill upgrades",
      icon: TrendingUp
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
                <p className="leading-[20px]">Placements & Success Stories</p>
              </div>
              
              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[44px] md:leading-[56px] lg:leading-[64px] tracking-[-1.2px] md:tracking-[-1.5px]" style={{ color: '#F4F7F9' }}>
                98% Placement Record
              </h1>
              
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                Join 300+ successful students who launched their careers in automotive design and manufacturing with our comprehensive placement support.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px] md:gap-[24px] mt-[16px]">
                <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[32px] md:text-[40px] leading-[1.2] tracking-[-1px]" style={{ color: '#F9A825' }}>
                      5000+
                    </div>
                    <div className="text-[13px] md:text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Students Placed
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[32px] md:text-[40px] leading-[1.2] tracking-[-1px]" style={{ color: '#F9A825' }}>
                      200+
                    </div>
                    <div className="text-[13px] md:text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Partner Companies
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px] col-span-2 md:col-span-1">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[8px]">
                    <div className="text-[32px] md:text-[40px] leading-[1.2] tracking-[-1px]" style={{ color: '#F9A825' }}>
                      98%
                    </div>
                    <div className="text-[13px] md:text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Placement Rate
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative max-w-[540px] w-full">
              <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1590650423710-ffa6e7f63440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjE2MDMxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Successful Placements"
                  className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partner Companies */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Our Network</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Our Student Placed In</p>
            </div>
            <p className="mt-[16px] text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] max-w-[720px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              We partner with 150+ leading companies in automotive, manufacturing, and product design sectors
            </p>
          </div>

          {/* Company Logos Grid */}
          <div className="backdrop-blur-md backdrop-filter box-border p-[32px] md:p-[48px] relative rounded-[16px] md:rounded-[24px]">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[24px]" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-[16px] md:gap-[20px]">
              {companyLogos.map((company, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm backdrop-filter bg-[rgba(255,255,255,0.05)] box-border p-[16px] md:p-[20px] relative rounded-[12px] hover:bg-[rgba(107,193,227,0.1)] transition-all duration-300"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex items-center justify-center h-[60px] md:h-[80px]">
                    <div className="text-center text-[12px] md:text-[13px] leading-[16px] md:leading-[18px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                      {company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Process */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Our Process</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Complete Placement Support</p>
            </div>
            <p className="mt-[16px] text-[15px] md:text-[16px] leading-[24px] md:leading-[28px] max-w-[720px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              Our comprehensive 6-step placement process ensures you're fully prepared for your dream job
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
            {placementProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div 
                  key={index}
                  className="backdrop-blur-md backdrop-filter box-border flex flex-col gap-[16px] md:gap-[20px] p-[24px] md:p-[32px] relative rounded-[16px] hover:border-[rgba(107,193,227,0.3)] transition-all duration-300"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  
                  <div className="flex items-center gap-[16px]">
                    <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[12px] p-[14px] flex items-center justify-center">
                      <Icon className="w-[24px] h-[24px]" style={{ color: '#6BC1E3' }} />
                    </div>
                    <div className="text-[40px] md:text-[48px] leading-[1] tracking-[-1px]" style={{ color: 'rgba(249, 168, 37, 0.3)' }}>
                      {process.step}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] md:text-[20px] tracking-[-0.5px] mb-[12px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[28px]">{process.title}</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[24px] text-[14px] md:text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{process.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Success Stories</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Meet Our Successful Students</p>
            </div>
          </div>

          {/* Featured Image - Students Sharing Success Stories */}
          <div className="mb-[48px] md:mb-[64px] rounded-[16px] md:rounded-[24px] overflow-hidden">
            <img 
              src={'/studentsection_success_stories.png'} 
              alt="Students sharing success stories at MCAD Solutions during Industry 4.0 training presentation" 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] md:gap-[32px]">
            {successStories.map((story, index) => (
              <div 
                key={index}
                className="backdrop-blur-md backdrop-filter box-border relative rounded-[16px] overflow-hidden hover:border-[rgba(107,193,227,0.3)] transition-all duration-300"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                
                <div className="flex flex-col sm:flex-row gap-[20px] md:gap-[24px] p-[24px] md:p-[32px]">
                  {/* Student Photo */}
                  <div className="relative shrink-0 w-full sm:w-[120px] md:w-[140px] h-[200px] sm:h-[140px] rounded-[12px] overflow-hidden bg-[rgba(255,255,255,0.05)]">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Student Info */}
                  <div className="flex-1 flex flex-col gap-[12px] md:gap-[16px]">
                    <div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] md:text-[22px] tracking-[-0.5px] mb-[8px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-[28px] md:leading-[32px]">{story.name}</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[15px] md:text-[16px] mb-[4px]" style={{ color: '#6BC1E3' }}>
                        <p className="leading-[24px]">{story.role}</p>
                      </div>
                      <div className="flex items-center gap-[8px]">
                        <Building2 className="w-[16px] h-[16px]" style={{ color: 'rgba(244, 247, 249, 0.5)' }} />
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                          <p className="leading-[20px]">{story.company} • Batch {story.batch}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[24px] text-[14px] md:text-[15px] italic" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                      <p>"{story.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1024px] mx-auto px-[16px] md:px-[32px]">
          <div className="backdrop-blur-md backdrop-filter box-border flex flex-col items-center gap-[24px] md:gap-[32px] p-[32px] md:p-[48px] relative rounded-[24px] text-center">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
            
            <Award className="w-[48px] md:w-[64px] h-[48px] md:h-[64px]" style={{ color: '#F9A825' }} />
            
            <div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px] mb-[16px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Start Your Success Story Today</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[15px] md:text-[16px] max-w-[640px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p>Join thousands of successful students who transformed their careers with MCAD Solutions. Get industry-ready skills and guaranteed placement support.</p>
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
                  <p className="leading-[24px] whitespace-pre">Enroll Now</p>
                </div>
              </button>
              
              <button 
                onClick={() => onNavigate?.('contact')}
                className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] md:px-[32px] py-[18px] md:py-[22px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] md:text-[16px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[24px] whitespace-pre">Talk to Counselor</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
