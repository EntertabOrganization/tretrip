"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import WhyChooseServices from "@/components/WhyChooseServices";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";
import { useLanguage } from "@/context/LanguageContext";

export default function MedicalPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Medical.png"
                    title={t("services.items.medical.title")}
                    description={t("services.items.medical.desc")}
                    backgroundPosition="center"
                />

                {/* Content Section */}
                <ServiceContent
                    heading="World-Class Healthcare Abroad"
                    description={
                        <>
                            <p>
                                Access premium medical treatments at leading international hospitals while enjoying a comfortable travel experience. We coordinate every aspect of your medical journey.
                            </p>
                            <p>
                                Our medical tourism specialists work with accredited hospitals and experienced doctors to provide you with top-quality care at competitive prices, with complete support throughout your stay.
                            </p>
                        </>
                    }
                    images={[
                        "/Services/Medical.png",
                        "/Services/Medical.png",
                        "/Services/Medical.png",
                        "/Services/Medical.png",
                    ]}
                    layout="image-left"
                />

                <WhyChooseServices
                    heading="Why Choose Our Medical Services"
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M34 28H30V32H26V36H30V40H34V36H38V32H34V28Z" fill="white" />
                                </svg>
                            ),
                            title: "Accredited Hospitals",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M28 32L30.5 34.5L37.5 27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ),
                            title: "Expert Coordination",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M32 24C28.13 24 25 27.13 25 31C25 35.41 32 44 32 44C32 44 39 35.41 39 31C39 27.13 35.87 24 32 24ZM32 34C30.34 34 29 32.66 29 31C29 29.34 30.34 28 32 28C33.66 28 35 29.34 35 31C35 32.66 33.66 34 32 34Z" fill="white" />
                                </svg>
                            ),
                            title: "Complete Support",
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading="What Our Patients Say"
                    description="Patients from around the world share their experiences with our medical tourism services and how TreTrip made their healthcare journey smooth and successful."
                    backgroundImage="/Services/MedicalClientBg.png"
                    testimonials={[
                        {
                            text: "The coordination was impeccable. From finding the right hospital to managing my accommodation and appointments, TreTrip handled everything professionally. I received world-class treatment at a fraction of the cost.",
                            name: "Rajesh Kumar",
                            role: "Medical Tourism Patient",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "I was nervous about getting surgery abroad, but TreTrip's team was incredibly supportive throughout the entire process. The doctors were excellent, and I'm thrilled with the results!",
                            name: "Linda Martinez",
                            role: "Surgical Patient",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "Best decision I made. The hospital was accredited, the doctors were experienced, and TreTrip provided excellent follow-up care. Highly recommended for anyone considering medical tourism.",
                            name: "Ahmad Al-Rashid",
                            role: "Wellness Traveler",
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
