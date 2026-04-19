

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
//       <section className="bg-gradient-to-r bg-repeat bg-size-[1920px_1076px,auto] bg-top-left relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[120px]" style={{ backgroundImage: `url('/domaincouses_biw_automotive_robotics_backimage.png')`, backgroundColor: '#092B38' }}>
//         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
//           <div className="text-center mb-8 sm:mb-12 md:mb-[48px]">
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-2 sm:mb-3 md:mb-[12px] text-xs sm:text-sm md:text-[14px] text-nowrap tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
//               <p className="leading-tight md:leading-[20px] whitespace-pre">Domain-Specific Training</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-3 sm:mb-4 md:mb-[16px] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[-1.2px]" style={{ color: '#F4F7F9' }}>
//               <p className="leading-tight lg:leading-[52px]">AUTOMOTIVE INTERIOR PLASTIC TRIMS</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-sm sm:text-base md:text-[18px] max-w-[768px] mx-auto mb-3 md:mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//               <p className="leading-relaxed md:leading-[28px]">Master Plastic Component Design & Engineering</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-sm sm:text-base md:text-[18px] max-w-[768px] mx-auto mb-4 sm:mb-6 md:mb-[24px]" style={{ color: '#F4F7F9' }}>
//               <p className="leading-relaxed md:leading-[28px]">AUTOMOTIVE INTERIOR PLASTIC TRIMS is Job-Oriented industrial Domain training on Live / Dummy Projects.</p>
//             </div>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-[24px]">
//               <div className="flex items-center gap-2 md:gap-[8px]">
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <circle cx="12" cy="12" r="10" strokeWidth="2"/>
//                   <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
//                 </svg>
//                 <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>DURATION 3 MONTHS</span>
//               </div>
//               <div className="flex items-center gap-2 md:gap-[8px]">
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2"/>
//                   <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
//                 </svg>
//                 <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>LEVEL BEGINNER</span>
//               </div>
//               <div className="flex items-center gap-2 md:gap-[8px]">
//                 <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
//                   <circle cx="9" cy="7" r="4" strokeWidth="2"/>
//                   <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
//                 </svg>
//                 <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>5 STUDENTS / BATCH</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Syllabus and Course Overview */}
//       <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
//         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
//           {/* Syllabus Header */}
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-6 md:mb-[32px]">
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-2xl sm:text-3xl md:text-4xl lg:text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
//               <p className="leading-tight md:leading-[44px]">Syllabus</p>
//             </div>
//             <button className="w-full sm:w-auto relative rounded-[8px] px-4 sm:px-6 md:px-[24px] py-2 sm:py-3 md:py-[12px] flex items-center justify-center gap-2 md:gap-[8px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[20px] md:h-[20px]" style={{ color: '#F4F7F9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <polyline points="7 10 12 15 17 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 <line x1="12" y1="15" x2="12" y2="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               <span className="font-['Geist:Regular',_sans-serif] font-normal text-sm sm:text-base md:text-[16px]" style={{ color: '#F4F7F9' }}>Download Syllabus</span>
//             </button>
//           </div>

//           {/* Course Overview Content */}
//           <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-10 lg:p-[48px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//             <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
//             <div className="relative">
//               <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F4F7F9' }}>
//                 <p className="leading-snug md:leading-[36px]">Course Overview</p>
//               </div>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-[48px] gap-y-3 sm:gap-y-4 md:gap-y-5 lg:gap-y-[20px]">
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
//                   <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-[12px]">
//                     <div className="relative shrink-0 size-4 sm:size-5 md:size-[20px] mt-1">
//                       <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
//                         <g>
//                           <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
//                           <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </g>
//                       </svg>
//                     </div>
//                     <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
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
//       <section className="relative shrink-0 w-full py-12 sm:py-16 md:py-20 lg:py-[80px]" style={{ backgroundColor: '#092B38' }}>
//         <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[32px]">
//           {/* Section Header */}
//           <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-[48px]">
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-2 sm:mb-3 md:mb-[12px] text-xs sm:text-sm md:text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
//               <p className="leading-tight md:leading-[20px]">Expert Training</p>
//             </div>
//             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[40px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
//               <p>LEARN INTERIOR PLASTIC DESIGN FROM THE <span style={{ color: '#F9A825' }}>Industry-Expert</span></p>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-6 lg:gap-[32px]">
//             {/* Left Sidebar */}
//             <div className="lg:w-[380px] space-y-5 sm:space-y-6 lg:space-y-[24px]">
//               {/* Video Preview */}
            
