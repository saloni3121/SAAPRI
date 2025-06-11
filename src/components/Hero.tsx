import React, { useState, useEffect } from 'react';
import { ArrowDown, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://saapri.org/content/wp-content/uploads/2013/03/anns-dad-slider2-e1537308769367.jpg",
      title: "Empowering South Asian American",
      highlight: "Communities",
      subtitle: "Through research, advocacy, and community engagement, we advance policy solutions that create equity and justice for South Asian Americans across the nation.",
      cta: "Learn About Our Impact"
    },
    {
      image: "https://saapri.org/content/wp-content/uploads/2023/01/PXL_20220609_172747343112-scaled.jpg",
      title: "Building Stronger",
      highlight: "Communities Together",
      subtitle: "Join thousands of South Asian Americans working together to create lasting change through grassroots organizing and policy advocacy.",
      cta: "Get Involved Today"
    },
    {
      image: "https://saapri.org/content/wp-content/uploads/2018/09/SAAPRI_UIC2018-e1537309331242.jpg",
      title: "Research-Driven",
      highlight: "Policy Solutions",
      subtitle: "Our comprehensive research and data-driven approach ensures that South Asian American voices are heard in policy discussions nationwide.",
      cta: "Explore Our Research"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`SAAPRI Community ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-4xl">
                  <div className="space-y-8 animate-fade-in">
                    <div className="space-y-6">
                      <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                        {slide.title}
                        <span className="block text-[#9b1b01] drop-shadow-lg">
                          {slide.highlight}
                        </span>
                      </h1>
                      <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl">
                        {slide.subtitle}
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6">
                      <button 
                        onClick={() => document.getElementById('our-work')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#9b1b01] text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-[#7a1501] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 group"
                      >
                        <span>{slide.cta}</span>
                        <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
                      </button>
                      
                      <button className="border-3 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-[#222222] transition-all duration-300 flex items-center justify-center space-x-3 group backdrop-blur-sm">
                        <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                        <span>Watch Our Story</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-[#9b1b01] transition-all duration-300 group z-10"
      >
        <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-[#9b1b01] transition-all duration-300 group z-10"
      >
        <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#9b1b01] scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;