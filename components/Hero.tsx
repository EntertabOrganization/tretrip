"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative h-[105vh] w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover translate-y-10"
            >
                <source src="/LandingVideo.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
                <Image
                    src="/HeroPic.png"
                    alt="Hero background texture"
                    fill
                    className="object-cover opacity-100 animate-zoom-out translate-y-45 translate-x-[-30px]"
                    priority
                />
            </div>
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white translate-y-[-80px]">
                <h2
                    className="mb-5 max-w-5xl text-[60px] font-bold capitalize leading-[1.3em] animate-zoom-in [font-family:'Poppins',Sans-serif] [text-shadow:0px_0px_10px_rgba(0,0,0,0.3)] [color:var(--e-global-color-blocksy_palette_8,#ffffff)]"
                    style={{ animationDelay: '400ms' }}
                >
                    {t("hero.title")} <br />
                    {t("hero.titleAccent")}
                </h2>
                <Link
                    href="#services"
                    className="bg-brand-primary hover:bg-[#E1CA72] text-white hover:text-brand-primary px-11 py-3 rounded-[5px] transition-all shadow-2xl hover:scale-105 active:scale-95 animate-bounce-up [font-family:'Poppins',Sans-serif] text-[14px] font-semibold uppercase leading-[1.5em]"
                    style={{ animationDelay: '700ms' }}
                >
                    {t("hero.cta")}
                </Link>
            </div>
        </section>
    );
}
