"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/LandingVideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 video-overlay flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl tracking-tight leading-tight">
                    {t("hero.title")} <br className="hidden md:block" />
                    <span className="text-brand-primary">{t("hero.titleAccent")}</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light opacity-90 leading-relaxed">
                    {t("hero.subtitle")}
                </p>
                <Link
                    href="/contact"
                    className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-xl hover:scale-105 active:scale-95"
                >
                    {t("hero.cta")}
                </Link>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
