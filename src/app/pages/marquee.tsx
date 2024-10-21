"use client";

import Image from "next/image";

export default function Marquee() {
    return (
        <section>
            <div className="mt-[4rem] text-center text-sm md:text-lg text-gray-600">
                Trusted by leading brands and startups
            </div>
            <div className="relative flex overflow-x-hidden">
                <div className="py-8 md:py-12 animate-marquee whitespace-nowrap flex gap-[2rem] md:gap-[4rem] lg:gap-[5rem]">
                    <Image
                        src="/brand1.svg"
                        title="brand 1"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 1"
                    />
                    <Image
                        src="/brand2.svg"
                        title="brand 2"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 2"
                    />
                    <Image
                        src="/brand3.svg"
                        title="brand 3"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 3"
                    />
                    <Image
                        src="/brand4.svg"
                        title="brand 4"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 4"
                    />
                    <Image
                        src="/brand5.svg"
                        title="brand 5"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 5"
                    />
                </div>

                <div className="absolute top-0 py-8 md:py-12 animate-marquee2 whitespace-nowrap mx-[2rem] md:mx-[4rem] lg:mx-[5rem] flex gap-[2rem] md:gap-[4rem] lg:gap-[5rem]">
                    <Image
                        src="/brand1.svg"
                        title="brand 1"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 1"
                    />
                    <Image
                        src="/brand2.svg"
                        title="brand 2"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 2"
                    />
                    <Image
                        src="/brand3.svg"
                        title="brand 3"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 3"
                    />
                    <Image
                        src="/brand4.svg"
                        title="brand 4"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 4"
                    />
                    <Image
                        src="/brand5.svg"
                        title="brand 5"
                        width={100}
                        height={100}
                        className="cursor-pointer md:w-[120px] md:h-[120px] lg:w-[150px] lg:h-[150px]"
                        alt="brand 5"
                    />
                </div>
            </div>
        </section>
    );
}
