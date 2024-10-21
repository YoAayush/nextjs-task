"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export default function Articles() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const data: { img: string; head: string; title: string; icon: string; writer: string }[] = [
        {
            img: "/article1.svg",
            head: "TREND",
            title: "Strategies for Building Successful Online Stores",
            icon: "/Logo.svg",
            writer: "By Techype Team",
        },
        {
            img: "/article2.svg",
            head: "TREND",
            title: "Strategies for Building Successful Online Stores",
            icon: "/Logo.svg",
            writer: "By Techype Team",
        },
        {
            img: "/article3.svg",
            head: "TREND",
            title: "Strategies for Building Successful Online Stores",
            icon: "/Logo.svg",
            writer: "By Techype Team",
        },
        {
            img: "/article4.svg",
            head: "TREND",
            title: "Strategies for Building Successful Online Stores",
            icon: "/Logo.svg",
            writer: "By Techype Team",
        },
    ];

    return (
        <section className="px-6 md:px-14 lg:px-28 mt-12 md:mt-24 font-lato">
            <span className="text-gray-900 text-2xl md:text-[35px] font-semibold">
                Browse Our Article <br className="hidden md:block" /> & Resources.
            </span>
            <Carousel plugins={[plugin.current]} className="w-full h-full mt-8">
                <CarouselContent className="-ml-0 flex gap-4 pb-4 md:gap-6 lg:gap-10">
                    {data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="bg-white w-fit flex flex-col rounded-xl shadow-lg overflow-hidden">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={600}
                                    height={400}
                                    className="rounded-t-xl object-cover w-auto h-[12rem] md:h-[15rem] lg:h-[18rem]"
                                />
                                <div className="px-4 py-2 flex flex-col gap-3 mt-3">
                                    <p className="text-blue-800 text-sm md:text-base">{item.head}</p>
                                    <p className="text-gray-900 text-sm md:text-lg font-semibold">{item.title}</p>
                                    <div className="flex gap-4 items-center mt-2">
                                        <Image
                                            src={item.icon}
                                            alt="logo"
                                            width={30}
                                            height={30}
                                            className="rounded-xl"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">{item.writer}</p>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
