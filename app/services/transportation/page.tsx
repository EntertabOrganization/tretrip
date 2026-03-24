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

export default function TransportationPage() {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [childSeat, setChildSeat] = useState<string | null>(null);

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
                    image="/Services/Transportation.png"
                    title={t("services.items.transport.title")}
                    description={t("servicePages.transportation.description")}
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
                                {step === 1 && t("servicePages.transportation.stepPersonal")}
                                {step === 2 && t("servicePages.transportation.stepPassengers")}
                            </h3>

                            {/* Step indicator */}
                            <div className="flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 mb-6">
                                {[1, 2].map((stepNum, idx) => (
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
                                                {t("servicePages.transportation.pickupLocation")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.transportation.enterPickupLocation")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.transportation.dropoffLocation")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.transportation.enterDropoffLocation")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.transportation.tripType")}</label>
                                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                            {[t("servicePages.transportation.daily"), t("servicePages.transportation.hourly"), t("servicePages.transportation.roundTrip"), t("servicePages.transportation.oneWay")].map((tripType) => (
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

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.transportation.pickupDate")}
                                            </label>
                                            <input
                                                type="date"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.transportation.pickupTime")}
                                            </label>
                                            <input
                                                type="time"
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.transportation.fullName")}
                                            </label>
                                            <input
                                                type="text"
                                                placeholder={t("servicePages.transportation.enterFullName")}
                                                className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                            />
                                        </div>

                                        <div>
                                            <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                                {t("servicePages.transportation.phoneNumber")}
                                            </label>
                                            <InternationalPhoneInput placeholder={t("servicePages.transportation.enterPhoneNumber") || "Enter your phone number"} />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.transportation.emailAddress")}
                                        </label>
                                        <input
                                            type="email"
                                            placeholder={t("servicePages.transportation.enterEmail")}
                                            className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="font-poppins w-full bg-brand-primary text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
                                    >
                                        {t("forms.next")}
                                    </button>
                                </form>
                            )}

                            {/* STEP 2: Passenger Details */}
                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.transportation.numberOfPassengers")}</label>
                                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                            {["1", "2", "3-4", "5+"].map((passengers) => (
                                                <label key={passengers} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="passengers"
                                                        value={passengers}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{passengers}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.transportation.childSeat")}</label>
                                        <div style={{ display: "flex", gap: "1rem" }}>
                                            {[t("servicePages.transportation.yes"), t("servicePages.transportation.no")].map((option) => (
                                                <label key={option} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="childSeat"
                                                        value={option}
                                                        onChange={(e) => setChildSeat(e.target.value)}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.transportation.luggage")}
                                        </label>
                                        <select className="font-poppins w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition text-sm">
                                            <option>{t("servicePages.transportation.selectLuggage")}</option>
                                            <option>{t("servicePages.transportation.noLuggage")}</option>
                                            <option>{t("servicePages.transportation.oneSmallBag")}</option>
                                            <option>{t("servicePages.transportation.oneMediumBag")}</option>
                                            <option>{t("servicePages.transportation.oneLargeBag")}</option>
                                            <option>{t("servicePages.transportation.twoBags")}</option>
                                            <option>{t("servicePages.transportation.threePlusBags")}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="font-poppins text-sm font-medium text-gray-700 mb-3 block">{t("servicePages.transportation.vehicleType")}</label>
                                        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                                            {[t("servicePages.transportation.economy"), t("servicePages.transportation.suv"), t("servicePages.transportation.luxury"), t("servicePages.transportation.van"), t("servicePages.transportation.other")].map((vehicleType) => (
                                                <label key={vehicleType} className="font-poppins flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="vehicleType"
                                                        value={vehicleType}
                                                        className="w-4 h-4 accent-brand-primary"
                                                    />
                                                    <span className="text-sm text-gray-700">{vehicleType}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="font-poppins block text-sm font-medium text-gray-700 mb-1">
                                            {t("servicePages.transportation.specialRequests")}
                                        </label>
                                        <textarea
                                            placeholder={t("servicePages.transportation.enterSpecialRequests")}
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
                                            {t("servicePages.transportation.submitBtn")}
                                        </button>
                                    </div>
                                </form>
                            )}


                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <ServiceContent
                    heading={t("servicePages.transportation.contentHeading")}
                    description={
                        <>
                            <p>{t("servicePages.transportation.contentDesc1")}</p>
                            <p>{t("servicePages.transportation.contentDesc2")}</p>
                        </>
                    }
                    images={[
                        "/Services/Transportation/1.jpg",
                        "/Services/Transportation/2.jpg",
                        "/Services/Transportation/3.png",
                    ]}
                    layout="image-left"
                />

                {/* Why Choose Us Section */}
                <WhyChooseServices
                    heading={t("servicePages.transportation.whyChoose")}
                    items={[
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 22)">
                                        <path d="M26.5 16H29.5C30.4 16 31 15.4 31 14.5V10C31 8.65 29.95 7.45 28.75 7.15C26.05 6.4 22 5.5 22 5.5C22 5.5 20.05 3.4 18.7 2.05C17.95 1.45 17.05 1 16 1H5.5C4.6 1 3.85 1.6 3.4 2.35L1.3 6.7C1.10137 7.27934 1 7.88756 1 8.5V14.5C1 15.4 1.6 16 2.5 16H5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.5 19C10.1569 19 11.5 17.6569 11.5 16C11.5 14.3431 10.1569 13 8.5 13C6.84315 13 5.5 14.3431 5.5 16C5.5 17.6569 6.84315 19 8.5 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.5 16H20.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M23.5 19C25.1569 19 26.5 17.6569 26.5 16C26.5 14.3431 25.1569 13 23.5 13C21.8431 13 20.5 14.3431 20.5 16C20.5 17.6569 21.8431 19 23.5 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.transportation.servicePremium"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 17)">
                                        <path d="M15 0C23.2845 0 30 6.7155 30 15C30 23.2845 23.2845 30 15 30C6.7155 30 0 23.2845 0 15C0 6.7155 6.7155 0 15 0ZM15 3C11.8174 3 8.76515 4.26428 6.51472 6.51472C4.26428 8.76515 3 11.8174 3 15C3 18.1826 4.26428 21.2348 6.51472 23.4853C8.76515 25.7357 11.8174 27 15 27C18.1826 27 21.2348 25.7357 23.4853 23.4853C25.7357 21.2348 27 18.1826 27 15C27 11.8174 25.7357 8.76515 23.4853 6.51472C21.2348 4.26428 18.1826 3 15 3ZM15 6C15.3674 6.00005 15.722 6.13493 15.9966 6.37907C16.2711 6.62321 16.4465 6.95962 16.4895 7.3245L16.5 7.5V14.379L20.5605 18.4395C20.8295 18.7094 20.9857 19.0717 20.9973 19.4526C21.009 19.8335 20.8752 20.2046 20.6231 20.4904C20.3711 20.7763 20.0197 20.9555 19.6403 20.9916C19.2609 21.0277 18.882 20.9181 18.5805 20.685L18.4395 20.5605L13.9395 16.0605C13.7064 15.8272 13.5566 15.5235 13.5135 15.1965L13.5 15V7.5C13.5 7.10218 13.658 6.72064 13.9393 6.43934C14.2206 6.15804 14.6022 6 15 6Z" fill="white" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.transportation.service24Hours"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 17)">
                                        <path d="M12.2275 4.62402C12.2275 4.37875 12.325 4.14352 12.4984 3.97009C12.6718 3.79665 12.9071 3.69922 13.1523 3.69922H16.8515C17.0968 3.69922 17.332 3.79665 17.5055 3.97009C17.6789 4.14352 17.7764 4.37875 17.7764 4.62402C17.7764 4.86929 17.6789 5.10452 17.5055 5.27795C17.332 5.45139 17.0968 5.54882 16.8515 5.54882H13.1523C12.9071 5.54882 12.6718 5.45139 12.4984 5.27795C12.325 5.10452 12.2275 4.86929 12.2275 4.62402Z" fill="white" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M23.6613 11.5785C23.3256 11.8421 22.89 12.0529 22.3647 12.224C22.3882 12.462 22.3999 12.7031 22.3999 12.9472C22.3995 13.949 22.1956 14.9403 21.8007 15.861C21.4057 16.7817 20.8279 17.6125 20.1023 18.3032C19.3766 18.9939 18.5182 19.53 17.5792 19.8791C16.6402 20.2281 15.64 20.3828 14.6394 20.3338C13.6388 20.2848 12.6586 20.0331 11.7582 19.5939C10.8578 19.1547 10.0559 18.5373 9.40125 17.779C8.74659 17.0207 8.25276 16.1373 7.9497 15.1824C7.64663 14.2276 7.54065 13.2211 7.63818 12.224C7.11289 12.0529 6.67731 11.8421 6.34253 11.5785C5.90788 11.2363 5.61656 10.7795 5.58234 10.2302C5.54998 9.72059 5.75158 9.28779 5.95319 8.9826C6.15213 8.69347 6.38846 8.43194 6.65604 8.20484C6.78675 8.0914 6.9119 7.9906 7.03151 7.90243C6.99575 7.71192 6.95814 7.48381 6.91868 7.21808C6.75569 6.05226 6.67534 4.87637 6.67824 3.69921C6.67824 3.40882 6.80216 3.19242 6.8595 3.10086C6.93163 2.98526 7.01671 2.88631 7.0944 2.80677C7.24884 2.64493 7.44859 2.48032 7.66777 2.32218C8.11168 2.00035 8.72205 1.63875 9.44709 1.30027C10.8926 0.625166 12.8781 0 15.0015 0C17.1248 0 19.1103 0.626091 20.5558 1.30027C21.1792 1.58523 21.7749 1.92732 22.3351 2.32218C22.5543 2.48032 22.7541 2.64586 22.9085 2.80677C22.9862 2.88631 23.0713 2.98526 23.1434 3.10086C23.2007 3.19242 23.3247 3.40882 23.3247 3.69921C23.3247 5.18074 23.2044 6.38113 23.0842 7.21808C23.0448 7.48442 23.0072 7.71254 22.9714 7.90243C23.0898 7.99029 23.2183 8.09109 23.3478 8.20484C23.579 8.40737 23.8435 8.67094 24.0497 8.9826C24.2522 9.28779 24.4529 9.72059 24.4215 10.2311C24.3873 10.7795 24.096 11.2363 23.6613 11.5785ZM8.52969 3.99329C8.54356 5.23993 8.64714 6.24796 8.74979 6.95266C8.77445 7.11912 8.79788 7.26771 8.82008 7.39842H21.1828C21.2056 7.26709 21.2291 7.11851 21.2531 6.95266C21.3548 6.24796 21.4593 5.23993 21.4732 3.99329C21.4012 3.93252 21.3268 3.87453 21.2503 3.81943C20.9165 3.57806 20.4097 3.2738 19.7734 2.97694C18.4944 2.37952 16.7808 1.8496 15.0015 1.8496C13.2221 1.8496 11.5085 2.37952 10.2295 2.97694C9.59321 3.2738 9.08642 3.57806 8.75349 3.81851C8.67666 3.87419 8.60201 3.9328 8.52969 3.99422M8.33178 9.24802L8.32901 9.24987C8.16935 9.35617 8.01646 9.4723 7.87123 9.59759C7.70662 9.74186 7.57529 9.88243 7.49576 10.0045C7.47727 10.0322 7.46029 10.0609 7.4449 10.0905L7.48559 10.1247C7.62431 10.2339 7.92209 10.3938 8.50287 10.552C8.61754 10.5828 8.74054 10.613 8.87186 10.6426L8.88019 10.6445C9.34444 10.7471 9.91597 10.8387 10.6123 10.9108C11.5991 11.0135 12.8411 11.081 14.3929 11.0958L15.0015 11.0976C17.9858 11.0976 19.9158 10.9117 21.1236 10.6445L21.131 10.6426C21.263 10.6136 21.3863 10.5834 21.501 10.552C22.0808 10.3948 22.3795 10.2339 22.5173 10.1247L22.558 10.0905C22.5429 10.061 22.5262 10.0323 22.5081 10.0045C22.4001 9.85367 22.2736 9.71697 22.1317 9.59759C21.9867 9.47233 21.8342 9.3562 21.6748 9.24987L21.6711 9.24802H8.33178ZM14.7499 12.9472C17.1932 12.9472 19.0872 12.8178 20.5392 12.5921C20.5466 12.7092 20.5503 12.8276 20.5503 12.9472C20.5496 13.6878 20.4007 14.4207 20.1124 15.1028C19.8241 15.7849 19.4021 16.4023 18.8714 16.9188C18.3407 17.4353 17.712 17.8403 17.0224 18.11C16.3327 18.3797 15.596 18.5087 14.8558 18.4892C14.1155 18.4698 13.3866 18.3023 12.712 17.9968C12.0375 17.6913 11.4309 17.2538 10.928 16.7102C10.4252 16.1665 10.0363 15.5278 9.78413 14.8315C9.53201 14.1352 9.42182 13.3955 9.46004 12.6559C10.813 12.8427 12.547 12.9472 14.7499 12.9472ZM7.67517 30.4047C7.62677 30.7488 7.60267 31.0958 7.60304 31.4433V32.3681C7.60314 32.5714 7.53625 32.769 7.41271 32.9305C7.28917 33.092 7.11587 33.2082 6.91962 33.2613C6.72337 33.3143 6.5151 33.3013 6.32703 33.2241C6.13896 33.1468 5.98157 33.0098 5.87921 32.8342C5.25563 33.1714 4.52664 33.2571 3.84187 33.0737L2.05515 32.5946C1.34468 32.4039 0.739028 31.9389 0.371371 31.3017C0.00371402 30.6646 -0.0958502 29.9075 0.0945703 29.1969L0.812216 26.5168C1.00273 25.8062 1.46771 25.2003 2.10489 24.8325C2.74207 24.4646 3.49926 24.365 4.20994 24.5553L5.99666 25.0335C6.61812 25.1999 7.13416 25.5652 7.49298 26.0424C8.34925 24.8509 9.47699 23.8805 10.7828 23.2115C12.0887 22.5425 13.5351 22.1941 15.0024 22.1952C16.4688 22.1945 17.9144 22.5429 19.2196 23.2115C20.5247 23.8802 21.652 24.8499 22.5081 26.0406C22.8804 25.5483 23.4063 25.1942 24.0026 25.0344L25.7893 24.5563C26.4998 24.3658 27.2569 24.4654 27.8941 24.8331C28.5312 25.2007 28.9963 25.8064 29.187 26.5168L29.9056 29.1978C29.9998 29.5498 30.0238 29.9169 29.9762 30.2781C29.9286 30.6393 29.8103 30.9876 29.6281 31.3032C29.4458 31.6187 29.2032 31.8952 28.9141 32.1169C28.625 32.3387 28.2951 32.5013 27.9431 32.5956L26.1573 33.0737C25.4738 33.2572 24.7459 33.1725 24.1228 32.8369C24.0201 33.0123 23.8625 33.149 23.6743 33.2259C23.4862 33.3027 23.2779 33.3154 23.0818 33.2621C22.8857 33.2087 22.7126 33.0922 22.5894 32.9306C22.4661 32.769 22.3995 32.5713 22.3999 32.3681V31.4433C22.4002 31.0958 22.3761 30.7488 22.3277 30.4047L17.5151 31.6948C17.2917 32.173 16.9365 32.5775 16.4913 32.8609C16.0461 33.1443 15.5292 33.2949 15.0015 33.2949C14.4737 33.2949 13.9568 33.1443 13.5116 32.8609C13.0664 32.5775 12.7112 32.173 12.4878 31.6948L7.67517 30.4047ZM12.338 29.7389C12.4617 29.317 12.6838 28.9306 12.9861 28.6114C13.2883 28.2923 13.6621 28.0495 14.0766 27.9031V24.1022C12.7795 24.2663 11.5489 24.7707 10.5098 25.5644C9.47078 26.358 8.66029 27.4125 8.16069 28.6208L12.338 29.7389ZM21.8422 28.6198C21.3425 27.4118 20.5319 26.3574 19.4929 25.564C18.4538 24.7705 17.2233 24.2662 15.9263 24.1022V27.9022C16.7623 28.1981 17.4152 28.8825 17.6649 29.7398L21.8422 28.6198ZM23.8278 27.954C23.7963 27.8367 23.7882 27.7143 23.8041 27.5939C23.8199 27.4734 23.8593 27.3573 23.92 27.2521C23.9807 27.1469 24.0616 27.0547 24.1579 26.9807C24.2543 26.9068 24.3643 26.8525 24.4816 26.8211L26.2683 26.3421C26.5051 26.2788 26.7574 26.3121 26.9696 26.4347C27.1819 26.5573 27.3368 26.7591 27.4003 26.9959L28.1188 29.676C28.1503 29.7933 28.1584 29.9157 28.1425 30.0361C28.1267 30.1565 28.0873 30.2726 28.0266 30.3778C27.9659 30.483 27.885 30.5753 27.7887 30.6492C27.6923 30.7232 27.5823 30.7774 27.465 30.8088L25.6783 31.2879C25.5609 31.3194 25.4385 31.3274 25.318 31.3115C25.1975 31.2956 25.0814 31.2561 24.9762 31.1953C24.8709 31.1345 24.7787 31.0535 24.7048 30.9571C24.6309 30.8606 24.5767 30.7505 24.5454 30.6331L23.8278 27.954ZM3.73182 26.3421C3.61444 26.3104 3.49198 26.3023 3.37144 26.3181C3.25091 26.3338 3.13466 26.3732 3.02936 26.4339C2.92405 26.4946 2.83175 26.5755 2.75774 26.672C2.68372 26.7684 2.62945 26.8785 2.59801 26.9959L1.88036 29.675C1.84889 29.7924 1.84084 29.9147 1.85667 30.0352C1.8725 30.1556 1.9119 30.2717 1.97261 30.3769C2.03333 30.4821 2.11417 30.5743 2.21053 30.6483C2.30689 30.7222 2.41687 30.7765 2.5342 30.8079L4.32092 31.287C4.43823 31.3184 4.5606 31.3265 4.68103 31.3107C4.80146 31.2948 4.91759 31.2554 5.02279 31.1947C5.12799 31.134 5.2202 31.0532 5.29416 30.9568C5.36811 30.8604 5.42236 30.7505 5.4538 30.6331L6.17144 27.9531C6.20305 27.8357 6.21121 27.7132 6.19545 27.5927C6.17969 27.4722 6.14031 27.3559 6.07959 27.2506C6.01886 27.1453 5.93797 27.053 5.84154 26.979C5.74511 26.905 5.63503 26.8507 5.51761 26.8193L3.73182 26.3421ZM15.9263 30.5185C15.9263 30.7637 15.8288 30.999 15.6554 31.1724C15.482 31.3458 15.2467 31.4433 15.0015 31.4433C14.7562 31.4433 14.521 31.3458 14.3475 31.1724C14.1741 30.999 14.0766 30.7637 14.0766 30.5185C14.0766 30.2732 14.1741 30.038 14.3475 29.8645C14.521 29.6911 14.7562 29.5937 15.0015 29.5937C15.2467 29.5937 15.482 29.6911 15.6554 29.8645C15.8288 30.038 15.9263 30.2732 15.9263 30.5185Z" fill="white" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.transportation.serviceProDrivers"),
                        },
                    ]}
                />

                {/* What Our Clients Say */}
                <WhatOurClientsSay
                    heading={t("servicePages.transportation.clientSay")}
                    description={t("servicePages.transportation.clientSayDesc")}
                    backgroundImage="/Services/TravelClientBg.png"
                    testimonials={[
                        {
                            text: "“Driver was early, polite, and the car was spotless.”",
                            name: "Samir E., Bahrain",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "“Even in traffic, the trip was smooth. Highly recommend.”",
                            name: "Farah D., Lebanon",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "“Felt safe the whole time — and it was a long drive.”",
                            name: "Yusuf H., KSA",
                            image: "/Avatar-3.png",
                        },
                    ]}
                />
            </main>
            <Footer />
        </div>
    );
}
