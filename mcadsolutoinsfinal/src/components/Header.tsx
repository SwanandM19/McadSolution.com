// 'use client';
// import { useState } from 'react';
// import { Menu, X, Phone, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

// interface HeaderProps {
//   currentPage: string;
//   onNavigate: (page: string) => void;
// }

// export function Header({ currentPage, onNavigate }: HeaderProps) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isStudentSectionOpen, setIsStudentSectionOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'about', label: 'About Us' },
//     { id: 'industry4', label: 'Industry 4.0', isFeatured: true },
//     { id: 'cad-courses', label: 'CAD Courses' },
//     { id: 'domain-courses', label: 'Domain Courses', hasDropdown: true },
//     { id: 'student-section', label: 'Student Section', hasStudentDropdown: true },
//     { id: 'contact', label: 'Contact Us' },
//     { id: 'blog', label: 'Blog' },
//   ];

//   const domainCourseDropdownItems = [
//     { id: 'biw-fixture-design', label: 'BIW Fixture Design' },
//     { id: 'interior-plastic', label: 'Automotive Interior Plastic Trims' },
//     { id: 'robotics', label: 'Robotics Simulation' },
//   ];

//   const studentSectionDropdownItems = [
//     { id: 'placements', label: 'Placements' },
//     { id: 'careers', label: 'Careers' },
//     { id: 'tie-ups', label: 'Tie-ups' },
//   ];

//   return (
//     <header className="sticky backdrop-blur-[6px] backdrop-filter box-border content-stretch flex flex-col items-center left-0 top-0 w-full z-50" style={{ backgroundColor: 'rgba(10, 28, 38, 0.7)' }}>
//       <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid inset-0 pointer-events-none" style={{ borderColor: 'rgba(107, 193, 227, 0.2)' }} />
//       <nav className="box-border content-stretch flex flex-col h-[64px] items-start justify-center max-w-[1280px] w-full px-[16px] md:px-[32px] py-0">
//         <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full">
//           <button 
//             onClick={() => onNavigate('home')}
//             className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap cursor-pointer hover:opacity-80 transition-opacity mr-[48px]"
//             style={{ color: '#F4F7F9' }}
//           >
//             <img 
//               src="/d-removebg-preview.png" 
//               alt="MCAD Solutions" 
//               className="h-[40px] w-auto"
//             />
//           </button>
          
//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex content-stretch gap-[4px] items-center relative shrink-0">
//             {navItems.map((item) => (
//               item.hasDropdown ? (
//                 <div 
//                   key={item.id}
//                   className="relative"
//                 >
//                   <button
//                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     className="box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer transition-all"
//                     style={{
//                       backgroundColor: currentPage === item.id || currentPage === 'biw-fixture-design' || currentPage === 'interior-plastic' || currentPage === 'robotics' ? 'rgba(107, 193, 227, 0.15)' : 'transparent'
//                     }}
//                   >
//                     <div className="flex items-center gap-[4px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: currentPage === item.id || currentPage === 'biw-fixture-design' || currentPage === 'interior-plastic' || currentPage === 'robotics' ? '#6BC1E3' : '#F4F7F9' }}>
//                         <p className="leading-[20px] whitespace-pre">{item.label}</p>
//                       </div>
//                       <svg className={`w-[12px] h-[12px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12">
//                         <path d="M3 4.5L6 7.5L9 4.5" stroke={currentPage === item.id || currentPage === 'biw-fixture-design' || currentPage === 'interior-plastic' || currentPage === 'robotics' ? '#6BC1E3' : '#F4F7F9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                       </svg>
//                     </div>
//                   </button>
                  
