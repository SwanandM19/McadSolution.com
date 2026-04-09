const image_f79260a232700016ec789787727ae9b5539595db = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import svgPaths from "../imports/svg-9op1xbyva3";
const imgSection = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgClampUnit = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgSlideUnit = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgRiser = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_50df78cf249e7e1fe6c20c29a0164d1e171ce1ec = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { AnimatedSection } from "../components/AnimatedSection";

interface BlogPageProps {
  onNavigate?: (page: string, blogId?: number) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const blogPosts = [
    {
      id: 1,
      title: 'Clamp Unit',
      excerpt: 'Understanding the design and functionality of clamp units in manufacturing systems.',
      category: 'Tutorial',
      date: 'Oct 20, 2025',
      readTime: '8 min read',
      image: '/clampunitblogsnew.jpeg'
    },
    {
      id: 2,
      title: 'Slide Unit',
      excerpt: 'Exploring slide unit mechanisms and their applications in automated production lines.',
      category: 'Tutorial',
      date: 'Oct 18, 2025',
      readTime: '6 min read',
      image: '/blogslideunit.jpeg'
    },
    {
      id: 3,
      title: 'What is RISER?',
      excerpt: 'A comprehensive guide to understanding riser systems in manufacturing and assembly processes.',
      category: 'Tutorial',
      date: 'Oct 15, 2025',
      readTime: '10 min read',
      image: '/blogsriser.jpeg'
    },
    {
      id: 4,
      title: 'How Our Students Landed Jobs at Top Automotive Companies',
      excerpt: 'Success stories from M CAD Solutions alumni who are now working at leading automotive manufacturers.',
      category: 'Success Story',
      date: 'Oct 12, 2025',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'Sheet Metal Design Best Practices for Manufacturing',
      excerpt: 'Essential tips and techniques for designing sheet metal parts that are both functional and manufacturable.',
      category: 'Tutorial',
      date: 'Oct 10, 2025',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'The Future of CAD: AI and Automation in Design',
      excerpt: 'Explore how artificial intelligence is transforming the CAD industry and what it means for designers.',
      category: 'Industry Trends',
      date: 'Oct 8, 2025',
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Tutorial', 'Career', 'Success Story', 'Industry Trends', 'Comparison'];

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
        Our Blog
      </h5>

      <h1 className="text-[44px] leading-[54px] font-['Geist:Regular',sans-serif] font-normal tracking-[-1.2px]">
        Insights & Resources
      </h1>

      <p className="text-[18px] leading-[28px] text-gray-300 max-w-[520px]">
        Expert tips, tutorials, and industry insights to help you succeed in your CAD career.
      </p>
    </div>

    {/* Right Image Card */}
    <div className="flex-1 relative max-w-[480px] w-full">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
        <img
          src={'/blogsinsightsandresources.png'}
          alt="CAD Training Preview"
          className="w-full h-[380px] object-cover"
        />
      </div>
    </div>
  </AnimatedSection>
</section>

      {/* Categories Filter */}
      <section className="relative shrink-0 w-full py-[40px] border-b" style={{ backgroundColor: '#0A1C26', borderColor: 'rgba(107, 193, 227, 0.2)' }}>
        <AnimatedSection className="max-w-[1280px] mx-auto px-[32px]">
          <div className="flex gap-[12px] items-center justify-center flex-wrap">
            {categories.map((category, index) => (
              <button
                key={index}
                className="box-border content-stretch flex items-center px-[16px] py-[8px] relative rounded-[9999px] shrink-0"
                style={{
                  background: index === 0 ? 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' : 'rgba(255,255,255,0.1)',
                  border: index === 0 ? 'none' : '1px solid rgba(255,255,255,0.1)'
                }}
              >
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: index === 0 ? '#F4F7F9' : 'rgba(244, 247, 249, 0.8)' }}>
                  <p className="leading-[20px] whitespace-pre">{category}</p>
                </div>
              </button>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <AnimatedSection className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.id} className="backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.4)] h-full relative rounded-[12px] hover:bg-[rgba(0,0,0,0.6)] transition-all cursor-pointer group">
                <div className="h-full overflow-clip relative rounded-[inherit] p-[24px] flex flex-col">
                  {post.image && (
                    <div className="mb-[20px] rounded-[8px] overflow-hidden bg-[rgba(255,255,255,0.05)]">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-[200px] object-contain"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-[16px]">
                    <div className="border rounded-[6px] px-[10px] py-[4px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)', borderColor: 'rgba(107, 193, 227, 0.3)' }}>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px]" style={{ color: '#6BC1E3' }}>
                        <p className="leading-[16px]">{post.category}</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start mb-[12px]">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] relative shrink-0 text-[20px] tracking-[-0.5px] transition-colors" style={{ color: '#F4F7F9' }}>
                      <p>{post.title}</p>
                    </div>
                  </div>

                  <div className="content-stretch flex flex-col items-start mb-[20px] flex-grow">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{post.excerpt}</p>
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
                          <p className="leading-[16px]">{post.readTime}</p>
                        </div>
                      </div>
                      <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px] text-gray-500">
                        <p className="leading-[16px]">{post.date}</p>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => onNavigate?.('blog-detail', post.id)}
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

          {/* Load More Button */}
          <div className="flex justify-center mt-[48px]">
            <button className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center px-[24px] py-[12px] relative rounded-[9999px] shrink-0 hover:bg-[rgba(255,255,255,0.15)] transition-colors">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap" style={{ color: '#F4F7F9' }}>
                <p className="leading-[20px] whitespace-pre">Load More Articles</p>
              </div>
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g>
                    <path d="M8 3.33333V12.6667" stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p25713000} stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        </AnimatedSection>
      </section>

      {/* Newsletter Section */}
      <section className="relative shrink-0 w-full py-[80px] border-t" style={{ backgroundColor: '#092B38', borderColor: 'rgba(107, 193, 227, 0.2)' }}>
        <AnimatedSection className="max-w-[768px] mx-auto px-[32px]">
          <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[24px] items-center p-[40px] relative rounded-[16px] text-center">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            
            <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
              <div className="relative shrink-0 size-[24px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <g>
                    <path d={svgPaths.p363df2c0} stroke="var(--stroke-0, #D1D5DB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="content-stretch flex flex-col items-center w-full">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[24px] tracking-[-0.6px] w-full mb-[8px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[32px]">Subscribe to Our Newsletter</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px] w-full" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p>Get the latest CAD tutorials, career tips, and industry insights delivered to your inbox.</p>
              </div>
            </div>

            <div className="flex gap-[12px] items-center w-full max-w-[480px]">
              <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[8px] flex-grow">
                <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="box-border content-stretch flex items-start justify-center px-[13px] py-[11px] relative w-full">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full bg-transparent border-none outline-none font-['Inter:Regular',_sans-serif] font-normal text-[16px] placeholder:text-gray-500"
                      style={{ color: '#F4F7F9' }}
                    />
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </div>
              <button className="relative rounded-[9999px] transition-colors" style={{ background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)' }}>
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex items-center justify-center px-[20px] py-[11px] relative">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] text-center" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[20px]">Subscribe</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}