import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, User, Download, Linkedin } from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

const ResearchPapers = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const articles: Article[] = [
    {
      id: "1",
      title:
        "Political Conscience And Political Consciousness In A Democracy: An Exploration Of An Idea Through Youth Participation",
      excerpt:
        "This paper explores the idea of politics that the youth of Arunachal Pradesh have in terms of their understanding of political participation, the significance they attribute to being politically conscious, and the correlation between gender and politics.",
      author: "Fango Mary Waii",
      date: "January 15, 2024",
      category: "governance",
      readTime: "12 min read",
      image: "/political-conscience-new.jpg",
    },
    {
      id: "2",
      title:
        "Student Politics in Arunachal Pradesh: Examining its Impact on Society",
      excerpt:
        "The present study attempts to throw light on the role played by Student Politics in the state of Arunachal Pradesh and its impact on society and state politics.",
      author: "Lokpa Tamang",
      date: "January 10, 2024",
      category: "governance",
      readTime: "15 min read",
      image: "/student-politics.jpg",
    },
    {
      id: "3",
      title:
        "The Indispensable Role of Youth in Promoting Mental Health: A Research Perspective",
      excerpt:
        "This article posits youth as indispensable agents of change in mental health promotion. Their lived experiences, peer networks, and digital fluency offer unique advantages in addressing the global youth mental health crisis.",
      author: "Dr. Jomyir Bagra",
      date: "January 5, 2024",
      category: "health",
      readTime: "18 min read",
      image: "/mental-health-new.png",
    },
    {
      id: "4",
      title:
        "Reimagining Environmental Responsibility: A Commentary on the Youth Mission for Clean River's Efforts in Arunachal Pradesh",
      excerpt:
        "This commentary examines YMCR's dynamic approach to addressing plastic pollution crisis in Arunachal Pradesh through clean-up drives, policy advocacy, and educational initiatives.",
      author: "Dr. Prem Taba",
      date: "December 28, 2023",
      category: "environment",
      readTime: "14 min read",
      image: "/environmental-responsibility.jpg",
    },
    {
      id: "5",
      title:
        "A Study of Youth Behaviour in Investment Decision Making: With Reference to Arunachal Pradesh",
      excerpt:
        "This paper examines youth behavior in investment decision making to identify the most preferred investment alternatives, factors influencing youth investment decisions, and the correlation between age and gender in investment activities.",
      author: "Myger Babla",
      date: "December 20, 2023",
      category: "business",
      readTime: "16 min read",
      image: "/investment-behavior.jpg",
    },
    {
      id: "6",
      title:
        "Exploring the Role of Youths in Promoting Waste Reduction and Recycling in Arunachal Pradesh",
      excerpt:
        "This study explores the contribution of youths in waste management and recycling in Arunachal Pradesh, highlighting ways through which youths can participate in encouraging sustainable waste management practices for environmental protection.",
      author: "Priyanka Ghimire",
      date: "December 15, 2023",
      category: "environment",
      readTime: "20 min read",
      image: "/waste-reduction-recycling.jpg",
    },
    {
      id: "7",
      title: "Youth in the Digital Age: Mitigating Challenges in Digital Space",
      excerpt:
        "This paper examines the challenges of the digital space including cyberbullying, misinformation, digital addiction, and privacy threats, while exploring strategies to foster a safer, more responsible digital environment for youth.",
      author: "Dr. Sachoiba Inkah",
      date: "December 10, 2023",
      category: "technology",
      readTime: "22 min read",
      image: "/digital-age-challenges.jpg",
    },
    {
      id: "8",
      title:
        "Analysing the Role of Social Media in Education and Skills Development among Youth in Arunachal Pradesh",
      excerpt:
        "This study investigates the multifaceted role of social media platforms in education and skills development of youth in Arunachal Pradesh, examining both opportunities and challenges in the digital learning landscape.",
      author: "Shashanka Gogoi",
      date: "December 5, 2023",
      category: "education",
      readTime: "19 min read",
      image: "/social-media-education.jpg",
    },
    {
      id: "9",
      title:
        "Harnessing Arunachal's Natural Resources for Sustainable Economic Growth",
      excerpt:
        "This paper explores the strategic harnessing of Arunachal Pradesh's natural resources including hydroelectric power, forests, and minerals to drive sustainable economic growth while balancing development with environmental conservation.",
      author: "Tongchen Jomba",
      date: "November 30, 2023",
      category: "economics",
      readTime: "17 min read",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    },
    {
      id: "10",
      title:
        "Exploring the Role of Government Policies in Promoting Youth Empowerment in Arunachal Pradesh",
      excerpt:
        "This paper assesses the position that government policies have taken in empowering youths in Arunachal Pradesh, examining measures in education, employment, skills development, social inclusion, and entrepreneurship support.",
      author: "Saurav Bhaumik",
      date: "November 25, 2023",
      category: "governance",
      readTime: "21 min read",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80",
    },
    {
      id: "11",
      title:
        "From Protest to Policy: Examining Youth Participation in Political Decision-Making in India",
      excerpt:
        "This paper delves into the evolving role of youth in governance, spotlighting both challenges and breakthroughs in political participation. It highlights emerging young leaders and advocates for lower candidacy age, legislative youth quotas, and stronger political education.",
      author: "Subham Tripathy",
      date: "November 20, 2023",
      category: "governance",
      readTime: "25 min read",
      image:
        "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80",
    },
    {
      id: "12",
      title:
        "Harnessing Youth Potential through Skill Development and Entrepreneurship in Arunachal Pradesh",
      excerpt:
        "This chapter examines the need and strategy for empowering young people in Arunachal Pradesh via entrepreneurship and skill development, two important pillars of long-term socioeconomic change, addressing structural challenges in employment and skills.",
      author: "Vanshika Marwaha",
      date: "November 15, 2023",
      category: "business",
      readTime: "23 min read",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      id: "13",
      title:
        "Fences and Forgotten Ties: Reimagining Border Policy After the Free Movement Regime's End in Arunachal Pradesh",
      excerpt:
        "This opinion piece critiques the militarized approach to border management following the termination of the Free Movement Regime, advocating for a holistic policy that balances security with tribal heritage, environmental integrity, and regional cooperation.",
      author: "Yagyaj",
      date: "November 10, 2023",
      category: "governance",
      readTime: "28 min read",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    },
    {
      id: "14",
      title:
        "Swipe, Scroll, and Mislead: Insights from the Youths on Digital Addiction and Misinformation in Arunachal Pradesh",
      excerpt:
        "This study examines the dual challenge of digital addiction and the spread of misinformation among youth in Arunachal Pradesh, highlighting critical thinking as essential competencies for the state's youth in the digital age.",
      author: "Mudang Onju",
      date: "November 5, 2023",
      category: "technology",
      readTime: "26 min read",
      image:
        "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80",
    },
  ];

  const categories = [
    { id: "all", name: "All Papers" },
    { id: "governance", name: "Governance" },
    { id: "health", name: "Health" },
    { id: "environment", name: "Environment" },
    { id: "business", name: "Business" },
    { id: "technology", name: "Technology" },
    { id: "education", name: "Education" },
    { id: "economics", name: "Economics" },
  ];

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

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
              Research Papers
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore cutting-edge research papers and academic contributions by
              Arunachal Pradesh's youth scholars and researchers
            </p>
          </motion.div>
        </div>
      </div>

      {/* Research Paper Submission Message */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Submit Your Research Paper
            </h3>
            <p className="text-blue-700">
              If you want to showcase your research paper here, please reach out
              to us at{" "}
              <a
                href="mailto:Arunachalyouthparliament@gmail.com"
                className="font-medium underline hover:text-blue-900"
              >
                Arunachalyouthparliament@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 science-bg relative overflow-hidden">
        {/* Science Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-400 rounded-full molecule-animation"></div>
          <div
            className="absolute top-20 right-20 w-16 h-16 border-2 border-cyan-400 rounded-full molecule-animation"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-emerald-400 rounded-full molecule-animation"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 right-1/3 w-14 h-14 border-2 border-blue-500 rounded-full molecule-animation"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  selectedCategory === category.id
                    ? "science-button border-0"
                    : "bg-white/80 backdrop-blur-sm border-2 border-cyan-300 text-slate-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:border-cyan-400 hover:text-cyan-700"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Research Papers Grid */}
      <section className="py-16 science-bg relative overflow-hidden">
        {/* Science Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-300 rounded-full dna-animation"></div>
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 border border-cyan-300 rounded-full dna-animation"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full science-card hover:shadow-xl transition-all duration-300 group flex flex-col border border-cyan-200/50">
                  <CardHeader className="pb-3 sm:pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="science-badge capitalize text-xs px-2 py-1">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-slate-500">
                        {article.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-base sm:text-lg lg:text-xl science-text-primary group-hover:text-cyan-600 transition-colors duration-300 leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col pt-0">
                    <p className="science-text-secondary mb-3 sm:mb-4 flex-1 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3 sm:mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        <span className="truncate">{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="text-xs">{article.date}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <Button
                        className="w-full science-button text-sm py-2 group"
                        onClick={() => {
                          const pdfFiles = {
                            "1": "/1. Fango Mary Waii.pdf",
                            "2": "/2. Lokpa Tamang.pdf",
                            "3": "/3. Dr Jomyir Bagra.pdf",
                            "4": "/4. Dr Prem Taba.pdf",
                            "5": "/5. Myger Babla.pdf",
                            "6": "/6. Priyanka Ghimire.pdf",
                            "7": "/7. Sachoiba Inka.pdf",
                            "8": "/8. Sashanka Gogoi .pdf",
                            "9": "/9. Tongchen Jomba.pdf",
                            "10": "/10. Saurav Baumhik.pdf",
                            "11": "/11. Subham Tripathy.pdf",
                            "12": "/12. Vanishka Marwaha.pdf",
                            "13": "/13. Yagyaj.pdf",
                            "14": "/14. Mudang Onju.pdf",
                          };
                          const pdfPath =
                            pdfFiles[article.id as keyof typeof pdfFiles];
                          if (pdfPath) {
                            // Always open in new tab
                            window.open(
                              pdfPath,
                              "_blank",
                              "noopener,noreferrer",
                            );
                          } else {
                            alert("Research paper not available for download.");
                          }
                        }}
                      >
                        <span>Download Paper</span>
                        <Download className="w-3 h-3 ml-2" />
                      </Button>
                    </div>
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

export default ResearchPapers;
