// import { useState } from 'react';
// const imgSection = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
// const imgVideo1 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
// const imgInstructor = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "../components/ui/accordion";

// export function RoboticsSimulationPage() {
//   const [activeTab, setActiveTab] = useState<'overview' | 'instructor'>('overview');

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r bg-repeat bg-size-[1920px_1076px,auto] bg-top-left relative shrink-0 w-full py-[120px]" style={{ backgroundImage: `url('${imgSection}')`, backgroundColor: '#092B38' }}>
//         <div className="max-w-[1280px] mx-auto px-[32px]">
//           <div className="text-center mb-[48px]">
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] text-nowrap tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
//               <p className="leading-[20px] whitespace-pre">Domain-Specific Training</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[16px] text-[48px] tracking-[-1.2px]" style={{ color: '#F4F7F9' }}>
//               <p className="leading-[52px]">ROBOTICS SIMULATION</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] max-w-[768px] mx-auto mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//               <p className="leading-[28px]">Master Robotic Automation & Virtual Commissioning</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] max-w-[768px] mx-auto mb-[24px]" style={{ color: '#F4F7F9' }}>
//               <p className="leading-[28px]">ROBOTICS SIMULATION is Job-Oriented industrial Domain training on Live / Dummy Projects.</p>
//             </div>
//             <div className="flex items-center justify-center gap-[24px] flex-wrap">
//               <div className="flex items-center gap-[8px]">
//                 <svg className="w-[20px] h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <circle cx="12" cy="12" r="10" strokeWidth="2"/>
//                   <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
//                 </svg>
//                 <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>DURATION 3 MONTHS</span>
//               </div>
//               <div className="flex items-center gap-[8px]">
//                 <svg className="w-[20px] h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2"/>
//                   <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
//                 </svg>
//                 <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>LEVEL BEGINNER</span>
//               </div>
//               <div className="flex items-center gap-[8px]">
//                 <svg className="w-[20px] h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
//                   <circle cx="9" cy="7" r="4" strokeWidth="2"/>
//                   <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
//                 </svg>
//                 <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>5 STUDENTS / BATCH</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Syllabus and Course Overview */}
//       <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
//         <div className="max-w-[1280px] mx-auto px-[32px]">
//           {/* Syllabus Header */}
//           <div className="flex items-center justify-between mb-[32px]">
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
//               <p className="leading-[44px]">Syllabus</p>
//             </div>
//             <button className="relative rounded-[8px] px-[24px] py-[12px] flex items-center gap-[8px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
//               <svg className="w-[20px] h-[20px]" style={{ color: '#F4F7F9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Download Syllabus</span>
//             </button>
//           </div>

//           {/* Course Overview Content */}
//           <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[48px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//             <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
//             <div className="relative">
//               <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[32px] text-[28px] tracking-[-0.7px]" style={{ color: '#F4F7F9' }}>
//                 <p className="leading-[36px]">Course Objectives</p>
//               </div>
              
//               <div className="grid grid-cols-2 gap-x-[48px] gap-y-[20px]">
//                 {[
//                   'Digital Twin Creation',
//                   'Industrial Environment Simulation',
//                   'ROS2-Based Control Systems',
//                   'Autonomous Mobile Robots',
//                   'AI Integration for Automation',
//                   'Simulation-Hardware Connection',
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-start gap-[12px]">
//                     <div className="relative shrink-0 size-[20px] mt-[2px]">
//                       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
//                         <g>
//                           <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
//                           <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </g>
//                       </svg>
//                     </div>
//                     <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                       <p>{item}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Learn from Industry Expert */}
//       <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
//         <div className="max-w-[1280px] mx-auto px-[32px]">
//           {/* Section Header */}
//           <div className="text-center mb-[48px]">
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
//               <p className="leading-[20px]">Expert Training</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[52px] text-[40px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
//               <p>LEARN ROBOTICS SIMULATION FROM THE <span style={{ color: '#F9A825' }}>Industry-Expert</span></p>
//             </div>
//           </div>

