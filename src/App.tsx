import { Suspense, useEffect } from "react";
import { useRoutes, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home";
import WhosWho from "./pages/WhosWho";
import Gallery from "./pages/Gallery";
import Articles from "./pages/Articles";
import Partner from "./pages/Partner";
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
          <Route path="/whos-who" element={<WhosWho />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
