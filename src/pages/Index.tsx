
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import SpeakersSection from "@/components/SpeakersSection";
import ScheduleSection from "@/components/ScheduleSection";
import CardGrid from "@/components/CardGrid";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <Hero 
        title="International Conference 2024" 
        date="July 2024" 
        location="Virtual & In-Person"
        description="Join us for an inspiring gathering of thought leaders, innovators, and performers."
      />
      
      <SpeakersSection />
      
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Event Schedule</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Plan your conference experience with our comprehensive schedule of talks, performances, and networking opportunities.
        </p>
        <ScheduleSection />
      </section>
      
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Conference Information</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Everything you need to know to make the most of your conference experience.
        </p>
        <CardGrid />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
