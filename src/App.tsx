import { Suspense, useEffect, useState } from "react";
import { useRoutes, Routes, Route, useNavigate } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import Home from "./components/home";
import Gallery from "./pages/Gallery";
import ResearchPapers from "./pages/ResearchPapers";
import Articles from "./pages/Articles";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import routes from "tempo-routes";

function App() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      navigate(event.detail.path);
    };

    window.addEventListener("navigate", handleNavigate as EventListener);

    return () => {
      window.removeEventListener("navigate", handleNavigate as EventListener);
    };
  }, [navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/research-papers" element={<ResearchPapers />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        )}
      </>
    </Suspense>
  );
}

export default App;
