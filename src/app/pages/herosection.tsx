"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col font-lato lg:flex-row w-full h-full bg-white">
            <div className="lg:w-[40rem] h-full"></div>
            <div className="w-full lg:object-cover">
                <Image
                    src="/teamwork.jpg"
                    alt="team work"
                    width={500}
                    height={500}
                    className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute top-8 md:top-16 lg:pl-28 px-4 lg:px-0 flex flex-col gap-4 md:gap-6 lg:gap-8">
                <h1 className="text-[30px] md:text-[40px] lg:text-[50px] font-semibold">
                    Hype Your Ideas <br />
                    With <span className="text-blue-900">Techype</span>
                </h1>
                <p className="w-full md:w-[30rem] lg:w-[40rem] text-sm md:text-base">
                    As the most trusted AI software developer, we create unique AI solutions, innovative mobile apps, and help you hire top global engineers, solving all your tech problems and bringing your ideas to life.
                </p>
                <Button className="w-fit bg-gray-900 text-white rounded-2xl px-4 py-3 md:px-5 md:py-4 lg:py-6 text-sm md:text-base hover:bg-gray-700">
                    Schedule Call
                </Button>
            </div>
        </section>
    )
}
