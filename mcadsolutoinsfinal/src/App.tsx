import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./route-pages/HomePage";
import { AboutPage } from "./route-pages/AboutPage";
import { CADCoursesPage } from "./route-pages/CADCoursesPage";
import { DomainCoursesPage } from "./route-pages/DomainCoursesPage";
import { BIWFeatureDesignPage } from "./route-pages/BIWFeatureDesignPage";
import { InteriorPlasticPage } from "./route-pages/InteriorPlasticPage";
import { RoboticsSimulationPage } from "./route-pages/RoboticsSimulationPage";
import { ContactPage } from "./route-pages/ContactPage";
import { BlogPage } from "./route-pages/BlogPage";
import { BlogDetailPage } from "./route-pages/BlogDetailPage";
import { PlacementsPage } from "./route-pages/PlacementsPage";
import { CareersPage } from "./route-pages/CareersPage";
import { TieUpsPage } from "./route-pages/TieUpsPage";
import { Industry4Page } from "./route-pages/Industry4Page";
import { CatiaV5Page } from "./route-pages/CatiaV5Page";
import { SolidworksPage } from "./route-pages/SolidworksPage";
import { UGNXPage } from "./route-pages/UGNXPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [blogId, setBlogId] = useState<number | undefined>(undefined);

  const handleNavigate = (page: string, id?: number) => {
    setCurrentPage(page);
    if (id !== undefined) {
      setBlogId(id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'cad-courses':
        return <CADCoursesPage onNavigate={handleNavigate} />;
      case 'domain-courses':
        return <DomainCoursesPage />;
      case 'biw-fixture-design':
        return <BIWFeatureDesignPage />;
      case 'interior-plastic':
        return <InteriorPlasticPage />;
      case 'robotics':
        return <RoboticsSimulationPage />;
      case 'industry4':
        return <Industry4Page onNavigate={handleNavigate} />;
      case 'placements':
        return <PlacementsPage onNavigate={handleNavigate} />;
      case 'careers':
        return <CareersPage onNavigate={handleNavigate} />;
      case 'tie-ups':
        return <TieUpsPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'blog-detail':
        return <BlogDetailPage blogId={blogId} onNavigate={handleNavigate} />;
      case 'catia-v5':
        return <CatiaV5Page onNavigate={handleNavigate} />;
      case 'solidworks':
        return <SolidworksPage onNavigate={handleNavigate} />;
      case 'ugnx':
        return <UGNXPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="content-stretch flex flex-col items-center relative w-full min-h-screen scroll-smooth" style={{ backgroundColor: '#0A1C26' }}>
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="w-full">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Add cursor pointer to all buttons and links */
        button,
        a,
        [role="button"] {
          cursor: pointer;
        }
        
        /* Enhance button hover effects globally */
        button:not(:disabled):hover,
        a:hover {
          opacity: 0.9;
        }
        
        button:not(:disabled):active,
        a:active {
          transform: scale(0.98);
        }
        
        /* Smooth transitions for all interactive elements */
        button,
        a {
          transition: all 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}