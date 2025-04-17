"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GridBackground } from "./ui/grid-background";

const faqs = [
  {
    question: "How long does it take to implement Mowazfk for our business?",
    answer: "Implementation typically takes 2-3 weeks from start to finish. The first week focuses on integrating with your social media platforms and CRM systems. The second week involves training the AI on your brand voice and specific business processes. We handle the technical setup, making the process seamless for your team."
  },
  {
    question: "How does your AI handle data security and privacy?",
    answer: "Data security is our top priority. We're fully GDPR compliant and SOC2 certified with end-to-end encryption for all conversations. We use secure OAuth authentication for platform access and never store sensitive customer data beyond what's necessary for the service. All data is processed in compliance with regional privacy regulations."
  },
  {
    question: "Do you offer customized solutions for different industries?",
    answer: "Yes, we customize our AI for specific industry needs. Whether you're in SaaS, financial services, e-commerce, or professional services, we train our AI on your industry terminology, common customer inquiries, and specific qualification criteria to ensure relevant, accurate responses."
  },
  {
    question: "What pricing models do you offer?",
    answer: "We offer scalable pricing based on conversation volume and features needed. Our Startup package starts at $399/month for up to 1500 conversations. Our Business package at $799/month supports up to 5000 conversations with advanced analytics. Enterprise plans are available for high-volume needs with custom pricing. All plans include 24/7 support and regular AI updates."
  },
  {
    question: "How does the handoff from AI to human agents work?",
    answer: "Our AI seamlessly transitions conversations to your team when needed. The system identifies qualified leads based on your criteria and can either automatically schedule meetings through your booking system or notify your team via Slack, Teams, or your CRM. All conversation history and context are preserved, allowing your team to continue naturally."
  },
  {
    question: "Can Mowazfk integrate with our existing tech stack?",
    answer: "Absolutely. We integrate with all major CRMs (Salesforce, HubSpot, Microsoft Dynamics), communication tools (Slack, Teams), help desk systems (Zendesk, Freshdesk), and calendar tools (Google Calendar, Outlook). Our open API also allows for custom integrations with your specific business tools."
  }
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className="relative py-24 overflow-hidden" id="faq">
      <GridBackground opacity={0.3} strokeColor="rgb(255 255 255 / 0.1)" gridSize={30} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Get answers to common questions about our AI solution
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 text-left transition-all hover:border-white/20"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-neutral-400 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {activeIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-5 py-4 bg-white/5 border-x border-b border-white/10 rounded-b-xl"
                >
                  <p className="text-neutral-300">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-neutral-400 mb-6">
            Have more questions? We&apos;re here to help.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold"
          >
            Contact Our Team
          </a>
        </motion.div>
      </div>
    </section>
  );
} 