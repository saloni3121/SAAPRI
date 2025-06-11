import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mic, ThumbsUp, ThumbsDown } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you find SAAPRI's work, reports, or events. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('health') || input.includes('healthcare')) {
      return "I can help you find our healthcare research! We have comprehensive reports on healthcare disparities in South Asian communities. Would you like me to share links to our latest Health Equity research or upcoming health-focused events?";
    }
    
    if (input.includes('event') || input.includes('workshop')) {
      return "Great! We have several upcoming events: Community Health Summit (Mar 15), Policy Advocacy Workshop (Mar 22), Annual Gala (Apr 5), and Youth Leadership Program (Apr 18). Which one interests you most?";
    }
    
    if (input.includes('report') || input.includes('research')) {
      return "We publish regular policy reports on various topics affecting South Asian Americans. Our most recent reports cover healthcare access, housing discrimination, and civic engagement. I can provide direct links to any specific research area you're interested in.";
    }
    
    if (input.includes('volunteer') || input.includes('involved')) {
      return "Wonderful! There are many ways to get involved with SAAPRI. You can join our volunteer program, participate in advocacy campaigns, attend community events, or apply for our Youth Leadership Program. What type of involvement interests you most?";
    }
    
    return "I'd be happy to help you find information about SAAPRI's work! I can assist with finding research reports, upcoming events, ways to get involved, or general information about our policy areas. What specific topic would you like to explore?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 sm:w-96 h-96 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-[#9b1b01] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold">SAAPRI Assistant</div>
                <div className="text-xs text-white/80">Online now</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-[#9b1b01] text-white rounded-br-none'
                      : 'bg-[#f2f2f2] text-[#222222] rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <div className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#f2f2f2] text-[#222222] p-3 rounded-lg rounded-bl-none">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-[#9b1b01] transition-colors">
                  <Mic className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#9b1b01] text-white p-3 rounded-lg hover:bg-[#7a1501] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            
            {/* Feedback */}
            <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-500">
              <span>Did this help?</span>
              <button className="flex items-center space-x-1 hover:text-[#9b1b01] transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>Yes</span>
              </button>
              <button className="flex items-center space-x-1 hover:text-[#9b1b01] transition-colors">
                <ThumbsDown className="w-4 h-4" />
                <span>No</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isOpen 
            ? 'bg-gray-600 text-white' 
            : 'bg-[#9b1b01] text-white hover:bg-[#7a1501]'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Notification Dot */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;