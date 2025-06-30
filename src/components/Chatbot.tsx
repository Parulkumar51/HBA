import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, Lightbulb, Home, Building, Palette } from 'lucide-react';

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm HBA Studio's AI assistant. I can help you with architectural design questions, project planning, and information about our services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "Tell me about your services",
        "What is 3D visualization?",
        "How do I start a project?",
        "Show me your portfolio"
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickResponses = {
    "tell me about your services": "We offer comprehensive architectural services including design, 3D visualization, space planning, master planning, interior design, sustainable design, and project management. Our team specializes in residential, commercial, and institutional projects.",
    "what is 3d visualization": "3D visualization is our cutting-edge technology that creates immersive, photorealistic renderings and virtual walkthroughs of architectural designs. You can explore spaces before they're built using WebGL-powered experiences.",
    "how do i start a project": "Starting a project is easy! Simply fill out our contact form with your project details, and we'll schedule a free consultation to discuss your vision, timeline, and budget. We'll then create a custom proposal for your project.",
    "show me your portfolio": "Our portfolio showcases award-winning projects across residential, commercial, hospitality, and institutional sectors. You can explore our work in the Portfolio section, featuring detailed case studies and 3D virtual tours.",
    "pricing": "Project pricing varies based on scope, complexity, and timeline. We offer competitive rates and provide detailed quotes after our initial consultation. Contact us for a personalized estimate.",
    "timeline": "Project timelines depend on scope and complexity. Residential projects typically take 3-6 months, while commercial projects may take 6-18 months. We'll provide a detailed timeline during our consultation.",
    "sustainability": "Sustainability is core to our practice. We specialize in green building design, LEED certification, energy-efficient systems, and environmentally responsible materials selection.",
    "technology": "We use cutting-edge technology including BIM modeling, VR/AR visualization, IoT integration, and advanced 3D rendering. Our tech stack ensures precision, collaboration, and immersive client experiences."
  };

  const simulateTyping = (responseText: string, suggestions?: string[]) => {
    setIsTyping(true);
    
    setTimeout(() => {
      const botMessage: Message = {
        id: Date.now().toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
        suggestions
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // Find appropriate response
    const lowerText = text.toLowerCase();
    let response = "I understand you're asking about architectural services. Let me connect you with more specific information. Could you tell me more about your project type or specific needs?";
    let suggestions: string[] = [];

    // Check for keyword matches
    for (const [key, value] of Object.entries(quickResponses)) {
      if (lowerText.includes(key) || key.includes(lowerText)) {
        response = value;
        suggestions = [
          "Schedule a consultation",
          "View portfolio",
          "Learn about pricing",
          "Contact our team"
        ];
        break;
      }
    }

    // Specific keyword responses
    if (lowerText.includes('residential') || lowerText.includes('house') || lowerText.includes('home')) {
      response = "We specialize in residential architecture, from custom homes to multi-family developments. Our residential services include space planning, sustainable design, and 3D visualization to help you see your dream home before construction begins.";
      suggestions = ["Residential portfolio", "Home design process", "Sustainable features", "Schedule consultation"];
    } else if (lowerText.includes('commercial') || lowerText.includes('office') || lowerText.includes('business')) {
      response = "Our commercial architecture expertise spans office buildings, retail spaces, restaurants, and mixed-use developments. We focus on creating functional, attractive spaces that enhance productivity and customer experience.";
      suggestions = ["Commercial projects", "Office design", "Retail spaces", "Get a quote"];
    } else if (lowerText.includes('cost') || lowerText.includes('price') || lowerText.includes('budget')) {
      response = "Project costs vary based on size, complexity, and location. We offer transparent pricing and detailed proposals. Residential projects typically start at $150-300 per square foot for design services, while commercial projects are quoted based on scope.";
      suggestions = ["Request quote", "Project consultation", "Payment options", "Service packages"];
    }

    simulateTyping(response, suggestions);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      handleSendMessage(inputText.trim());
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="fixed bottom-6 right-6 bg-amber-400 hover:bg-amber-500 text-zinc-900 p-4 rounded-full shadow-lg z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          scale: isOpen ? 0.9 : 1,
          rotate: isOpen ? 45 : 0
        }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-30 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">HBA Assistant</h3>
                  <p className="text-sm opacity-90">AI-Powered Architecture Helper</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-amber-400 text-zinc-900'
                        : 'bg-zinc-100 text-zinc-900'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    {message.suggestions && (
                      <div className="mt-3 space-y-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="block w-full text-left p-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs transition-colors duration-200"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-zinc-200">
              <div className="flex space-x-2 mb-3">
                <button
                  onClick={() => handleSuggestionClick("Tell me about residential design")}
                  className="flex items-center space-x-1 bg-zinc-100 hover:bg-zinc-200 px-3 py-2 rounded-full text-xs transition-colors"
                >
                  <Home className="w-3 h-3" />
                  <span>Residential</span>
                </button>
                <button
                  onClick={() => handleSuggestionClick("Commercial architecture services")}
                  className="flex items-center space-x-1 bg-zinc-100 hover:bg-zinc-200 px-3 py-2 rounded-full text-xs transition-colors"
                >
                  <Building className="w-3 h-3" />
                  <span>Commercial</span>
                </button>
                <button
                  onClick={() => handleSuggestionClick("3D visualization demo")}
                  className="flex items-center space-x-1 bg-zinc-100 hover:bg-zinc-200 px-3 py-2 rounded-full text-xs transition-colors"
                >
                  <Lightbulb className="w-3 h-3" />
                  <span>3D Viz</span>
                </button>
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask about our services..."
                  className="flex-1 px-3 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="bg-amber-400 hover:bg-amber-500 disabled:bg-zinc-300 text-zinc-900 p-2 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;