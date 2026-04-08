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

// export function InteriorPlasticPage() {
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
//               <p className="leading-[52px]">AUTOMOTIVE INTERIOR PLASTIC TRIMS</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] max-w-[768px] mx-auto mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//               <p className="leading-[28px]">Master Plastic Component Design & Engineering</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] max-w-[768px] mx-auto mb-[24px]" style={{ color: '#F4F7F9' }}>
//               <p className="leading-[28px]">AUTOMOTIVE INTERIOR PLASTIC TRIMS is Job-Oriented industrial Domain training on Live / Dummy Projects.</p>
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
//                 <p className="leading-[36px]">Course Overview</p>
//               </div>
              
//               <div className="grid grid-cols-2 gap-x-[48px] gap-y-[20px]">
//                 {[
//                   'Introduction to Automotive Interiors',
//                   'Plastic Materials & Properties',
//                   'Dashboard & Console Design',
//                   'Door Trim Panel Design',
//                   'Pillar Trim Components',
//                   'Injection Molding Fundamentals',
//                   'DFM for Plastic Parts',
//                   'Surface Quality Requirements',
//                   'Assembly Integration',
//                   'Clip & Fastener Design'
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
//               <p>LEARN INTERIOR PLASTIC DESIGN FROM THE <span style={{ color: '#F9A825' }}>Industry-Expert</span></p>
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
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F4F7F9' }}>90 Lectures</span>
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
//                   src="https://images.unsplash.com/photo-1754878206374-f78eac63ff29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFpbmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2MTMxMjg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//                   alt="Training Facility"
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
//                           <p className="leading-[28px]">Rajesh Kumar</p>
//                         </div>
//                         <div className="flex items-center gap-[8px] mb-[4px]">
//                           <div className="flex gap-[2px]">
//                             {[...Array(5)].map((_, i) => (
//                               <svg key={i} className="w-[16px] h-[16px]" fill="#F9A825" viewBox="0 0 24 24">
//                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                               </svg>
//                             ))}
//                           </div>
//                           <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F9A825' }}>180+ 5 Star Reviews</span>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//                           <p>Interior Plastic Design Expert</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Course Description */}
//                     <div className="mb-[32px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[16px] text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
//                         <p className="leading-[32px]">About the Course</p>
//                       </div>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[15px] mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                         <p>This comprehensive course covers the complete design cycle of automotive interior plastic components. You'll learn material selection, design for manufacturability, injection molding processes, and industry-standard CAD techniques for trim part development.</p>
//                       </div>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                         <p>From dashboard and door panels to pillar trims and consoles, you'll gain hands-on experience designing real automotive interior components used in modern vehicles. The course includes live projects from actual OEM specifications.</p>
//                       </div>
//                     </div>

//                     {/* What You Will Get */}
//                     <div className="rounded-[12px] p-[24px] mb-[32px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[20px] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
//                         <p className="leading-[28px]">What you will get</p>
//                       </div>
//                       <div className="space-y-[12px]">
//                         {[
//                           'Industry-recognized certification upon completion',
//                           'Hands-on experience with real OEM projects',
//                           'Portfolio of automotive trim designs',
//                           'Expert mentorship from industry professionals',
//                           'Placement assistance in leading automotive companies'
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
//                         <p>"This course provides complete knowledge of interior plastic component design from concept to production"</p>
//                       </div>
//                     </div>

//                     {/* Instructor Profile */}
//                     <div className="flex items-start gap-[20px] mb-[32px] pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                       <div className="w-[80px] h-[80px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
//                         <img 
//                           src={imgInstructor}
//                           alt="Rajesh Kumar"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
//                           <p className="leading-[32px]">Rajesh Kumar</p>
//                         </div>
//                         <div className="flex items-center gap-[8px] mb-[8px]">
//                           <div className="flex gap-[2px]">
//                             {[...Array(5)].map((_, i) => (
//                               <svg key={i} className="w-[18px] h-[18px]" fill="#F9A825" viewBox="0 0 24 24">
//                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                               </svg>
//                             ))}
//                           </div>
//                           <span className="font-['Geist:Regular',_sans-serif] font-normal text-[14px]" style={{ color: '#F9A825' }}>180+ 5 Star Reviews</span>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] text-[15px] mb-[12px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//                           <p>Interior Plastic Design Expert • 12+ Years Experience</p>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                           <p>Rajesh Kumar is an experienced professional with over 12 years in automotive interior design. He has worked with major OEMs and Tier-1 suppliers, specializing in plastic trim component development and injection molding design.</p>
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
//                           'Complete understanding of automotive interior plastic components',
//                           'Material selection and plastic properties for different applications',
//                           'Design for manufacturing (DFM) principles for injection molding',
//                           'Industry-standard workflows for trim component development',
//                           'Surface quality requirements and aesthetic considerations',
//                           'Assembly integration and clip/fastener design',
//                           'Cost optimization techniques for plastic parts',
//                           'Real-world project experience with OEM specifications'
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
//                             <p className="leading-[36px]">12+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Years of Industry Experience</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-[36px]">400+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Students Trained Successfully</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-[36px]">40+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Industry Projects Completed</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[8px] text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-[36px]">98%</p>
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

