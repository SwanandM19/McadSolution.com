import { useState } from 'react';
import svgPaths from "../imports/svg-9op1xbyva3";
const imgSection = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgVideo1 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgInstructor = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { AnimatedSection } from "../components/AnimatedSection";

export function BIWFeatureDesignPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'instructor'>('overview');
  const courseDetails = {
    title: 'BIW FIXTURE DESIGN',
    subtitle: 'Advanced Automotive Body in White Engineering',
    description: 'Master the art of BIW fixture design with comprehensive training in automotive body engineering, fixture development, and advanced CAD techniques.',
    duration: '3 Months',
    lectures: '100 Lectures',
    tools: 'CATIA V5, NX CAD',
  };

  const courseModules = [
    {
      title: 'Body in White (BIW) Fundamentals',
      topics: [
        'Introduction to BIW structures',
        'Material selection and properties',
        'Manufacturing processes overview',
        'Quality standards and specifications'
      ]
    },
    {
      title: 'Chassis Design',
      topics: [
        'Frame and chassis architecture',
        'Structural analysis and optimization',
        'Load path determination',
        'Crash safety considerations'
      ]
    },
    {
      title: 'Interior/Exterior Trim',
      topics: [
        'Trim component design',
        'Assembly and integration',
        'Surface quality requirements',
        'Cost optimization techniques'
      ]
    },
    {
      title: 'Powertrain Components',
      topics: [
        'Engine mount design',
        'Transmission integration',
        'Exhaust system routing',
        'Vibration and NVH analysis'
      ]
    }
  ];

  const learningOutcomes = [
    'Design complex BIW fixtures using industry-standard CAD tools',
    'Understand automotive manufacturing processes and constraints',
    'Apply structural analysis techniques for validation',
    'Develop production-ready engineering drawings',
    'Work with cross-functional teams in automotive projects',
    'Implement design for manufacturing (DFM) principles'
  ];

  const careerOpportunities = [
    'BIW Design Engineer',
    'Fixture Design Specialist',
    'Automotive CAD Engineer',
    'Manufacturing Engineer',
    'Product Development Engineer',
    'Quality Assurance Engineer'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-repeat bg-size-[1920px_1076px,auto] bg-top-left relative shrink-0 w-full py-[120px]" style={{ backgroundImage: `url('${imgSection}')`, backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] text-nowrap tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px] whitespace-pre">Domain-Specific Training</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[16px] text-[48px] tracking-[-1.2px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[52px]">{courseDetails.title}</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] max-w-[768px] mx-auto mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              <p className="leading-[28px]">{courseDetails.subtitle}</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] max-w-[768px] mx-auto mb-[24px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[28px]">BIW FIXTURE DESIGN is Job-Oriented industrial Domain training on Live / Dummy Projects.</p>
            </div>
            <div className="flex items-center justify-center gap-[24px] flex-wrap">
              <div className="flex items-center gap-[8px]">
                <svg className="w-[20px] h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
                </svg>
                <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>DURATION 3 MONTHS</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <svg className="w-[20px] h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
                </svg>
                <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>LEVEL BEGINNER</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <svg className="w-[20px] h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
                </svg>
                <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>5 STUDENTS / BATCH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus and Course Overview */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          {/* Syllabus Header */}
          <div className="flex items-center justify-between mb-[32px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[44px]">Syllabus</p>
            </div>
            <button className="relative rounded-[8px] px-[24px] py-[12px] flex items-center gap-[8px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
              <svg className="w-[20px] h-[20px]" style={{ color: '#F4F7F9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Download Syllabus</span>
            </button>
          </div>

          {/* Course Overview Content */}
          <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[48px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[32px] text-[28px] tracking-[-0.7px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[36px]">Course Overview</p>
              </div>
              
              <div className="grid grid-cols-2 gap-x-[48px] gap-y-[20px]">
                {[
                  'Introduction To Automobile Industry',
                  'Introduction To BIW FIXTURE',
                  'Introduction to BIW',
                  'Understanding Of Automobile Underbody',
                  'Exhaust System & Its Types',
                  'FUEL TANK',
                  'BIW Mounting Bracket Design',
                  'Fuel Line Routing',
                  'BIW Clips & Clamps',
                  'Miscellaneous Brackets'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-[12px]">
                    <div className="relative shrink-0 size-[20px] mt-[2px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                          <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
                          <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                      <p>{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn from Industry Expert */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          {/* Section Header */}
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Expert Training</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[52px] text-[40px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p>LEARN BIW FIXTURE DESIGN FROM THE <span style={{ color: '#F9A825' }}>Industry-Expert</span></p>
            </div>
          </div>

          <div className="grid grid-cols-[380px_1fr] gap-[32px]">
            {/* Left Sidebar */}
            <div className="space-y-[24px]">
              {/* Video Preview */}
              <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                <div className="relative aspect-video">
                  <img 
                    src={imgVideo1} 
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249, 168, 37, 0.9)' }}>
                      <svg className="w-[24px] h-[24px] ml-[4px]" fill="#F4F7F9" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Details Card */}
              <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="relative space-y-[16px]">
                  <div className="flex items-center justify-between pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Duration</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>3 Months</span>
                  </div>
                  <div className="flex items-center justify-between pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Lectures</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>100 Lectures</span>
                  </div>
                  <div className="flex items-center justify-between pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Skill Level</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>Beginner</span>
                  </div>
                  <div className="flex items-center justify-between pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Students/Batch</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>5 Students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Certificate</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>Yes</span>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <button className="w-full relative rounded-[8px] px-[32px] py-[14px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
                <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Enroll in Course</span>
              </button>

              {/* Facility Image */}
              <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1754878206374-f78eac63ff29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFpbmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2MTMxMjg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Training Facility"
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>

            {/* Right Content Area */}
            <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[40px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                {/* Tabs */}
                <div className="flex gap-[24px] mb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <button className="pb-[12px] relative" onClick={() => setActiveTab('overview')}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: activeTab === 'overview' ? '#F9A825' : 'rgba(244, 247, 249, 0.6)' }}>Overview</span>
                    {activeTab === 'overview' && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>}
                  </button>
                  <button className="pb-[12px] relative" onClick={() => setActiveTab('instructor')}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: activeTab === 'instructor' ? '#F9A825' : 'rgba(244, 247, 249, 0.6)' }}>Instructor</span>
                    {activeTab === 'instructor' && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>}
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <>
                    {/* Instructor Info */}
                    <div className="flex items-start gap-[16px] mb-[32px] pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
                        <img 
                          src={imgInstructor}
                          alt="Manoj Potdar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                          <p className="leading-[28px]">Manoj Potdar</p>
                        </div>
                        <div className="flex items-center gap-[8px] mb-[4px]">
                          <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-[16px] h-[16px]" fill="#F9A825" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F9A825' }}>200+ 5 Star Reviews</span>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                          <p>BIW Fixture Design Expert</p>
                        </div>
                      </div>
                    </div>

                    {/* Course Description */}
                    <div className="mb-[32px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[16px] text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-[32px]">About the Course</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[15px] mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>This comprehensive BIW Fixture Design course is meticulously crafted to provide you with hands-on experience in automotive body engineering. You'll learn from industry experts with over 15 years of experience in the automotive sector.</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>The course covers everything from basic concepts to advanced fixture design techniques, ensuring you're job-ready upon completion. With live project work and industry-standard tools, you'll gain practical skills that are directly applicable in professional environments.</p>
                      </div>
                    </div>

                    {/* What You Will Get */}
                    <div className="rounded-[12px] p-[24px] mb-[32px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[20px] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-[28px]">What you will get</p>
                      </div>
                      <div className="space-y-[12px]">
                        {[
                          'Thorough knowledge on fixture design fundamentals',
                          'Specialization in fixture design',
                          'Develops full confidence on fixture design, process design, gun selection, simulation',
                          'Techno commercial considerable growth of an industry',
                        ].map((benefit, index) => (
                          <div key={index} className="flex items-start gap-[12px]">
                            <div className="relative shrink-0 size-[20px] mt-[2px]">
                              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
                                <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                              <p>{benefit}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Features */}
                    <div className="grid grid-cols-2 gap-[16px]">
                      {[
                        { icon: 'book', text: 'Domain Knowledge' },
                        { icon: 'devices', text: 'Access on desktop & mobile' },
                        { icon: 'support', text: 'Lifetime Support' },
                        { icon: 'briefcase', text: 'Placement Support' },
                        { icon: 'certificate', text: 'Certificate of Completion' }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-[12px] rounded-[8px] p-[12px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                      <div className="w-[32px] h-[32px] rounded-[6px] flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)' }}>
                        {feature.icon === 'book' && (
                          <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {feature.icon === 'devices' && (
                          <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
                            <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                        {feature.icon === 'support' && (
                          <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        )}
                        {feature.icon === 'briefcase' && (
                          <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2"/>
                          </svg>
                        )}
                        {feature.icon === 'certificate' && (
                          <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2"/>
                            <polyline points="14 2 14 8 20 8" strokeWidth="2"/>
                            <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2"/>
                          </svg>
                        )}
                      </div>
                      <span className="font-['Geist:Regular',_sans-serif] font-normal text-[13px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>
                  </>
                )}

                {activeTab === 'instructor' && (
                  <>
                    {/* Industry Expert Badge */}
                    <div className="mb-[24px]">
                      <div className="inline-block rounded-[6px] px-[16px] py-[8px]" style={{ backgroundColor: 'rgba(249, 168, 37, 0.15)' }}>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[12px] tracking-[0.6px] uppercase" style={{ color: '#F9A825' }}>INDUSTRY EXPERT</span>
                      </div>
                    </div>

                    {/* Main Quote */}
                    <div className="mb-[32px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[32px] text-[22px] tracking-[-0.55px]" style={{ color: '#F4F7F9' }}>
                        <p>"This course is designed to provide hands-on experience to professionals working in the Domain of Automobile"</p>
                      </div>
                    </div>

                    {/* Instructor Profile */}
                    <div className="flex items-start gap-[20px] mb-[32px] pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div className="w-[80px] h-[80px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
                        <img 
                          src={imgInstructor}
                          alt="Manoj Potdar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
                          <p className="leading-[32px]">Manoj Potdar</p>
                        </div>
                        <div className="flex items-center gap-[8px] mb-[8px]">
                          <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-[18px] h-[18px]" fill="#F9A825" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F9A825' }}>200+ 5 Star Reviews</span>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] text-[15px] mb-[12px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                          <p>BIW Fixture Design Expert • 15+ Years Experience</p>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                          <p>Manoj Potdar is a seasoned professional with over 15 years of experience in the automotive industry, specializing in BIW fixture design and automotive body engineering. He has worked with leading automotive manufacturers and has trained hundreds of professionals in advanced CAD techniques.</p>
                        </div>
                      </div>
                    </div>

                    {/* What You'll Learn from the Instructor */}
                    <div className="mb-[32px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[24px] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-[28px]">What You'll Learn from the Instructor</p>
                      </div>
                      <div className="space-y-[16px]">
                        {[
                          'Complete understanding of BIW components and their manufacturing processes',
                          'Advanced fixture design techniques used in top automotive companies',
                          'Industry-standard best practices for automotive body engineering',
                          'Hands-on experience with real-world automotive projects',
                          'Design optimization strategies for cost-effective solutions',
                          'Quality control and validation procedures in BIW manufacturing',
                          'Integration of fixtures with robotic welding systems',
                          'Troubleshooting common issues in fixture design and implementation'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-[12px]">
                            <div className="relative shrink-0 size-[20px] mt-[2px]">
                              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
                                <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                              <p>{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Instructor Expertise Highlights */}
                    <div className="rounded-[12px] p-[24px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="grid grid-cols-2 gap-[20px]">
                        <div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
                            <p className="leading-[36px]">15+</p>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                            <p>Years of Industry Experience</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
                            <p className="leading-[36px]">500+</p>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                            <p>Students Trained Successfully</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
                            <p className="leading-[36px]">50+</p>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                            <p>Industry Projects Completed</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
                            <p className="leading-[36px]">100%</p>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                            <p>Student Satisfaction Rate</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Syllabus */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          {/* Section Header */}
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Comprehensive Curriculum</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[52px] mb-[16px] text-[40px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p>COURSE SYLLABUS</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px] max-w-[768px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              <p>Our curriculum is carefully designed to align with current industry requirements, ensuring you gain practical, job-ready skills.</p>
            </div>
          </div>

          {/* Highlighted Quote Box */}
          <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[32px] mb-[48px] max-w-[900px] mx-auto" style={{ backgroundColor: 'rgba(249, 168, 37, 0.1)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(249,168,37,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative flex items-start gap-[16px]">
              <svg className="w-[32px] h-[32px] shrink-0 mt-[4px]" style={{ color: '#F9A825' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
              <div className="flex-1">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[18px] mb-[8px]" style={{ color: '#F4F7F9' }}>
                  <p>M CAD Solutions has designed this course based on the current industry requirements and standards, preparing you to meet the demands of the automotive sector.</p>
                </div>
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                  <p>Industry-Aligned Learning Path</p>
                </div>
              </div>
            </div>
          </div>

          {/* Syllabus Grid */}
          <div className="grid grid-cols-2 gap-[24px]">
            {/* Left Column */}
            <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[32px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <Accordion type="single" collapsible className="space-y-[16px]">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Introduction to BIW-Fixture</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Overview of BIW manufacturing process</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Understanding fixture components and terminology</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Types of fixtures in automotive assembly</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Industry standards and best practices</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Data Management</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• CAD data import and preparation</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• File organization and version control</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Working with product geometry</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Data validation techniques</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>BIW-Fixture Basics</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Fixture design principles and concepts</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Locating and clamping strategies</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Fixture layout and planning</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Standard components selection</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>2D-Detailing Basics</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Engineering drawing fundamentals</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Dimensioning and tolerancing (GD&T)</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Creating manufacturing drawings</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Bill of materials preparation</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Pre-Design Processes</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Product analysis and feasibility study</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Fixture concept development</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Design for manufacturing considerations</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Risk assessment and mitigation</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5a" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Sensors & Nomenclature</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Type of sensor and nomenclature</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Use of Sensor in Fixture</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5b" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Simulation</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Overview of simulation</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Video for zone</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Different types of Guns used</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Weld Gun selection criterion</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Different welding types with examples like spot welding/MIG welding/stud welding/riveting/hemming/framing</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Gun consideration for operator</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Use of gun guide example</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Human ergonomics</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Clearance chart</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Modifying units</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-5c" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>3D Finish</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <div className="mb-[12px]">
                        <p className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px] mb-[8px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>In this session, you will learn:</p>
                      </div>
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Concept of 3D finish</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 3D finish of Rest and clamp Units</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 3D finish of Pin unit</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 3D finish of Base Unit</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 3D finish of Complex Units</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 0,0 concept for mylar</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Concept of MACRO3</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Renaming Without Macros</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Renaming using Macros</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Tree reordering, hardware add</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• External references remove</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Parameter and use and filling</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Right Column */}
            <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[32px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <Accordion type="single" collapsible className="space-y-[16px]">
                  <AccordionItem value="item-6" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Project-01: Simple Fixture Design</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Hands-on fixture design project</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Component modeling and assembly</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Design validation and verification</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Documentation and presentation</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-7" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Project-02: Complex Fixture Assembly</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Advanced fixture design techniques</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Multi-part assembly integration</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Welding gun clearance analysis</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Ergonomics and accessibility</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-8" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Project 4</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Pin on Clamp concept</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Pin on Clamp unit</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Stopper arrangement for Pin On clamp</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Completing the remaining units</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Sensor Units</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-9" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Project 05</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Pivot point setting concept</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Pin on Clamp model for single angle with different directions</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 3D finish of pin on clamp</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• SMC Hinge Cyl. Calculation</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Suction cups use</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Simple rest and clamp using CKG cyl</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Stoper for CKG, Rough Guide</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Power copy and its use for 3D finish</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• Contextual Method</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-10" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>German Standards</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <ul className="space-y-[8px] ml-[18px]">
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• German standards Design Method</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• German standards simple rest and clamp</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• German standards- PIN UNIT</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• German standards- weldment</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• German standards- L block and other parts</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 3d finish of German Standards</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 3d finish – simple rest and clamp</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 3d finish – Pin unit</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• German standards Renaming</li>
                        <li className="font-['Geist:Regular',_sans-serif] font-normal text-[14px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>• 2D using German standards</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          {/* Section Header */}
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Detailed Learning Path</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[52px] text-[40px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p>CURRICULUM</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[32px]">
            {/* Left Column - Curriculum Topics */}
            <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[32px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <Accordion type="single" collapsible className="space-y-[16px]">
                  <AccordionItem value="curriculum-1" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Process Design</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>Understanding the complete BIW fixture design process from concept to implementation, including planning, analysis, and optimization strategies.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum-2" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>3D Concept</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>Master 3D modeling techniques for fixture components, assemblies, and complex geometries using industry-standard CAD tools and best practices.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum-3" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Simulation Overview</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>Learn simulation techniques for fixture validation, interference checking, robot path planning, and virtual commissioning in automotive assembly lines.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum-4" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Gun Study</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>Comprehensive study of welding gun types, selection criteria, clearance requirements, and integration with fixture design for optimal accessibility.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum-5" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>3D Finish</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>Advanced finishing techniques for fixture models including detailing, parametric design, automation using macros, and preparation for manufacturing.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="curriculum-6" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-[16px] px-[20px] rounded-[8px] transition-colors" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="w-[6px] h-[6px] rounded-full" style={{ backgroundColor: '#F9A825' }}></div>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>2D Manufacturing Drawings</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-[20px] pt-[12px] pb-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>Create professional manufacturing drawings with proper dimensioning, GD&T, annotations, and BOM preparation following industry standards.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Right Column - Skills & Video */}
            <div className="space-y-[24px]">
              {/* Skills Section */}
              <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[32px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="relative">
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[24px] text-[22px] tracking-[-0.55px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-[30px]">Skills You Will Get In M CAD Solutions?</p>
                  </div>
                  <div className="space-y-[14px]">
                    {[
                      'Complete BIW fixture design workflow',
                      'Advanced 3D modeling and assembly techniques',
                      'Simulation and validation processes',
                      'Welding gun integration and clearance analysis',
                      'Manufacturing drawing creation with GD&T',
                      'Industry-standard design methodologies',
                      'Project management and documentation',
                      'Real-world automotive project experience'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-start gap-[12px]">
                        <div className="relative shrink-0 size-[20px] mt-[2px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                            <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
                            <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                          <p>{skill}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <div className="grid grid-cols-3 gap-[24px] mb-[48px]">
            <div className="backdrop-blur-md backdrop-filter relative rounded-[12px] p-[32px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="relative">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[14px] uppercase" style={{ color: '#6BC1E3' }}>
                  <p className="leading-[20px]">Duration</p>
                </div>
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[32px] tracking-[-0.8px]" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[40px]">{courseDetails.duration}</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter relative rounded-[12px] p-[32px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="relative">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[14px] uppercase" style={{ color: '#6BC1E3' }}>
                  <p className="leading-[20px]">Lectures</p>
                </div>
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[32px] tracking-[-0.8px]" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[40px]">{courseDetails.lectures}</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter relative rounded-[12px] p-[32px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="relative">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[14px] uppercase" style={{ color: '#6BC1E3' }}>
                  <p className="leading-[20px]">Tools</p>
                </div>
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[28px]">{courseDetails.tools}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[48px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[24px] text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[44px]">About This Course</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                <p>{courseDetails.description}</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px] mt-[20px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                <p>By taking this course, you'll gain advanced skills in BIW Fixture Design, which will significantly enhance your job prospects. Upon successful completion, excellent employment opportunities in the automotive field as well as mechanical design will be assured.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] text-nowrap tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px] whitespace-pre">Curriculum</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[44px]">Course Modules</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[24px]">
            {courseModules.map((module, index) => (
              <div key={index} className="backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.4)] relative rounded-[12px]">
                <div className="overflow-clip relative rounded-[inherit] p-[32px]">
                  <div className="flex items-center gap-[16px] mb-[24px]">
                    <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)' }}>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px]" style={{ color: '#6BC1E3' }}>
                        <p className="leading-[28px]">{String(index + 1).padStart(2, '0')}</p>
                      </div>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] tracking-[-0.5px] flex-1" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[28px]">{module.title}</p>
                    </div>
                  </div>

                  <div className="space-y-[12px]">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="content-stretch flex gap-[8px] items-start relative shrink-0">
                        <div className="relative shrink-0 size-[16px] mt-[2px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g>
                              <path d={svgPaths.p39be50} stroke="var(--stroke-0, #5EEAD4)" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                          <p>{topic}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Outcomes & Career */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <div className="grid grid-cols-2 gap-[24px]">
            {/* Learning Outcomes */}
            <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[40px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[32px] text-[28px] tracking-[-0.7px]" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[36px]">Learning Outcomes</p>
                </div>
                <div className="space-y-[16px]">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="content-stretch flex gap-[12px] items-start relative shrink-0">
                      <div className="relative shrink-0 size-[20px] mt-[2px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g>
                            <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
                            <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] relative text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>{outcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[40px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[32px] text-[28px] tracking-[-0.7px]" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[36px]">Career Opportunities</p>
                </div>
                <div className="space-y-[12px]">
                  {careerOpportunities.map((career, index) => (
                    <div key={index} className="rounded-[8px] p-[16px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.1)' }}>
                      <div className="flex items-center gap-[12px]">
                        <div className="relative shrink-0 size-[24px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                            <g>
                              <path d="M20 7H4C2.9 7 2 7.9 2 9V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V9C22 7.9 21.1 7 20 7Z" stroke="#6BC1E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M16 7V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7" stroke="#6BC1E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: '#F4F7F9' }}>
                          <p>{career}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[48px] text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              {imgVideo1 && (
                <div className="mb-[32px] rounded-[12px] overflow-hidden max-w-[800px] mx-auto">
                  <img 
                    src={imgVideo1} 
                    alt="BIW Fixture Design Course"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[16px] text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[44px]">Ready to Start Your Journey?</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px] max-w-[600px] mx-auto mb-[32px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p>Join our comprehensive BIW Fixture Design course and take the first step towards a successful career in automotive engineering.</p>
              </div>
              <button className="relative rounded-[9999px] px-[32px] py-[12px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px]" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[24px]">Enroll Now</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
