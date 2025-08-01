import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "lucide-react";

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

const WhosWho = () => {
  const chairman: Leader = {
    id: "1",
    name: "Dodum Natung",
    position: "Chairman, AYP",
    department: "Leadership",
    image: "/dodum-natung.jpg",
    bio: "Leading the Arunachal Pradesh Youth Parliament with dedication and vision for youth empowerment.",
    facebook: "https://www.facebook.com/profile.php?id=100087370252292",
    twitter: "https://x.com/DodumNatung",
  };

  const otherLeaders: Leader[] = [
    {
      id: "2",
      name: "Prem Camdir Tallang",
      position: "Convenor, AYP",
      department: "Operations",
      image: "/prem-tallang.jpg",
      bio: "Leading youth initiatives across Arunachal Pradesh with focus on education and environmental conservation.",
      facebook: "https://www.facebook.com/kishan.tallong",
      twitter: "https://x.com/PremTallong",
    },
    {
      id: "3",
      name: "Vikash Dada",
      position: "Organizing Secretary",
      department: "Administration",
      image: "/vikas1.png",
      bio: "Coordinating organizational activities and ensuring smooth operations of youth parliament initiatives.",
      facebook: "https://www.facebook.com/profile.php?id=100010227101502",
      twitter: "https://x.com/VikashDada3",
    },
    {
      id: "4",
      name: "Dr. Prem Taba",
      position: "Convenor",
      department: "Advisory",
      image: "/dr-prem-taba.jpg",
      bio: "Providing strategic guidance and expertise to advance youth development initiatives.",
      linkedin:
        "https://www.linkedin.com/in/prem-taba-43ba32106/?originalSubdomain=in",
      facebook: "https://www.facebook.com/Prem.Taba.fb",
      twitter: "https://x.com/PremTaba",
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
            Who's Who
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Meet the dedicated leaders driving change in Arunachal Pradesh Youth
            Parliament
          </motion.p>
        </div>
      </div>

      {/* Chairman Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-40 h-48 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-rose-500">
                    <img
                      src={chairman.image}
                      alt={chairman.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-[#000080]">
                    {chairman.name}
                  </CardTitle>
                  <div className="text-center mt-2">
                    <Badge className="bg-rose-500 text-white text-base px-3 py-1">
                      {chairman.position}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">{chairman.bio}</p>
                  {(chairman.facebook ||
                    chairman.twitter ||
                    chairman.linkedin) && (
                    <div className="mt-4">
                      <div className="flex justify-center space-x-3">
                        {chairman.linkedin && (
                          <a
                            href={chairman.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-700 hover:text-blue-900 transition-colors"
                          >
                            <Linkedin className="w-6 h-6" />
                          </a>
                        )}
                        {chairman.facebook && (
                          <a
                            href={chairman.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <Facebook className="w-6 h-6" />
                          </a>
                        )}
                        {chairman.twitter && (
                          <a
                            href={chairman.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-600 transition-colors"
                          >
                            <Twitter className="w-6 h-6" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Leaders Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {otherLeaders.map((leader, index) => (
              <motion.div
                key={leader.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="w-full max-w-sm"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="w-40 h-48 mx-auto mb-4 rounded-lg overflow-hidden border-4 border-rose-500">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl text-[#000080]">
                      {leader.name}
                    </CardTitle>
                    <div className="text-center mt-2">
                      <Badge className="bg-rose-500 text-white text-base px-3 py-1">
                        {leader.position}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm mb-4">{leader.bio}</p>
                    {(leader.facebook || leader.twitter || leader.linkedin) && (
                      <div className="mt-4">
                        <div className="flex justify-center space-x-2">
                          {leader.linkedin && (
                            <a
                              href={leader.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-700 hover:text-blue-900 transition-colors"
                            >
                              <Linkedin className="w-6 h-6" />
                            </a>
                          )}
                          {leader.facebook && (
                            <a
                              href={leader.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 transition-colors"
                            >
                              <Facebook className="w-6 h-6" />
                            </a>
                          )}
                          {leader.twitter && (
                            <a
                              href={leader.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-600 transition-colors"
                            >
                              <Twitter className="w-6 h-6" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhosWho;