export function InteriorPlasticPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'instructor'>('overview');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r bg-repeat bg-size-[1920px_1076px,auto] bg-top-left relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[120px]" style={{ backgroundImage: `url('/domaincouses_biw_automotive_robotics_backimage.png')`, backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
          <div className="text-center mb-8 sm:mb-12 md:mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-2 sm:mb-3 md:mb-[12px] text-xs sm:text-sm md:text-[14px] text-nowrap tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-tight md:leading-[20px] whitespace-pre">Domain-Specific Training</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-3 sm:mb-4 md:mb-[16px] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-1.2px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-tight lg:leading-[52px]">AUTOMOTIVE INTERIOR PLASTIC TRIMS</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-sm sm:text-base md:text-[18px] max-w-[768px] mx-auto mb-3 md:mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              <p className="leading-relaxed md:leading-[28px]">Master Plastic Component Design & Engineering</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-sm sm:text-base md:text-[18px] max-w-[768px] mx-auto mb-4 sm:mb-6 md:mb-[24px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-relaxed md:leading-[28px]">AUTOMOTIVE INTERIOR PLASTIC TRIMS is Job-Oriented industrial Domain training on Live / Dummy Projects.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-[24px]">
              <div className="flex items-center gap-2 md:gap-[8px]">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
                </svg>
                <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>DURATION 3 MONTHS</span>
              </div>
              <div className="flex items-center gap-2 md:gap-[8px]">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2"/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
                </svg>
                <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>LEVEL BEGINNER</span>
              </div>
              <div className="flex items-center gap-2 md:gap-[8px]">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
                </svg>
                <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>5 STUDENTS / BATCH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus and Course Overview */}
      <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
          {/* Syllabus Header */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 md:mb-[32px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-tight md:leading-[44px]">Syllabus</p>
            </div>
            <button className="w-full sm:w-auto relative rounded-[8px] px-4 sm:px-6 md:px-[24px] py-2 sm:py-3 md:py-[12px] flex items-center justify-center gap-2 md:gap-[8px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]" style={{ color: '#F4F7F9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['Geist:Regular',_sans-serif] font-normal text-sm sm:text-base md:text-[16px]" style={{ color: '#F4F7F9' }}>Download Syllabus</span>
            </button>
          </div>

          {/* Course Overview Content */}
          <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-10 lg:p-[48px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-snug md:leading-[36px]">Course Overview</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-[48px] gap-y-3 sm:gap-y-4 md:gap-y-5 lg:gap-y-[20px]">
                {[
                  'Introduction to Automotive Interiors',
                  'Plastic Materials & Properties',
                  'Dashboard & Console Design',
                  'Door Trim Panel Design',
                  'Pillar Trim Components',
                  'Injection Molding Fundamentals',
                  'DFM for Plastic Parts',
                  'Surface Quality Requirements',
                  'Assembly Integration',
                  'Clip & Fastener Design'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-[12px]">
                    <div className="relative shrink-0 size-4 sm:size-5 md:size-[20px] mt-1">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                          <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
                          <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                      </svg>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
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
      <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-2 sm:mb-3 md:mb-[12px] text-xs sm:text-sm md:text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-tight md:leading-[20px]">Expert Training</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p>LEARN INTERIOR PLASTIC DESIGN FROM THE <span style={{ color: '#F9A825' }}>Industry-Expert</span></p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[32px]">
            {/* Left Sidebar */}
            <div className="lg:w-[380px] space-y-5 sm:space-y-6 lg:space-y-[24px]">
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
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(249, 168, 37, 0.9)' }}>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-[24px] md:h-[24px] ml-1" fill="#F4F7F9" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Details Card */}
              <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-5 sm:p-6 md:p-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="relative space-y-3 sm:space-y-4 md:space-y-[16px]">
                  <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Duration</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>3 Months</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Lectures</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>90 Lectures</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Skill Level</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>Beginner</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Students/Batch</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>5 Students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Certificate</span>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>Yes</span>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <button className="w-full relative rounded-[8px] px-4 sm:px-6 md:px-[32px] py-3 sm:py-4 md:py-[14px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
                <span className="font-['Geist:Regular',_sans-serif] font-normal text-sm sm:text-base md:text-[16px]" style={{ color: '#F4F7F9' }}>Enroll in Course</span>
              </button>

              {/* Facility Image */}
              <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1754878206374-f78eac63ff29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFpbmluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2MTMxMjg5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Training Facility"
                  className="w-full h-40 sm:h-48 md:h-[200px] object-cover"
                />
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 backdrop-blur-md backdrop-filter relative rounded-[16px] p-5 sm:p-6 md:p-8 lg:p-[40px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                {/* Tabs */}
                <div className="flex gap-4 sm:gap-6 md:gap-[24px] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <button className="pb-2 sm:pb-3 md:pb-[12px] relative" onClick={() => setActiveTab('overview')}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-sm sm:text-base md:text-[16px]" style={{ color: activeTab === 'overview' ? '#F9A825' : 'rgba(244, 247, 249, 0.6)' }}>Overview</span>
                    {activeTab === 'overview' && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>}
                  </button>
                  <button className="pb-2 sm:pb-3 md:pb-[12px] relative" onClick={() => setActiveTab('instructor')}>
                    <span className="font-['Geist:Regular',_sans-serif] font-normal text-sm sm:text-base md:text-[16px]" style={{ color: activeTab === 'instructor' ? '#F9A825' : 'rgba(244, 247, 249, 0.6)' }}>Instructor</span>
                    {activeTab === 'instructor' && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>}
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <>
                    {/* Instructor Info */}
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-[16px] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px] pb-5 sm:pb-6 md:pb-8 lg:pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
                        <img 
                          src={imgInstructor}
                          alt="Expert Instructor"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-base sm:text-lg md:text-xl lg:text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                          <p className="leading-snug md:leading-[28px]">Rajesh Kumar</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-[8px] mb-1">
                          <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-[16px] md:h-[16px]" fill="#F9A825" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F9A825' }}>180+ 5 Star Reviews</span>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                          <p>Interior Plastic Design Expert</p>
                        </div>
                      </div>
                    </div>

                    {/* Course Description */}
                    <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-3 sm:mb-4 md:mb-[16px] text-lg sm:text-xl md:text-2xl lg:text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[32px]">About the Course</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[15px] mb-3 sm:mb-4 md:mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>This comprehensive course covers the complete design cycle of automotive interior plastic components. You'll learn material selection, design for manufacturability, injection molding processes, and industry-standard CAD techniques for trim part development.</p>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                        <p>From dashboard and door panels to pillar trims and consoles, you'll gain hands-on experience designing real automotive interior components used in modern vehicles. The course includes live projects from actual OEM specifications.</p>
                      </div>
                    </div>

                    {/* What You Will Get */}
                    <div className="rounded-[12px] p-4 sm:p-5 md:p-6 lg:p-[24px] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-3 sm:mb-4 md:mb-[20px] text-base sm:text-lg md:text-xl lg:text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[28px]">What you will get</p>
                      </div>
                      <div className="space-y-2 sm:space-y-3 md:space-y-[12px]">
                        {[
                          'Industry-recognized certification upon completion',
                          'Hands-on experience with real OEM projects',
                          'Portfolio of automotive trim designs',
                          'Expert mentorship from industry professionals',
                          'Placement assistance in leading automotive companies'
                        ].map((benefit, index) => (
                          <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-[12px]">
                            <div className="relative shrink-0 size-4 sm:size-5 md:size-[20px] mt-1">
                              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
                                <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                              <p>{benefit}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Features */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-[16px]">
                      {[
                        { icon: 'book', text: 'Domain Knowledge' },
                        { icon: 'devices', text: 'Access on desktop & mobile' },
                        { icon: 'support', text: 'Lifetime Support' },
                        { icon: 'briefcase', text: 'Placement Support' },
                        { icon: 'certificate', text: 'Certificate of Completion' }
                      ].map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-2 rounded-[8px] p-3 sm:p-4 md:p-[12px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-[32px] md:h-[32px] rounded-[6px] flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)' }}>
                            {feature.icon === 'book' && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                            {feature.icon === 'devices' && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
                                <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            )}
                            {feature.icon === 'support' && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            )}
                            {feature.icon === 'briefcase' && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2"/>
                              </svg>
                            )}
                            {feature.icon === 'certificate' && (
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2"/>
                                <polyline points="14 2 14 8 20 8" strokeWidth="2"/>
                                <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2"/>
                              </svg>
                            )}
                          </div>
                          <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[13px] leading-tight" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeTab === 'instructor' && (
                  <>
                    {/* Industry Expert Badge */}
                    <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-[24px]">
                      <div className="inline-block rounded-[6px] px-3 sm:px-4 md:px-[16px] py-1 sm:py-2 md:py-[8px]" style={{ backgroundColor: 'rgba(249, 168, 37, 0.15)' }}>
                        <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[12px] tracking-[0.6px] uppercase" style={{ color: '#F9A825' }}>INDUSTRY EXPERT</span>
                      </div>
                    </div>

                    {/* Main Quote */}
                    <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-base sm:text-lg md:text-xl lg:text-[22px] tracking-[-0.55px]" style={{ color: '#F4F7F9' }}>
                        <p>"This course provides complete knowledge of interior plastic component design from concept to production"</p>
                      </div>
                    </div>

                    {/* Instructor Profile */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-[20px] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px] pb-5 sm:pb-6 md:pb-8 lg:pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
                        <img 
                          src={imgInstructor}
                          alt="Rajesh Kumar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-2 md:mb-[8px] text-lg sm:text-xl md:text-2xl lg:text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
                          <p className="leading-snug md:leading-[32px]">Rajesh Kumar</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-[8px] mb-2 sm:mb-3 md:mb-[8px]">
                          <div className="flex gap-[2px]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" fill="#F9A825" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F9A825' }}>180+ 5 Star Reviews</span>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[15px] mb-2 sm:mb-3 md:mb-[12px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                          <p>Interior Plastic Design Expert • 12+ Years Experience</p>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                          <p>Rajesh Kumar is an experienced professional with over 12 years in automotive interior design. He has worked with major OEMs and Tier-1 suppliers, specializing in plastic trim component development and injection molding design.</p>
                        </div>
                      </div>
                    </div>

                    {/* What You'll Learn from the Instructor */}
                    <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-3 sm:mb-4 md:mb-6 lg:mb-[24px] text-base sm:text-lg md:text-xl lg:text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                        <p className="leading-snug md:leading-[28px]">What You'll Learn from the Instructor</p>
                      </div>
                      <div className="space-y-3 sm:space-y-4 md:space-y-[16px]">
                        {[
                          'Complete understanding of automotive interior plastic components',
                          'Material selection and plastic properties for different applications',
                          'Design for manufacturing (DFM) principles for injection molding',
                          'Industry-standard workflows for trim component development',
                          'Surface quality requirements and aesthetic considerations',
                          'Assembly integration and clip/fastener design',
                          'Cost optimization techniques for plastic parts',
                          'Real-world project experience with OEM specifications'
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-[12px]">
                            <div className="relative shrink-0 size-4 sm:size-5 md:size-[20px] mt-1">
                              <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
                                <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                              <p>{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Instructor Expertise Highlights */}
                    <div className="rounded-[12px] p-4 sm:p-5 md:p-6 lg:p-[24px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
                      <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-[20px]">
                        <div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
                            <p className="leading-tight md:leading-[36px]">12+</p>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                            <p>Years of Industry Experience</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
                            <p className="leading-tight md:leading-[36px]">400+</p>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                            <p>Students Trained Successfully</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
                            <p className="leading-tight md:leading-[36px]">40+</p>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                            <p>Industry Projects Completed</p>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
                            <p className="leading-tight md:leading-[36px]">98%</p>
                          </div>
                          <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
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
    </>
  );
}