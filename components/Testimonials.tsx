"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Testimonials() {
    const { t, dir } = useLanguage();
    const testimonials = t("testimonials.items") as any[];
    const [active, setActive] = React.useState(0);

    const avatars = [
        "/testimonials/avatar-1.png",
        "/testimonials/avatar-2.png",
        "/testimonials/avatar-3.png",
    ];

    const next = () => setActive((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="py-[50px] bg-white min-h-[30vh]">
            <div className="max-w-[90rem] mx-auto px-6 md:px-[50px]">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column — Card Stack */}
                    <div className="w-full lg:w-1/2 relative min-h-[55vh] flex items-center justify-center">
                        {/* Decorative background */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <Image
                                src="/testimonials/decorative-bg.webp"
                                alt=""
                                width={500}
                                height={500}
                                className="object-contain opacity-40"
                                aria-hidden="true"
                            />
                        </div>

                        {/* Card */}
                        <div className="relative z-10 w-full max-w-[420px] mx-auto">
                            <div
                                className="bg-white border border-gray-200 rounded-[12px] p-5 md:p-6"
                                style={{
                                    boxShadow: "0 18px 40px rgba(10,20,40,0.12), 0 6px 18px rgba(10,20,40,0.06)",
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

                            {/* Navigation Controls */}
                            <div className="flex gap-3 mt-6 justify-end">
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

                    {/* Right Column — Text */}
                    <div className={`w-full lg:w-1/2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                        <span className="font-space text-[18px] font-medium uppercase text-brand-primary tracking-wide block mb-2">
                            Testimonials
                        </span>
                        <h2 className="font-space text-[28px] md:text-[40px] font-bold text-brand-dark leading-[1.4em] mb-6">
                            What{" "}
                            <span className="relative inline-block">
                                Clients
                                <img
                                    src="https://tretrip.com/wp-content/uploads/2025/08/GOLDAbout.svg"
                                    alt=""
                                    className="absolute -bottom-1 left-0 w-full"
                                    aria-hidden="true"
                                />
                            </span>{" "}
                            say about TreTrip
                        </h2>
                        <p className="font-poppins text-brand-secondary leading-relaxed text-[16px]" style={{ gap: "35px" }}>
                            Get away from your crazy work schedule and breathe pure oxygen. Enjoy bird whistles, serene views &amp; capture these moments.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
