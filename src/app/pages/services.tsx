"use client";

import Image from "next/image";
import { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function OurServices() {
    const [expanded, setexpanded] = useState<number | null>(null);

    const contents: { title: string; desc: string; examples: string[]; }[] = [
        {
            title: "Generative AI Solutions",
            desc: "Innovative AI Software Solutions that grow your business, fit your budget, and create a lasting impact, all at the same time.",
            examples: ['ChatGPT Integration', 'AI Chatbot', 'Generative AI', 'Predictive Analytics', 'Marketing Assistants', 'Custom AI Models']
        },
        {
            title: "MVP Development",
            desc: "Build an MVP that effortlessly attracts honest feedback from users and lays the foundation for a life-changing product for your target audience.",
            examples: ['Web Platform', 'Mobile App , Branding', 'Designing', 'Scalable Solutions', 'Risk Mitigation']
        },
        {
            title: "SaaS Development",
            desc: "We develop for you SaaS platforms that save your costs and scale your business. Platforms that smoothly address all your needs.",
            examples: ['Web Platform', 'Mobile App , Branding', 'Designing', 'API Integration', 'Data Security']
        },
        {
            title: "Mobile Application Development",
            desc: "As the best mobile app development company in India, we develop for you apps that set future trends. Join us to build mobile apps that keep your users engaged.",
            examples: ['Frontend', 'Backend', 'UI/UX', 'Branding', 'Android Development', 'iOS Development']
        },
        {
            title: "End-to-End Software Development",
            desc: "Constant and continuous support in developing software that sells. We are your partners right from concept discussion to product launch, we promise to never leave your side.",
            examples: ['Quality Assurance Testing', 'Post Launch Support', 'branding', 'Project Management', 'Designing']
        },
        {
            title: "UI/UX Design",
            desc: "We transform your ideas into beautiful UI/UX designs. Designs so beautiful that they make you look twice, bring user engagement & enhance user experience",
            examples: ['Wireframing', 'Prototyping', 'User Research', 'Branding', 'Designing', 'Cross-Platform Consistency']
        }
    ];

    return (
        <div className="relative bg-[#101828] px-4 md:px-16 lg:px-28 pt-4 pb-8 text-white font-lato">
            <Image
                src="/spotlight.svg"
                alt="team work"
                width="1080"
                height="1080"
                className="absolute top-0 -left-60 w-[30rem] h-[18rem] md:w-[40rem] md:h-[24rem] lg:w-[50rem] lg:h-[30rem]"
            />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <span className="text-2xl md:text-3xl lg:text-[35px] font-bold">
                    Discover <br className="md:hidden" /> Our Services
                </span>
                <p className="md:w-[28rem] lg:w-[35rem] text-sm md:text-base">
                    We Deliver Products that Boost Your Business. When we work, we work with a commitment to deliver products that stand out from the rest. We make sure that your impactful ideas are transformed into even more impactful products.
                </p>
            </div>
            <div className="flex flex-col justify-center mt-4">
                {
                    contents.map((content, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-500 py-2 cursor-pointer mt-8"
                            onClick={() => { setexpanded(expanded === index ? null : index) }}
                        >
                            <p className="text-xl md:text-2xl lg:text-[30px] flex justify-between items-center">
                                {content.title}
                                <span className="ml-2">
                                    {expanded === index ? <BsArrowUpRightCircle /> : <FiArrowRightCircle />}
                                </span>
                            </p>
                            {
                                expanded === index && (
                                    <div className="mt-6">
                                        <div className="flex flex-wrap gap-2 md:gap-4">
                                            {
                                                content.examples.map((example: string, index: number) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-[#1e2a43] rounded-2xl text-sm md:text-base"
                                                    >
                                                        {example}
                                                    </span>
                                                ))
                                            }
                                        </div>
                                        <p className="text-sm md:text-base lg:text-[20px] mt-4">
                                            {content.desc}
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
