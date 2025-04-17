"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "👋 Hi there! I'm the Mowazfk AI assistant. How can I help you today?", time: "Just now" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Auto-response to simulate AI interaction
  useEffect(() => {
    if (messages.length > 1 && messages[messages.length - 1].sender === "user") {
      setIsTyping(true);
      
      const timer = setTimeout(() => {
        let response;
        const userMessage = messages[messages.length - 1].text.toLowerCase();
        
        if (userMessage.includes("pricing") || userMessage.includes("cost") || userMessage.includes("price")) {
          response = "We offer flexible pricing plans starting at $399/month for our Startup package. Would you like me to provide more details about our pricing tiers?";
        } else if (userMessage.includes("demo") || userMessage.includes("trial")) {
          response = "I'd be happy to set up a custom demo for you! This way, you can see exactly how our AI works with your specific business needs. When would be a good time for you?";
        } else if (userMessage.includes("integration") || userMessage.includes("connect")) {
          response = "We integrate with all major social platforms and CRM systems including Salesforce, HubSpot, and Zendesk. The setup process typically takes less than 15 minutes per platform.";
        } else {
          response = "Thanks for your message! To provide the most helpful information, could you tell me a bit more about your business and what social media platforms you're currently using?";
        }

        setMessages(prev => [...prev, { sender: "ai", text: response, time: "Just now" }]);
        setIsTyping(false);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    setMessages(prev => [...prev, { sender: "user", text: inputValue, time: "Just now" }]);
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed z-50 bottom-24 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
      >
        <MessageCircle className="text-white" size={24} />
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed z-50 bottom-24 right-6 sm:bottom-24 sm:right-8 w-[350px] sm:w-[380px] h-[500px] bg-black/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative mr-3">
                  <Sparkles className="text-white" size={20} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Mowazfk AI Assistant</h3>
                  <p className="text-white/70 text-xs">Online | Typically replies instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.sender === "user"
                        ? "bg-blue-500/20 border border-blue-500/30"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <p className="text-white text-sm">{message.text}</p>
                    <p className="text-xs text-white/50 mt-1">{message.time}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === ""}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:brightness-110 transition-all rounded-r-lg px-4 py-2 text-white disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-center text-white/30 text-xs mt-3">
                Try asking about pricing, integrations, or demo options
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 