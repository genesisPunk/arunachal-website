import React, { useEffect, useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Newspaper, Sparkles, X } from "lucide-react";

const Gallery = () => {
  const [showTrophy, setShowTrophy] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const awardsSection = document.getElementById("awards-section");
      const mediaSection = document.getElementById("media-section");

      if (awardsSection && mediaSection) {
        const awardsSectionTop = awardsSection.offsetTop;
        const awardsSectionBottom =
          awardsSection.offsetTop + awardsSection.offsetHeight;
        const mediaSectionTop = mediaSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Show trophy when entering awards section, hide when media section starts
        if (
          scrollPosition >= awardsSectionTop &&
          scrollPosition < mediaSectionTop
        ) {
          setShowTrophy(true);
        } else {
          setShowTrophy(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // General event photos (12 photos)
  const generalPhotos = [
    "/event-new-1.jpg",
    "/event-new-2.jpg",
    "/event-new-3.jpg",
    "/event-2.jpg",
    "/event-3.jpg",
    "/event-4.jpg",
    "/ayp-parliament-session.jpg",
    "/digital-age-challenges.jpg",
    "/environmental-responsibility.jpg",
    "/investment-behavior.jpg",
    "/mental-health-new.png",
    "/social-media-education.jpg",
  ];

  // Award photos (18 photos)
  const awardPhotos = [
    "/award-1.jpg",
    "/award-2.jpg",
    "/award-3.jpg",
    "/award-4.jpg",
    "/award-5.jpg",
    "/award-6.jpg",
    "/award-7.jpg",
    "/award-8.jpg",
    "/award-9.jpg",
    "/award-10.jpg",
    "/award-11.jpg",
    "/award-12.jpg",
    "/award-13.jpg",
    "/award-14.jpg",
    "/award-15.jpg",
    "/award-16.jpg",
    "/award-17.jpg",
    "/award-18.jpg",
  ];

  // Media coverage photos (3 photos)
  const mediaCoveragePhotos = [
    "/media-new-1.jpg",
    "/media-new-2.jpg",
    "/media-new-3.jpg",
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      {/* Header */}
      <div className="bg-gradient-to-b from-orange-500 via-white to-green-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#000080] mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Capturing moments of excellence, achievements, and media highlights
          </motion.p>
        </div>
      </div>

      {/* General Photos Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {generalPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(photo)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo}
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        id="awards-section"
        className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative overflow-hidden min-h-screen"
      >
        {/* Fixed Trophy Image with Enhanced Sparkling Effect */}
        <motion.div
          className="fixed left-8 top-1/3 transform -translate-y-1/3 z-10 hidden lg:block"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{
            opacity: showTrophy ? 1 : 0,
            x: showTrophy ? 0 : -100,
            scale: showTrophy ? 1 : 0.8,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Enhanced Sparkling particles around trophy */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${5 + (i % 6) * 15}%`,
                    top: `${5 + Math.floor(i / 6) * 15}%`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                    x: [0, Math.sin(i * 0.5) * 15, 0],
                    y: [0, Math.cos(i * 0.5) * 15, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400 drop-shadow-lg" />
                </motion.div>
              ))}
            </div>

            {/* Multiple glowing ring effects */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.3), 0 0 120px rgba(255, 215, 0, 0.1)",
                  "0 0 60px rgba(255, 215, 0, 0.8), 0 0 120px rgba(255, 215, 0, 0.5), 0 0 180px rgba(255, 215, 0, 0.2)",
                  "0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.3), 0 0 120px rgba(255, 215, 0, 0.1)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.img
              src="/trophy.png"
              alt="Trophy"
              className="w-80 h-auto object-contain drop-shadow-2xl relative z-10"
              style={{
                filter:
                  "drop-shadow(0 30px 60px rgba(255, 215, 0, 0.6)) brightness(1.1)",
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, -3, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Multiple rotating golden rings */}
            <motion.div
              className="absolute inset-0 border-4 border-yellow-400/40 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "320px",
                height: "320px",
                left: "-20px",
                top: "-20px",
              }}
            />
            <motion.div
              className="absolute inset-0 border-3 border-yellow-300/30 rounded-full"
              animate={{ rotate: -360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "350px",
                height: "350px",
                left: "-35px",
                top: "-35px",
              }}
            />
            <motion.div
              className="absolute inset-0 border-2 border-yellow-200/20 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "380px",
                height: "380px",
                left: "-50px",
                top: "-50px",
              }}
            />
          </div>
        </motion.div>

        <div className="container mx-auto px-4 lg:pl-80">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-[#000080] mb-4">
                Awards & Recognition
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full" />
            </div>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {awardPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="overflow-hidden">
                    <img
                      src={`${photo}?w=600&q=60`}
                      alt={`Award ${index + 1}`}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 via-transparent to-transparent" />
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  {/* Golden border effect on hover */}
                  <div className="absolute inset-0 border-2 border-yellow-400/0 group-hover:border-yellow-400/50 rounded-2xl transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </section>

      {/* Media Coverage Section */}
      <section
        id="media-section"
        className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-5xl font-bold text-[#000080] mb-4">
                  Media Coverage
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto rounded-full" />
                <Newspaper className="absolute -top-2 -right-12 w-8 h-8 text-blue-500 opacity-60" />
              </div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-6">
                Featured coverage of our initiatives and events in leading
                publications
              </p>
            </motion.div>

            {/* Media Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  image: "/event-1.png",
                  publication: "Event Coverage",
                },
                {
                  image: "/media-coverage-1.jpg",
                  publication: "The Arunachal Times",
                },
                {
                  image: "/media-coverage-2.jpg",
                  publication: "Arunachal Front",
                },
                {
                  image: "/media-coverage-3.jpg",
                  publication: "Arunachal Front",
                },
              ].map((article, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedImage(article.image)}
                >
                  {/* Article Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={`Media coverage by ${article.publication}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 px-4 py-2 rounded-xl border border-gradient-to-r from-blue-200 to-purple-200 shadow-lg backdrop-blur-sm">
                        {article.publication}
                      </span>
                    </div>
                  </div>

                  {/* Border Effect */}
                  <div className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-400/30 rounded-2xl transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-200/30 rounded-full blur-lg" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-200/20 rounded-full blur-md" />
      </section>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-2xl shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
