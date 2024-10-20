"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {

    const components: { title: string; img: string }[] = [
        { title: "Generative AI Solutions", img: "/sparkle.svg" },
        { title: "SaaS Development", img: "/saas.svg" },
        { title: "End-to-End Software Development", img: "/code.svg" },
        { title: "Hybrid Teams/Engineers", img: "/people.svg" },
        { title: "MVP Development", img: "/cubes.svg" },
        { title: "Mobile Application Development", img: "/software.svg" },
        { title: "UI/UX Development", img: "vector.svg" },
    ];

    return (
        <NavigationMenu className="sticky top-0 bg-white border-b-gray-500 border-b-[1px]">
            <NavigationMenuList className="w-[100vw] flex justify-between px-28 py-6">
                <NavigationMenuItem className="flex justify-center items-center gap-1 text-lg">
                    <Image src="/Logo.svg" alt="logo" width="40" height="40" />
                    <span>Techype</span>
                </NavigationMenuItem>
                <div className="flex justify-center items-center gap-6 text-lg">
                    <NavigationMenuItem className="relative group">
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <div className="absolute left-0 top-full hidden transition-all duration-500 ease-in-out bg-white rounded-lg shadow-lg group-hover:block">
                            <ul className="z-40 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                {components.map((component, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-4 items-center cursor-pointer rounded-xl p-2 hover:bg-blue-200"
                                    >
                                        <Image src={component.img} alt="logo" width="30" height="30" />
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
                    <Button className="bg-gray-900 text-white rounded-xl text-base hover:bg-gray-700">Contact Us</Button>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
