"use client";

import Image from "next/image";

export default function Industries() {
    const data: { icon: string; title: string }[] = [
        {
            icon: "/pic1.svg",
            title: "FinTech & Finance",
        },
        {
            icon: "/pic2.svg",
            title: "E-Commerce & Fashion",
        },
        {
            icon: "/pic3.svg",
            title: "Hospitality & Travel",
        },
        {
            icon: "/pic4.svg",
            title: "E-learning & Education",
        },
        {
            icon: "/pic5.svg",
            title: "Healthcare & Fitness",
        },
        {
            icon: "/pic6.svg",
            title: "Startups B2B & B2C",
        },
        {
            icon: "/pic7.svg",
            title: "Real Estate",
        },
        {
            icon: "/pic8.svg",
            title: "On Demand Solution",
        },
    ];

    return (
        <section className="font-lato px-6 md:px-16 lg:px-28 mt-12 md:mt-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <span className="text-xl md:text-3xl lg:text-[35px] font-bold">
                    Industries We Serve
                </span>
                <p className="text-gray-500 text-sm md:text-base md:w-[28rem] lg:w-[35rem]">
                    We have a structured work process to ensure that the projects handled can be completed properly and according to your needs.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mt-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center bg-blue-100 py-6 md:py-8 px-4 rounded-xl shadow-sm"
                    >
                        <Image src={item.icon} alt={item.title} width={50} height={50} />
                        <p className="text-sm md:text-base ml-4">{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