//               {/* Course Details Card */}
//               <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-5 sm:p-6 md:p-[24px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//                 <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
//                 <div className="relative space-y-3 sm:space-y-4 md:space-y-[16px]">
//                   <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Duration</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>3 Months</span>
//                   </div>
//                   <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Lectures</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>90 Lectures</span>
//                   </div>
//                   <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Skill Level</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>Beginner</span>
//                   </div>
//                   <div className="flex items-center justify-between pb-3 sm:pb-4 md:pb-[16px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Students/Batch</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>5 Students</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>Certificate</span>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F4F7F9' }}>Yes</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Enroll Button */}
//               <button className="w-full relative rounded-[8px] px-4 sm:px-6 md:px-[32px] py-3 sm:py-4 md:py-[14px]" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
//                 <span className="font-['Geist:Regular',_sans-serif] font-normal text-sm sm:text-base md:text-[16px]" style={{ color: '#F4F7F9' }}>Enroll in Course</span>
//               </button>

//               {/* Facility Image */}
              
//             </div>

//             {/* Right Content Area */}
//             <div className="flex-1 backdrop-blur-md backdrop-filter relative rounded-[16px] p-5 sm:p-6 md:p-8 lg:p-[40px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
//               <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
//               <div className="relative">
//                 {/* Tabs */}
//                 <div className="flex gap-4 sm:gap-6 md:gap-[24px] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                   <button className="pb-2 sm:pb-3 md:pb-[12px] relative" onClick={() => setActiveTab('overview')}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-sm sm:text-base md:text-[16px]" style={{ color: activeTab === 'overview' ? '#F9A825' : 'rgba(244, 247, 249, 0.6)' }}>Overview</span>
//                     {activeTab === 'overview' && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>}
//                   </button>
//                   <button className="pb-2 sm:pb-3 md:pb-[12px] relative" onClick={() => setActiveTab('instructor')}>
//                     <span className="font-['Geist:Regular',_sans-serif] font-normal text-sm sm:text-base md:text-[16px]" style={{ color: activeTab === 'instructor' ? '#F9A825' : 'rgba(244, 247, 249, 0.6)' }}>Instructor</span>
//                     {activeTab === 'instructor' && <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>}
//                   </button>
//                 </div>

//                 {/* Tab Content */}
//                 {activeTab === 'overview' && (
//                   <>
//                     {/* Instructor Info */}
//                     <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-[16px] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px] pb-5 sm:pb-6 md:pb-8 lg:pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                       <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-[60px] md:h-[60px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
//                         <img 
//                           src={imgInstructor}
//                           alt="Expert Instructor"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-base sm:text-lg md:text-xl lg:text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
//                           <p className="leading-snug md:leading-[28px]">Rajesh Kumar</p>
//                         </div>
//                         <div className="flex flex-wrap items-center gap-2 sm:gap-[8px] mb-1">
//                           <div className="flex gap-[2px]">
//                             {[...Array(5)].map((_, i) => (
//                               <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-[16px] md:h-[16px]" fill="#F9A825" viewBox="0 0 24 24">
//                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                               </svg>
//                             ))}
//                           </div>
//                           <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F9A825' }}>180+ 5 Star Reviews</span>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//                           <p>Interior Plastic Design Expert</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Course Description */}
//                     <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-3 sm:mb-4 md:mb-[16px] text-lg sm:text-xl md:text-2xl lg:text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
//                         <p className="leading-snug md:leading-[32px]">About the Course</p>
//                       </div>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[15px] mb-3 sm:mb-4 md:mb-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                         <p>This comprehensive course covers the complete design cycle of automotive interior plastic components. You'll learn material selection, design for manufacturability, injection molding processes, and industry-standard CAD techniques for trim part development.</p>
//                       </div>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                         <p>From dashboard and door panels to pillar trims and consoles, you'll gain hands-on experience designing real automotive interior components used in modern vehicles. The course includes live projects from actual OEM specifications.</p>
//                       </div>
//                     </div>

