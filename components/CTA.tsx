"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CTA() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-brand-primary text-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("cta.title")}</h2>
                <p className="text-xl mb-10 font-light opacity-90">
                    {t("cta.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/contact"
                        className="bg-white text-brand-primary px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-gray-50 inline-block shadow-xl"
                    >
                        {t("cta.contact")}
                    </Link>
                    <Link
                        href="https://wa.me/12029046675"
                        className="bg-brand-secondary text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-brand-secondary/90 flex items-center justify-center shadow-xl"
                    >
                        <span>{t("cta.whatsapp")}</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