//           <div className="grid grid-cols-[380px_1fr] gap-[32px]">
//             {/* Left Sidebar */}
//             <div className="space-y-[24px]">
//               {/* Video Preview */}
//               <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//                 <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
//                 <div className="relative aspect-video">
//                   <img 
//                     src={imgVideo1} 
//                     alt="Course Preview"
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249, 168, 37, 0.9)' }}>
//                       <svg className="w-[24px] h-[24px] ml-[4px]" fill="#F4F7F9" viewBox="0 0 24 24">
//                         <path d="M8 5v14l11-7z"/>
//                       </svg>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Course Details Card */}
//               <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//                 <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
//                 <div className="relative space-y-[16px]">
//                   <div className="flex items-center justify-between pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Duration</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>3 Months</span>
//                   </div>
//                   <div className="flex items-center justify-between pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Lectures</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>95 Lectures</span>
//                   </div>
//                   <div className="flex items-center justify-between pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Skill Level</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>Beginner</span>
//                   </div>
//                   <div className="flex items-center justify-between pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Students/Batch</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>5 Students</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Certificate</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>Yes</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Enroll Button */}
//               <button className="w-full relative rounded-[8px] px-[32px] py-[14px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
//                 <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: '#F4F7F9' }}>Enroll in Course</span>
//               </button>

//               {/* Facility Image */}
//               <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//                 <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
//                 <img 
//                   src="https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhcm0lMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MDk3ODUyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                   alt="Robotics Training Facility"
//                   className="w-full h-[200px] object-cover"
//                 />
//               </div>
//             </div>

//             {/* Right Content Area */}
//             <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-[40px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//               <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
//               <div className="relative">
//                 {/* Tabs */}
//                 <div className="flex gap-[24px] mb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                   <button className="pb-[12px] relative" onClick={() => setActiveTab('overview')}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: activeTab === 'overview' ? '#F9A825' : 'rgba(244, 247, 249, 0.6)' }}>Overview</span>
//                     {activeTab === 'overview' && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>}
//                   </button>
//                   <button className="pb-[12px] relative" onClick={() => setActiveTab('instructor')}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[16px]" style={{ color: activeTab === 'instructor' ? '#F9A825' : 'rgba(244, 247, 249, 0.6)' }}>Instructor</span>
//                     {activeTab === 'instructor' && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>}
//                   </button>
//                 </div>

//                 {/* Tab Content */}
//                 {activeTab === 'overview' && (
//                   <>
//                     {/* Instructor Info */}
//                     <div className="flex items-start gap-[16px] mb-[32px] pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                       <div className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
//                         <img 
//                           src={imgInstructor}
//                           alt="Expert Instructor"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
//                           <p className="leading-[28px]">Vikram Singh</p>
//                         </div>
//                         <div className="flex items-center gap-[8px] mb-[4px]">
//                           <div className="flex gap-[2px]">
//                             {[...Array(5)].map((_, i) => (
//                               <svg key={i} className="w-[16px] h-[16px]" fill="#F9A825" viewBox="0 0 24 24">
//                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                               </svg>
//                             ))}
//                           </div>
//                           <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F9A825' }}>220+ 5 Star Reviews</span>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//                           <p>Robotics Simulation Expert</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Course Description */}
//                     <div className="mb-[32px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[16px] text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
//                         <p className="leading-[32px]">About the Course</p>
//                       </div>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[15px] mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                         <p>This comprehensive course covers the complete robotics simulation workflow from concept to virtual commissioning. You'll learn industry-standard offline programming, path planning, and virtual validation techniques used in modern automated manufacturing.</p>
//                       </div>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                         <p>From simple pick-and-place operations to complex multi-robot cells, you'll gain hands-on experience with industry-leading simulation software and real-world automation projects used in automotive and manufacturing sectors.</p>
//                       </div>
//                     </div>

