import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon, ArrowRightIcon } from "lucide-react";

interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface ActivitiesGridProps {
  activities?: Activity[];
}

const ActivitiesGrid = ({
  activities = defaultActivities,
}: ActivitiesGridProps) => {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Recent Activities
          </h2>
          <p className="text-lg text-gray-600">
            Explore our recent initiatives and events
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.slice(0, 3).map((activity) => (
            <Card
              key={activity.id}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>{activity.date}</span>
                </div>
                <CardTitle className="text-xl">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {activity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            className="bg-green-600 hover:bg-green-700"
            onClick={() => {
              const event = new CustomEvent("navigate", {
                detail: { path: "/gallery" },
              });
              window.dispatchEvent(event);
            }}
          >
            View All Activities
          </Button>
        </div>
      </div>
    </div>
  );
};

// Default activities data for when no props are provided
const defaultActivities: Activity[] = [
  {
    id: "1",
    title: "Youth Leadership Summit",
    date: "June 15, 2023",
    description:
      "A two-day leadership summit bringing together young leaders from across Arunachal Pradesh to discuss pressing issues and develop solutions.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=60",
  },
  {
    id: "2",
    title: "Environmental Awareness Campaign",
    date: "May 22, 2023",
    description:
      "Youth-led initiative to clean local rivers and raise awareness about environmental conservation in the region.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=60",
  },
  {
    id: "3",
    title: "Cultural Exchange Program",
    date: "April 10, 2023",
    description:
      "A cultural exchange program celebrating the diverse traditions and heritage of Arunachal Pradesh's indigenous communities.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=60",
  },
  {
    id: "4",
    title: "Digital Skills Workshop",
    date: "March 5, 2023",
    description:
      "Workshop focused on enhancing digital literacy and technology skills among rural youth to bridge the digital divide.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=60",
  },
  {
    id: "5",
    title: "Health Awareness Drive",
    date: "February 18, 2023",
    description:
      "Health campaign organized in collaboration with local medical professionals to promote wellness and preventive healthcare.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=60",
  },
  {
    id: "6",
    title: "Career Guidance Fair",
    date: "January 25, 2023",
    description:
      "Career counseling event providing guidance to high school and college students about various career opportunities and pathways.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=60",
  },
];

export default ActivitiesGrid;
