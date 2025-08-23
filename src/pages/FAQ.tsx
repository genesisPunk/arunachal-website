import React from "react";
import NavigationBar from "@/components/NavigationBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      id: "1",
      question: "What is the Arunachal Youth Parliament?",
      answer:
        "Arunachal Youth Parliament is a vibrant platform for people from all walks of life to express their views democratically. It serves as a catalyst for awakening minds, nurturing future leaders, and providing pragmatic training to enhance political and social involvement across the state.",
    },
    {
      id: "2",
      question: "What is AYP's mission and vision?",
      answer:
        "Our mission is to encourage engagement with public issues, develop decision-making abilities, and document diverse perspectives for a new Arunachal. Our vision is to empower democratic dialogue, cultivate leadership and civic responsibility, and address state issues innovatively while compiling opinions in an ISBN-registered publication.",
    },
    {
      id: "3",
      question: "Who can participate in AYP events?",
      answer:
        "AYP welcomes everyone - students, scholars, professionals, bureaucrats, civil servants, common citizens, and people from all backgrounds. We ensure inclusive representation from tribal, rural, and marginalized communities to create an equitable platform for all voices across Arunachal Pradesh.",
    },
    {
      id: "4",
      question: "What types of events does AYP organize?",
      answer:
        "AYP organizes events at multiple levels:\n- District-Level Youth Parliaments: Engaging local communities on issues affecting their districts\n- Zonal-Level Youth Parliaments: Regional discussions on socio-economic and cultural topics\n- Institute-Level Parliaments: Sessions conducted in schools, colleges, and universities\n- Mini Youth Parliaments: Smaller focused discussions in various institutions\n- Annual Mega Youth Parliament Event: Flagship event bringing together top representatives from all forums\n- Environmental and cultural initiatives through various partnerships",
    },
    {
      id: "5",
      question: "How does the multi-level parliament system work?",
      answer:
        "We start with district-level parliaments that create grassroots dialogue. These feed into zonal-level parliaments that connect districts regionally for broader discussions. Institute-level and mini parliaments prepare participants for active citizenship. All culminate in our annual mega event where top representatives debate pressing issues and engage directly with senior policymakers.",
    },
    {
      id: "6",
      question: "Do you have a fixed theme for events?",
      answer:
        "No, themes change with each event based on current issues, community needs, and regional priorities. This allows us to address relevant and timely topics that matter most to participants and society.",
    },
    {
      id: "7",
      question: "Where do AYP events take place?",
      answer:
        "Event venues vary based on the type of program, availability, and logistical considerations. We adapt our locations to ensure maximum accessibility and participation across different regions of Arunachal Pradesh.",
    },
    {
      id: "8",
      question: "How can I register for AYP events?",
      answer:
        "Registration details are announced for each specific event through our official channels. Methods may include online forms, institutional nominations, or direct applications depending on the event type.",
    },
    {
      id: "9",
      question: "Is there any age restriction for participation?",
      answer:
        "While we focus on youth empowerment, AYP welcomes participants of all ages - from school students to senior professionals and bureaucrats. Our inclusive approach ensures diverse perspectives in democratic dialogue.",
    },
    {
      id: "10",
      question: "Do I need to represent an institution to participate?",
      answer:
        "Not necessarily. While institutional participation is encouraged, individuals from various backgrounds including professionals, bureaucrats, and community members can participate based on event-specific guidelines.",
    },
    {
      id: "11",
      question: "Is there any fee for participation?",
      answer:
        "Fee structures (if any) vary by event and will be clearly mentioned in the registration guidelines for each specific program.",
    },
    {
      id: "12",
      question: "How can I contact AYP?",
      answer:
        "You can reach us through:\n- Email: Arunachalyouthparliament@gmail.com\n- Phone: 7085527246, 6909667552, 7005757458, 8415812384\n- Office: Pine Hill apartment, upper niti vihar, opposite MG Park, Itanagar\n- Office Hours: 9 AM to 5 PM (Except Saturdays, Sundays, and government holidays)",
    },
    {
      id: "13",
      question: "Where can I follow AYP for updates?",
      answer:
        "Follow us on:\n- Facebook: https://www.facebook.com/share/1G5BgPRu2M/\n- X (Twitter): https://x.com/AYPArunachal?s=08\n- Email: Arunachalyouthparliament@gmail.com",
    },
    {
      id: "14",
      question: "Who should I contact for specific queries?",
      answer:
        "Our leadership team includes:\n- Dodum Natung - Chairman, AYP\n- Vikash Dada - Organizing Secretary\n- Dr. Prem Taba - Convenor\n- Prem Camdir Tallang - Convenor",
    },
    {
      id: "15",
      question: "Does AYP offer mentorship programs?",
      answer:
        "Yes! We provide mentorship programs that link participants with policymakers and bureaucrats to bridge the gap between diverse voices and decision-making processes.",
    },
    {
      id: "16",
      question:
        "How do you ensure participation from rural and marginalized communities?",
      answer:
        "We specifically design outreach programs for tribal, rural, and marginalized communities. Our district and zonal-level approach ensures geographic and demographic diversity in participation.",
    },
    {
      id: "17",
      question: "Can my institution host a parliament session?",
      answer:
        "Yes! We conduct sessions in schools, colleges, universities, and other institutions across the state. Contact us to discuss hosting opportunities and collaboration possibilities.",
    },
    {
      id: "18",
      question: "Does AYP work beyond just debates and discussions?",
      answer:
        "Yes, we collaborate with various initiatives including environmental projects like river cleanup drives, cultural events like festivals, and research publications to create comprehensive community engagement.",
    },
    {
      id: "19",
      question: "How do you select topics for discussion?",
      answer:
        "Topics are chosen based on current societal needs, regional issues, participant interests, and expert recommendations. Each event may focus on different themes relevant to the time and community.",
    },
    {
      id: "20",
      question: "How are participants selected for the mega event?",
      answer:
        "Top representatives from district-level and zonal-level parliaments, along with outstanding participants from institutional sessions, are invited to participate in our annual mega event.",
    },
    {
      id: "21",
      question: "Do you provide certificates or recognition?",
      answer:
        "Yes, we provide appropriate recognition and certificates to participants based on the event format and their level of engagement.",
    },
    {
      id: "22",
      question: "Does AYP publish research or policy papers?",
      answer:
        "Yes, we document perspectives and publish research papers. We work towards compiling diverse opinions in an ISBN-registered publication to contribute to policy development and social discourse.",
    },
    {
      id: "23",
      question: "How can I contribute to AYP's research initiatives?",
      answer:
        "Contact us through our official channels to discuss research contributions, policy papers, or collaboration opportunities in our publication efforts.",
    },
    {
      id: "24",
      question: "How does AYP contribute to governance and policy-making?",
      answer:
        "Through our structured approach from grassroots to state level, we channel diverse perspectives to policymakers. Our mentorship programs and direct engagement with bureaucrats ensure that community voices reach decision-making processes.",
    },
    {
      id: "25",
      question: "Can government officials and bureaucrats participate?",
      answer:
        "Absolutely! We encourage participation from civil servants, bureaucrats, and government officials as both participants and mentors, creating valuable dialogue between citizens and administration.",
    },
    {
      id: "26",
      question: "How can organizations partner with AYP?",
      answer:
        "We welcome partnerships with educational institutions, government bodies, NGOs, and community organizations. Contact our team to explore collaboration opportunities that align with our democratic dialogue mission.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-white/40 to-green-500/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover everything you need to know about the Arunachal Pradesh
              Youth Parliament
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={faq.id}
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-[#000080] hover:text-orange-600 transition-colors duration-300 py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                      <div className="whitespace-pre-line">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? We're here to help!
              Reach out to us directly and we'll get back to you as soon as
              possible.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="mailto:Arunachalyouthparliament@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Email Us
              </a>
              <a
                href="tel:7085527246"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