//                     {/* What You Will Get */}
//                     <div className="rounded-[12px] p-[24px] mb-[32px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[20px] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
//                         <p className="leading-[28px]">What you will get</p>
//                       </div>
//                       <div className="space-y-[12px]">
//                         {[
//                           'Industry-recognized robotics simulation certification',
//                           'Hands-on experience with real automation projects',
//                           'Portfolio of simulated robotic cells',
//                           'Expert mentorship from automation professionals',
//                           'Placement support in robotics and automation companies'
//                         ].map((benefit, index) => (
//                           <div key={index} className="flex items-start gap-[12px]">
//                             <div className="relative shrink-0 size-[20px] mt-[2px]">
//                               <svg className="block size-full" fill="none" viewBox="0 0 20 20">
//                                 <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
//                                 <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                               </svg>
//                             </div>
//                             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                               <p>{benefit}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Additional Features */}
//                     <div className="grid grid-cols-2 gap-[16px]">
//                       {[
//                         { icon: 'book', text: 'Domain Knowledge' },
//                         { icon: 'devices', text: 'Access on desktop & mobile' },
//                         { icon: 'support', text: 'Lifetime Support' },
//                         { icon: 'briefcase', text: 'Placement Support' },
//                         { icon: 'certificate', text: 'Certificate of Completion' }
//                       ].map((feature, index) => (
//                         <div key={index} className="flex items-center gap-[12px] rounded-[8px] p-[12px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
//                           <div className="w-[32px] h-[32px] rounded-[6px] flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)' }}>
//                             {feature.icon === 'book' && (
//                               <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                 <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                               </svg>
//                             )}
//                             {feature.icon === 'devices' && (
//                               <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
//                                 <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round"/>
//                                 <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round"/>
//                               </svg>
//                             )}
//                             {feature.icon === 'support' && (
//                               <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <circle cx="12" cy="12" r="10" strokeWidth="2"/>
//                                 <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                 <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/>
//                               </svg>
//                             )}
//                             {feature.icon === 'briefcase' && (
//                               <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
//                                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2"/>
//                               </svg>
//                             )}
//                             {feature.icon === 'certificate' && (
//                               <svg className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2"/>
//                                 <polyline points="14 2 14 8 20 8" strokeWidth="2"/>
//                                 <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2"/>
//                               </svg>
//                             )}
//                           </div>
//                           <span className="font-['Geist:Regular',_sans-serif] font-normal text-[13px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>{feature.text}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}

//                 {activeTab === 'instructor' && (
//                   <>
//                     {/* Industry Expert Badge */}
//                     <div className="mb-[24px]">
//                       <div className="inline-block rounded-[6px] px-[16px] py-[8px]" style={{ backgroundColor: 'rgba(249, 168, 37, 0.15)' }}>
//                         <span className="font-['Geist:Regular',_sans-serif] font-normal text-[12px] tracking-[0.6px] uppercase" style={{ color: '#F9A825' }}>INDUSTRY EXPERT</span>
//                       </div>
//                     </div>

//                     {/* Main Quote */}
//                     <div className="mb-[32px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[32px] text-[22px] tracking-[-0.55px]" style={{ color: '#F4F7F9' }}>
//                         <p>"This course bridges the gap between traditional robotics and Industry 4.0 automation through simulation-first approach"</p>
//                       </div>
//                     </div>

