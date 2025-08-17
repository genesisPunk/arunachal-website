import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Pine Hill Guest House and Restro"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["7085527246", "6909667552", "7005757458"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["Arunachalyouthparliament@gmail.com"],
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "9 AM to 5 PM",
        "(Except on Saturday, Sundays and govt notified holidays)",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      {/* Header */}
      <div className="bg-gradient-to-b from-orange-500 via-white to-green-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#000080] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in touch with us for inquiries, collaborations, or to join our
            youth initiatives
          </motion.p>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-[#000080] mb-8">
                Get In Touch
              </h2>
              <p className="text-gray-700 mb-12 text-lg max-w-2xl mx-auto">
                We'd love to hear from you! Whether you have questions about our
                programs, want to get involved, or need assistance, our team is
                here to help.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const isEmailOrOfficeHours =
                  info.title === "Email" || info.title === "Office Hours";
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[200px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                        <div>
                          <h3 className="font-semibold text-[#000080] mb-2 text-lg">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) =>
                              info.title === "Email" ? (
                                <a
                                  key={idx}
                                  href={`mailto:${detail}`}
                                  className="text-blue-600 hover:text-blue-800 text-sm leading-relaxed break-words underline transition-colors duration-200 block"
                                >
                                  {detail}
                                </a>
                              ) : (
                                <p
                                  key={idx}
                                  className="text-gray-700 text-sm leading-relaxed break-words"
                                >
                                  {detail}
                                </p>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Media Links */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#000080] mb-6">
                Follow Us
              </h3>
              <div className="flex justify-center space-x-8">
                <a
                  href="https://www.facebook.com/share/1G5BgPRu2M/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-3"
                >
                  <svg
                    className="w-8 h-8 text-white"
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
                  className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center hover:from-black hover:to-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:rotate-3"
                >
                  <svg
                    className="w-8 h-8 text-white"
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
                  className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-rotate-3"
                >
                  <svg
                    className="w-8 h-8 text-white"
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
