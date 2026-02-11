"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CTA from "@/components/CTA";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <section className="bg-brand-primary py-24 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("nav.about")}</h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">{t("footer.desc")}</p>
                    </div>
                </section>
                <About />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
