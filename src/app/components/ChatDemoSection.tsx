"use client"

import { motion } from "framer-motion"
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
  ChatBubbleActionWrapper
} from "./ui/chat-bubble"
import { Button } from "./ui/button"
import { Copy, RefreshCcw } from "lucide-react"
import { GridBackground } from "./ui/grid-background"

const demoMessages = [
  {
    id: 1,
    message: "Hi! I'm interested in your AI solutions for customer service. Can you tell me more?",
    sender: "user",
    timestamp: "10:30 AM"
  },
  {
    id: 2,
    message: "Hello! I'd be happy to help. Mowazfk provides AI-powered customer engagement solutions that help businesses handle inquiries 24/7 with human-like conversations. Would you like to know about any specific aspect?",
    sender: "bot",
    timestamp: "10:30 AM"
  },
  {
    id: 3,
    message: "How does it handle complex customer queries?",
    sender: "user",
    timestamp: "10:31 AM"
  },
  {
    id: 4,
    message: "Our AI is trained on millions of customer interactions and can understand context, intent, and sentiment. It can handle complex queries by breaking them down, asking clarifying questions, and providing detailed, accurate responses. Plus, it seamlessly hands over to human agents when needed.",
    sender: "bot",
    timestamp: "10:31 AM"
  }
]

export function ChatDemoSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <GridBackground opacity={0.3} strokeColor="rgb(255 255 255 / 0.1)" gridSize={28} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            See Mowazfk in Action
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Experience our AI&apos;s natural conversation capabilities
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10"
        >
          <div className="space-y-4">
            {demoMessages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ChatBubble variant={message.sender === "user" ? "sent" : "received"}>
                  <ChatBubbleAvatar 
                    fallback={message.sender === "user" ? "US" : "AI"}
                    src={message.sender === "user" 
                      ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop"
                      : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"
                    }
                  />
                  <div className="flex flex-col gap-1">
                    <ChatBubbleMessage variant={message.sender === "user" ? "sent" : "received"}>
                      {message.message}
                    </ChatBubbleMessage>
                    <span className="text-xs text-neutral-400">
                      {message.timestamp}
                    </span>
                  </div>
                </ChatBubble>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center space-y-4"
          >
            <p className="text-lg text-neutral-300">
              Want to see more? Experience Mowazfk&apos;s capabilities firsthand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Book a Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 