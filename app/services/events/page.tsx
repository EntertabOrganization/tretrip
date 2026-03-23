"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import WhyChooseServices from "@/components/WhyChooseServices";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";
import InternationalPhoneInput from "@/components/InternationalPhoneInput";
import { useLanguage } from "@/context/LanguageContext";

const statesProvinces = [
    "Select State/Province",
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const countries = [
    "Select Country",
    "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Spain", "Italy", "Japan",
    "China", "India", "Brazil", "Mexico", "South Korea", "Netherlands", "Switzerland", "Sweden", "Norway", "Belgium",
    "Austria", "Denmark", "Finland", "Poland", "Russia", "Saudi Arabia", "United Arab Emirates", "Singapore", "Malaysia", "Thailand",
    "Vietnam", "Philippines", "Indonesia", "Pakistan", "Bangladesh", "Sri Lanka", "Egypt", "South Africa", "Nigeria", "Kenya"
];

export default function EventPage() {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep((s) => s + 1);
    };

    const handlePrevious = () => {
        setStep((s) => Math.max(s - 1, 1));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Event.png"
                    title={t("services.items.events.title")}
                    description="We coordinate logistics for corporate, cultural, and private events—locally and internationally. From securing venues to managing vendors, we ensure every detail aligns with your goals and budget."
                    backgroundPosition="center"
                />

                {/* Form Section */}
                <section className="px-4 md:px-8 py-12 md:py-20 bg-gray-50 relative" style={{ minHeight: "480px" }}>
                    <div className="relative" style={{ position: "absolute", left: "50%", top: "-20%", transform: "translateX(-50%)" }}>
                        <div
                            className="w-full bg-white rounded-2xl p-4 md:p-8"
                            style={{
                                width: "1000px",
                                height: "auto",
                                borderRadius: "16px",
                                boxShadow: "0px 4px 8px 0px #0000001F",
                                backgroundColor: "white",
                                overflowY: "auto",
                            }}
                        >
                            {/* Title */}
                            <h3 className="font-poppins text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
                                {step === 1 && "Personal Information"}
                                {step === 2 && "Event Details"}
                                {step === 3 && "Venue & Location"}
                                {step === 4 && "Services Required"}
                            </h3>

                            {/* Step indicator */}
                            <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-6">
                                {[1, 2, 3, 4].map((stepNum, idx) => (
                                    <React.Fragment key={stepNum}>
                                        <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold font-poppins transition-colors ${step === stepNum ? "bg-brand-primary text-white" : step > stepNum ? "bg-brand-primary/20 text-brand-primary" : "bg-gray-200 text-gray-400"}`}>
                                            {stepNum}
                                        </div>
                                        {idx < 4 && <div className={`h-0.5 w-3 sm:w-4 md:w-5 transition-colors ${step > stepNum ? "bg-brand-primary" : "bg-gray-200"}`} />}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* STEP 1: Personal Information */}
                            {step === 1 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter your full name"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Organization
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter organization name"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Position
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter your position"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number
                                            </label>
                                            <InternationalPhoneInput placeholder="Enter your phone number" />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            disabled={step === 1}
                                            className="font-poppins flex-1 border border-gray-300 text-gray-500 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 2: Event Details */}
                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Event Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter event name"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Event Type
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                <option>Select event type</option>
                                                <option>Corporate</option>
                                                <option>Wedding</option>
                                                <option>Conference</option>
                                                <option>Exhibition</option>
                                                <option>Cultural Event</option>
                                                <option>Private Party</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Theme (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter event theme"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Preferred Dates
                                        </label>
                                        <input
                                            type="date"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Duration
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g., 4 hours"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Expected Attendees
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                <option>Select range</option>
                                                <option>1-50</option>
                                                <option>51-100</option>
                                                <option>101-250</option>
                                                <option>251-500</option>
                                                <option>501-1000</option>
                                                <option>1000+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Target Audience
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="e.g., Business professionals, Students, General public"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins flex-1 border border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary/5 transition"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 3: Venue & Location */}
                            {step === 3 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Preferred Venue (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter preferred venue name"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter city"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Country
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                {countries.map((country) => (
                                                    <option key={country} value={country}>{country}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Indoor/Outdoor Event</label>
                                        <div style={{ display: "flex", gap: "1rem" }}>
                                            {["Indoor", "Outdoor", "Both"].map((option) => (
                                                <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="eventType"
                                                        value={option}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Venue Suggestions Needed?</label>
                                        <div style={{ display: "flex", gap: "1rem" }}>
                                            {["Yes", "No"].map((option) => (
                                                <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="venueSuggestions"
                                                        value={option}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Booking Support Needed?</label>
                                        <div style={{ display: "flex", gap: "1rem" }}>
                                            {["Yes", "No"].map((option) => (
                                                <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="bookingSupport"
                                                        value={option}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins flex-1 border border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary/5 transition"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 4: Services Required */}
                            {step === 4 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Core Services</label>
                                        <div className="space-y-2">
                                            {["Venue Booking", "A/V Setup", "Catering", "Stage Design"].map((service) => (
                                                <label key={service} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value={service}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{service}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Additional Services</label>
                                        <div className="space-y-2">
                                            {["Branding & Printing", "Decoration", "Entertainment/Speakers", "Guest Management", "Transportation", "Security", "Photography/Videography", "Other (Please Specify)"].map((service) => (
                                                <label key={service} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value={service}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{service}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Estimated Budget
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="Enter estimated budget ($)"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Additional Notes
                                        </label>
                                        <textarea
                                            placeholder="Please provide any additional information or special requests"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            rows={5}
                                        />
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins flex-1 border border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary/5 transition"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            Submit Event Request
                                        </button>
                                    </div>
                                </form>
                            )}


                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <ServiceContent
                    heading="Planning You Can Trust"
                    description={
                        <>
                            <p>
                                From personal belongings to business freight, TreTrip ensures your items arrive safely, on time, and with full tracking.
                            </p>
                            <p>
                                We handle cross-border paperwork, customs, and delivery logistics, so you don’t have to lift a finger.
                            </p>
                        </>
                    }
                    images={[
                        "/Services/Shipping/1.jpg",
                        "/Services/Shipping/2.jpg",
                        "/Services/Shipping/3.jpg"
                    ]}
                    layout="image-left"
                />

                {/* Why Choose Us Section */}
                <WhyChooseServices
                    heading="Why Choose TreTrip"
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 22)">
                                        <path d="M8.27286 21.3649C9.0444 21.3649 9.78434 21.0585 10.3299 20.5129C10.8755 19.9674 11.182 19.2274 11.182 18.4559C11.182 17.6844 10.8755 16.9445 10.3299 16.3989C9.78434 15.8534 9.0444 15.5469 8.27286 15.5469C7.50132 15.5469 6.76138 15.8534 6.21582 16.3989C5.67026 16.9445 5.36377 17.6844 5.36377 18.4559C5.36377 19.2274 5.67026 19.9674 6.21582 20.5129C6.76138 21.0585 7.50132 21.3649 8.27286 21.3649ZM25.0001 21.3649C25.7717 21.3649 26.5116 21.0585 27.0572 20.5129C27.6027 19.9674 27.9092 19.2274 27.9092 18.4559C27.9092 17.6844 27.6027 16.9445 27.0572 16.3989C26.5116 15.8534 25.7717 15.5469 25.0001 15.5469C24.2286 15.5469 23.4887 15.8534 22.9431 16.3989C22.3975 16.9445 22.091 17.6844 22.091 18.4559C22.091 19.2274 22.3975 19.9674 22.9431 20.5129C23.4887 21.0585 24.2286 21.3649 25.0001 21.3649Z" stroke="white" stroke-width="2" stroke-linejoin="round" />
                                        <path d="M5.36364 18.4542H1V1H22.0909V18.4542M22.0909 18.4542H11.1818M22.0909 18.4542V6.09081H28.3244L33 12.2725V18.4542H28.4989" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: "Global Reach",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(16, 16)">
                                        <path d="M15.75 33.75C14.3867 33.75 13.0833 33.2055 10.4783 32.1165C3.99333 29.4039 0.75 28.0459 0.75 25.764V9M15.75 33.75C17.1133 33.75 18.4167 33.2055 21.0217 32.1165C27.5067 29.4039 30.75 28.0459 30.75 25.764V9M15.75 33.75V16.1857M5.75 17.25L9.08333 18.9M24.0833 4.05L7.41667 12.3M9.62667 13.4401L4.75833 11.1087C2.08667 9.8283 0.75 9.1881 0.75 8.175C0.75 7.1619 2.08667 6.5217 4.75833 5.2413L9.625 2.90985C12.6333 1.4694 14.1333 0.75 15.75 0.75C17.3667 0.75 18.8683 1.4694 21.8733 2.90985L26.7417 5.2413C29.4133 6.5217 30.75 7.1619 30.75 8.175C30.75 9.1881 29.4133 9.8283 26.7417 11.1087L21.875 13.4401C18.8667 14.8806 17.3667 15.6 15.75 15.6C14.1333 15.6 12.6317 14.8806 9.62667 13.4401Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: "Secure Packaging",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(16, 14)">
                                        <path d="M27.25 1H4.75C2.67893 1 1 2.67893 1 4.75V34.75C1 36.8211 2.67893 38.5 4.75 38.5H27.25C29.3211 38.5 31 36.8211 31 34.75V4.75C31 2.67893 29.3211 1 27.25 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M8.5 8.5H23.5M23.5 23.5V31M23.5 16H23.5188M16 16H16.0188M8.5 16H8.51875M16 23.5H16.0188M8.5 23.5H8.51875M16 31H16.0188M8.5 31H8.51875" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: "Hassle-Free Customs",
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading="What Our Clients Say"
                    description="Here’s what our clients say about their delivery experience."
                    backgroundImage="/Services/TravelClientBg.png"
                    testimonials={[
                        {
                            text: "“They handled customs. My items arrived on time and intact.”",
                            name: "Waleed F., Jordan",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "“So much easier than doing it myself. I’ll use them again.”",
                            name: "Rasha K., Kuwait",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "“Perfect for business shipments — they even gave me tracking.”",
                            name: "Omar N., Egypt",
                            image: "/Avatar-3.png",
                        },
                    ]}
                />
            </main>
            <Footer />
        </div>
    );
}
