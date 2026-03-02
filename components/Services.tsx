"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
    const { t, dir } = useLanguage();

    const services = [
        {
            title: t("services.items.travel.title"),
            image: "/Services/Travel.png",
            link: "/services/travel",
        },
        {
            title: t("services.items.medical.title"),
            image: "/Services/Medical.png",
            link: "/services/medical",
        },
        {
            title: t("services.items.business.title"),
            image: "/Services/Business.png",
            link: "/services/business",
        },
        {
            title: t("services.items.transport.title"),
            image: "/Services/Transportation.png",
            link: "/services/transportation",
        },
        {
            title: t("services.items.shipping.title"),
            image: "/Services/Shipping.png",
            link: "/services/shipping",
        },
        {
            title: t("services.items.events.title"),
            image: "/Services/Event.png",
            link: "/services/events",
        },
    ];

    return (
        <section id="start" className="pt-[60px] md:pt-[100px] pb-[40px] md:pb-[50px] relative">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-[50px]">
                {/* Section Header */}
                <div className="text-center mb-4 md:mb-6 animate-zoom-in">
                    <span className="font-space text-[14px] sm:text-[16px] md:text-[18px] font-medium uppercase text-brand-primary tracking-wide block mb-2">
                        {t("services.sectionTitle")}
                    </span>
                    <h2 className="font-space text-[24px] sm:text-[32px] md:text-[40px] font-bold text-brand-dark leading-[1.3em] md:leading-[1.4em]">
                        <span className="relative inline-block">
                            Professional
                            <img
                                src="https://tretrip.com/wp-content/uploads/2025/08/GOLD.svg"
                                alt=""
                                className="absolute -bottom-1 left-0 w-full"
                                aria-hidden="true"
                            />
                        </span>{" "}
                        {t("services.title")}
                    </h2>
                </div>

                {/* Description */}
                <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in" style={{ animationDelay: "400ms" }}>
                    <p className="font-poppins text-brand-secondary leading-relaxed">
                        {t("hero.subtitle") || "We tailor trips to your mood, relaxing, thrilling, or cultural. All logistics managed with care, so you only focus on the joy of travel."}
                    </p>
                </div>

                {/* Service Cards Grid — 2 columns × 3 rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 overflow-x-hidden">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            href={service.link}
                            className="group relative block overflow-visible animate-slide-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="relative h-[200px] sm:h-[240px] md:h-[260px] lg:h-[300px] w-full">
                                {/* Base Image */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover rounded-[10px] brightness-[0.85] group-hover:brightness-[0.75] transition-all duration-500"
                                />
                                {/* Overlay Content */}
                                <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                                    <h3 className="text-white text-[20px] md:text-[24px] font-semibold [text-shadow:0px_0px_10px_rgba(0,0,0,0.48)] mb-1">
                                        {service.title}
                                    </h3>
                                    <div className="mt-[15px]">
                                        <span className="inline-flex items-center bg-white text-brand-primary text-[14px] font-bold uppercase px-5 py-2.5 rounded-[5px] group-hover:bg-brand-accent group-hover:text-brand-primary transition-colors duration-300">
                                            {t("services.explore")}
                                            <MoveRight size={16} className={`${dir === "rtl" ? "mr-2 rotate-180" : "ml-2"}`} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Contact Us Button */}
                <div className="text-center mt-[40px]">
                    <Link
                        href="/contact"
                        className="inline-block bg-brand-primary text-white font-semibold px-[50px] py-3 rounded-[5px] hover:bg-brand-accent hover:text-brand-primary transition-colors duration-300 text-[14px] uppercase"
                    >
                        {t("cta.contact")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
