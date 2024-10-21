"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // You can use Heroicons or any icon library

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const components: { title: string; img: string }[] = [
        { title: "Generative AI Solutions", img: "/sparkle.svg" },
        { title: "SaaS Development", img: "/saas.svg" },
        { title: "End-to-End Software Development", img: "/code.svg" },
        { title: "Hybrid Teams/Engineers", img: "/people.svg" },
        { title: "MVP Development", img: "/cubes.svg" },
        { title: "Mobile Application Development", img: "/software.svg" },
        { title: "UI/UX Development", img: "vector.svg" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <NavigationMenu className="sticky top-0 bg-white border-b-gray-500 border-b-[1px] z-50">
            <NavigationMenuList className="w-[100vw] flex justify-between items-center px-6 md:px-14 lg:px-28 py-4">
                <NavigationMenuItem className="flex items-center gap-2 text-lg">
                    <Image src="/Logo.svg" alt="logo" width={40} height={40} />
                    <span>Techype</span>
                </NavigationMenuItem>

                {/* Hamburger menu for tablet and smaller screens */}
                <div className="lg:hidden flex items-center">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>

                {/* Navigation items */}
                <div
                    className={`${isMenuOpen ? "flex" : "hidden"
                        } flex-col lg:flex lg:flex-row items-center gap-6 mt-4 lg:mt-0 text-base transition-all duration-300 ease-in-out lg:transition-none absolute lg:relative bg-white lg:bg-transparent left-0 top-full lg:top-0 w-full lg:w-auto p-6 lg:p-0 z-40 shadow-lg lg:shadow-none`}
                >
                    <NavigationMenuItem className="relative group">
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <div className="absolute left-0 top-full hidden transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg group-hover:block">
                            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                                {components.map((component, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 items-center cursor-pointer rounded-xl p-2 hover:bg-blue-200"
                                    >
                                        <Image
                                            src={component.img}
                                            alt={component.title}
                                            width={30}
                                            height={30}
                                        />
                                        {component.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuItem>
                    <NavigationMenuLink>Hire engineers</NavigationMenuLink>
                    <NavigationMenuLink>Portfolio</NavigationMenuLink>
                    <NavigationMenuLink>Careers</NavigationMenuLink>
                    <NavigationMenuLink>About Us</NavigationMenuLink>
                    <NavigationMenuLink>Blogs</NavigationMenuLink>
                    <Button className="bg-gray-900 text-white rounded-xl text-base hover:bg-gray-700 mt-2 lg:mt-0 w-full lg:w-auto">
                        Contact Us
                    </Button>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
