"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export default function TalentPage() {

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            let scrollAmount = 0;
            const scrollSpeed = 1;

            const scroll = () => {
                scrollAmount += scrollSpeed;
                // Reset scroll position when it reaches the bottom of the content
                if (scrollAmount >= scrollContainer.scrollHeight / 2) {
                    scrollAmount = 0;
                }
                scrollContainer.scrollTop = scrollAmount;
            };

            const intervalId = setInterval(scroll, 20);

            return () => clearInterval(intervalId);
        }
    }, []);


    const roles = [
        ['Product Manager', 'UI/UX Designer', 'UI Designer', 'Flutter Developer', 'Product Support Engineer'],
        ['Product Designer', 'Frontend Developer', 'Full Stack Developer', 'Software Developer'],
        ['Backend Developer']
    ];

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full mb-10 lg:mb-0">
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                        Get the right talent on board with Techype.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Find top professionals with experience working in diverse job roles.
                        Techype is your friend in need, helping you hire skilled teams and engineers
                        who excel in different areas of technology.
                    </p>
                    <Button variant="default" size="lg" className="w-fit bg-gray-900 text-white rounded-2xl px-5 py-6 text-base hover:bg-gray-700">
                        More Insight
                    </Button>
                </div>
                <div className="relative w-full overflow-hidden">
                    <div
                        ref={scrollContainerRef}
                        className="flex flex-col space-y-4 animate-scroll"
                        style={{ height: '300px', overflowY: 'hidden' }}
                    >
                        {/* Duplicate the staggered content for seamless looping */}
                        {[...roles, ...roles].map((row, rowIndex) => (
                            <div key={rowIndex} className="flex space-x-4 justify-center">
                                {row.map((role: string, index: number) => (
                                    <div
                                        key={index}
                                        className={cn(
                                            'rounded-2xl px-4 py-2 text-sm bg-gray-200 text-gray-800',
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
    )
}