"use client";

import Link from 'next/link';
import { FaFacebookF, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-footer bg-no-repeat bg-cover mt-12 py-8 px-6 md:px-14 lg:px-28 text-white font-lato">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Techype</h2>
                        <p className="text-sm">
                            Techype was built with all types of businesses & entrepreneurs in mind. Contact us with your requirements using this form for more.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Company</h3>
                        <ol className="space-y-2 ml-4 list-disc">
                            {['Portfolio', 'About Us', 'Contact us', 'Career', 'Blogs', 'Terms & Condition', 'Privacy Policy'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-gray-300 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Expertise</h3>
                        <ol className="space-y-2 ml-4 list-disc">
                            {['Generative-AI-development', 'MVP-development', 'Mobile App Development', 'SaaS Development', 'Custom Software Development', 'UI/UX design', 'Hybrid Teams'].map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact us</h3>
                        <p className="mb-2">+919289034933</p>
                        <p className="mb-4">business@techype.in</p>
                        <h4 className="font-semibold mb-2">India Office</h4>
                        <p className="mb-4">Plot no. 100C, Sector 4, Vaishali Ghaziabad, Uttar Pradesh 201012</p>
                        <h4 className="font-semibold mb-2">USA Office</h4>
                        <p>440 N Barranca Ave #7914, Covina, CA 91723, USA</p>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">&copy; Techype Technology Ltd 2024-present. All Rights Reserved.</p>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-gray-300 transition-colors">
                            <FaFacebookF size={20} />
                        </Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">
                            <FaLinkedin size={20} />
                        </Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">
                            <FaTwitter size={20} />
                        </Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">
                            <FaInstagram size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
