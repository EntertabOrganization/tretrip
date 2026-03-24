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
                    image="/Services/Business.png"
                    title={t("services.items.business.title")}
                    description={t("servicePages.business.description")}
                    backgroundPosition="center"
                />

                {/* Form Section */}
                <section className="px-4 md:px-8 py-12 md:py-20 bg-gray-50 relative" style={{ minHeight: "480px" }}>
                    <div className="flex justify-center">
                        <div
                            className="w-full max-w-4xl bg-white rounded-2xl p-4 md:p-8"
                            style={{
                                height: "auto",
                                borderRadius: "16px",
                                boxShadow: "0px 4px 8px 0px #0000001F",
                                backgroundColor: "white",
                                overflowY: "auto",
                            }}
                        >
                            {/* Title */}
                            <h3 className="font-poppins text-lg md:text-xl font-bold text-gray-800 mb-2 text-center">
                                {step === 1 && t("servicePages.business.stepPersonal")}
                                {step === 2 && t("servicePages.business.stepTravelInfo")}
                                {step === 3 && t("servicePages.business.stepServices")}
                            </h3>

                            {/* Step indicator */}
                            <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-6">
                                {[1, 2, 3].map((stepNum, idx) => (
                                    <React.Fragment key={stepNum}>
                                        <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold font-poppins transition-colors ${step === stepNum ? "bg-brand-primary text-white" : step > stepNum ? "bg-brand-primary/20 text-brand-primary" : "bg-gray-200 text-gray-400"}`}>
                                            {stepNum}
                                        </div>
                                        {idx < 2 && <div className={`h-0.5 w-3 sm:w-4 md:w-5 transition-colors ${step > stepNum ? "bg-brand-primary" : "bg-gray-200"}`} />}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* STEP 1: Personal Information */}
                            {step === 1 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.business.fullName")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.business.enterFullName")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.business.dateOfBirth")}
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.business.phoneNumber")}
                                            </label>
                                            <InternationalPhoneInput placeholder={t("servicePages.business.phoneNumber")} />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.business.emailAddress")}
                                            </label>
                                            <input
                                                type="email"
                                                placeholder={t("servicePages.business.enterEmail")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>



                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.business.gender")}</label>
                                            <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                                {[t("servicePages.business.male"), t("servicePages.business.female")].map((gender) => (
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
                                                {t("servicePages.business.passportNumber")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.business.enterPassport")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
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
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="font-poppins w-full bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                    >
                                        {t("forms.next")}
                                    </button>
                                </form>
                            )}

                            {/* STEP 2: Travel Information */}
                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNext}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.business.countryOfDeparture")}
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                <option>{t("servicePages.business.selectCountry")}</option>
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
                                                {t("servicePages.business.destinationCountry")}
                                            </label>
                                            <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                                <option>{t("servicePages.business.selectDestination")}</option>
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
                                                {t("servicePages.business.jobTitle")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.business.enterJobTitle")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.business.companyName")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.business.enterCompanyName")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.business.companyIndustry")}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={t("servicePages.business.enterCompanyIndustry")}
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.business.preferredDeparture")}
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.business.preferredReturn")}
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.business.travelAlone")}</label>
                                        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                                            {[t("servicePages.business.yes"), t("servicePages.business.no")].map((option) => (
                                                <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="travelingAlone"
                                                        value={option}
                                                        onChange={(e) => setTravelingAlone(e.target.value === "Yes")}
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
                                                {t("servicePages.business.whoAccompanies")}
                                            </label>
                                            <textarea
                                                placeholder={t("servicePages.business.accompaniesDetails")}
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

                            {/* STEP 3: Business Purpose */}
                            {step === 3 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.business.specialInstructions")}
                                        </label>
                                        <textarea
                                            placeholder="Please provide any special instructions for your business event"
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            rows={4}
                                        />
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.business.supportServices")}</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[t("servicePages.business.venueBooking"), t("servicePages.business.avSetup"), t("servicePages.business.branding"), t("servicePages.business.decoration"), t("servicePages.business.catering"), t("servicePages.business.stageDesign"), t("servicePages.business.transportation"), t("servicePages.business.security")].map((service) => (
                                                <label key={service} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="checkbox"
                                                        name="supportServices"
                                                        value={service}
                                                        className="w-4 h-4 accent-brand-primary rounded"
                                                    />
                                                    <span className="text-sm text-gray-700">{service}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.business.additionalNotes")}
                                        </label>
                                        <textarea
                                            placeholder={t("servicePages.business.enterAdditionalNotes")}
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
                                            {t("servicePages.business.submitBtn")}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <ServiceContent
                    heading={t("servicePages.business.contentHeading")}
                    description={
                        <>
                            <p>{t("servicePages.business.contentDesc1")}</p>
                            <p>{t("servicePages.business.contentDesc2")}</p>
                        </>
                    }
                    images={[
                        "/Services/Business/1.jpg",
                        "/Services/Business/2.png",
                        "/Services/Business/3.png"
                    ]}
                    layout="image-left"
                />

                {/* Why Choose Us Section */}
                <WhyChooseServices
                    heading={t("servicePages.business.whyChoose")}
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 17)">
                                        <path d="M15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30C6.7155 30 0 23.2845 0 15C0 6.7155 6.7155 0 15 0ZM15 3C11.8174 3 8.76515 4.26428 6.51472 6.51472C4.26428 8.76515 3 11.8174 3 15C3 18.1826 4.26428 21.2348 6.51472 23.4853C8.76515 25.7357 11.8174 27 15 27C18.1826 27 21.2348 25.7357 23.4853 23.4853C25.7357 21.2348 27 18.1826 27 15C27 11.8174 25.7357 8.76515 23.4853 6.51472C21.2348 4.26428 18.1826 3 15 3ZM15 6C15.3674 6.00005 15.722 6.13493 15.9966 6.37907C16.2711 6.62321 16.4465 6.95962 16.4895 7.3245L16.5 7.5V14.379L20.5605 18.4395C20.8295 18.7094 20.9857 19.0717 20.9973 19.4526C21.009 19.8335 20.8752 20.2046 20.6231 20.4904C20.3711 20.7763 20.0197 20.9555 19.6403 20.9916C19.2609 21.0277 18.882 20.9181 18.5805 20.685L18.4395 20.5605L13.9395 16.0605C13.7064 15.8272 13.5566 15.5235 13.5135 15.1965L13.5 15V7.5C13.5 7.10218 13.658 6.72064 13.9393 6.43934C14.2206 6.15804 14.6022 6 15 6Z" fill="white" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.business.serviceVIP"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(16, 15)">
                                        <path d="M12.25 38.5V26.1813M16 17.875H16.0188M16 10.375H16.0188M19.75 26.1813V38.5M21.625 27.25C20.0022 26.0329 18.0285 25.375 16 25.375C13.9715 25.375 11.9978 26.0329 10.375 27.25M23.5 17.875H23.5188M23.5 10.375H23.5188M8.5 17.875H8.51875M8.5 10.375H8.51875" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M27.25 1H4.75C2.67893 1 1 2.67893 1 4.75V34.75C1 36.8211 2.67893 38.5 4.75 38.5H27.25C29.3211 38.5 31 36.8211 31 34.75V4.75C31 2.67893 29.3211 1 27.25 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.business.serviceLogistics"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(14, 15)">
                                        <path d="M2.55029 17.8545C2.55029 24.2652 2.55029 30.8714 4.79094 32.8621C7.03158 34.8545 10.639 34.8545 17.8506 34.8545C25.0621 34.8545 28.6696 34.8545 30.9102 32.8621C33.1509 30.8697 33.1509 24.2652 33.1509 17.8545" stroke="white" strokeWidth="1.7" />
                                        <path d="M22.3728 21.5987L32.9096 18.4367C33.6066 18.2276 33.9568 18.1239 34.2152 17.9165C34.4409 17.7348 34.6165 17.4983 34.7252 17.2297C34.851 16.9237 34.851 16.5582 34.851 15.8289C34.851 12.9593 34.851 11.5262 34.29 10.4314C33.8023 9.47891 33.0273 8.70397 32.0748 8.21627C30.98 7.65527 29.5469 7.65527 26.6772 7.65527H9.0241C6.15444 7.65527 4.72132 7.65527 3.62649 8.21627C2.67401 8.70397 1.89906 9.47891 1.41135 10.4314C0.850342 11.5262 0.850342 12.9593 0.850342 15.8289C0.850342 16.5582 0.850342 16.922 0.974444 17.2297C1.08313 17.4983 1.25869 17.7348 1.48445 17.9165C1.74456 18.1239 2.09307 18.2276 2.79348 18.4384L13.3286 21.5987" stroke="white" strokeWidth="1.7" />
                                        <path d="M13.0396 4.25378C13.3908 3.25837 14.0421 2.39641 14.9038 1.78672C15.7655 1.17702 16.7951 0.849609 17.8506 0.849609C18.9062 0.849609 19.9358 1.17702 20.7975 1.78672C21.6592 2.39641 22.3105 3.25837 22.6617 4.25378M21.2507 18.7038H14.4506C14.2251 18.7038 14.0089 18.7933 13.8495 18.9527C13.6901 19.1121 13.6006 19.3283 13.6006 19.5538V23.2292C13.6006 23.3989 13.6515 23.5648 13.7466 23.7054C13.8417 23.8459 13.9768 23.9548 14.1344 24.018L15.3244 24.494C16.9461 25.1429 18.7552 25.1429 20.3769 24.494L21.5669 24.018C21.7245 23.9548 21.8595 23.8459 21.9547 23.7054C22.0498 23.5648 22.1007 23.3989 22.1007 23.2292V19.5538C22.1007 19.3283 22.0112 19.1121 21.8518 18.9527C21.6924 18.7933 21.4761 18.7038 21.2507 18.7038Z" stroke="white" strokeWidth="1.7" strokeLinecap="round" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.business.serviceExpertise"),
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading={t("servicePages.business.clientSay")}
                    description={t("servicePages.business.clientSayDesc")}
                    backgroundImage="/Services/TravelClientBg.png"
                    testimonials={[
                        {
                            text: "“Everything ran on time — from cars to hotels. Exactly what I needed.”",
                            name: "Tariq A., UAE",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "“Professional from start to finish. The VIP handling was great.”",
                            name: "Nina C., Germany",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "“No delays, no confusion. I had peace of mind all the way.”",
                            name: "Khaled M., Qatar",
                            image: "/Avatar-3.png",
                        },
                    ]}
                />
            </main>
            <Footer />
        </div>
    );
}
