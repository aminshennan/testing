"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import { AuroraButton } from "./ui/aurora-button";
import { MessageSquare, Send, Facebook } from "lucide-react";
import { GridBackground } from "./ui/grid-background";

// LinkedIn conversation demonstrating lead qualification
const linkedInMessages = [
  {
    role: "user",
    content: "Hi, we're looking for an AI solution to handle our LinkedIn and Instagram inquiries. Can you help?",
    time: "2:30 PM",
    platform: "LinkedIn",
    annotation: null
  },
  {
    role: "ai",
    content: "Absolutely! Our AI agents can handle inquiries across all social media platforms including LinkedIn and Instagram. We can help qualify leads, answer FAQs, and schedule demos with your sales team when needed.",
    time: "2:30 PM",
    annotation: "Initial engagement with prospect"
  },
  {
    role: "user",
    content: "That sounds promising. We currently get about 50-100 inquiries daily. How quickly could we implement this?",
    time: "2:31 PM",
    platform: "LinkedIn",
    annotation: null
  },
  {
    role: "ai",
    content: "For your volume of 50-100 inquiries, we could have you fully operational within 2 weeks. The first week would be training the AI on your brand voice and common scenarios, and the second week would be integration and testing.",
    time: "2:31 PM",
    annotation: "Qualifying lead by understanding volume needs"
  },
  {
    role: "user",
    content: "How does the handoff to our sales team work once a lead is qualified?",
    time: "2:32 PM",
    platform: "LinkedIn",
    annotation: null
  },
  {
    role: "ai",
    content: "Great question! Once our AI identifies a qualified lead based on your criteria, it can either schedule a call through your booking system or notify your sales team through Slack/Teams/CRM with the full conversation history. Your team can then seamlessly continue the conversation.",
    time: "2:33 PM",
    annotation: "Explaining human handover process"
  }
];

// Instagram conversation showcasing product inquiries
const instagramMessages: Message[] = [
  {
    role: "user" as const,
    content: "I need a creative caption for my next post",
    time: "1:45 PM",
    platform: "instagram",
    annotation: null
  },
  {
    role: "ai",
    content: "Hi! Yes, we do offer special startup packages. Could you tell me a bit more about your company size and what kind of customer inquiries you're handling?",
    time: "3:15 PM",
    annotation: "Qualifying with targeted questions"
  },
  {
    role: "user",
    content: "We're a team of 12 people, SaaS product with about 50 customer service messages daily across our social accounts.",
    time: "3:17 PM",
    platform: "Instagram",
    annotation: null
  },
  {
    role: "ai",
    content: "Perfect! For a team your size with that volume, our Startup Growth package would be ideal. It includes all platform integrations, custom AI training, and up to 1500 conversations monthly at $399/month. Would you like me to set up a quick demo call with one of our specialists?",
    time: "3:18 PM",
    annotation: "Lead scored as qualified, offering appropriate package"
  },
  {
    role: "user",
    content: "That sounds good. Could we schedule something for next Tuesday?",
    time: "3:20 PM",
    platform: "Instagram",
    annotation: null
  },
  {
    role: "ai",
    content: "Absolutely! I've checked our calendar and we have slots available at 10am, 1pm or 3pm EST next Tuesday. Which time works best for you? Also, could you share your email so we can send you the calendar invitation?",
    time: "3:21 PM",
    annotation: "Converting to appointment and collecting contact info"
  }
];

