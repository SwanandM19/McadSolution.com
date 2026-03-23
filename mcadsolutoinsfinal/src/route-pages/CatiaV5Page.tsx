import { CheckCircle2, Clock, Users, Award, BookOpen, Download, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection } from '../components/AnimatedSection';
import imgClampUnit from "../assets/d36bddc7d7069c564977ad381609e1fd625e2244.png";
const imgSlideUnit = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgRiser = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";

interface CatiaV5PageProps {
  onNavigate?: (page: string, blogId?: number) => void;
}

export function CatiaV5Page({ onNavigate }: CatiaV5PageProps) {
  const courseModules = [
    {
      title: "Foundation & Interface",
      topics: ["CATIA V5 Interface Overview", "Workbench Navigation", "File Management", "Sketcher Basics", "Constraint Management"]
    },
    {
      title: "Part Design",
      topics: ["Solid Modeling Techniques", "Pad, Pocket, Shaft Operations", "Boolean Operations", "Draft & Fillet Features", "Pattern & Mirror"]
    },
    {
      title: "Assembly Design",
      topics: ["Assembly Structure", "Constraints & Relations", "Product Structure", "Assembly Analysis", "Clash Detection"]
    },
    {
      title: "Surface Design",
      topics: ["Wireframe & Surface", "Advanced Surface Modeling", "Sweep & Loft Operations", "Multi-Section Surface", "Surface Analysis"]
    },
    {
      title: "Drafting & Documentation",
      topics: ["Drawing Creation", "Views & Projections", "Dimensioning Standards", "GD&T Annotations", "Bill of Materials"]
    },
    {
      title: "Advanced Techniques",
      topics: ["Hybrid Modeling", "Knowledge Pattern", "Power Copy", "User Defined Features", "Design Automation"]
    }
  ];

  const courseHighlights = [
    "Industry-standard CATIA V5 curriculum",
    "Hands-on projects from automotive sector",
    "Expert instructors with 10+ years experience",
    "Digital Twin integration techniques",
    "Placement assistance with partner companies",
    "Industry-recognized certification"
  ];

  const relatedBlogs = [
    {
      id: 1,
      title: 'Clamp Unit',
      excerpt: 'Understanding the design and functionality of clamp units in manufacturing systems.',
      category: 'Tutorial',
      date: 'Oct 20, 2025',
      readTime: '8 min read',
      image: imgClampUnit
    },
    {
      id: 2,
      title: 'Slide Unit',
      excerpt: 'Exploring slide unit mechanisms and their applications in automated production lines.',
      category: 'Tutorial',
      date: 'Oct 18, 2025',
      readTime: '6 min read',
      image: imgSlideUnit
    },
    {
      id: 3,
      title: 'What is RISER?',
      excerpt: 'A comprehensive guide to understanding riser systems in manufacturing and assembly processes.',
      category: 'Tutorial',
      date: 'Oct 15, 2025',
      readTime: '10 min read',
      image: imgRiser
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
                <p className="leading-[20px]">CAD Training Course</p>
              </div>
              
              <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[44px] md:leading-[56px] lg:leading-[64px] tracking-[-1.2px] md:tracking-[-1.5px]" style={{ color: '#F4F7F9' }}>
                CATIA V5 Professional Training
              </h1>
              
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[28px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                Master the industry-leading CAD software used by top automotive, aerospace, and manufacturing companies worldwide. Learn from experts and work on real industry projects.
              </p>

              {/* Course Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] mt-[16px]">
                <div className="backdrop-blur-md backdrop-filter box-border p-[16px] md:p-[20px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[4px]">
                    <Clock className="w-[20px] h-[20px] mb-[4px]" style={{ color: '#F9A825' }} />
                    <div className="text-[13px] leading-[18px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Duration
                    </div>
                    <div className="text-[18px] leading-[1.2] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                      3-6 Months
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md backdrop-filter box-border p-[16px] md:p-[20px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[4px]">
                    <Users className="w-[20px] h-[20px] mb-[4px]" style={{ color: '#F9A825' }} />
                    <div className="text-[13px] leading-[18px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Batch Size
                    </div>
                    <div className="text-[18px] leading-[1.2] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                      10-15
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md backdrop-filter box-border p-[16px] md:p-[20px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[4px]">
                    <BookOpen className="w-[20px] h-[20px] mb-[4px]" style={{ color: '#F9A825' }} />
                    <div className="text-[13px] leading-[18px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Level
                    </div>
                    <div className="text-[18px] leading-[1.2] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                      All Levels
                    </div>
                  </div>
                </div>

                <div className="backdrop-blur-md backdrop-filter box-border p-[16px] md:p-[20px] relative rounded-[12px]">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                  <div className="flex flex-col gap-[4px]">
                    <Award className="w-[20px] h-[20px] mb-[4px]" style={{ color: '#F9A825' }} />
                    <div className="text-[13px] leading-[18px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      Certification
                    </div>
                    <div className="text-[18px] leading-[1.2] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                      Yes
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-[12px] mt-[16px]">
                <button 
                  onClick={() => onNavigate?.('contact')}
                  className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[32px] py-[18px] relative rounded-[9999px] hover:opacity-90 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
                  }}
                >
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap text-white">
                    <p className="leading-[24px] whitespace-pre">Enroll Now</p>
                  </div>
                </button>
                
                <button 
                  className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center gap-[8px] justify-center px-[32px] py-[18px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors"
                >
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  <Download className="w-[16px] h-[16px]" style={{ color: '#F4F7F9' }} />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                    <p className="leading-[24px] whitespace-pre">Download Brochure</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 relative max-w-[540px] w-full">
              <div className="relative rounded-[16px] md:rounded-[24px] overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWQlMjBzb2Z0d2FyZSUyMGRlc2lnbnxlbnwwfHx8fDE3NDA3NTI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="CATIA V5 Training"
                  className="w-full h-[300px] md:h-[400px] lg:h-[480px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Why Choose This Course</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]\">Course Highlights</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {courseHighlights.map((highlight, index) => (
              <div 
                key={index}
                className="backdrop-blur-md backdrop-filter box-border flex items-start gap-[12px] p-[24px] relative rounded-[12px] hover:border-[rgba(107,193,227,0.3)] transition-all duration-300"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <CheckCircle2 className="w-[20px] h-[20px] shrink-0 mt-[2px]" style={{ color: '#5EEAD4' }} />
                <div className="text-[15px] leading-[22px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                  {highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">What You'll Learn</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]\">Course Curriculum</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {courseModules.map((module, index) => (
              <div 
                key={index}
                className="backdrop-blur-md backdrop-filter box-border p-[28px] md:p-[32px] relative rounded-[16px]"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                
                <div className="flex items-center gap-[12px] mb-[20px]">
                  <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[8px] px-[12px] py-[6px]">
                    <span className="text-[14px]" style={{ color: '#F9A825' }}>Module {index + 1}</span>
                  </div>
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] tracking-[-0.5px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-[28px]">{module.title}</p>
                  </div>
                </div>

                <ul className="space-y-[12px]">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-[10px]">
                      <CheckCircle2 className="w-[16px] h-[16px] shrink-0 mt-[3px]" style={{ color: '#5EEAD4' }} />
                      <span className="text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Learn More</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]\">Related Articles & Resources</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {relatedBlogs.map((blog) => (
              <article key={blog.id} className="backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.4)] h-full relative rounded-[12px] hover:bg-[rgba(0,0,0,0.6)] transition-all cursor-pointer group">
                <div className="h-full overflow-clip relative rounded-[inherit] p-[24px] flex flex-col">
                  {blog.image && (
                    <div className="mb-[20px] rounded-[8px] overflow-hidden bg-[rgba(255,255,255,0.05)]">
                      <img 
                        src={blog.image} 
                        alt={blog.title}
                        className="w-full h-[200px] object-contain"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="border rounded-[6px] px-[10px] py-[4px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)', borderColor: 'rgba(107, 193, 227, 0.3)' }}>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px]" style={{ color: '#6BC1E3' }}>
                        <p className="leading-[16px]">{blog.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start mb-[12px]">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] relative shrink-0 text-[20px] tracking-[-0.5px] transition-colors" style={{ color: '#F4F7F9' }}>
                      <p>{blog.title}</p>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start mb-[20px] flex-grow">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{blog.excerpt}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[12px] pt-[16px] border-t" style={{ borderColor: 'rgba(107, 193, 227, 0.2)' }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-[8px]">
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <g>
                              <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33333 8 1.33333C4.3181 1.33333 1.33333 4.3181 1.33333 8C1.33333 11.6819 4.3181 14.6667 8 14.6667Z" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                              <path d="M8 4V8L10.6667 9.33333" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px] text-gray-500">
                          <p className="leading-[16px]">{blog.readTime}</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px] text-gray-500">
                        <p className="leading-[16px]">{blog.date}</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => onNavigate?.('blog-detail', blog.id)}
                      className="w-full backdrop-blur backdrop-filter bg-[rgba(107,193,227,0.1)] box-border content-stretch flex items-center justify-center px-[16px] py-[10px] relative rounded-[8px] hover:bg-[rgba(107,193,227,0.2)] transition-all duration-300 cursor-pointer"
                    >
                      <div aria-hidden="true" className="absolute border border-[rgba(107,193,227,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                      <div className="flex items-center gap-[6px]">
                        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13px] text-center" style={{ color: '#6BC1E3' }}>
                          <p className="leading-[20px]">Read More</p>
                        </div>
                        <div className="relative shrink-0 size-[14px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <g>
                              <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke="#6BC1E3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] transition-colors" style={{ borderColor: 'rgba(107, 193, 227, 0.2)' }} />
              </article>
            ))}
          </div>

          <div className="text-center mt-[32px]">
            <button 
              onClick={() => onNavigate?.('blog')}
              className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[28px] py-[14px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors mx-auto"
            >
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                <p className="leading-[20px] whitespace-pre">View All Articles</p>
              </div>
              <ArrowRight className="w-[16px] h-[16px]" style={{ color: '#F4F7F9' }} />
            </button>
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
                <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]\">Ready to Start Your CATIA V5 Journey?</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[15px] md:text-[16px] max-w-[640px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p>Join India's leading Industry 4.0 training institute and learn from the best. Limited seats available for the next batch.</p>
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
                onClick={() => onNavigate?.('cad-courses')}
                className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] md:px-[32px] py-[18px] md:py-[22px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] md:text-[16px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[24px] whitespace-pre">View All Courses</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}