"use client";

import { cn } from "@/lib/utils";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function TalentPage() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const roles = [
        ['Product Manager', 'UI/UX Designer', 'UI Designer', 'Flutter Developer', 'Product Support Engineer'],
        ['Product Designer', 'Frontend Developer', 'Full Stack Developer', 'Software Developer'],
        ['Backend Developer']
    ];

    return (
        <section className="bg-white mt-20 px-4 font-lato sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full mb-8 lg:mb-0 lg:w-1/2">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Get the right talent on board with Techype.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                        Find top professionals with experience working in diverse job roles.
                        Techype is your friend in need, helping you hire skilled teams and engineers
                        who excel in different areas of technology.
                    </p>
                    <Button
                        variant="default"
                        size="lg"
                        className="w-full sm:w-fit bg-gray-900 text-white rounded-2xl px-5 py-4 text-base hover:bg-gray-700"
                    >
                        More Insight
                    </Button>
                </div>
                <div className="relative w-full lg:w-1/2 overflow-hidden mt-6 lg:mt-0">
                    <div
                        ref={scrollContainerRef}
                        className="animate-scroll flex flex-col space-y-4"
                        style={{ height: '300px' }}
                    >
                        {/* Duplicate the staggered content for seamless looping */}
                        {[...roles, ...roles].map((row, rowIndex) => (
                            <div key={rowIndex} className="flex space-y-2 space-x-3 justify-center">
                                {row.map((role: string, index: number) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            'rounded-2xl px-4 py-2 flex items-center text-xs sm:text-[10px] bg-gray-200 text-gray-800',
                                            'transition-all duration-300 hover:bg-gray-300'
                                        )}
                                    >
                                        {role}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
