'use client'
import Link from 'next/link';
import { CheckCircle2, Cpu, Factory, Users2, Rocket, Award, Calendar, Target, Shield, Zap, Brain, Monitor } from "lucide-react";
const imgJourney = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { AnimatedSection } from "../../components/AnimatedSection";

export default function Industry4Page() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[600px] overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)',
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-[32px] py-[80px] md:py-[100px]">
          
          {/* Badge - Centered */}
          <div className="flex justify-center mb-8">
            <div className="backdrop-blur-md backdrop-filter bg-[rgba(249,168,37,0.15)] box-border content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[9999px]">
              <div aria-hidden="true" className="absolute border border-[rgba(249,168,37,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
              <span className="text-[13px] uppercase tracking-[0.8px] font-['Geist:Regular',sans-serif]" style={{ color: '#F9A825' }}>
                Simulation-First | Industry-Oriented | India's First Digital Twin–Focused ROS2 Program
              </span>
            </div>
          </div>

          {/* Content Grid - Text and Image Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
            
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-[40px] md:text-[52px] lg:text-[56px] leading-[48px] md:leading-[58px] lg:leading-[62px] font-['Geist:Regular',sans-serif] font-normal tracking-[-1.5px] mb-6" style={{ color: '#F4F7F9' }}>
                ROS2 & Digital Twin Robotics Training
              </h1>

              <p className="text-[18px] md:text-[20px] leading-[28px] md:leading-[32px] mb-8" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                Building Robotics Engineers, Not Just ROS2 Users. Modern robotics is no longer about only writing code or connecting hardware. Industries today design, test, and validate robots virtually first — using Digital Twins.
              </p>

              <div className="flex flex-col sm:flex-row gap-[12px] lg:justify-start justify-center">
                <Link href="/contact" className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[38px] py-[20px] relative rounded-[9999px] shrink-0 w-full sm:w-auto hover:opacity-90 transition-opacity">
                  <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_#1a1818]" />
                  <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-center text-nowrap text-white">
                    <p className="leading-[22px] whitespace-pre">Apply Now</p>
                  </div>
                </Link>
                <Link href="/contact" className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex items-center justify-center px-[28px] py-[20px] relative rounded-[9999px] w-full sm:w-auto hover:bg-[rgba(255,255,255,0.15)] transition-colors">
                  <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-center text-gray-100 text-nowrap">
                    <p className="leading-[22px] whitespace-pre">Book Free Demo</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Journey Image */}
            <div className="w-full rounded-[16px] overflow-hidden">
              <img 
                src={'/industry4.0_ros_digital_twin_robotics.png'} 
                alt="MCAD Solutions ROS2 & Digital Twin Robotics Training" 
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* What Makes Our Training Different */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1024px] mx-auto px-[32px]">
          <AnimatedSection>
            <div className="text-center mb-[48px]">
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[36px] md:text-[42px] tracking-[-1px] mb-[16px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[42px] md:leading-[48px]">What Makes Our Training Different</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px] md:text-[17px] max-w-[820px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
                <p>Most programs focus only on theory or basic kits. Our training emphasizes real hardware implementation using 3D printing, hands-on prototyping, and complete system understanding.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Approach Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[16px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              
              <div className="flex gap-[12px] items-start">
                <CheckCircle2 className="w-[24px] h-[24px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                  <p className="font-medium mb-1" style={{ color: '#F4F7F9' }}>Simulation-first learning</p>
                  <p>Start with virtual environments before touching hardware</p>
                </div>
              </div>

              <div className="flex gap-[12px] items-start">
                <CheckCircle2 className="w-[24px] h-[24px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                  <p className="font-medium mb-1" style={{ color: '#F4F7F9' }}>Digital Twin mindset</p>
                  <p>Industry-style robot architecture and validation</p>
                </div>
              </div>

              <div className="flex gap-[12px] items-start">
                <CheckCircle2 className="w-[24px] h-[24px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                  <p className="font-medium mb-1" style={{ color: '#F4F7F9' }}>Zero hardware dependency</p>
                  <p>Learn without expensive equipment or vendor lock-in</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[16px] bg-gradient-to-br from-[rgba(249,168,37,0.05)] to-[rgba(107,193,227,0.05)]">
              <div aria-hidden="true" className="absolute border border-[rgba(249,168,37,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[17px]" style={{ color: '#F4F7F9' }}>
                <p className="mb-4">We don't teach shortcuts. We teach how robotics actually works in industry.</p>
                <p className="text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>At M CAD Solution, we train learners exactly the same way industries operate — with simulation-first, risk-free, Digital Twin–based robotics development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Learning Journey */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[36px] tracking-[-0.9px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[42px]">A Structured Learning Journey</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px] max-w-[720px] mx-auto mt-4" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
              <p>Our training is designed as a progressive journey, not isolated courses.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
  {/* Stage 1 */}
  <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] items-start overflow-hidden relative rounded-[16px]">
    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
    
    <div className="w-full h-[200px] overflow-hidden bg-gradient-to-br from-[#092B38] to-[#0A1C26] flex items-center justify-center relative">
      <img 
        src="/ros2.png" 
        alt="ROS2 Foundation" 
        className="w-full h-full object-cover opacity-80"
      />
    </div>

    <div className="p-[32px] pt-0">
      <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[12px] p-[16px] mb-[16px] inline-block">
        <span className="text-[24px] font-medium" style={{ color: '#F9A825' }}>1</span>
      </div>

      <div>
        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[22px] tracking-[-0.5px] mb-[12px]" style={{ color: '#F4F7F9' }}>
          <p className="leading-[30px]">Strong ROS2 Foundation</p>
        </div>
        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
          <p className="mb-3">Learners begin by understanding how ROS2 works internally:</p>
          <ul className="space-y-2 ml-4">
            <li>• Robot communication & data flow</li>
            <li>• Task execution logic</li>
            <li>• Real-time control concepts</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Stage 2 */}
  <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] items-start overflow-hidden relative rounded-[16px]">
    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
    
    <div className="w-full h-[200px] overflow-hidden bg-gradient-to-br from-[#092B38] to-[#0A1C26] flex items-center justify-center relative">
      <img 
        src="/roboticmotion.png" 
        alt="Real-World Robot Motion" 
        className="w-full h-full object-cover opacity-80"
      />
    </div>

    <div className="p-[32px] pt-0">
      <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[12px] p-[16px] mb-[16px] inline-block">
        <span className="text-[24px] font-medium" style={{ color: '#F9A825' }}>2</span>
      </div>

      <div>
        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[22px] tracking-[-0.5px] mb-[12px]" style={{ color: '#F4F7F9' }}>
          <p className="leading-[30px]">Real-World Robot Motion</p>
        </div>
        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
          <p className="mb-3">Mobile robot simulations where learners experience:</p>
          <ul className="space-y-2 ml-4">
            <li>• Movement in real environments</li>
            <li>• Wheels, velocity, and direction</li>
            <li>• Safe simulation testing</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* Stage 3 */}
  <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] items-start overflow-hidden relative rounded-[16px]">
    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
    
    <div className="w-full h-[200px] overflow-hidden bg-gradient-to-br from-[#092B38] to-[#0A1C26] flex items-center justify-center relative">
      <img 
        src="/Gemini_Generated_Image_3ctz443ctz443ctz.png" 
        alt="Industrial Digital Twin" 
        className="w-full h-full object-cover opacity-80"
      />
    </div>

    <div className="p-[32px] pt-0">
      <div className="bg-gradient-to-br from-[#10162F] to-[#1a2456] rounded-[12px] p-[16px] mb-[16px] inline-block">
        <span className="text-[24px] font-medium" style={{ color: '#F9A825' }}>3</span>
      </div>

      <div>
        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[22px] tracking-[-0.5px] mb-[12px]" style={{ color: '#F4F7F9' }}>
          <p className="leading-[30px]">Industrial Digital Twin (6-DOF)</p>
        </div>
        <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
          <p className="mb-3">6 Degrees of Freedom robotic arm training:</p>
          <ul className="space-y-2 ml-4">
            <li>• Robotic arm structure</li>
            <li>• Joint and motion planning</li>
            <li>• Virtual task validation</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* Super USP - No Hardware Integration */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] items-center">
            {/* Left: Content */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[32px] items-start p-[40px] md:p-[48px] relative rounded-[24px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
              
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[32px] tracking-[-0.8px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[40px]">Our Super USP: No Hardware Integration Training</p>
              </div>
              
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                <p className="mb-4">We intentionally do not train real hardware integration. This is not a limitation — it is our biggest strength.</p>
                <p className="font-medium mb-3" style={{ color: '#F9A825' }}>Why?</p>
              </div>

              <div className="grid grid-cols-1 gap-[16px] w-full">
                <div className="flex gap-[12px] items-start">
                  <Shield className="w-[20px] h-[20px] shrink-0 mt-[2px]" style={{ color: '#6BC1E3' }} />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                    <p>No risk of damaging expensive robots</p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-start">
                  <Shield className="w-[20px] h-[20px] shrink-0 mt-[2px]" style={{ color: '#6BC1E3' }} />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                    <p>No dependency on specific vendors</p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-start">
                  <Shield className="w-[20px] h-[20px] shrink-0 mt-[2px]" style={{ color: '#6BC1E3' }} />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                    <p>No distraction from core robotics concepts</p>
                  </div>
                </div>

                <div className="flex gap-[12px] items-start">
                  <Shield className="w-[20px] h-[20px] shrink-0 mt-[2px]" style={{ color: '#6BC1E3' }} />
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                    <p>Same logic applies to all robots in industry</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[15px] bg-[rgba(107,193,227,0.1)] p-4 rounded-lg" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                <p>Learners who master Digital Twins can later adapt easily to any real robot in the workplace.</p>
              </div>
            </div>

            {/* Right: Image */}
           <div className="rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-xl bg-gradient-to-br from-[#092B38] to-[#0A1C26] flex items-center justify-center h-[500px] relative">
  <img 
    src="/8837d54a5734507cd03b2d619ba0ea3318be5307.png" 
    alt="Digital Twin Visualization" 
    className="w-full h-full object-cover"
  />
</div> 
          </div>
        </div>
      </section>

      {/* Digital Twin Driven Learning */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[1024px] mx-auto px-[32px]">
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[36px] tracking-[-0.9px] mb-[16px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[42px]">Digital Twin–Driven Learning</p>
            </div>
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[28px] text-[16px] max-w-[720px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
              <p>A Digital Twin is a virtual replica of a physical robot. This is exactly how modern robotics companies operate.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-start p-[28px] relative rounded-[16px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <Zap className="w-[28px] h-[28px] shrink-0 mt-1" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                <p className="font-medium mb-2" style={{ color: '#F4F7F9' }}>The robot behaves like a real system</p>
                <p>Movements are physically accurate and realistic</p>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-start p-[28px] relative rounded-[16px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <Zap className="w-[28px] h-[28px] shrink-0 mt-1" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                <p className="font-medium mb-2" style={{ color: '#F4F7F9' }}>Errors can be tested safely</p>
                <p>No consequences for mistakes during learning</p>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-start p-[28px] relative rounded-[16px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <Zap className="w-[28px] h-[28px] shrink-0 mt-1" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                <p className="font-medium mb-2" style={{ color: '#F4F7F9' }}>Ideas can be validated before deployment</p>
                <p>Test concepts without real-world constraints</p>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-start p-[28px] relative rounded-[16px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
              <Zap className="w-[28px] h-[28px] shrink-0 mt-1" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                <p className="font-medium mb-2" style={{ color: '#F4F7F9' }}>Industry-standard workflow</p>
                <p>Same approach used by leading robotics companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Training Is For */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1280px] mx-auto px-[32px]">
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[36px] tracking-[-0.9px] mb-[16px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[42px]">Who This Training Is For</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[12px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <Users2 className="w-[28px] h-[28px] shrink-0" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: '#F4F7F9' }}>
                <p>Engineering students aspiring to robotics careers</p>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[12px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <Users2 className="w-[28px] h-[28px] shrink-0" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: '#F4F7F9' }}>
                <p>ROS2 beginners to advanced learners</p>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[12px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <Users2 className="w-[28px] h-[28px] shrink-0" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: '#F4F7F9' }}>
                <p>Mechanical, Electrical & Mechatronics engineers</p>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[12px]">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <Users2 className="w-[28px] h-[28px] shrink-0" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: '#F4F7F9' }}>
                <p>Robotics & automation professionals</p>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[12px] md:col-span-2 lg:col-span-1">
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <Users2 className="w-[28px] h-[28px] shrink-0" style={{ color: '#F9A825' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[15px]" style={{ color: '#F4F7F9' }}>
                <p>Anyone who wants to work in robotics R&D</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career & Industry Relevance */}
     

      {/* Why MCAD Solution */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1024px] mx-auto px-[32px]">
          <div className="text-center mb-[48px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[36px] tracking-[-0.9px] mb-[16px]" style={{ color: '#F4F7F9' }}>
              <p className="leading-[42px]">Why M CAD Solution</p>
            </div>
          </div>

          <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[24px] items-start p-[40px] md:p-[48px] relative rounded-[24px]">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
            
            <div className="grid grid-cols-1 gap-[20px] w-full">
              <div className="flex gap-[12px] items-start">
                <Award className="w-[24px] h-[24px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                  <p>First in India to emphasize ROS2-based Digital Twin training</p>
                </div>
              </div>

              <div className="flex gap-[12px] items-start">
                <Award className="w-[24px] h-[24px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                  <p>Industry-inspired methodology with practical focus</p>
                </div>
              </div>

              <div className="flex gap-[12px] items-start">
                <Award className="w-[24px] h-[24px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                  <p>Simulation-first, risk-free learning environment</p>
                </div>
              </div>

              <div className="flex gap-[12px] items-start">
                <Award className="w-[24px] h-[24px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                  <p>Clear focus on robotics fundamentals and core concepts</p>
                </div>
              </div>

              <div className="flex gap-[12px] items-start">
                <Award className="w-[24px] h-[24px] shrink-0 mt-[2px]" style={{ color: '#F9A825' }} />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.9)' }}>
                  <p>Long-term skill development approach for sustainable careers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="relative shrink-0 w-full py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <div className="max-w-[900px] mx-auto px-[32px]">
          <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[24px] items-center p-[48px] md:p-[64px] relative rounded-[24px] text-center bg-gradient-to-br from-[rgba(249,168,37,0.05)] to-[rgba(107,193,227,0.05)]">
            <div aria-hidden="true" className="absolute border border-[rgba(249,168,37,0.2)] border-solid inset-0 pointer-events-none rounded-[24px]" />
            
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] tracking-[-0.9px] italic" style={{ color: '#F4F7F9' }}>
              <p className="leading-[36px] md:leading-[44px]">"Before you control a real robot, you must understand its digital twin."</p>
            </div>
            
            <div className="w-[60px] h-[2px]" style={{ backgroundColor: '#F9A825' }}></div>
            
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[26px] text-[16px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
              <p>Our Philosophy at M CAD Solution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
       {/* SEPARATOR - Visual divider between content and footer - ADD THIS HERE */}
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