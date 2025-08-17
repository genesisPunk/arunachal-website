import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  MapPinIcon,
  ChevronRightIcon,
  Clock,
  User,
} from "lucide-react";

interface AnnouncementProps {
  announcements?: Array<{
    id: string;
    title: string;
    date: string;
    location: string;
    description: string;
    category: string;
    ctaText: string;
    ctaLink: string;
    organizer?: string;
    eventDate?: Date;
  }>;
}

const AnnouncementSection = ({
  announcements = defaultAnnouncements,
}: AnnouncementProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    isHuman: false,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-20T17:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRegistration = () => {
    alert("To be notified soon...");
    setIsRegistrationOpen(false);
  };

  return (
    <section className="w-full py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-[#3b82f6]">
            Announcements & Upcoming Events
          </h2>
          <div className="h-1 w-24 bg-[#138808] mb-4"></div>
          <p className="text-gray-600 text-center max-w-2xl">
            Stay updated with the latest events and initiatives from the
            Arunachal Pradesh Youth Parliament
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="relative overflow-hidden shadow-xl transform hover:scale-[1.01] transition-all duration-500 bg-gradient-to-br from-white via-orange-50/30 to-green-50/30 backdrop-blur-sm border-0">
            {/* Enhanced decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-green-500/10 z-0"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-500 z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-500 z-10"></div>

            {/* Floating geometric shapes */}
            <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-xl animate-pulse z-0"></div>
            <div className="absolute top-12 right-12 w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full blur-xl animate-pulse delay-1000 z-0"></div>
            <div className="absolute bottom-8 left-16 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-xl animate-pulse delay-500 z-0"></div>
            <div className="absolute bottom-12 right-8 w-24 h-24 bg-gradient-to-br from-orange-400/15 to-green-400/15 rounded-full blur-2xl animate-pulse delay-2000 z-0"></div>
            <CardHeader className="text-black relative z-10 bg-gradient-to-r from-orange-50/80 via-white/90 to-green-50/80 backdrop-blur-md border-b border-gradient-to-r from-orange-300/50 to-green-300/50">
              <div className="relative z-10">
                <div className="text-center">
                  <div className="mb-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-green-600 text-white px-4 py-1 text-sm font-semibold">
                      FLAGSHIP EVENT
                    </Badge>
                  </div>
                  <CardTitle className="text-4xl mb-4 bg-gradient-to-r from-orange-600 via-blue-600 to-green-600 bg-clip-text text-transparent font-extrabold tracking-tight drop-shadow-sm">
                    {announcements[0].title}
                  </CardTitle>
                  {announcements[0].organizer && (
                    <div className="flex items-center justify-center mb-3 bg-white/50 rounded-full px-4 py-2 mx-auto w-fit">
                      <User className="h-5 w-5 mr-2 text-orange-600" />
                      <span className="text-sm font-semibold text-gray-700">
                        Organized by {announcements[0].organizer}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-center space-x-6 text-sm">
                    <div className="flex items-center bg-orange-100 rounded-full px-3 py-2">
                      <CalendarIcon className="h-4 w-4 mr-2 text-orange-600" />
                      <span className="font-medium text-orange-800">
                        {announcements[0].date}
                      </span>
                    </div>
                    <div className="flex items-center bg-green-100 rounded-full px-3 py-2">
                      <MapPinIcon className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium text-green-800">
                        {announcements[0].location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 relative z-10 bg-gradient-to-br from-white/90 via-orange-50/40 to-green-50/40 backdrop-blur-md">
              <CardDescription className="text-gray-800 text-center mb-8 text-lg leading-relaxed font-medium bg-white/70 rounded-xl p-5 border border-orange-200/50 shadow-lg backdrop-blur-sm">
                {announcements[0].description}
              </CardDescription>

              {/* Enhanced Countdown Timer */}
              <div className="bg-gradient-to-r from-orange-100/80 via-white/90 to-green-100/80 rounded-2xl p-4 sm:p-8 mb-6 border border-gradient-to-r from-orange-300/60 to-green-300/60 shadow-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 text-center">
                  <div className="bg-white/90 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border-t-4 border-orange-500 transform hover:scale-110 hover:rotate-1 transition-all duration-300 backdrop-blur-sm">
                    <div className="text-xl sm:text-3xl font-extrabold text-orange-600 mb-1 sm:mb-2 drop-shadow-sm">
                      {timeLeft.days}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Days
                    </div>
                  </div>
                  <div className="bg-white/90 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border-t-4 border-blue-500 transform hover:scale-110 hover:-rotate-1 transition-all duration-300 backdrop-blur-sm">
                    <div className="text-xl sm:text-3xl font-extrabold text-blue-600 mb-1 sm:mb-2 drop-shadow-sm">
                      {timeLeft.hours}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Hours
                    </div>
                  </div>
                  <div className="bg-white/90 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border-t-4 border-green-600 transform hover:scale-110 hover:rotate-1 transition-all duration-300 backdrop-blur-sm">
                    <div className="text-xl sm:text-3xl font-extrabold text-green-600 mb-1 sm:mb-2 drop-shadow-sm">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Minutes
                    </div>
                  </div>
                  <div className="bg-white/90 rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border-t-4 border-green-600 transform hover:scale-110 hover:-rotate-1 transition-all duration-300 backdrop-blur-sm">
                    <div className="text-xl sm:text-3xl font-extrabold text-green-600 mb-1 sm:mb-2 drop-shadow-sm">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="relative z-10 bg-gradient-to-r from-orange-50/80 via-white/90 to-green-50/80 backdrop-blur-md border-t border-gradient-to-r from-orange-300/50 to-green-300/50 p-6">
              <Dialog
                open={isRegistrationOpen}
                onOpenChange={setIsRegistrationOpen}
              >
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-green-600 text-white hover:from-green-600 hover:via-blue-500 hover:to-orange-500 transition-all duration-500 text-lg py-5 rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-3xl font-extrabold uppercase tracking-wider border-2 border-white/20 backdrop-blur-sm">
                    <span>{announcements[0].ctaText}</span>
                    <ChevronRightIcon className="h-5 w-5 ml-3 animate-bounce" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-white/95 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
                  <DialogHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
                      Registration Status
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col items-center py-6">
                    <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6 mb-4 border border-orange-200/50">
                      <p className="text-center text-lg text-gray-700 font-medium">
                        Registration will open soon!
                      </p>
                      <p className="text-center text-sm text-gray-600 mt-2">
                        Stay tuned for updates on our social media channels.
                      </p>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => setIsRegistrationOpen(false)}
                      className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white hover:from-orange-600 hover:to-green-700 transition-all duration-300 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Got it!
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

const defaultAnnouncements = [
  {
    id: "1",
    title: "Annual Mega Youth Parliament Event 3.0",
    date: "To be announced soon",
    location: "To be announced soon",
    description:
      "Hosting flagship events that bring together top representatives from all regional and local forums to debate pressing issues, share innovative ideas, and directly engage with senior policymakers.",
    category: "Parliament",
    ctaText: "Register Now",
    ctaLink: "/events/parliament-3",
    organizer: "THE HILLS SOCIETY",
    eventDate: new Date("2024-12-31T23:59:59"),
  },
];

export default AnnouncementSection;
