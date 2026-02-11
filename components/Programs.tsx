"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Programs() {
    const { t, dir } = useLanguage();

    const programsData = [
        {
            title: t("programs.hajj.title"),
            description: t("programs.hajj.desc"),
            image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=600",
        },
        {
            title: t("programs.kingdom.title"),
            description: t("programs.kingdom.desc"),
            image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600",
        },
        {
            title: t("programs.usa.title"),
            description: t("programs.usa.desc"),
            image: "https://images.unsplash.com/photo-1501594923665-c74831632df6?auto=format&fit=crop&q=80&w=600",
        },
    ];

    return (
        <section id="programs" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("programs.title")}</h2>
                <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programsData.map((program, idx) => (
                        <div
                            key={idx}
                            className="group relative h-[450px] overflow-hidden rounded-2xl"
                        >
                            <Image
                                src={program.image}
                                alt={program.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                                <p className="text-gray-300 mb-6 font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                    {program.description}
                                </p>
                                <Link
                                    href="#"
                                    className="text-brand-primary font-semibold flex items-center hover:text-white transition-colors"
                                >
                                    <span>{t("programs.explore")}</span>
                                    <MoveRight size={18} className={`ml-2 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