//                     {/* What You Will Get */}
//                     <div className="rounded-[12px] p-4 sm:p-5 md:p-6 lg:p-[24px] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-3 sm:mb-4 md:mb-[20px] text-base sm:text-lg md:text-xl lg:text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
//                         <p className="leading-snug md:leading-[28px]">What you will get</p>
//                       </div>
//                       <div className="space-y-2 sm:space-y-3 md:space-y-[12px]">
//                         {[
//                           'Industry-recognized certification upon completion',
//                           'Hands-on experience with real OEM projects',
//                           'Portfolio of automotive trim designs',
//                           'Expert mentorship from industry professionals',
//                           'Placement assistance in leading automotive companies'
//                         ].map((benefit, index) => (
//                           <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-[12px]">
//                             <div className="relative shrink-0 size-4 sm:size-5 md:size-[20px] mt-1">
//                               <svg className="block size-full" fill="none" viewBox="0 0 20 20">
//                                 <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
//                                 <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                               </svg>
//                             </div>
//                             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                               <p>{benefit}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Additional Features */}
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-[16px]">
//                       {[
//                         { icon: 'book', text: 'Domain Knowledge' },
//                         { icon: 'devices', text: 'Access on desktop & mobile' },
//                         { icon: 'support', text: 'Lifetime Support' },
//                         { icon: 'briefcase', text: 'Placement Support' },
//                         { icon: 'certificate', text: 'Certificate of Completion' }
//                       ].map((feature, index) => (
//                         <div key={index} className="flex flex-col items-center text-center gap-2 rounded-[8px] p-3 sm:p-4 md:p-[12px]" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
//                           <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-[32px] md:h-[32px] rounded-[6px] flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)' }}>
//                             {feature.icon === 'book' && (
//                               <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                 <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                               </svg>
//                             )}
//                             {feature.icon === 'devices' && (
//                               <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
//                                 <line x1="8" y1="21" x2="16" y2="21" strokeWidth="2" strokeLinecap="round"/>
//                                 <line x1="12" y1="17" x2="12" y2="21" strokeWidth="2" strokeLinecap="round"/>
//                               </svg>
//                             )}
//                             {feature.icon === 'support' && (
//                               <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <circle cx="12" cy="12" r="10" strokeWidth="2"/>
//                                 <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                                 <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/>
//                               </svg>
//                             )}
//                             {feature.icon === 'briefcase' && (
//                               <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2"/>
//                                 <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2"/>
//                               </svg>
//                             )}
//                             {feature.icon === 'certificate' && (
//                               <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-[18px] md:h-[18px]" style={{ color: '#6BC1E3' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2"/>
//                                 <polyline points="14 2 14 8 20 8" strokeWidth="2"/>
//                                 <line x1="9" y1="15" x2="15" y2="15" strokeWidth="2"/>
//                               </svg>
//                             )}
//                           </div>
//                           <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[13px] leading-tight" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>{feature.text}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}

//                 {activeTab === 'instructor' && (
//                   <>
//                     {/* Industry Expert Badge */}
//                     <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-[24px]">
//                       <div className="inline-block rounded-[6px] px-3 sm:px-4 md:px-[16px] py-1 sm:py-2 md:py-[8px]" style={{ backgroundColor: 'rgba(249, 168, 37, 0.15)' }}>
//                         <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[12px] tracking-[0.6px] uppercase" style={{ color: '#F9A825' }}>INDUSTRY EXPERT</span>
//                       </div>
//                     </div>

//                     {/* Main Quote */}
//                     <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-base sm:text-lg md:text-xl lg:text-[22px] tracking-[-0.55px]" style={{ color: '#F4F7F9' }}>
//                         <p>"This course provides complete knowledge of interior plastic component design from concept to production"</p>
//                       </div>
//                     </div>

