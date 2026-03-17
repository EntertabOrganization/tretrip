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
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M34 28H30V32H26V36H30V40H34V36H38V32H34V28Z" fill="white" />
                                </svg>
                            ),
                            title: "Tailored Itineraries",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M28 32L30.5 34.5L37.5 27.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ),
                            title: "End-to-End Service",
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <path d="M32 16C23.16 16 16 23.16 16 32C16 40.84 23.16 48 32 48C40.84 48 48 40.84 48 32C48 23.16 40.84 16 32 16ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" />
                                    <path d="M32 24C28.13 24 25 27.13 25 31C25 35.41 32 44 32 44C32 44 39 35.41 39 31C39 27.13 35.87 24 32 24ZM32 34C30.34 34 29 32.66 29 31C29 29.34 30.34 28 32 28C33.66 28 35 29.34 35 31C35 32.66 33.66 34 32 34Z" fill="white" />
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
                            text: "TreTrip made our family vacation absolutely unforgettable. Every detail was perfectly planned, and the local experts provided incredible insights we would never have found on our own.",
                            name: "Sarah Johnson",
                            role: "Travel Enthusiast",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "From booking to arrival, the service was seamless. The team handled all the logistics so I could focus on enjoying my adventure. Highly recommend TreTrip!",
                            name: "Michael Chen",
                            role: "Business Traveler",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "This was my first time traveling internationally and I was nervous, but TreTrip's team was so supportive and responsive. They turned my dream vacation into reality.",
                            name: "Emma Davis",
                            role: "First-Time Traveler",
                            image: "/Avatar-3.png",
                        },
                    ]}
                />
            </main>
            <Footer />
        </div>
    );
}
