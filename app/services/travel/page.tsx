"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { useLanguage } from "@/context/LanguageContext";

export default function TravelPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section
                    className="relative w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/Services/Travel.png')", height: "70vh" }}
                >
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {t("services.items.travel.title")}
                        </h1>
                        <p className="text-xl opacity-90">
                            {t("services.items.travel.desc")}
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">
                                    Explore the World with Us
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Experience curated travel packages tailored to your preferences. From relaxing beach getaways to thrilling adventure expeditions, we handle every detail of your journey.
                                </p>
                                <p className="text-gray-600 mb-4">
                                    Our team of expert travel consultants works closely with you to ensure your trip is nothing short of exceptional, with carefully selected accommodations, transportation, and experiences.
                                </p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-center gap-3">
                                        <span className="text-brand-primary font-bold">✓</span> Customized itineraries
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-brand-primary font-bold">✓</span> 24/7 support during travel
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-brand-primary font-bold">✓</span> Best rates guaranteed
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="text-brand-primary font-bold">✓</span> Visa assistance
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                                <p className="text-gray-400">Travel Service Image</p>
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
