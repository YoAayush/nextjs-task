"use client";

import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useRef } from "react";
import Image from "next/image";

export default function RecentWorks() {

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    const content: any = [
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
    ]

    return (
        <section className="px-28 mt-24 font-lato">
            <p className="text-gray-900 text-[35px] font-semibold">Our Recent <br /> Work Portfolio</p>
            <Carousel
                plugins={[plugin.current]}
                className="w-full bg-gray-900 text-white rounded-2xl mt-4"
                // onMouseEnter={plugin.current.stop}
                // onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {
                        content.map((item: any, index: number) => (
                            <CarouselItem key={index} className="flex flex-row items-center justify-center gap-8 py-8">
                                <div className="flex flex-col gap-3">
                                    <span className="flex gap-2">
                                        <Image src={item.icon} alt="portfolio" width={30} height={30} />
                                        <p className="text-[20px] font-semibold">{item.title}</p>
                                    </span>
                                    <div className="flex gap-4">
                                        {item.keys.map((key: string, index: number) => (
                                            <p key={index} className="text-gray-900 text-lg bg-white px-4 py-1 rounded-2xl">{key}</p>
                                        ))}
                                    </div>
                                    <p className="text-lg">{item.description}</p>
                                </div>
                                <Image src={item.image} alt="portfolio" width={500} height={500} className="w-[35rem]" />
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
            </Carousel>
        </section>
    )
}