//                     {/* Instructor Profile */}
//                     <div className="flex items-start gap-[20px] mb-[32px] pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                       <div className="w-[80px] h-[80px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
//                         <img 
//                           src={imgInstructor}
//                           alt="Vikram Singh"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
//                           <p className="leading-[32px]">Vikram Singh</p>
//                         </div>
//                         <div className="flex items-center gap-[8px] mb-[8px]">
//                           <div className="flex gap-[2px]">
//                             {[...Array(5)].map((_, i) => (
//                               <svg key={i} className="w-[18px] h-[18px]" fill="#F9A825" viewBox="0 0 24 24">
//                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                               </svg>
//                             ))}
//                           </div>
//                           <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F9A825' }}>220+ 5 Star Reviews</span>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] text-[15px] mb-[12px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//                           <p>Robotics Simulation Expert • 14+ Years Experience</p>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                           <p>Vikram Singh is a robotics automation expert with over 14 years of experience in industrial robotics simulation, offline programming, and virtual commissioning. He has implemented automation solutions for major automotive and manufacturing companies worldwide.</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* What You'll Learn from the Instructor */}
//                     <div className="mb-[32px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[24px] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
//                         <p className="leading-[28px]">What You'll Learn from the Instructor</p>
//                       </div>
//                       <div className="space-y-[16px]">
//                         {[
//                           'Complete understanding of robotic cell design and simulation',
//                           'Robot programming and offline programming (OLP) techniques',
//                           'Path planning, collision detection, and reachability analysis',
//                           'Virtual commissioning and process validation',
//                           'PLC integration and I/O signal configuration',
//                           'Cycle time optimization and productivity analysis',
//                           'Safety assessment and risk mitigation strategies',
//                           'Real-world automation project implementation'
//                         ].map((item, index) => (
//                           <div key={index} className="flex items-start gap-[12px]">
//                             <div className="relative shrink-0 size-[20px] mt-[2px]">
//                               <svg className="block size-full" fill="none" viewBox="0 0 20 20">
//                                 <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
//                                 <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                               </svg>
//                             </div>
//                             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                               <p>{item}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Instructor Expertise Highlights */}
//                     <div className="rounded-[12px] p-[24px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
//                       <div className="grid grid-cols-2 gap-[20px]">
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-[36px]">14+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Years of Industry Experience</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-[36px]">600+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Students Trained Successfully</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-[36px]">60+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Industry Projects Completed</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-[36px]">100%</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Student Satisfaction Rate</p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import { useState } from 'react';

