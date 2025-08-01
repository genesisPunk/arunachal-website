import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";

const AboutUs = () => {
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

  const achievements = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Communities Served" },
    { number: "10+", label: "Years of Service" },
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
            About Us
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Arunachal Youth Parliament is a vibrant platform for youth across
            all ideological spectrums to express their views democratically
          </motion.p>
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
                Pradesh.
              </p>
            </motion.div>
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
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
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

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-r from-purple-500 via-white to-green-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#000080] mb-4">
              Our Achievements
            </h2>
            <div className="w-24 h-1 bg-[#000080] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[#000080] mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-medium text-gray-700">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
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
