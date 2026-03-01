"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
    const { t } = useLanguage();

    return (
        <section
            className="relative py-[80px] overflow-hidden"
            style={{
                background: "radial-gradient(67.33% 315.56% at 53.49% 34.25%, rgba(51, 143, 166, 0.9) 0%, rgba(7, 76, 94, 0.95) 100%)",
            }}
        >
            {/* Background landmarks image */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "url('/ContactBg.png')",
                    backgroundPosition: "bottom center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    opacity: 0.35,
                }}
                aria-hidden="true"
            />

            <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-[50px] text-center">
                {/* Label */}
                <span className="font-space text-[18px] font-medium uppercase text-brand-accent tracking-wide block mb-2">
                    Contact
                </span>

                {/* Heading */}
                <h2 className="font-space text-[28px] md:text-[40px] font-bold text-white leading-[1.4em] mb-4">
                    {t("cta.title").replace("Trip", "").trim()}{" "}
                    <span className="relative inline-block">
                        Trip
                        <img
                            src="https://tretrip.com/wp-content/uploads/2025/08/GoldLine.png"
                            alt=""
                            className="absolute -bottom-2 left-[-5%] w-[110%]"
                            aria-hidden="true"
                        />
                    </span>
                </h2>

                {/* Description */}
                <div className="max-w-[550px] mx-auto mb-10">
                    <p className="font-poppins text-white/90 leading-relaxed">
                        {t("cta.subtitle")}
                    </p>
                </div>

                {/* CTA Button */}
                <Link
                    href="/contact"
                    className="inline-block bg-white text-brand-primary font-semibold px-[50px] py-3 rounded-[5px] hover:bg-brand-accent hover:text-brand-primary transition-colors duration-300 text-[14px] uppercase"
                >
                    {t("cta.contact")}
                </Link>
            </div>
        </section>
    );
}
