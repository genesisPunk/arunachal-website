import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import AnnouncementSection from "./AnnouncementSection";
import SpeakersCarousel from "./SpeakersCarousel";

import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// QR Code Component
const QRCodePopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const qrCodes = [
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://chat.whatsapp.com/sample1",
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://chat.whatsapp.com/sample2",
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://chat.whatsapp.com/sample3",
  ];

  const randomQR = qrCodes[Math.floor(Math.random() * qrCodes.length)];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            Join Our WhatsApp Group
          </DialogTitle>
          <DialogDescription className="text-center">
            Scan the QR code below to join our WhatsApp group
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center py-6">
          <img src={randomQR} alt="WhatsApp QR Code" className="w-48 h-48" />
        </div>
        <p className="text-center text-sm text-gray-600">
          Scan to join our WhatsApp group
        </p>
      </DialogContent>
    </Dialog>
  );
};

// Initiative Card Component
const InitiativeCard = ({
  initiative,
  index,
}: {
  initiative: any;
  index: number;
}) => {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          {initiative.title}
        </h3>
        <p className="text-slate-600 text-sm mb-3">{initiative.description}</p>
        <p className="text-xs text-slate-500 mb-4">{initiative.date}</p>
        <button
          onClick={() => setShowQR(true)}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
        >
          Join Initiative
        </button>
      </motion.div>
      <QRCodePopup isOpen={showQR} onClose={() => setShowQR(false)} />
    </>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/ayp-parliament-session.jpg")',
          }}
        ></div>
        {/* Overlay for blur and dull effect */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[3px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-white/50 to-green-100/30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-2 md:gap-8 mb-4 relative">
                {/* Left side image - Mobile: larger size, Desktop: same */}
                <div className="flex flex-col gap-1 md:gap-4">
                  <motion.div
                    className="w-24 h-24 md:w-32 md:h-32"
                    initial={{ opacity: 0, scale: 0, x: 50, y: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 0.8,
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                    }}
                  >
                    <img
                      src="/cultural-image-mobile-1.png"
                      alt="Cultural Image 1"
                      className="w-full h-full object-contain md:hidden"
                    />
                    <img
                      src="/cultural-image-desktop-1.png"
                      alt="Cultural Image 1"
                      className="w-full h-full object-contain hidden md:block"
                    />
                  </motion.div>
                  <motion.div
                    className="hidden md:block w-16 h-16 md:w-32 md:h-32"
                    initial={{ opacity: 0, scale: 0, x: 50, y: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 1.0,
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                    }}
                  >
                    <img
                      src="/cultural-image-desktop-2.png"
                      alt="Cultural Image 2"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>

                {/* Main logo */}
                <motion.div
                  className="w-48 h-48 md:w-64 md:h-64"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="/ayp-new-logo-circular.png"
                    alt="Arunachal Pradesh Youth Parliament Logo"
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Right side image - Mobile: larger size, Desktop: same */}
                <div className="flex flex-col gap-1 md:gap-4">
                  <motion.div
                    className="w-24 h-24 md:w-32 md:h-32"
                    initial={{ opacity: 0, scale: 0, x: -50, y: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 1.2,
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                    }}
                  >
                    <img
                      src="/cultural-image-mobile-2.png"
                      alt="Cultural Image 3"
                      className="w-full h-full object-contain md:hidden"
                    />
                    <img
                      src="/cultural-image-desktop-3.png"
                      alt="Cultural Image 3"
                      className="w-full h-full object-contain hidden md:block"
                    />
                  </motion.div>
                  <motion.div
                    className="hidden md:block w-16 h-16 md:w-32 md:h-32"
                    initial={{ opacity: 0, scale: 0, x: -50, y: -50 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{
                      duration: 1.2,
                      delay: 1.4,
                      type: "spring",
                      stiffness: 80,
                      damping: 12,
                    }}
                  >
                    <img
                      src="/cultural-image-desktop-4.png"
                      alt="Cultural Image 4"
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.p
              className="text-sm md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed font-bold px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering the youth of Arunachal Pradesh to become agents of
              change and leaders of tomorrow through democratic participation
              and civic engagement
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#announcements"
                className="inline-flex items-center justify-center text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 bg-gradient-to-r from-orange-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 hover:border-white/40"
              >
                <span>Explore Initiatives</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="/about-us"
                className="inline-flex items-center justify-center text-xs sm:text-sm md:text-base py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 md:px-6 bg-white/90 backdrop-blur-sm text-[#000080] font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-[#000080]/20 hover:border-[#000080]/40 hover:bg-white"
              >
                <span>Learn More</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section id="announcements" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnnouncementSection />
        </div>
      </section>

      {/* Youth Parliament Events Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Youth Parliament Events
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-0">
            {[
              {
                title: "District-Level Youth Parliaments",
                description:
                  "Bringing together young minds from all districts to engage locally on issues affecting their communities, creating a vibrant grassroots dialogue network.",
              },
              {
                title: "Zonal-Level Youth Parliaments",
                description:
                  "Connecting district parliaments regionally to discuss wider socio-economic and cultural topics, fostering collaboration and shared solutions across zones.",
              },
              {
                title: "Institute-Level and Mini Youth Parliaments",
                description:
                  "Conducting sessions in schools, colleges, and universities across the state to prepare students and young thinkers for active citizenship and future leadership roles.",
              },
              {
                title: "Partnerships with National Think Tanks",
                description:
                  "Providing access to expert mentorship and research exposure to broaden perspectives and policy understanding.",
              },
              {
                title: "Mentorship Programs",
                description:
                  "Linking youth with policymakers and bureaucrats to bridge the gap between young voices and decision-making processes.",
              },
              {
                title: "Inclusive Representation",
                description:
                  "Ensuring wider participation from tribal, rural, and marginalized communities to create an equitable platform for all voices.",
              },
            ].map((initiative, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-slate-800 mb-2 sm:mb-3">
                  {initiative.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-3 sm:mb-4 flex-grow leading-relaxed">
                  {initiative.description}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full bg-green-600 text-white py-2 px-3 sm:px-4 rounded-md hover:bg-green-700 transition-colors text-xs sm:text-sm font-medium mt-auto">
                      Register Now
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-transparent border-0 shadow-none rounded-3xl">
                    <DialogHeader className="text-center pb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                        Registration Status
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center py-6">
                      <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6 mb-4 border border-orange-200/50">
                        <p className="text-center text-lg text-gray-700 font-medium">
                          Registration will open soon!
                        </p>
                        <p className="text-center text-sm text-gray-600 mt-2">
                          Stay tuned for updates on our social media channels.
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Speakers & Dignitaries Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <SpeakersCarousel />
      </section>

      {/* Moments Section */}
      <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-green-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#000080] mb-6">
                AYP 2.0 Highlights
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 mx-auto mb-6 rounded-full" />
            </motion.div>

            {/* Photo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
              {[
                "/event-new-1.jpg",
                "/event-new-2.jpg",
                "/event-new-3.jpg",
                "/event-2.jpg",
              ].map((photo, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  onClick={() => (window.location.href = "/gallery")}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={photo}
                      alt={`Moment ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* View All Photos Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => (window.location.href = "/gallery")}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-green-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <span className="relative z-10 mr-3">View All Photos</span>
                <motion.svg
                  className="relative z-10 w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/20 rounded-full blur-lg" />
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Our Strategic Partners
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 mx-auto mb-4" />
              <p className="text-slate-600 max-w-2xl mx-auto">
                Collaborating with leading organizations to empower youth and
                drive positive change across Arunachal Pradesh
              </p>
            </motion.div>

            {/* Main Partners */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
                Key Partners
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    name: "Department of Youth Affairs",
                    logo: "/youth_affairs.png",
                    link: "https://www.yas.nic.in/youth-affairs/arunachal-pradesh",
                    description:
                      "Government partnership for youth development initiatives",
                  },
                  {
                    name: "Hill Society",
                    logo: "/hills_society.png",
                    link: "",
                    description:
                      "Community organization promoting cultural heritage",
                  },
                  {
                    name: "Youth Mission For Clean River",
                    logo: "/youth_mission.png",
                    link: "https://www.facebook.com/youthmissionforcleanriver/",
                    description:
                      "Environmental conservation and river cleanup initiatives",
                  },
                ].map((partner, index) => (
                  <motion.div
                    key={index}
                    className="group relative h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 group-hover:border-blue-200 h-full flex flex-col">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-green-50 opacity-0 group-hover:opacity-60 rounded-2xl transition-opacity duration-500" />

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-center mb-6">
                          <motion.div
                            className="w-32 h-32 rounded-full overflow-hidden bg-white shadow-xl border-4 border-gradient-to-r from-orange-400 via-white to-green-400"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={partner.logo}
                              alt={`${partner.name} logo`}
                              className="w-full h-full object-contain p-2"
                            />
                          </motion.div>
                        </div>

                        <h4 className="text-xl font-bold text-slate-800 mb-3 text-center group-hover:text-blue-700 transition-colors duration-300">
                          {partner.name}
                        </h4>

                        <p className="text-sm text-slate-600 text-center mb-4 leading-relaxed flex-grow">
                          {partner.description}
                        </p>

                        {partner.link && (
                          <div className="text-center mt-auto">
                            <motion.button
                              onClick={() =>
                                window.open(partner.link, "_blank")
                              }
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full text-sm font-medium hover:from-blue-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <span>Visit Website</span>
                              <svg
                                className="w-4 h-4 ml-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </motion.button>
                          </div>
                        )}
                      </div>

                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-orange-200 to-transparent rounded-full opacity-30" />
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-green-200 to-transparent rounded-full opacity-30" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* University Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-center text-slate-700 mb-8">
                Academic Partners
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {[
                  {
                    name: "Rajiv Gandhi University",
                    logo: "/rajiv-gandhi-university.jpg",
                    link: "https://new.rgu.ac.in/",
                  },
                  {
                    name: "Arunachal Law Academy",
                    logo: "/arunachal-law-academy.png",
                    link: "https://arunachallawacademy.com/",
                  },
                  {
                    name: "Himalayan University",
                    logo: "/himalayan-university.jpg",
                    link: "https://www.himalayanuniversity.com/",
                  },
                  {
                    name: "Dera Natung Government College",
                    logo: "/dera-natung-college.png",
                    link: "https://dngc.ac.in/",
                  },
                  {
                    name: "Don Bosco College",
                    logo: "/don-bosco-college.jpg",
                    link: "https://dbcitanagar.ac.in/",
                  },
                  {
                    name: "National Institute of Technology",
                    logo: "/national-institute-technology.jpg",
                    link: "https://www.nitap.ac.in/",
                  },
                  {
                    name: "North East Regional Institute",
                    logo: "/north-east-regional-institute.jpg",
                    link: "https://nerist.ac.in/",
                  },
                ].map((partner, index) => (
                  <motion.div
                    key={index}
                    className="group h-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    onClick={() =>
                      partner.link && window.open(partner.link, "_blank")
                    }
                  >
                    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 group-hover:border-slate-200 h-full flex flex-col cursor-pointer">
                      <div className="flex justify-center mb-3">
                        <motion.div
                          className="w-16 h-16 rounded-full overflow-hidden bg-slate-50 shadow-sm"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className="w-full h-full object-contain p-1"
                          />
                        </motion.div>
                      </div>
                      <h5 className="text-xs font-medium text-slate-700 text-center leading-tight group-hover:text-blue-600 transition-colors duration-300 flex-grow flex items-center justify-center">
                        {partner.name}
                      </h5>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-20 bg-blue-300 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
                Stay Connected
              </h2>
              <div className="w-24 md:w-32 h-1 bg-white mx-auto mb-4 md:mb-6 rounded-full shadow-md" />
              <p className="text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
                Follow our journey and stay updated with the latest news,
                events, and initiatives
              </p>
            </motion.div>

            {/* Two Column Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto">
              {/* First Column - Image */}
              <motion.div
                className="lg:w-3/5 w-full relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/dodum.jpg"
                    alt="Dodum Natung - Chairman, AYP"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Name and Position Overlay */}
                  <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-sm rounded-2xl p-4 text-white">
                    <div className="flex items-center space-x-6">
                      <div>
                        <h3 className="text-xl font-bold mb-1">Dodum Natung</h3>
                        <p className="text-sm text-gray-200">Chairman, AYP</p>
                      </div>
                      {/* Social Media Icons */}
                      <div className="flex space-x-2">
                        <a
                          href="https://www.facebook.com/profile.php?id=100087370252292"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a
                          href="https://x.com/DodumNatung"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center hover:from-black hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second Column - Facebook Embed (Overlapping) */}
              <motion.div
                className="lg:w-1/3 w-full lg:-ml-16 mt-8 lg:mt-0 relative z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/20 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white mb-1">
                          Facebook
                        </h3>
                        <p className="text-blue-100 text-xs">
                          Latest posts & updates
                        </p>
                      </div>
                    </div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="mb-3">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100089994003445&tabs=timeline&width=350&height=480&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="100%"
                      height="480"
                      style={{
                        border: "none",
                        overflow: "hidden",
                        width: "100%",
                        maxWidth: "100%",
                      }}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      className="rounded-2xl shadow-lg w-full"
                    ></iframe>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/profile.php?id=100089994003445",
                        "_blank",
                      )
                    }
                    className="w-full bg-blue-700 text-white py-2 px-3 rounded-2xl font-semibold text-xs hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Follow on Facebook</span>
                    <svg
                      className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 px-4">
            Join the Movement
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto mb-6 md:mb-8 px-4 leading-relaxed">
            Be part of the change you want to see. Join the Arunachal Pradesh
            Youth Parliament and make your voice heard in shaping our state's
            future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact-us"
              className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300"
            >
              Contact Us
            </Link>
            <a
              href="/about-us"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-800 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Arunachal Pradesh Youth Parliament
              </h3>
              <p className="text-slate-300 mb-4">
                Empowering youth to become agents of change through democratic
                participation and civic engagement.
              </p>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com/share/1G5BgPRu2M/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/AYPArunachal?s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center hover:from-black hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <span className="sr-only">X (Twitter)</span>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/arunachal_youth_parliament?igsh=MzFscTEzNmZ4bjRi&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.017 0C8.396 0 8.025.015 6.624.072 5.224.13 4.297.333 3.488.63c-.826.32-1.527.748-2.223 1.444-.696.696-1.125 1.397-1.444 2.223C.333 5.104.13 6.031.072 7.431.015 8.832 0 9.203 0 12.017c0 3.814.015 4.185.072 5.586.058 1.4.261 2.327.558 3.136.32.826.748 1.527 1.444 2.223.696.696 1.397 1.125 2.223 1.444.809.297 1.736.5 3.136.558 1.401.057 1.772.072 5.586.072 3.814 0 4.185-.015 5.586-.072 1.4-.058 2.327-.261 3.136-.558.826-.32 1.527-.748 2.223-1.444.696-.696 1.125-1.397 1.444-2.223.297-.809.5-1.736.558-3.136.057-1.401.072-1.772.072-5.586 0-3.814-.015-4.185-.072-5.586-.058-1.4-.261-2.327-.558-3.136-.32-.826-.748-1.527-1.444-2.223C19.777.748 19.076.32 18.25 0c-.809-.297-1.736-.5-3.136-.558C13.713.015 13.342 0 12.017 0zm0 2.162c3.204 0 3.584.012 4.85.07 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.06 1.268.072 1.646.072 4.85s-.012 3.584-.072 4.85c-.053 1.17-.249 1.805-.413 2.227-.218.562-.477.96-.896 1.382-.419.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.268.06-1.646.072-4.85.072s-3.584-.012-4.85-.072c-1.17-.053-1.805-.249-2.227-.413-.562-.218-.96-.477-1.382-.896-.419-.419-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.06-1.268-.072-1.646-.072-4.85s.012-3.584.072-4.85c.053-1.17.249-1.805.413-2.227.218-.562.477-.96.896-1.382.419-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.268-.06 1.646-.072 4.85-.072z"
                      clipRule="evenodd"
                    />
                    <path d="M12.017 15.33a3.312 3.312 0 1 1 0-6.624 3.312 3.312 0 0 1 0 6.624zM12.017 7.052a4.963 4.963 0 1 0 0 9.926 4.963 4.963 0 0 0 0-9.926zM18.286 6.776a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Research Papers", path: "/research-papers" },
                  { name: "About Us", path: "/about-us" },
                  { name: "Contact Us", path: "/contact-us" },
                  { name: "FAQ", path: "/faq" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.path}
                      className="text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="text-slate-300 space-y-1">
                <p>
                  Office: Pine Hill apartment, upper niti vihar, opposite MG
                  Park, Itanagar
                </p>
                <p>Email: Arunachalyouthparliament@gmail.com</p>
                <p>Phone: +917085527246</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              &copy; {new Date().getFullYear()} Arunachal Pradesh Youth
              Parliament. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
