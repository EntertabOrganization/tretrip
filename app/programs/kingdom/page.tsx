"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KingdomProgram() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section
                    className="relative w-full min-h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/programs/kingdom.jpg')" }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Explore the Kingdom
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed opacity-90">
                            Discover the rich heritage, breathtaking landscapes, and extraordinary
                            modern wonders of Saudi Arabia — a land where ancient history meets
                            bold visions of the future
                        </p>
                    </div>
                </section>

                {/* Form & Image Section */}
                <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
                        {/* Form Column (col-md-6) */}
                        <div className="w-full md:w-1/2">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">
                                Book Your Kingdom Experience
                            </h3>
                            <form className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter your full name"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="travelers"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Number of Travelers
                                    </label>
                                    <input
                                        type="number"
                                        id="travelers"
                                        name="travelers"
                                        min={1}
                                        placeholder="1"
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us about your travel plans or any special requests..."
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                >
                                    Submit Request
                                </button>
                            </form>
                        </div>

                        {/* Image Column (col-md-6) — placeholder for future image */}
                        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 rounded-xl min-h-[400px]">
                            <p className="text-gray-400 text-sm">Image coming soon</p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