//                   {/* Dropdown Menu */}
//                   {isDropdownOpen && (
//                     <div className="absolute top-full left-0 mt-[8px] min-w-[260px] backdrop-blur-md backdrop-filter rounded-[8px] py-[8px] z-50" style={{ backgroundColor: 'rgba(10, 28, 38, 0.95)' }}>
//                       <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
//                       <div className="relative">
//                         {domainCourseDropdownItems.map((dropdownItem, index) => (
//                           <div key={dropdownItem.id}>
//                             <button
//                               onClick={() => {
//                                 onNavigate(dropdownItem.id);
//                                 setIsDropdownOpen(false);
//                               }}
//                               className="w-full text-left px-[16px] py-[10px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
//                             >
//                               <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: currentPage === dropdownItem.id ? '#6BC1E3' : '#F4F7F9' }}>
//                                 <p className="leading-[20px]">{dropdownItem.label}</p>
//                               </div>
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : item.hasStudentDropdown ? (
//                 <div 
//                   key={item.id}
//                   className="relative"
//                 >
//                   <button
//                     onClick={() => setIsStudentSectionOpen(!isStudentSectionOpen)}
//                     className="box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer transition-all"
//                     style={{
//                       backgroundColor: currentPage === item.id || currentPage === 'placements' || currentPage === 'careers' || currentPage === 'tie-ups' ? 'rgba(107, 193, 227, 0.15)' : 'transparent'
//                     }}
//                   >
//                     <div className="flex items-center gap-[4px]">
//                       <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: currentPage === item.id || currentPage === 'placements' || currentPage === 'careers' || currentPage === 'tie-ups' ? '#6BC1E3' : '#F4F7F9' }}>
//                         <p className="leading-[20px] whitespace-pre">{item.label}</p>
//                       </div>
//                       <svg className={`w-[12px] h-[12px] transition-transform ${isStudentSectionOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12">
//                         <path d="M3 4.5L6 7.5L9 4.5" stroke={currentPage === item.id || currentPage === 'placements' || currentPage === 'careers' || currentPage === 'tie-ups' ? '#6BC1E3' : '#F4F7F9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                       </svg>
//                     </div>
//                   </button>
                  
//                   {/* Dropdown Menu */}
//                   {isStudentSectionOpen && (
//                     <div className="absolute top-full left-0 mt-[8px] min-w-[260px] backdrop-blur-md backdrop-filter rounded-[8px] py-[8px] z-50" style={{ backgroundColor: 'rgba(10, 28, 38, 0.95)' }}>
//                       <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
//                       <div className="relative">
//                         {studentSectionDropdownItems.map((dropdownItem, index) => (
//                           <div key={dropdownItem.id}>
//                             <button
//                               onClick={() => {
//                                 onNavigate(dropdownItem.id);
//                                 setIsStudentSectionOpen(false);
//                               }}
//                               className="w-full text-left px-[16px] py-[10px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
//                             >
//                               <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: currentPage === dropdownItem.id ? '#6BC1E3' : '#F4F7F9' }}>
//                                 <p className="leading-[20px]">{dropdownItem.label}</p>
//                               </div>
//                             </button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ) : item.isFeatured ? (
//                 <button
//                   key={item.id}
//                   onClick={() => onNavigate(item.id)}
//                   className="box-border content-stretch flex flex-col items-start px-[14px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer transition-all hover:scale-105"
//                   style={{
//                     backgroundColor: currentPage === item.id ? 'rgba(249, 168, 37, 0.2)' : 'rgba(249, 168, 37, 0.1)'
//                   }}
//                 >
//                   <div className="flex items-center gap-[6px]">
//                     <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: '#F9A825' }}>
//                       <p className="leading-[20px] whitespace-pre">{item.label}</p>
//                     </div>
//                     <span className="text-[10px] px-[6px] py-[2px] rounded-[4px] uppercase tracking-[0.5px]" style={{ backgroundColor: '#F9A825', color: '#0A1C26' }}>New</span>
//                   </div>
//                 </button>
//               ) : (
//                 <button
//                   key={item.id}
//                   onClick={() => onNavigate(item.id)}
//                   className="box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(255,255,255,0.05)]"
//                   style={{
//                     backgroundColor: currentPage === item.id ? 'rgba(107, 193, 227, 0.15)' : 'transparent'
//                   }}
//                 >
//                   <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: currentPage === item.id ? '#6BC1E3' : '#F4F7F9' }}>
//                     <p className="leading-[20px] whitespace-pre">{item.label}</p>
//                   </div>
//                 </button>
//               )
//             ))}
//           </div>
          
//           {/* Desktop Social Media Icons + Join Now Button */}
//           <div className="hidden lg:flex items-center gap-[12px]">
//             {/* Social Media Icons */}
//             <div className="flex items-center gap-[8px]">
//               <a 
//                 href="tel:+919876543210" 
//                 className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
//                 aria-label="Call us"
//               >
//                 <Phone className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
//               </a>
//               <a 
//                 href="https://instagram.com/mcadsolutions" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
//               </a>
//               <a 
//                 href="https://linkedin.com/company/mcadsolutions" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
//               </a>
//               <a 
//                 href="https://facebook.com/mcadsolutions" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
//               </a>
//               <a 
//                 href="https://youtube.com/@mcadsolutions" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
//                 aria-label="YouTube"
//               >
//                 <Youtube className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
//               </a>
//             </div>
            
//             {/* Join Now Button */}
//             <button 
//               onClick={() => onNavigate('contact')}
//               className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 cursor-pointer hover:scale-105 transition-transform"
//               style={{
//                 background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
//               }}
//             >
//               <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: '#F4F7F9' }}>
//                 <p className="leading-[20px] whitespace-pre">Join Now</p>
//               </div>
//             </button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="lg:hidden p-[8px] rounded-[6px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors"
//             style={{ color: '#F4F7F9' }}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden w-full backdrop-blur-md backdrop-filter" style={{ backgroundColor: 'rgba(10, 28, 38, 0.95)' }}>
//           <div className="px-[16px] py-[16px] flex flex-col gap-[8px]">
//             {navItems.map((item) => (
//               <div key={item.id}>
//                 <button
//                   onClick={() => {
//                     onNavigate(item.id);
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="w-full text-left px-[12px] py-[10px] rounded-[6px] cursor-pointer transition-colors"
//                   style={{
//                     backgroundColor: currentPage === item.id || (item.hasDropdown && (currentPage === 'biw-fixture-design' || currentPage === 'interior-plastic' || currentPage === 'robotics')) ? 'rgba(107, 193, 227, 0.15)' : 'transparent',
//                     color: currentPage === item.id || (item.hasDropdown && (currentPage === 'biw-fixture-design' || currentPage === 'interior-plastic' || currentPage === 'robotics')) ? '#6BC1E3' : '#F4F7F9'
//                   }}
//                 >
//                   {item.label}
//                 </button>
//                 {item.hasDropdown && (
//                   <div className="ml-[16px] mt-[4px] flex flex-col gap-[4px]">
//                     {domainCourseDropdownItems.map((dropdownItem) => (
//                       <button
//                         key={dropdownItem.id}
//                         onClick={() => {
//                           onNavigate(dropdownItem.id);
//                           setIsMobileMenuOpen(false);
//                         }}
//                         className="w-full text-left px-[12px] py-[8px] rounded-[6px] text-[14px] cursor-pointer transition-colors hover:bg-[rgba(107,193,227,0.1)]"
//                         style={{
//                           backgroundColor: currentPage === dropdownItem.id ? 'rgba(107, 193, 227, 0.15)' : 'transparent',
//                           color: currentPage === dropdownItem.id ? '#6BC1E3' : 'rgba(244, 247, 249, 0.8)'
//                         }}
//                       >
//                         {dropdownItem.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//                 {item.hasStudentDropdown && (
//                   <div className="ml-[16px] mt-[4px] flex flex-col gap-[4px]">
//                     {studentSectionDropdownItems.map((dropdownItem) => (
//                       <button
//                         key={dropdownItem.id}
//                         onClick={() => {
//                           onNavigate(dropdownItem.id);
//                           setIsMobileMenuOpen(false);
//                         }}
//                         className="w-full text-left px-[12px] py-[8px] rounded-[6px] text-[14px] cursor-pointer transition-colors hover:bg-[rgba(107,193,227,0.1)]"
//                         style={{
//                           backgroundColor: currentPage === dropdownItem.id ? 'rgba(107, 193, 227, 0.15)' : 'transparent',
//                           color: currentPage === dropdownItem.id ? '#6BC1E3' : 'rgba(244, 247, 249, 0.8)'
//                         }}
//                       >
//                         {dropdownItem.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//             {/* Social Media Icons Mobile */}
//             <div className="flex items-center justify-center gap-[16px] mt-[8px] mb-[8px]">
//               <a 
//                 href="tel:+919876543210" 
//                 className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
//                 aria-label="Call us"
//               >
//                 <Phone className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
//               </a>
//               <a 
//                 href="https://instagram.com/mcadsolutions" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
//                 aria-label="Instagram"
//               >
//                 <Instagram className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
//               </a>
//               <a 
//                 href="https://linkedin.com/company/mcadsolutions" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
//                 aria-label="LinkedIn"
//               >
//                 <Linkedin className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
//               </a>
//               <a 
//                 href="https://facebook.com/mcadsolutions" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
//                 aria-label="Facebook"
//               >
//                 <Facebook className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
//               </a>
//               <a 
//                 href="https://youtube.com/@mcadsolutions" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
//                 aria-label="YouTube"
//               >
//                 <Youtube className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
//               </a>
//             </div>
            
//             <button 
//               onClick={() => {
//                 onNavigate('contact');
//                 setIsMobileMenuOpen(false);
//               }}
//               className="w-full mt-[8px] box-border content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[9999px] cursor-pointer hover:scale-105 transition-transform"
//               style={{
//                 background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
//               }}
//             >
//               <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: '#F4F7F9' }}>
//                 <p className="leading-[20px] whitespace-pre">Join Now</p>
//               </div>
//             </button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }



'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';

export function Header() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStudentSectionOpen, setIsStudentSectionOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Route mapping
  const getRoute = (id: string) => {
    const routes: { [key: string]: string } = {
      'home': '/',
      'about': '/about',
      'industry4': '/industry4',
      'cad-courses': '/cad-courses',
      'domain-courses': '/domain-courses',
      'biw-fixture-design': '/biw-fixture-design',
      'interior-plastic': '/interior-plastic',
      'robotics-simulation': '/robotics-simulation',
      'placements': '/placements',
      'careers': '/careers',
      'tie-ups': '/tie-ups',
      'contact': '/contact',
      'blog': '/blog',
    };
    return routes[id] || '/';
  };

  const isActive = (id: string) => {
    const route = getRoute(id);
    if (route === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(route);
  };

  const isDropdownActive = () => {
    return isActive('biw-fixture-design') || isActive('interior-plastic') || isActive('robotics-simulation');
  };

  const isStudentSectionActive = () => {
    return isActive('placements') || isActive('careers') || isActive('tie-ups');
  };

  const navItems = [
    { id: 'home', label: 'Home', route: getRoute('home') },
    { id: 'about', label: 'About Us', route: getRoute('about') },
    { id: 'industry4', label: 'Industry 4.0', isFeatured: true, route: getRoute('industry4') },
    { id: 'cad-courses', label: 'CAD Courses', route: getRoute('cad-courses') },
    { id: 'domain-courses', label: 'Domain Courses', hasDropdown: true },
    { id: 'student-section', label: 'Student Section', hasStudentDropdown: true },
    { id: 'contact', label: 'Contact Us', route: getRoute('contact') },
    { id: 'blog', label: 'Blog', route: getRoute('blog') },
  ];

  const domainCourseDropdownItems = [
    { id: 'biw-fixture-design', label: 'BIW Fixture Design', route: getRoute('biw-fixture-design') },
    { id: 'interior-plastic', label: 'Automotive Interior Plastic Trims', route: getRoute('interior-plastic') },
    { id: 'robotics-simulation', label: 'Robotics Simulation', route: getRoute('robotics-simulation') },
  ];

  const studentSectionDropdownItems = [
    { id: 'placements', label: 'Placements', route: getRoute('placements') },
    { id: 'careers', label: 'Careers', route: getRoute('careers') },
    { id: 'tie-ups', label: 'Tie-ups', route: getRoute('tie-ups') },
  ];

  return (
    <header className="sticky backdrop-blur-[6px] backdrop-filter box-border content-stretch flex flex-col items-center left-0 top-0 w-full z-50" style={{ backgroundColor: 'rgba(10, 28, 38, 0.95)' }}>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-solid inset-0 pointer-events-none" style={{ borderColor: 'rgba(107, 193, 227, 0.2)' }} />
      <nav className="box-border content-stretch flex flex-col h-[64px] items-start justify-center max-w-[1280px] w-full px-[16px] md:px-[32px] py-0">
        <div className="basis-0 content-stretch flex grow items-center justify-between min-h-px min-w-px relative shrink-0 w-full">
          <Link 
            href="/"
            className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap cursor-pointer hover:opacity-80 transition-opacity mr-[48px] mb-[9px]"
            style={{ color: '#F4F7F9' }}
          >
            <img 
              src="/d-removebg-preview.png" 
              alt="MCAD Solutions" 
              className="h-[40px] w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex content-stretch gap-[4px] items-center relative shrink-0">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div 
                  key={item.id}
                  className="relative"
                >
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer transition-all"
                    style={{
                      backgroundColor: isDropdownActive() ? 'rgba(107, 193, 227, 0.15)' : 'transparent'
                    }}
                  >
                    <div className="flex items-center gap-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: isDropdownActive() ? '#6BC1E3' : '#F4F7F9' }}>
                        <p className="leading-[20px] whitespace-pre">{item.label}</p>
                      </div>
                      <svg className={`w-[12px] h-[12px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke={isDropdownActive() ? '#6BC1E3' : '#F4F7F9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-[8px] min-w-[260px] backdrop-blur-md backdrop-filter rounded-[8px] py-[8px] z-50" style={{ backgroundColor: '#0A1C26' }}>
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="relative">
                        {domainCourseDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            href={dropdownItem.route}
                            onClick={() => setIsDropdownOpen(false)}
                            className="block w-full text-left px-[16px] py-[10px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
                          >
                            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: isActive(dropdownItem.id) ? '#6BC1E3' : '#F4F7F9' }}>
                              <p className="leading-[20px]">{dropdownItem.label}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.hasStudentDropdown ? (
                <div 
                  key={item.id}
                  className="relative"
                >
                  <button
                    onClick={() => setIsStudentSectionOpen(!isStudentSectionOpen)}
                    className="box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer transition-all"
                    style={{
                      backgroundColor: isStudentSectionActive() ? 'rgba(107, 193, 227, 0.15)' : 'transparent'
                    }}
                  >
                    <div className="flex items-center gap-[4px]">
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: isStudentSectionActive() ? '#6BC1E3' : '#F4F7F9' }}>
                        <p className="leading-[20px] whitespace-pre">{item.label}</p>
                      </div>
                      <svg className={`w-[12px] h-[12px] transition-transform ${isStudentSectionOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke={isStudentSectionActive() ? '#6BC1E3' : '#F4F7F9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isStudentSectionOpen && (
                    <div className="absolute top-full left-0 mt-[8px] min-w-[260px] backdrop-blur-md backdrop-filter rounded-[8px] py-[8px] z-50" style={{ backgroundColor: '#0A1C26' }}>
                      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="relative">
                        {studentSectionDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            href={dropdownItem.route}
                            onClick={() => setIsStudentSectionOpen(false)}
                            className="block w-full text-left px-[16px] py-[10px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
                          >
                            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px]" style={{ color: isActive(dropdownItem.id) ? '#6BC1E3' : '#F4F7F9' }}>
                              <p className="leading-[20px]">{dropdownItem.label}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : item.isFeatured ? (
                <Link
                  key={item.id}
                  href={item.route || '/'}
                  className="box-border content-stretch flex flex-col items-start px-[14px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer transition-all hover:scale-105"
                  style={{
                    backgroundColor: isActive(item.id) ? 'rgba(249, 168, 37, 0.2)' : 'rgba(249, 168, 37, 0.1)'
                  }}
                >
                  <div className="flex items-center gap-[6px]">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: '#F9A825' }}>
                      <p className="leading-[20px] whitespace-pre">{item.label}</p>
                    </div>
                    <span className="text-[10px] px-[6px] py-[2px] rounded-[4px] uppercase tracking-[0.5px]" style={{ backgroundColor: '#F9A825', color: '#0A1C26' }}>New</span>
                  </div>
                </Link>
              ) : (
                <Link
                  key={item.id}
                  href={item.route || '/'}
                  className="box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[6px] shrink-0 cursor-pointer transition-colors hover:bg-[rgba(255,255,255,0.05)]"
                  style={{
                    backgroundColor: isActive(item.id) ? 'rgba(107, 193, 227, 0.15)' : 'transparent'
                  }}
                >
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: isActive(item.id) ? '#6BC1E3' : '#F4F7F9' }}>
                    <p className="leading-[20px] whitespace-pre">{item.label}</p>
                  </div>
                </Link>
              )
            ))}
          </div>
          
          {/* Desktop Social Media Icons + Join Now Button */}
          <div className="hidden lg:flex items-center gap-[12px]">
            {/* Social Media Icons */}
            <div className="flex items-center gap-[8px]">
              <a 
                href="tel:+919876543210" 
                className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
                aria-label="Call us"
              >
                <Phone className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
              </a>
              <a 
                href="https://instagram.com/mcadsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
              </a>
              <a 
                href="https://linkedin.com/company/mcadsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
              </a>
              <a 
                href="https://facebook.com/mcadsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
              </a>
              <a 
                href="https://youtube.com/@mcadsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[8px] rounded-[6px] hover:bg-[rgba(107,193,227,0.1)] transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <Youtube className="w-[18px] h-[18px]" style={{ color: '#6BC1E3' }} />
              </a>
            </div>
            
            {/* Join Now Button */}
            <Link 
              href={getRoute('contact')}
              className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0 cursor-pointer hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
              }}
            >
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: '#F4F7F9' }}>
                <p className="leading-[20px] whitespace-pre">Join Now</p>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-[8px] rounded-[6px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors"
            style={{ color: '#F4F7F9' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden w-full backdrop-blur-md backdrop-filter" style={{ backgroundColor: '#0A1C26' }}>
          <div className="px-[16px] py-[16px] flex flex-col gap-[8px]">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full text-left px-[12px] py-[10px] rounded-[6px] cursor-pointer transition-colors flex items-center justify-between"
                      style={{
                        backgroundColor: isDropdownActive() ? 'rgba(107, 193, 227, 0.15)' : 'transparent',
                        color: isDropdownActive() ? '#6BC1E3' : '#F4F7F9'
                      }}
                    >
                      {item.label}
                      <svg className={`w-[12px] h-[12px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke={isDropdownActive() ? '#6BC1E3' : '#F4F7F9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isDropdownOpen && (
                      <div className="ml-[16px] mt-[4px] flex flex-col gap-[4px]">
                        {domainCourseDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            href={dropdownItem.route}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full text-left px-[12px] py-[8px] rounded-[6px] text-[14px] cursor-pointer transition-colors hover:bg-[rgba(107,193,227,0.1)]"
                            style={{
                              backgroundColor: isActive(dropdownItem.id) ? 'rgba(107, 193, 227, 0.15)' : 'transparent',
                              color: isActive(dropdownItem.id) ? '#6BC1E3' : 'rgba(244, 247, 249, 0.8)'
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.hasStudentDropdown ? (
                  <>
                    <button
                      onClick={() => setIsStudentSectionOpen(!isStudentSectionOpen)}
                      className="w-full text-left px-[12px] py-[10px] rounded-[6px] cursor-pointer transition-colors flex items-center justify-between"
                      style={{
                        backgroundColor: isStudentSectionActive() ? 'rgba(107, 193, 227, 0.15)' : 'transparent',
                        color: isStudentSectionActive() ? '#6BC1E3' : '#F4F7F9'
                      }}
                    >
                      {item.label}
                      <svg className={`w-[12px] h-[12px] transition-transform ${isStudentSectionOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 12 12">
                        <path d="M3 4.5L6 7.5L9 4.5" stroke={isStudentSectionActive() ? '#6BC1E3' : '#F4F7F9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {isStudentSectionOpen && (
                      <div className="ml-[16px] mt-[4px] flex flex-col gap-[4px]">
                        {studentSectionDropdownItems.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            href={dropdownItem.route}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full text-left px-[12px] py-[8px] rounded-[6px] text-[14px] cursor-pointer transition-colors hover:bg-[rgba(107,193,227,0.1)]"
                            style={{
                              backgroundColor: isActive(dropdownItem.id) ? 'rgba(107, 193, 227, 0.15)' : 'transparent',
                              color: isActive(dropdownItem.id) ? '#6BC1E3' : 'rgba(244, 247, 249, 0.8)'
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.route || '/'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-left px-[12px] py-[10px] rounded-[6px] cursor-pointer transition-colors block"
                    style={{
                      backgroundColor: isActive(item.id) ? 'rgba(107, 193, 227, 0.15)' : 'transparent',
                      color: isActive(item.id) ? '#6BC1E3' : '#F4F7F9'
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            {/* Social Media Icons Mobile */}
            <div className="flex items-center justify-center gap-[16px] mt-[8px] mb-[8px]">
              <a 
                href="tel:+919876543210" 
                className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
                aria-label="Call us"
              >
                <Phone className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
              </a>
              <a 
                href="https://instagram.com/mcadsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
              </a>
              <a 
                href="https://linkedin.com/company/mcadsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
              </a>
              <a 
                href="https://facebook.com/mcadsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
              </a>
              <a 
                href="https://youtube.com/@mcadsolutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-[8px] rounded-[6px] bg-[rgba(107,193,227,0.1)] cursor-pointer hover:bg-[rgba(107,193,227,0.2)] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-[20px] h-[20px]" style={{ color: '#6BC1E3' }} />
              </a>
            </div>
            
            <Link 
              href={getRoute('contact')}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full mt-[8px] box-border content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[9999px] cursor-pointer hover:scale-105 transition-transform"
              style={{
                background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
              }}
            >
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: '#F4F7F9' }}>
                <p className="leading-[20px] whitespace-pre">Join Now</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}