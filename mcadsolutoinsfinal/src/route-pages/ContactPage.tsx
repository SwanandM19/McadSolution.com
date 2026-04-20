
// 'use client';

// import { useState } from 'react';
// import { AnimatedSection } from '../components/AnimatedSection';
// import { ArrowLeft } from 'lucide-react';
// import svgPaths from '../imports/svg-9op1xbyva3';

// const image_eb8365b9c5ecfe2fca21e4f849236ebb7d107b90 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
// const image_19450e4933b9541de2bc421a5d14bc8bcd13b146 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
// const imgSection1 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
// const image_50df78cf249e7e1fe6c20c29a0164d1e171ce1ec = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
// const imgMap = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";

// interface ContactPageProps {
//   onNavigate?: (page: string) => void;
// }

// export function ContactPage({ onNavigate }: ContactPageProps) {
//   // Form state from TrainingLeadPage
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     organization: '',
//     interest: 'Training',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       const response = await fetch('/api/leads', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setSubmitStatus('success');
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           organization: '',
//           interest: 'Training',
//           message: '',
//         });
//       } else {
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Google Maps URL for the location
//   const locationAddress = "1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052";
//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`;

//   const handleOpenMap = () => {
//     window.open(googleMapsUrl, '_blank');
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         className="relative w-full min-h-[500px] overflow-hidden"
//         style={{
//           background:
//             "linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)",
//         }}
//       >
//         {/* BACK BUTTON */}
//         <button 
//           onClick={() => onNavigate?.('home')}
//           className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[30px] z-20 backdrop-blur-md backdrop-filter bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] rounded-full p-[10px] md:p-[12px] transition-all duration-300 group"
//           aria-label="Go back"
//         >
//           <ArrowLeft className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" style={{ color: '#F4F7F9' }} />
//           <span className="sr-only">Back</span>
//         </button>

//         <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 px-[32px] py-[60px]">
//           {/* Left Text Column */}
//           <div className="flex-1 flex flex-col gap-4 text-left text-white">
//             <h5 className="text-[#6BC1E3] uppercase text-lg tracking-[0.7px] font-['Geist:Regular',sans-serif]">
//               Get In Touch
//             </h5>
//             <h1 className="text-[44px] leading-[54px] font-['Geist:Regular',sans-serif] font-normal tracking-[-1.2px]">
//               Start Your CAD Journey Today
//             </h1>
//             <p className="text-[18px] leading-[28px] text-gray-300 max-w-[520px]">
//               Contact us to learn more about our courses and get personalized guidance.
//             </p>
//           </div>

//           {/* Right Image Card */}
//           <div className="flex-1 relative max-w-[480px] w-full">
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
//               <img
//                 src={'/contactus_get_in_touch.png'}
//                 alt="CAD Training Preview"
//                 className="w-full h-[380px] object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Form Section (Replaced with TrainingLeadPage form fields) */}
//       <section
//         className="relative shrink-0 w-full py-[80px]"
//         style={{ backgroundColor: "#0A1C26" }}
//       >
//         <div className="max-w-[832px] mx-auto px-[32px]">
//           <div className="bg-gradient-to-b flex flex-col from-[rgba(17,24,39,0.7)] gap-[20px] items-start p-[32px] relative rounded-[16px] to-[#000000]">
//             <div
//               aria-hidden="true"
//               className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]"
//             />

//             {/* Heading */}
//             <div className="flex flex-col items-start w-full mb-[8px]">
//               <p className="text-[24px] leading-[32px]" style={{ color: "#F4F7F9" }}>
//                 Contact Information
//               </p>
//               <p className="text-[14px] leading-[20px]" style={{ color: "rgba(244, 247, 249, 0.7)" }}>
//                 Reach out to us for course details and enrollment
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="w-full space-y-4">
//               {/* Name (required) */}
//               <div className="flex flex-col gap-[6px] w-full">
//                 <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
//                   Name *
//                 </label>
//                 <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
//                   <input
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                     placeholder="Your full name"
//                     className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
//                     style={{ color: "#F4F7F9" }}
//                   />
//                   <div
//                     aria-hidden="true"
//                     className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
//                   />
//                 </div>
//               </div>

