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
            image: "/Programs/Huj.jpg",
            link: "/programs/hajj-umrah",
        },
        {
            title: t("programs.kingdom.title"),
            description: t("programs.kingdom.desc"),
            image: "/Programs/Kingdom.jpg",
            link: "/programs/kingdom",
        },
        {
            title: t("programs.usa.title"),
            description: t("programs.usa.desc"),
            image: "/Programs/USA.png",
            link: "/programs/usa",
        },
    ];

    return (
        <section
            id="programs"
            className="relative py-[50px] overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/AboutBg.png')",
            }}
        >
            {/* Background overlay */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "radial-gradient(67.33% 315.56% at 53.49% 34.25%, rgba(51, 143, 166, 0.8) 0%, rgba(7, 76, 94, 0.8) 100%)",
                    filter: "blur(8px)",
                }}
                aria-hidden="true"
            />

            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-[50px] relative z-10">
                {/* 4-column layout: text + 3 cards */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 items-start">
                    {/* Text Column */}
                    <div className={`flex flex-col justify-center ${dir === "rtl" ? "text-right" : "text-left"}`}>
                        <span className="font-space text-[14px] sm:text-[16px] md:text-[18px] font-medium uppercase text-white tracking-wide block mb-2">
                            {t("programs.sectionTitle")}
                        </span>
                        <h2 className="font-space text-[24px] sm:text-[32px] md:text-[40px] font-bold text-white leading-[1.3em] md:leading-[1.4em] mb-4">
                            {t("programs.title").split(t("programs.title").split(" ").pop()!)[0]}
                            <span className="relative inline-block">
                                {t("programs.title").split(" ").pop()}
                                <img
                                    src="https://tretrip.com/wp-content/uploads/2025/08/GOLDAbout.svg"
                                    alt=""
                                    className="absolute -bottom-1 left-0 w-full"
                                    aria-hidden="true"
                                />
                            </span>
                        </h2>
                        <p className="font-poppins text-white/90 leading-relaxed text-[16px]">
                            {t("hero.subtitle") || "We tailor trips to your mood, relaxing, thrilling, or cultural. All logistics managed with care, so you only focus on the joy of travel."}
                        </p>
                    </div>

                    {/* Program Cards */}
                    {programsData.map((program, idx) => (
                        <Link
                            key={idx}
                            href={program.link}
                            className="group relative block overflow-hidden rounded-lg animate-slide-in-up"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[468px] w-full">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover brightness-[0.70] group-hover:brightness-[0.46] transition-all duration-500"
                                />
                                {/* Overlay Content */}
                                <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                                    <h3 className="text-white text-[20px] md:text-[24px] font-semibold [text-shadow:0px_0px_10px_rgba(0,0,0,0.48)] mb-2">
                                        {program.title}
                                    </h3>
                                    <p className="text-white/90 text-[14px] mb-4 [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)] leading-relaxed">
                                        {program.description}
                                    </p>
                                    <div>
                                        <span className="inline-flex items-center bg-white text-brand-primary text-[14px] font-bold uppercase px-5 py-2.5 rounded-[5px] group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors duration-300">
                                            {t("programs.explore")}
                                            <MoveRight size={16} className={`${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
