import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "SAAPRI's research on healthcare disparities in our community opened my eyes to issues I never knew existed. Their work directly led to policy changes in our state that improved access to mental health services for South Asian families.",
      name: "Dr. Meera Patel",
      role: "Community Health Advocate",
      location: "California",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "When my family faced housing discrimination, SAAPRI connected us with legal resources and advocacy support. Not only did we win our case, but the organization helped create lasting change in our community's housing policies.",
      name: "Rajesh Kumar",
      role: "Small Business Owner",
      location: "New York",
      image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The Youth Leadership Program transformed my understanding of civic engagement. I learned how to effectively advocate for my community and now serve on our city council, representing South Asian American voices in local government.",
      name: "Priya Sharma",
      role: "City Council Member",
      location: "Illinois",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "SAAPRI's policy briefs and research have been instrumental in shaping legislation in our state. Their data-driven approach and community-centered advocacy make them an invaluable partner in creating equitable policies.",
      name: "Senator Anil Gupta",
      role: "State Senator",
      location: "Texas",
      image: "https://images.pexels.com/photos/4427622/pexels-photo-4427622.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Community Stories
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Hear from community members, leaders, and partners about the impact 
            of our work and how we're creating change together.
          </p>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-[#fafafa] to-[#f2f2f2] rounded-2xl p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              {/* Quote */}
              <div className="flex-1">
                <Quote className="w-12 h-12 text-[#9b1b01] mb-6" />
                <blockquote className="text-xl lg:text-2xl text-[#222222] leading-relaxed mb-8">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-[#222222] text-lg">
                      {testimonials[currentSlide].name}
                    </div>
                    <div className="text-[#9b1b01] font-medium">
                      {testimonials[currentSlide].role}
                    </div>
                    <div className="text-[#666666] text-sm">
                      {testimonials[currentSlide].location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col items-center space-y-4 lg:space-y-6">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-[#9b1b01] hover:bg-[#9b1b01] hover:text-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-[#9b1b01] scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-[#9b1b01] hover:bg-[#9b1b01] hover:text-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#9b1b01] mb-2">95%</div>
            <div className="text-[#666666]">Community Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#9b1b01] mb-2">1,200+</div>
            <div className="text-[#666666]">Families Helped</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#9b1b01] mb-2">75+</div>
            <div className="text-[#666666]">Policy Changes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#9b1b01] mb-2">15</div>
            <div className="text-[#666666]">States Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;