import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
const imgClampUnit = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgSlideUnit = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgRiser = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { AnimatedSection } from "../components/AnimatedSection";

interface BlogDetailPageProps {
  blogId?: number;
  onNavigate?: (page: string, blogId?: number) => void;
}

export function BlogDetailPage({ blogId = 1, onNavigate }: BlogDetailPageProps) {
  const blogPosts = [
    {
      id: 1,
      title: 'Clamp Unit',
      content: `
        <h2>Understanding Clamp Units in Manufacturing</h2>
        <p>Clamp units are essential components in modern manufacturing and assembly systems. They provide the necessary holding force to secure workpieces during various operations such as welding, machining, and assembly.</p>
        
        <h3>Key Features of Clamp Units</h3>
        <ul>
          <li><strong>High Clamping Force:</strong> Modern clamp units can provide substantial holding forces while maintaining compact dimensions.</li>
          <li><strong>Quick Operation:</strong> Pneumatic and hydraulic systems enable rapid clamping and unclamping cycles.</li>
          <li><strong>Precision Positioning:</strong> Ensures consistent workpiece location for repeatable manufacturing processes.</li>
          <li><strong>Durability:</strong> Built to withstand continuous industrial use in demanding environments.</li>
        </ul>

        <h3>Types of Clamp Units</h3>
        <p>There are several types of clamp units commonly used in manufacturing:</p>
        <ul>
          <li><strong>Swing Clamps:</strong> Rotate around a pivot point to clamp workpieces from the side.</li>
          <li><strong>Toggle Clamps:</strong> Use a lever mechanism for quick manual operation.</li>
          <li><strong>Pneumatic Clamps:</strong> Powered by compressed air for automated clamping.</li>
          <li><strong>Hydraulic Clamps:</strong> Utilize hydraulic pressure for high-force applications.</li>
        </ul>

        <h3>Design Considerations</h3>
        <p>When designing clamp units for your fixtures, consider:</p>
        <ul>
          <li>Required clamping force and stroke length</li>
          <li>Workpiece geometry and material</li>
          <li>Accessibility for loading and unloading</li>
          <li>Integration with automation systems</li>
          <li>Maintenance and replacement requirements</li>
        </ul>

        <h3>Applications in BIW Fixture Design</h3>
        <p>In Body-In-White (BIW) fixture design, clamp units play a crucial role in holding sheet metal panels during the welding process. They must provide consistent pressure while allowing for thermal expansion and preventing deformation of the workpiece.</p>
      `,
      category: 'Tutorial',
      date: 'Oct 20, 2025',
      readTime: '8 min read',
      image: imgClampUnit,
      author: 'M CAD Solutions Team'
    },
    {
      id: 2,
      title: 'Slide Unit',
      content: `
        <h2>Exploring Slide Unit Mechanisms</h2>
        <p>Slide units are fundamental components in automated production lines and fixture design. They provide linear motion capabilities essential for positioning, material handling, and assembly operations.</p>
        
        <h3>What is a Slide Unit?</h3>
        <p>A slide unit is a mechanical assembly that enables controlled linear movement of components along a guided path. These units combine precision bearings, guideways, and actuation mechanisms to deliver smooth, accurate motion in manufacturing applications.</p>

        <h3>Key Components</h3>
        <ul>
          <li><strong>Linear Guides:</strong> Provide low-friction movement and support loads in multiple directions.</li>
          <li><strong>Drive Mechanism:</strong> Can be pneumatic, hydraulic, or electric depending on application requirements.</li>
          <li><strong>Mounting Plates:</strong> Allow for easy integration with existing fixtures and equipment.</li>
          <li><strong>Position Sensors:</strong> Enable precise control and monitoring of slide position.</li>
        </ul>

        <h3>Types of Slide Units</h3>
        <p>Different types of slide units serve various industrial needs:</p>
        <ul>
          <li><strong>Pneumatic Slide Units:</strong> Ideal for rapid, short-stroke applications with moderate loads.</li>
          <li><strong>Ball Screw Slides:</strong> Provide high precision and load capacity for demanding applications.</li>
          <li><strong>Linear Motor Slides:</strong> Offer the highest speed and precision for advanced manufacturing.</li>
          <li><strong>Belt-Driven Slides:</strong> Cost-effective solution for longer stroke lengths.</li>
        </ul>

        <h3>Design Best Practices</h3>
        <p>When incorporating slide units into your designs:</p>
        <ul>
          <li>Calculate load requirements including static and dynamic forces</li>
          <li>Consider environmental factors like dust, moisture, and temperature</li>
          <li>Ensure adequate space for stroke length and mounting</li>
          <li>Plan for maintenance access and component replacement</li>
          <li>Integrate safety features and limit switches</li>
        </ul>

        <h3>Applications in Automation</h3>
        <p>Slide units are extensively used in automotive assembly lines, robotics, material handling systems, and precision machining operations. Their versatility and reliability make them indispensable in modern manufacturing.</p>
      `,
      category: 'Tutorial',
      date: 'Oct 18, 2025',
      readTime: '6 min read',
      image: imgSlideUnit,
      author: 'M CAD Solutions Team'
    },
    {
      id: 3,
      title: 'What is RISER?',
      content: `
        <h2>Understanding Riser Systems in Manufacturing</h2>
        <p>Risers are critical components in fixture design and assembly systems, providing vertical positioning and support for workpieces during manufacturing operations. Understanding their function and design is essential for creating efficient production systems.</p>
        
        <h3>Definition and Purpose</h3>
        <p>A riser in manufacturing context refers to a vertical support structure that elevates workpieces, tools, or fixtures to the optimal working height. Risers ensure proper ergonomics, accessibility, and alignment during production processes.</p>

        <h3>Types of Risers</h3>
        <ul>
          <li><strong>Fixed Risers:</strong> Provide static height elevation with robust, permanent mounting.</li>
          <li><strong>Adjustable Risers:</strong> Allow height modification to accommodate different workpiece sizes.</li>
          <li><strong>Pneumatic Risers:</strong> Enable automated height adjustment during production cycles.</li>
          <li><strong>Spring-Loaded Risers:</strong> Provide constant upward force while allowing vertical compliance.</li>
        </ul>

        <h3>Key Design Considerations</h3>
        <p>When designing riser systems:</p>
        <ul>
          <li><strong>Load Capacity:</strong> Must safely support the weight of workpieces and any applied forces.</li>
          <li><strong>Stability:</strong> Requires adequate base dimensions and mounting to prevent tipping.</li>
          <li><strong>Height Range:</strong> Should accommodate the full range of workpiece variations.</li>
          <li><strong>Accessibility:</strong> Must not interfere with tooling, operators, or automated systems.</li>
          <li><strong>Alignment:</strong> Critical for ensuring proper positioning relative to other fixture elements.</li>
        </ul>

        <h3>Materials and Construction</h3>
        <p>Risers are typically constructed from:</p>
        <ul>
          <li>Structural steel for heavy-duty applications</li>
          <li>Aluminum for lightweight, corrosion-resistant needs</li>
          <li>Cast iron for vibration damping and stability</li>
          <li>Composite materials for specialized environments</li>
        </ul>

        <h3>Applications in BIW Fixtures</h3>
        <p>In Body-In-White manufacturing, risers play a vital role in supporting sheet metal panels at precise heights during welding operations. They work in conjunction with locating pins and clamp units to maintain part position and ensure weld quality.</p>

        <h3>Best Practices</h3>
        <ul>
          <li>Design with adequate safety factors for load capacity</li>
          <li>Include mounting provisions for sensors and tooling</li>
          <li>Ensure easy access for maintenance and adjustment</li>
          <li>Consider thermal expansion in high-temperature applications</li>
          <li>Integrate with overall fixture design for optimal workflow</li>
        </ul>
      `,
      category: 'Tutorial',
      date: 'Oct 15, 2025',
      readTime: '10 min read',
      image: imgRiser,
      author: 'M CAD Solutions Team'
    }
  ];

  const currentPost = blogPosts.find(post => post.id === blogId) || blogPosts[0];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[400px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)',
        }}
      >
        <div className="relative z-10 max-w-[1024px] mx-auto px-[16px] md:px-[32px] py-[60px]">
          <button
            onClick={() => onNavigate?.('blog')}
            className="flex items-center gap-[8px] mb-[24px] hover:text-[#6BC1E3] transition-colors group cursor-pointer"
            style={{ color: 'rgba(244, 247, 249, 0.7)' }}
          >
            <ArrowLeft className="w-[20px] h-[20px] group-hover:transform group-hover:-translate-x-1 transition-transform" />
            <span className="text-[14px]">Back to Blog</span>
          </button>

          <div className="border rounded-[6px] px-[12px] py-[6px] inline-block mb-[16px]" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)', borderColor: 'rgba(107, 193, 227, 0.3)' }}>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[13px]" style={{ color: '#6BC1E3' }}>
              <p className="leading-[18px]">{currentPost.category}</p>
            </div>
          </div>

          <h1 className="text-[36px] md:text-[48px] leading-[44px] md:leading-[56px] font-['Geist:Regular',sans-serif] font-normal tracking-[-1.2px] mb-[24px]" style={{ color: '#F4F7F9' }}>
            {currentPost.title}
          </h1>

          <div className="flex flex-wrap items-center gap-[20px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
            <div className="flex items-center gap-[8px]">
              <User className="w-[16px] h-[16px]" />
              <span>{currentPost.author}</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <Calendar className="w-[16px] h-[16px]" />
              <span>{currentPost.date}</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <Clock className="w-[16px] h-[16px]" />
              <span>{currentPost.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {currentPost.image && (
        <section className="relative shrink-0 w-full py-[40px]" style={{ backgroundColor: '#0A1C26' }}>
          <div className="max-w-[1024px] mx-auto px-[16px] md:px-[32px]">
            <div className="rounded-[16px] overflow-hidden bg-[rgba(255,255,255,0.05)]">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      <section className="relative shrink-0 w-full py-[60px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[800px] mx-auto px-[16px] md:px-[32px]">
          <article 
            className="prose prose-invert max-w-none"
            style={{ color: 'rgba(244, 247, 249, 0.8)' }}
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative shrink-0 w-full py-[60px] border-t" style={{ backgroundColor: '#092B38', borderColor: 'rgba(107, 193, 227, 0.2)' }}>
        <div className="max-w-[1024px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[40px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[32px] tracking-[-0.8px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[40px]">Related Articles</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            {blogPosts.filter(post => post.id !== currentPost.id).slice(0, 2).map((post) => (
              <button
                key={post.id}
                onClick={() => onNavigate?.('blog-detail', post.id)}
                className="backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.4)] relative rounded-[12px] hover:bg-[rgba(0,0,0,0.6)] transition-all group text-left cursor-pointer"
              >
                <div className="overflow-clip relative rounded-[inherit] p-[24px] flex flex-col h-full">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] group-hover:border-[rgba(107,193,227,0.3)] transition-colors" />
                  
                  {post.image && (
                    <div className="mb-[16px] rounded-[8px] overflow-hidden bg-[rgba(255,255,255,0.05)]">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-[180px] object-contain"
                      />
                    </div>
                  )}

                  <div className="border rounded-[6px] px-[10px] py-[4px] inline-block mb-[12px] self-start" style={{ backgroundColor: 'rgba(107, 193, 227, 0.15)', borderColor: 'rgba(107, 193, 227, 0.3)' }}>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[12px]" style={{ color: '#6BC1E3' }}>
                      <p className="leading-[16px]">{post.category}</p>
                    </div>
                  </div>

                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] tracking-[-0.5px] mb-[8px]" style={{ color: '#F4F7F9' }}>
                    <p className="leading-[28px]">{post.title}</p>
                  </div>

                  <div className="flex items-center gap-[12px] text-[13px]" style={{ color: 'rgba(244, 247, 249, 0.6)' }}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative shrink-0 w-full py-[60px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[800px] mx-auto px-[16px] md:px-[32px]">
          <div className="backdrop-blur-md backdrop-filter box-border flex flex-col items-center gap-[24px] p-[40px] relative rounded-[16px] text-center">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[24px] md:text-[28px] tracking-[-0.7px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[32px] md:leading-[36px]">Ready to Start Your CAD Journey?</p>
            </div>
            
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px] max-w-[600px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
              <p>Join M CAD Solutions and transform your career with industry-leading training programs.</p>
            </div>

            <button 
              onClick={() => onNavigate?.('contact')}
              className="box-border flex items-center justify-center px-[32px] py-[16px] relative rounded-[9999px] hover:opacity-90 transition-all cursor-pointer"
              style={{
                background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
              }}
            >
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[24px]">Enroll Now</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .prose h2 {
          font-size: 28px;
          line-height: 36px;
          margin-top: 32px;
          margin-bottom: 16px;
          color: #F4F7F9;
          font-weight: 500;
        }
        
        .prose h3 {
          font-size: 22px;
          line-height: 30px;
          margin-top: 24px;
          margin-bottom: 12px;
          color: #F4F7F9;
          font-weight: 500;
        }
        
        .prose p {
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 16px;
          color: rgba(244, 247, 249, 0.8);
        }
        
        .prose ul {
          margin: 16px 0;
          padding-left: 24px;
        }
        
        .prose li {
          font-size: 16px;
          line-height: 28px;
          margin-bottom: 8px;
          color: rgba(244, 247, 249, 0.8);
        }
        
        .prose strong {
          color: #6BC1E3;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
