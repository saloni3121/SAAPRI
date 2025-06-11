import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#9b1b01] to-[#7a1501]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get the latest updates on our research, policy initiatives, community events, 
            and opportunities to make a difference in your inbox.
          </p>
        </div>

        {!isSubscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-lg text-[#222222] placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-200"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-white text-[#9b1b01] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 disabled:opacity-70 disabled:transform-none flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-[#9b1b01] border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Subscribe</span>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
            <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">
              Welcome to our community!
            </h3>
            <p className="text-white/90">
              Thank you for subscribing. You'll receive our next newsletter soon.
            </p>
          </div>
        )}

        <div className="mt-8 text-white/70 text-sm">
          <p>
            We respect your privacy. Unsubscribe at any time. 
            <a href="#" className="underline hover:text-white transition-colors ml-1">
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Newsletter Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">Weekly Updates</h4>
            <p className="text-white/80 text-sm">
              Stay informed about our latest research findings and policy developments.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">Event Invites</h4>
            <p className="text-white/80 text-sm">
              Be the first to know about upcoming community events and workshops.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="font-semibold text-white mb-2">Action Alerts</h4>
            <p className="text-white/80 text-sm">
              Get notified about urgent advocacy opportunities and ways to get involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;