//               {/* Email (required) */}
//               <div className="flex flex-col gap-[6px] w-full">
//                 <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
//                   Email *
//                 </label>
//                 <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
//                   <input
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     placeholder="your@email.com"
//                     className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
//                     style={{ color: "#F4F7F9" }}
//                   />
//                   <div
//                     aria-hidden="true"
//                     className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
//                   />
//                 </div>
//               </div>

//               {/* Phone (required) */}
//               <div className="flex flex-col gap-[6px] w-full">
//                 <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
//                   Phone *
//                 </label>
//                 <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
//                   <input
//                     type="tel"
//                     required
//                     value={formData.phone}
//                     onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
//                     style={{ color: "#F4F7F9" }}
//                   />
//                   <div
//                     aria-hidden="true"
//                     className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
//                   />
//                 </div>
//               </div>

//               {/* Organization (optional) */}
//               <div className="flex flex-col gap-[6px] w-full">
//                 <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
//                   Organization
//                 </label>
//                 <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
//                   <input
//                     type="text"
//                     value={formData.organization}
//                     onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
//                     placeholder="College/Company (optional)"
//                     className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
//                     style={{ color: "#F4F7F9" }}
//                   />
//                   <div
//                     aria-hidden="true"
//                     className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
//                   />
//                 </div>
//               </div>

//               {/* Interest dropdown */}
//               <div className="flex flex-col gap-[6px] w-full">
//                 <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
//                   Interest
//                 </label>
//                 <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
//                   <select
//                     value={formData.interest}
//                     onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
//                     className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none appearance-none"
//                     style={{ color: "#F4F7F9" }}
//                   >
//                     <option value="Training" className="bg-gray-800">Training Program</option>
//                     <option value="Product" className="bg-gray-800">Product Demo</option>
//                     <option value="Consultation" className="bg-gray-800">Consultation</option>
//                     <option value="Lab Setup" className="bg-gray-800">Lab Setup</option>
//                   </select>
//                   <div
//                     aria-hidden="true"
//                     className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
//                   />
//                 </div>
//               </div>

//               {/* Message (optional) */}
//               <div className="flex flex-col gap-[6px] w-full">
//                 <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
//                   Message
//                 </label>
//                 <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
//                   <textarea
//                     rows={4}
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     placeholder="Tell us more about your requirements (optional)"
//                     className="w-full bg-transparent px-[13px] py-[11px] text-[16px] resize-none outline-none placeholder:text-gray-500"
//                     style={{ color: "#F4F7F9" }}
//                   />
//                   <div
//                     aria-hidden="true"
//                     className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
//                   />
//                 </div>
//               </div>

//               {/* Status messages */}
//               {submitStatus === 'success' && (
//                 <div className="p-3 bg-emerald-50/10 border border-emerald-500/30 rounded-lg text-sm text-emerald-400">
//                   ✓ Thank you! We'll contact you soon.
//                 </div>
//               )}
//               {submitStatus === 'error' && (
//                 <div className="p-3 bg-red-50/10 border border-red-500/30 rounded-lg text-sm text-red-400">
//                   ✗ Something went wrong. Please try again.
//                 </div>
//               )}

//               {/* Submit Button (using existing gradient style) */}
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="rounded-[9999px] w-full py-[12px] text-[14px] transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
//                 style={{
//                   background: "linear-gradient(90deg, #10162F 0%, #FBBF24 100%)",
//                   color: "#F4F7F9",
//                 }}
//               >
//                 {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section
//         className="relative shrink-0 w-full py-[80px]"
//         style={{ backgroundColor: "#092B38" }}
//       >
//         <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
//             <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center">
//               <div
//                 aria-hidden="true"
//                 className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
//               />
//               <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
//                 <div className="relative shrink-0 size-[24px]">
//                   <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
//                     <g>
//                       <path
//                         d={svgPaths.p363df2c0}
//                         stroke="var(--stroke-0, #D1D5DB)"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.25"
//                       />
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//               <div className="content-stretch flex flex-col items-center w-full">
//                 <div
//                   className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] tracking-[-0.45px] w-full mb-[8px]"
//                   style={{ color: "#F4F7F9" }}
//                 >
//                   <p className="leading-[28px]">Email Us</p>
//                 </div>
//                 <div
//                   className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px] w-full"
//                   style={{ color: "rgba(244, 247, 249, 0.7)" }}
//                 >
//                   <p>info@mcadsolution.com</p>
//                   <p>support@mcadsolution.com</p>
//                 </div>
//               </div>
//             </div>

