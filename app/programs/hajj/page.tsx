"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function KingdomProgram() {
    const [step, setStep] = useState(1);
    const [accommodationOpen, setAccommodationOpen] = useState(false);
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep((s) => s + 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main>
                {/* Hero Section */}
                <section
                    className="relative w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/programs/USABg.png')", height: "70vh" }}
                >
                    {/* Content */}
                    <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Explore the{" "}
                            <span className="relative inline-block">
                                USA
                                <img
                                    src="https://tretrip.com/wp-content/uploads/2025/08/GOLD.svg"
                                    alt=""
                                    className="absolute -bottom-2 left-0 w-full"
                                    aria-hidden="true"
                                />
                            </span>
                        </h2>
                        <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed opacity-90">
                            Experience the diversity of the United States — from iconic cities to natural wonders — your way.
                        </p>
                    </div>
                </section>

                {/* Form & Image Section */}
                <section className="py-12 md:py-16 px-4 md:px-8 relative">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 md:gap-22 items-center justify-center " >
                        {/* Form Column */}
                        <div
                            className="w-full max-w-2xl bg-white rounded-2xl p-4 md:p-8 flex-shrink-0 justify-content-center"
                            style={{
                                borderRadius: "16px",
                                boxShadow: "0px 4px 8px 0px #0000001F",
                                backgroundColor: "white",
                                zIndex: 20,
                            }}
                        >
                            {/* Title */}
                            <h3 className="font-poppins text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
                                Hajj & Umrah Booking Form
                            </h3>

                            {/* Step indicator */}
                            <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mb-6">
                                <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold font-poppins transition-colors ${step === 1 ? "bg-brand-primary text-white" : step > 1 ? "bg-brand-primary/20 text-brand-primary" : "bg-gray-200 text-gray-400"}`}>
                                    1
                                </div>
                                <div className={`h-0.5 w-6 sm:w-8 md:w-10 transition-colors ${step >= 2 ? "bg-brand-primary" : "bg-gray-200"}`} />
                                <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold font-poppins transition-colors ${step === 2 ? "bg-brand-primary text-white" : "bg-gray-200 text-gray-400"}`}>
                                    2
                                </div>
                            </div>

                            {/* STEP 1 */}
                            {step === 1 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            required
                                            placeholder="Enter your full name"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            placeholder="Enter your email"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="Enter your phone number"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <p className="font-poppins text-sm font-medium text-gray-700 mb-3">
                                            Preferred Contact Method
                                        </p>
                                        <div className="flex flex-wrap gap-4 md:gap-8">
                                            {["Email", "Phone Number", "Whatsapp"].map((method) => (
                                                <label
                                                    key={method}
                                                    className="font-poppins flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        name="contactMethod"
                                                        value={method.toLowerCase()}
                                                        className="w-4 h-4 accent-brand-primary rounded"
                                                    />
                                                    {method}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="font-poppins w-full bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                    >
                                        Next
                                    </button>
                                </form>
                            )}

                            {/* STEP 2 */}
                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>

                                    {/* Passport Number */}
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Passport Number
                                        </label>
                                        <input
                                            type="text"
                                            name="passportNumber"
                                            placeholder="Enter passport number"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    {/* Pilgrimage Date */}
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Pilgrimage Date
                                        </label>
                                        <input
                                            type="date"
                                            name="pilgrimageDate"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    {/* Accommodation Class */}
                                    <div>
                                        <p className="font-poppins text-sm font-medium text-gray-700 mb-3">
                                            Accommodation Class
                                        </p>
                                        <div className="grid grid-cols-2 gap-6">
                                            {[
                                                { label: "Economy / Budget Class", value: "economy" },
                                                { label: "Standard / 3-Star Class", value: "standard" },
                                                { label: "Premium / 4-Star Class", value: "premium" },
                                                { label: "Luxury / 5-Star Class", value: "luxury" }
                                            ].map((option) => (
                                                <label key={option.value} className="font-poppins flex items-center gap-3 cursor-pointer text-sm text-gray-700">
                                                    <input
                                                        type="radio"
                                                        name="accommodationClass"
                                                        value={option.value}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    {option.label}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Group Size */}
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Group Size
                                        </label>
                                        <select
                                            name="groupSize"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm bg-white"
                                        >
                                            <option value="">Select group size</option>
                                            <option value="1">1 Person</option>
                                            <option value="2-4">2-4 People</option>
                                            <option value="5-8">5-8 People</option>
                                            <option value="9-12">9-12 People</option>
                                            <option value="13+">13+ People</option>
                                        </select>
                                    </div>

                                    {/* Notes */}
                                    <fieldset className="border border-dashed border-gray-300 rounded-lg p-4">
                                        <legend className="font-poppins font-semibold text-gray-800 px-2">Notes</legend>
                                        <textarea
                                            name="notes"
                                            rows={4}
                                            placeholder="Any special requirements or notes..."
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm resize-none"
                                        />
                                    </fieldset>

                                    {/* Need an Accommodation? Accordion */}
                                    <div className="border border-dashed border-gray-300 rounded-lg overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={() => setAccommodationOpen(!accommodationOpen)}
                                            className="font-poppins w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-brand-primary hover:bg-gray-50 transition"
                                        >
                                            <span>Need an Accommodation?</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform ${accommodationOpen ? "rotate-180" : ""}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {accommodationOpen && (
                                            <div className="px-4 pb-4 space-y-3">
                                                <div>
                                                    <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                        Hotel Preference
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="hotelPreference"
                                                        placeholder="e.g. 5-star, budget-friendly..."
                                                        className="font-poppins w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                        Check-in Date
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="checkIn"
                                                        className="font-poppins w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Back + Submit row */}
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="font-poppins w-1/3 border border-brand-primary text-brand-primary font-semibold py-3 px-4 rounded-lg hover:bg-brand-primary/5 transition"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            Submit Booking Request
                                        </button>
                                    </div>
                                </form>
                            )}

                        </div>

                        {/* Image Column */}
                        <div className="hidden md:block relative w-full md:w-1/2" style={{ overflow: "hidden" }}>
                            {/* Right Image - positioned on left */}
                            <div 
                                style={{ 
                                    position: "absolute", 
                                    width: "400px", 
                                    height: "auto", 
                                    top: "80px", 
                                    left: "auto", 
                                    right: "100px", 
                                    borderRadius: "8px", 
                                    opacity: 1 
                                }}
                            >
                                <img 
                                    src="/hajj/right.jpg" 
                                    alt="Hajj experience right" 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                            {/* Left Image - positioned on right */}
                            <div 
                                style={{ 
                                    position: "absolute", 
                                    width: "400px", 
                                    height: "auto", 
                                    bottom: "100px", 
                                    left: "60px", 
                                    borderRadius: "8px", 
                                    opacity: 1 
                                }}
                            >
                                <img 
                                    src="/hajj/left.png" 
                                    alt="Hajj experience left" 
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
