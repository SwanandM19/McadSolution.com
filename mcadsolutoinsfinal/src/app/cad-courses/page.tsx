'use client'
import Link from 'next/link';

const image_aac248afd71ab2885ad684c165c2f055e71aaad2 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_714a313299e09962d9ecfaa72040a006e7c8f5ac = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_399f04040751c819ca5d9c07a3033f95c20d5f85 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_59c8e432554a543c8b31dff8f38ee1e9604e22bf = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const image_34707c589f392221f300eb370ba3de1742d4e624 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
const imgCatiaV5 = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution"; // ✅ CATIA image
const image_DefaultCourse = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution"; // ✅ safer fallback
import svgPaths from "../../imports/svg-9op1xbyva3";
const imgSection = "https://placehold.co/800x600/0A1C26/00D4FF?text=MCAD+Solution";
import { CTASection } from "../../components/CTASection";
import { AnimatedSection } from "../../components/AnimatedSection";

export default function CADCoursesPage() {
  const courses = [
  {
    id: 'catia',
    title: 'CATIA V5',
    description:
      'CATIA V5 is a powerful CAD software developed by Dassault Systems. It is widely used in various industries, including automotive, aerospace & manufacturing, for designing and modeling 3D products & components. It\'s mostly used in the automotive field.',
    features: ['60 Lectures', 'Industry projects'],
    duration: '1 Month',
    level: 'Intermediate to Advanced',
  },
  {
    id: 'solidworks',
    title: 'SOLIDWORKS',
    description:
      "Personality development refers to the continuous process of enhancing & refining one's individual characteristics, behaviors, attitudes & emotional intelligence to become a more well-rounded & socially adept individual. Remember that personality development is a gradual process & it's okay to take one step at a time. Be patient with yourself & focus on continuous improvement.",
    features: ['60 Lectures', 'Expert-Led Instruction'],
    duration: '1 Month',
    level: 'All Levels',
  },
  {
    id: 'ugnx',
    title: 'UGNX',
    description:
      'Soft skills are a set of non-technical, interpersonal & personal attributes that enable individuals to work well with others, communicate effectively & navigate various social situations. These skills are essential in both professional & personal settings, as they complement hard or technical skills & contribute to overall success and well-being. They can be developed and refined through self-awareness, practice, and continuous learning.',
    features: ['60 Lectures', 'Practical training'],
    duration: '1 Month',
    level: 'All Levels',
  },
];


  // ✅ Centralized image map (clean, readable, and safe)
  const courseImages = {
    ugnx: '/cadcourses_ugnx.png',
    solidworks: '/cadcourses_solidworks.png',
    catia: '/cadcoursescatiav5.jpeg',
  };

  // Map course IDs to their respective pages
  const getCoursePage = (courseId: string) => {
    const pageMap: { [key: string]: string } = {
      'catia': 'catia-v5',
      'solidworks': 'solidworks',
      'ugnx': 'ugnx'
    };
    return pageMap[courseId] || 'cad-courses';
  };

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
        <AnimatedSection className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-[32px] py-[60px]">
          {/* Left Text Column */}
          <div className="flex-1 flex flex-col gap-4 text-left text-white">
            <h5 className="text-[#6BC1E3] uppercase text-lg tracking-[0.7px] font-['Geist:Regular',sans-serif]">
              Our Programs
            </h5>

            <h1 className="text-[44px] leading-[54px] font-['Geist:Regular',sans-serif] font-normal tracking-[-1.2px]">
              CAD Training Programs
            </h1>

            <p className="text-[18px] leading-[28px] text-gray-300 max-w-[520px]">
              Industry-focused CAD courses designed to make you job-ready with
              hands-on training, real projects, and expert mentorship.
            </p>
          </div>

          {/* Right Image Card */}
          <div className="flex-1 relative max-w-[480px] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[rgba(17,24,39,0.4)] border border-white/10">
              <img
                src={'/cadcources_cadtraningprograms.png'}
                alt="CAD Training Preview"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Learning Journey Section */}
      <section
        className="relative shrink-0 w-full py-[80px]"
        style={{ backgroundColor: '#092B38' }}
      >
        <AnimatedSection className="max-w-[1280px] mx-auto px-[32px]">
          <div className="max-w-[900px] mx-auto">
            <div
              className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] mb-[32px] text-[36px] text-center tracking-[-0.9px]"
              style={{ color: '#F4F7F9' }}
            >
              <p className="leading-[44px]">
                Learning Journey with Our Comprehensive CAD Courses
              </p>
            </div>

            <div className="flex flex-col gap-[24px] text-[16px] leading-[28px] text-[rgba(244,247,249,0.8)] font-['Geist:Regular',sans-serif]">
              <p>
                Unlock the world of Computer-Aided Design with our meticulously
                crafted CAD courses. Whether you're a novice or looking to
                enhance your skills, our courses cater to all levels of
                expertise. Dive into the intricacies of CAD through engaging
                modules that balance theory and hands-on experience.
              </p>

              <p>
                What sets our CAD courses apart is our commitment to perplexity
                and burstiness in content delivery. We understand that learning
                thrives on diversity, and our courses reflect that. With a
                perfect blend of concise explanations and in-depth explorations,
                we ensure a dynamic learning experience that keeps predictability
                at bay.
              </p>

              <p>
                Explore the potential of CAD in architecture, engineering, and
                various industries. Our expert instructors guide you through the
                complexities, equipping you with practical skills that make you a
                valuable asset in the professional world. Join us today and take
                the first step towards mastering the art of Computer-Aided
                Design.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Courses Grid */}
      <section
        className="relative shrink-0 w-full py-[80px]"
        style={{ backgroundColor: '#0A1C26' }}
      >
        <AnimatedSection className="max-w-[1280px] mx-auto px-[32px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {courses.map((course) => (
              <div
                key={course.id}
                className="backdrop-blur-sm backdrop-filter bg-[rgba(0,0,0,0.4)] h-full relative rounded-[12px]"
              >
                <div className="h-full overflow-clip relative rounded-[inherit] p-[25px]">
                  <div className="mb-[16px] rounded-[8px] overflow-hidden h-[180px]">
                    <img
                      src={
                        (course.id && courseImages[course.id.toLowerCase() as keyof typeof courseImages]) ||
                        image_DefaultCourse
                      }
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col items-start mb-[8px]">
                    <h3
                      className="font-['Geist:Regular',sans-serif] text-[24px] text-[#F4F7F9] leading-[32px] tracking-[-0.6px]"
                    >
                      {course.title}
                    </h3>
                  </div>

                  <p
                    className="text-[14px] leading-[20px] mb-[16px] text-[rgba(244,247,249,0.7)]"
                  >
                    {course.description}
                  </p>

                  <div
                    className="rounded-[8px] p-[12px] mb-[16px]"
                    style={{ backgroundColor: 'rgba(107, 193, 227, 0.1)' }}
                  >
                    <div className="flex items-center justify-between mb-[8px]">
                      <span className="uppercase text-[12px] text-[rgba(244,247,249,0.6)]">
                        Duration
                      </span>
                      <span className="text-[14px] text-[#F4F7F9]">
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="uppercase text-[12px] text-[rgba(244,247,249,0.6)]">
                        Level
                      </span>
                      <span className="text-[14px] text-[#F4F7F9]">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px] mb-[20px]">
                    {course.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex gap-[8px] items-center text-[14px] text-[rgba(244,247,249,0.7)]"
                      >
                        <svg
                          className="w-[16px] h-[16px]"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d={svgPaths.p39be50}
                            stroke="#5EEAD4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/${getCoursePage(course.id)}`}
                    className="w-full rounded-full text-white font-['Geist:Regular',sans-serif] text-[14px] py-[10px] block text-center"
                    style={{
                      background:
                        'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)',
                    }}
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      {/* <CTASection /> */}
    </>
  );
}