//             <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center">
//               <div
//                 aria-hidden="true"
//                 className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
//               />
//               <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
//                 <div className="relative shrink-0 size-[24px]">
//                   <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
//                     <g>
//                       <path
//                         d={svgPaths.pcb4e300}
//                         stroke="var(--stroke-0, #D1D5DB)"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.25"
//                       />
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//               <div className="content-stretch flex flex-col items-center w-full">
//                 <div
//                   className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] tracking-[-0.45px] w-full mb-[8px]"
//                   style={{ color: "#F4F7F9" }}
//                 >
//                   <p className="leading-[28px]">Call Us</p>
//                 </div>
//                 <div
//                   className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px] w-full"
//                   style={{ color: "rgba(244, 247, 249, 0.7)" }}
//                 >
//                   <p>+91 98765 43210</p>
//                   <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
//                 </div>
//               </div>
//             </div>

//             <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center cursor-pointer hover:bg-[rgba(107,193,227,0.05)] transition-all duration-300" onClick={handleOpenMap}>
//               <div
//                 aria-hidden="true"
//                 className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
//               />
//               <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
//                 <div className="relative shrink-0 size-[24px]">
//                   <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
//                     <g>
//                       <path
//                         d={svgPaths.p25fc4100}
//                         stroke="var(--stroke-0, #D1D5DB)"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.25"
//                       />
//                       <path
//                         d={svgPaths.p3e012060}
//                         stroke="var(--stroke-0, #D1D5DB)"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="1.25"
//                       />
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//               <div className="content-stretch flex flex-col items-center w-full">
//                 <div
//                   className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] tracking-[-0.45px] w-full mb-[8px]"
//                   style={{ color: "#F4F7F9" }}
//                 >
//                   <p className="leading-[28px]">Visit Us</p>
//                 </div>
//                 <div
//                   className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px] w-full"
//                   style={{ color: "rgba(244, 247, 249, 0.7)" }}
//                 >
//                   <p>1st floor, FMCIII BUILDING,</p>
//                   <p>Marathwada Mitra Mandal College Rd</p>
//                   <p>Karvenagar, Pune, Maharashtra 411052</p>
//                 </div>
//                 <div className="mt-3 text-[12px]" style={{ color: '#6BC1E3' }}>
//                   Click to open Google Maps →
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section - Clickable Google Maps */}
//       <section
//         className="relative shrink-0 w-full py-[60px]"
//         style={{ backgroundColor: "#0A1C26" }}
//       >
//         <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
//           <div className="text-center mb-[32px]">
//             <div
//               className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase"
//               style={{ color: "#6BC1E3" }}
//             >
//               <p className="leading-[20px]">Location</p>
//             </div>
//             <div
//               className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] tracking-[-0.9px]"
//               style={{ color: "#F4F7F9" }}
//             >
//               <p className="leading-[36px] md:leading-[44px]">Visit Our Institute</p>
//             </div>
//           </div>
          
//           {/* Clickable Map Container */}
//           <button 
//             onClick={handleOpenMap}
//             className="w-full backdrop-blur-md backdrop-filter box-border relative rounded-[16px] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(107,193,227,0.1)]"
//           >
//             <div
//               aria-hidden="true"
//               className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10"
//             />
//             <img
//               src={'/contectus_location.png'}
//               alt="M CAD Solutions Location - 1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052"
//               className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
//             />
            
//             {/* Overlay with click indicator */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//               <div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-3">
//                 <svg className="w-5 h-5" fill="#F9A825" viewBox="0 0 24 24">
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
//                 </svg>
//                 <span className="text-white text-[16px] font-medium">Open in Google Maps</span>
//               </div>
//             </div>
//           </button>

//           {/* Address text below map */}
//           <div className="text-center mt-4">
//             <p className="text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
//               1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd,<br />
//               above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* SEPARATOR - Visual divider between content and footer */}
//       <div className="relative w-full">
//         <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#F9A825] to-transparent" />
//         <div className="absolute left-1/2 transform -translate-x-1/2 -top-[20px]">
//           <div className="bg-[#092B38] p-[8px] rounded-full">
//             <div className="w-[8px] h-[8px] rounded-full bg-[#F9A825]" />
//           </div>
//         </div>
//       </div>
//       <div className="h-[2px] bg-[rgba(249,168,37,0.2)] w-full" />
//     </>
//   );
// }


'use client';

