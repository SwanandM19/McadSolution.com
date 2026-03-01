const image_eb8365b9c5ecfe2fca21e4f849236ebb7d107b90 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_19450e4933b9541de2bc421a5d14bc8bcd13b146 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import svgPaths from "../imports/svg-9op1xbyva3";
const imgSection1 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_50df78cf249e7e1fe6c20c29a0164d1e171ce1ec = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgMap = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { AnimatedSection } from "../components/AnimatedSection";

export function ContactPage() {
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
        {/* Content Container */}
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
              Contact us to learn more about our courses and get
              personalized guidance.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="flex-1 relative max-w-[480px] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
              <img
                src={
                  image_eb8365b9c5ecfe2fca21e4f849236ebb7d107b90
                }
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
              <p
                className="text-[24px] leading-[32px]"
                style={{ color: "#F4F7F9" }}
              >
                Contact Information
              </p>
              <p
                className="text-[14px] leading-[20px]"
                style={{ color: "rgba(244, 247, 249, 0.7)" }}
              >
                Reach out to us for course details and
                enrollment
              </p>
            </div>

            {/* First Name + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full">
              {/* First Name */}
              <div className="flex flex-col gap-[6px] w-full">
                <label
                  className="text-[14px]"
                  style={{ color: "#F4F7F9" }}
                >
                  First Name
                </label>
                <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
                    style={{ color: "#F4F7F9" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-[6px] w-full">
                <label
                  className="text-[14px]"
                  style={{ color: "#F4F7F9" }}
                >
                  Last Name
                </label>
                <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
                    style={{ color: "#F4F7F9" }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>
            </div>

            {/* Email ID */}
            <div className="flex flex-col gap-[6px] w-full">
              <label
                className="text-[14px]"
                style={{ color: "#F4F7F9" }}
              >
                Email ID
              </label>
              <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
                  style={{ color: "#F4F7F9" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="flex flex-col gap-[6px] w-full">
              <label
                className="text-[14px]"
                style={{ color: "#F4F7F9" }}
              >
                Mobile Number
              </label>
              <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full bg-transparent px-[13px] py-[11px] text-[16px] outline-none placeholder:text-gray-500"
                  style={{ color: "#F4F7F9" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                />
              </div>
            </div>

            {/* Type Your Message */}
            <div className="flex flex-col gap-[6px] w-full">
              <label
                className="text-[14px]"
                style={{ color: "#F4F7F9" }}
              >
                Type Your Message
              </label>
              <div className="bg-[rgba(0,0,0,0.4)] rounded-[8px] relative">
                <textarea
                  rows={4}
                  placeholder="Write your message here..."
                  className="w-full bg-transparent px-[13px] py-[11px] text-[16px] resize-none outline-none placeholder:text-gray-500"
                  style={{ color: "#F4F7F9" }}
                />
                <div
                  aria-hidden="true"
                  className="absolute border border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none rounded-[8px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="rounded-[9999px] w-full py-[12px] text-[14px] transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(90deg, #10162F 0%, #FBBF24 100%)",
                color: "#F4F7F9",
              }}
            >
              Submit Inquiry
            </button>
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
            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
                <div className="relative shrink-0 size-[24px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
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

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
                <div className="relative shrink-0 size-[24px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
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
                  <p>Mon-Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md backdrop-filter box-border content-stretch flex flex-col gap-[16px] items-center p-[32px] relative rounded-[16px] text-center">
              <div
                aria-hidden="true"
                className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]"
              />
              <div className="bg-gray-800 content-stretch flex items-center justify-center rounded-[8px] size-[48px]">
                <div className="relative shrink-0 size-[24px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 20 20"
                  >
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
                  <p>Pune, Maharashtra</p>
                  <p>India - 411001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
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
              <p className="leading-[36px] md:leading-[44px]">
                Visit Our Institute
              </p>
            </div>
          </div>
          <div className="backdrop-blur-md backdrop-filter box-border relative rounded-[16px] overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10"
            />
            <img
              src={imgMap}
              alt="MCAD Solutions Location - 1st floor, FMCIII BUILDING, Marathwada Mitra Mandal College of Engineering Rd, Pune"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}