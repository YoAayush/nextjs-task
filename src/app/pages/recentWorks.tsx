"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useRef } from "react";
import Image from "next/image";

export default function RecentWorks() {
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

    const content: { icon: string; title: string; description: string; image: string; keys: string[] }[] = [
        {
            icon: "/PortfolioLogo.svg",
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            image: "/Portfolio.svg",
            keys: ["React", "Node", "MongoDB"]
        },
        {
            icon: "/PortfolioLogo.svg",
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            image: "/Portfolio.svg",
            keys: ["React", "Node", "MongoDB"]
        },
        {
            icon: "/PortfolioLogo.svg",
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            image: "/Portfolio.svg",
            keys: ["React", "Node", "MongoDB"]
        },
        {
            icon: "/PortfolioLogo.svg",
            title: "Project Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            image: "/Portfolio.svg",
            keys: ["React", "Node", "MongoDB"]
        }
    ];

    return (
        <section className="px-6 md:px-12 lg:px-28 mt-16 md:mt-24 font-lato">
            <p className="text-gray-900 text-3xl md:text-4xl lg:text-[35px] font-semibold text-center lg:text-left">
                Our Recent <br className="hidden lg:block" /> Work Portfolio
            </p>
            <Carousel
                plugins={[plugin.current]}
                className="w-full bg-gray-900 text-white rounded-2xl mt-8"
            >
                <CarouselContent>
                    {content.map((item, index: number) => (
                        <CarouselItem
                            key={index}
                            className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 py-8"
                        >
                            <div className="flex flex-col gap-3 lg:w-1/2">
                                <span className="flex items-center gap-2">
                                    <Image src={item.icon} alt="portfolio" width={30} height={30} />
                                    <p className="text-lg md:text-xl lg:text-[20px] font-semibold">{item.title}</p>
                                </span>
                                <div className="flex flex-wrap gap-2 lg:gap-4">
                                    {item.keys.map((key: string, index: number) => (
                                        <p key={index} className="text-gray-900 text-sm md:text-base lg:text-lg bg-white px-4 py-1 rounded-2xl">
                                            {key}
                                        </p>
                                    ))}
                                </div>
                                <p className="text-sm md:text-base lg:text-lg">{item.description}</p>
                            </div>
                            <Image
                                src={item.image}
                                alt="portfolio"
                                width={500}
                                height={500}
                                className="w-[25rem] lg:w-[35rem] rounded-2xl object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
