"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
    const { t } = useLanguage();
    const testimonials = t("testimonials.items");

    return (
        <section id="testimonials" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-4 italic">
                    {t("testimonials.title")}
                </h2>
                <div className="w-24 h-1 bg-brand-accent mx-auto mb-6"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t: any, i: number) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
                            <p className="text-gray-600 mb-8 italic leading-relaxed">&quot;{t.text}&quot;</p>
                            <div>
                                <h4 className="text-lg font-bold text-brand-primary">{t.name}</h4>
                                <span className="text-sm text-gray-500">{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
