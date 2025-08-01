import React from "react";
import NavigationBar from "@/components/NavigationBar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface EventItem {
  id: string;
  title: string;
  image: string;
  description: string;
  date: string;
}

const Gallery = () => {
  const events: EventItem[] = [
    {
      id: "1",
      title: "2-Day State Level Symposium – 2023",
      image: "/event-1.png",
      description:
        "A comprehensive two-day symposium focusing on electoral reforms in student elections, bringing together youth leaders, educators, and policy makers to discuss the potential of young people in Arunachal Pradesh. The event featured panel discussions on student politics and beyond, emphasizing the importance of unlocking youth potential in governance and community development.",
      date: "March 2023",
    },
    {
      id: "2",
      title:
        "Collaborating Partner in Pakke Paga Hornbill Festival, Seijosa – 2025",
      image: "/event-2.jpg",
      description:
        "Arunachal Pradesh Youth Parliament proudly collaborated as a partner in the prestigious Pakke Paga Hornbill Festival in Seijosa. This cultural celebration showcased the rich heritage and biodiversity of the region, bringing together communities to celebrate conservation efforts and traditional values while promoting youth engagement in cultural preservation.",
      date: "January 2025",
    },
    {
      id: "3",
      title:
        "Collaborating Partner in Plantation Drive at Government Secondary School, Chimpu, Organized by Youth Mission for Clean River",
      image: "/event-3.jpg",
      description:
        "As a collaborating partner with Youth Mission for Clean River, we participated in a meaningful plantation drive at Government Secondary School, Chimpu. This environmental initiative aimed to create awareness about environmental conservation among students while contributing to green cover enhancement and promoting sustainable practices in educational institutions.",
      date: "2024",
    },
    {
      id: "4",
      title:
        "Collaborating Partner in Yagamso River Cleanup at Energy Park, Itanagar, Organized by Youth Mission for Clean River",
      image: "/event-4.jpg",
      description:
        "In partnership with Youth Mission for Clean River, we actively participated in the Yagamso River cleanup initiative at Energy Park, Itanagar. This environmental conservation effort brought together volunteers to restore the natural beauty of the river while raising awareness about water pollution and the importance of maintaining clean waterways for future generations.",
      date: "2024",
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
            Gallery
          </motion.h1>
          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our photo and video collection showcasing youth initiatives
            and events
          </motion.p>
        </div>
      </div>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#000080] mb-2 leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-sm font-medium text-orange-600 mb-3">
                          {event.date}
                        </p>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-justify">
                        {event.description}
                      </p>
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

export default Gallery;
