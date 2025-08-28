import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Users,
  Award,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

interface Leader {
  id: string;
  name: string;
  position: string;
  department: string;
  image: string;
  bio: string;
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

const AboutUs = () => {
  const [expandedBios, setExpandedBios] = useState<{ [key: string]: boolean }>(
    {},
  );

  const toggleBio = (id: string) => {
    setExpandedBios((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const chairman: Leader = {
    id: "1",
    name: "Dodum Natung",
    position: "Chairman",
    department: "Leadership",
    image: "/dodum-natung.jpg",
    bio: "Dodum Natung is a committed youth leader and the current Chairman of the Arunachal Youth Parliament. With a Master's degree in International Relations and a growing career as a young entrepreneur in the construction sector, he brings a unique blend of global perspective and grassroots experience. His vision is to empower the youth of Arunachal Pradesh through dialogue, leadership, and meaningful civic engagement.",
    facebook: "https://www.facebook.com/profile.php?id=100087370252292",
    twitter: "https://x.com/DodumNatung",
  };

  const otherLeaders: Leader[] = [
    {
      id: "2",
      name: "Prem Camdir Tallang",
      position: "Convenor",
      department: "Operations",
      image: "/prem-tallang-new.jpg",
      bio: "Prem Camdir Tallong is a social activist and youth leader, currently serving as Convenor of the Arunachal Youth Parliament. An MBA graduate from NERIST and Law graduate from Dibrugarh University, he is also the Secretary of the Pakke Paga Hornbill Festival and former Education Secretary of All Arunchal Pradesh Student's union. Recipient of the Bharat Yuva Gaurav Award 2025.",
      facebook: "https://www.facebook.com/kishan.tallong",
      twitter: "https://x.com/PremTallong",
    },
    {
      id: "3",
      name: "Vikash Dada",
      position: "Organizing Secretary",
      department: "Administration",
      image: "/vikas1.png",
      bio: "Vikash Dada is the former General Secretary of Rajiv Gandhi University Students' Union and former member of Communal Harmony cell- All Arunachal Pradesh Students' Union. He has a Master's Degree in Sociology from RGU. He is a youth leader and engages himself in social works that matters to the youths.",
      facebook: "https://www.facebook.com/profile.php?id=100010227101502",
      twitter: "https://x.com/VikashDada3",
    },
    {
      id: "4",
      name: "Dr. Prem Taba",
      position: "Convenor",
      department: "Advisory",
      image: "/dr-prem-taba-new.jpg",
      bio: "Prem Taba has a doctorate in Mass Communication from Rajiv Gandhi University, Arunachal Pradesh, along with a Master's degree in Environmental Studies. His research interests include media and communication studies, environmental issues, and indigenous people. He has published extensively in academic journals, authored book chapters, and writes for newspapers on marginalization, indigenous rights, development, and politics. He authored the book Media Representation and Accessibility of the Puroiks and edited India/Northeast India: Issues, Dynamics, and Emerging Realities. He is a Grantee of the Department of Indigenous Affairs, Government of Arunachal Pradesh, a member of Zero Waste Himalaya, and co-founder of the environmental NGO Youth Mission for Clean River.",
      linkedin:
        "https://www.linkedin.com/in/prem-taba-43ba32106/?originalSubdomain=in",
      facebook: "https://www.facebook.com/Prem.Taba.fb",
      twitter: "https://x.com/PremTaba",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Encourage youth engagement with public issues and articulate opinion. Develop decision-making abilities and respect for diverse views. Document youth perspectives for a new Arunachal.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "Empower democratic dialogue and respectful debates. Cultivate leadership and civic responsibility. Address socio-economic and cultural state issues innovatively. Compile youth opinions in an ISBN-registered publication.",
    },
    {
      icon: Users,
      title: "Our Community",
      description:
        "A collaborative network including universities, colleges, and youth organizations fostering active and inclusive participation from diverse communities statewide.",
    },
    {
      icon: Award,
      title: "Our Impact",
      description:
        "Measurable positive changes in education, environment, culture, and governance through youth-led initiatives.",
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
              About Us
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Arunachal Youth Parliament is a vibrant platform for youth across
              all ideological spectrums to express their views democratically
            </p>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <div className="h-48 w-48">
                  <img
                    src="/ayp-new-logo.png"
                    alt="Arunachal Pradesh Youth Parliament Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-[#000080] mb-6">
                About Arunachal Youth Parliament
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Arunachal Youth Parliament is a vibrant platform for youth
                across all ideological spectrums to express their views
                democratically. Serving as a catalyst for awakening young minds,
                it nurtures future leaders and provides pragmatic training to
                enhance political and social involvement. The platform
                encourages youth to contribute to society through active public
                participation, fostering positive development for Arunachal
                Pradesh. Apart from organizing events and programmes, we also
                provide a platform for students to share their voices and ideas.
                We actively publish and promote articles, blogs, and research
                papers contributed by students, giving them visibility and
                recognition. Through this initiative, we aim to encourage
                creativity, critical thinking, and academic excellence, while
                inspiring others to learn and engage with fresh perspectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-white to-green-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000080] mb-4">
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-[#000080] mx-auto"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
              Meet the dedicated leaders driving change in Arunachal Pradesh
              Youth Parliament
            </p>
          </div>

          {/* Chairman Section */}
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm"
            >
              <Card className="h-[600px] hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-orange-200 hover:border-orange-300 shadow-lg overflow-hidden relative group">
                {/* Background Image with Blur */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110 h-[350px]"
                  style={{ backgroundImage: `url(${chairman.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-[350px]" />

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex-1 relative">
                    {/* Name and Position at bottom of image */}
                    <div className="absolute bottom-4 left-4 text-left">
                      <CardTitle className="text-2xl text-white font-bold drop-shadow-lg mb-2">
                        {chairman.name}
                      </CardTitle>
                      <Badge className="bg-gradient-to-r from-orange-500 to-rose-500 text-white text-base px-4 py-1 shadow-xl backdrop-blur-sm border border-white/20">
                        {chairman.position}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="backdrop-blur-md bg-white/90 border-t border-white/20 h-[250px] flex flex-col">
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100 p-4">
                      <div className="space-y-3">
                        <p className="text-gray-800 text-sm leading-relaxed font-medium">
                          {expandedBios[chairman.id]
                            ? chairman.bio
                            : truncateText(chairman.bio)}
                        </p>
                        {chairman.bio.length > 150 && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleBio(chairman.id)}
                            className="mt-2 text-orange-600 hover:text-orange-800 p-0 h-auto font-semibold"
                          >
                            {expandedBios[chairman.id]
                              ? "Read Less"
                              : "Read More..."}
                          </Button>
                        )}
                      </div>
                    </div>
                    {(chairman.facebook ||
                      chairman.twitter ||
                      chairman.linkedin) && (
                      <div className="mt-2 border-t border-white/20 pt-3">
                        <div className="flex justify-center space-x-4">
                          {chairman.linkedin && (
                            <a
                              href={chairman.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-900 transition-all duration-300 hover:scale-125 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                            >
                              <Linkedin className="w-6 h-6" />
                            </a>
                          )}
                          {chairman.facebook && (
                            <a
                              href={chairman.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-125 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                            >
                              <Facebook className="w-6 h-6" />
                            </a>
                          )}
                          {chairman.twitter && (
                            <a
                              href={chairman.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                            >
                              <Twitter className="w-6 h-6" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Other Leaders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {otherLeaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="w-full max-w-sm"
              >
                <Card className="h-[600px] hover:shadow-2xl hover:scale-105 transition-all duration-500 border-2 border-orange-200 hover:border-orange-300 shadow-lg overflow-hidden relative group">
                  {/* Background Image with Blur */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110 h-[350px]"
                    style={{ backgroundImage: `url(${leader.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent h-[350px]" />

                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="flex-1 relative">
                      {/* Name and Position at bottom of image */}
                      <div className="absolute bottom-4 left-4 text-left">
                        <CardTitle className="text-2xl text-white font-bold drop-shadow-lg mb-2">
                          {leader.name}
                        </CardTitle>
                        <Badge className="bg-gradient-to-r from-orange-500 to-rose-500 text-white text-base px-4 py-1 shadow-xl backdrop-blur-sm border border-white/20">
                          {leader.position}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="backdrop-blur-md bg-white/90 border-t border-white/20 h-[250px] flex flex-col">
                      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100 p-4">
                        <div className="space-y-3">
                          <p className="text-gray-800 text-sm leading-relaxed font-medium">
                            {expandedBios[leader.id]
                              ? leader.bio
                              : truncateText(leader.bio)}
                          </p>
                          {leader.bio.length > 150 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleBio(leader.id)}
                              className="mt-2 text-orange-600 hover:text-orange-800 p-0 h-auto font-semibold"
                            >
                              {expandedBios[leader.id]
                                ? "Read Less"
                                : "Read More..."}
                            </Button>
                          )}
                        </div>
                      </div>
                      {(leader.facebook ||
                        leader.twitter ||
                        leader.linkedin) && (
                        <div className="mt-2 border-t border-white/20 pt-3">
                          <div className="flex justify-center space-x-4">
                            {leader.linkedin && (
                              <a
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-900 transition-all duration-300 hover:scale-125 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                              >
                                <Linkedin className="w-6 h-6" />
                              </a>
                            )}
                            {leader.facebook && (
                              <a
                                href={leader.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-125 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                              >
                                <Facebook className="w-6 h-6" />
                              </a>
                            )}
                            {leader.twitter && (
                              <a
                                href={leader.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-600 transition-all duration-300 hover:scale-125 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
                              >
                                <Twitter className="w-6 h-6" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000080] mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 bg-transparent border-gray-200">
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto mb-4 bg-rose-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-[#000080]">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#000080] mb-4">
                Impact Journey
              </h2>
              <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            </div>
            <motion.div
              className="prose prose-lg mx-auto text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                Since its inception, the Arunachal Youth Parliament has steadily
                expanded its reach and strengthened its impact by collaborating
                with a variety of educational institutions and community
                organizations to promote youth engagement throughout the state.
                The organization has partnered with initiatives such as the
                Youth Mission for Clean River to support river conservation and
                environmental sustainability. These partnerships have led to
                youth-led campaigns and river cleanup drives that raise
                ecological awareness alongside democratic dialogue.
              </p>
              <p className="text-lg leading-relaxed">
                AYP also actively involves tribal, rural, and marginalized
                youth, empowering them to contribute meaningfully to social,
                environmental, and governance issues. The platform continually
                grooms future leaders through regional, zonal, and
                institution-level parliaments, mentorship programs, and flagship
                statewide events. By combining conservation efforts with civic
                participation, Arunachal Youth Parliament nurtures a generation
                of socially and environmentally responsible young leaders who
                are committed to driving positive change in Arunachal Pradesh.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
