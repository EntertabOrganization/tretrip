"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import WhyChooseServices from "@/components/WhyChooseServices";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";
import { useLanguage } from "@/context/LanguageContext";

export default function TransportationPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Transportation.png"
                    title={t("services.items.transport.title")}
                    description={t("services.items.transport.desc")}
                    backgroundPosition="center"
                />

                {/* Content Section */}
                <ServiceContent
                    heading="Premium Transportation Services"
                    description={
                        <>
                            <p>
                                Travel in comfort and style with our fleet of well-maintained vehicles and professional drivers. We serve individuals, families, and large groups with reliable transportation solutions.
                            </p>
                            <p>
                                Whether you need airport transfers, city tours, or long-distance journeys, our transportation service ensures safe, comfortable, and on-time arrivals every time.
                            </p>
                        </>
                    }
                    images={[
                        "/Services/Transportation.png",
                        "/Services/Transportation.png",
                        "/Services/Transportation.png",
                        "/Services/Transportation.png",
                    ]}
                    layout="image-left"
                />

                <WhyChooseServices
                    heading="Why Choose Our Transportation"
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M34 28H30V32H26V36H30V40H34V36H38V32H34V28Z" fill="white" />
                                </svg>
                            ),
                            title: "Modern Fleet",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M28 32L30.5 34.5L37.5 27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ),
                            title: "Professional Drivers",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M32 24C28.13 24 25 27.13 25 31C25 35.41 32 44 32 44C32 44 39 35.41 39 31C39 27.13 35.87 24 32 24ZM32 34C30.34 34 29 32.66 29 31C29 29.34 30.34 28 32 28C33.66 28 35 29.34 35 31C35 32.66 33.66 34 32 34Z" fill="white" />
                                </svg>
                            ),
                            title: "On-Time Service",
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading="What Our Passengers Say"
                    description="Our passengers appreciate our commitment to comfort, professionalism, and reliability. See why they trust us for their travel needs."
                    backgroundImage="/Services/TransportationClientBg.png"
                    testimonials={[
                        {
                            text: "Used TreTrip's transportation service for my airport transfer. The driver was punctual, professional, and the car was immaculate. Excellent experience from start to finish!",
                            name: "Sophia Rodriguez",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "Booked group transportation for our corporate retreat. The entire team was impressed with the modern fleet, professional drivers, and smooth logistics. Will definitely book again!",
                            name: "Thomas Anderson",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "TreTrip's drivers know the city routes perfectly and were so helpful with recommendations. Comfortable ride, on-time service, and great prices. Highly recommend!",
                            name: "Fatima Al-Khalil",
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