//                     {/* Instructor Profile */}
//                     <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 md:gap-[20px] mb-5 sm:mb-6 md:mb-8 lg:mb-[32px] pb-5 sm:pb-6 md:pb-8 lg:pb-[32px]" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
//                       <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-[80px] md:h-[80px] rounded-full overflow-hidden shrink-0" style={{ backgroundColor: 'rgba(107, 193, 227, 0.2)' }}>
//                         <img 
//                           src={imgInstructor}
//                           alt="Rajesh Kumar"
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-2 md:mb-[8px] text-lg sm:text-xl md:text-2xl lg:text-[24px] tracking-[-0.6px]" style={{ color: '#F4F7F9' }}>
//                           <p className="leading-snug md:leading-[32px]">Rajesh Kumar</p>
//                         </div>
//                         <div className="flex flex-wrap items-center gap-2 sm:gap-[8px] mb-2 sm:mb-3 md:mb-[8px]">
//                           <div className="flex gap-[2px]">
//                             {[...Array(5)].map((_, i) => (
//                               <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" fill="#F9A825" viewBox="0 0 24 24">
//                                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                               </svg>
//                             ))}
//                           </div>
//                           <span className="font-['Geist:Regular',_sans-serif] font-normal text-xs sm:text-sm md:text-[14px]" style={{ color: '#F9A825' }}>180+ 5 Star Reviews</span>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[15px] mb-2 sm:mb-3 md:mb-[12px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//                           <p>Interior Plastic Design Expert • 12+ Years Experience</p>
//                         </div>
//                         <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-relaxed text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                           <p>Rajesh Kumar is an experienced professional with over 12 years in automotive interior design. He has worked with major OEMs and Tier-1 suppliers, specializing in plastic trim component development and injection molding design.</p>
//                         </div>
//                       </div>
//                     </div>

//                     {/* What You'll Learn from the Instructor */}
//                     <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-[32px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-3 sm:mb-4 md:mb-6 lg:mb-[24px] text-base sm:text-lg md:text-xl lg:text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
//                         <p className="leading-snug md:leading-[28px]">What You'll Learn from the Instructor</p>
//                       </div>
//                       <div className="space-y-3 sm:space-y-4 md:space-y-[16px]">
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
//                           <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-[12px]">
//                             <div className="relative shrink-0 size-4 sm:size-5 md:size-[20px] mt-1">
//                               <svg className="block size-full" fill="none" viewBox="0 0 20 20">
//                                 <circle cx="10" cy="10" r="8" stroke="#6BC1E3" strokeWidth="1.5" fill="rgba(107, 193, 227, 0.1)" />
//                                 <path d="M6 10 L9 13 L14 7" stroke="#6BC1E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                               </svg>
//                             </div>
//                             <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                               <p>{item}</p>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Instructor Expertise Highlights */}
//                     <div className="rounded-[12px] p-4 sm:p-5 md:p-6 lg:p-[24px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.05)' }}>
//                       <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-[20px]">
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-tight md:leading-[36px]">12+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Years of Industry Experience</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-tight md:leading-[36px]">400+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Students Trained Successfully</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-tight md:leading-[36px]">40+</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
//                             <p>Industry Projects Completed</p>
//                           </div>
//                         </div>
//                         <div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-1 sm:mb-2 md:mb-[8px] text-xl sm:text-2xl md:text-3xl lg:text-[28px] tracking-[-0.7px]" style={{ color: '#F9A825' }}>
//                             <p className="leading-tight md:leading-[36px]">98%</p>
//                           </div>
//                           <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-snug text-xs sm:text-sm md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface InteriorPlasticPageProps {
  onNavigate?: (page: string) => void;
}

