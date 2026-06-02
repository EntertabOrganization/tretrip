"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
    const { t, dir } = useLanguage();
    const title = t("services.title");
    const professionalPrefix = "Professional ";
    const titleStartsWithProfessional = title.startsWith(professionalPrefix);
    const titleRest = titleStartsWithProfessional ? title.slice(professionalPrefix.length) : title;

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
        <section id="start" className="relative overflow-hidden pt-[60px] md:pt-[100px] pb-[40px] md:pb-[50px]">
            <img
                src="/ServiceDashlines.png"
                alt=""
                aria-hidden="true"
                width={360}
                height={360}
                className="pointer-events-none absolute hidden md:block"
                style={{
                    top: "-44px",
                    right: "120px",
                    width: "300px",
                    height: "360px",
                    transform: "rotate(-8deg)",
                    transformOrigin: "top right",
                    position: "absolute",
                    opacity: 0.65,
                }}
            />
            <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 md:px-[50px]">
                {/* Section Header */}
                <div className="mb-10 md:mb-14 flex flex-col gap-6 md:flex-row md:items-center animate-zoom-in">
                    <div className={`md:w-1/2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                        <span className="font-space text-[12px] sm:text-[14px] font-medium uppercase text-brand-primary tracking-wide block mb-2">
                            {t("services.sectionTitle")}
                        </span>
                        <h2 className="font-space text-[26px] sm:text-[34px] md:text-[42px] font-bold text-brand-dark leading-[1.12]">
                            {titleStartsWithProfessional ? (
                                <>
                                    <span className="relative inline-block">
                                        Professional
                                        <span
                                            className="absolute -bottom-1 left-0 -z-10 h-[8px] w-full rounded-full bg-brand-accent"
                                            aria-hidden="true"
                                        />
                                    </span>{" "}
                                    {titleRest}
                                </>
                            ) : (
                                title
                            )}
                        </h2>
                    </div>

                    <div className={`md:w-1/2 animate-fade-in ${dir === "rtl" ? "text-right md:pr-10" : "text-left md:pl-10"}`} style={{ animationDelay: "400ms" }}>
                        <p className="max-w-[470px] font-poppins text-[14px] leading-[1.35] text-brand-dark">
                            {t("hero.subtitle") || "We tailor trips to your mood, relaxing, thrilling, or cultural. All logistics managed with care, so you only focus on the joy of travel."}
                        </p>
                    </div>
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
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={idx < 2}
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
