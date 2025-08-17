import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  image: string;
  year: string;
  category: "Speaker" | "Dignitary";
  description: string;
}

const speakersData: Speaker[] = [
  {
    id: 1,
    name: "Tesam Pongte",
    title: "Speaker",
    organization: "Arunachal Pradesh Legislative Assembly",
    image: "/Speaker2.png",
    year: "2025",
    category: "Speaker",
    description: "Speaker of Arunachal Pradesh Legislative Assembly",
  },
  {
    id: 2,
    name: "Mama Natung",
    title: "Home Minister",
    organization: "Arunachal Pradesh",
    image: "/Speaker4.png",
    year: "2025",
    category: "Speaker",
    description: "Home Minister of Arunachal Pradesh",
  },
  {
    id: 3,
    name: "Oken Tayeng",
    title: "MLA",
    organization: "Govt of Arunachal Pradesh",
    image: "/Speaker1.png",
    year: "2025",
    category: "Speaker",
    description: "Member of Legislative Assembly",
  },
  {
    id: 4,
    name: "Abu Tayeng",
    title: "Secretary",
    organization: "Sports and Youth Affairs",
    image: "/Speaker3.png",
    year: "2025",
    category: "Speaker",
    description: "Secretary of Sports and Youth Affairs",
  },
  {
    id: 5,
    name: "Chau Zingu Namchoom",
    title: "MLA",
    organization: "Advisor to Ministry of Sports and Youth affairs, RWD",
    image: "/IMG-20250817-WA0005.jpg",
    year: "2025",
    category: "Speaker",
    description: "MLA and Advisor to Ministry of Sports and Youth affairs, RWD",
  },
  {
    id: 6,
    name: "Kento Jini",
    title: "Minister",
    organization: "Sports and Youth Affairs",
    image: "/IMG-20250817-WA0006.jpg",
    year: "2025",
    category: "Speaker",
    description: "Minister, Sports and Youth Affairs",
  },
];

const SpeakerCard = ({
  speaker,
  index,
}: {
  speaker: Speaker;
  index: number;
}) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    });
  }, [controls, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-br from-white to-slate-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-60" />

          {/* Image Container */}
          <div className="relative p-6 pb-4">
            <div className="relative mx-auto w-40 h-40 mb-4">
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full h-full rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-400 via-white to-green-400 shadow-lg"
              >
                <motion.img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: isHovered ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  transition: { delay: 0.3, duration: 0.5 },
                }}
                className="absolute -top-2 -right-2"
              >
                <Badge
                  variant={
                    speaker.category === "Dignitary" ? "default" : "secondary"
                  }
                  className={`text-xs font-bold shadow-md ${
                    speaker.category === "Dignitary"
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                      : "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                  }`}
                >
                  {speaker.category}
                </Badge>
              </motion.div>
            </div>
          </div>

          <CardContent className="pt-0 pb-6 text-center relative z-10">
            <motion.h3
              className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-700 transition-colors duration-300"
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {speaker.name}
            </motion.h3>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : "60%" }}
              transition={{ duration: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-orange-400 via-white to-green-400 mx-auto mb-2"
            />

            <p className="text-sm font-semibold text-blue-600 mb-2">
              {speaker.title}
            </p>

            <p className="text-xs text-slate-600 mb-4">
              {speaker.organization}
            </p>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-slate-100 to-slate-200 text-xs font-medium text-slate-700 shadow-sm"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              {speaker.year}
            </motion.div>
          </CardContent>

          {/* Decorative Elements */}
          <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-orange-200 to-transparent rounded-full opacity-30" />
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-gradient-to-br from-green-200 to-transparent rounded-full opacity-30" />
        </div>
      </Card>
    </motion.div>
  );
};

const SpeakersCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          Previous Speakers
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-white to-green-500 mx-auto mb-4" />
        <p className="text-slate-600 max-w-2xl mx-auto">
          Distinguished personalities who have graced our Youth Parliament
          sessions with their wisdom and guidance
        </p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {speakersData.map((speaker, index) => (
              <CarouselItem
                key={speaker.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <SpeakerCard speaker={speaker} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Buttons */}
          <CarouselPrevious className="-left-4 md:-left-12 bg-white/90 hover:bg-white border-2 border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300" />
          <CarouselNext className="-right-4 md:-right-12 bg-white/90 hover:bg-white border-2 border-slate-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300" />
        </Carousel>

        {/* Progress Indicator */}
        <motion.div
          className="flex justify-center mt-8 space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {Array.from({ length: Math.ceil(speakersData.length / 4) }).map(
            (_, index) => (
              <motion.div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor((current - 1) / 4) === index
                    ? "w-8 bg-gradient-to-r from-orange-500 to-green-500"
                    : "w-2 bg-slate-300"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ),
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SpeakersCarousel;
