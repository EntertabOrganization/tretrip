"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import WhyChooseServices from "@/components/WhyChooseServices";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";
import { useLanguage } from "@/context/LanguageContext";

export default function BusinessPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Business.png"
                    title={t("services.items.business.title")}
                    description={t("services.items.business.desc")}
                    backgroundPosition="center"
                />

                {/* Content Section */}
                <ServiceContent
                    heading="Corporate Travel Solutions"
                    description={
                        <>
                            <p>
                                From international conferences to corporate retreats, we provide seamless business travel management that keeps your team productive and energized.
                            </p>
                            <p>
                                Our business travel experts handle flight arrangements, hotel accommodations, meeting facilities, and ground transportation, allowing you to focus on what matters most—your business.
                            </p>
                        </>
                    }
                    images={[
                        "/Services/Business.png",
                        "/Services/Business.png",
                        "/Services/Business.png",
                        "/Services/Business.png",
                    ]}
                    layout="image-left"
                />

                <WhyChooseServices
                    heading="Why Choose Our Business Services"
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M34 28H30V32H26V36H30V40H34V36H38V32H34V28Z" fill="white" />
                                </svg>
                            ),
                            title: "Seamless Planning",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M28 32L30.5 34.5L37.5 27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ),
                            title: "Expert Management",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M32 24C28.13 24 25 27.13 25 31C25 35.41 32 44 32 44C32 44 39 35.41 39 31C39 27.13 35.87 24 32 24ZM32 34C30.34 34 29 32.66 29 31C29 29.34 30.34 28 32 28C33.66 28 35 29.34 35 31C35 32.66 33.66 34 32 34Z" fill="white" />
                                </svg>
                            ),
                            title: "Trusted Partnership",
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading="What Corporate Clients Say"
                    description="Leading companies trust TreTrip to manage their business travel needs. Discover how we've helped teams stay productive and energized while traveling."
                    backgroundImage="/Services/BusinessClientBg.png"
                    testimonials={[
                        {
                            text: "TreTrip has been instrumental in managing our corporate travel program. The team handles everything seamlessly, allowing our employees to focus on business objectives. Cost-effective and reliable.",
                            name: "James Wilson",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "Our annual conferences run smoothly thanks to TreTrip's meticulous planning. From flights to meeting facilities, they anticipate every need. They've become a valued extension of our team.",
                            name: "Patricia Chen",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "We tried different corporate travel providers, but TreTrip stands out. Their 24/7 support is exceptional, and our employees consistently praise the service quality. Highly recommended for any company.",
                            name: "David Thompson",
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