// WhatsApp conversation showcasing technical support
const whatsappMessages: Message[] = [
  {
    role: "user" as const,
    content: "Hi, I'm looking for content ideas for my startup",
    time: "3:30 PM",
    platform: "whatsapp",
    annotation: null
  },
  {
    role: "ai",
    content: "I'm sorry to hear you're experiencing issues. I'd be happy to help! Could you tell me which CRM system you're trying to integrate with?",
    time: "11:06 AM",
    annotation: "Gathering specific technical details"
  },
  {
    role: "user",
    content: "We're using HubSpot. The connection was working last week but now we're getting API errors.",
    time: "11:08 AM",
    platform: "WhatsApp",
    annotation: null
  },
  {
    role: "ai",
    content: "Thank you for that information. Let me check if there are any known issues with our HubSpot integration. In the meantime, could you tell me if you've made any changes to your HubSpot settings recently?",
    time: "11:09 AM",
    annotation: "Investigating root cause"
  },
  {
    role: "user",
    content: "Yes, we updated our HubSpot instance yesterday. That might be related.",
    time: "11:11 AM",
    platform: "WhatsApp",
    annotation: null
  },
  {
    role: "ai",
    content: "I see. Based on your description, this is likely related to updated API authentication requirements from the recent HubSpot update. I'll have our technical support specialist contact you within the next hour with specific instructions to resolve this. In the meantime, would you like me to send you our updated integration guide?",
    time: "11:12 AM",
    annotation: "Providing solution and escalating to specialist"
  }
];

// Facebook conversation
const facebookMessages: Message[] = [
  {
    role: "user" as const,
    content: "Hey, can you help me write a post about AI?",
    time: "10:22 AM",
    platform: "facebook",
    annotation: null
  },
  {
    role: "ai",
    content: "Hello! Yes, our AI can definitely handle both Facebook page comments and Messenger inquiries. It can respond to customer questions, collect leads, and even help with appointment scheduling. Would you like to know more about any specific functionality?",
    time: "4:20 PM",
    annotation: "Addressing specific platform needs"
  },
  {
    role: "user",
    content: "That sounds great. How smart is it with understanding different languages? We have a global audience.",
    time: "4:22 PM",
    platform: "Facebook",
    annotation: null
  },
  {
    role: "ai",
    content: "Our AI supports over 25 languages with near-native fluency, including English, Spanish, French, German, Arabic, Chinese, and Japanese. It automatically detects the language of the incoming message and responds in the same language. This helps you engage with your global audience without any additional setup.",
    time: "4:23 PM",
    annotation: "Highlighting multilingual capabilities"
  },
  {
    role: "user",
    content: "Perfect! And how much does it cost for a business with around 20K followers?",
    time: "4:25 PM",
    platform: "Facebook",
    annotation: null
  },
  {
    role: "ai",
    content: "For a business with 20K followers, our Business Growth plan at $599/month would be most suitable. It includes unlimited AI responses, integration with your CRM, and priority support. We also offer a 14-day free trial so you can see the results before committing. Would you like to start with the trial?",
    time: "4:26 PM",
    annotation: "Offering appropriate package with trial option"
  }
];

// Telegram conversation
const telegramMessages: Message[] = [
  {
    role: "user" as const,
    content: "Can you suggest some productivity tips?",
    time: "5:15 PM",
    platform: "telegram",
    annotation: null
  },
  {
    role: "ai",
    content: "Good morning! Yes, our AI can fully integrate with Telegram business channels to manage support inquiries. It can categorize issues, provide immediate responses to common questions, and escalate complex matters to your support team. How many support requests do you typically receive daily?",
    time: "9:16 AM",
    annotation: "Confirming capability and gathering volume information"
  },
  {
    role: "user",
    content: "We get around 75-100 support messages daily. Can your AI be trained on our product documentation?",
    time: "9:18 AM",
    platform: "Telegram",
    annotation: null
  },
  {
    role: "ai",
    content: "Absolutely! We can train the AI on your product documentation, knowledge base, FAQs, and even past support conversations. This customization ensures the AI provides accurate, product-specific responses. With your volume of 75-100 messages, we typically see a 65-70% full automation rate.",
    time: "9:19 AM",
    annotation: "Explaining customization and expected results"
  },
  {
    role: "user",
    content: "What kind of analytics would we get to measure effectiveness?",
    time: "9:21 AM",
    platform: "Telegram",
    annotation: null
  },
  {
    role: "ai",
    content: "Our analytics dashboard provides comprehensive insights: resolution rates, response times, customer satisfaction scores, common issues, and conversation trends. You'll also see which queries were handled fully by AI vs. those requiring human intervention. All data can be exported or integrated with your existing analytics tools.",
    time: "9:22 AM",
    annotation: "Detailing analytics capabilities"
  }
];

