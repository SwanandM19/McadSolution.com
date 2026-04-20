'use client'
import Link from 'next/link';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
// import { AnimatedSection } from "../components/AnimatedSection";

export default function RoboticsSimulationPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'instructor'>('overview');

  const courseDetails = {
    title: 'ROBOTICS SIMULATION',
    subtitle: 'Master Robotic Automation & Virtual Commissioning',
    description: 'Master the art of robotics simulation with comprehensive training in industrial automation, offline programming, and virtual commissioning using industry-standard tools.',
    duration: '3 Months',
    lectures: '95 Lectures',
    tools: 'RoboDK, ROS2, Python',
  };

  const courseModules = [
    {
      title: 'Introduction to Robotics',
      topics: [
        'Robotics fundamentals and applications',
        'Robot kinematics and dynamics',
        'Types of industrial robots',
        'Safety standards and regulations'
      ]
    },
    {
      title: 'Robot Programming',
      topics: [
        'Offline programming basics',
        'Path planning and optimization',
        'Coordinate systems and frames',
        'Motion planning algorithms'
      ]
    },
    {
      title: 'Simulation Software',
      topics: [
        'RoboDK interface and workflow',
        'Virtual environment setup',
        'Robot cell layout design',
        'Tool and workpiece positioning'
      ]
    },
    {
      title: 'Industrial Applications',
      topics: [
        'Pick and place operations',
        'Welding and painting simulation',
        'Assembly line automation',
        'Material handling systems'
      ]
    }
  ];

  const learningOutcomes = [
    'Design and simulate complete robotic work cells',
    'Master offline programming techniques for industrial robots',
    'Perform virtual commissioning and validation',
    'Optimize cycle times and production efficiency',
    'Integrate PLCs and external systems',
    'Implement safety protocols and risk assessment'
  ];

  const careerOpportunities = [
    'Robotics Simulation Engineer',
    'Automation Engineer',
    'Offline Programmer',
    'Robotic Cell Designer',
    'Production Engineer',
    'Industry 4.0 Specialist'
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
              ROBOTICS SIMULATION is Job-Oriented industrial Domain training on Live / Dummy Projects.
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
                By taking this course, you'll gain advanced skills in Robotics Simulation, which will significantly enhance your job prospects. Upon successful completion, excellent employment opportunities in the automation field as well as robotics engineering will be assured.
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
                  'Complete robotics simulation workflow',
                  'Offline programming and path planning',
                  'Virtual commissioning techniques',
                  'Multi-robot coordination',
                  'Digital twin creation and validation',
                  'Industry-standard simulation software',
                  'Project management and documentation',
                  'Real-world automation project experience'
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
              LEARN ROBOTICS SIMULATION FROM THE{' '}
              <span style={{ color: '#F9A825' }}>Industry-Expert</span>
            </h2>
          </div>

          {/* Two-column layout: sidebar + main */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">

            {/* Left Sidebar */}
            <div className="space-y-6">

              {/* Course Details Card */}
              <div
                className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="relative space-y-4">
                  {[
                    { label: 'Duration', value: '3 Months' },
                    { label: 'Lectures', value: '95 Lectures' },
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
              <Link
                href="/contact"
                className="w-full block text-center relative rounded-[8px] px-8 py-[14px]"
                style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}
              >
                <span className="text-[16px]" style={{ color: '#F4F7F9' }}>Enroll in Course</span>
              </Link>
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
                          <span className="text-[14px]" style={{ color: '#F9A825' }}>220+ 5 Star Reviews</span>
                        </div>
                        <p className="text-[14px] leading-[20px]" style={{ color: 'rgba(244,247,249,0.7)' }}>Robotics Simulation Expert</p>
                      </div>
                    </div>

                    {/* About the Course */}
                    <div className="mb-8">
                      <h3 className="text-[24px] tracking-[-0.6px] leading-[32px] mb-4" style={{ color: '#F4F7F9' }}>About the Course</h3>
                      <p className="text-[15px] leading-[26px] mb-4" style={{ color: 'rgba(244,247,249,0.8)' }}>
                        This comprehensive course covers the complete robotics simulation workflow from concept to virtual commissioning. You'll learn industry-standard offline programming, path planning, and virtual validation techniques used in modern automated manufacturing.
                      </p>
                      <p className="text-[15px] leading-[26px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                        From simple pick-and-place operations to complex multi-robot cells, you'll gain hands-on experience with industry-leading simulation software and real-world automation projects used in automotive and manufacturing sectors.
                      </p>
                    </div>

                    {/* What You Will Get */}
                    <div className="rounded-[12px] p-6 mb-8" style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}>
                      <h4 className="text-[20px] tracking-[-0.5px] leading-[28px] mb-5" style={{ color: '#F4F7F9' }}>What you will get</h4>
                      <div className="space-y-3">
                        {[
                          'Industry-recognized robotics simulation certification',
                          'Hands-on experience with real automation projects',
                          'Portfolio of simulated robotic cells',
                          'Expert mentorship from automation professionals',
                          'Placement support in robotics and automation companies'
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
                      "This course bridges the gap between traditional robotics and Industry 4.0 automation through simulation-first approach"
                    </p>

                    {/* Instructor Profile */}
                    <div className="flex flex-col sm:flex-row items-start gap-5 mb-8 pb-8 border-b border-white/10">
                      <div className="w-20 h-20 rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107,193,227,0.2)' }}>
                        <img src={'/aboutus_ourlecturers_manojpotdar.png'} alt="Manoj Potdar" className="w-full h-full object-cover" />
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
                          <span className="text-[14px]" style={{ color: '#F9A825' }}>220+ 5 Star Reviews</span>
                        </div>
                        <p className="text-[15px] leading-[22px] mb-3" style={{ color: 'rgba(244,247,249,0.7)' }}>Robotics Simulation Expert • 14+ Years Experience</p>
                        <p className="text-[14px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                          Manoj Potdar is a robotics automation expert with over 14 years of experience in industrial robotics simulation, offline programming, and virtual commissioning. He has implemented automation solutions for major automotive and manufacturing companies worldwide.
                        </p>
                      </div>
                    </div>

                    {/* What You'll Learn */}
                    <div className="mb-8">
                      <h4 className="text-[20px] tracking-[-0.5px] leading-[28px] mb-6" style={{ color: '#F4F7F9' }}>What You'll Learn from the Instructor</h4>
                      <div className="space-y-4">
                        {[
                          'Complete understanding of robotic cell design and simulation',
                          'Robot programming and offline programming (OLP) techniques',
                          'Path planning, collision detection, and reachability analysis',
                          'Virtual commissioning and process validation',
                          'PLC integration and I/O signal configuration',
                          'Cycle time optimization and productivity analysis',
                          'Safety assessment and risk mitigation strategies',
                          'Real-world automation project implementation'
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
                          { num: '14+', label: 'Years of Industry Experience' },
                          { num: '600+', label: 'Students Trained Successfully' },
                          { num: '60+', label: 'Industry Projects Completed' },
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
                  M CAD Solutions has designed this course based on the current industry requirements and standards, preparing you to meet the demands of the automation sector.
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
                      value: 'item-1', title: 'Introduction to Robotics & Automation',
                      items: ['Robotics fundamentals and applications', 'Robot kinematics and dynamics', 'Types of industrial robots', 'Safety standards and regulations']
                    },
                    {
                      value: 'item-2', title: 'Robot Programming & Path Planning',
                      items: ['Offline programming basics', 'Path planning and optimization', 'Coordinate systems and frames', 'Motion planning algorithms']
                    },
                    {
                      value: 'item-3', title: 'Simulation Software & Virtual Environment',
                      items: ['RoboDK interface and workflow', 'Virtual environment setup', 'Robot cell layout design', 'Tool and workpiece positioning']
                    },
                    {
                      value: 'item-4', title: 'Industrial Applications & Use Cases',
                      items: ['Pick and place operations', 'Welding and painting simulation', 'Assembly line automation', 'Material handling systems']
                    },
                    {
                      value: 'item-5', title: 'Advanced Robotics Concepts',
                      items: ['Multi-robot coordination', 'Sensor integration', 'Vision system simulation', 'Digital twin creation']
                    },
                    {
                      value: 'item-5a', title: 'PLC Integration & Control Systems',
                      items: ['PLC programming basics', 'I/O signal configuration', 'Communication protocols', 'Real-time data exchange']
                    },
                    {
                      value: 'item-5b', title: 'Virtual Commissioning',
                      items: ['Process validation techniques', 'Collision detection and avoidance', 'Cycle time optimization', 'Performance analysis']
                    },
                    {
                      value: 'item-5c', title: 'ROS2 & Open Source Robotics',
                      items: ['ROS2 architecture and concepts', 'Robot control with ROS2', 'Simulation integration', 'Custom robot development']
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
                      value: 'item-6', title: 'Project-01: Pick and Place Cell',
                      items: ['Design a complete pick and place robotic cell', 'Program robot path and sequences', 'Optimize cycle time', 'Generate simulation reports']
                    },
                    {
                      value: 'item-7', title: 'Project-02: Welding Cell Simulation',
                      items: ['Create a welding cell layout', 'Program welding paths', 'Collision detection and avoidance', 'Process validation']
                    },
                    {
                      value: 'item-8', title: 'Project-03: Multi-Robot Collaboration',
                      items: ['Design multi-robot workcell', 'Coordinate robot movements', 'Handshake and synchronization', 'Throughput optimization']
                    },
                    {
                      value: 'item-9', title: 'Project-04: Digital Twin Integration',
                      items: ['Create digital twin of production line', 'Connect simulation to hardware', 'Real-time data exchange', 'Performance monitoring']
                    },
                    {
                      value: 'item-10', title: 'Project-05: ROS2 Based Automation',
                      items: ['Setup ROS2 environment', 'Robot control programming', 'Sensor integration', 'Autonomous navigation']
                    },
                    {
                      value: 'item-11', title: 'Final Project: Complete Production Line',
                      items: ['End-to-end automation system design', 'Full simulation and validation', 'Technical documentation', 'Portfolio presentation']
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