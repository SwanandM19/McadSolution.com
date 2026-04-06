import {
  Award,
  GraduationCap,
  Star,
  Users,
  UserCheck,
  DollarSign,
  Zap,
  Quote,
  Briefcase,
  TrendingUp,
  Settings,
} from "lucide-react";
import Image from 'next/image';
const image_bd961c520307b372f3ca13fb2a5257dc52b6034b = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_211db4c801dab74dd07a4d9727776bf3016ce6ff = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_5c882ebf9399a01275c172d1e52457205906b300 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_e6dbf1f7680fe4f11dfbbd0f68eeae34c007c86a = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_750a232efb0b8b55b5ce5dc17388e9163f055f6c = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_7e09ad9630948493e73b0ddf60335c2b364b2d14 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_7b81a9de88e0b915c7aa237dd10807c24f37c2fe = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import svgPaths from "../imports/svg-9op1xbyva3";
const imgImage1 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgSection = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { imgGradient } from "../imports/svg-3z2bt";
const imgHeroBackground = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgNewHero = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { AnimatedSection } from "../components/AnimatedSection";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
<section className="min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-clip relative shrink-0 w-full">
  <div
    className="absolute bg-repeat bg-size-[1920px_1076px] bg-top-left inset-0"
    style={{ backgroundImage: `url('/homepage_back.png')` }}
  />
  <div className="relative h-full py-2 md:py-[40px] lg:py-[60px] px-4 md:px-8 lg:px-[141px]">
    <div className="max-w-[1280px] mx-auto h-full flex items-center">
      <div className="content-stretch flex flex-col-reverse lg:flex-row gap-8 md:gap-[64px] items-center justify-center w-full">
        {/* Left Content */}
        <AnimatedSection
          delay={0.1}
          className="content-stretch flex flex-col gap-4 md:gap-[16px] items-start relative shrink-0 w-full lg:w-[576px]"
        >
          {/* REMOVED: This spacer div was creating extra gap */}
          {/* <div className="h-[20px] shrink-0 w-full hidden md:block" /> */}
          
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-gray-100">
              <p className="text-[32px] md:text-[50px] lg:text-[60px] leading-[38px] md:leading-[56px] lg:leading-[60px] tracking-[-1px] md:tracking-[-1.3px] lg:tracking-[-1.5px] mb-0">
                From CAD Design to Industry 4.0
              </p>
              <p className="text-[32px] md:text-[50px] lg:text-[60px] leading-[38px] md:leading-[56px] lg:leading-[60px] tracking-[-1px] md:tracking-[-1.3px] lg:tracking-[-1.5px]">
                — Build the Future of Engineering
              </p>
            </div>
          </div>

          {/* Rest of your hero content remains the same... */}

                {/* Mobile-only image below heading */}
                <div className="lg:hidden bg-[rgba(17,24,39,0.4)] relative rounded-[16px] shrink-0 w-full mt-4">
                  <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
                    <div className="h-[300px] max-w-full relative shrink-0 w-full">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <img
                          alt="Engineer in Smart Factory with Holographic Digital Twin"
                          className="absolute h-full left-0 w-full object-cover"
                          src={'C:\\Users\\SHRUTI KOKIL\\Downloads\\mcadsolutoinsfinal\\mcadsolutoinsfinal\\public\\homepageman.png'}
                        />
                      </div>
                    </div>
                    <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.8)] right-[8px] rounded-[12px] top-[8px]">
                      <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[10px] relative rounded-[inherit]">
                        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                          <div className="bg-gray-800 content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[30px]">
                            <div className="relative shrink-0 size-[16px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 20 20"
                              >
                                <g>
                                  <path
                                    d={svgPaths.p3a2fa580}
                                    stroke="var(--stroke-0, #E5E7EB)"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.25"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0">
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <div className="flex flex-col font-['Geist:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-gray-300 text-nowrap">
                                <p className="leading-[18px] whitespace-pre">
                                  Job‑ready skills
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap text-white">
                                <p className="leading-[24px] whitespace-pre">
                                  +95%
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                  </div>
                </div>

                <div className="box-border content-stretch flex flex-col items-start max-w-full lg:max-w-[576px] pb-0 pt-[8px] px-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-gray-300">
                    <p className="text-[16px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[28px] lg:leading-[32px]">
                      Master CAD to Digital Twin automation at
                      MCAD Solutions—India’s first Industry 5.0
                      institute.
                    </p>
                  </div>

                  {/* Mobile-only blinking CTA button */}
                  <button
                    onClick={() => onNavigate("contact")}
                    className="md:hidden mt-[20px] w-full box-border content-stretch flex items-center justify-center px-[24px] py-[16px] relative rounded-[9999px] animate-blink-glow"
                    style={{
                      background:
                        "linear-gradient(90deg, #10162F 0%, #FBBF24 100%)",
                    }}
                  >
                    <div
                      className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-nowrap"
                      style={{ color: "#F4F7F9" }}
                    >
                      <p className="leading-[22px] whitespace-pre">
                        Book Free Demo
                      </p>
                    </div>
                  </button>
                </div>
                <div className="box-border content-stretch flex flex-col sm:flex-row gap-[12px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full">
                  <button
                    onClick={() => onNavigate("industry4")}
                    className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[32px] md:px-[42px] py-[18px] md:py-[22px] relative rounded-[9999px] shrink-0 w-full sm:w-auto"
                  >
                    <div
                      className="absolute inset-[7.58%_2.78%_6.57%_2.72%] opacity-40 rounded-[9999px]"
                      style={{
                        backgroundImage:
                          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 173.89 56.665\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(12.296 0 0 4.0068 86.943 28.332)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.088388\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.088388\\'/></radialGradient></defs></svg>')",
                      }}
                    />
                    <div className="absolute inset-[-85.11%_1.11%_-86.19%_1.09%]">
                      <div
                        className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[179.955px_179.052px] opacity-60"
                        style={{
                          maskImage: `url('${imgGradient}')`,
                        }}
                      />
                    </div>
                    <div className="content-stretch flex items-start justify-center relative shrink-0">
                      <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] text-center text-nowrap text-white">
                        <p className="leading-[21.6px] whitespace-pre">
                          Explore Industry 4.0 Program
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_#1a1818]" />
                  </button>
                </div>
              </AnimatedSection>

              {/* Right Image/Preview - Desktop only */}
              <AnimatedSection
                delay={0.3}
                className="hidden lg:block bg-[rgba(17,24,39,0.4)] relative rounded-[16px] shrink-0 w-full lg:w-[576px]"
              >
                <div className="box-border content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
                  <div className="h-[300px] md:h-[400px] lg:h-[460px] max-w-full relative shrink-0 w-full">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <Image
                        alt="Engineer in Smart Factory with Holographic Digital Twin"
                        fill
                        className="object-cover"
                        src="/homepageman.png"
                      />
                    </div>
                  </div>
                  <div className="absolute backdrop-blur-[2px] backdrop-filter bg-[rgba(0,0,0,0.8)] right-[8px] md:right-[16.36px] rounded-[12px] top-[8px] md:top-[17px]">
                    <div className="box-border content-stretch flex flex-col items-start overflow-clip p-[10px] md:p-[17px] relative rounded-[inherit]">
                      <div className="content-stretch flex gap-[8px] md:gap-[12px] items-center relative shrink-0">
                        <div className="bg-gray-800 content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[30px] md:size-[40px]">
                          <div className="relative shrink-0 size-[16px] md:size-[20px]">
                            <svg
                              className="block size-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 20 20"
                            >
                              <g>
                                <path
                                  d={svgPaths.p3a2fa580}
                                  stroke="var(--stroke-0, #E5E7EB)"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.25"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0">
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-['Geist:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] md:text-[14px] text-gray-300 text-nowrap">
                              <p className="leading-[18px] md:leading-[20px] whitespace-pre">
                                Job‑ready skills
                              </p>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] md:text-[18px] text-nowrap text-white">
                              <p className="leading-[24px] md:leading-[28px] whitespace-pre">
                                100%
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section
        className="relative shrink-0 w-full py-[48px] md:py-[60px] lg:py-[80px]"
        style={{ backgroundColor: "#092B38" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <AnimatedSection className="text-center mb-[32px] md:mb-[48px]">
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[28px] md:text-[36px] tracking-[-0.9px] mb-[12px]"
              style={{ color: "#F4F7F9" }}
            >
              <p className="leading-[34px] md:leading-[40px]">
                Curated Learning Paths for Every Stage of
                Engineering
              </p>
            </div>
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[16px] max-w-[720px] mx-auto"
              style={{ color: "rgba(244, 247, 249, 0.7)" }}
            >
              <p>
                From 3D modeling to robotic system design —
                choose the course that matches your engineering
                goals.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px] mb-[32px]">
            {/* Course Card 1 - Mechanical CAD Design */}
            <AnimatedSection
              delay={0.1}
              className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] md:p-[28px] relative rounded-[16px]"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="content-stretch flex flex-col items-start w-full">
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] md:text-[22px] tracking-[-0.5px] w-full mb-[12px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[28px] md:leading-[30px]">
                    Mechanical CAD Design
                  </p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px] md:text-[15px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.8)" }}
                >
                  <p>
                    Master 2D drafting and 3D modeling using
                    SolidWorks, CATIA, and NX. Learn product
                    design, detailing, and assembly creation for
                    manufacturing.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Course Card 2 - Advanced CAD Modeling */}
            <AnimatedSection
              delay={0.2}
              className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] md:p-[28px] relative rounded-[16px]"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="content-stretch flex flex-col items-start w-full">
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] md:text-[22px] tracking-[-0.5px] w-full mb-[12px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[28px] md:leading-[30px]">
                    Industrial Domain Training
                  </p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px] md:text-[15px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.8)" }}
                >
                  <p>
                    Industrial Domain Training focuses on developing complex parts, surfaces, and assemblies used in automotive, plastics, and tooling industries, with an emphasis on project-based learning and portfolio creation.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Course Card 3 - Robotics & Automation Simulation */}
            <AnimatedSection
              delay={0.3}
              className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] md:p-[28px] relative rounded-[16px]"
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="content-stretch flex flex-col items-start w-full">
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] md:text-[22px] tracking-[-0.5px] w-full mb-[12px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[28px] md:leading-[30px]">
                    Robotics & Automation Simulation
                  </p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px] md:text-[15px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.8)" }}
                >
                  <p>
                    Learn robotic cell layout, path planning,
                    and simulation. Validate motion, sequence,
                    and production timing before implementation.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Course Card 4 - NEW Industry 4.0 */}
            <AnimatedSection
              delay={0.4}
              className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] md:p-[28px] relative rounded-[16px] border-2"
              style={{ borderColor: "#F9A825" }}
            >
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div
                className="absolute top-[16px] right-[16px] px-[12px] py-[6px] rounded-[6px]"
                style={{
                  background:
                    "linear-gradient(135deg, #10162F 0%, #1a2456 100%)",
                }}
              >
                <span
                  className="text-[12px] uppercase tracking-[0.5px]"
                  style={{ color: "#F9A825" }}
                >
                  New
                </span>
              </div>
              <div className="content-stretch flex flex-col items-start w-full">
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[20px] md:text-[22px] tracking-[-0.5px] w-full mb-[12px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[28px] md:leading-[30px]">
                    Digital Twin & Automation Design (Industry
                    4.0 / 5.0)
                  </p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px] md:text-[15px] w-full mb-[16px]"
                  style={{ color: "rgba(244, 247, 249, 0.8)" }}
                >
                  <p>
                    India's first course to teach mechanical
                    design, simulation, and implementation of
                    three different automation systems using
                    Digital Twin technology.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate("industry4")}
                  className="backdrop-blur backdrop-filter bg-[rgba(249,168,37,0.15)] box-border content-stretch flex gap-[8px] items-center justify-center pb-[12px] pt-[12px] px-[20px] relative rounded-[8px] hover:bg-[rgba(249,168,37,0.25)] transition-colors"
                >
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(249,168,37,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                  <div
                    className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-nowrap"
                    style={{ color: "#F9A825" }}
                  >
                    <p className="leading-[20px] whitespace-pre">
                      Learn More
                    </p>
                  </div>
                </button>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center mt-[24px]"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        className="relative shrink-0 w-full py-[48px] md:py-[60px] lg:py-[80px]"
        style={{ backgroundColor: "#0A1C26" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="text-center mb-[32px] md:mb-[48px]">
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[28px] md:text-[36px] tracking-[-0.9px]"
              style={{ color: "#F4F7F9" }}
            >
              <p className="leading-[34px] md:leading-[40px]">
                Why M CAD SOLUTIONS
              </p>
            </div>
          </div>

          {/* Grid Updated to 3 Columns on Large Screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
            {/* 1 */}
            <div className="backdrop-blur-md backdrop-filter flex flex-col gap-[16px] p-[20px] md:p-[25px] relative rounded-[16px]">
              <div className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-gray-800 flex items-center justify-center rounded-[8px] size-[40px]">
                <Award
                  className="w-[20px] h-[20px]"
                  style={{ color: "#6BC1E3" }}
                />
              </div>
              <div>
                <h3
                  className="text-[18px] mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  Industry Expertise
                </h3>
                <p
                  className="text-[14px] leading-[20px]"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  Backed by 15+ years of experience in
                  automotive BIW Fixture Design and CAD
                  training.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="backdrop-blur-md backdrop-filter flex flex-col gap-[16px] p-[20px] md:p-[25px] relative rounded-[16px]">
              <div className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-gray-800 flex items-center justify-center rounded-[8px] size-[40px]">
                <Briefcase
                  className="w-[20px] h-[20px]"
                  style={{ color: "#6BC1E3" }}
                />
              </div>
              <div>
                <h3
                  className="text-[18px] mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  Job-Oriented Courses
                </h3>
                <p
                  className="text-[14px] leading-[20px]"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  Domain training courses designed as per latest
                  industry standards with placement support.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="backdrop-blur-md backdrop-filter flex flex-col gap-[16px] p-[20px] md:p-[25px] relative rounded-[16px]">
              <div className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-gray-800 flex items-center justify-center rounded-[8px] size-[40px]">
                <Zap
                  className="w-[20px] h-[20px]"
                  style={{ color: "#6BC1E3" }}
                />
              </div>
              <div>
                <h3
                  className="text-[18px] mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  Project-Based Training
                </h3>
                <p
                  className="text-[14px] leading-[20px]"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  Focus on real-time projects and practical
                  applications along with theory.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="backdrop-blur-md backdrop-filter flex flex-col gap-[16px] p-[20px] md:p-[25px] relative rounded-[16px]">
              <div className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-gray-800 flex items-center justify-center rounded-[8px] size-[40px]">
                <TrendingUp
                  className="w-[20px] h-[20px]"
                  style={{ color: "#6BC1E3" }}
                />
              </div>
              <div>
                <h3
                  className="text-[18px] mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  Proven Track Record
                </h3>
                <p
                  className="text-[14px] leading-[20px]"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  Successful alumni working in reputed
                  automotive and engineering companies.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="backdrop-blur-md backdrop-filter flex flex-col gap-[16px] p-[20px] md:p-[25px] relative rounded-[16px]">
              <div className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-gray-800 flex items-center justify-center rounded-[8px] size-[40px]">
                <Settings
                  className="w-[20px] h-[20px]"
                  style={{ color: "#6BC1E3" }}
                />
              </div>
              <div>
                <h3
                  className="text-[18px] mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  Specialized Courses
                </h3>
                <p
                  className="text-[14px] leading-[20px]"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  Gain in-demand skills in BIW Fixture Design,
                  Automotive Plastic Trims, and CATIA V5.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className="backdrop-blur-md backdrop-filter flex flex-col gap-[16px] p-[20px] md:p-[25px] relative rounded-[16px]">
              <div className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]" />
              <div className="bg-gray-800 flex items-center justify-center rounded-[8px] size-[40px]">
                <Users
                  className="w-[20px] h-[20px]"
                  style={{ color: "#6BC1E3" }}
                />
              </div>
              <div>
                <h3
                  className="text-[18px] mb-[8px]"
                  style={{ color: "#F4F7F9" }}
                >
                  Personalization & Flexibility
                </h3>
                <p
                  className="text-[14px] leading-[20px]"
                  style={{ color: "rgba(244, 247, 249, 0.7)" }}
                >
                  Benefit from small classes, mock interviews,
                  resume support, and both online and classroom
                  options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career CTA Section */}
      <section
        className="relative shrink-0 w-full py-[48px] md:py-[60px] lg:py-[80px]"
        style={{ backgroundColor: "#0A1C26" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col lg:flex-row gap-[32px] lg:gap-[48px] items-center p-[20px] md:p-[32px] lg:p-[48px] relative rounded-[24px]">
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]"
            />

            <div className="flex-1 content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start relative">
              <div
                className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-1px]"
                style={{ color: "#F4F7F9" }}
              >
                <p className="leading-[34px] md:leading-[42px] lg:leading-[48px]">
                  Be the Engineer Who Designs the Factory of the
                  Future
                </p>
              </div>
              <div
                className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[14px] md:text-[16px]"
                style={{ color: "rgba(244, 247, 249, 0.7)" }}
              >
                <p>
                  Join India's first Industry 4.0 training hub —
                  from CAD to Automation.
                </p>
              </div>
              <div className="box-border content-stretch flex flex-col sm:flex-row gap-[12px] items-start pt-[16px] relative w-full">
                <button
                  onClick={() => onNavigate("contact")}
                  className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[32px] md:px-[42px] py-[18px] md:py-[22px] relative rounded-[9999px] shrink-0 w-full sm:w-auto"
                >
                  <div
                    className="absolute inset-[7.58%_2.78%_6.57%_2.72%] opacity-40 rounded-[9999px]"
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 173.89 56.665\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(12.296 0 0 4.0068 86.943 28.332)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.088388\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.088388\\'/></radialGradient></defs></svg>')",
                    }}
                  />
                  <div className="absolute inset-[-85.11%_1.11%_-86.19%_1.09%]">
                    <div
                      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[179.955px_179.052px] opacity-60"
                      style={{
                        maskImage: `url('${imgGradient}')`,
                      }}
                    />
                  </div>
                  <div className="content-stretch flex items-start justify-center relative shrink-0">
                    <div className="flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] text-center text-nowrap text-white">
                      <p className="leading-[21.6px] whitespace-pre">
                        Enroll Now
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none shadow-[0px_0px_0px_1px_inset_#1a1818]" />
                </button>
              </div>
            </div>

            <div className="relative shrink-0 w-full lg:w-[480px] h-[280px] md:h-[340px] lg:h-[480px] rounded-[16px] overflow-hidden">
              <img
                alt="Engineer with Tablet in Automated Production Line"
                className="absolute inset-0 w-full h-full object-cover"
                src={'/homepage_betheengineer.png'}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistics and At a Glance Section */}
      <section
        className="relative shrink-0 w-full py-[48px] md:py-[60px] lg:py-[80px]"
        style={{ backgroundColor: "#092B38" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[48px] items-start">
            {/* Left Side - Statistics */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[24px]">
              {/* 98% Stat */}
              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] md:p-[32px] relative rounded-[16px]">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
                />
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] tracking-[-1.8px] w-full"
                  style={{
                    color: "#F9A825",
                    fontSize: "clamp(48px, 8vw, 60px)",
                  }}
                >
                  <p className="leading-[1.2]">98%</p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[24px] text-[14px] md:text-[15px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.9)" }}
                >
                  <p>
                    Almost every student secures a role in
                    design or CAD after training
                  </p>
                </div>
              </div>

              {/* 100% Projects Stat */}
              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] md:p-[32px] relative rounded-[16px]">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
                />
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] tracking-[-1.8px] w-full"
                  style={{
                    color: "#F9A825",
                    fontSize: "clamp(48px, 8vw, 60px)",
                  }}
                >
                  <p className="leading-[1.2]">100%</p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[24px] text-[14px] md:text-[15px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.9)" }}
                >
                  <p>
                    Focus on projects-based training and
                    real-world design applications.
                  </p>
                </div>
              </div>

              {/* 85% Alumni Stat */}
              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] md:p-[32px] relative rounded-[16px]">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
                />
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] tracking-[-1.8px] w-full"
                  style={{
                    color: "#F9A825",
                    fontSize: "clamp(48px, 8vw, 60px)",
                  }}
                >
                  <p className="leading-[1.2]">85%</p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[24px] text-[14px] md:text-[15px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.9)" }}
                >
                  <p>
                    Alumni – Working across leading OEMs,
                    suppliers, and design firms.
                  </p>
                </div>
              </div>

              {/* 100% Skill Development Stat */}
              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[24px] md:p-[32px] relative rounded-[16px]">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
                />
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] tracking-[-1.8px] w-full"
                  style={{
                    color: "#F9A825",
                    fontSize: "clamp(48px, 8vw, 60px)",
                  }}
                >
                  <p className="leading-[1.2]">100%</p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[24px] text-[14px] md:text-[15px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.9)" }}
                >
                  <p>
                    Skill Development – Covering technical, CAD
                    tools & soft skills for career growth
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - At a Glance */}
            <div className="flex-1 backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start p-[24px] md:p-[32px] lg:p-[40px] relative rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />

              <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] tracking-[0.7px] uppercase w-full"
                  style={{ color: "#6BC1E3" }}
                >
                  <p className="leading-[20px]">At a Glance</p>
                </div>
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[22px] md:text-[28px] tracking-[-0.7px] w-full"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[30px] md:leading-[36px]">
                    Where Learning Meets Industry | Building
                    Careers in Automotive Design
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] w-full"
                style={{ color: "rgba(244, 247, 249, 0.8)" }}
              >
                <p>
                  At M CAD Solutions, we don't just train
                  students—we shape future engineers and
                  designers for the automotive and manufacturing
                  industry. With award-winning expertise,
                  real-world project exposure, and proven
                  placement records, we provide a complete
                  learning ecosystem that bridges the gap
                  between academics and industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Students Choose Us Section */}
      <section
        className="relative shrink-0 w-full py-[48px] md:py-[60px] lg:py-[80px]"
        style={{ backgroundColor: "#0A1C26" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[48px] items-start">
            {/* Left Side - Image and Cards */}
            <div className="flex-1 content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start relative">
              {/* Top Image */}
              <div className="relative w-full h-[280px] md:h-[340px] lg:h-[380px] rounded-[16px] overflow-hidden">
                <img
                  alt="CAD Training Classroom"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={
                    '/homepage_whyfutureengineers.png'
                  }
                />
              </div>

              {/* Two Cards Below */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] md:gap-[24px] w-full">
                {/* Award-Winning Institute Card */}
                <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] md:p-[28px] relative rounded-[16px]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
                  />

                  <div className="flex gap-[12px] items-center w-full">
                    <div
                      className="flex items-center justify-center shrink-0 rounded-[8px] p-[8px]"
                      style={{
                        backgroundColor:
                          "rgba(249, 168, 37, 0.15)",
                      }}
                    >
                      <Award
                        className="size-[24px]"
                        style={{ color: "#F9A825" }}
                      />
                    </div>
                    <div
                      className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px] md:text-[18px] tracking-[-0.45px]"
                      style={{ color: "#F4F7F9" }}
                    >
                      <p className="leading-[26px] md:leading-[28px]">
                        2-Time Award-Winning Institute
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] md:leading-[22px] text-[13px] md:text-[14px] w-full"
                    style={{
                      color: "rgba(244, 247, 249, 0.8)",
                    }}
                  >
                    <p>
                      Honored with the Maharashtra Udyog Bhushan
                      Award 2022 – Recognized twice for
                      excellence and outstanding contribution.
                    </p>
                  </div>
                </div>

                {/* Flexible Learning Options Card */}
                <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-start p-[20px] md:p-[28px] relative rounded-[16px]">
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
                  />

                  <div className="flex gap-[12px] items-center w-full">
                    <div
                      className="flex items-center justify-center shrink-0 rounded-[8px] p-[8px]"
                      style={{
                        backgroundColor:
                          "rgba(107, 193, 227, 0.15)",
                      }}
                    >
                      <GraduationCap
                        className="size-[24px]"
                        style={{ color: "#6BC1E3" }}
                      />
                    </div>
                    <div
                      className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px] md:text-[18px] tracking-[-0.45px]"
                      style={{ color: "#F4F7F9" }}
                    >
                      <p className="leading-[26px] md:leading-[28px]">
                        A Place to Learn and Grow Together
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] md:leading-[22px] text-[13px] md:text-[14px] w-full"
                    style={{
                      color: "rgba(244, 247, 249, 0.8)",
                    }}
                  >
                    <p>
                      Online & classroom modes designed to
                      create a supportive environment where
                      everyone learns, collaborates, and grows
                      together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content and Image */}
            <div className="flex-1 content-stretch flex flex-col gap-[28px] md:gap-[32px] items-start relative">
              {/* Content Box */}
              <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] md:gap-[24px] items-start p-[24px] md:p-[32px] lg:p-[40px] relative rounded-[16px] w-full">
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
                />

                <div className="content-stretch flex flex-col gap-[12px] items-start w-full">
                  <div
                    className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[22px] md:text-[28px] tracking-[-0.7px] w-full"
                    style={{ color: "#F4F7F9" }}
                  >
                    <p className="leading-[30px] md:leading-[36px]">
                      Why Future Engineers Choose MCAD Solutions
                    </p>
                  </div>
                </div>

                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] w-full"
                  style={{ color: "rgba(244, 247, 249, 0.8)" }}
                >
                  <p>
                    At M CAD Solutions, students learn from
                    industry experts through hands-on projects
                    and real-world applications. Our
                    personalized training, strong placement
                    support, and award-winning excellence make
                    us the trusted choice for building careers
                    in automotive design and CAD.
                  </p>
                </div>
              </div>

              {/* Bottom Image */}
              <div className="relative w-full h-[240px] md:h-[260px] rounded-[16px] overflow-hidden">
                <img
                  alt="Students Learning Technology"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={
                    '/homepage_placeto_learn_and_grow.png'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Most Featured Domain Courses Section */}
      <section
        className="relative shrink-0 w-full py-[48px] md:py-[60px] lg:py-[80px]"
        style={{ backgroundColor: "#092B38" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          {/* Section Header */}
          <div className="text-center mb-[32px] md:mb-[48px]">
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase"
              style={{ color: "#6BC1E3" }}
            >
              <p className="leading-[20px]">Featured Courses</p>
            </div>
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[26px] md:text-[32px] lg:text-[36px] tracking-[-0.9px] mb-[20px] md:mb-[24px]"
              style={{ color: "#F4F7F9" }}
            >
              <p className="leading-[32px] md:leading-[36px] lg:leading-[40px]">
                Most Featured Domain Courses
              </p>
            </div>
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] max-w-[900px] mx-auto"
              style={{ color: "rgba(244, 247, 249, 0.8)" }}
            >
              <p className="mb-[16px]">
                Master Automotive Design & CAD with India’s top
                mechanical engineering courses. Learn from
                industry experts at MCAD Solutions to gain the
                practical skills and insights needed to excel in
                the real world.
              </p>
            </div>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] md:gap-[28px] lg:gap-[32px] mb-[32px] md:mb-[48px]">
            {/* Card 1 - BIW Fixture Design */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col relative rounded-[16px] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10"
              />

              {/* Course Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <img
                  alt="BIW Fixture Design Course"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={
                    '/homepage_catiav5.png'
                  }
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-[14px] md:gap-[16px] p-[20px] md:p-[24px]">
                {/* Category Badge */}
                <div className="flex gap-[8px] items-center">
                  <span
                    className="px-[12px] py-[4px] rounded-[6px] backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(249, 168, 37, 0.15)",
                      color: "#F9A825",
                      fontSize: "12px",
                    }}
                  >
                    Automotive
                  </span>
                </div>

                {/* Course Title */}
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[18px] md:text-[20px] tracking-[-0.5px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[26px] md:leading-[28px]">
                    BIW FIXTURE DESIGN
                  </p>
                </div>

                {/* Rating */}
                <div className="flex gap-[4px] items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="size-[16px]"
                      fill="#F9A825"
                      style={{ color: "#F9A825" }}
                    />
                  ))}
                  <span
                    className="ml-[8px]"
                    style={{
                      color: "rgba(244, 247, 249, 0.7)",
                      fontSize: "14px",
                    }}
                  >
                    (4.9)
                  </span>
                </div>

                {/* Instructor */}
                <div className="flex gap-[12px] items-center">
                  <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden">
                    <img
                      alt="Instructor Profile"
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1729824186684-eaff43f7d1d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZW5naW5lZXIlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYxMTkwNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    />
                  </div>
                  <span
                    style={{
                      color: "rgba(244, 247, 249, 0.9)",
                      fontSize: "14px",
                    }}
                  >
                    Prof. Rajesh Kumar
                  </span>
                </div>

                {/* Students Enrolled */}
                <div className="flex gap-[8px] items-center">
                  <Users
                    className="size-[16px]"
                    style={{ color: "#6BC1E3" }}
                  />
                  <span
                    style={{
                      color: "rgba(244, 247, 249, 0.7)",
                      fontSize: "14px",
                    }}
                  >
                    285 students enrolled
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-[12px] mt-[8px]">
                  <button
                    onClick={() => onNavigate("domain-courses")}
                    className="w-full bg-gradient-to-r from-[#10162F] to-[#FBBF24] px-[24px] py-[12px] rounded-[9999px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    Enroll Course
                  </button>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="w-full backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border px-[24px] py-[12px] rounded-[9999px] border border-[rgba(255,255,255,0.1)]"
                    style={{ color: "#F4F7F9" }}
                  >
                    Book Free Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 - Automotive Plastic Trims Design */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col relative rounded-[16px] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10"
              />

              {/* Course Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <img
                  alt="Automotive Plastic Trims Design Course"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={
                    '/home_automotive_plastic_trims_design.png'
                  }
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-[14px] md:gap-[16px] p-[20px] md:p-[24px]">
                {/* Category Badge */}
                <div className="flex gap-[8px] items-center">
                  <span
                    className="px-[12px] py-[4px] rounded-[6px] backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(107, 193, 227, 0.15)",
                      color: "#6BC1E3",
                      fontSize: "12px",
                    }}
                  >
                    Automobile
                  </span>
                </div>

                {/* Course Title */}
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[18px] md:text-[20px] tracking-[-0.5px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[26px] md:leading-[28px]">
                    Automotive Plastic Trims Design
                  </p>
                </div>

                {/* Rating */}
                <div className="flex gap-[4px] items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="size-[16px]"
                      fill="#F9A825"
                      style={{ color: "#F9A825" }}
                    />
                  ))}
                  <span
                    className="ml-[8px]"
                    style={{
                      color: "rgba(244, 247, 249, 0.7)",
                      fontSize: "14px",
                    }}
                  >
                    (4.8)
                  </span>
                </div>

                {/* Instructor */}
                <div className="flex gap-[12px] items-center">
                  <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden">
                    <img
                      alt="Instructor Profile"
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1580983218547-8333cb1d76b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBlbmdpbmVlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjEyMjk4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    />
                  </div>
                  <span
                    style={{
                      color: "rgba(244, 247, 249, 0.9)",
                      fontSize: "14px",
                    }}
                  >
                    Dr. Priya Sharma
                  </span>
                </div>

                {/* Students Enrolled */}
                <div className="flex gap-[8px] items-center">
                  <Users
                    className="size-[16px]"
                    style={{ color: "#6BC1E3" }}
                  />
                  <span
                    style={{
                      color: "rgba(244, 247, 249, 0.7)",
                      fontSize: "14px",
                    }}
                  >
                    342 students enrolled
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-[12px] mt-[8px]">
                  <button
                    onClick={() => onNavigate("domain-courses")}
                    className="w-full bg-gradient-to-r from-[#10162F] to-[#FBBF24] px-[24px] py-[12px] rounded-[9999px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    Enroll Course
                  </button>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="w-full backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border px-[24px] py-[12px] rounded-[9999px] border border-[rgba(255,255,255,0.1)]"
                    style={{ color: "#F4F7F9" }}
                  >
                    Book Free Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 - CATIA V5 */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col relative rounded-[16px] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10"
              />

              {/* Course Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                <img
                  alt="CATIA V5 Course"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={
                    '/cadcoursescatiav5.jpeg'
                  }
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col gap-[14px] md:gap-[16px] p-[20px] md:p-[24px]">
                {/* Category Badge */}
                <div className="flex gap-[8px] items-center">
                  <span
                    className="px-[12px] py-[4px] rounded-[6px] backdrop-blur-sm"
                    style={{
                      backgroundColor:
                        "rgba(249, 168, 37, 0.15)",
                      color: "#F9A825",
                      fontSize: "12px",
                    }}
                  >
                    CAD
                  </span>
                </div>

                {/* Course Title */}
                <div
                  className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[18px] md:text-[20px] tracking-[-0.5px]"
                  style={{ color: "#F4F7F9" }}
                >
                  <p className="leading-[26px] md:leading-[28px]">
                    CATIA V5
                  </p>
                </div>

                {/* Rating */}
                <div className="flex gap-[4px] items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="size-[16px]"
                      fill="#F9A825"
                      style={{ color: "#F9A825" }}
                    />
                  ))}
                  <span
                    className="ml-[8px]"
                    style={{
                      color: "rgba(244, 247, 249, 0.7)",
                      fontSize: "14px",
                    }}
                  >
                    (5.0)
                  </span>
                </div>

                {/* Instructor */}
                <div className="flex gap-[12px] items-center">
                  <div className="relative w-[32px] h-[32px] rounded-full overflow-hidden">
                    <img
                      alt="Instructor Profile"
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1659100947220-48b5d5738148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbnN0cnVjdG9yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYxMTk2NDczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    />
                  </div>
                  <span
                    style={{
                      color: "rgba(244, 247, 249, 0.9)",
                      fontSize: "14px",
                    }}
                  >
                    Eng. Amit Patel
                  </span>
                </div>

                {/* Students Enrolled */}
                <div className="flex gap-[8px] items-center">
                  <Users
                    className="size-[16px]"
                    style={{ color: "#6BC1E3" }}
                  />
                  <span
                    style={{
                      color: "rgba(244, 247, 249, 0.7)",
                      fontSize: "14px",
                    }}
                  >
                    468 students enrolled
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-[12px] mt-[8px]">
                  <button
                    onClick={() => onNavigate("cad-courses")}
                    className="w-full bg-gradient-to-r from-[#10162F] to-[#FBBF24] px-[24px] py-[12px] rounded-[9999px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    Enroll Course
                  </button>
                  <button
                    onClick={() => onNavigate("contact")}
                    className="w-full backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border px-[24px] py-[12px] rounded-[9999px] border border-[rgba(255,255,255,0.1)]"
                    style={{ color: "#F4F7F9" }}
                  >
                    Book Free Demo
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* View All Courses Button */}
          <div className="flex justify-center"></div>
        </div>
      </section>

      {/* Our Best Features Section */}
      <section
        className="relative shrink-0 w-full py-[48px] md:py-[60px] lg:py-[80px]"
        style={{ backgroundColor: "#0A1C26" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          {/* Section Header */}
          <div className="text-center mb-[40px] md:mb-[56px]">
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[26px] md:text-[32px] lg:text-[36px] tracking-[-0.9px] mb-[16px] md:mb-[20px]"
              style={{ color: "#F4F7F9" }}
            >
              <p className="leading-[32px] md:leading-[36px] lg:leading-[40px]">
                Our Best Features
              </p>
            </div>
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] max-w-[800px] mx-auto"
              style={{ color: "rgba(244, 247, 249, 0.8)" }}
            >
              <p>
                Discover the unique strengths that set us
                apart—quality teaching, affordable learning, and
                total flexibility. Everything is designed to
                help you achieve your goals faster and more
                confidently.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] md:gap-[28px] lg:gap-[32px]">
            {/* Feature 1 - Expert Faculty */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] md:gap-[24px] items-center p-[32px] md:p-[40px] relative rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />

              <div className="relative flex items-center justify-center mt-[16px]">
                <div
                  className="absolute -top-[12px] -left-[12px] flex items-center justify-center rounded-full w-[48px] h-[48px] z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, #10162F 0%, #FBBF24 100%)",
                  }}
                >
                  <span
                    className="text-[24px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    1
                  </span>
                </div>

                <div
                  className="flex items-center justify-center rounded-[16px] p-[28px] md:p-[32px]"
                  style={{
                    backgroundColor:
                      "rgba(107, 193, 227, 0.15)",
                  }}
                >
                  <UserCheck
                    className="size-[56px] md:size-[64px]"
                    style={{ color: "#6BC1E3" }}
                  />
                </div>
              </div>

              <div
                className="text-center text-[22px] md:text-[24px]"
                style={{ color: "#F4F7F9" }}
              >
                Expert Faculty
              </div>

              <div
                className="text-center text-[14px] md:text-[15px]"
                style={{ color: "rgba(244, 247, 249, 0.8)" }}
              >
                Expert instructors bring real-world experience
                and hands-on guidance to every class.
              </div>
            </div>

            {/* Feature 2 - Affordable Courses */}
            <div className="backdrop-blur-md backdrop-filter box-border flex flex-col gap-[20px] md:gap-[24px] items-center p-[32px] md:p-[40px] relative rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]"
              />

              <div className="relative flex items-center justify-center mt-[16px]">
                <div
                  className="absolute -top-[12px] -left-[12px] flex items-center justify-center rounded-full w-[48px] h-[48px] z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, #10162F 0%, #FBBF24 100%)",
                  }}
                >
                  <span
                    className="text-[24px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    2
                  </span>
                </div>

                <div
                  className="flex items-center justify-center rounded-[16px] p-[28px] md:p-[32px]"
                  style={{
                    backgroundColor: "rgba(249, 168, 37, 0.15)",
                  }}
                >
                  <DollarSign
                    className="size-[56px] md:size-[64px]"
                    style={{ color: "#F9A825" }}
                  />
                </div>
              </div>

              <div
                className="text-center text-[22px] md:text-[24px]"
                style={{ color: "#F4F7F9" }}
              >
                Affordable Courses
              </div>

              <div
                className="text-center text-[14px] md:text-[15px]"
                style={{ color: "rgba(244, 247, 249, 0.8)" }}
              >
                High-quality programs at budget-friendly prices
                to fit every learner's needs.
              </div>
            </div>

            {/* Feature 3 - Efficient & Flexible */}
            <div className="backdrop-blur-md backdrop-filter box-border flex flex-col gap-[20px] md:gap-[24px] items-center p-[32px] md:p-[40px] relative rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]"
              />

              <div className="relative flex items-center justify-center mt-[16px]">
                <div
                  className="absolute -top-[12px] -left-[12px] flex items-center justify-center rounded-full w-[48px] h-[48px] z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, #10162F 0%, #FBBF24 100%)",
                  }}
                >
                  <span
                    className="text-[24px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    3
                  </span>
                </div>

                <div
                  className="flex items-center justify-center rounded-[16px] p-[28px] md:p-[32px]"
                  style={{
                    backgroundColor:
                      "rgba(107, 193, 227, 0.15)",
                  }}
                >
                  <Zap
                    className="size-[56px] md:size-[64px]"
                    style={{ color: "#6BC1E3" }}
                  />
                </div>
              </div>

              <div
                className="text-center text-[22px] md:text-[24px]"
                style={{ color: "#F4F7F9" }}
              >
                Efficient & Flexible
              </div>

              <div
                className="text-center text-[14px] md:text-[15px]"
                style={{ color: "rgba(244, 247, 249, 0.8)" }}
              >
                Learn at your own pace with streamlined content
                and convenient scheduling.
              </div>
            </div>

            {/* Feature 4 - Dedicated Placement Support */}
            <div className="backdrop-blur-md backdrop-filter box-border flex flex-col gap-[20px] md:gap-[24px] items-center p-[32px] md:p-[40px] relative rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[16px]"
              />

              <div className="relative flex items-center justify-center mt-[16px]">
                <div
                  className="absolute -top-[12px] -left-[12px] flex items-center justify-center rounded-full w-[48px] h-[48px] z-10"
                  style={{
                    background:
                      "linear-gradient(135deg, #10162F 0%, #FBBF24 100%)",
                  }}
                >
                  <span
                    className="text-[24px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    4
                  </span>
                </div>

                <div
                  className="flex items-center justify-center rounded-[16px] p-[28px] md:p-[32px]"
                  style={{
                    backgroundColor: "rgba(249, 168, 37, 0.15)",
                  }}
                >
                  <Briefcase
                    className="size-[56px] md:size-[64px]"
                    style={{ color: "#F9A825" }}
                  />
                </div>
              </div>

              <div
                className="text-center text-[22px] md:text-[24px]"
                style={{ color: "#F4F7F9" }}
              >
                Dedicated Placement Support
              </div>

              <div
                className="text-center text-[14px] md:text-[15px]"
                style={{ color: "rgba(244, 247, 249, 0.8)" }}
              >
                Structured placement support with resume building, interview preparation, and regular job updates to help students secure core roles.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section
        className="relative shrink-0 w-full py-[48px] md:py-[60px] lg:py-[80px]"
        style={{ backgroundColor: "#092B38" }}
      >
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          {/* Section Header */}
          <div className="text-center mb-[32px] md:mb-[48px]">
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[12px] text-[14px] tracking-[0.7px] uppercase"
              style={{ color: "#6BC1E3" }}
            >
              <p className="leading-[20px]">Testimonials</p>
            </div>
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[26px] md:text-[32px] lg:text-[36px] tracking-[-0.9px] mb-[20px] md:mb-[24px]"
              style={{ color: "#F4F7F9" }}
            >
              <p className="leading-[32px] md:leading-[36px] lg:leading-[40px]">
                Review's From Students
              </p>
            </div>
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[14px] md:text-[16px] max-w-[1000px] mx-auto"
              style={{ color: "rgba(244, 247, 249, 0.8)" }}
            >
              <p>
                Looking to enhance your expertise in mechanical
                design courses in Pune? M CAD SOLUTIONS has got
                you covered. Our platform provides
                state-of-the-art technology and an intuitive
                learning experience that helps you overcome any
                challenges on your path to success. We provide
                job oriented courses for mechanical engineers.
                We prioritize the benefits of our courses over
                the features, ensuring an endless journey of
                creativity with placement support. Our design
                courses are specifically tailored for mechanical
                engineers with a focus on BIW fixture design. we
                using CATIA V5 as a design software for
                mechanical engineering. Join us today and turn
                your aspirations into tangible achievements.
              </p>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px] md:gap-[28px] lg:gap-[32px] mb-[32px] md:mb-[48px]">
            {/* Review 1 - Shubham Indurkar */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] md:gap-[24px] p-[24px] md:p-[32px] lg:p-[40px] relative rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />

              {/* Quote Icon */}
              <div className="flex items-center justify-start">
                <div
                  className="flex items-center justify-center shrink-0 rounded-[12px] p-[12px]"
                  style={{
                    backgroundColor: "rgba(249, 168, 37, 0.15)",
                  }}
                >
                  <Quote
                    className="size-[28px] md:size-[32px]"
                    style={{ color: "#F9A825" }}
                  />
                </div>
              </div>

              {/* Review Text */}
              <div
                className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[26px] text-[13px] md:text-[15px]"
                style={{ color: "rgba(244, 247, 249, 0.85)" }}
              >
                <p>
                  I'm Shubham Indurkar I recently passout from
                  Tulsiramji Gaikwad Patil College of
                  engineering and technology. Mcad Solutions
                  played a crucial role in my career transition.
                  Their BIW Simulation training program was
                  top-notch, combining theoretical knowledge
                  with hands-on projects that mirrored
                  real-world challenges. The instructors were
                  highly knowledgeable and supportive, and the
                  placement team's assistance was invaluable.
                  Thanks to their guidance, I secured a position
                  at a leading company. I'm incredibly grateful
                  for the experience and would wholeheartedly
                  recommend M CAD Solutions to others.
                </p>
              </div>

              {/* Student Info */}
              <div className="flex gap-[16px] items-center mt-[8px]">
                <div
                  className="relative w-[48px] md:w-[56px] h-[48px] md:h-[56px] rounded-full overflow-hidden border-2"
                  style={{ borderColor: "#F9A825" }}
                >
                  <img
                    alt="Shubham Indurkar"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1727798450000-fd0e6e81c6b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1hbGUlMjBzdHVkZW50JTIwZW5naW5lZXJ8ZW58MXx8fHwxNzYxMjMxMzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div
                    className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[16px] md:text-[18px] tracking-[-0.45px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    <p className="leading-[22px] md:leading-[24px]">
                      Shubham Indurkar
                    </p>
                  </div>
                  <div
                    className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[12px] md:text-[13px]"
                    style={{ color: "#6BC1E3" }}
                  >
                    <p className="leading-[16px] md:leading-[18px]">
                      M CAD STUDENT
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-[4px] items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="size-[16px] md:size-[18px]"
                    fill="#F9A825"
                    style={{ color: "#F9A825" }}
                  />
                ))}
              </div>
            </div>

            {/* Review 2 - Shraddha Sutar */}
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[20px] md:gap-[24px] p-[24px] md:p-[32px] lg:p-[40px] relative rounded-[16px]">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />

              {/* Quote Icon */}
              <div className="flex items-center justify-start">
                <div
                  className="flex items-center justify-center shrink-0 rounded-[12px] p-[12px]"
                  style={{
                    backgroundColor:
                      "rgba(107, 193, 227, 0.15)",
                  }}
                >
                  <Quote
                    className="size-[28px] md:size-[32px]"
                    style={{ color: "#6BC1E3" }}
                  />
                </div>
              </div>

              {/* Review Text */}
              <div
                className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[22px] md:leading-[26px] text-[13px] md:text-[15px]"
                style={{ color: "rgba(244, 247, 249, 0.85)" }}
              >
                <p>
                  Thrilled to have landed a Design Engineer role
                  right after graduating! The institute's
                  curriculum was spot-on, especially the
                  practical projects and CAD training, which
                  directly prepared me for industry demands. The
                  placement cell was incredibly supportive,
                  guiding us through interviews and connecting
                  us with top companies. Feeling well-equipped
                  and excited to start my career!
                </p>
              </div>

              {/* Student Info */}
              <div className="flex gap-[16px] items-center mt-[8px]">
                <div
                  className="relative w-[48px] md:w-[56px] h-[48px] md:h-[56px] rounded-full overflow-hidden border-2"
                  style={{ borderColor: "#6BC1E3" }}
                >
                  <img
                    alt="Shraddha Sutar"
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1690166444493-b3f5fbcd4762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGZlbWFsZSUyMGVuZ2luZWVyaW5nJTIwc3R1ZGVudHxlbnwxfHx8fDE3NjEyMzEzNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <div
                    className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[16px] md:text-[18px] tracking-[-0.45px]"
                    style={{ color: "#F4F7F9" }}
                  >
                    <p className="leading-[22px] md:leading-[24px]">
                      Shraddha Sutar
                    </p>
                  </div>
                  <div
                    className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[12px] md:text-[13px]"
                    style={{ color: "#6BC1E3" }}
                  >
                    <p className="leading-[16px] md:leading-[18px]">
                      M CAD STUDENT
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-[4px] items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="size-[16px] md:size-[18px]"
                    fill="#F9A825"
                    style={{ color: "#F9A825" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;