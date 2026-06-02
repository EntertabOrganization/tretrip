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

type LeadFormData = {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
};

type AlertState = {
    title: string;
    message: string;
    tone: "error" | "success";
} | null;

export default function ShippingPage() {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [leadForm, setLeadForm] = useState<LeadFormData>({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
    });
    const [isSubmittingClient, setIsSubmittingClient] = useState(false);
    const [alertState, setAlertState] = useState<AlertState>(null);
    const totalSteps = 7;

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Shipping.png"
                    title={t("services.items.shipping.title")}
                    description={t("servicePages.shipping.description")}
                    backgroundPosition="center"
                />

                <div
                    className={
                        step === 1
                            ? "relative z-20 bg-transparent px-4 pb-10 md:px-8"
                            : "fixed inset-0 z-40 flex items-center justify-center bg-black/45 px-4 py-6"
                    }
                >
                    {step > 1 && <div className="absolute inset-0" onClick={handlePrevious} />}
                    <div className={step === 1 ? "mx-auto -mt-[260px] flex justify-center md:-mt-[260px]" : "relative mx-auto flex w-full justify-center"}>
                        <div
                            className={step === 1 ? "w-full overflow-y-auto p-8 md:p-10" : "relative w-full overflow-y-auto p-6 md:p-10"}
                            style={step === 1 ? formCardStyle : modalCardStyle}
                        >
                            {/* Title */}
                            <h3 className="font-poppins text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
                                {step === 1 && "Book This Service Now"}
                                {step === 2 && "Shipper Details"}
                                {step === 3 && "Origin & Dispatch"}
                                {step === 4 && "Receiver Details"}
                                {step === 5 && "Delivery Destination"}
                                {step === 6 && t("servicePages.shipping.stepShipmentDetails")}
                                {step === 7 && t("servicePages.shipping.stepAdditionalInfo")}
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
                                            {t("servicePages.shipping.fullName")}
                                        </label>
                                        <input
                                            type="text"
                                            value={leadForm.fullName}
                                            onChange={(e) => setLeadForm((current) => ({ ...current, fullName: e.target.value }))}
                                            placeholder={t("servicePages.shipping.enterFullName")}
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.shipping.phoneNumber")}
                                        </label>
                                        <InternationalPhoneInput
                                            value={leadForm.phoneNumber}
                                            onChange={(value) => setLeadForm((current) => ({ ...current, phoneNumber: value }))}
                                            placeholder={t("servicePages.shipping.phoneNumber")}
                                        />
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.shipping.emailAddress")}
                                        </label>
                                        <input
                                            type="email"
                                            value={leadForm.emailAddress}
                                            onChange={(e) => setLeadForm((current) => ({ ...current, emailAddress: e.target.value }))}
                                            placeholder={t("servicePages.shipping.enterEmail")}
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

                            {/* STEP 2: Shipper Address */}
                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.shipperName")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.shipping.enterShipperName")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.contactPerson")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.shipping.enterContactPerson")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.shipping.shipperAddress")}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={t("servicePages.shipping.enterShipperAddress")}
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div className="col-span-full flex gap-3">
                                            <button type="button" onClick={handlePrevious} className="font-poppins flex-1 border border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary/5 transition">
                                                {t("forms.back")}
                                            </button>
                                            <button type="submit" className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition">
                                                {t("forms.next")}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}

                            {step === 3 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.originCity")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.shipping.enteroriginCity")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                State/Province
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                {statesProvinces.map((state) => (
                                                    <option key={state} value={state}>{state}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("forms.postalCode")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter the origin postal or ZIP code for accurate pickup coordination"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.destinationCountry")}
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                {countries.map((country) => (
                                                    <option key={country} value={country}>{country}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button type="button" onClick={handlePrevious} className="font-poppins flex-1 border border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary/5 transition">{t("forms.back")}</button>
                                        <button type="submit" className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition">{t("forms.next")}</button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 3: Receiver Information */}
                            {step === 4 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.recipientName")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.shipping.enterRecipientName")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Contact Person
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter contact person"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.recipientPhone")}
                                            </label>
                                            <InternationalPhoneInput placeholder={t("servicePages.shipping.enterRecipientPhone")} />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.recipientEmail")}
                                            </label>
                                            <input
                                                type="email"
                                                placeholder={t("servicePages.shipping.enterRecipientEmail")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.recipientAddress")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.shipping.enterRecipientAddress")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Department (Optional)
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter department (optional)"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <button type="button" onClick={handlePrevious} className="font-poppins flex-1 border border-brand-primary text-brand-primary font-semibold py-3 px-6 rounded-lg hover:bg-brand-primary/5 transition">{t("forms.back")}</button>
                                        <button type="submit" className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition">{t("forms.next")}</button>
                                    </div>
                                </form>
                            )}

                            {step === 5 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.destinationCity")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.shipping.enterDestinationCity")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                State/Province
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                {statesProvinces.map((state) => (
                                                    <option key={state} value={state}>{state}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.selectDestinationCountry")}
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                {countries.map((country) => (
                                                    <option key={country} value={country}>{country}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("forms.postalCode")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter the destination postal or ZIP code for precise delivery routing"
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
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 4: Shipment Details */}
                            {step === 6 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.itemDescription")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter type of goods"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Number of Packages
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Enter number of packages"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.weight")}
                                            </label>
                                            <input
                                                type="number"
                                                placeholder={t("servicePages.shipping.enterWeight")}
                                                step="0.01"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.shipping.dimensions")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.shipping.enterDimensions")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Declared Value ($)
                                            </label>
                                            <input
                                                type="number"
                                                placeholder="Enter value"
                                                step="0.01"
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
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 5: Additional Information */}
                            {step === 7 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                Shipping Method
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                <option>Select shipping method</option>
                                                <option>Standard</option>
                                                <option>Express</option>
                                                <option>Overnight</option>
                                                <option>International</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Urgent Shipping</label>
                                            <div style={{ display: "flex", gap: "1rem" }}>
                                                {["Yes", "No"].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input type="radio" name="urgentShipping" value={option} className="w-4 h-4 accent-brand-primary" />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">Tracking Required</label>
                                            <div style={{ display: "flex", gap: "1rem" }}>
                                                {["Yes", "No"].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input type="radio" name="trackingRequired" value={option} className="w-4 h-4 accent-brand-primary" />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.shipping.insurance")}</label>
                                            <div style={{ display: "flex", gap: "1rem" }}>
                                                {[t("servicePages.shipping.yes"), t("servicePages.shipping.no")].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input type="radio" name="insurance" value={option} className="w-4 h-4 accent-brand-primary" />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">Preferred Pickup Date</label>
                                            <input type="date" className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm" />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">Preferred Delivery Date</label>
                                            <input type="date" className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            Attach Documents
                                        </label>
                                        <input
                                            type="file"
                                            multiple
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                        <p className="text-xs text-gray-500 mt-1">Upload invoices, certificates, or other relevant documents</p>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.shipping.additionalNotes")}
                                        </label>
                                        <textarea
                                            placeholder="Add any customs instructions, fragile-item handling notes, preferred delivery windows, or operational details we should consider."
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
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins flex-1 bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                        >
                                            {t("servicePages.shipping.submitBtn")}
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
                    heading="Always on Time, Always Secure"
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
                    heading={t("servicePages.shipping.whyChoose")}
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 22)">
                                        <path d="M8.27286 21.3649C9.0444 21.3649 9.78434 21.0585 10.3299 20.5129C10.8755 19.9674 11.182 19.2274 11.182 18.4559C11.182 17.6844 10.8755 16.9445 10.3299 16.3989C9.78434 15.8534 9.0444 15.5469 8.27286 15.5469C7.50132 15.5469 6.76138 15.8534 6.21582 16.3989C5.67026 16.9445 5.36377 17.6844 5.36377 18.4559C5.36377 19.2274 5.67026 19.9674 6.21582 20.5129C6.76138 21.0585 7.50132 21.3649 8.27286 21.3649ZM25.0001 21.3649C25.7717 21.3649 26.5116 21.0585 27.0572 20.5129C27.6027 19.9674 27.9092 19.2274 27.9092 18.4559C27.9092 17.6844 27.6027 16.9445 27.0572 16.3989C26.5116 15.8534 25.7717 15.5469 25.0001 15.5469C24.2286 15.5469 23.4887 15.8534 22.9431 16.3989C22.3975 16.9445 22.091 17.6844 22.091 18.4559C22.091 19.2274 22.3975 19.9674 22.9431 20.5129C23.4887 21.0585 24.2286 21.3649 25.0001 21.3649Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                                        <path d="M5.36364 18.4542H1V1H22.0909V18.4542M22.0909 18.4542H11.1818M22.0909 18.4542V6.09081H28.3244L33 12.2725V18.4542H28.4989" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.shipping.serviceTracking"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(16, 16)">
                                        <path d="M15.75 33.75C14.3867 33.75 13.0833 33.2055 10.4783 32.1165C3.99333 29.4039 0.75 28.0459 0.75 25.764V9M15.75 33.75C17.1133 33.75 18.4167 33.2055 21.0217 32.1165C27.5067 29.4039 30.75 28.0459 30.75 25.764V9M15.75 33.75V16.1857M5.75 17.25L9.08333 18.9M24.0833 4.05L7.41667 12.3M9.62667 13.4401L4.75833 11.1087C2.08667 9.8283 0.75 9.1881 0.75 8.175C0.75 7.1619 2.08667 6.5217 4.75833 5.2413L9.625 2.90985C12.6333 1.4694 14.1333 0.75 15.75 0.75C17.3667 0.75 18.8683 1.4694 21.8733 2.90985L26.7417 5.2413C29.4133 6.5217 30.75 7.1619 30.75 8.175C30.75 9.1881 29.4133 9.8283 26.7417 11.1087L21.875 13.4401C18.8667 14.8806 17.3667 15.6 15.75 15.6C14.1333 15.6 12.6317 14.8806 9.62667 13.4401Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.shipping.serviceCustoms"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(16, 14)">
                                        <path d="M27.25 1H4.75C2.67893 1 1 2.67893 1 4.75V34.75C1 36.8211 2.67893 38.5 4.75 38.5H27.25C29.3211 38.5 31 36.8211 31 34.75V4.75C31 2.67893 29.3211 1 27.25 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.5 8.5H23.5M23.5 23.5V31M23.5 16H23.5188M16 16H16.0188M8.5 16H8.51875M16 23.5H16.0188M8.5 23.5H8.51875M16 31H16.0188M8.5 31H8.51875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.shipping.serviceInsurance"),
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading={t("servicePages.shipping.clientSay")}
                    description={t("servicePages.shipping.clientSayDesc")}
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
