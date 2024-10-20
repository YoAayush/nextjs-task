"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <section className="relative flex w-full h-full bg-white">
            <div className="w-[40rem] h-full"></div>
            <div className="w-full object-cover">
                <Image src="/teamwork.jpg" alt="team work" width="500" height="500" className="w-full h-[30rem]" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute top-16 pl-28 flex flex-col gap-8">
                <h1 className="text-[50px] font-semibold">Hype Your Ideas <br />With <span className="text-blue-900">Techype</span></h1>
                <p className="w-[40rem]">As the most trusted AI software developer, we create unique AI solutions, innovative mobile apps, and help you hire top global engineers, solving all your tech problems and bringing your ideas to life.</p>
                <Button className="w-fit bg-gray-900 text-white rounded-2xl px-5 py-6 text-base hover:bg-gray-700">Schedule Call</Button>
            </div>
        </section>
    )
}