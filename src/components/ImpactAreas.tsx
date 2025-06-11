import React from 'react';
import { Scale, Users, Heart, BookOpen, Briefcase, Home } from 'lucide-react';

const ImpactAreas = () => {
  const areas = [
    {
      icon: Scale,
      title: "Access to Justice",
      description: "Ensuring equal access to legal resources and fair treatment in the justice system for all South Asian Americans.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Users,
      title: "Civic Action",
      description: "Mobilizing communities to participate in democratic processes and advocate for policies that reflect our values.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Heart,
      title: "Health Equity",
      description: "Addressing health disparities and promoting culturally competent healthcare for South Asian communities.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: BookOpen,
      title: "Education Access",
      description: "Advocating for inclusive education policies and addressing barriers to educational opportunities.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Briefcase,
      title: "Economic Justice",
      description: "Promoting fair employment practices and economic opportunities for South Asian American workers.",
      color: "bg-yellow-50 text-yellow-600"
    },
    {
      icon: Home,
      title: "Housing Rights",
      description: "Fighting housing discrimination and promoting affordable housing access in our communities.",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <section id="our-work" className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section with Glassmorphism */}
        <div className="relative mb-20">
          {/* Background blur effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#9b1b01]/10 via-[#9b1b01]/5 to-[#9b1b01]/10 rounded-3xl blur-xl"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/20 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
            <div className="text-center group">
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg hover:bg-white/40 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl font-bold text-[#9b1b01] mb-3 drop-shadow-sm">50K+</div>
                <div className="text-[#222222] font-semibold text-lg">Community Members</div>
                <div className="w-12 h-1 bg-gradient-to-r from-[#9b1b01] to-[#9b1b01]/50 rounded-full mx-auto mt-3"></div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg hover:bg-white/40 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl font-bold text-[#9b1b01] mb-3 drop-shadow-sm">25+</div>
                <div className="text-[#222222] font-semibold text-lg">Policy Reports</div>
                <div className="w-12 h-1 bg-gradient-to-r from-[#9b1b01] to-[#9b1b01]/50 rounded-full mx-auto mt-3"></div>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-lg hover:bg-white/40 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl font-bold text-[#9b1b01] mb-3 drop-shadow-sm">100+</div>
                <div className="text-[#222222] font-semibold text-lg">Community Events</div>
                <div className="w-12 h-1 bg-gradient-to-r from-[#9b1b01] to-[#9b1b01]/50 rounded-full mx-auto mt-3"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#9b1b01]/20 rounded-full blur-sm"></div>
          <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#9b1b01]/15 rounded-full blur-md"></div>
        </div>

        {/* Impact Areas Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Our Impact Areas
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            We focus on key areas where policy change can create the greatest impact 
            for South Asian American communities nationwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 ${area.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-[#222222] mb-4">
                {area.title}
              </h3>
              
              <p className="text-[#666666] leading-relaxed mb-6">
                {area.description}
              </p>
              
              <button className="text-[#9b1b01] font-semibold hover:text-[#7a1501] transition-colors duration-200 flex items-center space-x-2 group">
                <span>Learn More</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAreas;