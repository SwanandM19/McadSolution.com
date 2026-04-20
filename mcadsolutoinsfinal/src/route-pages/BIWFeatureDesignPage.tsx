

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
interface biwFixtureDesignPageProps {
  onNavigate?: (page: string) => void;
}


export function BIWFeatureDesignPage({ onNavigate }: biwFixtureDesignPageProps) {
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
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section
        className="bg-repeat bg-top-left relative shrink-0 w-full py-16 md:py-[120px]"
        style={{ backgroundImage: `url('/domaincouses_biw_automotive_robotics_backimage.png')`, backgroundColor: '#092B38' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-[48px]">

            <p className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3" style={{ color: '#6BC1E3' }}>
              Domain-Specific Training
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-[48px] tracking-[-1.2px] leading-tight md:leading-[52px] mb-4" style={{ color: '#F4F7F9' }}>
              {courseDetails.title}
            </h1>

            <p className="text-base md:text-[18px] max-w-[768px] mx-auto mb-4 leading-[28px]" style={{ color: 'rgba(244,247,249,0.7)' }}>
              {courseDetails.subtitle}
            </p>

            <p className="text-base md:text-[18px] max-w-[768px] mx-auto mb-6 leading-[28px]" style={{ color: '#F4F7F9' }}>
              BIW FIXTURE DESIGN is Job-Oriented industrial Domain training on Live / Dummy Projects.
            </p>

            <div className="flex items-center justify-center gap-4 md:gap-[24px] flex-wrap">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      <polyline points="12 6 12 12 16 14" strokeWidth="2" />
                    </svg>
                  ),
                  label: 'DURATION 3 MONTHS'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" />
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" />
                    </svg>
                  ),
                  label: 'LEVEL BEGINNER,INTERMEDIATE,ADVANCED'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                      <circle cx="9" cy="7" r="4" strokeWidth="2" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                    </svg>
                  ),
                  label: '5 STUDENTS / BATCH'
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm md:text-[16px]" style={{ color: 'rgba(244,247,249,0.9)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Syllabus + Course Overview ────────────────────────────── */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-[32px]">
          
            <button
              className="relative rounded-[8px] px-5 py-3 flex items-center gap-2"
              style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}
            >
              <svg className="w-5 h-5" style={{ color: '#F4F7F9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[16px]" style={{ color: '#F4F7F9' }}>Download Syllabus</span>
            </button>
          </div>
          <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-[48px]" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <h2 className="text-2xl md:text-[36px] tracking-[-0.9px] leading-[44px] mb-6" style={{ color: '#F4F7F9' }}>About This Course</h2>
              <p className="text-[16px] leading-[28px] mb-5" style={{ color: 'rgba(244,247,249,0.8)' }}>{courseDetails.description}</p>
              <p className="text-[16px] leading-[28px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                By taking this course, you'll gain advanced skills in BIW Fixture Design, which will significantly enhance your job prospects. Upon successful completion, excellent employment opportunities in the automotive field as well as mechanical design will be assured.
              </p>
            </div>
          </div>
          <br />
          {/* Course Overview Card */}
            <div
            className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-8"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <h3 className="text-[22px] tracking-[-0.55px] leading-[30px] mb-6" style={{ color: '#F4F7F9' }}>Course Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
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
                  <div key={index} className="flex items-start gap-3">
                    <div className="relative shrink-0 size-5 mt-[2px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107,193,227,0.1)" />
                        <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[15px] leading-[22px]" style={{ color: 'rgba(244,247,249,0.8)' }}>{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Learn from Industry Expert ────────────────────────────── */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center mb-10 md:mb-[48px]">
            <p className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3" style={{ color: '#6BC1E3' }}>
              Expert Training
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[52px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              LEARN BIW FIXTURE DESIGN FROM THE{' '}
              <span style={{ color: '#F9A825' }}>Industry-Expert</span>
            </h2>
          </div>

          {/* Two-column layout: sidebar + main */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">

            {/* Left Sidebar */}
            <div className="space-y-6">

              {/* Video Preview */}
              <div
                className="backdrop-blur-md backdrop-filter relative rounded-[16px] overflow-hidden"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />

              </div>

              {/* Course Details Card */}
              <div
                className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="relative space-y-4">
                  {[
                    { label: 'Duration', value: '3 Months' },
                    { label: 'Lectures', value: '100 Lectures' },
                    { label: 'Skill Level', value: 'Beginner' },
                    { label: 'Students/Batch', value: '5 Students' },
                  ].map((row, i, arr) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between pb-4 ${i < arr.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                      <span className="text-[14px]" style={{ color: 'rgba(244,247,249,0.7)' }}>{row.label}</span>
                      <span className="text-[14px]" style={{ color: '#F4F7F9' }}>{row.value}</span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between">
                    <span className="text-[14px]" style={{ color: 'rgba(244,247,249,0.7)' }}>Certificate</span>
                    <span className="text-[14px]" style={{ color: '#F4F7F9' }}>Yes</span>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <button
                onClick={() => onNavigate?.('contact')}
                className="w-full relative rounded-[8px] px-8 py-[14px]"
                style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}
              >
                <span className="text-[16px]" style={{ color: '#F4F7F9' }}>Enroll in Course</span>
              </button>

              {/* Facility Image */}

            </div>

            {/* Right Content Area */}
            <div
              className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-[40px]"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">

                {/* Tabs */}
                <div className="flex gap-6 mb-8 border-b border-white/10">
                  {(['overview', 'instructor'] as const).map((tab) => (
                    <button key={tab} className="pb-3 relative" onClick={() => setActiveTab(tab)}>
                      <span
                        className="text-[16px] capitalize"
                        style={{ color: activeTab === tab ? '#F9A825' : 'rgba(244,247,249,0.6)' }}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </span>
                      {activeTab === tab && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }} />
                      )}
                    </button>
                  ))}
                </div>

                {/* ── Overview Tab ── */}
                {activeTab === 'overview' && (
                  <>
                    {/* Instructor Info */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 pb-8 border-b border-white/10">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107,193,227,0.2)' }}>
                        <img src={'/aboutus_ourlecturers_manojpotdar.png'} alt="Manoj Potdar" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[20px] tracking-[-0.5px] leading-[28px] mb-2" style={{ color: '#F4F7F9' }}>Manoj Potdar</p>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4" fill="#F9A825" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-[14px]" style={{ color: '#F9A825' }}>200+ 5 Star Reviews</span>
                        </div>
                        <p className="text-[14px] leading-[20px]" style={{ color: 'rgba(244,247,249,0.7)' }}>BIW Fixture Design Expert</p>
                      </div>
                    </div>

                    {/* About the Course */}
                    <div className="mb-8">
                      <h3 className="text-[24px] tracking-[-0.6px] leading-[32px] mb-4" style={{ color: '#F4F7F9' }}>About the Course</h3>
                      <p className="text-[15px] leading-[26px] mb-4" style={{ color: 'rgba(244,247,249,0.8)' }}>
                        This comprehensive BIW Fixture Design course is meticulously crafted to provide you with hands-on experience in automotive body engineering. You'll learn from industry experts with over 15 years of experience in the automotive sector.
                      </p>
                      <p className="text-[15px] leading-[26px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                        The course covers everything from basic concepts to advanced fixture design techniques, ensuring you're job-ready upon completion. With live project work and industry-standard tools, you'll gain practical skills that are directly applicable in professional environments.
                      </p>
                    </div>

                    {/* What You Will Get */}
                    <div className="rounded-[12px] p-6 mb-8" style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}>
                      <h4 className="text-[20px] tracking-[-0.5px] leading-[28px] mb-5" style={{ color: '#F4F7F9' }}>What you will get</h4>
                      <div className="space-y-3">
                        {[
                          'Thorough knowledge on fixture design fundamentals',
                          'Specialization in fixture design',
                          'Develops full confidence on fixture design, process design, gun selection, simulation',
                          'Techno commercial considerable growth of an industry',
                        ].map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="relative shrink-0 size-5 mt-[2px]">
                              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107,193,227,0.1)" />
                                <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <p className="text-[14px] leading-[22px]" style={{ color: 'rgba(244,247,249,0.8)' }}>{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { icon: 'book', text: 'Domain Knowledge' },
                        { icon: 'devices', text: 'Access on desktop & mobile' },
                        { icon: 'support', text: 'Lifetime Support' },
                        { icon: 'briefcase', text: 'Placement Support' },
                        { icon: 'certificate', text: 'Certificate of Completion' }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-[8px] p-3" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                          <div className="w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(107,193,227,0.15)' }}>
                            {feature.icon === 'book' && (
                              <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                            {feature.icon === 'devices' && (
                              <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2" />
                                <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round" />
                                <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                            )}
                            {feature.icon === 'support' && (
                              <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                            )}
                            {feature.icon === 'briefcase' && (
                              <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2" />
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2" />
                              </svg>
                            )}
                            {feature.icon === 'certificate' && (
                              <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" />
                                <polyline points="14 2 14 8 20 8" strokeWidth="2" />
                                <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2" />
                              </svg>
                            )}
                          </div>
                          <span className="text-[13px]" style={{ color: 'rgba(244,247,249,0.9)' }}>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ── Instructor Tab ── */}
                {activeTab === 'instructor' && (
                  <>
                    <div className="mb-6">
                      <div className="inline-block rounded-[6px] px-4 py-2" style={{ backgroundColor: 'rgba(249,168,37,0.15)' }}>
                        <span className="text-[12px] tracking-[0.6px] uppercase" style={{ color: '#F9A825' }}>INDUSTRY EXPERT</span>
                      </div>
                    </div>

                    <p className="text-lg sm:text-[22px] leading-[32px] tracking-[-0.55px] mb-8" style={{ color: '#F4F7F9' }}>
                      "This course is designed to provide hands-on experience to professionals working in the Domain of Automobile"
                    </p>

                    {/* Instructor Profile */}
                    <div className="flex flex-col sm:flex-row items-start gap-5 mb-8 pb-8 border-b border-white/10">
                      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107,193,227,0.2)' }}>
                        <img src={imgInstructor} alt="Manoj Potdar" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[24px] tracking-[-0.6px] leading-[32px] mb-2" style={{ color: '#F4F7F9' }}>Manoj Potdar</p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-[18px] h-[18px]" fill="#F9A825" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                              </svg>
                            ))}
                          </div>
                          <span className="text-[14px]" style={{ color: '#F9A825' }}>200+ 5 Star Reviews</span>
                        </div>
                        <p className="text-[15px] leading-[22px] mb-3" style={{ color: 'rgba(244,247,249,0.7)' }}>BIW Fixture Design Expert • 15+ Years Experience</p>
                        <p className="text-[14px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                          Manoj Potdar is a seasoned professional with over 15 years of experience in the automotive industry, specializing in BIW fixture design and automotive body engineering. He has worked with leading automotive manufacturers and has trained hundreds of professionals in advanced CAD techniques.
                        </p>
                      </div>
                    </div>

                    {/* What You'll Learn */}
                    <div className="mb-8">
                      <h4 className="text-[20px] tracking-[-0.5px] leading-[28px] mb-6" style={{ color: '#F4F7F9' }}>What You'll Learn from the Instructor</h4>
                      <div className="space-y-4">
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
                          <div key={index} className="flex items-start gap-3">
                            <div className="relative shrink-0 size-5 mt-[2px]">
                              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107,193,227,0.1)" />
                                <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <p className="text-[15px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.8)' }}>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="rounded-[12px] p-6" style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}>
                      <div className="grid grid-cols-2 gap-5">
                        {[
                          { num: '15+', label: 'Years of Industry Experience' },
                          { num: '500+', label: 'Students Trained Successfully' },
                          { num: '50+', label: 'Industry Projects Completed' },
                          { num: '100%', label: 'Student Satisfaction Rate' },
                        ].map((stat, i) => (
                          <div key={i}>
                            <p className="text-[28px] tracking-[-0.7px] leading-[36px] mb-2" style={{ color: '#F9A825' }}>{stat.num}</p>
                            <p className="text-[14px] leading-[20px]" style={{ color: 'rgba(244,247,249,0.8)' }}>{stat.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Course Syllabus (Accordion) ───────────────────────────── */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10 md:mb-[48px]">
            <p className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3" style={{ color: '#6BC1E3' }}>Comprehensive Curriculum</p>
            <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[52px] mb-4" style={{ color: '#F4F7F9' }}>COURSE SYLLABUS</h2>
            <p className="text-[16px] leading-[28px] max-w-[768px] mx-auto" style={{ color: 'rgba(244,247,249,0.7)' }}>
              Our curriculum is carefully designed to align with current industry requirements, ensuring you gain practical, job-ready skills.
            </p>
          </div>

          {/* Quote Box */}
          <div
            className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-8 mb-10 md:mb-[48px] max-w-[900px] mx-auto"
            style={{ backgroundColor: 'rgba(249,168,37,0.1)' }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(249,168,37,0.3)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative flex items-start gap-4">
              <svg className="w-8 h-8 shrink-0 mt-1" style={{ color: '#F9A825' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
              <div>
                <p className="text-[16px] md:text-[18px] leading-[28px] mb-2" style={{ color: '#F4F7F9' }}>
                  M CAD Solutions has designed this course based on the current industry requirements and standards, preparing you to meet the demands of the automotive sector.
                </p>
                <p className="text-[14px] leading-[22px]" style={{ color: 'rgba(244,247,249,0.7)' }}>Industry-Aligned Learning Path</p>
              </div>
            </div>
          </div>

          {/* Accordion Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Left Column */}
            <div
              className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-8"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      value: 'item-1', title: 'Introduction to BIW-Fixture',
                      items: ['Overview of BIW manufacturing process', 'Understanding fixture components and terminology', 'Types of fixtures in automotive assembly', 'Industry standards and best practices']
                    },
                    {
                      value: 'item-2', title: 'Data Management',
                      items: ['CAD data import and preparation', 'File organization and version control', 'Working with product geometry', 'Data validation techniques']
                    },
                    {
                      value: 'item-3', title: 'BIW-Fixture Basics',
                      items: ['Fixture design principles and concepts', 'Locating and clamping strategies', 'Fixture layout and planning', 'Standard components selection']
                    },
                    {
                      value: 'item-4', title: '2D-Detailing Basics',
                      items: ['Engineering drawing fundamentals', 'Dimensioning and tolerancing (GD&T)', 'Creating manufacturing drawings', 'Bill of materials preparation']
                    },
                    {
                      value: 'item-5', title: 'Pre-Design Processes',
                      items: ['Product analysis and feasibility study', 'Fixture concept development', 'Design for manufacturing considerations', 'Risk assessment and mitigation']
                    },
                    {
                      value: 'item-5a', title: 'Sensors & Nomenclature',
                      items: ['Type of sensor and nomenclature', 'Use of Sensor in Fixture']
                    },
                    {
                      value: 'item-5b', title: 'Simulation',
                      items: ['Overview of simulation', 'Video for zone', 'Different types of Guns used', 'Weld Gun selection criterion', 'Different welding types with examples like spot welding/MIG welding/stud welding/riveting/hemming/framing', 'Gun consideration for operator', 'Use of gun guide example', 'Human ergonomics', 'Clearance chart', 'Modifying units']
                    },
                    {
                      value: 'item-5c', title: '3D Finish',
                      items: ['Concept of 3D finish', '3D finish of Rest and clamp Units', '3D finish of Pin unit', '3D finish of Base Unit', '3D finish of Complex Units', '0,0 concept for mylar', 'Concept of MACRO3', 'Renaming Without Macros', 'Renaming using Macros', 'Tree reordering, hardware add', 'External references remove', 'Parameter and use and filling']
                    },
                  ].map((section) => (
                    <AccordionItem key={section.value} value={section.value} className="border-none">
                      <AccordionTrigger
                        className="hover:no-underline py-4 px-5 rounded-[8px] transition-colors"
                        style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#F9A825' }} />
                          <span className="text-[16px] text-left" style={{ color: '#F4F7F9' }}>{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pt-3 pb-1">
                        <ul className="space-y-2 ml-[18px]">
                          {section.items.map((li, idx) => (
                            <li key={idx} className="text-[14px] leading-[22px]" style={{ color: 'rgba(244,247,249,0.8)' }}>• {li}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-8"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      value: 'item-6', title: 'Project-01: Simple Fixture Design',
                      items: ['Hands-on fixture design project', 'Component modeling and assembly', 'Design validation and verification', 'Documentation and presentation']
                    },
                    {
                      value: 'item-7', title: 'Project-02: Complex Fixture Assembly',
                      items: ['Advanced fixture design techniques', 'Multi-part assembly integration', 'Welding gun clearance analysis', 'Ergonomics and accessibility']
                    },
                    {
                      value: 'item-8', title: 'Project 4',
                      items: ['Pin on Clamp concept', 'Pin on Clamp unit', 'Stopper arrangement for Pin On clamp', 'Completing the remaining units', 'Sensor Units']
                    },
                    {
                      value: 'item-9', title: 'Project 05',
                      items: ['Pivot point setting concept', 'Pin on Clamp model for single angle with different directions', '3D finish of pin on clamp', 'SMC Hinge Cyl. Calculation', 'Suction cups use', 'Simple rest and clamp using CKG cyl', 'Stoper for CKG, Rough Guide', 'Power copy and its use for 3D finish', 'Contextual Method']
                    },
                    {
                      value: 'item-10', title: 'German Standards',
                      items: ['German standards Design Method', 'German standards simple rest and clamp', 'German standards- PIN UNIT', 'German standards- weldment', 'German standards- L block and other parts', '3d finish of German Standards', '3d finish – simple rest and clamp', '3d finish – Pin unit', 'German standards Renaming', '2D using German standards']
                    },
                  ].map((section) => (
                    <AccordionItem key={section.value} value={section.value} className="border-none">
                      <AccordionTrigger
                        className="hover:no-underline py-4 px-5 rounded-[8px] transition-colors"
                        style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#F9A825' }} />
                          <span className="text-[16px] text-left" style={{ color: '#F4F7F9' }}>{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pt-3 pb-1">
                        <ul className="space-y-2 ml-[18px]">
                          {section.items.map((li, idx) => (
                            <li key={idx} className="text-[14px] leading-[22px]" style={{ color: 'rgba(244,247,249,0.8)' }}>• {li}</li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Curriculum Details ────────────────────────────────────── */}
     



      {/* ── Course Modules ────────────────────────────────────────── */}
     
      {/* ── Learning Outcomes & Career ────────────────────────────── */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Learning Outcomes */}
            <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-[40px]" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <h3 className="text-2xl md:text-[28px] tracking-[-0.7px] leading-[36px] mb-8" style={{ color: '#F4F7F9' }}>Learning Outcomes</h3>
                <div className="space-y-4">
                  {learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="relative shrink-0 size-5 mt-[2px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                          <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107,193,227,0.1)" />
                          <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-[14px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.8)' }}>{outcome}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-[40px]" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <h3 className="text-2xl md:text-[28px] tracking-[-0.7px] leading-[36px] mb-8" style={{ color: '#F4F7F9' }}>Career Opportunities</h3>
                <div className="space-y-3">
                  {careerOpportunities.map((career, index) => (
                    <div key={index} className="rounded-[8px] p-4" style={{ backgroundColor: 'rgba(107,193,227,0.1)' }}>
                      <div className="flex items-center gap-3">
                        <div className="relative shrink-0 size-6">
                          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
                            <path d="M20 7H4C2.9 7 2 7.9 2 9V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V9C22 7.9 21.1 7 20 7Z" stroke="#6BC1E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 7V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V7" stroke="#6BC1E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <p className="text-[15px] leading-[24px]" style={{ color: '#F4F7F9' }}>{career}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ───────────────────────────────────────────── */}
      {/* <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-[48px] text-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              {imgVideo1 && (
                <div className="mb-8 rounded-[12px] overflow-hidden max-w-[800px] mx-auto">
                  <img
                    src={imgVideo1}
                    alt="BIW Fixture Design Course"
                    className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              )}
              <h2 className="text-2xl md:text-[36px] tracking-[-0.9px] leading-[44px] mb-4" style={{ color: '#F4F7F9' }}>
                Ready to Start Your Journey?
              </h2>
              <p className="text-[16px] leading-[28px] max-w-[600px] mx-auto mb-8" style={{ color: 'rgba(244,247,249,0.7)' }}>
                Join our comprehensive BIW Fixture Design course and take the first step towards a successful career in automotive engineering.
              </p>
              <button
                className="relative rounded-[9999px] px-8 py-3"
                style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}
              >
                <p className="text-[16px] leading-[24px]" style={{ color: '#F4F7F9' }}>Enroll Now</p>
              </button>
            </div>
          </div>
        </div>
      </section> */}
      {/* SEPARATOR - Visual divider between content and footer */}
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
