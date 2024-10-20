"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Questions() {

    const [active, setActive] = useState<number | null>(null);

    const Questions: { title: string; desc: string; }[] = [
        {
            title: "What services are provided by techype ?",
            desc: "Techype is a leading AI software development company that provides many services including mobile application development, AI software development, and MVP Development along with helping companies hire top talents for their long-term and short-term projects."
        },
        {
            title: "Is there any hidden fee in your pricing model ?",
            desc: "We at Techype believe in building trust through a completely transparent process. There will never be any hidden fees or costs that you need to worry about. From financial discussions to product development, everything will be done with complete clarity."
        },
        {
            title: "Does Techype offer any discounts to their clients in case of long-term projects and partnerships ?",
            desc: "It has always been our aim to develop and maintain long-term partnerships with our clients and we appreciate and value it whenever we get such clients to work with. So, yes without a doubt, we offer our long-term clients exclusive offers that improve our bond even more."
        },
        {
            title: "Can I track the progress of my project ?",
            desc: "Yes! Techype is here to make sure that you get progress updates about your project whenever you want. You can keep a tab on the whole process of your product development with the help of our productivity tools, maintaining the transparency that we promised."
        },
        {
            title: "what are some industries that you provide your services to ?",
            desc: "Techype is growing each day by expanding our services to a wide range of industries. We have been excelling in the field of health tech solutions, job listing platforms, and AI web development. We are presently the best mobile app development company, successfully bringing ideas to life."
        },
        {
            title: "Is my project idea safe with Techype ?",
            desc: "Your project idea is 100% safe with us. At Techype, we prioritize the confidentiality of our clients and their ideas at all times and to do this, we sign a Non-Disclosure Agreement (NDA) with you to ensure that your project idea is in safe hands."
        }
    ]

    return (
        <section className="font-lato mt-24 px-28 bg-blue-50">
            <p className="text-gray-900 text-[30px] text-center pt-4">Frequently Asked Questions</p>
            <div className="grid grid-cols-1 gap-4 mt-8">
                {
                    Questions.map((question, index) => (
                        <div key={index} className="border-b-[1px] border-gray-300 py-2 cursor-pointer" onClick={() => { setActive(active === index ? null : index) }}>
                            <p className={`text-[20px] flex justify-between ${active === index ? 'text-blue-600' : 'text-gray-800'}`}>{question.title}
                                <span>{active === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                            </p>
                            {
                                active === index && <p className="text-gray-600 mt-2">{question.desc}</p>
                            }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}