import React, { useState } from "react";
import NavigationBar from "@/components/NavigationBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Search,
  BookOpen,
  PenTool,
  TrendingUp,
  Heart,
  Share2,
  Eye,
  Clock,
  ArrowRight,
  X,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  views: string;
  likes: string;
  type: "article" | "blog";
  featured?: boolean;
  content: string[];
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    // Articles
    {
      id: "1",
      title: "The Future of Youth Leadership in Northeast India",
      excerpt:
        "Exploring how young leaders are shaping the political and social landscape of Northeast India through innovative approaches and grassroots movements.",
      author: "Rajesh Kumar",
      date: "March 15, 2024",
      category: "leadership",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      views: "2.4k",
      likes: "156",
      type: "article",
      featured: true,
      content: [
        "The landscape of youth leadership in Northeast India is undergoing a remarkable transformation. Young leaders across the region are breaking traditional barriers and creating innovative pathways for social and political change. From the hills of Arunachal Pradesh to the valleys of Manipur, a new generation of activists, entrepreneurs, and changemakers is emerging with fresh perspectives and bold visions.",
        "What sets these young leaders apart is their ability to blend traditional wisdom with modern approaches. They understand the importance of preserving cultural heritage while embracing technological advancement. This unique perspective allows them to address contemporary challenges while staying rooted in their cultural identity.",
        "The rise of digital platforms has significantly amplified their voices. Social media campaigns, online advocacy, and digital storytelling have become powerful tools for mobilizing communities and raising awareness about regional issues. Young leaders are leveraging these platforms to connect with peers across the Northeast and beyond, creating a network of change agents.",
        "Educational initiatives led by youth are particularly noteworthy. Many young leaders are establishing community learning centers, organizing skill development workshops, and creating mentorship programs. These efforts are not only addressing immediate educational needs but also building long-term capacity for sustainable development in the region.",
        "The future of Northeast India looks promising with this emerging generation of leaders who are committed to inclusive growth, environmental sustainability, and social justice. Their work is laying the foundation for a more prosperous and equitable future for all communities in the region.",
      ],
    },
    {
      id: "2",
      title: "Digital Transformation in Rural Arunachal Pradesh",
      excerpt:
        "How technology is bridging the gap between urban and rural communities, creating new opportunities for economic growth and social development.",
      author: "Priya Sharma",
      date: "March 12, 2024",
      category: "technology",
      readTime: "12 min read",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      views: "1.8k",
      likes: "89",
      type: "article",
      content: [
        "The digital revolution has reached the remote villages of Arunachal Pradesh, bringing unprecedented opportunities for economic and social transformation. What was once considered impossible due to geographical barriers is now becoming reality through innovative technology solutions and determined community efforts.",
        "Mobile connectivity has been the game-changer. With improved network infrastructure, farmers in remote areas can now access real-time weather information, market prices, and agricultural best practices. This has led to better crop planning, reduced post-harvest losses, and increased income for farming families.",
        "E-governance initiatives have simplified administrative processes for rural residents. Services that previously required long journeys to district headquarters can now be accessed through digital service centers in villages. Birth certificates, land records, and government scheme applications are now just a few clicks away.",
        "The education sector has witnessed remarkable changes with the introduction of digital learning platforms. Students in remote areas now have access to quality educational content, online courses, and virtual classrooms. This has significantly improved learning outcomes and opened up new career opportunities for young people.",
        "Healthcare delivery has also been revolutionized through telemedicine initiatives. Remote consultations with specialists, digital health records, and mobile health units equipped with diagnostic tools are bringing quality healthcare to previously underserved communities.",
        "The entrepreneurial spirit among rural youth has been ignited by digital platforms. Many are starting online businesses, offering digital services, and creating innovative solutions for local challenges. This is not only generating employment but also keeping young talent in their home communities.",
      ],
    },
    {
      id: "3",
      title: "Sustainable Tourism: A Path Forward for Arunachal",
      excerpt:
        "Examining sustainable tourism practices that can boost the local economy while preserving the natural beauty and cultural heritage of the state.",
      author: "Tenzin Norbu",
      date: "March 10, 2024",
      category: "environment",
      readTime: "10 min read",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      views: "3.1k",
      likes: "203",
      type: "article",
      content: [
        "Arunachal Pradesh, with its pristine landscapes and rich cultural diversity, stands at a crucial juncture in its tourism development journey. The state's approach to sustainable tourism could serve as a model for other ecologically sensitive regions, balancing economic growth with environmental conservation and cultural preservation.",
        "The concept of community-based tourism is gaining momentum across the state. Local communities are being empowered to become stakeholders in tourism development, ensuring that the benefits reach grassroots level. Homestays run by local families provide authentic experiences for visitors while generating direct income for rural households.",
        "Environmental conservation is at the heart of sustainable tourism initiatives. Strict regulations on visitor numbers in sensitive areas, waste management protocols, and carbon footprint reduction measures are being implemented. The state's commitment to maintaining its forest cover while promoting tourism demonstrates a balanced approach to development.",
        "Cultural tourism is being promoted as a way to preserve and celebrate the diverse traditions of Arunachal's tribal communities. Festival tourism, traditional craft workshops, and cultural immersion programs are creating opportunities for cultural exchange while providing economic incentives for communities to maintain their heritage.",
        "Adventure tourism is being developed with a focus on minimal environmental impact. Trekking routes are being designed to distribute tourist traffic, preventing over-concentration in popular areas. Local guides are being trained not just in tourism services but also in conservation practices and cultural sensitivity.",
        "The integration of technology in sustainable tourism is showing promising results. Digital platforms for booking, virtual reality previews of destinations, and mobile apps for responsible travel are enhancing visitor experiences while promoting sustainable practices.",
      ],
    },
    {
      id: "4",
      title: "Women Entrepreneurs Breaking Barriers",
      excerpt:
        "Stories of inspiring women entrepreneurs who are creating successful businesses and empowering their communities across Arunachal Pradesh.",
      author: "Meera Patel",
      date: "March 8, 2024",
      category: "business",
      readTime: "15 min read",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      views: "2.7k",
      likes: "178",
      type: "article",
      content: [
        "The entrepreneurial landscape of Arunachal Pradesh is being transformed by a remarkable group of women who are not just building successful businesses but also challenging societal norms and creating pathways for others to follow. Their stories are testament to the power of determination, innovation, and community support.",
        "Traditional crafts are being revitalized through women-led enterprises. Artisans who once struggled to find markets for their handwoven textiles, bamboo crafts, and traditional jewelry are now reaching global customers through e-commerce platforms. These businesses are not only preserving cultural heritage but also providing sustainable livelihoods for rural women.",
        "The food and hospitality sector has seen significant growth driven by women entrepreneurs. From organic farming ventures to specialty food processing units, women are capitalizing on the state's rich agricultural diversity. Many have established successful restaurants and catering services that showcase authentic Arunachali cuisine.",
        "Technology-enabled businesses are emerging as women embrace digital entrepreneurship. Online tutoring services, digital marketing agencies, and e-commerce ventures are being launched by tech-savvy women who are leveraging their skills to create innovative solutions for local and regional markets.",
        "Access to finance and business support has improved significantly through various government schemes and microfinance institutions. Women's self-help groups have evolved into business collectives, pooling resources and sharing knowledge to launch and scale enterprises. These collaborative approaches are proving highly effective in the local context.",
        "The ripple effects of women's entrepreneurship extend far beyond individual success stories. These businesses are creating employment opportunities for other women, contributing to local economic development, and inspiring the next generation of female leaders. The transformation is not just economic but also social, as successful women entrepreneurs become role models and advocates for gender equality.",
      ],
    },
    // Blogs
    {
      id: "5",
      title: "My Journey as a Young Activist in Itanagar",
      excerpt:
        "A personal account of organizing community events, facing challenges, and the lessons learned while advocating for youth rights in the capital city.",
      author: "Kaling Borang",
      date: "March 14, 2024",
      category: "personal",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
      views: "1.2k",
      likes: "94",
      type: "blog",
      featured: true,
      content: [
        "When I first moved to Itanagar for my studies, I never imagined that this bustling capital city would become the backdrop for my journey into activism. It all started with a simple observation: despite being the political center of Arunachal Pradesh, many young people felt disconnected from the decision-making processes that affected their lives.",
        "My first community event was a disaster, or so I thought at the time. Only twelve people showed up to what I had envisioned as a grand youth forum. But those twelve individuals became the core of something much larger. We spent hours discussing the challenges facing young people in our state – unemployment, limited educational opportunities, and the lack of platforms for civic engagement.",
        "The real breakthrough came when we decided to focus on actionable solutions rather than just highlighting problems. We organized skill development workshops, created mentorship programs connecting students with professionals, and established a youth advisory committee that regularly engaged with local government officials.",
        "Facing resistance was inevitable. Some questioned our methods, others doubted our commitment, and there were moments when I questioned myself. The bureaucratic hurdles seemed insurmountable, and funding was always a challenge. But each small victory – a policy suggestion accepted, a young person finding employment through our network, a successful community project – reinforced our belief in the cause.",
        "What I've learned is that activism isn't about grand gestures or dramatic confrontations. It's about consistent, patient work to create positive change. It's about building bridges between communities, facilitating dialogue, and empowering others to find their voice. Today, our youth network has grown to over 500 active members across Itanagar, and we continue to work towards a more inclusive and participatory democracy.",
      ],
    },
    {
      id: "6",
      title: "Food Adventures: Traditional Recipes with Modern Twists",
      excerpt:
        "Discovering the rich culinary heritage of Arunachal Pradesh and how young chefs are innovating traditional recipes for contemporary palates.",
      author: "Nyishi Talom",
      date: "March 11, 2024",
      category: "culture",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1741026079032-7cb660e44bad?w=800&q=80",
      views: "1.9k",
      likes: "127",
      type: "blog",
      content: [
        "Growing up in a Nyishi household, I was surrounded by the aromatic spices and unique flavors that define Arunachali cuisine. My grandmother's kitchen was a treasure trove of traditional recipes passed down through generations, each dish telling a story of our cultural heritage and connection to the land.",
        "The traditional preparation of bamboo shoot curry, fermented fish, and smoked meat might seem simple, but the techniques involved are incredibly sophisticated. The fermentation processes, smoking methods, and use of indigenous herbs create complex flavor profiles that rival any gourmet cuisine. Yet, these culinary traditions were often overlooked in favor of mainstream Indian or international foods.",
        "My culinary journey began when I started experimenting with fusion cooking during college. I discovered that traditional Arunachali ingredients could be incorporated into contemporary dishes without losing their essence. Bamboo shoot risotto, smoked pork tacos with traditional chutneys, and fermented soybean hummus became hits among my friends.",
        "The real excitement came when I started documenting these experiments and sharing them on social media. The response was overwhelming – young people from across the Northeast were eager to reconnect with their culinary roots while exploring new possibilities. Food became a bridge between tradition and modernity, between generations, and between different communities.",
        "Today, I run a small catering business that specializes in contemporary interpretations of traditional Arunachali cuisine. Each dish I create is a celebration of our rich food culture, adapted for modern lifestyles and diverse palates. Through food, I'm not just preserving tradition – I'm helping it evolve and thrive in the 21st century.",
      ],
    },
    {
      id: "7",
      title: "Life Lessons from the Mountains",
      excerpt:
        "Reflections on growing up in the hills of Arunachal Pradesh and how the mountains have shaped my perspective on life, community, and resilience.",
      author: "Dorjee Khandu",
      date: "March 9, 2024",
      category: "lifestyle",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      views: "2.3k",
      likes: "165",
      type: "blog",
      content: [
        "The mountains of Arunachal Pradesh have been my greatest teachers. Growing up in a small village nestled between towering peaks, I learned lessons that no classroom could ever provide. The mountains taught me patience – watching the slow change of seasons, the gradual melting of snow, the careful growth of alpine flowers.",
        "Community was never just a concept in our mountain village; it was a necessity for survival. During harsh winters, families shared resources without question. When someone fell ill, the entire village rallied to help. This spirit of collective responsibility shaped my understanding of what it means to be part of something larger than oneself.",
        "The mountains also taught me about resilience. Every year, our village faced challenges – landslides that blocked roads, storms that damaged homes, crop failures due to unpredictable weather. But every year, we rebuilt, replanted, and moved forward. The mountains showed us that setbacks are temporary, but the strength to overcome them is permanent.",
        "Simplicity was another profound lesson. In the mountains, you quickly learn to distinguish between wants and needs. The beauty of a sunrise over snow-capped peaks, the satisfaction of a meal shared with family, the warmth of a fire on a cold night – these simple pleasures became the foundation of contentment.",
        "As I've moved to urban areas for education and work, I carry these mountain lessons with me. They've helped me navigate the complexities of modern life while staying grounded in values that truly matter. The mountains may be far away now, but their wisdom continues to guide my journey.",
      ],
    },
    {
      id: "8",
      title: "Building Communities Through Art and Culture",
      excerpt:
        "How local artists and cultural enthusiasts are using creative expression to bring communities together and preserve traditional art forms.",
      author: "Anya Taki",
      date: "March 7, 2024",
      category: "culture",
      readTime: "9 min read",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
      views: "1.6k",
      likes: "112",
      type: "blog",
      content: [
        "Art has always been the heartbeat of Arunachali communities, but in recent years, we've witnessed a remarkable renaissance of cultural expression that's bringing people together in unprecedented ways. Local artists and cultural enthusiasts are not just preserving traditions – they're reimagining them for contemporary audiences.",
        "The transformation began with small community art workshops where elders shared traditional techniques with younger generations. What started as simple skill-sharing sessions evolved into vibrant cultural exchanges. Young people learned traditional weaving patterns, wood carving techniques, and folk songs, while bringing fresh perspectives and modern interpretations to these ancient art forms.",
        "Street art and murals have become powerful tools for community storytelling. Walls across Itanagar and other towns now display vibrant depictions of local legends, environmental messages, and celebrations of cultural diversity. These public art projects have transformed neighborhoods and created spaces for community dialogue and pride.",
        "Cultural festivals have taken on new dimensions as artists collaborate across tribal boundaries. The annual Nyokum festival now features fusion performances where traditional Nyishi dances are accompanied by contemporary music, creating spectacular shows that appeal to all age groups while maintaining cultural authenticity.",
        "Digital platforms have amplified the reach of local artists. Social media showcases of traditional crafts, online exhibitions of contemporary art inspired by tribal motifs, and virtual cultural performances have connected Arunachali artists with global audiences. This exposure has not only provided economic opportunities but also increased pride in local cultural heritage.",
        "The impact extends beyond artistic expression. These cultural initiatives have strengthened community bonds, provided platforms for intergenerational dialogue, and created economic opportunities for artists and craftspeople. Art has become a bridge connecting the past with the future, tradition with innovation, and communities with each other.",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Categories", icon: BookOpen },
    { id: "leadership", name: "Leadership", icon: TrendingUp },
    { id: "technology", name: "Technology", icon: PenTool },
    { id: "environment", name: "Environment", icon: Heart },
    { id: "business", name: "Business", icon: TrendingUp },
    { id: "personal", name: "Personal", icon: User },
    { id: "culture", name: "Culture", icon: BookOpen },
    { id: "lifestyle", name: "Lifestyle", icon: Heart },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    const matchesTab = activeTab === "all" || article.type === activeTab;

    return matchesSearch && matchesCategory && matchesTab;
  });

  const featuredArticles = articles.filter((article) => article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <NavigationBar />

      {/* Hero Section */}
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
              Articles & Blogs
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover insights, stories, and perspectives from Arunachal
              Pradesh's vibrant youth community
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Content */}
      {featuredArticles.length > 0 && (
        <section className="py-16 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Featured Content
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${article.type === "article" ? "bg-blue-500" : "bg-purple-500"} text-white font-semibold px-3 py-1`}
                        >
                          {article.type === "article" ? "Article" : "Blog"}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                          onClick={() => setSelectedArticle(article)}
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Paper Submission Message */}
      <section className="py-8 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-blue-100 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Share Your Story
            </h3>
            <p className="text-blue-700">
              Have an inspiring story or valuable insights to share? Join our
              community of writers and contribute to the conversation. Write an
              email to{" "}
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs and Filters */}
          <div className="flex flex-col gap-6 mb-12">
            {/* Content Type Tabs */}
            <div className="w-full">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 bg-white shadow-lg border border-gray-200">
                  <TabsTrigger
                    value="all"
                    className="text-gray-600 data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="article"
                    className="text-gray-600 data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="blog"
                    className="text-gray-600 data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    Blogs
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Category Filter */}
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={
                        selectedCategory === category.id ? "default" : "outline"
                      }
                      onClick={() => setSelectedCategory(category.id)}
                      className={`${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white border-0 shadow-lg"
                          : "border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-blue-400"
                      } transition-all duration-300 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2`}
                      size="sm"
                    >
                      <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      <span className="truncate">{category.name}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white border-0 shadow-md overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge
                        className={`${
                          article.type === "article"
                            ? "bg-blue-500 hover:bg-blue-600"
                            : "bg-purple-500 hover:bg-purple-600"
                        } text-white font-medium px-2 py-1 text-xs`}
                      >
                        {article.type === "article" ? "Article" : "Blog"}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="outline"
                        className="bg-white/90 text-gray-700 border-0 text-xs"
                      >
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-6 pt-3 sm:pt-6">
                    <CardTitle className="text-base sm:text-lg group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col px-3 sm:px-6 pb-3 sm:pb-6">
                    <p className="text-gray-600 mb-3 sm:mb-4 flex-1 line-clamp-3 text-xs sm:text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-500 gap-2 sm:gap-0">
                        <div className="flex items-center space-x-2 sm:space-x-3 flex-wrap">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            <span className="font-medium text-xs">
                              {article.author}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span className="text-xs">{article.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span className="text-xs">{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end mt-2 sm:mt-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 text-xs px-2 sm:px-3 h-7 sm:h-8"
                          onClick={() => setSelectedArticle(article)}
                        >
                          Read <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <BookOpen className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No content found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Article Detail Dialog */}
      <Dialog
        open={!!selectedArticle}
        onOpenChange={() => setSelectedArticle(null)}
      >
        <DialogContent className="max-w-[95vw] sm:max-w-3xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto bg-gradient-to-br from-orange-50/80 via-white/90 to-green-50/80 backdrop-blur-sm border border-orange-200/30 shadow-2xl rounded-xl mx-2 sm:mx-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 pr-8">
                  {selectedArticle.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        selectedArticle.type === "article"
                          ? "bg-blue-500"
                          : "bg-purple-500"
                      } text-white font-semibold px-3 py-1`}
                    >
                      {selectedArticle.type === "article" ? "Article" : "Blog"}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-700 border-b border-gray-300/50 pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="font-medium text-gray-800">
                        {selectedArticle.author}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-gray-700">
                        {selectedArticle.date}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-gray-700">
                        {selectedArticle.readTime}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="capitalize border-gray-400 text-gray-700 bg-white/60"
                  >
                    {selectedArticle.category}
                  </Badge>
                </div>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-800 leading-relaxed mb-6">
                    {selectedArticle.excerpt}
                  </p>

                  <div className="space-y-4 text-gray-700">
                    {selectedArticle.content.map((paragraph, index) => (
                      <p key={index} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Share Buttons */}
                <div className="border-t border-gray-300/50 pt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Share this {selectedArticle.type}
                  </h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 bg-blue-600 text-white border-blue-600 hover:bg-blue-700 hover:border-blue-700"
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const text = encodeURIComponent(selectedArticle.title);
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`,
                          "_blank",
                        );
                      }}
                    >
                      <Facebook className="w-4 h-4" />
                      <span>Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 bg-blue-700 text-white border-blue-700 hover:bg-blue-800 hover:border-blue-800"
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const text = encodeURIComponent(selectedArticle.title);
                        window.open(
                          `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${text}`,
                          "_blank",
                        );
                      }}
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 bg-blue-400 text-white border-blue-400 hover:bg-blue-500 hover:border-blue-500"
                      onClick={() => {
                        const url = encodeURIComponent(window.location.href);
                        const text = encodeURIComponent(selectedArticle.title);
                        window.open(
                          `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                          "_blank",
                        );
                      }}
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Articles;
