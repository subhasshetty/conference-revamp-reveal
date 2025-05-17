
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CardGrid = () => {
  const cards = [
    {
      id: 1,
      title: "Register for the Event",
      description: "Early bird registration fees are $175 for adults, $125 for students, and $90 for seniors. Register early to secure your spot and get the best price.",
      bgColor: "bg-blue-600",
      btnText: "Register Now",
      btnVariant: "secondary",
      icon: "/lovable-uploads/a55f5b18-2d19-4977-a43a-433b0559383b.png"
    },
    {
      id: 2,
      title: "Donate & Sponsor",
      description: "Your support will help improve events and create a better conference for everyone. Lets make this the best event ever.",
      bgColor: "bg-red-700",
      btnText: "Become a Sponsor",
      btnVariant: "secondary",
      icon: "/lovable-uploads/a55f5b18-2d19-4977-a43a-433b0559383b.png"
    },
    {
      id: 3,
      title: "Sirimudi Award",
      description: "Nominate individuals who have made extraordinary contributions to their field, language, and traditions.",
      bgColor: "bg-purple-800",
      btnText: "Submit Nomination",
      btnVariant: "secondary",
      icon: "/lovable-uploads/a55f5b18-2d19-4977-a43a-433b0559383b.png"
    },
    {
      id: 4,
      title: "Accommodation",
      description: "Find hotel recommendations and special discounts for our event attendees.",
      bgColor: "bg-amber-900",
      btnText: "View Options",
      btnVariant: "secondary",
      icon: "/lovable-uploads/a55f5b18-2d19-4977-a43a-433b0559383b.png"
    },
    {
      id: 5,
      title: "Siri Nudi Magazine",
      description: "Submit your articles for the special July 2024 edition showcasing our conference and community.",
      bgColor: "bg-amber-600",
      btnText: "Learn More",
      btnVariant: "secondary",
      icon: "/lovable-uploads/a55f5b18-2d19-4977-a43a-433b0559383b.png"
    },
    {
      id: 6,
      title: "Sign up to Perform",
      description: "Showcase your talent at our cultural performance evening. Apply now to be part of this special event.",
      bgColor: "bg-rose-800",
      btnText: "Apply Now",
      btnVariant: "secondary",
      icon: "/lovable-uploads/a55f5b18-2d19-4977-a43a-433b0559383b.png"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card 
          key={card.id} 
          className={`${card.bgColor} text-white border-none hover:scale-105 transition-transform duration-300 overflow-hidden`}
        >
          <CardHeader className="relative">
            <div className="absolute top-2 right-2 opacity-20">
              <img src={card.icon} alt="" className="w-12 h-12" />
            </div>
            <CardTitle className="text-xl md:text-2xl font-bold">{card.title}</CardTitle>
            <CardDescription className="text-white/70">
              {card.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant={card.btnVariant} className="w-full bg-white text-black hover:bg-white/90">
              {card.btnText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CardGrid;
