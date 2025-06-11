import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "New Research Reveals Healthcare Disparities in South Asian Communities",
      excerpt: "Our latest comprehensive study examines access to healthcare services and identifies key barriers faced by South Asian Americans across different regions.",
      author: "Dr. Priya Sharma",
      date: "March 12, 2024",
      category: "Research",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true
    },
    {
      title: "SAAPRI Testifies Before Congress on Immigration Reform",
      excerpt: "Our policy team presented key recommendations for comprehensive immigration reform that addresses the unique challenges faced by South Asian immigrants.",
      author: "Rajesh Patel", 
      date: "March 8, 2024",
      category: "Policy",
      image: "https://images.pexels.com/photos/8837854/pexels-photo-8837854.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Community Organizing Success: Housing Discrimination Case Victory",
      excerpt: "After months of advocacy and legal support, we secured a landmark victory against housing discrimination in the Bay Area South Asian community.",
      author: "Sarah Khan",
      date: "March 5, 2024", 
      category: "Advocacy",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Youth Leadership Program Graduates 50 Community Advocates",
      excerpt: "Our intensive 6-month program equipped young South Asian Americans with the skills and knowledge to become effective community advocates.",
      author: "Anil Gupta",
      date: "February 28, 2024",
      category: "Community",
      image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Research: "bg-blue-100 text-blue-800",
      Policy: "bg-green-100 text-green-800", 
      Advocacy: "bg-red-100 text-red-800",
      Community: "bg-purple-100 text-purple-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="news" className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Stay informed about our latest research, policy victories, community initiatives, 
            and advocacy efforts making a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(articles[0].category)}`}>
                      {articles[0].category}
                    </span>
                    <span className="text-xs text-[#9b1b01] font-semibold">FEATURED</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#222222] mb-4 leading-tight">
                    {articles[0].title}
                  </h3>
                  
                  <p className="text-[#666666] mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-[#666666]">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{articles[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{articles[0].date}</span>
                      </div>
                    </div>
                    
                    <button className="text-[#9b1b01] font-semibold hover:text-[#7a1501] transition-colors duration-200 flex items-center space-x-2 group">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-[#222222] mb-3 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-[#666666] text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-[#666666] mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                </div>
                
                <button className="text-[#9b1b01] font-semibold hover:text-[#7a1501] transition-colors duration-200 flex items-center space-x-2 group">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-[#9b1b01] text-[#9b1b01] px-8 py-3 rounded-lg font-semibold hover:bg-[#9b1b01] hover:text-white transition-colors duration-200">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;