export function InteriorPlasticPage({ onNavigate }: InteriorPlasticPageProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'instructor'>('overview');

  const courseDetails = {
    title: 'AUTOMOTIVE INTERIOR PLASTIC TRIMS',
    subtitle: 'Master Plastic Component Design & Engineering',
    description: 'Master the art of automotive interior plastic trim design with comprehensive training in material selection, injection molding processes, and advanced CAD techniques.',
    duration: '3 Months',
    lectures: '90 Lectures',
    tools: 'CATIA V5, NX CAD',
  };

  const courseModules = [
    {
      title: 'Introduction to Automotive Interiors',
      topics: [
        'Overview of automotive interior systems',
        'Types of interior trim components',
        'Industry standards and regulations',
        'Quality requirements and specifications'
      ]
    },
    {
      title: 'Plastic Materials & Properties',
      topics: [
        'Common automotive plastic materials',
        'Material selection criteria',
        'Mechanical properties of plastics',
        'Weathering and UV resistance'
      ]
    },
    {
      title: 'Dashboard & Console Design',
      topics: [
        'Instrument panel architecture',
        'Center console design',
        'Air vent integration',
        'Storage compartment design'
      ]
    },
    {
      title: 'Door Trim Panel Design',
      topics: [
        'Door trim architecture',
        'Armrest and handle design',
        'Speaker grille integration',
        'Window switch panel design'
      ]
    }
  ];

  const learningOutcomes = [
    'Design complex interior plastic components using industry-standard CAD tools',
    'Understand injection molding processes and DFM principles',
    'Apply material selection criteria for different applications',
    'Develop production-ready engineering drawings',
    'Work with cross-functional teams in automotive projects',
    'Implement cost optimization techniques for plastic parts'
  ];

  const careerOpportunities = [
    'Interior Trim Design Engineer',
    'Plastic Component Designer',
    'Automotive CAD Engineer',
    'Product Development Engineer',
    'Tooling Design Engineer',
    'Quality Assurance Engineer'
  ];

  return (
    <>
      {/* Hero Section */}
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
              AUTOMOTIVE INTERIOR PLASTIC TRIMS is Job-Oriented industrial Domain training on Live / Dummy Projects.
            </p>

            <div className="flex items-center justify-center gap-4 md:gap-[24px] flex-wrap">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                      <polyline points="12 6 12 12 16 14" strokeWidth="2"/>
                    </svg>
                  ),
                  label: 'DURATION 3 MONTHS'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2"/>
                      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2"/>
                    </svg>
                  ),
                  label: 'LEVEL BEGINNER'
                },
                {
                  icon: (
                    <svg className="w-5 h-5" style={{ color: '#F9A825' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span className="text-sm md:text-[16px]" style={{ color: 'rgba(244,247,249,0.9)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus + Course Overview */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-[32px]">
            <h2 className="text-2xl md:text-[36px] tracking-[-0.9px] leading-[44px]" style={{ color: '#F4F7F9' }}>
              Syllabus
            </h2>
            <button
              className="relative rounded-[8px] px-5 py-3 flex items-center gap-2"
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

          <div
            className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-[48px]"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <h3 className="text-xl md:text-[28px] tracking-[-0.7px] leading-[36px] mb-8" style={{ color: '#F4F7F9' }}>
                Course Overview
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-[48px] gap-y-5">
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
          </div>
        </div>
      </section>

      {/* Learn from Industry Expert */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-[48px]">
            <p className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3" style={{ color: '#6BC1E3' }}>
              Expert Training
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[52px] tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              LEARN INTERIOR PLASTIC DESIGN FROM THE{' '}
              <span style={{ color: '#F9A825' }}>Industry-Expert</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8">
            {/* Left Sidebar */}
            <div className="space-y-6">
              <div
                className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                <div className="relative space-y-4">
                  {[
                    { label: 'Duration', value: '3 Months' },
                    { label: 'Lectures', value: '90 Lectures' },
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

              <button
                onClick={() => onNavigate?.('contact')}
                className="w-full relative rounded-[8px] px-8 py-[14px]"
                style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}
              >
                <span className="text-[16px]" style={{ color: '#F4F7F9' }}>Enroll in Course</span>
              </button>
            </div>

            {/* Right Content Area */}
            <div
              className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-[40px]"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
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

                {activeTab === 'overview' && (
                  <>
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
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-[14px]" style={{ color: '#F9A825' }}>180+ 5 Star Reviews</span>
                        </div>
                        <p className="text-[14px] leading-[20px]" style={{ color: 'rgba(244,247,249,0.7)' }}>Interior Plastic Design Expert</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-[24px] tracking-[-0.6px] leading-[32px] mb-4" style={{ color: '#F4F7F9' }}>About the Course</h3>
                      <p className="text-[15px] leading-[26px] mb-4" style={{ color: 'rgba(244,247,249,0.8)' }}>
                        This comprehensive course covers the complete design cycle of automotive interior plastic components. You'll learn material selection, design for manufacturability, injection molding processes, and industry-standard CAD techniques for trim part development.
                      </p>
                      <p className="text-[15px] leading-[26px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                        From dashboard and door panels to pillar trims and consoles, you'll gain hands-on experience designing real automotive interior components used in modern vehicles. The course includes live projects from actual OEM specifications.
                      </p>
                    </div>

                    <div className="rounded-[12px] p-6 mb-8" style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}>
                      <h4 className="text-[20px] tracking-[-0.5px] leading-[28px] mb-5" style={{ color: '#F4F7F9' }}>What you will get</h4>
                      <div className="space-y-3">
                        {[
                          'Industry-recognized certification upon completion',
                          'Hands-on experience with real OEM projects',
                          'Portfolio of automotive trim designs',
                          'Expert mentorship from industry professionals',
                          'Placement assistance in leading automotive companies'
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
                          <span className="text-[13px]" style={{ color: 'rgba(244,247,249,0.9)' }}>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeTab === 'instructor' && (
                  <>
                    <div className="mb-6">
                      <div className="inline-block rounded-[6px] px-4 py-2" style={{ backgroundColor: 'rgba(249,168,37,0.15)' }}>
                        <span className="text-[12px] tracking-[0.6px] uppercase" style={{ color: '#F9A825' }}>INDUSTRY EXPERT</span>
                      </div>
                    </div>

                    <p className="text-lg sm:text-[22px] leading-[32px] tracking-[-0.55px] mb-8" style={{ color: '#F4F7F9' }}>
                      "This course provides complete knowledge of interior plastic component design from concept to production"
                    </p>

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
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-[14px]" style={{ color: '#F9A825' }}>180+ 5 Star Reviews</span>
                        </div>
                        <p className="text-[15px] leading-[22px] mb-3" style={{ color: 'rgba(244,247,249,0.7)' }}>Interior Plastic Design Expert • 12+ Years Experience</p>
                        <p className="text-[14px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                          Manoj Potdar is an experienced professional with over 12 years in automotive interior design. He has worked with major OEMs and Tier-1 suppliers, specializing in plastic trim component development and injection molding design.
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-[20px] tracking-[-0.5px] leading-[28px] mb-6" style={{ color: '#F4F7F9' }}>What You'll Learn from the Instructor</h4>
                      <div className="space-y-4">
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

                    <div className="rounded-[12px] p-6" style={{ backgroundColor: 'rgba(107,193,227,0.05)' }}>
                      <div className="grid grid-cols-2 gap-5">
                        {[
                          { num: '12+', label: 'Years of Industry Experience' },
                          { num: '400+', label: 'Students Trained Successfully' },
                          { num: '40+', label: 'Industry Projects Completed' },
                          { num: '98%', label: 'Student Satisfaction Rate' },
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

      {/* Course Syllabus (Accordion) */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-[48px]">
            <p className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3" style={{ color: '#6BC1E3' }}>Comprehensive Curriculum</p>
            <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[52px] mb-4" style={{ color: '#F4F7F9' }}>COURSE SYLLABUS</h2>
            <p className="text-[16px] leading-[28px] max-w-[768px] mx-auto" style={{ color: 'rgba(244,247,249,0.7)' }}>
              Our curriculum is carefully designed to align with current industry requirements, ensuring you gain practical, job-ready skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div
              className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-8"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      value: 'item-1', title: 'Introduction to Automotive Interiors',
                      items: ['Overview of automotive interior systems', 'Types of interior trim components', 'Industry standards and regulations', 'Quality requirements and specifications']
                    },
                    {
                      value: 'item-2', title: 'Plastic Materials & Properties',
                      items: ['Common automotive plastic materials', 'Material selection criteria', 'Mechanical properties of plastics', 'Weathering and UV resistance']
                    },
                    {
                      value: 'item-3', title: 'Dashboard & Console Design',
                      items: ['Instrument panel architecture', 'Center console design', 'Air vent integration', 'Storage compartment design']
                    },
                    {
                      value: 'item-4', title: 'Door Trim Panel Design',
                      items: ['Door trim architecture', 'Armrest and handle design', 'Speaker grille integration', 'Window switch panel design']
                    },
                    {
                      value: 'item-5', title: 'Pillar Trim Components',
                      items: ['A/B/C pillar trim design', 'Attachment methods', 'Airbag integration', 'Surface finish requirements']
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

            <div
              className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-8"
              style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <div className="relative">
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    {
                      value: 'item-6', title: 'Injection Molding Fundamentals',
                      items: ['Molding process overview', 'Tooling considerations', 'Gate and runner design', 'Ejection systems']
                    },
                    {
                      value: 'item-7', title: 'DFM for Plastic Parts',
                      items: ['Draft angles and wall thickness', 'Rib and boss design', 'Weld line considerations', 'Sink marks and warpage prevention']
                    },
                    {
                      value: 'item-8', title: 'Assembly Integration',
                      items: ['Clip and fastener design', 'Welding and bonding methods', 'Snap-fit design', 'Tolerance stack-up analysis']
                    },
                    {
                      value: 'item-9', title: 'Surface Quality & Finishing',
                      items: ['Texture and grain requirements', 'Class A surface definition', 'Painting and coating processes', 'Color matching standards']
                    },
                    {
                      value: 'item-10', title: 'Project Work',
                      items: ['Complete dashboard design project', 'Door trim panel development', 'Pillar trim assembly', 'Portfolio creation and presentation']
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

      {/* Curriculum Details - Skills Section */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-[48px]">
            <p className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3" style={{ color: '#6BC1E3' }}>Detailed Learning Path</p>
            <h2 className="text-3xl md:text-[40px] leading-tight md:leading-[52px]" style={{ color: '#F4F7F9' }}>CURRICULUM</h2>
          </div>

          <div
            className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 md:p-8"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <h3 className="text-[22px] tracking-[-0.55px] leading-[30px] mb-6" style={{ color: '#F4F7F9' }}>Skills You Will Get In M CAD Solutions?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  'Complete interior trim design workflow',
                  'Advanced 3D modeling and surface techniques',
                  'Injection molding design principles',
                  'DFM and cost optimization strategies',
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

      {/* Course Overview Stats */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 md:mb-[48px]">
            {[
              { label: 'Duration', value: courseDetails.duration, large: true },
              { label: 'Lectures', value: courseDetails.lectures, large: true },
              { label: 'Tools', value: courseDetails.tools, large: false },
            ].map((stat, i) => (
              <div key={i} className="backdrop-blur-md backdrop-filter relative rounded-[12px] p-8" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="relative">
                  <p className="text-[14px] uppercase mb-2" style={{ color: '#6BC1E3' }}>{stat.label}</p>
                  <p className={`${stat.large ? 'text-[32px] tracking-[-0.8px] leading-[40px]' : 'text-[20px] tracking-[-0.5px] leading-[28px]'}`} style={{ color: '#F4F7F9' }}>
                    {stat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="backdrop-blur-md backdrop-filter relative rounded-[16px] p-6 sm:p-8 md:p-[48px]" style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="relative">
              <h2 className="text-2xl md:text-[36px] tracking-[-0.9px] leading-[44px] mb-6" style={{ color: '#F4F7F9' }}>About This Course</h2>
              <p className="text-[16px] leading-[28px] mb-5" style={{ color: 'rgba(244,247,249,0.8)' }}>{courseDetails.description}</p>
              <p className="text-[16px] leading-[28px]" style={{ color: 'rgba(244,247,249,0.8)' }}>
                By taking this course, you'll gain advanced skills in Automotive Interior Plastic Trim Design, which will significantly enhance your job prospects. Upon successful completion, excellent employment opportunities in the automotive field as well as product design will be assured.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-[48px]">
            <p className="text-[13px] md:text-[14px] tracking-[0.7px] uppercase mb-3" style={{ color: '#6BC1E3' }}>Curriculum</p>
            <h2 className="text-2xl md:text-[36px] tracking-[-0.9px] leading-[44px]" style={{ color: '#F4F7F9' }}>Course Modules</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courseModules.map((module, index) => (
              <div key={index} className="backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.4)] relative rounded-[12px]">
                <div className="overflow-clip relative rounded-[inherit] p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center rounded-[8px] size-12 shrink-0" style={{ backgroundColor: 'rgba(107,193,227,0.15)' }}>
                      <span className="text-[20px] leading-[28px]" style={{ color: '#6BC1E3' }}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-[20px] tracking-[-0.5px] leading-[28px] flex-1" style={{ color: '#F4F7F9' }}>{module.title}</p>
                  </div>
                  <div className="space-y-3">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex gap-2 items-start">
                        <div className="relative shrink-0 size-4 mt-[2px]">
                          <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                            <path d="M8 0L9.8 5.8L16 6.4L11.2 10.6L12.8 16L8 13L3.2 16L4.8 10.6L0 6.4L6.2 5.8L8 0Z" fill="#5EEAD4" opacity="0.7"/>
                          </svg>
                        </div>
                        <p className="text-[14px] leading-[24px]" style={{ color: 'rgba(244,247,249,0.7)' }}>{topic}</p>
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

      {/* Learning Outcomes & Career Opportunities */}
      <section className="relative shrink-0 w-full py-14 md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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