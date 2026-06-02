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

export default function MedicalPage() {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [travelingAlone, setTravelingAlone] = useState<boolean | null>(null);
    const [needsMedicalArrangements, setNeedsMedicalArrangements] = useState<string | null>(null);
    const [needsHospitalAssistance, setNeedsHospitalAssistance] = useState<string | null>(null);
    const totalSteps = 3;

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
        maxHeight: "88vh",
        borderRadius: "20px",
        boxShadow: "0px 30px 80px 0px rgba(15, 23, 42, 0.24)",
        backgroundColor: "#FFFFFF",
    };

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
                    image="/Services/Medical.png"
                    title={t("services.items.medical.title")}
                    description={t("servicePages.medical.description")}
                    backgroundPosition="center"
                />

                {step === 1 && (
                    <section className="relative z-20 bg-transparent px-4 pb-10 md:px-8">
                        <div className="mx-auto -mt-[260px] flex justify-center md:-mt-[320px]">
                            <div className="w-full overflow-y-auto p-8 md:p-10" style={formCardStyle}>
                                <div className="mb-6 text-center">
                                    <h3 className="font-poppins text-xl font-bold text-gray-950">
                                        Book This Service Now
                                    </h3>
                                </div>

                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.fullName")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.medical.enterFullName")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.dateOfBirth")}
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.medical.gender")}</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {[t("servicePages.medical.male"), t("servicePages.medical.female")].map((gender) => (
                                                    <label key={gender} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="gender"
                                                            value={gender}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{gender}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.passportNumber")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.medical.enterPassport")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.phoneNumber")}
                                            </label>
                                            <InternationalPhoneInput placeholder={t("forms.phone")} />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.emailAddress")}
                                            </label>
                                            <input
                                                type="email"
                                                placeholder={t("servicePages.medical.emailAddress")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-2">
                                        <button
                                            type="submit"
                                            className="font-poppins h-9 min-w-[180px] rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                )}

                {step > 1 && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/45 px-4 py-6">
                        <div className="absolute inset-0" onClick={handlePrevious} />
                        <div className="relative mx-auto w-full overflow-y-auto p-6 md:p-10" style={modalCardStyle}>
                            {/* Title */}
                            <h3 className="font-poppins text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
                                {step === 2 && t("servicePages.medical.stepTravel")}
                                {step === 3 && t("servicePages.medical.stepServices")}
                            </h3>

                            {/* Step indicator */}
                            <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-6">
                                {Array.from({ length: totalSteps }, (_, index) => index + 1).map((stepNum, idx) => (
                                    <React.Fragment key={stepNum}>
                                        <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold font-poppins transition-colors ${step === stepNum ? "bg-brand-primary text-white" : step > stepNum ? "bg-brand-primary/20 text-brand-primary" : "bg-gray-200 text-gray-400"}`}>
                                            {stepNum}
                                        </div>
                                        {idx < 2 && <div className={`h-0.5 w-3 sm:w-4 md:w-5 transition-colors ${step > stepNum ? "bg-brand-primary" : "bg-gray-200"}`} />}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* STEP 2: Travel Information */}
                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.countryOfResidence")}
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                <option>{t("servicePages.medical.selectCountry")}</option>
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>United Kingdom</option>
                                                <option>Australia</option>
                                                <option>Germany</option>
                                                <option>France</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.destinationCountry")}
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                <option>{t("servicePages.medical.selectDestination")}</option>
                                                <option>Turkey</option>
                                                <option>United Arab Emirates</option>
                                                <option>Thailand</option>
                                                <option>Mexico</option>
                                                <option>Costa Rica</option>
                                                <option>Germany</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.preferredDeparture")}
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.preferredReturn")}
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.medical.travelAlone")}</label>
                                        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                            {[t("servicePages.medical.yes"), t("servicePages.medical.no")].map((option) => (
                                                <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="travelingAlone"
                                                        value={option}
                                                        onChange={(e) => setTravelingAlone(e.target.value === t("servicePages.medical.yes"))}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {travelingAlone === false && (
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.whoAccompanies")}
                                            </label>
                                            <textarea
                                                placeholder={t("servicePages.medical.accompaniesDetails")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                rows={4}
                                            />
                                        </div>
                                    )}

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
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {/* STEP 3: Services & Medical Coordination */}
                            {step === 3 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>
                                    {/* Row 1: Flights + Accommodation */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.medical.helpWithFlights")}</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {[t("servicePages.medical.yes"), t("servicePages.medical.no")].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="bookingFlights"
                                                            value={option}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.medical.accommodationArrangements")}</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {[t("servicePages.medical.yes"), t("servicePages.medical.no")].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="accommodation"
                                                            value={option}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2: Transportation + Interpreter */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.medical.transportation")}</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {[t("servicePages.medical.yes"), t("servicePages.medical.no")].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="transportation"
                                                            value={option}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.medical.interpreter")}</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {[t("servicePages.medical.yes"), t("servicePages.medical.no")].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="interpreter"
                                                            value={option}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 3: Medical Arrangements + Hospital Assistance */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.medical.medicalArrangements")}</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {[t("servicePages.medical.yes"), t("servicePages.medical.no")].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="medicalArrangements"
                                                            value={option}
                                                            onChange={(e) => setNeedsMedicalArrangements(e.target.value)}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.medical.hospitalAssistance")}</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {[t("servicePages.medical.yes"), t("servicePages.medical.no")].map((option) => (
                                                    <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                        <input
                                                            type="radio"
                                                            name="hospitalAssistance"
                                                            value={option}
                                                            onChange={(e) => setNeedsHospitalAssistance(e.target.value)}
                                                            className="w-4 h-4 accent-brand-primary"
                                                        />
                                                        <span className="text-sm text-gray-700">{option}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {needsMedicalArrangements === t("servicePages.medical.yes") && (
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.specifyMedical")}
                                            </label>
                                            <textarea
                                                placeholder={t("servicePages.medical.specifyMedical")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                rows={4}
                                            />
                                        </div>
                                    )}

                                    {needsHospitalAssistance === t("servicePages.medical.yes") && (
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.medical.preferredClinic")}
                                            </label>
                                            <textarea
                                                placeholder={t("servicePages.medical.specifyClinic")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                                rows={4}
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.medical.additionalNotes")}
                                        </label>
                                        <textarea
                                            placeholder={t("servicePages.medical.additionalInfo")}
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            rows={4}
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
                                            {t("servicePages.medical.submitBtn")}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}

                {/* Content Section */}
                <ServiceContent
                    heading={t("servicePages.medical.contentHeading")}
                    description={
                        <>
                            <p>{t("servicePages.medical.contentDesc1")}</p>
                            <p>{t("servicePages.medical.contentDesc2")}</p>
                        </>
                    }
                    images={[
                        "/Services/Medical/1.jpg",
                        "/Services/Medical/2.jpg",
                        "/Services/Medical/3.png"
                    ]}
                    layout="image-left"
                />

                {/* Why Choose Us Section */}
                <WhyChooseServices
                    heading={t("servicePages.medical.whyChoose")}
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 17)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.15 7.34922C10.15 6.97792 10.2975 6.62182 10.5601 6.35927C10.8226 6.09672 11.1787 5.94922 11.55 5.94922H16.45C16.8213 5.94922 17.1774 6.09672 17.44 6.35927C17.7025 6.62182 17.85 6.97792 17.85 7.34922C17.85 7.72052 17.7025 8.07662 17.44 8.33917C17.1774 8.60172 16.8213 8.74922 16.45 8.74922H11.55C11.1787 8.74922 10.8226 8.60172 10.5601 8.33917C10.2975 8.07662 10.15 7.72052 10.15 7.34922Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14 11.2C13.6287 11.2 13.2726 11.0525 13.01 10.7899C12.7475 10.5274 12.6 10.1713 12.6 9.8V4.9C12.6 4.5287 12.7475 4.1726 13.01 3.91005C13.2726 3.6475 13.6287 3.5 14 3.5C14.3713 3.5 14.7274 3.6475 14.9899 3.91005C15.2525 4.1726 15.4 4.5287 15.4 4.9V9.8C15.4 10.1713 15.2525 10.5274 14.9899 10.7899C14.7274 11.0525 14.3713 11.2 14 11.2Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.6 2.8C5.6 2.05739 5.895 1.3452 6.4201 0.820101C6.9452 0.294999 7.65739 0 8.4 0L19.6 0C20.3426 0 21.0548 0.294999 21.5799 0.820101C22.105 1.3452 22.4 2.05739 22.4 2.8V8.8536H25.2C25.9426 8.8536 26.6548 9.1486 27.1799 9.6737C27.705 10.1988 28 10.911 28 11.6536V25.2C28 25.9426 27.705 26.6548 27.1799 27.1799C26.6548 27.705 25.9426 28 25.2 28H2.8C2.05739 28 1.3452 27.705 0.820101 27.1799C0.294999 26.6548 0 25.9426 0 25.2V11.6536C0 10.911 0.294999 10.1988 0.820101 9.6737C1.3452 9.1486 2.05739 8.8536 2.8 8.8536H5.6V2.8ZM19.6 2.8H8.4V9.5536C8.4 10.1106 8.17875 10.6447 7.78492 11.0385C7.3911 11.4324 6.85695 11.6536 6.3 11.6536H2.8V25.2H25.2V11.6536H21.7C21.143 11.6536 20.6089 11.4324 20.2151 11.0385C19.8212 10.6447 19.6 10.1106 19.6 9.5536V2.8Z" fill="white" />
                                        <path d="M4.90002 14.7008C4.90002 14.3295 5.04752 13.9734 5.31007 13.7108C5.57263 13.4483 5.92872 13.3008 6.30002 13.3008H7.70002C8.07133 13.3008 8.42742 13.4483 8.68997 13.7108C8.95252 13.9734 9.10002 14.3295 9.10002 14.7008V16.1008C9.10002 16.4721 8.95252 16.8282 8.68997 17.0907C8.42742 17.3533 8.07133 17.5008 7.70002 17.5008H6.30002C5.92872 17.5008 5.57263 17.3533 5.31007 17.0907C5.04752 16.8282 4.90002 16.4721 4.90002 16.1008V14.7008Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.55005 14.6992C4.55005 13.7332 5.33405 12.9492 6.30005 12.9492H7.70005C8.66605 12.9492 9.45005 13.7332 9.45005 14.6992V16.0992C9.45005 17.0652 8.66605 17.8492 7.70005 17.8492H6.30005C5.33405 17.8492 4.55005 17.0652 4.55005 16.0992V14.6992ZM6.30005 13.6492C6.02157 13.6492 5.7545 13.7598 5.55759 13.9568C5.36067 14.1537 5.25005 14.4207 5.25005 14.6992V16.0992C5.25005 16.6788 5.72045 17.1492 6.30005 17.1492H7.70005C7.97853 17.1492 8.2456 17.0386 8.44251 16.8417C8.63942 16.6448 8.75005 16.3777 8.75005 16.0992V14.6992C8.75005 14.4207 8.63942 14.1537 8.44251 13.9568C8.2456 13.7598 7.97853 13.6492 7.70005 13.6492H6.30005Z" fill="white" />
                                        <path d="M11.9 14.7008C11.9 14.3295 12.0475 13.9734 12.3101 13.7108C12.5726 13.4483 12.9287 13.3008 13.3 13.3008H14.7C15.0713 13.3008 15.4274 13.4483 15.69 13.7108C15.9525 13.9734 16.1 14.3295 16.1 14.7008V16.1008C16.1 16.4721 15.9525 16.8282 15.69 17.0907C15.4274 17.3533 15.0713 17.5008 14.7 17.5008H13.3C12.9287 17.5008 12.5726 17.3533 12.3101 17.0907C12.0475 16.8282 11.9 16.4721 11.9 16.1008V14.7008Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.55 14.6992C11.55 13.7332 12.334 12.9492 13.3 12.9492H14.7C15.666 12.9492 16.45 13.7332 16.45 14.6992V16.0992C16.45 17.0652 15.666 17.8492 14.7 17.8492H13.3C12.334 17.8492 11.55 17.0652 11.55 16.0992V14.6992ZM13.3 13.6492C13.0216 13.6492 12.7545 13.7598 12.5576 13.9568C12.3607 14.1537 12.25 14.4207 12.25 14.6992V16.0992C12.25 16.6788 12.7204 17.1492 13.3 17.1492H14.7C14.9785 17.1492 15.2456 17.0386 15.4425 16.8417C15.6394 16.6448 15.75 16.3777 15.75 16.0992V14.6992C15.75 14.4207 15.6394 14.1537 15.4425 13.9568C15.2456 13.7598 14.9785 13.6492 14.7 13.6492H13.3Z" fill="white" />
                                        <path d="M18.9 14.7008C18.9 14.3295 19.0475 13.9734 19.3101 13.7108C19.5726 13.4483 19.9287 13.3008 20.3 13.3008H21.7C22.0713 13.3008 22.4274 13.4483 22.69 13.7108C22.9525 13.9734 23.1 14.3295 23.1 14.7008V16.1008C23.1 16.4721 22.9525 16.8282 22.69 17.0907C22.4274 17.3533 22.0713 17.5008 21.7 17.5008H20.3C19.9287 17.5008 19.5726 17.3533 19.3101 17.0907C19.0475 16.8282 18.9 16.4721 18.9 16.1008V14.7008Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.55 14.6992C18.55 13.7332 19.334 12.9492 20.3 12.9492H21.7C22.666 12.9492 23.45 13.7332 23.45 14.6992V16.0992C23.45 17.0652 22.666 17.8492 21.7 17.8492H20.3C19.334 17.8492 18.55 17.0652 18.55 16.0992V14.6992ZM20.3 13.6492C20.0216 13.6492 19.7545 13.7598 19.5576 13.9568C19.3607 14.1537 19.25 14.4207 19.25 14.6992V16.0992C19.25 16.6788 19.7204 17.1492 20.3 17.1492H21.7C21.9785 17.1492 22.2456 17.0386 22.4425 16.8417C22.6394 16.6448 22.75 16.3777 22.75 16.0992V14.6992C22.75 14.4207 22.6394 14.1537 22.4425 13.9568C22.2456 13.7598 21.9785 13.6492 21.7 13.6492H20.3Z" fill="white" />
                                        <path d="M4.90002 20.9996C4.90002 20.6283 5.04752 20.2722 5.31007 20.0097C5.57263 19.7471 5.92872 19.5996 6.30002 19.5996H7.70002C8.07133 19.5996 8.42742 19.7471 8.68997 20.0097C8.95252 20.2722 9.10002 20.6283 9.10002 20.9996V22.3996C9.10002 22.7709 8.95252 23.127 8.68997 23.3896C8.42742 23.6521 8.07133 23.7996 7.70002 23.7996H6.30002C5.92872 23.7996 5.57263 23.6521 5.31007 23.3896C5.04752 23.127 4.90002 22.7709 4.90002 22.3996V20.9996Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.55005 21C4.55005 20.034 5.33405 19.25 6.30005 19.25H7.70005C8.66605 19.25 9.45005 20.034 9.45005 21V22.4C9.45005 23.366 8.66605 24.15 7.70005 24.15H6.30005C5.33405 24.15 4.55005 23.366 4.55005 22.4V21ZM6.30005 19.95C6.02157 19.95 5.7545 20.0606 5.55759 20.2575C5.36067 20.4545 5.25005 20.7215 5.25005 21V22.4C5.25005 22.9796 5.72045 23.45 6.30005 23.45H7.70005C7.97853 23.45 8.2456 23.3394 8.44251 23.1425C8.63942 22.9455 8.75005 22.6785 8.75005 22.4V21C8.75005 20.7215 8.63942 20.4545 8.44251 20.2575C8.2456 20.0606 7.97853 19.95 7.70005 19.95H6.30005Z" fill="white" />
                                        <path d="M11.9 20.9996C11.9 20.6283 12.0475 20.2722 12.3101 20.0097C12.5726 19.7471 12.9287 19.5996 13.3 19.5996H14.7C15.0713 19.5996 15.4274 19.7471 15.69 20.0097C15.9525 20.2722 16.1 20.6283 16.1 20.9996V22.3996C16.1 22.7709 15.9525 23.127 15.69 23.3896C15.4274 23.6521 15.0713 23.7996 14.7 23.7996H13.3C12.9287 23.7996 12.5726 23.6521 12.3101 23.3896C12.0475 23.127 11.9 22.7709 11.9 22.3996V20.9996Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M11.55 21C11.55 20.034 12.334 19.25 13.3 19.25H14.7C15.666 19.25 16.45 20.034 16.45 21V22.4C16.45 23.366 15.666 24.15 14.7 24.15H13.3C12.334 24.15 11.55 23.366 11.55 22.4V21ZM13.3 19.95C13.0216 19.95 12.7545 20.0606 12.5576 20.2575C12.3607 20.4545 12.25 20.7215 12.25 21V22.4C12.25 22.9796 12.7204 23.45 13.3 23.45H14.7C14.9785 23.45 15.2456 23.3394 15.4425 23.1425C15.6394 22.9455 15.75 22.6785 15.75 22.4V21C15.75 20.7215 15.6394 20.4545 15.4425 20.2575C15.2456 20.0606 14.9785 19.95 14.7 19.95H13.3Z" fill="white" />
                                        <path d="M18.9 20.9996C18.9 20.6283 19.0475 20.2722 19.3101 20.0097C19.5726 19.7471 19.9287 19.5996 20.3 19.5996H21.7C22.0713 19.5996 22.4274 19.7471 22.69 20.0097C22.9525 20.2722 23.1 20.6283 23.1 20.9996V22.3996C23.1 22.7709 22.9525 23.127 22.69 23.3896C22.4274 23.6521 22.0713 23.7996 21.7 23.7996H20.3C19.9287 23.7996 19.5726 23.6521 19.3101 23.3896C19.0475 23.127 18.9 22.7709 18.9 22.3996V20.9996Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M18.55 21C18.55 20.034 19.334 19.25 20.3 19.25H21.7C22.666 19.25 23.45 20.034 23.45 21V22.4C23.45 23.366 22.666 24.15 21.7 24.15H20.3C19.334 24.15 18.55 23.366 18.55 22.4V21ZM20.3 19.95C20.0216 19.95 19.7545 20.0606 19.5576 20.2575C19.3607 20.4545 19.25 20.7215 19.25 21V22.4C19.25 22.9796 19.7204 23.45 20.3 23.45H21.7C21.9785 23.45 22.2456 23.3394 22.4425 23.1425C22.6394 22.9455 22.75 22.6785 22.75 22.4V21C22.75 20.7215 22.6394 20.4545 22.4425 20.2575C22.2456 20.0606 21.9785 19.95 21.7 19.95H20.3Z" fill="white" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.medical.serviceAccredited"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 17)">
                                        <path d="M14 28C12.0867 28 10.2783 27.6323 8.575 26.8968C6.87167 26.1613 5.3844 25.158 4.1132 23.8868C2.842 22.6156 1.83867 21.1283 1.1032 19.425C0.367733 17.7217 0 15.9133 0 14C0 12.0633 0.367733 10.2494 1.1032 8.5582C1.83867 6.867 2.842 5.38533 4.1132 4.1132C5.3844 2.84107 6.87167 1.83773 8.575 1.1032C10.2783 0.368667 12.0867 0.000933333 14 0C15.9367 0 17.7511 0.367733 19.4432 1.1032C21.1353 1.83867 22.6165 2.842 23.8868 4.1132C25.1571 5.3844 26.1604 6.86607 26.8968 8.5582C27.6332 10.2503 28.0009 12.0643 28 14C28 15.9133 27.6323 17.7217 26.8968 19.425C26.1613 21.1283 25.158 22.6161 23.8868 23.8882C22.6156 25.1603 21.1339 26.1637 19.4418 26.8982C17.7497 27.6327 15.9357 28 14 28ZM14 25.13C14.6067 24.29 15.1317 23.415 15.575 22.505C16.0183 21.595 16.38 20.6267 16.66 19.6H11.34C11.62 20.6267 11.9817 21.595 12.425 22.505C12.8683 23.415 13.3933 24.29 14 25.13ZM10.36 24.57C9.94 23.8 9.57273 23.0006 9.2582 22.1718C8.94367 21.343 8.68093 20.4857 8.47 19.6H4.34C5.01667 20.7667 5.86273 21.7817 6.8782 22.645C7.89367 23.5083 9.05427 24.15 10.36 24.57ZM17.64 24.57C18.9467 24.15 20.1077 23.5083 21.1232 22.645C22.1387 21.7817 22.9843 20.7667 23.66 19.6H19.53C19.32 20.4867 19.0577 21.3444 18.7432 22.1732C18.4287 23.002 18.0609 23.8009 17.64 24.57ZM3.15 16.8H7.91C7.84 16.3333 7.78773 15.8727 7.7532 15.4182C7.71867 14.9637 7.70093 14.4909 7.7 14C7.69907 13.5091 7.7168 13.0368 7.7532 12.5832C7.7896 12.1296 7.84187 11.6685 7.91 11.2H3.15C3.03333 11.6667 2.94607 12.1277 2.8882 12.5832C2.83033 13.0387 2.80093 13.5109 2.8 14C2.79907 14.4891 2.82847 14.9618 2.8882 15.4182C2.94793 15.8746 3.0352 16.3352 3.15 16.8ZM10.71 16.8H17.29C17.36 16.3333 17.4127 15.8727 17.4482 15.4182C17.4837 14.9637 17.5009 14.4909 17.5 14C17.4991 13.5091 17.4813 13.0368 17.4468 12.5832C17.4123 12.1296 17.36 11.6685 17.29 11.2H10.71C10.64 11.6667 10.5877 12.1277 10.5532 12.5832C10.5187 13.0387 10.5009 13.5109 10.5 14C10.4991 14.4891 10.5168 14.9618 10.5532 15.4182C10.5896 15.8746 10.6419 16.3352 10.71 16.8ZM20.09 16.8H24.85C24.9667 16.3333 25.0544 15.8727 25.1132 15.4182C25.172 14.9637 25.2009 14.4909 25.2 14C25.1991 13.5091 25.1701 13.0368 25.1132 12.5832C25.0563 12.1296 24.9685 11.6685 24.85 11.2H20.09C20.16 11.6667 20.2127 12.1277 20.2482 12.5832C20.2837 13.0387 20.3009 13.5109 20.3 14C20.2991 14.4891 20.2813 14.9618 20.2468 15.4182C20.2123 15.8746 20.16 16.3352 20.09 16.8ZM19.53 8.4H23.66C22.9833 7.23333 22.1377 6.21833 21.1232 5.355C20.1087 4.49167 18.9476 3.85 17.64 3.43C18.06 4.2 18.4277 4.9994 18.7432 5.8282C19.0587 6.657 19.3209 7.51427 19.53 8.4ZM11.34 8.4H16.66C16.38 7.37333 16.0183 6.405 15.575 5.495C15.1317 4.585 14.6067 3.71 14 2.87C13.3933 3.71 12.8683 4.585 12.425 5.495C11.9817 6.405 11.62 7.37333 11.34 8.4ZM4.34 8.4H8.47C8.68 7.51333 8.94273 6.6556 9.2582 5.8268C9.57367 4.998 9.94093 4.19907 10.36 3.43C9.05333 3.85 7.89227 4.49167 6.8768 5.355C5.86133 6.21833 5.01573 7.23333 4.34 8.4Z" fill="white" />                                    
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.medical.serviceCoordination"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 17)">
                                        <path d="M2.8 2.8H25.2V19.6H4.438L2.8 21.238V2.8ZM2.8 0C1.26 0 0.014 1.26 0.014 2.8L0 28L5.6 22.4H25.2C26.74 22.4 28 21.14 28 19.6V2.8C28 1.26 26.74 0 25.2 0H2.8ZM5.6 14H16.8V16.8H5.6V14ZM5.6 9.8H22.4V12.6H5.6V9.8ZM5.6 5.6H22.4V8.4H5.6V5.6Z" fill="white" />                                    
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.medical.serviceDiscrete"),
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading={t("servicePages.medical.clientSay")}
                    description={t("servicePages.medical.clientSayDesc")}
                    backgroundImage="/Services/TravelClientBg.png"
                    testimonials={[
                        {
                            text: "“Everything was taken care of. I just had to show up — and recover.”",
                            name: "Driss K., Morocco",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "“Treated like a guest, not just a patient. I felt safe and supported.”",
                            name: "Lina F., France",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "“They even helped me book rehab nearby after my surgery. Life saver.”",
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
