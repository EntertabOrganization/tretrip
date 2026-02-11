"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Users, Globe2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                            <Image
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800"
                                alt="TreTrip Experience"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-0"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-0"></div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6">
                            {t("about.title")}
                        </h2>
                        <p className="text-xl text-brand-secondary mb-8 leading-relaxed font-light">
                            {t("about.desc")}
                        </p>
                        <div className="space-y-4 mb-10">
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div className="bg-brand-primary p-1.5 rounded-full text-white"><Sparkles size={16} /></div>
                                <span className="font-medium text-brand-secondary">{t("about.item1")}</span>
                            </div>
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div className="bg-brand-primary p-1.5 rounded-full text-white"><Users size={16} /></div>
                                <span className="font-medium text-brand-secondary">{t("about.item2")}</span>
                            </div>
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                <div className="bg-brand-primary p-1.5 rounded-full text-white"><Globe2 size={16} /></div>
                                <span className="font-medium text-brand-secondary">{t("about.item3")}</span>
                            </div>
                        </div>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center bg-brand-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors shadow-lg"
                        >
                            {t("about.cta")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
