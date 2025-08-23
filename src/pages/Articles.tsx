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
}

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);

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
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&q=80",
      views: "1.9k",
      likes: "127",
      type: "blog",
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs and Filters */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Content Type Tabs */}
            <div className="lg:w-1/3">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3 bg-white shadow-lg border border-gray-200">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-green-500 data-[state=active]:text-white"
                  >
                    All
                  </TabsTrigger>
                  <TabsTrigger
                    value="article"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    Articles
                  </TabsTrigger>
                  <TabsTrigger
                    value="blog"
                    className="data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                  >
                    Blogs
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Category Filter */}
            <div className="lg:w-2/3">
              <div className="flex flex-wrap gap-2">
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
                      } transition-all duration-300`}
                      size="sm"
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 flex-1 line-clamp-3 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            <span className="font-medium">
                              {article.author}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-end mt-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 text-xs px-3 h-8"
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 via-white to-green-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Share Your Story
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Have an inspiring story or valuable insights to share? Join our
              community of writers and contribute to the conversation.
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setShowSubmitDialog(true)}
            >
              Submit Your Article
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Article Detail Dialog */}
      <Dialog
        open={!!selectedArticle}
        onOpenChange={() => setSelectedArticle(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-orange-50/80 via-white/90 to-green-50/80 backdrop-blur-sm border border-orange-200/30 shadow-2xl rounded-xl">
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
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
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

      {/* Submit Article Dialog */}
      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent className="max-w-md bg-gradient-to-br from-orange-50/90 via-white/95 to-green-50/90 backdrop-blur-sm border border-orange-200/30 shadow-xl rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-800">
              Submit Your Article
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you want to feature your article or blog here, please reach out
              to us at{" "}
              <a
                href="mailto:Arunachalyouthparliament@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-medium underline"
              >
                Arunachalyouthparliament@gmail.com
              </a>
            </p>
            <div className="flex justify-end">
              <Button
                onClick={() => setShowSubmitDialog(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Got it
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Articles;