import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowLeft } from 'lucide-react';
import svgPaths from '../imports/svg-9op1xbyva3';

const image_eb8365b9c5ecfe2fca21e4f849236ebb7d107b90 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_19450e4933b9541de2bc421a5d14bc8bcd13b146 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgSection1 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_50df78cf249e7e1fe6c20c29a0164d1e171ce1ec = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgMap = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  // Form state from TrainingLeadPage
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: 'Training',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          interest: 'Training',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Exact Google Maps URL for M CAD Solutions
  const googleMapsUrl = "https://www.google.com/maps/place/M+CAD+Solutions/@18.49031,73.8091136,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf4bc88c149f:0x721af976b1c10c4a!8m2!3d18.49031!4d73.8091136!16s%2Fg%2F11gvxlbp30?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D";
  
  // Complete address details
  const fullAddress = "1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052";
  
  // Address lines for display
  const addressLine1 = "1st floor, FMCIII BUILDING";
  const addressLine2 = "Marathwada Mitra Mandal College of Engineering Rd";
  const addressLine3 = "above Kuka robotics lab, Hingane Home Colony";
  const addressLine4 = "Karvenagar, Pune, Maharashtra 411052";

  const handleOpenMap = () => {
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[500px] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)",
        }}
      >
        {/* BACK BUTTON */}
        <button 
          onClick={() => onNavigate?.('home')}
          className="absolute top-[20px] left-[20px] md:top-[30px] md:left-[30px] z-20 backdrop-blur-md backdrop-filter bg-[rgba(0,0,0,0.5)] hover:bg-[rgba(0,0,0,0.7)] rounded-full p-[10px] md:p-[12px] transition-all duration-300 group"
          aria-label="Go back"
        >
          <ArrowLeft className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]" style={{ color: '#F4F7F9' }} />
          <span className="sr-only">Back</span>
        </button>

        <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 px-[32px] py-[60px]">
          {/* Left Text Column */}
          <div className="flex-1 flex flex-col gap-4 text-left text-white">
            <h5 className="text-[#6BC1E3] uppercase text-lg tracking-[0.7px] font-['Geist:Regular',sans-serif]">
              Get In Touch
            </h5>
            <h1 className="text-[44px] leading-[54px] font-['Geist:Regular',sans-serif] font-normal tracking-[-1.2px]">
              Start Your CAD Journey Today
            </h1>
            <p className="text-[18px] leading-[28px] text-gray-300 max-w-[520px]">
              Contact us to learn more about our courses and get personalized guidance.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="flex-1 relative max-w-[480px] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
              <img
                src={'/contactus_get_in_touch.png'}
                alt="CAD Training Preview"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        className="relative shrink-0 w-full py-[80px]"
        style={{ backgroundColor: "#0A1C26" }}
      >
        <div className="max-w-[832px] mx-auto px-[32px]">
          <div className="bg-gradient-to-b flex flex-col from-[rgba(17,24,39,0.7)] gap-[20px] items-start p-[32px] relative rounded-[16px] to-[#000000]">
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]"
            />

            {/* Heading */}
            <div className="flex flex-col items-start w-full mb-[8px]">
              <p className="text-[24px] leading-[32px]" style={{ color: "#F4F7F9" }}>
                Contact Information
              </p>
              <p className="text-[14px] leading-[20px]" style={{ color: "rgba(244, 247, 249, 0.7)" }}>
                Reach out to us for course details and enrollment
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full space-y-4">
              {/* Name (required) */}
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
                  Name *
                </label>
                <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
                    style={{ color: "#F4F7F9" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>

              {/* Email (required) */}
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
                  Email *
                </label>
                <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
                    style={{ color: "#F4F7F9" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>

              {/* Phone (required) */}
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
                  Phone *
                </label>
                <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
                    style={{ color: "#F4F7F9" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>

              {/* Organization (optional) */}
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
                  Organization
                </label>
                <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="College/Company (optional)"
                    className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
                    style={{ color: "#F4F7F9" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>

              {/* Interest dropdown */}
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
                  Interest
                </label>
                <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none appearance-none"
                    style={{ color: "#F4F7F9" }}
                  >
                    <option value="Training" className="bg-gray-800">Training Program</option>
                    <option value="Product" className="bg-gray-800">Product Demo</option>
                    <option value="Consultation" className="bg-gray-800">Consultation</option>
                    <option value="Lab Setup" className="bg-gray-800">Lab Setup</option>
                  </select>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>

              {/* Message (optional) */}
              <div className="flex flex-col gap-[6px] w-full">
                <label className="text-[14px]" style={{ color: "#F4F7F9" }}>
                  Message
                </label>
                <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more about your requirements (optional)"
                    className="w-full bg-transparent px-[13px] py-[11px] text-[16px] resize-none outline-none placeholder:text-gray-500"
                    style={{ color: "#F4F7F9" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>

              {/* Status messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-emerald-50/10 border border-emerald-500/30 rounded-lg text-sm text-emerald-400">
                  ✓ Thank you! We'll contact you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-50/10 border border-red-500/30 rounded-lg text-sm text-red-400">
                  ✗ Something went wrong. Please try again.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-[9999px] w-full py-[12px] text-[14px] transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(90deg, #10162F 0%, #FBBF24 100%)",
                  color: "#F4F7F9",
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section
        className="relative shrink-0 w-full py-[80px]"
        style={{ backgroundColor: "#092B38" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {/* Email Card */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path
                        d={svgPaths.p363df2c0}
                        stroke="var(--stroke-0, #D1D5DB)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center w-full">
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] tracking-[-0.45px] w-full mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[28px]">Email Us</p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  <p>info@mcadsolution.com</p>
                  <p>support@mcadsolution.com</p>
                </div>
              </div>
            </div>

            {/* Call Card */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path
                        d={svgPaths.pcb4e300}
                        stroke="var(--stroke-0, #D1D5DB)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center w-full">
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] tracking-[-0.45px] w-full mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[28px]">Call Us</p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  <p>+91 98765 43210</p>
                  <p>Mon-Sat: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Visit Us Card - Clickable with exact Google Maps URL */}
            <div 
              className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center cursor-pointer hover:bg-[rgba(107,193,227,0.05)] transition-all duration-300" 
              onClick={handleOpenMap}
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
                <div className="relative shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <g>
                      <path
                        d={svgPaths.p25fc4100}
                        stroke="var(--stroke-0, #D1D5DB)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                      <path
                        d={svgPaths.p3e012060}
                        stroke="var(--stroke-0, #D1D5DB)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center w-full">
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[18px] tracking-[-0.45px] w-full mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[28px]">Visit Us</p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[14px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  <p>{addressLine1}</p>
                  <p>{addressLine2}</p>
                  <p>{addressLine3}</p>
                  <p>{addressLine4}</p>
                </div>
                <div className="mt-3 text-[12px]" style={{ color: '#6BC1E3' }}>
                  Click to open Google Maps →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Clickable with exact Google Maps URL */}
      <section
        className="relative shrink-0 w-full py-[60px]"
        style={{ backgroundColor: "#0A1C26" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[32px]">
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase"
              style={{ color: "#6BC1E3" }}
            >
              <p className="leading-[20px]">Location</p>
            </div>
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] tracking-[-0.9px]"
              style={{ color: "#F4F7F9" }}
            >
              <p className="leading-[36px] md:leading-[44px]">Visit Our Institute</p>
            </div>
          </div>
          
          {/* Clickable Map Container - Opens exact Google Maps URL */}
          <button 
            onClick={handleOpenMap}
            className="w-full backdrop-blur-md backdrop-filter box-border relative rounded-[16px] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl hover:shadow-[rgba(107,193,227,0.1)]"
          >
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10"
            />
            <img
              src={'/contectus_location.png'}
              alt="M CAD Solutions Location - 1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, above Kuka robotics lab, Hingane Home Colony, Karvenagar, Pune, Maharashtra 411052"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay with click indicator */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-md rounded-full px-6 py-3 flex items-center gap-3">
                <svg className="w-5 h-5" fill="#F9A825" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-white text-[16px] font-medium">Open in Google Maps</span>
              </div>
            </div>
          </button>

          {/* Address text below map - Clickable */}
          <div className="text-center mt-4">
            <button 
              onClick={handleOpenMap}
              className="group cursor-pointer hover:opacity-80 transition-opacity"
            >
              <p className="text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                {addressLine1}, {addressLine2},<br />
                {addressLine3}, {addressLine4}
              </p>
              <p className="text-[12px] leading-[18px] mt-2 group-hover:underline" style={{ color: '#6BC1E3' }}>
                📍 Click to open in Google Maps
              </p>
            </button>
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