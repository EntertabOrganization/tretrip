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

const countries = [
    "Select Country",
    "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Spain", "Italy", "Japan",
    "China", "India", "Brazil", "Mexico", "South Korea", "Netherlands", "Switzerland", "Sweden", "Norway", "Belgium",
    "Austria", "Denmark", "Finland", "Poland", "Russia", "Saudi Arabia", "United Arab Emirates", "Singapore", "Malaysia", "Thailand",
    "Vietnam", "Philippines", "Indonesia", "Pakistan", "Bangladesh", "Sri Lanka", "Egypt", "South Africa", "Nigeria", "Kenya"
];

type LeadFormData = {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
};

type EventFormData = {
    organization: string;
    position: string;
    eventName: string;
    eventType: string;
    theme: string;
    preferredDate: string;
    duration: string;
    expectedAttendees: string;
    targetAudience: string;
    preferredVenue: string;
    city: string;
    country: string;
    indoorOutdoor: string;
    venueSuggestionsNeeded: boolean;
    bookingSupportNeeded: boolean;
    coreServices: string[];
    additionalServices: string[];
    additionalServicesOther: string;
    estimatedBudget: string;
    additionalNotes: string;
};

type AlertState = {
    title: string;
    message: string;
    tone: "error" | "success";
} | null;

