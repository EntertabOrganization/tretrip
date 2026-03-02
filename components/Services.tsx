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
            peopleImage: "/Services/TravelPeople.png",
            link: "/services/travel",
            peopleStyle: { bottom: "0", right: "-45px", width: "130%", height: "155%" },
        },
        {
            title: t("services.items.medical.title"),
            image: "/Services/Medical.jpg",
            peopleImage: "/Services/MedicalPeople.png",
            link: "/services/medical",
            peopleStyle: { bottom: "0", right: "-20%", width: "85%", height: "150%" },
        },
        {
            title: t("services.items.business.title"),
            image: "/Services/Business.jpg",
            peopleImage: "/Services/BusinessPeople.png",
            link: "/services/business",
            peopleStyle: { bottom: "0", right: "0", width: "55%", height: "90%" },
        },
        {
            title: t("services.items.transport.title"),
            image: "/Services/Transportation.png",
            peopleImage: "/Services/TransportationPeople.png",
            link: "/services/transportation",
            peopleStyle: { bottom: "0", right: "0", width: "50%", height: "90%" },
        },
        {
            title: t("services.items.shipping.title"),
            image: "/Services/Shipping.png",
            peopleImage: "/Services/ShippingPeople.png",
            link: "/services/shipping",
            peopleStyle: { bottom: "0", right: "0", width: "55%", height: "95%" },
        },
        {
            title: t("services.items.events.title"),
            image: "/Services/Event.png",
            peopleImage: "/Services/EventPeople.png",
            link: "/services/events",
            peopleStyle: { bottom: "0", right: "5%", width: "110%", height: "125%" },
        },
    ];

    return (
        <section id="start" className="pt-[100px] pb-[50px] bg-white relative">
            <div className="max-w-[90rem] mx-auto px-6 md:px-[50px]">
                {/* Section Header */}
                <div className="text-center mb-6 animate-zoom-in">
                    <span className="font-space text-[18px] font-medium uppercase text-brand-primary tracking-wide block mb-2">
                        {t("services.sectionTitle")}
                    </span>
                    <h2 className="font-space text-[28px] md:text-[40px] font-bold text-brand-dark leading-[1.4em]">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 overflow-x-hidden">
                    {services.map((service, idx) => (
                        <Link
                            key={idx}
                            href={service.link}
                            className="group relative block overflow-visible animate-slide-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="relative h-[260px] md:h-[300px] w-full">
                                {/* Base Image */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover rounded-[10px] brightness-[0.85] group-hover:brightness-[0.75] transition-all duration-500"
                                />
                                {/* People Image Overlay */}
                                <div
                                    className="absolute pointer-events-none"
                                    style={{
                                        bottom: service.peopleStyle.bottom,
                                        right: service.peopleStyle.right,
                                        width: service.peopleStyle.width,
                                        height: service.peopleStyle.height,
                                    }}
                                >
                                    <Image
                                        src={service.peopleImage}
                                        alt={`${service.title} People`}
                                        fill
                                        className="object-contain object-bottom"
                                    />
                                </div>
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
