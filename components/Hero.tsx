"use client";

import Link from "next/link";
import Image from "next/image";
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
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                <Image
                    src="/HeroPic.png"
                    alt="Hero background texture"
                    fill
                    className="object-cover opacity-100 animate-zoom-out"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-20 video-overlay flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 max-w-5xl tracking-tight leading-[1.1] animate-zoom-in" style={{ animationDelay: '400ms' }}>
                    {t("hero.title")} <br />
                    {t("hero.titleAccent")}
                </h1>
                <Link
                    href="#services"
                    className="bg-brand-primary hover:bg-[#E1CA72] text-white hover:text-brand-primary px-12 py-5 rounded-[15px] text-xl font-bold transition-all shadow-2xl hover:scale-105 active:scale-95 animate-bounce-up"
                    style={{ animationDelay: '700ms' }}
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
