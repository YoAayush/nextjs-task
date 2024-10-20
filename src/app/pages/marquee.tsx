"use client";

import Image from "next/image";

export default function Marquee() {
    return (
        <section>
            <div className="mt-[4rem] text-center text-lg text-gray-600">Trusted by leading brands and startups</div>
            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap flex gap-[5rem]">
                    <Image src="/brand1.svg" title="brand 1" width="150" height="150" className="cursor-pointer" alt="brand 1" />
                    <Image src="/brand2.svg" title="brand 2" width="150" height="150" className="cursor-pointer" alt="brand 2" />
                    <Image src="/brand3.svg" title="brand 3" width="150" height="150" className="cursor-pointer" alt="brand 3" />
                    <Image src="/brand4.svg" title="brand 4" width="150" height="150" className="cursor-pointer" alt="brand 4" />
                    <Image src="/brand5.svg" title="brand 5" width="150" height="150" className="cursor-pointer" alt="brand 5" />
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap mx-[5rem] flex gap-[5rem]">
                    <Image src="/brand1.svg" title="brand 1" width="150" height="150" className="cursor-pointer" alt="brand 1" />
                    <Image src="/brand2.svg" title="brand 2" width="150" height="150" className="cursor-pointer" alt="brand 2" />
                    <Image src="/brand3.svg" title="brand 3" width="150" height="150" className="cursor-pointer" alt="brand 3" />
                    <Image src="/brand4.svg" title="brand 4" width="150" height="150" className="cursor-pointer" alt="brand 4" />
                    <Image src="/brand5.svg" title="brand 5" width="150" height="150" className="cursor-pointer" alt="brand 5" />
                </div>
            </div>
        </section>
    )
}