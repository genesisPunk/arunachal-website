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
    // Set countdown to 0 for now
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-orange-500 shadow-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-orange-500 via-white to-green-600 text-black relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
              <div className="relative z-10">
                <div className="text-center">
                  <CardTitle className="text-3xl mb-2">
                    {announcements[0].title}
                  </CardTitle>
                  {announcements[0].organizer && (
                    <div className="flex items-center justify-center mb-2">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        Organized by {announcements[0].organizer}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>{announcements[0].date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      <span>{announcements[0].location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardDescription className="text-gray-700 text-center mb-6 text-lg">
                {announcements[0].description}
              </CardDescription>

              {/* Countdown Timer */}
              <div className="bg-gradient-to-r from-orange-100 via-white to-green-100 rounded-lg p-6 mb-6 border border-orange-300">
                <div className="flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5 mr-2 text-orange-600" />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Event Countdown
                  </h3>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3 shadow border-l-4 border-orange-500">
                    <div className="text-2xl font-bold text-orange-600">
                      {timeLeft.days}
                    </div>
                    <div className="text-sm text-gray-600">Days</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow border-l-4 border-white">
                    <div className="text-2xl font-bold text-gray-700">
                      {timeLeft.hours}
                    </div>
                    <div className="text-sm text-gray-600">Hours</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow border-l-4 border-green-600">
                    <div className="text-2xl font-bold text-green-600">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-sm text-gray-600">Minutes</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 shadow border-l-4 border-green-600">
                    <div className="text-2xl font-bold text-green-600">
                      {timeLeft.seconds}
                    </div>
                    <div className="text-sm text-gray-600">Seconds</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog
                open={isRegistrationOpen}
                onOpenChange={setIsRegistrationOpen}
              >
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white hover:from-green-600 hover:to-orange-500 transition-all duration-300 text-lg py-3">
                    <span>{announcements[0].ctaText}</span>
                    <ChevronRightIcon className="h-5 w-5 ml-2" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-bold">
                      Registration Status
                    </DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center py-6">
                    <p className="text-center text-lg text-gray-700">
                      To be notified soon
                    </p>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => setIsRegistrationOpen(false)}
                      className="w-full bg-gradient-to-r from-orange-500 to-green-600 text-white"
                    >
                      OK
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
    title: "Annual Mega Youth Parliament Event",
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
