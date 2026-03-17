"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import ServiceHero from "@/components/ServiceHero";
import ServiceContent from "@/components/ServiceContent";
import WhyChooseServices from "@/components/WhyChooseServices";
import WhatOurClientsSay from "@/components/WhatOurClientsSay";
import InternationalPhoneInput from "@/components/InternationalPhoneInput";
import { useLanguage } from "@/context/LanguageContext";

export default function TravelPage() {
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
                    image="/Services/Travel.png"
                    title={t("services.items.travel.title")}
                    description={t("services.items.travel.desc")}
                    backgroundPosition="center"
                />

                {/* Form Section */}
                <section className="px-4 md:px-8 py-12 md:py-20 bg-gray-50 relative" style={{ minHeight: "500px" }}>
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
                                {step === 2 && "Flight Details"}
                                {step === 3 && "Hotel Details"}
                                {step === 4 && "Additional Services"}
                            </h3>

                            {/* Step indicator */}
                            <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-6">
                                {[1, 2, 3, 4].map((stepNum, idx) => (
                                    <React.Fragment key={stepNum}>
                                        <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold font-poppins transition-colors ${step === stepNum ? "bg-brand-primary text-white" : step > stepNum ? "bg-brand-primary/20 text-brand-primary" : "bg-gray-200 text-gray-400"}`}>
                                            {stepNum}
                                        </div>
                                        {idx < 3 && <div className={`h-0.5 w-3 sm:w-4 md:w-5 transition-colors ${step > stepNum ? "bg-brand-primary" : "bg-gray-200"}`} />}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* STEP 1: Personal Information */}
                            {step === 1 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
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
                                            Phone Number
                                        </label>
                                        <InternationalPhoneInput placeholder="Enter your phone number" />
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="font-poppins w-full bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                    >
                                        Next
                                    </button>
                                </form>
                            )}

                            {/* STEP 2: Flight Details */}
                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    {/* Traveler's Info Row */}
                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Traveler's Information *</label>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            <input
                                                type="text"
                                                placeholder="Traveler's Name"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                            <div>
                                                <InternationalPhoneInput placeholder="Contact Number" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trip Type and Class Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Select Trip *</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {["Multiple Destinations", "Round Trip", "One Way"].map((tripType) => (
                                                    <label key={tripType} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="tripType"
                                                            value={tripType}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{tripType}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Class *</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {["First", "Business", "Premium", "Economy"].map((classType) => (
                                                    <label key={classType} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="flightClass"
                                                            value={classType}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{classType}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Leaving From and Going To Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Leaving From
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Departure city"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Going To
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Destination city"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Airline, Departing, Stops Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Airline
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Select airline"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Departing
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Stops
                                            </label>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder="Number of stops"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Passengers Row */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <div>
                                                <label className="font-poppins text-sm font-semibold text-gray-800">Adult</label>
                                                <p className="font-poppins text-xs text-gray-500 mb-2">13 yrs old and above</p>
                                            </div>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder="0"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <div>
                                                <label className="font-poppins text-sm font-semibold text-gray-800">Children</label>
                                                <p className="font-poppins text-xs text-gray-500 mb-2">2 to 12 yrs old</p>
                                            </div>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder="0"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <div>
                                                <label className="font-poppins text-sm font-semibold text-gray-800">Infants</label>
                                                <p className="font-poppins text-xs text-gray-500 mb-2">1 yr old and below</p>
                                            </div>
                                            <input
                                                type="number"
                                                min="0"
                                                placeholder="0"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
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
                                            Next
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 3: Hotel Details */}
                            {step === 3 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    {/* Destination & Check-in/out */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Destination
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="City and Hotel Name"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Check-in
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Check-out
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    {/* Rooms and Guests */}
                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Room Details</label>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                            <div>
                                                <label className="font-poppins block text-xs text-gray-600 mb-1">Adult</label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    placeholder="1 guest"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="font-poppins block text-xs text-gray-600 mb-1">Children</label>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    placeholder="0"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="font-poppins block text-xs text-gray-600 mb-1">Rooms</label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    placeholder="1"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Star Rating */}
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-2">
                                            Hotel Rating
                                        </label>
                                        <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                            <option>Select Rating</option>
                                            <option>1 Star</option>
                                            <option>2 Stars</option>
                                            <option>3 Stars</option>
                                            <option>4 Stars</option>
                                            <option>5 Stars</option>
                                        </select>
                                    </div>

                                    {/* Meal Plan */}
                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Meal Plan</label>
                                        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                            {["Room only", "Breakfast included", "Half Board", "Full Board"].map((meal) => (
                                                <label key={meal} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="mealPlan"
                                                        value={meal}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{meal}</span>
                                                </label>
                                            ))}
                                        </div>
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
                                            Next
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 4: Additional Services */}
                            {step === 4 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>
                                    {/* Transfers Section */}
                                    <div className="border-b pb-5">
                                        <h4 className="font-poppins text-sm font-semibold text-gray-800 mb-3">Transfers</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                                <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                    Pick-up Location
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Airport, hotel or address"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                    Drop-off Location
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Airport, hotel or address"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                            <div>
                                                <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                    Pick-up Date
                                                </label>
                                                <input
                                                    type="date"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                    Pick-up Time
                                                </label>
                                                <input
                                                    type="time"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Car Rental Section */}
                                    <div>
                                        <h4 className="font-poppins text-sm font-semibold text-gray-800 mb-3">Car Rental</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            <div>
                                                <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                    Pick-up Date
                                                </label>
                                                <input
                                                    type="date"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                    Drop-off Date
                                                </label>
                                                <input
                                                    type="date"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                            <div>
                                                <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                    Car Type
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Economy, Sedan, SUV, etc."
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                            <div>
                                                <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                    Driver Age
                                                </label>
                                                <input
                                                    type="number"
                                                    min="18"
                                                    placeholder="Enter age"
                                                    className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                />
                                            </div>
                                        </div>
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
                                            Submit Request
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <ServiceContent
                    heading="Comfort Wherever You Go"
                    description={
                        <>
                            <p>
                                Whether you're seeking cultural adventures, historical landmarks, or breathtaking nature escapes, TreTrip takes
                                the hassle out of planning with carefully tailored experiences across the globe. We focus on creating
                                journeys that match your pace, interests, and comfort — with zero stress.
                            </p>
                            <p>
                                From guided city tours to fully managed travel itineraries, our team ensures every trip is smooth, safe, and
                                unforgettable. Just tell us where you want to go, and we'll handle the rest — flights, stays, activities, and more.
                            </p>
                        </>
                    }
                    images={[
                        "/Services/Travel/1.png",
                        "/Services/Travel/2.jpg",
                        "/Services/Travel/3.jpg"
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
                                    <g transform="translate(17, 17)">
                                        <path d="M20 30L10 26.5L2.25 29.5C1.69444 29.7222 1.18056 29.66 0.708333 29.3133C0.236111 28.9667 0 28.5011 0 27.9167V4.58333C0 4.22222 0.104444 3.90278 0.313333 3.625C0.522222 3.34722 0.806667 3.13889 1.16667 3L10 0L20 3.5L27.75 0.5C28.3056 0.277778 28.8194 0.340556 29.2917 0.688334C29.7639 1.03611 30 1.50111 30 2.08333V25.4167C30 25.7778 29.8961 26.0972 29.6883 26.375C29.4806 26.6528 29.1956 26.8611 28.8333 27L20 30ZM18.3333 25.9167V6.41667L11.6667 4.08333V23.5833L18.3333 25.9167ZM21.6667 25.9167L26.6667 24.25V4.5L21.6667 6.41667V25.9167ZM3.33333 25.5L8.33333 23.5833V4.08333L3.33333 5.75V25.5Z" fill="white" />
                                    </g>
                                </svg>
                            ),
                            title: "Tailored Itineraries",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 17)">
                                        <path d="M25.6981 28.3171L22.729 14.7913L28.5022 9.01809C30.9764 6.54386 31.8012 3.2449 30.9764 1.59541C29.327 0.770669 26.028 1.59541 23.5538 4.06964L17.7806 9.84283L4.25479 6.87376C3.43005 6.70881 2.77026 7.03871 2.44036 7.6985L1.94551 8.52325C1.61562 9.34799 1.78057 10.1727 2.44036 10.6676L11.1826 16.4408L7.88366 21.3892H2.93521L1.28572 23.0387L6.23417 26.3377L9.53314 31.2861L11.1826 29.6366V24.6882L16.1311 21.3892L21.9043 30.1315C22.3991 30.7913 23.2239 30.9562 24.0486 30.6263L24.8733 30.2964C25.5331 29.8016 25.863 29.1418 25.6981 28.3171Z" stroke="white" stroke-width="2.57143" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: "End-to-End Service",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(15, 20)">
                                        <path d="M17.685 1.8894L17.6688 1.8786L16.2414 0.919205C15.2616 0.260206 14.0928 -0.0594727 12.914 0.00912305C11.7352 0.0777188 10.6114 0.530808 9.7146 1.299L6.21 4.30321C5.96522 4.51253 5.65367 4.62744 5.3316 4.6272H1.35C0.991958 4.6272 0.64858 4.76944 0.395406 5.02261C0.142232 5.27579 0 5.61916 0 5.9772V16.8312C0 17.5764 0.6048 18.1812 1.35 18.1812H5.1084C5.30009 18.1811 5.48961 18.2218 5.66435 18.3006C5.83908 18.3795 5.99503 18.4946 6.1218 18.6384L10.332 23.4264C10.9874 24.1713 11.8935 24.6497 12.8783 24.7708C13.863 24.8919 14.858 24.6473 15.6744 24.0834L16.9056 23.232L18.2268 23.682C19.0432 23.9589 19.9267 23.968 20.7487 23.708C21.5707 23.4481 22.2882 22.9326 22.797 22.2366L23.643 21.081L24.2298 21.1602C25.0425 21.2697 25.8693 21.1299 26.6008 20.7593C27.3323 20.3887 27.9341 19.8048 28.3266 19.0848L28.4148 18.9228H34.65C35.008 18.9228 35.3514 18.7806 35.6046 18.5274C35.8578 18.2742 36 17.9308 36 17.5728V5.97901C36 5.62096 35.8578 5.27758 35.6046 5.02441C35.3514 4.77124 35.008 4.62901 34.65 4.62901H30.6702C30.3464 4.6291 30.0334 4.51284 29.7882 4.3014L26.748 1.6752C25.4799 0.57942 23.8494 -0.0054051 22.1739 0.0345195C20.4984 0.0744441 18.8977 0.736263 17.6832 1.8912M14.7312 3.1602L15.7428 3.84061L12.2148 7.38841C11.8346 7.77079 11.5345 8.22525 11.3323 8.72514C11.1301 9.22503 11.0297 9.76026 11.0371 10.2995C11.0444 10.8387 11.1594 11.3709 11.3753 11.8651C11.5911 12.3593 11.9035 12.8054 12.294 13.1772L12.4164 13.2924C13.8744 14.6802 16.128 14.7882 17.7102 13.5444L21.4524 10.6068L26.235 15.2058C26.4487 15.411 26.5889 15.6807 26.6341 15.9735C26.6793 16.2662 26.627 16.5657 26.4852 16.8258L26.4402 16.905L26.415 16.9518L25.956 17.7924C25.8252 18.0321 25.6247 18.2265 25.3811 18.3499C25.1375 18.4733 24.8622 18.5199 24.5916 18.4836L23.2074 18.2982C22.9669 18.2658 22.7221 18.2989 22.4987 18.3939C22.2754 18.489 22.0819 18.6424 21.9384 18.8382L20.6172 20.6418C20.4477 20.8738 20.2087 21.0456 19.9348 21.1324C19.6609 21.2192 19.3665 21.2163 19.0944 21.1242L17.1324 20.4582C16.9328 20.3903 16.7201 20.3701 16.5113 20.3991C16.3025 20.4282 16.1034 20.5058 15.93 20.6256L14.1408 21.8622C13.8685 22.0504 13.5365 22.1321 13.208 22.0916C12.8795 22.0511 12.5772 21.8913 12.3588 21.6426L8.1486 16.8546C7.76824 16.4227 7.3002 16.0768 6.77566 15.84C6.25111 15.6031 5.68212 15.4808 5.1066 15.4812H2.7V7.3272H5.3298C6.29625 7.32742 7.23093 6.98203 7.965 6.35341L11.4714 3.3492C11.9197 2.96497 12.4815 2.73826 13.0709 2.7038C13.6603 2.66934 14.2448 2.82903 14.7348 3.1584M29.3508 16.2246C29.3573 15.6716 29.2505 15.123 29.0369 14.6128C28.8232 14.1027 28.5074 13.6416 28.1088 13.2582L23.571 8.89501C23.7747 8.63535 23.8762 8.3101 23.8563 7.9807C23.8365 7.6513 23.6967 7.34057 23.4634 7.10723C23.23 6.87389 22.9193 6.73409 22.5899 6.71426C22.2605 6.69443 21.9352 6.79594 21.6756 6.9996L20.7648 7.71421L20.6568 7.7988L16.0452 11.4222C15.7899 11.6228 15.4708 11.7247 15.1465 11.7091C14.8222 11.6936 14.5144 11.5617 14.2794 11.3376L14.157 11.2206C14.0268 11.0967 13.9226 10.948 13.8506 10.7833C13.7786 10.6186 13.7402 10.4412 13.7377 10.2615C13.7352 10.0818 13.7686 9.90333 13.836 9.73668C13.9033 9.57003 14.0033 9.41851 14.13 9.29101L19.467 3.927C20.1898 3.20037 21.1611 2.77478 22.1853 2.73604C23.2094 2.69729 24.2102 3.04826 24.9858 3.71821L28.0224 6.34261C28.7587 6.97836 29.6992 7.32786 30.672 7.3272H33.3V16.2246H29.3508Z" fill="white" />                                    </g>
                                </svg>
                            ),
                            title: "Trusted Local Experts",
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading="What Our Clients Say"
                    description="Real stories from real journeys — see why travelers around the world choose TreTrip for seamless, memorable adventures."
                    backgroundImage="/Services/TravelClientBg.png"
                    testimonials={[
                        {
                            text: "“I couldn’t believe how easy everything was. The team thought of every detail — even airport pickup was smooth!”",
                            name: "Sarah Johnson",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "“From the desert tour to the old town walk, everything felt authentic and relaxed. Highly recommended.”",
                            name: "Michael Chen",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "“Booking with TreTrip was the best decision. It saved me so much time and gave me peace of mind.”",
                            name: "John T., USA",
                            image: "/Avatar-3.png",
                        },
                    ]}
                />
            </main>
            <Footer />
        </div>
    );
}
