const image_1ef73a3b709e9f172327a4ad4477224c66bb7b8b = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import svgPaths from "../imports/svg-9op1xbyva3";
const imgSection = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgVideo1 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgVideo2 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgVideo3 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_50df78cf249e7e1fe6c20c29a0164d1e171ce1ec = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { AnimatedSection } from "../components/AnimatedSection";

export function DomainCoursesPage() {
  const domainCourses = [
    {
      id: 'biw-fixture',
      title: 'BIW FIXTURE DESIGN',
      description: 'By taking this course, you\'ll gain advanced skills in BIW Fixture Design, which will significantly enhance your job prospects. Upon successful completion, excellent employment opportunities in the automotive field as well as mechanical design will be assured.',
      modules: ['Body in White (BIW)', 'Chassis Design', 'Interior/Exterior Trim', 'Powertrain Components'],
      duration: '3 Months',
      lectures: '100 Lectures',
      tools: 'CATIA V5, NX CAD',
      image: imgVideo1
    },
    {
      id: 'interior-plastic',
      title: 'Automotive Interior Plastic Trims',
      description: 'This course offers comprehensive training on Automotive Interior Plastic Trims, incorporating an industry-oriented approach to prepare you for a promising career as a mechanical design engineer in automotive industry.',
      modules: ['Bend Design', 'Forming Operations', 'Die Design', 'Tolerance Analysis'],
      duration: '3 Months',
      lectures: '100 Lectures',
      tools: 'SOLIDWORKS, CATIA V5',
      image: imgVideo2
    },
    {
      id: 'robotics',
      title: 'ROBOTICS SIMULATION',
      description: 'We specialize in corporate training for robotic simulation. Our team of highly skilled trainers brings extensive experience & practical expertise in this field. We offer on-site corporate training sessions conducted at organization\'s locations, ensuring convenience & accessibility for your employees. With our well-experienced trainers, we guarantee to deliver the best knowledge & skills.',
      modules: ['Mold Design', 'Draft Analysis', 'Plastic Components', 'DFM Principles'],
      duration: '2 Months',
      lectures: '50 Lectures',
      tools: 'CREO, NX CAD',
      image: imgVideo3
    }
  ];

  return (
    <>
      {/* Hero Section */}
<section
  className="relative w-full min-h-[500px] overflow-hidden"
  style={{
    background:
      'linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)',
  }}
>
  

  {/* Content Container */}
  <AnimatedSection className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 px-[32px] py-[60px]">
    
    {/* Left Text Column */}
    <div className="flex-1 flex flex-col gap-4 text-left text-white">
      <h5 className="text-[#6BC1E3] uppercase text-lg tracking-[0.7px] font-['Geist:Regular',sans-serif]">
        Specialized Training
      </h5>

      <h1 className="text-[44px] leading-[54px] font-['Geist:Regular',sans-serif] font-normal tracking-[-1.2px]">
        Domain-Specific Courses
      </h1>

      <p className="text-[18px] leading-[28px] text-gray-300 max-w-[520px]">
        Industry-focused domain training to specialize in your chosen field with real-world applications and project experience.
      </p>
    </div>

    {/* Right Image Card */}
    <div className="flex-1 relative max-w-[480px] w-full">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
        <img
          src={image_1ef73a3b709e9f172327a4ad4477224c66bb7b8b}
          alt="CAD Training Preview"
          className="w-full h-[380px] object-cover"
        />
      </div>
    </div>
  </AnimatedSection>
</section>

      {/* Introduction Section */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <AnimatedSection className="max-w-[1280px] mx-auto px-[32px]">
          <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[48px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            
            <div className="relative">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[24px] text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[44px]">Learn Practical project Oriented Domain-Focused Mechanical Engineering Courses for Career Success</p>
              </div>

              <div className="space-y-[20px]">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                  <p>Elevate your career prospects with our job-oriented domain courses in mechanical engineering, brought to you by M CAD Solution. Our curriculum is meticulously designed to equip you with the practical skills and knowledge required to excel in the competitive landscape of mechanical engineering.</p>
                </div>

                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                  <p>Our courses are tailored to address real-world industry demands, ensuring that you're well-prepared to tackle challenges and contribute effectively. At M CAD Solution, We recognize the importance of creating a mix of complexity and variety in the learning journey. Our approach combines concise theory with hands-on practice, creating a comprehensive learning journey that defies predictability.</p>
                </div>

                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                  <p>With a focus on job-readiness, our mechanical engineering courses delve into the intricacies of the field, empowering you to seamlessly transition into professional roles. Our experienced instructors guide you through practical applications and industry-relevant projects, honing your expertise and enabling you to stand out in a dynamic job market.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Courses Grid */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <AnimatedSection className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {domainCourses.map((course) => (
              <div key={course.id} className="backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.4)] h-full relative rounded-[12px]">
                <div className="h-full overflow-clip relative rounded-[inherit] p-[28px]">
                  {course.image && (
                    <div className="mb-[20px] rounded-[8px] overflow-hidden relative group cursor-pointer">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-[180px] object-cover"
                      />
                      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center group-hover:bg-[rgba(0,0,0,0.6)] transition-all">
                        <div className="w-[48px] h-[48px] rounded-full bg-[rgba(107,193,227,0.9)] flex items-center justify-center">
                          <svg className="w-[20px] h-[20px] ml-[2px]" fill="#F4F7F9" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-[16px]">
                    <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
                      <div className="relative shrink-0 size-[24px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <path d={svgPaths.p25fc4100} stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                            <path d={svgPaths.p3e012060} stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <div className="border rounded-[6px] px-[12px] py-[4px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)', borderColor: 'rgba(107, 193, 227, 0.3)' }}>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px]" style={{ color: '#6BC1E3' }}>
                          <p className="leading-[16px]">{course.lectures}</p>
                        </div>
                      </div>
                      <div className="border rounded-[6px] px-[12px] py-[4px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)', borderColor: 'rgba(107, 193, 227, 0.3)' }}>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px]" style={{ color: '#6BC1E3' }}>
                          <p className="leading-[16px]">{course.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start mb-[12px]">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[32px]">{course.title}</p>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start mb-[20px]">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{course.description}</p>
                    </div>
                  </div>

                  <div className="mb-[20px]">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px] uppercase mb-[12px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[16px]">Key Modules</p>
                    </div>
                    <div className="grid grid-cols-2 gap-[8px]">
                      {course.modules.map((module, index) => (
                        <div key={index} className="content-stretch flex gap-[6px] items-start relative shrink-0">
                          <div className="relative shrink-0 size-[16px] mt-[2px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                              <g>
                                <path d={svgPaths.p39be50} stroke="var(--stroke-0, #5EEAD4)" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                            </svg>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[13px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                            <p>{module}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[8px] p-[12px] mb-[20px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.1)' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px] uppercase" style={{ color: 'rgba(244, 247, 249, 0.6)' }}>
                        <p className="leading-[16px]">Tools Covered</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-[20px]">{course.tools}</p>
                      </div>
                    </div>
                  </div>

                  <button className="relative rounded-[9999px] w-full" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative w-full">
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] text-center" style={{ color: '#F4F7F9' }}>
                          <p className="leading-[20px]">Learn More</p>
                        </div>
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g>
                              <path d="M3.33333 8H12.6667" stroke="#F4F7F9" strokeLinecap="round" strokeLinejoin="round" />
                              <path d={svgPaths.p1d405500} stroke="#F4F7F9" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}