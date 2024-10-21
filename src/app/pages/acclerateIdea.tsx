"use client";

import { Button } from "@/components/ui/button";

export default function AcclerateIdea() {
    return (
        <section className="relative bg-accelerate bg-no-repeat bg-cover my-8 h-[50vh] text-white font-lato">
            <div className="absolute top-[3rem] left-4 md:top-[5rem] md:left-[6rem] lg:left-[8rem] flex flex-col gap-4 w-[90%] md:w-auto">
                <p className="text-[28px] md:text-[35px] lg:text-[40px] font-normal">
                    Accelerate your idea.
                </p>
                <p className="text-gray-200 text-sm md:text-base lg:text-lg">
                    You are just one click away from your dream app. Turn your idea into a new tech revolution.
                </p>
                <Button className="w-fit bg-blue-800 text-white rounded-2xl px-5 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 text-xs md:text-sm lg:text-base hover:bg-blue-600">
                    Get Started
                </Button>
            </div>
        </section>
    );
}
