"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { useLanguage } from "@/context/LanguageContext";

export default function BusinessPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section
                    className="relative w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/Services/Business.png')", height: "70vh" }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {t("services.items.business.title")}
                        </h1>
                        <p className="text-xl opacity-90">
                            {t("services.items.business.desc")}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
                                    Corporate Travel Solutions
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    From international conferences to corporate retreats, we provide seamless business travel management that keeps your team productive and energized.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Our business travel experts handle flight arrangements, hotel accommodations, meeting facilities, and ground transportation, allowing you to focus on what matters most—your business.
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-3">
                                        <span className="text-brand-primary font-bold">✓</span> Flight & accommodation booking
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-brand-primary font-bold">✓</span> Meeting room arrangements
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-brand-primary font-bold">✓</span> Corporate retreat planning
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-brand-primary font-bold">✓</span> Expense management tools
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                                <p className="text-gray-400">Business Service Image</p>
                            </div>
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
