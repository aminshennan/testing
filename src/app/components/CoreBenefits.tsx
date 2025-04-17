"use client"

import { BentoGrid } from "./ui/bento-grid"
import {
    MessageSquare,
    Clock,
    LayoutDashboard,
    Scale,
    Plug,
} from "lucide-react"
import { GridBackground } from "./ui/grid-background"

const benefitsData = [
    {
        title: "Human-Like Engagement",
        meta: "Always On",
        description: "Natural conversations that feel authentic and build trust with your customers",
        icon: <MessageSquare className="w-4 h-4 text-blue-500" />,
        status: "Live",
        tags: ["AI", "Conversation", "Trust"],
        colSpan: 2,
        hasPersistentHover: true,
    },
    {
        title: "24/7 Coverage",
        meta: "Zero Missed Leads",
        description: "Round-the-clock availability ensures no customer inquiry goes unanswered",
        icon: <Clock className="w-4 h-4 text-emerald-500" />,
        status: "Active",
        tags: ["Availability", "Support"],
    },
    {
        title: "Unified Dashboard",
        meta: "Single View",
        description: "Centralized control and monitoring of all customer interactions and metrics",
        icon: <LayoutDashboard className="w-4 h-4 text-purple-500" />,
        tags: ["Analytics", "Management"],
        colSpan: 2,
    },
    {
        title: "Scalable & Secure",
        meta: "Enterprise Ready",
        description: "Robust infrastructure that grows with your business while maintaining security",
        icon: <Scale className="w-4 h-4 text-sky-500" />,
        status: "Secure",
        tags: ["Security", "Growth"],
    },
    {
        title: "Effortless Integrations",
        meta: "Plug & Play",
        description: "Seamless connection with your existing tools and platforms",
        icon: <Plug className="w-4 h-4 text-orange-500" />,
        status: "Compatible",
        tags: ["Integration", "API"],
    },
]

export function CoreBenefits() {
    return (
        <section className="relative py-24 overflow-hidden bg-black">
            <GridBackground opacity={0.3} strokeColor="rgb(255 255 255 / 0.1)" gridSize={30} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
            
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Why Choose Mowazfk?
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Transform your customer engagement with AI-powered solutions
                    </p>
                </div>

                <BentoGrid items={benefitsData} />
            </div>
        </section>
    )
} 