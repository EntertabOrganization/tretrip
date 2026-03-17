"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import WhyChooseServices from "@/components/WhyChooseServices";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";
import { useLanguage } from "@/context/LanguageContext";

export default function ShippingPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Shipping.png"
                    title={t("services.items.shipping.title")}
                    description={t("services.items.shipping.desc")}
                    backgroundPosition="center"
                />

                {/* Content Section */}
                <ServiceContent
                    heading="Global Shipping Solutions"
                    description={
                        <>
                            <p>
                                Trust us with your cargo. Our comprehensive shipping logistics services cover everything from documentation to delivery, ensuring your goods arrive safely and on time.
                            </p>
                            <p>
                                With experience in international shipping and partnerships with leading logistics providers, we offer competitive rates and complete transparency throughout the shipping process.
                            </p>
                        </>
                    }
                    images={[
                        "/Services/Shipping.png",
                        "/Services/Shipping.png",
                        "/Services/Shipping.png",
                        "/Services/Shipping.png",
                    ]}
                    layout="image-left"
                />

                <WhyChooseServices
                    heading="Why Choose Our Shipping Services"
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M34 28H30V32H26V36H30V40H34V36H38V32H34V28Z" fill="white" />
                                </svg>
                            ),
                            title: "Global Reach",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M28 32L30.5 34.5L37.5 27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ),
                            title: "Safe Handling",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M32 24C28.13 24 25 27.13 25 31C25 35.41 32 44 32 44C32 44 39 35.41 39 31C39 27.13 35.87 24 32 24ZM32 34C30.34 34 29 32.66 29 31C29 29.34 30.34 28 32 28C33.66 28 35 29.34 35 31C35 32.66 33.66 34 32 34Z" fill="white" />
                                </svg>
                            ),
                            title: "Full Transparency",
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading="What Our Shipping Clients Say"
                    description="Businesses worldwide trust TreTrip for reliable, transparent, and efficient international shipping solutions. Here's what they have to say."
                    backgroundImage="/Services/ShippingClientBg.png"
                    testimonials={[
                        {
                            text: "TreTrip's shipping service is outstanding. Fast, reliable, and transparent tracking. My cargo arrived on time in perfect condition. They've become my go-to logistics partner.",
                            name: "Hassan Al-Dosari",
                            role: "Import/Export Business Owner",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "Competitive rates and excellent customer service. TreTrip handled all customs documentation smoothly. Highly professional team that I trust with valuable shipments.",
                            name: "Elena Volkov",
                            role: "E-commerce Business Manager",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "We ship multiple times per month with TreTrip. They consistently deliver on time, handle documentation perfectly, and their rates are competitive. Excellent partner!",
                            name: "Marcus Johnson",
                            role: "Logistics Director",
                            image: "/Avatar-3.png",
                        },
                    ]}
                />

                <CTA />

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
