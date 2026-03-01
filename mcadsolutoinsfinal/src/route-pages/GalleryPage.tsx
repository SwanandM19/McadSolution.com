import { useState } from "react";
import { Monitor, Users, Award, Calendar, Image as ImageIcon, X } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection } from "../components/AnimatedSection";

interface GalleryPageProps {
  onNavigate?: (page: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Photos", icon: ImageIcon },
    { id: "infrastructure", label: "Infrastructure & Labs", icon: Monitor },
    { id: "classroom", label: "Classroom Sessions", icon: Users },
    { id: "workshops", label: "Workshops & Events", icon: Calendar },
    { id: "placements", label: "Placement Ceremonies", icon: Award }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "infrastructure",
      title: "State-of-the-Art Computer Lab",
      description: "Modern CAD workstations with latest software",
      image: "https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MTYwMzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      category: "infrastructure",
      title: "Professional Workspace",
      description: "Industry-standard training environment",
      image: "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzYxNTM1MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      category: "classroom",
      title: "Interactive Training Sessions",
      description: "Expert instructors teaching CATIA V5",
      image: "https://images.unsplash.com/photo-1759922378100-89dca9fe3c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjB0cmFpbmluZyUyMHNlc3Npb258ZW58MXx8fHwxNzYxNjAzMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      category: "classroom",
      title: "Hands-On CAD Training",
      description: "Students learning on real projects",
      image: "https://images.unsplash.com/photo-1629359652978-a5d383151c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY29tcHV0ZXJzfGVufDF8fHx8MTc2MTYwMzI1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 5,
      category: "workshops",
      title: "Engineering Workshop",
      description: "Practical design and engineering sessions",
      image: "https://images.unsplash.com/photo-1563770660834-82b48f27ec9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGVuZ2luZWVyaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYxNjAzMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 6,
      category: "workshops",
      title: "Industry Expert Workshops",
      description: "Guest lectures from automotive professionals",
      image: "https://images.unsplash.com/photo-1689236673934-66f8e9d9279b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21wdXRlciUyMGxhYiUyMHN0dWRlbnRzfGVufDF8fHx8MTc2MTYwMzI1M3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 7,
      category: "placements",
      title: "Placement Celebration",
      description: "Students celebrating successful placements",
      image: "https://images.unsplash.com/photo-1686213011624-8578b598ef0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBzdHVkZW50c3xlbnwxfHx8fDE3NjE0ODcwODd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 8,
      category: "placements",
      title: "Job Offer Ceremony",
      description: "Congratulating our successful graduates",
      image: "https://images.unsplash.com/photo-1590650423710-ffa6e7f63440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjE2MDMxNjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 9,
      category: "infrastructure",
      title: "CAD Workstation Setup",
      description: "High-performance computers for design work",
      image: "https://images.unsplash.com/photo-1629359652978-a5d383151c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY29tcHV0ZXJzfGVufDF8fHx8MTc2MTYwMzI1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 10,
      category: "classroom",
      title: "Group Learning Sessions",
      description: "Collaborative project work environment",
      image: "https://images.unsplash.com/photo-1759922378100-89dca9fe3c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjB0cmFpbmluZyUyMHNlc3Npb258ZW58MXx8fHwxNzYxNjAzMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 11,
      category: "workshops",
      title: "Technical Seminar",
      description: "Industry trends and CAD innovations",
      image: "https://images.unsplash.com/photo-1563770660834-82b48f27ec9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGVuZ2luZWVyaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzYxNjAzMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 12,
      category: "placements",
      title: "Corporate Visit",
      description: "Students visiting partner companies",
      image: "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzYxNTM1MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #071E28 35%, #092B38 70%, #0C3C4D 100%)'
        }}
      >
        <AnimatedSection className="relative z-10 max-w-[1280px] mx-auto px-[16px] md:px-[32px] py-[60px] md:py-[100px]">
          <div className="flex flex-col items-center text-center gap-[20px] md:gap-[24px]">
            <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[14px] tracking-[0.7px] uppercase" style={{ color: '#6BC1E3' }}>
              <p className="leading-[20px]">Gallery</p>
            </div>
            
            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] leading-[44px] md:leading-[56px] lg:leading-[64px] tracking-[-1.2px] md:tracking-[-1.5px] max-w-[800px]" style={{ color: '#F4F7F9' }}>
              Explore Our Training Environment
            </h1>
            
            <p className="text-[15px] md:text-[18px] leading-[24px] md:leading-[28px] max-w-[680px]" style={{ color: 'rgba(244, 247, 249, 0.8)' }}>
              Take a visual tour of our state-of-the-art facilities, vibrant classroom sessions, hands-on workshops, and memorable placement celebrations.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] md:gap-[20px] mt-[24px] md:mt-[32px] w-full max-w-[800px]">
              <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="flex flex-col gap-[8px] items-center">
                  <Monitor className="w-[32px] h-[32px] mb-[4px]" style={{ color: '#6BC1E3' }} />
                  <div className="text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                    Modern Labs
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="flex flex-col gap-[8px] items-center">
                  <Users className="w-[32px] h-[32px] mb-[4px]" style={{ color: '#6BC1E3' }} />
                  <div className="text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                    Live Classes
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="flex flex-col gap-[8px] items-center">
                  <Calendar className="w-[32px] h-[32px] mb-[4px]" style={{ color: '#6BC1E3' }} />
                  <div className="text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                    Workshops
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md backdrop-filter box-border p-[20px] md:p-[24px] relative rounded-[12px]">
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
                <div className="flex flex-col gap-[8px] items-center">
                  <Award className="w-[32px] h-[32px] mb-[4px]" style={{ color: '#6BC1E3' }} />
                  <div className="text-[14px] leading-[20px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                    Celebrations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Gallery Section */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#0A1C26' }}>
        <AnimatedSection className="max-w-[1280px] mx-auto px-[16px] md:px-[32px]">
          
          {/* Category Filter */}
          <div className="backdrop-blur-md backdrop-filter box-border p-[12px] md:p-[16px] relative rounded-[16px] mb-[32px] md:mb-[48px]">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="flex flex-wrap gap-[8px] md:gap-[12px] justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-[8px] px-[16px] md:px-[20px] py-[10px] md:py-[12px] rounded-[8px] transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-[rgba(107,193,227,0.2)]'
                        : 'hover:bg-[rgba(255,255,255,0.05)]'
                    }`}
                  >
                    <Icon 
                      className="w-[18px] h-[18px]" 
                      style={{ 
                        color: selectedCategory === category.id ? '#6BC1E3' : 'rgba(244, 247, 249, 0.7)' 
                      }} 
                    />
                    <span 
                      className="text-[13px] md:text-[14px] leading-[20px]"
                      style={{ 
                        color: selectedCategory === category.id ? '#6BC1E3' : 'rgba(244, 247, 249, 0.7)' 
                      }}
                    >
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[24px]">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group backdrop-blur-md backdrop-filter box-border relative rounded-[16px] overflow-hidden cursor-pointer hover:border-[rgba(107,193,227,0.3)] transition-all duration-300"
                onClick={() => setSelectedImage(item.image)}
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] z-10" />
                
                {/* Image */}
                <div className="relative w-full h-[240px] md:h-[280px] overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,28,38,0.95)] via-[rgba(10,28,38,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-[20px] md:p-[24px]">
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] text-[16px] md:text-[18px] tracking-[-0.45px] mb-[8px]" style={{ color: '#F4F7F9' }}>
                      <p className="leading-[24px] md:leading-[28px]">{item.title}</p>
                    </div>
                    <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[20px] text-[13px] md:text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-[60px]">
              <ImageIcon className="w-[64px] h-[64px] mx-auto mb-[20px]" style={{ color: 'rgba(244, 247, 249, 0.3)' }} />
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[20px] tracking-[-0.5px] mb-[8px]" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p className="leading-[28px]">No images found</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] text-[14px]" style={{ color: 'rgba(244, 247, 249, 0.5)' }}>
                <p>Try selecting a different category</p>
              </div>
            </div>
          )}
        </AnimatedSection>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-[rgba(0,0,0,0.9)] z-50 flex items-center justify-center p-[16px] md:p-[32px]"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-[16px] md:top-[24px] right-[16px] md:right-[24px] p-[12px] rounded-[8px] backdrop-blur-md backdrop-filter bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors z-10"
          >
            <X className="w-[24px] h-[24px]" style={{ color: '#F4F7F9' }} />
          </button>
          
          <div className="relative max-w-[90vw] max-h-[90vh] rounded-[12px] overflow-hidden">
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="relative shrink-0 w-full py-[60px] md:py-[80px]" style={{ backgroundColor: '#092B38' }}>
        <div className="max-w-[1024px] mx-auto px-[16px] md:px-[32px]">
          <div className="backdrop-blur-md backdrop-filter box-border flex flex-col items-center gap-[24px] md:gap-[32px] p-[32px] md:p-[48px] relative rounded-[24px] text-center">
            <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
            
            <div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center text-[28px] md:text-[36px] lg:text-[40px] tracking-[-0.9px] md:tracking-[-1px] mb-[16px]" style={{ color: '#F4F7F9' }}>
                <p className="leading-[36px] md:leading-[44px] lg:leading-[48px]">Ready to Join Us?</p>
              </div>
              <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[24px] md:leading-[28px] text-[15px] md:text-[16px] max-w-[640px] mx-auto" style={{ color: 'rgba(244, 247, 249, 0.7)' }}>
                <p>Experience world-class CAD training in our modern facilities. Book a free demo class and visit our campus today!</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-[12px]">
              <button 
                onClick={() => onNavigate?.('contact')}
                className="bg-black box-border content-stretch flex items-center justify-center overflow-clip px-[32px] md:px-[42px] py-[18px] md:py-[22px] relative rounded-[9999px] hover:opacity-90 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, #10162F 0%, #FBBF24 100%)'
                }}
              >
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] md:text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[24px] whitespace-pre">Book Campus Tour</p>
                </div>
              </button>
              
              <button 
                onClick={() => onNavigate?.('contact')}
                className="backdrop-blur backdrop-filter bg-[rgba(255,255,255,0.1)] box-border content-stretch flex gap-[8px] items-center justify-center px-[24px] md:px-[32px] py-[18px] md:py-[22px] relative rounded-[9999px] hover:bg-[rgba(107,193,227,0.15)] transition-colors"
              >
                <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                <div className="flex flex-col font-['Geist:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] md:text-[16px] text-center text-nowrap" style={{ color: '#F4F7F9' }}>
                  <p className="leading-[24px] whitespace-pre">Enroll Now</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
