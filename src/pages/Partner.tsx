import React from "react";
import NavigationBar from "../components/NavigationBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ExternalLink } from "lucide-react";

interface PartnerProps {
  className?: string;
}

const Partner = ({ className = "" }: PartnerProps) => {
  const partners = [
    {
      name: "Department of Youth Affairs",
      logo: "/youth_affairs.png",
      link: "https://www.yas.nic.in/youth-affairs/arunachal-pradesh",
      hasLink: true,
    },
    {
      name: "Hill Society",
      logo: "/hills_society.png",
      link: "",
      hasLink: false,
    },
    {
      name: "Youth Mission For Clean River",
      logo: "/youth_mission.png",
      link: "https://www.facebook.com/youthmissionforcleanriver/",
      hasLink: true,
    },
  ];

  const universityPartners = [
    {
      name: "Rajiv Gandhi University",
      logo: "/rajiv-gandhi-university.jpg",
      link: "https://new.rgu.ac.in/",
      hasLink: true,
    },
    {
      name: "Arunachal Law Academy",
      logo: "/arunachal-law-academy.png",
      link: "https://arunachallawacademy.com/",
      hasLink: true,
    },
    {
      name: "Himalayan University",
      logo: "/himalayan-university.jpg",
      link: "https://www.himalayanuniversity.com/",
      hasLink: true,
    },
    {
      name: "Dera Natung Government College",
      logo: "/dera-natung-college.png",
      link: "https://dngc.ac.in/",
      hasLink: true,
    },
    {
      name: "Don Bosco College",
      logo: "/don-bosco-college.jpg",
      link: "https://dbcitanagar.ac.in/",
      hasLink: true,
    },
    {
      name: "National Institute of Technology",
      logo: "/national-institute-technology.jpg",
      link: "https://www.nitap.ac.in/",
      hasLink: true,
    },
    {
      name: "North East Regional Institute of Science and Technology",
      logo: "/north-east-regional-institute.jpg",
      link: "https://nerist.ac.in/",
      hasLink: true,
    },
  ];

  const handlePartnerClick = (partner: (typeof partners)[0]) => {
    if (partner.hasLink && partner.link) {
      window.open(partner.link, "_blank");
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <NavigationBar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Partners
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with various organizations to promote youth
              development and civic engagement in Arunachal Pradesh.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className={`transition-all duration-300 hover:shadow-lg ${
                  partner.hasLink ? "cursor-pointer hover:scale-105" : ""
                }`}
                onClick={() => handlePartnerClick(partner)}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-36 h-36 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="w-30 h-30 object-contain"
                      />
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {partner.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {partner.hasLink && (
                    <div className="flex items-center justify-center text-blue-600 text-sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span>Visit Website</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* University Partners Section */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              University Partners
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universityPartners.map((partner, index) => (
                <Card
                  key={index}
                  className={`transition-all duration-300 hover:shadow-lg ${
                    partner.hasLink ? "cursor-pointer hover:scale-105" : ""
                  }`}
                  onClick={() => handlePartnerClick(partner)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="w-36 h-36 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="w-30 h-30 object-contain"
                        />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900">
                      {partner.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {partner.hasLink && (
                      <div className="flex items-center justify-center text-blue-600 text-sm">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span>Visit Website</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Government accent strip */}
      <div className="w-full h-1 bg-gradient-to-r from-rose-500 via-white to-green-500 mt-auto"></div>
    </div>
  );
};

export default Partner;