const imgSection = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgVideo1 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgInstructor = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function RoboticsSimulationPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'instructor'>('overview');

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section
        className="bg-repeat bg-top-left relative shrink-0 w-full py-16 md:py-[120px]"
        style={{ backgroundImage: `url('/domaincouses_biw_automotive_robotics_backimage.png')`, backgroundColor: '#092B38' }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-[48px]">

            <p
              className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3 leading-[20px]"
              style={{ color: '#6BC1E3' }}
            >
              Domain-Specific Training
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-[48px] tracking-[-1.2px] leading-tight md:leading-[52px] mb-4"
              style={{ color: '#F4F7F9' }}
            >
              ROBOTICS SIMULATION
            </h1>

            <p
              className="text-base md:text-[18px] max-w-[768px] mx-auto mb-4 leading-[28px]"
              style={{ color: 'rgba(244,247,249,0.7)' }}
            >
              Master Robotic Automation & Virtual Commissioning
            </p>

            <p
              className="text-base md:text-[18px] max-w-[768px] mx-auto mb-6 leading-[28px]"
              style={{ color: '#F4F7F9' }}
            >
              ROBOTICS SIMULATION is Job-Oriented industrial Domain training on Live / Dummy Projects.
            </p>

            <div className="flex items-center justify-center gap-4 md:gap-[24px] flex-wrap">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 shrink-0" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
                    </svg>
                  ),
                  label: 'DURATION 3 MONTHS'
                },
                {
                  icon: (
                    <svg className="w-5 h-5 shrink-0" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
                    </svg>
                  ),
                  label: 'LEVEL BEGINNER'
                },
                {
                  icon: (
                    <svg className="w-5 h-5 shrink-0" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                      <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
                    </svg>
                  ),
                  label: '5 STUDENTS / BATCH'
                }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm md:text-[16px]" style={{ color: 'rgba(244,247,249,0.9)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Syllabus and Course Overview ──────────────────────────── */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-[32px]">
            <h2
              className="text-2xl md:text-[36px] tracking-[-0.9px] leading-[44px]"
              style={{ color: '#F4F7F9' }}
            >
              Syllabus
            </h2>
            <button
              className="relative rounded-[8px] px-5 py-3 flex items-center gap-2 shrink-0"
              style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}
            >
              <svg className="w-5 h-5" style={{ color: '#F4F7F9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[16px]" style={{ color: '#F4F7F9' }}>Download Syllabus</span>
            </button>
          </div>

          {/* Course Objectives Card */}
          <div
            className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-[48px]"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <h3
                className="text-xl md:text-[28px] tracking-[-0.7px] leading-[36px] mb-8"
                style={{ color: '#F4F7F9' }}
              >
                Course Objectives
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-[48px] gap-y-5">
                {[
                  'Digital Twin Creation',
                  'Industrial Environment Simulation',
                  'ROS2-Based Control Systems',
                  'Autonomous Mobile Robots',
                  'AI Integration for Automation',
                  'Simulation-Hardware Connection',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="relative shrink-0 size-5 mt-[2px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107,193,227,0.1)" />
                        <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <p className="text-[15px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                      {item}
                    </p>
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
            <p
              className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3 leading-[20px]"
              style={{ color: '#6BC1E3' }}
            >
              Expert Training
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[52px] tracking-[-1px]"
              style={{ color: '#F4F7F9' }}
            >
              LEARN ROBOTICS SIMULATION FROM THE{' '}
              <span style={{ color: '#F9A825' }}>Industry-Expert</span>
            </h2>
          </div>

          {/* Two-column: sidebar + main */}
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">

            {/* ── Left Sidebar ── */}
            <div className="space-y-6">

              {/* Video Preview */}
              <div
                className="backdrop-blur-md backdrop-filter relative rounded-[16px] overflow-hidden"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                <div className="relative aspect-video">
                  <img
                    src={imgVideo1}
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(249,168,37,0.9)' }}
                    >
                      <svg className="w-6 h-6 ml-1" fill="#F4F7F9" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
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
              <button
                className="w-full relative rounded-[8px] px-8 py-[14px]"
                style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}
              >
                <span className="text-[16px]" style={{ color: '#F4F7F9' }}>Enroll in Course</span>
              </button>

              {/* Facility Image */}
              <div
                className="backdrop-blur-md backdrop-filter relative rounded-[16px] overflow-hidden"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                <img
                  src="https://images.unsplash.com/photo-1768323275769-6615e7cfcbe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhcm0lMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3MDk3ODUyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Robotics Training Facility"
                  className="w-full h-[200px] object-cover"
                />
              </div>
            </div>

            {/* ── Right Content Area ── */}
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
                      <div
                        className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0"
                        style={{ backgroundColor: 'rgba(107,193,227,0.2)' }}
                      >
                        <img src={imgInstructor} alt="Vikram Singh" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p
                          className="text-[20px] tracking-[-0.5px] leading-[28px] mb-2"
                          style={{ color: '#F4F7F9' }}
                        >
                          Vikram Singh
                        </p>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4" fill="#F9A825" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-[14px]" style={{ color: '#F9A825' }}>220+ 5 Star Reviews</span>
                        </div>
                        <p className="text-[14px] leading-[20px]" style={{ color: 'rgba(244,247,249,0.7)' }}>
                          Robotics Simulation Expert
                        </p>
                      </div>
                    </div>

                    {/* About the Course */}
                    <div className="mb-8">
                      <h3
                        className="text-[24px] tracking-[-0.6px] leading-[32px] mb-4"
                        style={{ color: '#F4F7F9' }}
                      >
                        About the Course
                      </h3>
                      <p className="text-[15px] leading-[26px] mb-4" style={{ color: 'rgba(244,247,249,0.8)' }}>
                        This comprehensive course covers the complete robotics simulation workflow from concept to virtual commissioning. You'll learn industry-standard offline programming, path planning, and virtual validation techniques used in modern automated manufacturing.
                      </p>
                      <p className="text-[15px] leading-[26px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                        From simple pick-and-place operations to complex multi-robot cells, you'll gain hands-on experience with industry-leading simulation software and real-world automation projects used in automotive and manufacturing sectors.
                      </p>
                    </div>

                    {/* What You Will Get */}
                    <div className="rounded-[12px] p-6 mb-8" style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}>
                      <h4
                        className="text-[20px] tracking-[-0.5px] leading-[28px] mb-5"
                        style={{ color: '#F4F7F9' }}
                      >
                        What you will get
                      </h4>
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
                            <p className="text-[14px] leading-[22px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                              {benefit}
                            </p>
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
                        <div
                          key={index}
                          className="flex items-center gap-3 rounded-[8px] p-3"
                          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                        >
                          <div
                            className="w-8 h-8 rounded-[6px] flex items-center justify-center shrink-0"
                            style={{ backgroundColor: 'rgba(107,193,227,0.15)' }}
                          >
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
                          <span className="text-[13px]" style={{ color: 'rgba(244,247,249,0.9)' }}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* ── Instructor Tab ── */}
                {activeTab === 'instructor' && (
                  <>
                    {/* Badge */}
                    <div className="mb-6">
                      <div
                        className="inline-block rounded-[6px] px-4 py-2"
                        style={{ backgroundColor: 'rgba(249,168,37,0.15)' }}
                      >
                        <span
                          className="text-[12px] tracking-[0.6px] uppercase"
                          style={{ color: '#F9A825' }}
                        >
                          INDUSTRY EXPERT
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <p
                      className="text-lg sm:text-[22px] leading-[32px] tracking-[-0.55px] mb-8"
                      style={{ color: '#F4F7F9' }}
                    >
                      "This course bridges the gap between traditional robotics and Industry 4.0 automation through simulation-first approach"
                    </p>

                    {/* Instructor Profile */}
                    <div className="flex flex-col sm:flex-row items-start gap-5 mb-8 pb-8 border-b border-white/10">
                      <div
                        className="w-20 h-20 rounded-full overflow-hidden shrink-0"
                        style={{ backgroundColor: 'rgba(107,193,227,0.2)' }}
                      >
                        <img src={imgInstructor} alt="Vikram Singh" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <p
                          className="text-[24px] tracking-[-0.6px] leading-[32px] mb-2"
                          style={{ color: '#F4F7F9' }}
                        >
                          Vikram Singh
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-[18px] h-[18px]" fill="#F9A825" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-[14px]" style={{ color: '#F9A825' }}>220+ 5 Star Reviews</span>
                        </div>
                        <p
                          className="text-[15px] leading-[22px] mb-3"
                          style={{ color: 'rgba(244,247,249,0.7)' }}
                        >
                          Robotics Simulation Expert • 14+ Years Experience
                        </p>
                        <p className="text-[14px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                          Vikram Singh is a robotics automation expert with over 14 years of experience in industrial robotics simulation, offline programming, and virtual commissioning. He has implemented automation solutions for major automotive and manufacturing companies worldwide.
                        </p>
                      </div>
                    </div>

                    {/* What You'll Learn */}
                    <div className="mb-8">
                      <h4
                        className="text-[20px] tracking-[-0.5px] leading-[28px] mb-6"
                        style={{ color: '#F4F7F9' }}
                      >
                        What You'll Learn from the Instructor
                      </h4>
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
                            <p className="text-[15px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="rounded-[12px] p-6" style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}>
                      <div className="grid grid-cols-2 gap-5">
                        {[
                          { num: '14+', label: 'Years of Industry Experience' },
                          { num: '600+', label: 'Students Trained Successfully' },
                          { num: '60+', label: 'Industry Projects Completed' },
                          { num: '100%', label: 'Student Satisfaction Rate' },
                        ].map((stat, i) => (
                          <div key={i}>
                            <p
                              className="text-[28px] tracking-[-0.7px] leading-[36px] mb-2"
                              style={{ color: '#F9A825' }}
                            >
                              {stat.num}
                            </p>
                            <p className="text-[14px] leading-[20px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                              {stat.label}
                            </p>
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
    </>
  );
}
