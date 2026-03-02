"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Partners() {
    const { t, dir } = useLanguage();

    const partners = [
        {
            name: "Emirates",
            logo: "/Partners/Emirates.png",
        },
        {
            name: "Qatar National Tourism",
            logo: "/Partners/Qatar.png",
        },
        {
            name: "Delta",
            logo: "/Partners/Delta.png",
        },
        {
            name: "Hilton",
            logo: "/Partners/Hilton.png",
        },
        {
            name: "Marriott",
            logo: "/Partners/Marriott.png",
        },
    ];

    return (
        <section className="py-[40px] md:py-[80px]">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-[50px]">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <span className="font-space text-[14px] sm:text-[16px] md:text-[18px] font-medium uppercase text-brand-primary tracking-wide block mb-2">
                        {t("partners.sectionTitle")}
                    </span>
                    <h2 className="font-space text-[24px] sm:text-[32px] md:text-[40px] font-bold text-brand-dark leading-[1.3em] md:leading-[1.4em]">
                        {t("partners.title")}<br />
                        <span className="relative inline-block">
                            {t("partners.titleAccent")}
                            <img
                                src="https://tretrip.com/wp-content/uploads/2025/08/GOLD.svg"
                                alt=""
                                className="absolute -bottom-1 left-0 w-full"
                                aria-hidden="true"
                            />
                        </span>
                    </h2>
                </div>

                {/* Partners Marquee */}
                <div className="relative w-full overflow-hidden bg-white">
                    <div className="flex gap-8 md:gap-12 animate-marquee">
                        {[...partners, ...partners, ...partners].map((partner, idx) => (
                            <div
                                key={idx}
                                className="flex items-center justify-center flex-shrink-0"
                                style={{ minWidth: "180px" }}
                            >
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={150}
                                    height={80}
                                    className="max-h-16 md:max-h-20 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
