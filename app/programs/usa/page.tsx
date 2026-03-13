"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function UsaProgram() {
    const destinations = [
        {
            name: "New York City",
            description: "The city that never sleeps - iconic landmarks, world-class museums, and vibrant culture.",
            image: "/Programs/USA.png",
        },
        {
            name: "Los Angeles",
            description: "Entertainment capital with beautiful beaches, Hollywood glamour, and diverse attractions.",
            image: "/Programs/USA.png",
        },
        {
            name: "Miami",
            description: "Tropical paradise featuring art deco architecture, stunning beaches, and nightlife.",
            image: "/Programs/USA.png",
        },
        {
            name: "San Francisco",
            description: "Golden Gate City with tech innovation, scenic views, and rich cultural heritage.",
            image: "/Programs/USA.png",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20 flex-1">
                {/* Hero Section */}
                <section className="bg-brand-primary py-20 md:py-32 text-white text-center">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">USA Program</h1>
                        <p className="text-lg md:text-2xl opacity-90 max-w-3xl mx-auto">
                            Explore the diverse beauty and excitement of the United States with our comprehensive USA travel programs.
                        </p>
                    </div>
                </section>

                {/* Destinations Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                                Featured Destinations
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Experience America's most iconic cities and destinations with guided tours and personalized itineraries.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {destinations.map((destination, idx) => (
                                <div key={idx} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="relative h-[300px] overflow-hidden bg-gray-200">
                                        <Image
                                            src={destination.image}
                                            alt={destination.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-brand-primary/40 group-hover:bg-brand-primary/30 transition-colors duration-300" />
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-2xl font-bold text-brand-primary mb-3">{destination.name}</h3>
                                        <p className="text-gray-600 leading-relaxed">{destination.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What's Included Section */}
                <section className="py-16 md:py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">
                                What's Included
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { icon: "✈️", title: "Flights & Transport", desc: "All domestic flights and ground transportation included" },
                                { icon: "🏨", title: "Accommodations", desc: "Premium hotel stays in convenient locations" },
                                { icon: "🎯", title: "Guided Tours", desc: "Expert-led tours of major attractions and hidden gems" },
                                { icon: "🍽️", title: "Meals", desc: "Selected meals at authentic local restaurants" },
                                { icon: "🎫", title: "Entry Fees", desc: "All major attraction entry fees included" },
                                { icon: "👥", title: "Travel Guide", desc: "Professional tour guide throughout the journey" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 md:p-8 rounded-lg shadow hover:shadow-lg transition-shadow">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-brand-primary mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 md:py-24 bg-brand-primary text-white text-center">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore America?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                            Contact us today to discuss your USA travel plans and create the perfect itinerary for your journey.
                        </p>
                        <a href="/contact" className="inline-block bg-white text-brand-primary font-bold px-8 py-3 rounded lg hover:bg-brand-accent transition-colors">
                            Get in Touch
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