// TypeScript interfaces for messages
interface Message {
  role: "user" | "ai";
  content: string;
  time: string;
  annotation: string | null;
  platform?: string;
}

// Define platform types
type PlatformType = "facebook" | "instagram" | "whatsapp" | "telegram";

// Type for platform configuration
interface PlatformConfig {
  name: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  headerBg: string;
  lightBg: string;
}

// TypeScript type for platform configurations
interface PlatformConfigs {
  facebook: PlatformConfig;
  instagram: PlatformConfig;
  whatsapp: PlatformConfig;
  telegram: PlatformConfig;
}

function TypewriterEffect({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 15); // typing speed
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [text]);
  
  return (
    <>
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-1.5 h-4 bg-current animate-pulse" />
      )}
    </>
  );
}

export function InteractiveDemoSection() {
  const [activeTab, setActiveTab] = useState<PlatformType>("whatsapp");
  const [showAnnotations, setShowAnnotations] = useState(true);
  const [visibleMessages, setVisibleMessages] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState<Message | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const getActiveMessages = useCallback((): Message[] => {
    switch(activeTab) {
      case "facebook": return facebookMessages;
      case "instagram": return instagramMessages;
      case "whatsapp": return whatsappMessages;
      case "telegram": return telegramMessages;
      default: return whatsappMessages;
    }
  }, [activeTab]);
  
  // Auto-scroll within chat container when new messages appear
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [visibleMessages, typingMessage]);
  
  // Progressively reveal messages
  useEffect(() => {
    if (visibleMessages < getActiveMessages().length) {
      const nextMessage = getActiveMessages()[visibleMessages];
      
      // Show typing indicator for AI messages
      if (nextMessage.role === 'ai') {
        setIsTyping(true);
        setTypingMessage(nextMessage);
        
        // Simulate typing time based on message length
        const typingTime = Math.min(1500, nextMessage.content.length * 15);
        
        setTimeout(() => {
          setIsTyping(false);
          setTypingMessage(null);
          setVisibleMessages(prev => prev + 1);
        }, typingTime);
      } else {
        // User messages appear immediately
        setTimeout(() => {
          setVisibleMessages(prev => prev + 1);
        }, 1000);
      }
    }
  }, [visibleMessages, activeTab, getActiveMessages]);
  
  // Reset messages when changing platforms
  useEffect(() => {
    setVisibleMessages(1);
  }, [activeTab]);
  
  // Define platform configurations with correct typing
  const platformConfig: PlatformConfigs = {
    facebook: {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      color: "bg-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      headerBg: "bg-blue-600",
      lightBg: "bg-blue-50"
    },
    instagram: {
      name: "Instagram",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-fuchsia-500" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
      color: "from-fuchsia-600 to-purple-400",
      bgColor: "bg-fuchsia-500/20",
      borderColor: "border-fuchsia-500/30",
      textColor: "text-fuchsia-400",
      headerBg: "bg-gradient-to-r from-fuchsia-700/80 to-purple-600/80",
      lightBg: "bg-fuchsia-500/10"
    },
    whatsapp: {
      name: "WhatsApp",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-500" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>,
      color: "from-green-600 to-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30",
      textColor: "text-green-400",
      headerBg: "bg-gradient-to-r from-green-700/80 to-green-500/80",
      lightBg: "bg-green-500/10"
    },
    telegram: {
      name: "Telegram",
      icon: <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-400" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.5 6.394-.709 8.478-.092.92-.279 1.22-.456 1.25-.38.057-1-.094-1.383-.276-.826-.396-1.403-.662-2.202-1.05-.914-.446-1.484-.75-1.447-1.123.03-.299.325-.402 1.377-.996 1.85-1.043 2.882-1.705 3.066-1.87 1.966-1.773 1.333-1.924.94-2.002-.436-.086-1.022.3-1.644.665-2.681 1.571-4.47 2.625-4.47 2.625-.4.24-.903.452-1.607.49-.548.028-1.208.03-1.843-.084-.87-.154-1.1-.466-1.1-.466s3.214-1.312 6.658-2.85c1.423-.636 3.12-1.43 5.04-2.296a.933.933 0 0 1 .724-.082z"></path></svg>,
      color: "from-blue-500 to-blue-300",
      bgColor: "bg-blue-400/20",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-400",
      headerBg: "bg-gradient-to-r from-blue-600/80 to-blue-400/80",
      lightBg: "bg-blue-400/10"
    }
  };
  
  // Platform-specific UI configuration
  const activePlatform = platformConfig[activeTab] || platformConfig.whatsapp;
  
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black" id="demo">
      <GridBackground opacity={0.35} gridSize={30} strokeColor="rgb(255 255 255 / 0.1)" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-6 shadow-inner shadow-indigo-500/10">
            INTERACTIVE DEMO
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500">
            See Our AI in Action
          </h2>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
            Experience how our AI agents handle real B2B conversations across different messaging platforms
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Chat Demo with Side Platform Selector */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Side Platform Selector */}
              <div className="w-full md:w-24 flex md:flex-col justify-center gap-6 order-2 md:order-1 md:mt-12 md:sticky md:self-start md:top-24 p-2 md:p-3 md:bg-black/20 md:backdrop-blur-sm md:rounded-xl md:border md:border-white/10">
                {Object.entries(platformConfig).map(([key, platform]) => (
                  <motion.button 
                    key={key}
                    onClick={() => setActiveTab(key as PlatformType)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 transform ${
                      activeTab === key 
                        ? `${platform.lightBg} border-2 ${platform.borderColor} shadow-lg scale-110` 
                        : 'bg-white/8 border border-white/10 hover:bg-white/15 hover:shadow-md'
                    }`}
                  >
                    <div className={`${activeTab === key ? 'scale-110' : ''} transition-transform duration-300`}>
                      {platform.icon}
                    </div>
                    <span className={`text-xs mt-2 font-medium ${activeTab === key ? platform.textColor : 'text-neutral-400'}`}>
                      {platform.name}
                    </span>
                    {activeTab === key && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -right-2 md:-right-3 top-1/2 transform -translate-y-1/2 md:top-1/2 rotate-0 md:rotate-90"
                      >
                        <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 6L6 0L12 6L6 12L0 6Z" fill="currentColor" className={platform.textColor} />
                        </svg>
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
              
              {/* Device frame */}
              <div className="relative w-full md:flex-1 order-1 md:order-2">
                <div className="rounded-2xl border-[14px] border-neutral-800 shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-black overflow-hidden">
                  {/* Device header */}
                  <div className={cn(
                    "px-4 py-3.5 flex items-center justify-between backdrop-blur-md",
                    activePlatform.headerBg
                  )}>
                    <div className="flex items-center">
                      {activePlatform.icon}
                      <span className="ml-2 font-semibold text-white">{activePlatform.name} Business</span>
                    </div>
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/70"></div>
                    </div>
                  </div>
                  
                  {/* Chat container */}
                  <div 
                    ref={chatContainerRef}
                    className="h-[500px] overflow-y-auto p-5 bg-neutral-900/95 space-y-5 custom-scrollbar"
                    style={{
                      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zM1 5h2v2H1V5zm4 0h2v2H5V5zm4 0h2v2H9V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zM1 9h2v2H1V9zm4 0h2v2H5V9zm4 0h2v2H9V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zM1 13h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM1 17h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z\' fill=\'%23333\' fill-opacity=\'0.2\'/%3E%3C/svg%3E")',
                      backgroundSize: '30px 30px',
                    }}
                  >
                    <AnimatePresence>
                      {getActiveMessages().slice(0, visibleMessages).map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className={cn(
                            "flex flex-col max-w-[80%]",
                            message.role === "user" ? "items-end ml-auto" : "items-start mr-auto"
                          )}
                        >
                          <div
                            className={cn(
                              "rounded-2xl p-4",
                              message.role === "user"
                                ? `${activePlatform.bgColor} ${activePlatform.borderColor} border-2 shadow-lg` 
                                : "bg-neutral-800/90 border border-neutral-700/70 shadow-lg backdrop-blur-sm"
                            )}
                          >
                            <p className={cn(
                              "text-sm leading-relaxed",
                              message.role === "user" ? "text-white" : "text-neutral-200"
                            )}>
                              {message.content}
                            </p>
                            <div className="text-right mt-1">
                              <span className="text-[10px] text-neutral-500">{message.time}</span>
                            </div>
                          </div>
                          
                          {/* Annotations for AI responses */}
                          {showAnnotations && message.annotation && message.role === "ai" && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                              className="ml-4 mt-2 px-4 py-2 bg-blue-950/60 border border-blue-800/50 backdrop-blur-sm rounded-lg text-xs text-blue-300 max-w-[90%] shadow-lg"
                            >
                              <div className="flex items-center">
                                <MessageSquare className="h-3 w-3 mr-1.5 text-blue-400" />
                                <span className="font-semibold mr-1">AI Strategy:</span> 
                              </div>
                              <p className="mt-1 ml-4.5 leading-relaxed">{message.annotation}</p>
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                      
                      {/* Typing indicator */}
                      {isTyping && typingMessage && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-start max-w-[80%]"
                        >
                          <div className="rounded-2xl p-4 bg-neutral-800/80 border border-neutral-700/60 shadow-lg backdrop-blur-sm">
                            <div className="flex space-x-1.5 items-center h-5 mb-1">
                              <div className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce"></div>
                              <div className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 rounded-full bg-neutral-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] text-neutral-500">{typingMessage.time}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      <div ref={messagesEndRef} />
                    </AnimatePresence>
                  </div>
                  
                  {/* Chat input */}
                  <div className="p-3.5 border-t border-neutral-800 bg-neutral-900 flex items-center gap-3">
                    <button className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-800 border border-neutral-700 hover:bg-neutral-750 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </button>
                    <input 
                      type="text" 
                      placeholder="Type a message..."
                      className="flex-1 bg-neutral-800 border border-neutral-700 rounded-full px-4 py-2.5 text-sm text-neutral-300 focus:outline-none"
                      disabled
                    />
                    <button className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-300",
                      `bg-gradient-to-r ${activePlatform.color} shadow-lg`
                    )}>
                      <Send className="h-4 w-4 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Control panel */}
            <div className="mt-6 flex justify-between items-center p-5 bg-neutral-900/70 backdrop-blur-md rounded-xl border border-neutral-800/80 shadow-xl">
              <div className="flex items-center">
                <button
                  onClick={() => setShowAnnotations(!showAnnotations)}
                  className="text-xs text-neutral-300 flex items-center hover:text-white transition-colors"
                >
                  <span className={`w-4 h-4 rounded-sm border mr-2 flex items-center justify-center ${showAnnotations ? "bg-blue-500/40 border-blue-500/60" : "border-neutral-500"}`}>
                    {showAnnotations && <span className="block w-2 h-2 bg-blue-400 rounded-sm"></span>}
                  </span>
                  Show AI strategy notes
                </button>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setVisibleMessages(1);
                  }}
                  className="text-xs px-4 py-2 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700/50 rounded-lg text-neutral-300 transition-colors hover:shadow-md"
                >
                  Restart Demo
                </button>
                <button
                  onClick={() => {
                    setVisibleMessages(Math.min(visibleMessages + 1, getActiveMessages().length));
                  }}
                  className="text-xs px-4 py-2 bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-500/60 rounded-lg text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
                  disabled={visibleMessages >= getActiveMessages().length}
                >
                  Next Message
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-neutral-200 mb-10 leading-relaxed">
              Our AI connects seamlessly with all major messaging platforms, providing a unified solution for all your customer inquiries. The conversation above demonstrates how our AI intelligently handles real-world scenarios.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
            <AuroraButton
              className="text-lg px-10 py-4 font-medium"
              onClick={() => {
                // Button action
              }}
            >
              Book Your Custom Demo
            </AuroraButton>
            <button
              className="px-10 py-4 rounded-full border-2 border-white/20 text-white hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/30 hover:shadow-lg"
              onClick={() => {
                // Button action
              }}
            >
              See Our Implementation Process
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 