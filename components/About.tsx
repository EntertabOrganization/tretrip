"use client";

import { useLanguage } from "@/context/LanguageContext";

function CounterNumber({ value, label }: { value: string; label: string }) {
    return (
        <div className="text-center">
            <span className="font-poppins text-[36px] md:text-[55px] font-semibold text-brand-teal leading-[1.4em] block">
                {value}
            </span>
            <span className="font-poppins text-[16px] md:text-[22px] font-medium text-brand-teal leading-[1.6em]">
                {label}
            </span>
        </div>
    );
}

export default function About() {
    const { t } = useLanguage();

    const features = [
        {
            title: t("about.item1") || "Industry Expertise",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#007F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ),
        },
        {
            title: t("about.item2") || "Personalized Care",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#007F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            ),
        },
        {
            title: t("about.item3") || "Instant Response",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#007F8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M13 8l-4 6h6l-4 6" />
                </svg>
            ),
        },
    ];

    const stats = [
        { value: "18+", label: "Cities served Locally" },
        { value: "36+", label: "Cities served globally" },
        { value: "100+", label: "Client Satisfaction Rate" },
        { value: "500+", label: "Successful Trips Managed" },
    ];

    return (
        <section id="about-us" className="pt-[100px] pb-[50px] bg-white">
            <div className="max-w-[90rem] mx-auto px-6 md:px-[50px]">
                {/* Section Header */}
                <div className="text-center mb-6 animate-fade-in-up">
                    <span className="font-space text-[18px] font-medium uppercase text-brand-primary tracking-wide block mb-2">
                        About Us
                    </span>
                    <h2 className="font-space text-[28px] md:text-[40px] font-bold text-brand-dark leading-[1.4em]">
                        {t("about.title").split("TreTrip")[0]}
                        <span className="relative inline-block">
                            TreTrip
                            <img
                                src="https://tretrip.com/wp-content/uploads/2025/08/GOLDAbout-1.svg"
                                alt=""
                                className="absolute -bottom-1 left-0 w-full"
                                aria-hidden="true"
                            />
                        </span>
                    </h2>
                </div>

                {/* Description */}
                <div className="text-center max-w-[55%] mx-auto mb-14">
                    <p className="font-poppins text-brand-secondary leading-relaxed">
                        {t("about.desc")}
                    </p>
                </div>

                {/* Feature Icon Boxes — 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center p-[50px] rounded-[20px] border border-transparent hover:bg-[#00646F45] hover:scale-[1.1] transition-all duration-300 cursor-default"
                        >
                            <div className="mb-[15px]">{feature.icon}</div>
                            <p className="font-poppins text-[18px] md:text-[23px] font-medium italic text-brand-dark leading-[1.6em]">
                                {feature.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Counter Box */}
                <div className="bg-brand-light rounded-[20px] p-8 md:p-[50px] mb-[100px] animate-zoom-in relative overflow-hidden" style={{ animationDelay: "200ms" }}>
                    {/* Background decorative logo */}
                    <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
                        <img
                            src="/Logo.png"
                            alt=""
                            className="w-[200px] h-auto"
                            aria-hidden="true"
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                        {stats.map((stat, idx) => (
                            <CounterNumber key={idx} value={stat.value} label={stat.label} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