export default function EventPage() {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [leadForm, setLeadForm] = useState<LeadFormData>({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
    });
    const [clientId, setClientId] = useState("");
    const [eventForm, setEventForm] = useState<EventFormData>({
        organization: "",
        position: "",
        eventName: "",
        eventType: "",
        theme: "",
        preferredDate: "",
        duration: "",
        expectedAttendees: "",
        targetAudience: "",
        preferredVenue: "",
        city: "",
        country: "",
        indoorOutdoor: "",
        venueSuggestionsNeeded: true,
        bookingSupportNeeded: true,
        coreServices: [],
        additionalServices: [],
        additionalServicesOther: "",
        estimatedBudget: "",
        additionalNotes: "",
    });
    const [isSubmittingClient, setIsSubmittingClient] = useState(false);
    const [isSubmittingEvent, setIsSubmittingEvent] = useState(false);
    const [alertState, setAlertState] = useState<AlertState>(null);
    const totalSteps = 5;

    const formCardStyle: React.CSSProperties = {
        width: "100%",
        maxWidth: "560px",
        maxHeight: "500px",
        borderRadius: "10px",
        boxShadow: "0px 10px 24px 0px rgba(15, 23, 42, 0.12)",
        backgroundColor: "#FFFFFF",
    };

    const modalCardStyle: React.CSSProperties = {
        width: "100%",
        maxWidth: "980px",
        maxHeight: "76vh",
        borderRadius: "20px",
        boxShadow: "0px 30px 80px 0px rgba(15, 23, 42, 0.24)",
        backgroundColor: "#FFFFFF",
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep((s) => s + 1);
    };

    const showAlert = (tone: "error" | "success", title: string, message: string) => {
        setAlertState({ tone, title, message });
    };

    const updateEventField = <K extends keyof EventFormData>(field: K, value: EventFormData[K]) => {
        setEventForm((current) => ({ ...current, [field]: value }));
    };

    const toggleArrayField = (field: "coreServices" | "additionalServices", value: string) => {
        setEventForm((current) => ({
            ...current,
            [field]: current[field].includes(value)
                ? current[field].filter((item) => item !== value)
                : [...current[field], value],
        }));
    };

    const handleFirstStepNext = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!leadForm.fullName.trim() || !leadForm.phoneNumber.trim() || !leadForm.emailAddress.trim()) {
            showAlert("error", "Missing information", "Please complete your name, phone number, and email before continuing.");
            return;
        }

        setIsSubmittingClient(true);

        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const response = await fetch(`${apiBaseUrl}/clients`, {
                method: "POST",
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(leadForm),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok || !result?.success) {
                throw new Error(result?.message || "Unable to save the client details right now.");
            }

            setClientId(result?.data?._id || "");
            setStep(2);
        } catch (error) {
            showAlert(
                "error",
                "Unable to continue",
                error instanceof Error ? error.message : "Something went wrong while saving your details."
            );
        } finally {
            setIsSubmittingClient(false);
        }
    };

    const handlePrevious = () => {
        setStep((s) => Math.max(s - 1, 1));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!clientId || !eventForm.organization || !eventForm.position || !eventForm.eventName || !eventForm.eventType || !eventForm.preferredDate) {
            showAlert("error", "Missing details", "Please complete the required event details before submitting your request.");
            return;
        }

        setIsSubmittingEvent(true);

        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const response = await fetch(`${apiBaseUrl}/events`, {
                method: "POST",
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clientId,
                    ...eventForm,
                    estimatedBudget: eventForm.estimatedBudget ? Number(eventForm.estimatedBudget) : 0,
                }),
            });

            const result = await response.json().catch(() => null);
            if (!response.ok || !result?.success) {
                throw new Error(result?.message || "Unable to submit the event request right now.");
            }

            showAlert("success", "Event request submitted", "Your event booking request has been submitted successfully.");
        } catch (error) {
            showAlert("error", "Unable to submit", error instanceof Error ? error.message : "Something went wrong while sending your event request.");
        } finally {
            setIsSubmittingEvent(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Event.png"
                    title={t("services.items.events.title")}
                    description={t("servicePages.events.description")}
                    backgroundPosition="center 10%"
                />

                <div
                    className={
                        step === 1
                            ? "relative z-20 bg-transparent px-4 pb-10 md:px-8"
                            : "fixed inset-0 z-40 flex items-center justify-center bg-black/45 px-4 py-6"
                    }
                >
                    {step > 1 && <div className="absolute inset-0" onClick={handlePrevious} />}
                    <div className={step === 1 ? "mx-auto -mt-[260px] flex justify-center md:-mt-[240px]" : "relative mx-auto flex w-full justify-center"}>
                        <div
                            className={step === 1 ? "w-full overflow-y-auto p-8 md:p-10" : "relative w-full overflow-y-auto p-6 md:p-10"}
                            style={step === 1 ? formCardStyle : modalCardStyle}
                        >
                            {/* Title */}
                            <h3 className="font-poppins text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
                                {step === 1 && "Book This Service Now"}
                                {step === 2 && "Event Overview"}
                                {step === 3 && "Schedule & Audience"}
                                {step === 4 && t("servicePages.events.stepVenue")}
                                {step === 5 && t("servicePages.events.stepServices")}
                            </h3>

                            {/* Step indicator */}
                            {step > 1 && (
                                <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-6">
                                {Array.from({ length: totalSteps }, (_, index) => index + 1).map((stepNum, idx) => (
                                    <React.Fragment key={stepNum}>
                                        <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold font-poppins transition-colors ${step === stepNum ? "bg-brand-primary text-white" : step > stepNum ? "bg-brand-primary/20 text-brand-primary" : "bg-gray-200 text-gray-400"}`}>
                                            {stepNum}
                                        </div>
                                        {idx < totalSteps - 1 && <div className={`h-0.5 w-3 sm:w-4 md:w-5 transition-colors ${step > stepNum ? "bg-brand-primary" : "bg-gray-200"}`} />}
                                    </React.Fragment>
                                ))}
                                </div>
                            )}

                            {/* STEP 1: Personal Information */}
                            {step === 1 && (
                                <form className="font-poppins space-y-5" onSubmit={handleFirstStepNext}>
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.events.fullName")}
                                        </label>
                                        <input
                                            type="text"
                                            value={leadForm.fullName}
                                            onChange={(e) => setLeadForm((current) => ({ ...current, fullName: e.target.value }))}
                                            placeholder={t("servicePages.events.enterFullName")}
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.events.phoneNumber")}
                                        </label>
                                        <InternationalPhoneInput
                                            value={leadForm.phoneNumber}
                                            onChange={(value) => setLeadForm((current) => ({ ...current, phoneNumber: value }))}
                                            placeholder={t("forms.phone")}
                                        />
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.events.emailAddress")}
                                        </label>
                                        <input
                                            type="email"
                                            value={leadForm.emailAddress}
                                            onChange={(e) => setLeadForm((current) => ({ ...current, emailAddress: e.target.value }))}
                                            placeholder={t("servicePages.events.enterEmail")}
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmittingClient}
                                            className="font-poppins h-9 min-w-[180px] rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {isSubmittingClient ? "Saving..." : t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 2: Event Details */}
                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.events.organization")}
                                            </label>
                                            <input
                                                type="text"
                                                value={eventForm.organization}
                                                onChange={(e) => updateEventField("organization", e.target.value)}
                                                placeholder={t("servicePages.events.enterOrganization")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.events.position")}
                                            </label>
                                            <input
                                                type="text"
                                                value={eventForm.position}
                                                onChange={(e) => updateEventField("position", e.target.value)}
                                                placeholder={t("servicePages.events.enterPosition")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Event Name
                                        </label>
                                        <input
                                            type="text"
                                            value={eventForm.eventName}
                                            onChange={(e) => updateEventField("eventName", e.target.value)}
                                            placeholder="Enter event name"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Event Type
                                            </label>
                                            <select value={eventForm.eventType} onChange={(e) => updateEventField("eventType", e.target.value)} className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
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
                                                value={eventForm.theme}
                                                onChange={(e) => updateEventField("theme", e.target.value)}
                                                placeholder="Enter event theme"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
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

                            {step === 3 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Preferred Dates
                                        </label>
                                        <input
                                            type="date"
                                            value={eventForm.preferredDate}
                                            onChange={(e) => updateEventField("preferredDate", e.target.value)}
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
                                                value={eventForm.duration}
                                                onChange={(e) => updateEventField("duration", e.target.value)}
                                                placeholder="e.g., 4 hours"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Expected Attendees
                                            </label>
                                            <select value={eventForm.expectedAttendees} onChange={(e) => updateEventField("expectedAttendees", e.target.value)} className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
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
                                            value={eventForm.targetAudience}
                                            onChange={(e) => updateEventField("targetAudience", e.target.value)}
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
                            {step === 4 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Preferred Venue (Optional)
                                        </label>
                                        <input
                                            type="text"
                                            value={eventForm.preferredVenue}
                                            onChange={(e) => updateEventField("preferredVenue", e.target.value)}
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
                                                value={eventForm.city}
                                                onChange={(e) => updateEventField("city", e.target.value)}
                                                placeholder="Enter city"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Country
                                            </label>
                                            <select value={eventForm.country} onChange={(e) => updateEventField("country", e.target.value)} className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
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
                                                        checked={eventForm.indoorOutdoor === option}
                                                        onChange={(e) => updateEventField("indoorOutdoor", e.target.value)}
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
                                                        checked={eventForm.venueSuggestionsNeeded === (option === "Yes")}
                                                        onChange={() => updateEventField("venueSuggestionsNeeded", option === "Yes")}
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
                                                        checked={eventForm.bookingSupportNeeded === (option === "Yes")}
                                                        onChange={() => updateEventField("bookingSupportNeeded", option === "Yes")}
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
                            {step === 5 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Core Services</label>
                                        <div className="grid grid-cols-4 gap-3">
                                            {["Venue Booking", "A/V Setup", "Catering", "Stage Design"].map((service) => (
                                                <label key={service} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value={service}
                                                        checked={eventForm.coreServices.includes(service)}
                                                        onChange={() => toggleArrayField("coreServices", service)}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{service}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Additional Services</label>
                                        <div className="flex flex-wrap gap-3">
                                            {["Branding & Printing", "Decoration", "Entertainment/Speakers", "Guest Management", "Transportation", "Security", "Photography/Videography", "Other (Please Specify)"].map((service) => (
                                                <label key={service} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        value={service}
                                                        checked={eventForm.additionalServices.includes(service)}
                                                        onChange={() => toggleArrayField("additionalServices", service)}
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
                                            value={eventForm.estimatedBudget}
                                            onChange={(e) => updateEventField("estimatedBudget", e.target.value)}
                                            placeholder="Enter estimated budget ($)"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    {eventForm.additionalServices.includes("Other (Please Specify)") && (
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Other Additional Service
                                            </label>
                                            <input
                                                type="text"
                                                value={eventForm.additionalServicesOther}
                                                onChange={(e) => updateEventField("additionalServicesOther", e.target.value)}
                                                placeholder="Describe the additional service required"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Additional Notes
                                        </label>
                                        <textarea
                                            value={eventForm.additionalNotes}
                                            onChange={(e) => updateEventField("additionalNotes", e.target.value)}
                                            placeholder="Share any event priorities, guest experience goals, VIP requirements, or operational notes we should prepare for."
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
                                            disabled={isSubmittingEvent}
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            {isSubmittingEvent ? "Submitting..." : "Submit Event Request"}
                                        </button>
                                    </div>
                                </form>
                            )}

                        </div>
                    </div>
                </div>

                {alertState && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                        <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-[0px_24px_60px_rgba(15,23,42,0.2)]">
                            <div
                                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold ${
                                    alertState.tone === "error" ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"
                                }`}
                            >
                                {alertState.tone === "error" ? "!" : "OK"}
                            </div>
                            <h4 className="font-poppins text-xl font-bold text-gray-950">{alertState.title}</h4>
                            <p className="font-poppins mt-3 text-sm leading-6 text-gray-600">{alertState.message}</p>
                            <button
                                type="button"
                                onClick={() => setAlertState(null)}
                                className="font-poppins mt-6 h-10 min-w-[140px] rounded-sm bg-brand-primary px-6 text-sm font-semibold text-white transition hover:opacity-90"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                )}

                {/* Content Section */}
                <ServiceContent
                    heading={t("servicePages.events.contentHeading")}
                    description={
                        <>
                            <p>{t("servicePages.events.contentDesc1")}</p>
                            <p>{t("servicePages.events.contentDesc2")}</p>
                        </>
                    }
                    images={[
                        "/Services/Events/1.png",
                        "/Services/Events/2.jpg",
                        "/Services/Events/3.jpg"
                    ]}
                    layout="image-left"
                />

                {/* Why Choose Us Section */}
                <WhyChooseServices
                    heading={t("servicePages.events.whyChoose")}
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 22)">
                                        <path d="M1.25 8.67857C1.25 5.176 1.25 3.42657 2.34875 2.33829C3.4475 1.25 5.21375 1.25 8.75 1.25H9.39313C10.9269 1.25 11.6919 1.25 12.3819 1.53229C13.0719 1.81457 13.6137 2.35314 14.6975 3.42657L15.9275 4.64486C17.0131 5.71829 17.5531 6.25686 18.2431 6.53914C18.9331 6.82143 19.7 6.82143 21.2319 6.82143H23.75C27.2863 6.82143 29.0525 6.82143 30.1512 7.90971C31.25 8.998 31.25 10.7474 31.25 14.25V19.8214C31.25 23.324 31.25 25.0734 30.1512 26.1617C29.0525 27.25 27.2863 27.25 23.75 27.25H8.75C5.21375 27.25 3.4475 27.25 2.34875 26.1617C1.25 25.0734 1.25 23.324 1.25 19.8214V8.67857Z" stroke="white" strokeWidth="2.5" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.events.serviceFullEvent"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(16, 16)">
                                        <path d="M3.18788 3.19096C4.87172 1.50586 7.06187 0.419689 9.4224 0.0990577C11.7829 -0.221573 14.1834 0.241041 16.2558 1.41594C18.3281 2.59084 19.9577 4.41314 20.8947 6.60331C21.8318 8.79349 22.0244 11.2306 21.4431 13.5408L21.3358 13.9388L26.6227 20.7371C27.0678 21.3093 27.3571 21.987 27.4626 22.7042C27.5681 23.4214 27.486 24.1537 27.2245 24.8298C27.38 24.8764 27.5697 24.9013 27.8029 24.8547L27.9864 24.8065C28.3747 24.6866 28.7946 24.7235 29.156 24.9093C29.5175 25.0952 29.7918 25.4152 29.9203 25.8008C30.0487 26.1863 30.0211 26.6069 29.8434 26.9724C29.6656 27.3379 29.3518 27.6192 28.9691 27.7562C28.3096 27.9835 27.6047 28.0472 26.9151 27.9419C26.2255 27.8365 25.5718 27.5652 25.0102 27.1513C24.3652 27.4367 23.6586 27.5549 22.9558 27.4951C22.253 27.4353 21.5766 27.1995 20.9891 26.8092L20.7341 26.6273L13.9358 21.3389C11.6156 22.0164 9.13593 21.9024 6.88774 21.0148C4.63954 20.1272 2.75072 18.5166 1.5191 16.4369C0.28748 14.3572 -0.216876 11.9266 0.0855597 9.52858C0.387995 7.13051 1.48001 4.90133 3.18943 3.19251L3.18788 3.19096ZM19.8399 17.0799C19.0931 18.1601 18.157 19.0962 17.0768 19.843L22.6435 24.172C22.8532 24.3303 23.113 24.4074 23.3751 24.3891C23.6371 24.3708 23.8837 24.2584 24.0694 24.0726C24.255 23.8867 24.3672 23.64 24.3852 23.3779C24.4033 23.1159 24.3259 22.8561 24.1674 22.6466L19.8399 17.0799ZM17.2634 6.44238L16.9477 6.96485C15.6936 8.98523 14.2119 10.8551 12.5316 12.5378C10.8493 14.2174 8.97997 15.6986 6.96021 16.9524L6.43775 17.268C7.93523 18.3111 9.75187 18.7943 11.5697 18.633C13.3875 18.4717 15.0907 17.6762 16.3811 16.3858C17.6716 15.0953 18.4671 13.3921 18.6284 11.5743C18.7896 9.75651 18.3065 7.93987 17.2634 6.44238ZM14.934 4.24989C13.445 3.34289 11.6945 2.96249 9.96333 3.16973C8.2322 3.37697 6.62089 4.15984 5.38805 5.39268C4.15521 6.62552 3.37234 8.23683 3.1651 9.96797C2.95785 11.6991 3.33826 13.4497 4.24525 14.9387L4.74906 14.6541C6.78549 13.4572 8.66221 12.0074 10.3345 10.3391C11.8443 8.82559 13.1757 7.14408 14.3027 5.32747L14.4831 5.03203L14.7988 4.49246L14.934 4.24989Z" fill="white" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.events.serviceCustom"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(16, 14)">
                                        <path d="M3.38037 4.18046C3.71981 4.37366 4.10391 4.47467 4.49448 4.47343C4.88506 4.47219 5.26851 4.36876 5.60672 4.17342C5.94493 3.97807 6.22614 3.69761 6.42238 3.35992C6.61862 3.02222 6.72307 2.63905 6.72534 2.24848H8.97532C8.97745 2.63927 9.08186 3.02269 9.27818 3.36059C9.4745 3.69849 9.75588 3.9791 10.0943 4.17449C10.4328 4.36987 10.8165 4.47323 11.2073 4.47428C11.5981 4.47533 11.9823 4.37403 12.3218 4.18046L13.4468 6.12745C14.0723 5.77795 14.8208 5.54695 15.5828 5.41045C15.5368 5.27545 15.4768 5.14346 15.4028 5.01446L14.2643 3.04497C13.9699 2.53389 13.4854 2.15991 12.9164 2.00453C12.3474 1.84915 11.7401 1.92498 11.2268 2.21548C11.2217 1.62559 10.9835 1.06166 10.5643 0.646647C10.145 0.23163 9.57873 -0.000812142 8.98882 2.13218e-06H6.71484C5.48485 2.13218e-06 4.48736 0.989993 4.47686 2.21698C3.96342 1.926 3.35573 1.84991 2.78639 2.00531C2.21706 2.16071 1.7323 2.53499 1.43789 3.04647L0.300898 5.01446C-0.314097 6.07945 0.0458998 7.43844 1.10189 8.06093C0.593224 8.36012 0.223529 8.84834 0.0734695 9.41907C-0.0765903 9.9898 0.00516515 10.5967 0.300898 11.1074L1.43789 13.0769C2.05288 14.1419 3.40887 14.5094 4.47686 13.9064C4.48586 14.8334 5.05886 15.6269 5.86885 15.9584C5.86435 15.1019 6.07885 14.2334 6.53934 13.4384L6.64134 13.2614C6.54661 12.9364 6.37947 12.637 6.15248 12.3859C5.92548 12.1347 5.64453 11.9382 5.33072 11.8112C5.01691 11.6842 4.67839 11.6299 4.3406 11.6524C4.0028 11.675 3.67451 11.7738 3.38037 11.9414L2.25538 9.99291C3.73287 9.12892 3.73287 6.99294 2.25538 6.12895L3.38037 4.18046Z" fill="white" />
                                        <path d="M7.85252 10.3105C8.44925 10.3105 9.02154 10.0735 9.4435 9.6515C9.86545 9.22955 10.1025 8.65726 10.1025 8.06053C10.1025 7.46379 9.86545 6.8915 9.4435 6.46955C9.02154 6.0476 8.44925 5.81055 7.85252 5.81055C7.25579 5.81055 6.6835 6.0476 6.26154 6.46955C5.83959 6.8915 5.60254 7.46379 5.60254 8.06053C5.60254 8.65726 5.83959 9.22955 6.26154 9.6515C6.6835 10.0735 7.25579 10.3105 7.85252 10.3105Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4609 18.7498C14.4609 17.5305 14.9453 16.3611 15.8075 15.4989C16.6697 14.6367 17.8391 14.1523 19.0584 14.1523C20.2777 14.1523 21.4471 14.6367 22.3093 15.4989C23.1715 16.3611 23.6559 17.5305 23.6559 18.7498C23.6559 19.9691 23.1715 21.1385 22.3093 22.0007C21.4471 22.8629 20.2777 23.3473 19.0584 23.3473C17.8391 23.3473 16.6697 22.8629 15.8075 22.0007C14.9453 21.1385 14.4609 19.9691 14.4609 18.7498ZM19.0599 16.4038C18.7516 16.4038 18.4464 16.4645 18.1616 16.5825C17.8767 16.7005 17.618 16.8734 17.4 17.0914C17.182 17.3094 17.0091 17.5682 16.8911 17.853C16.7731 18.1378 16.7124 18.443 16.7124 18.7513C16.7124 19.0596 16.7731 19.3648 16.8911 19.6496C17.0091 19.9345 17.182 20.1932 17.4 20.4112C17.618 20.6292 17.8767 20.8021 18.1616 20.9201C18.4464 21.0381 18.7516 21.0988 19.0599 21.0988C19.6825 21.0988 20.2796 20.8515 20.7198 20.4112C21.1601 19.971 21.4074 19.3739 21.4074 18.7513C21.4074 18.1287 21.1601 17.5316 20.7198 17.0914C20.2796 16.6511 19.6825 16.4038 19.0599 16.4038Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.48817 22.9379C8.30739 22.6251 8.19002 22.2798 8.14276 21.9216C8.09551 21.5635 8.1193 21.1995 8.21277 20.8506C8.30624 20.5016 8.46757 20.1745 8.68752 19.8879C8.90747 19.6013 9.18175 19.3609 9.49466 19.1804C9.57032 19.1365 9.63312 19.0735 9.67678 18.9976C9.72043 18.9218 9.74341 18.8359 9.74341 18.7484C9.74341 18.6609 9.72043 18.575 9.67678 18.4992C9.63312 18.4233 9.57032 18.3603 9.49466 18.3164C8.86336 17.9516 8.40282 17.3509 8.21435 16.6465C8.02588 15.9422 8.12492 15.1918 8.48967 14.5604L10.1487 11.6865C10.5135 11.0556 11.1139 10.5953 11.8179 10.4069C12.5219 10.2184 13.2719 10.3172 13.9031 10.6815C13.9789 10.7256 14.065 10.7489 14.1527 10.7491C14.2404 10.7492 14.3266 10.7262 14.4026 10.6824C14.4785 10.6385 14.5415 10.5754 14.5853 10.4994C14.629 10.4234 14.6519 10.3372 14.6516 10.2495C14.6516 8.73149 15.8816 7.5 17.3996 7.5H20.7191C22.2385 7.5 23.4685 8.73149 23.4685 10.2495C23.4685 10.6335 23.884 10.8735 24.2155 10.6815C24.5279 10.5005 24.873 10.3829 25.2309 10.3355C25.5888 10.2881 25.9525 10.3117 26.3013 10.4051C26.65 10.4984 26.9769 10.6597 27.2633 10.8795C27.5496 11.0994 27.7898 11.3736 27.97 11.6865L29.6305 14.5634C29.8112 14.8758 29.9286 15.2207 29.9759 15.5784C30.0232 15.9362 29.9995 16.2997 29.9062 16.6483C29.8128 16.9969 29.6517 17.3236 29.4319 17.6099C29.2122 17.8961 28.9381 18.1362 28.6255 18.3164C28.5494 18.36 28.4863 18.4229 28.4423 18.4988C28.3984 18.5746 28.3752 18.6607 28.3752 18.7484C28.3752 18.8361 28.3984 18.9222 28.4423 18.998C28.4863 19.0739 28.5494 19.1368 28.6255 19.1804C29.2564 19.5452 29.7166 20.1456 29.9051 20.8496C30.0935 21.5536 29.9948 22.3036 29.6305 22.9349L27.973 25.8088C27.7925 26.1216 27.5521 26.3956 27.2657 26.6155C26.9792 26.8353 26.6523 26.9965 26.3035 27.09C25.9547 27.1835 25.5909 27.2073 25.2329 27.1602C24.8749 27.1131 24.5297 26.9959 24.217 26.8153C24.1411 26.7713 24.055 26.7481 23.9672 26.748C23.8795 26.7479 23.7933 26.7708 23.7172 26.8146C23.6412 26.8584 23.578 26.9215 23.5341 26.9974C23.4902 27.0734 23.4671 27.1596 23.467 27.2473C23.467 28.7668 22.237 29.9968 20.7191 29.9968H17.4011C16.6721 29.9968 15.973 29.7073 15.4574 29.192C14.9419 28.6767 14.652 27.9778 14.6516 27.2488C14.6516 27.1611 14.6285 27.0749 14.5845 26.9989C14.5406 26.923 14.4775 26.8599 14.4014 26.8161C14.3254 26.7723 14.2392 26.7494 14.1514 26.7495C14.0637 26.7496 13.9775 26.7728 13.9016 26.8168C13.2702 27.181 12.5201 27.2795 11.816 27.0908C11.112 26.9021 10.5117 26.4415 10.1472 25.8103L8.48817 22.9379ZM10.6197 21.1289C10.5626 21.1617 10.5126 21.2054 10.4725 21.2576C10.4324 21.3097 10.403 21.3693 10.386 21.4328C10.369 21.4964 10.3647 21.5627 10.3734 21.6279C10.3821 21.6931 10.4036 21.756 10.4367 21.8129L12.0956 24.6853C12.2336 24.9253 12.5381 25.0063 12.7781 24.8683C14.6096 23.8109 16.9016 25.1323 16.9016 27.2488C16.9016 27.5233 17.1251 27.7468 17.4011 27.7468H20.7191C20.8515 27.7468 20.9786 27.6942 21.0723 27.6005C21.1659 27.5068 21.2186 27.3798 21.2186 27.2473C21.2186 25.1323 23.509 23.8094 25.342 24.8668C25.582 25.0048 25.8865 24.9223 26.0245 24.6838L27.6835 21.8099C27.7493 21.6952 27.767 21.5592 27.7327 21.4316C27.6984 21.3039 27.6149 21.1951 27.5005 21.1289C25.669 20.0714 25.6675 17.4269 27.5005 16.3679C27.5573 16.3354 27.607 16.292 27.6469 16.2402C27.6868 16.1884 27.716 16.1292 27.7329 16.066C27.7498 16.0028 27.754 15.9369 27.7452 15.8721C27.7365 15.8073 27.715 15.7449 27.682 15.6884L26.0215 12.813C25.9892 12.7559 25.9458 12.7058 25.8939 12.6656C25.842 12.6254 25.7827 12.596 25.7193 12.5789C25.6559 12.5619 25.5898 12.5577 25.5248 12.5664C25.4598 12.5752 25.3971 12.5968 25.3405 12.63C23.509 13.6889 21.2186 12.3645 21.2186 10.2495C21.2186 10.117 21.1659 9.98995 21.0723 9.89628C20.9786 9.8026 20.8515 9.74998 20.7191 9.74998H17.4011C17.3355 9.74958 17.2704 9.76224 17.2097 9.78722C17.149 9.81219 17.0939 9.849 17.0475 9.89548C17.0012 9.94196 16.9646 9.9972 16.9398 10.058C16.915 10.1187 16.9025 10.1838 16.9031 10.2495C16.9031 12.3645 14.6126 13.6874 12.7796 12.6285C12.665 12.5627 12.529 12.545 12.4013 12.5793C12.2737 12.6136 12.1648 12.6971 12.0986 12.8115L10.4397 15.6854C10.4068 15.7423 10.3855 15.805 10.377 15.87C10.3684 15.9351 10.3728 16.0012 10.3897 16.0646C10.4067 16.128 10.4361 16.1874 10.476 16.2394C10.516 16.2915 10.5658 16.3351 10.6227 16.3679C12.4556 17.4254 12.4526 20.0729 10.6227 21.1289" fill="white" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.events.serviceLogistics"),
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading={t("servicePages.events.clientSay")}
                    description={t("servicePages.events.clientSayDesc")}
                    backgroundImage="/Services/TravelClientBg.png"
                    testimonials={[
                        {
                            text: "“They made everything look effortless — truly professional.”",
                            name: "Layla Z., Bahrain",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "“Guests still talk about the night. Every detail was perfect.”",
                            name: "Fadi J., Lebanon",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "“They handled everything — I just enjoyed my event.”",
                            name: "Rim A., UAE",
                            image: "/Avatar-3.png",
                        },
                    ]}
                />
            </main>
            <Footer />
        </div>
    );
}
