
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface EventItem {
  id: number;
  time: string;
  title: string;
  speaker: string;
  location: string;
  category: string;
}

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState("day1");
  
  const scheduleData = {
    day1: [
      {
        id: 1,
        time: "09:00 - 10:00",
        title: "Opening Ceremony & Welcome Address",
        speaker: "Conference Committee",
        location: "Main Hall",
        category: "ceremony"
      },
      {
        id: 2,
        time: "10:15 - 11:30",
        title: "Keynote: The Future of Innovation",
        speaker: "Dr. Sarah Johnson",
        location: "Main Hall",
        category: "keynote"
      },
      {
        id: 3,
        time: "11:45 - 12:45",
        title: "Panel Discussion: Industry Trends",
        speaker: "Various Industry Experts",
        location: "Forum Room",
        category: "panel"
      },
      {
        id: 4,
        time: "13:00 - 14:00",
        title: "Lunch Break & Networking",
        speaker: "",
        location: "Dining Area",
        category: "break"
      },
      {
        id: 5,
        time: "14:15 - 15:30",
        title: "Workshop: Interactive Learning Experience",
        speaker: "Aisha Patel",
        location: "Workshop Room A",
        category: "workshop"
      },
    ],
    day2: [
      {
        id: 6,
        time: "09:30 - 10:45",
        title: "Keynote: Transforming Customer Experiences",
        speaker: "Michael Chen",
        location: "Main Hall",
        category: "keynote"
      },
      {
        id: 7,
        time: "11:00 - 12:15",
        title: "Case Study: Success Stories",
        speaker: "James Wilson & Panel",
        location: "Forum Room",
        category: "presentation"
      },
      {
        id: 8,
        time: "12:30 - 13:30",
        title: "Lunch Break & Networking",
        speaker: "",
        location: "Dining Area",
        category: "break"
      },
      {
        id: 9,
        time: "13:45 - 15:00",
        title: "Interactive Session: Problem Solving",
        speaker: "Workshop Facilitators",
        location: "Workshop Room B",
        category: "workshop"
      },
      {
        id: 10,
        time: "15:15 - 16:30",
        title: "Performance & Closing Remarks",
        speaker: "Various Artists & Committee",
        location: "Main Hall",
        category: "ceremony"
      },
    ]
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "keynote":
        return "border-l-4 border-blue-500";
      case "panel":
        return "border-l-4 border-purple-500";
      case "workshop":
        return "border-l-4 border-green-500";
      case "presentation":
        return "border-l-4 border-yellow-500";
      case "break":
        return "border-l-4 border-gray-500";
      case "ceremony":
        return "border-l-4 border-red-500";
      default:
        return "border-l-4 border-gray-500";
    }
  };

  return (
    <section id="schedule" className="max-w-4xl mx-auto">
      <Tabs defaultValue="day1" onValueChange={setActiveDay} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger 
            value="day1" 
            className={activeDay === "day1" ? "data-[state=active]:bg-blue-600" : ""}
          >
            <Calendar className="mr-2 h-4 w-4" /> Day 1
          </TabsTrigger>
          <TabsTrigger 
            value="day2"
            className={activeDay === "day2" ? "data-[state=active]:bg-blue-600" : ""}
          >
            <Calendar className="mr-2 h-4 w-4" /> Day 2
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="day1" className="space-y-4">
          {scheduleData.day1.map((event) => (
            <Card 
              key={event.id} 
              className={`hover:bg-gray-900 transition-colors ${getCategoryColor(event.category)}`}
            >
              <CardContent className="p-0">
                <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-2 md:mb-0">
                    <span className="text-gray-400 text-sm md:text-base">{event.time}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-lg font-medium text-white">{event.title}</h3>
                    {event.speaker && (
                      <p className="text-sm text-blue-400 mt-1">{event.speaker}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">{event.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="day2" className="space-y-4">
          {scheduleData.day2.map((event) => (
            <Card 
              key={event.id} 
              className={`hover:bg-gray-900 transition-colors ${getCategoryColor(event.category)}`}
            >
              <CardContent className="p-0">
                <div className="p-4 md:p-6 flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-2 md:mb-0">
                    <span className="text-gray-400 text-sm md:text-base">{event.time}</span>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-lg font-medium text-white">{event.title}</h3>
                    {event.speaker && (
                      <p className="text-sm text-blue-400 mt-1">{event.speaker}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">{event.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-center mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Keynote</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Panel</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Workshop</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Presentation</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-300">Ceremony</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
