"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";

export default function Clients() {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    const data: { logo: string; desc: string; profile: string; name: string; company: string; }[] = [
        {
            logo: "/TestimonialLogo.svg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            profile: "/TestimonialLogo2.svg",
            name: "Anil Sharma",
            company: "Dolphin Solutions"
        },
        {
            logo: "/TestimonialLogo.svg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            profile: "/TestimonialLogo2.svg",
            name: "Anil Sharma",
            company: "Dolphin Solutions"
        },
        {
            logo: "/TestimonialLogo.svg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            profile: "/TestimonialLogo2.svg",
            name: "Anil Sharma",
            company: "Dolphin Solutions"
        },
        {
            logo: "/TestimonialLogo.svg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            profile: "/TestimonialLogo2.svg",
            name: "Anil Sharma",
            company: "Dolphin Solutions"
        },
        {
            logo: "/TestimonialLogo.svg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            profile: "/TestimonialLogo2.svg",
            name: "Anil Sharma",
            company: "Dolphin Solutions"
        },
        {
            logo: "/TestimonialLogo.svg",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, nisi eget lacinia.",
            profile: "/TestimonialLogo2.svg",
            name: "Anil Sharma",
            company: "Dolphin Solutions"
        }
    ]

    return (
        <section className="px-6 md:px-14 lg:px-28 mt-12 md:mt-24 font-lato">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8">
                <span className="text-gray-900 text-2xl md:text-[35px] font-semibold">
                    Prioritizing client <br className="hidden md:block" /> satisfaction always.
                </span>
                <span className="text-gray-600 text-sm md:text-base lg:text-[15px] md:w-[35rem]">
                    We believe in your dreams and your visions as much as we believe in our own. Our honesty is reflected in the work that we do and the products that we deliver.
                </span>
            </div>
            <Carousel plugins={[plugin.current]} className="w-full mt-8">
                <CarouselContent className="-ml-0 flex gap-4 md:gap-6 lg:gap-10">
                    {data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="bg-blue-50 py-4 rounded-xl basis-full md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="flex flex-col gap-4 px-4">
                                <Image src={item.logo} alt="logo" width={50} height={50} />
                                <p className="text-sm md:text-base">{item.desc}</p>
                                <div className="flex gap-3 items-center">
                                    <Image src={item.profile} alt="profile" width={50} height={50} />
                                    <p className="text-blue-950 font-semibold">
                                        {item.name}<br />
                                        <span className="text-black font-medium">{item.company}</span>
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
}
