
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const SpeakersSection = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Keynote Speaker",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      bio: "Award-winning researcher and author specializing in artificial intelligence and its societal impacts."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Industry Expert",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      bio: "Founder and CEO of TechFuture, with over 15 years experience in technology innovation."
    },
    {
      id: 3,
      name: "Aisha Patel",
      role: "Workshop Leader",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      bio: "Creative director and design thinking facilitator who has led workshops at over 50 global conferences."
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Panel Moderator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
      bio: "Renowned journalist and podcast host specializing in emerging technologies and cultural shifts."
    }
  ];

  return (
    <section id="speakers" className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Speakers</h2>
      <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
        Meet our extraordinary lineup of industry experts, thought leaders, and innovators who will share their insights and experiences.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {speakers.map((speaker) => (
          <Card key={speaker.id} className="bg-gray-900 border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
            <div className="h-64 overflow-hidden">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-5">
              <h3 className="text-xl font-semibold text-white mb-1">{speaker.name}</h3>
              <p className="text-blue-400 mb-3">{speaker.role}</p>
              <p className="text-gray-400 text-sm">{speaker.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="text-blue-400 hover:text-blue-300 underline underline-offset-4 font-medium">
          View All Speakers →
        </button>
      </div>
    </section>
  );
};

export default SpeakersSection;
