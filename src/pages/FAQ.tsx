import React from "react";
import NavigationBar from "@/components/NavigationBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, Users, Target } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "participation" | "events" | "membership";
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      id: "1",
      question: "What is the Arunachal Pradesh Youth Parliament?",
      answer:
        "The Arunachal Pradesh Youth Parliament is a vibrant platform for youth across all ideological spectrums to express their views democratically. It serves as a catalyst for awakening young minds, nurtures future leaders, and provides pragmatic training to enhance political and social involvement among the youth of Arunachal Pradesh.",
      category: "general",
    },
    {
      id: "2",
      question: "Who can participate in the Youth Parliament sessions?",
      answer:
        "Any young person from Arunachal Pradesh between the ages of 18-35 can participate in our Youth Parliament sessions. We welcome students, working professionals, entrepreneurs, and anyone passionate about contributing to the democratic discourse and development of our state.",
      category: "participation",
    },
    {
      id: "3",
      question: "How often are Youth Parliament sessions conducted?",
      answer:
        "We conduct regular Youth Parliament sessions throughout the year, including monthly regional sessions, quarterly state-level meetings, and an annual mega event. Special sessions are also organized around important state and national issues that require youth input and discussion.",
      category: "events",
    },
    {
      id: "4",
      question: "Is there any membership fee to join the Youth Parliament?",
      answer:
        "No, there is no membership fee to join the Arunachal Pradesh Youth Parliament. We believe in making democratic participation accessible to all youth regardless of their economic background. However, participants may need to cover their own travel and accommodation expenses for outstation events.",
      category: "membership",
    },
    {
      id: "5",
      question: "What topics are typically discussed in the sessions?",
      answer:
        "Our sessions cover a wide range of topics including education policy, environmental conservation, economic development, cultural preservation, governance reforms, youth employment, digital literacy, healthcare access, infrastructure development, and social issues affecting Arunachal Pradesh.",
      category: "general",
    },
    {
      id: "6",
      question: "How can I register for upcoming events?",
      answer:
        "You can register for our events by contacting us through our official email at Arunachalyouthparliament@gmail.com or by following our social media channels where we regularly post event announcements and registration links. You can also reach out to our organizing team directly.",
      category: "participation",
    },
    {
      id: "7",
      question: "Do you provide certificates for participation?",
      answer:
        "Yes, we provide certificates of participation for all attendees of our Youth Parliament sessions. Additionally, outstanding contributors and speakers receive special recognition certificates. These certificates can be valuable for academic and professional portfolios.",
      category: "events",
    },
    {
      id: "8",
      question: "Can I propose new topics for discussion?",
      answer:
        "Absolutely! We encourage participants to propose topics that are relevant to youth and the development of Arunachal Pradesh. You can submit your topic proposals along with a brief outline to our organizing committee, and we will consider them for upcoming sessions.",
      category: "participation",
    },
    {
      id: "9",
      question: "Are there leadership opportunities within the organization?",
      answer:
        "Yes, we offer various leadership opportunities including becoming a regional coordinator, session moderator, research committee member, or event organizer. Active participants who demonstrate commitment and leadership qualities are often invited to take on these roles.",
      category: "membership",
    },
    {
      id: "10",
      question: "How does the Youth Parliament contribute to policy making?",
      answer:
        "Our Youth Parliament compiles recommendations and resolutions from our sessions into formal documents that are shared with relevant government departments and policymakers. We also organize policy advocacy campaigns and maintain dialogue with elected representatives to ensure youth voices are heard in governance.",
      category: "general",
    },
    {
      id: "11",
      question: "What is the format of a typical Youth Parliament session?",
      answer:
        "A typical session includes an opening ceremony, keynote addresses, panel discussions, breakout group sessions, presentation of resolutions, voting on key issues, and a closing ceremony. Sessions are conducted in a parliamentary format with proper procedures and protocols.",
      category: "events",
    },
    {
      id: "12",
      question: "Do you collaborate with educational institutions?",
      answer:
        "Yes, we actively collaborate with universities, colleges, and schools across Arunachal Pradesh. We organize institutional-level youth parliaments, conduct workshops on democratic participation, and partner with educational institutions for research and outreach activities.",
      category: "general",
    },
    {
      id: "13",
      question: "How can I stay updated with Youth Parliament activities?",
      answer:
        "You can stay updated by following our social media channels (Facebook, Twitter, Instagram), subscribing to our newsletter, joining our WhatsApp groups, or regularly checking our website. We also send updates through our network of regional coordinators.",
      category: "participation",
    },
    {
      id: "14",
      question: "Are there opportunities for research and publication?",
      answer:
        "Yes, we encourage research activities and provide platforms for publishing research papers, policy briefs, and articles. Outstanding research contributions are featured in our publications and may be recommended for broader academic and policy circles.",
      category: "membership",
    },
    {
      id: "15",
      question: "What support do you provide for first-time participants?",
      answer:
        "We provide comprehensive orientation sessions for first-time participants, including training on parliamentary procedures, public speaking, research methods, and policy analysis. Experienced members also serve as mentors to guide newcomers through their initial participation.",
      category: "participation",
    },
    {
      id: "16",
      question: "How do you ensure diverse representation in sessions?",
      answer:
        "We actively reach out to youth from different districts, communities, educational backgrounds, and socio-economic groups. We also ensure gender balance and include representation from tribal communities, rural areas, and marginalized sections of society in our sessions.",
      category: "general",
    },
    {
      id: "17",
      question: "What is the Annual Mega Youth Parliament Event?",
      answer:
        "Our Annual Mega Youth Parliament Event is the flagship program that brings together youth leaders from across Arunachal Pradesh for intensive discussions, policy formulation, cultural programs, and networking. It typically spans 2-3 days and includes high-profile speakers and dignitaries.",
      category: "events",
    },
    {
      id: "18",
      question: "Can working professionals participate in weekday sessions?",
      answer:
        "We understand the constraints of working professionals and often schedule sessions on weekends or evenings. We also offer virtual participation options for certain sessions and provide recorded sessions for those who cannot attend live events.",
      category: "participation",
    },
    {
      id: "19",
      question: "How do you measure the impact of Youth Parliament activities?",
      answer:
        "We measure impact through participant feedback, policy recommendations adopted by government, media coverage, follow-up actions by participants, research publications, and long-term tracking of participants' involvement in public service and leadership roles.",
      category: "general",
    },
    {
      id: "20",
      question: "What are the future plans for the Youth Parliament?",
      answer:
        "Our future plans include expanding to all districts of Arunachal Pradesh, establishing permanent youth parliament chapters in educational institutions, launching a youth policy research center, creating digital platforms for continuous engagement, and strengthening partnerships with national and international youth organizations.",
      category: "membership",
    },
  ];

  const categoryIcons = {
    general: HelpCircle,
    participation: Users,
    events: Target,
    membership: MessageCircle,
  };

  const categoryColors = {
    general: "bg-blue-500",
    participation: "bg-green-500",
    events: "bg-orange-500",
    membership: "bg-purple-500",
  };

  const getCategoryIcon = (category: FAQItem["category"]) => {
    const IconComponent = categoryIcons[category];
    return <IconComponent className="w-5 h-5" />;
  };

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
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Find answers to common questions about the Arunachal Pradesh Youth
            Parliament, participation, events, and membership
          </motion.p>
        </div>
      </div>

      {/* FAQ Categories Overview */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoryIcons).map(
              ([category, IconComponent], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div
                    className={`w-16 h-16 ${categoryColors[category as keyof typeof categoryColors]} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#000080] capitalize mb-2">
                    {category === "general" ? "General Info" : category}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {faqs.filter((faq) => faq.category === category).length}{" "}
                    questions
                  </p>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <AccordionItem
                      value={faq.id}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 px-6"
                    >
                      <AccordionTrigger className="hover:no-underline py-6">
                        <div className="flex items-center gap-4 text-left">
                          <div
                            className={`w-10 h-10 ${categoryColors[faq.category]} rounded-full flex items-center justify-center flex-shrink-0`}
                          >
                            {getCategoryIcon(faq.category)}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-[#000080] group-hover:text-orange-600 transition-colors duration-300">
                              {faq.question}
                            </h3>
                            <span className="text-sm text-gray-500 capitalize">
                              {faq.category === "general"
                                ? "General"
                                : faq.category}
                            </span>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6">
                        <div className="ml-14">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-white to-green-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#000080] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Feel free to reach out
              to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-orange-500" />
                <a
                  href="mailto:Arunachalyouthparliament@gmail.com"
                  className="text-[#000080] font-semibold hover:text-orange-600 transition-colors duration-300 text-lg"
                >
                  Arunachalyouthparliament@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:7085527246"
                  className="text-[#000080] font-semibold hover:text-orange-600 transition-colors duration-300 text-lg"
                >
                  +91 7085527246
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
