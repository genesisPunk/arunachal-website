import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import AnnouncementSection from "./AnnouncementSection";

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
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-64 h-64 mx-auto mb-4">
                <img
                  src="/ayp-new-logo-circular.png"
                  alt="Arunachal Pradesh Youth Parliament Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering the youth of Arunachal Pradesh to become agents of
              change and leaders of tomorrow through democratic participation
              and civic engagement
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#announcements"
                className="gov-button-primary inline-flex items-center justify-center"
              >
                Explore Initiatives
              </a>
              <a
                href="/about-us"
                className="gov-button-secondary inline-flex items-center justify-center"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prominent Upcoming Event Section */}
      <section id="announcements" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-2 text-[#3b82f6]">
              Upcoming Event
            </h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-4"></div>
          </div>
          <AnnouncementSection />
        </div>
      </section>

      {/* Youth Parliament Events Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Youth Parliament Events
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {initiative.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-grow">
                  {initiative.description}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors text-sm font-medium mt-auto">
                      Register Now
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-xl font-bold">
                        Registration Status
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-center py-6">
                      <p className="text-center text-lg text-gray-700">
                        To be notified soon
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-blue-800 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
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
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1G5BgPRu2M/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="w-6 h-6"
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
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/whos-who"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Who's Who
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/articles"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Articles
                  </a>
                </li>
                <li>
                  <a
                    href="/partner"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-us"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="text-slate-300 space-y-1">
                <p>
                  Office: Pine Hill Guest House and Restro, Upper Niti Vihar,
                  near MG Park, Itanagar
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
