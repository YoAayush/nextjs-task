"use client";

import React from 'react'
import { FileText, Users, ArrowUp } from 'lucide-react'

interface ProcessStep {
    icon: React.ReactNode
    title: string
    description: string
}

const processSteps: ProcessStep[] = [
    {
        icon: <FileText className="w-12 h-12 text-primary" />,
        title: "Share requirements",
        description: "How do you wish your product to look like? Share your requirements and trust us to develop a product that goes above and beyond your expectations."
    },
    {
        icon: <Users className="w-12 h-12 text-primary" />,
        title: "Discussing Details",
        description: "As a leading AI software development company, we carefully analyze all your requirements and share an estimate of product timeline and commercial details. Once you approve the collaboration, we ensure to assign the perfect team to develop a perfect product."
    },
    {
        icon: <ArrowUp className="w-12 h-12 text-primary" />,
        title: "Start Building",
        description: "Time to prove to you why we are considered the best AI software development company in the industry, as we bring your ideas to life."
    }
]

export default function ProcessSection() {
    return (
        <section className="mt-28 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Our Process!</h2>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-700 mb-12">The Journey of Your Ideas</h3>

                <div className="grid md:grid-cols-3 gap-8 px-24">
                    {processSteps.map((step, index) => (
                        <div key={index} className={`flex flex-col border-gray-700 border-l-[2px] ${index === 1 ? 'border-dotted' : 'border-dashed'} pl-5`}>
                            <div className="bg-gray-800 w-fit text-white rounded-full p-4 mb-4">
                                {step.icon}
                            </div>
                            <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                            <p className="text-gray-600">{step.description}</p>
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 w-px h-1/2 bg-gray-300" style={{ transform: 'translateX(50%)' }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}