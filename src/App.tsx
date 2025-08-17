import { Suspense, useEffect } from "react";
import { useRoutes, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home";
import Gallery from "./pages/Gallery";
import ResearchPapers from "./pages/ResearchPapers";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import routes from "tempo-routes";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigate = (event: CustomEvent) => {
      navigate(event.detail.path);
    };

    window.addEventListener("navigate", handleNavigate as EventListener);

    return () => {
      window.removeEventListener("navigate", handleNavigate as EventListener);
    };
  }, [navigate]);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/research-papers" element={<ResearchPapers />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
