"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
    const { t, dir } = useLanguage();
    const testimonials = t("testimonials.items") as any[];
    const [active, setActive] = React.useState(0);
    const [direction, setDirection] = React.useState<"left" | "right">("right");

    const avatars = [
        "/Avatar-1.png",
        "/Avatar-2.png",
        "/Avatar-3.png",
    ];

    const next = () => {
        setDirection("right");
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection("left");
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const animationStyle = direction === "right" 
        ? "animate-slideInDown" 
        : "animate-slideInRight";

    return (
        <>
            <style>{`
                @keyframes slideInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-90px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateY(90px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-slideInDown {
                    animation: slideInDown 0.5s ease-out;
                }

                .animate-slideInRight {
                    animation: slideInRight 0.5s ease-out;
                }
            `}</style>
        <section id="testimonials" className="py-[50px] bg-white min-h-[30vh]">
            <div className="max-w-[90rem] mx-auto px-6 md:px-[50px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column — Card Stack */}
                    <div className="w-full lg:w-1/2 relative min-h-[55vh] flex items-center justify-center">
                        {/* Card Stack */}
                        <div className="relative w-full max-w-[420px] mx-auto" style={{ height: "auto", perspective: "1000px" }}>
                            {/* Back Card 1 */}
                            <div
                                className="absolute border border-gray-200"
                                style={{
                                    width: "420px",
                                    height: "100%",
                                    transform: "rotate(10deg)",
                                    opacity: 1,
                                    left: "-0.13px",
                                    top: "0",
                                    zIndex: 8,
                                    borderRadius: "12px",
                                    boxShadow: "0px 4px 12px 0px #0000000A",
                                    backgroundColor: "#EEEEEE",
                                }}
                            />

                            {/* Back Card 2 */}
                            <div
                                className="absolute border border-gray-200"
                                style={{
                                    width: "420px",
                                    height: "100%",
                                    transform: "rotate(5deg)",
                                    opacity: 1,
                                    left: "-0.13px",
                                    top: "0",
                                    zIndex: 9,
                                    borderRadius: "12px",
                                    boxShadow: "0px 4px 12px 0px #0000000A",
                                    backgroundColor: "#FDFDFD",
                                }}
                            />

                            {/* Main Card */}
                            <div key={active} className={`relative z-10 w-full max-w-[420px] mx-auto ${animationStyle}`}>
                                <div
                                    className="bg-white border border-gray-200 rounded-[12px] p-5 md:p-6"
                                    style={{
                                        boxShadow: "0px 4px 12px 0px #0000000A",
                                    }}
                                >
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={22} fill="#FCC800" stroke="#FCC800" />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="font-poppins italic text-[18px] md:text-[22px] leading-[1.4] text-black mb-6">
                                    &ldquo;{testimonials[active]?.text}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-[60px] h-[60px] relative rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                                        <Image
                                            src={avatars[active] || "/testimonials/avatar-1.png"}
                                            alt={testimonials[active]?.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-poppins text-[24px] font-bold text-brand-teal">
                                            {testimonials[active]?.name}
                                        </h4>
                                        <span className="text-[13px] text-gray-500">
                                            {testimonials[active]?.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Text */}
                    <div className={`w-full lg:w-1/2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                        <span className="font-space text-[18px] font-medium uppercase text-brand-primary tracking-wide block mb-2">
                            {t("testimonials.sectionTitle")}
                        </span>
                        <h2 className="font-space text-[28px] md:text-[40px] font-bold text-brand-dark leading-[1.4em] mb-6">
                            {t("testimonials.title")}
                        </h2>
                        <p className="font-poppins text-brand-secondary leading-relaxed text-[16px]" style={{ gap: "35px" }}>
                            {t("testimonials.tagline")}
                        </p>

                        {/* Navigation Controls */}
                            <div className="flex gap-3 mt-6 justify-start">
                                <button
                                    onClick={prev}
                                    className="bg-brand-teal text-white px-5 py-4 rounded-[150px] hover:bg-[#e8cb75] transition-colors duration-500 shadow-md"
                                    aria-label="Previous testimonial"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={next}
                                    className="bg-brand-teal text-white px-5 py-4 rounded-[150px] hover:bg-[#e8cb75] transition-colors duration-500 shadow-md"
                                    aria-label="Next testimonial"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
