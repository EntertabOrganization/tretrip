"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import WhyChooseServices from "@/components/WhyChooseServices";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";
import { useLanguage } from "@/context/LanguageContext";

export default function EventsPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Event.png"
                    title={t("services.items.events.title")}
                    description={t("services.items.events.desc")}
                    backgroundPosition="center"
                />

                {/* Content Section */}
                <ServiceContent
                    heading="Unforgettable Events"
                    description={
                        <>
                            <p>
                                From intimate gatherings to large-scale conferences, we create memorable events that exceed expectations. Our experienced team handles every detail with precision and creativity.
                            </p>
                            <p>
                                Whether it's a wedding, corporate event, festival, or corporate function, we provide comprehensive event management services to bring your vision to life.
                            </p>
                        </>
                    }
                    images={[
                        "/Services/Event.png",
                        "/Services/Event.png",
                        "/Services/Event.png",
                        "/Services/Event.png",
                    ]}
                    layout="image-left"
                />

                <WhyChooseServices
                    heading="Why Choose Our Event Services"
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M34 28H30V32H26V36H30V40H34V36H38V32H34V28Z" fill="white" />
                                </svg>
                            ),
                            title: "Creative Planning",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M28 32L30.5 34.5L37.5 27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ),
                            title: "Flawless Execution",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M32 24C28.13 24 25 27.13 25 31C25 35.41 32 44 32 44C32 44 39 35.41 39 31C39 27.13 35.87 24 32 24ZM32 34C30.34 34 29 32.66 29 31C29 29.34 30.34 28 32 28C33.66 28 35 29.34 35 31C35 32.66 33.66 34 32 34Z" fill="white" />
                                </svg>
                            ),
                            title: "Memorable Moments",
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading="What Our Event Clients Say"
                    description="From intimate celebrations to large-scale conferences, our clients trust TreTrip to bring their visions to life. Discover their success stories."
                    backgroundImage="/Services/EventClientBg.png"
                    testimonials={[
                        {
                            text: "Our wedding was absolutely perfect thanks to TreTrip's meticulous planning and execution. Every detail exceeded our expectations. Our guests are still talking about how beautifully everything was organized!",
                            name: "Leila Patel",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "TreTrip managed our corporate conference flawlessly. The venue selection was perfect, logistics were seamless, and attendees had an amazing experience. Exceeded all our expectations!",
                            name: "Dr. Fatima Al-Shehhi",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "From concept to execution, TreTrip's creative team brought our event vision to life. The attention to detail, professional execution, and problem-solving made it a huge success. Highly recommended!",
                            name: "Oliver Bennett",
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
