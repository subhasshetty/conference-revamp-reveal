
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

interface HeroProps {
  title: string;
  date: string;
  location: string;
  description: string;
}

const Hero = ({ title, date, location, description }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/40 to-black/80 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          {title}
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
          {description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-400" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-400" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-400" />
            <span>500+ Attendees</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="text-lg py-6 px-8 bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 duration-200">
            Register Now
          </Button>
          <Button variant="outline" className="text-lg py-6 px-8 border-white/30 hover:bg-white/10 transition-all">
            View Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
