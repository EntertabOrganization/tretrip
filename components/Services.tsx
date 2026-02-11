"use client";

import Link from "next/link";
import { MoveRight, HeartPulse, Briefcase, Truck, Ship, CalendarDays, Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
    const { t, dir } = useLanguage();

    const services = [
        {
            title: t("services.items.travel.title"),
            description: t("services.items.travel.desc"),
            icon: <Globe2 className="w-8 h-8 text-brand-primary" />,
            link: "/services/travel",
        },
        {
            title: t("services.items.medical.title"),
            description: t("services.items.medical.desc"),
            icon: <HeartPulse className="w-8 h-8 text-brand-primary" />,
            link: "/services/medical",
        },
        {
            title: t("services.items.business.title"),
            description: t("services.items.business.desc"),
            icon: <Briefcase className="w-8 h-8 text-brand-primary" />,
            link: "/services/business",
        },
        {
            title: t("services.items.transport.title"),
            description: t("services.items.transport.desc"),
            icon: <Truck className="w-8 h-8 text-brand-primary" />,
            link: "/services/transportation",
        },
        {
            title: t("services.items.shipping.title"),
            description: t("services.items.shipping.desc"),
            icon: <Ship className="w-8 h-8 text-brand-primary" />,
            link: "/services/shipping",
        },
        {
            title: t("services.items.events.title"),
            description: t("services.items.events.desc"),
            icon: <CalendarDays className="w-8 h-8 text-brand-primary" />,
            link: "/services/events",
        },
    ];

    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4 italic">
                    {t("services.title")}
                </h2>
                <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="mb-6 bg-brand-primary/10 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-brand-primary mb-4">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                            <Link
                                href={service.link}
                                className="flex items-center text-brand-primary font-medium hover:text-brand-secondary group"
                            >
                                <span>{t("services.explore")}</span>
                                <MoveRight className={`ml-2 group-hover:${dir === 'rtl' ? '-translate-x-2' : 'translate-x-2'} transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
