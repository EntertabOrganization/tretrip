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

type TravelFormData = {
    fullName: string;
    phoneNumber: string;
    emailAddress: string;
    tripType: string;
    flightClass: string;
    leavingFrom: string;
    goingTo: string;
    airline: string;
    departingDate: string;
    returnDate: string;
    stops: string;
    adults: string;
    children: string;
    infants: string;
    destination: string;
    hotelName: string;
    roomType: string;
    checkInDate: string;
    checkOutDate: string;
    nightsCount: string;
    mealPreference: string;
    pickupLocation: string;
    dropoffLocation: string;
    pickupDate: string;
    pickupTime: string;
    rentalPickupDate: string;
    rentalDropoffDate: string;
    carType: string;
    driverAge: string;
    specialRequests: string;
};

type AlertState = {
    title: string;
    message: string;
    tone: "error" | "success";
} | null;

const INITIAL_FORM_DATA: TravelFormData = {
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    tripType: "",
    flightClass: "",
    leavingFrom: "",
    goingTo: "",
    airline: "",
    departingDate: "",
    returnDate: "",
    stops: "0",
    adults: "1",
    children: "0",
    infants: "0",
    destination: "",
    hotelName: "",
    roomType: "",
    checkInDate: "",
    checkOutDate: "",
    nightsCount: "",
    mealPreference: "",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    rentalPickupDate: "",
    rentalDropoffDate: "",
    carType: "",
    driverAge: "",
    specialRequests: "",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
    return <label className="font-poppins mb-2 block text-[11px] font-medium text-gray-900">{children}</label>;
}

function TextInput({
    value,
    onChange,
    type = "text",
    placeholder,
    min,
}: {
    value: string;
    onChange: (value: string) => void;
    type?: string;
    placeholder?: string;
    min?: string;
}) {
    return (
        <input
            type={type}
            value={value}
            min={min}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            className="font-poppins h-9 w-full rounded-sm border border-gray-200 bg-white px-3 text-[11px] text-gray-800 transition placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
        />
    );
}

function RadioGroup({
    name,
    options,
    value,
    onChange,
}: {
    name: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}) {
    return (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {options.map((option) => (
                <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-2 rounded-sm border px-3 py-2 text-[11px] transition ${value === option
                            ? "border-brand-primary bg-brand-primary/5 text-brand-primary"
                            : "border-gray-200 text-gray-700 hover:border-brand-primary/40"
                        }`}
                >
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={value === option}
                        onChange={(e) => onChange(e.target.value)}
                        className="h-3.5 w-3.5 accent-brand-primary"
                    />
                    <span>{option}</span>
                </label>
            ))}
        </div>
    );
}

export default function TravelPage() {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<TravelFormData>(INITIAL_FORM_DATA);
    const [clientId, setClientId] = useState<string | null>(null);
    const [isSubmittingClient, setIsSubmittingClient] = useState(false);
    const [isSubmittingRequest, setIsSubmittingRequest] = useState(false);
    const [alertState, setAlertState] = useState<AlertState>(null);
    const totalSteps = 8;

    const updateField = (field: keyof TravelFormData, value: string) => {
        setFormData((current) => ({ ...current, [field]: value }));
    };

    const formCardStyle: React.CSSProperties = {
        width: "100%",
        maxWidth: "560px",
        maxHeight: "500px",
        borderRadius: "10px",
        boxShadow: "0px 10px 24px 0px rgba(15, 23, 42, 0.12)",
        backgroundColor: "white",
    };

    const modalCardStyle: React.CSSProperties = {
        width: "100%",
        maxWidth: "980px",
        maxHeight: "88vh",
        borderRadius: "20px",
        boxShadow: "0px 30px 80px 0px rgba(15, 23, 42, 0.24)",
        backgroundColor: "white",
    };

    const showAlert = (tone: "error" | "success", title: string, message: string) => {
        setAlertState({ tone, title, message });
    };

    const validateFirstStep = () => {
        if (!formData.fullName.trim() || !formData.phoneNumber.trim() || !formData.emailAddress.trim()) {
            showAlert("error", "Missing information", "Please complete your name, phone number, and email before continuing.");
            return false;
        }

        return true;
    };

    const handleFirstStepNext = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateFirstStep()) {
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
                body: JSON.stringify({
                    fullName: formData.fullName,
                    phoneNumber: formData.phoneNumber,
                    emailAddress: formData.emailAddress,
                }),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok || !result?.success) {
                throw new Error(result?.message || "Unable to save the client details right now.");
            }

            setClientId(result?.data?._id ?? null);
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

    const handleNextStep = (e: React.FormEvent) => {
        e.preventDefault();
        setStep((current) => Math.min(current + 1, totalSteps));
    };

    const handlePrevious = () => {
        setStep((current) => Math.max(current - 1, 1));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmittingRequest(true);

        try {
            showAlert(
                "success",
                "Request ready",
                clientId
                    ? "Your travel request has been structured successfully and is ready for the next backend integration step."
                    : "Your travel request has been prepared successfully."
            );
        } finally {
            setIsSubmittingRequest(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="pt-20">
                <ServiceHero
                    image="/Services/Travel.png"
                    title={t("services.items.travel.title")}
                    description={t("servicePages.travel.description")}
                    backgroundPosition="center 30%"
                />

                {step === 1 && (
                    <div className="relative z-20 bg-transparent px-4 pb-10 md:px-8">
                        <div className="mx-auto -mt-[260px] flex justify-center md:-mt-[240px]">
                            <div className="w-full overflow-y-auto p-8 md:p-10" style={formCardStyle}>
                                <div className="mb-6 text-center">
                                    <h3 className="font-poppins text-xl font-bold text-gray-950">
                                        Book This Service Now
                                    </h3>
                                </div>

                                <form className="font-poppins space-y-5" onSubmit={handleFirstStepNext}>
                                    <div>
                                        <FieldLabel>{t("servicePages.travel.fullName")}</FieldLabel>
                                        <TextInput
                                            value={formData.fullName}
                                            onChange={(value) => updateField("fullName", value)}
                                            placeholder={t("servicePages.travel.enterFullName")}
                                        />
                                    </div>

                                    <div>
                                        <FieldLabel>{t("servicePages.travel.phoneNumber")}</FieldLabel>
                                        <InternationalPhoneInput
                                            value={formData.phoneNumber}
                                            onChange={(value) => updateField("phoneNumber", value)}
                                            placeholder={t("servicePages.travel.phoneNumber")}
                                            compact
                                        />
                                    </div>

                                    <div>
                                        <FieldLabel>{t("servicePages.travel.emailAddress")}</FieldLabel>
                                        <TextInput
                                            type="email"
                                            value={formData.emailAddress}
                                            onChange={(value) => updateField("emailAddress", value)}
                                            placeholder={t("servicePages.travel.enterEmail")}
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
                            </div>
                        </div>
                    </div>
                )}

                {step > 1 && (
                    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/45 px-4 py-6">
                        <div className="absolute inset-0" onClick={handlePrevious} />
                        <div className="relative mx-auto w-full overflow-y-auto p-6 md:p-10" style={modalCardStyle}>
                            <div className="mb-6 text-center">
                                <h3 className="font-poppins text-xl font-bold text-gray-950">
                                    Continue Your Travel Request
                                </h3>
                                <p className="font-poppins mt-2 text-xs font-semibold text-brand-primary">
                                    Step {step} of {totalSteps}
                                </p>
                                <p className="font-poppins mt-1 text-sm font-semibold text-gray-800">
                                    {step === 1 && t("servicePages.travel.stepPersonal")}
                                    {step === 2 && "Trip Preferences"}
                                    {step === 3 && t("servicePages.travel.stepFlightDetails")}
                                    {step === 4 && "Passenger Details"}
                                    {step === 5 && t("servicePages.travel.stepHotelDetails")}
                                    {step === 6 && "Transfer Details"}
                                    {step === 7 && "Car Rental"}
                                    {step === 8 && "Review Request"}
                                </p>
                                <div className="mt-4 grid grid-cols-8 gap-1">
                                    {Array.from({ length: totalSteps }, (_, index) => index + 1).map((stepNumber) => (
                                        <span
                                            key={stepNumber}
                                            className={`h-1 rounded-full transition ${step >= stepNumber ? "bg-brand-primary" : "bg-gray-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {step === 2 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNextStep}>
                                    <div className="grid gap-4">
                                        <div>
                                            <FieldLabel>{t("servicePages.travel.selectTrip")}</FieldLabel>
                                            <RadioGroup
                                                name="tripType"
                                                value={formData.tripType}
                                                onChange={(value) => updateField("tripType", value)}
                                                options={[
                                                    t("servicePages.travel.oneWay"),
                                                    t("servicePages.travel.roundTrip"),
                                                    t("servicePages.travel.multipleDestinations"),
                                                ]}
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>{t("servicePages.travel.flightClass")}</FieldLabel>
                                            <RadioGroup
                                                name="flightClass"
                                                value={formData.flightClass}
                                                onChange={(value) => updateField("flightClass", value)}
                                                options={[
                                                    t("servicePages.travel.economy"),
                                                    t("servicePages.travel.premium"),
                                                    t("servicePages.travel.business"),
                                                    t("servicePages.travel.first"),
                                                ]}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins h-9 rounded-sm border border-brand-primary px-6 text-[11px] font-semibold text-brand-primary transition hover:bg-brand-primary/5"
                                        >
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins h-9 rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 3 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNextStep}>
                                    <div className="grid gap-4">
                                        <div>
                                            <FieldLabel>{t("servicePages.travel.leavingFrom")}</FieldLabel>
                                            <TextInput
                                                value={formData.leavingFrom}
                                                onChange={(value) => updateField("leavingFrom", value)}
                                                placeholder={t("servicePages.travel.departureCity")}
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>{t("servicePages.travel.goingTo")}</FieldLabel>
                                            <TextInput
                                                value={formData.goingTo}
                                                onChange={(value) => updateField("goingTo", value)}
                                                placeholder={t("servicePages.travel.destinationCity")}
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>{t("servicePages.travel.departing")}</FieldLabel>
                                            <TextInput
                                                type="date"
                                                value={formData.departingDate}
                                                onChange={(value) => updateField("departingDate", value)}
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>Return Date</FieldLabel>
                                            <TextInput
                                                type="date"
                                                value={formData.returnDate}
                                                onChange={(value) => updateField("returnDate", value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-4">
                                        <div>
                                            <FieldLabel>{t("servicePages.travel.airline")}</FieldLabel>
                                            <TextInput
                                                value={formData.airline}
                                                onChange={(value) => updateField("airline", value)}
                                                placeholder={t("servicePages.travel.selectAirline")}
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>{t("servicePages.travel.stops")}</FieldLabel>
                                            <TextInput
                                                type="number"
                                                min="0"
                                                value={formData.stops}
                                                onChange={(value) => updateField("stops", value)}
                                                placeholder={t("servicePages.travel.numberOfStops")}
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>Destination Focus</FieldLabel>
                                            <TextInput
                                                value={formData.destination}
                                                onChange={(value) => updateField("destination", value)}
                                                placeholder="Primary destination or route"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins h-9 rounded-sm border border-brand-primary px-6 text-[11px] font-semibold text-brand-primary transition hover:bg-brand-primary/5"
                                        >
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins h-9 rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 4 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNextStep}>
                                    <div>
                                        <h4 className="mb-4 text-base font-semibold text-gray-900">Passenger Count</h4>
                                        <div className="grid gap-4">
                                            <div>
                                                <FieldLabel>{t("servicePages.travel.adult")}</FieldLabel>
                                                <TextInput
                                                    type="number"
                                                    min="0"
                                                    value={formData.adults}
                                                    onChange={(value) => updateField("adults", value)}
                                                />
                                            </div>
                                            <div>
                                                <FieldLabel>{t("servicePages.travel.children")}</FieldLabel>
                                                <TextInput
                                                    type="number"
                                                    min="0"
                                                    value={formData.children}
                                                    onChange={(value) => updateField("children", value)}
                                                />
                                            </div>
                                            <div>
                                                <FieldLabel>{t("servicePages.travel.infants")}</FieldLabel>
                                                <TextInput
                                                    type="number"
                                                    min="0"
                                                    value={formData.infants}
                                                    onChange={(value) => updateField("infants", value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins h-9 rounded-sm border border-brand-primary px-6 text-[11px] font-semibold text-brand-primary transition hover:bg-brand-primary/5"
                                        >
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins h-9 rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 5 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNextStep}>
                                    <div className="grid gap-4">
                                        <div>
                                            <FieldLabel>Preferred Hotel</FieldLabel>
                                            <TextInput
                                                value={formData.hotelName}
                                                onChange={(value) => updateField("hotelName", value)}
                                                placeholder="Hotel name or preferred area"
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>Room Type</FieldLabel>
                                            <TextInput
                                                value={formData.roomType}
                                                onChange={(value) => updateField("roomType", value)}
                                                placeholder="Single, double, suite..."
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>Nights</FieldLabel>
                                            <TextInput
                                                type="number"
                                                min="1"
                                                value={formData.nightsCount}
                                                onChange={(value) => updateField("nightsCount", value)}
                                                placeholder="0"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid gap-4">
                                        <div>
                                            <FieldLabel>Check-In Date</FieldLabel>
                                            <TextInput
                                                type="date"
                                                value={formData.checkInDate}
                                                onChange={(value) => updateField("checkInDate", value)}
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>Check-Out Date</FieldLabel>
                                            <TextInput
                                                type="date"
                                                value={formData.checkOutDate}
                                                onChange={(value) => updateField("checkOutDate", value)}
                                            />
                                        </div>
                                        <div>
                                            <FieldLabel>Meal Preference</FieldLabel>
                                            <TextInput
                                                value={formData.mealPreference}
                                                onChange={(value) => updateField("mealPreference", value)}
                                                placeholder="Breakfast, half board, full board..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="mb-3 text-base font-semibold text-gray-900">Accommodation Notes</h4>
                                        <p className="text-sm leading-6 text-gray-500">
                                            Use this step to capture stay preferences clearly before moving to transportation and extra services.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins h-9 rounded-sm border border-brand-primary px-6 text-[11px] font-semibold text-brand-primary transition hover:bg-brand-primary/5"
                                        >
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins h-9 rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 6 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNextStep}>
                                    <div>
                                        <h4 className="mb-4 text-base font-semibold text-gray-900">Transfers</h4>
                                        <div className="grid gap-4">
                                            <div>
                                                <FieldLabel>Pickup Location</FieldLabel>
                                                <TextInput
                                                    value={formData.pickupLocation}
                                                    onChange={(value) => updateField("pickupLocation", value)}
                                                    placeholder="Airport, hotel, or address"
                                                />
                                            </div>
                                            <div>
                                                <FieldLabel>Drop-off Location</FieldLabel>
                                                <TextInput
                                                    value={formData.dropoffLocation}
                                                    onChange={(value) => updateField("dropoffLocation", value)}
                                                    placeholder="Airport, hotel, or address"
                                                />
                                            </div>
                                            <div>
                                                <FieldLabel>Pick-up Date</FieldLabel>
                                                <TextInput
                                                    type="date"
                                                    value={formData.pickupDate}
                                                    onChange={(value) => updateField("pickupDate", value)}
                                                />
                                            </div>
                                            <div>
                                                <FieldLabel>Pick-up Time</FieldLabel>
                                                <TextInput
                                                    type="time"
                                                    value={formData.pickupTime}
                                                    onChange={(value) => updateField("pickupTime", value)}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins h-9 rounded-sm border border-brand-primary px-6 text-[11px] font-semibold text-brand-primary transition hover:bg-brand-primary/5"
                                        >
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins h-9 rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 7 && (
                                <form className="font-poppins space-y-5" onSubmit={handleNextStep}>
                                    <div>
                                        <h4 className="mb-4 text-base font-semibold text-gray-900">Car Rental</h4>
                                        <div className="grid gap-4">
                                            <div>
                                                <FieldLabel>{t("servicePages.travel.pickupDate")}</FieldLabel>
                                                <TextInput
                                                    type="date"
                                                    value={formData.rentalPickupDate}
                                                    onChange={(value) => updateField("rentalPickupDate", value)}
                                                />
                                            </div>
                                            <div>
                                                <FieldLabel>{t("servicePages.travel.dropoffDate")}</FieldLabel>
                                                <TextInput
                                                    type="date"
                                                    value={formData.rentalDropoffDate}
                                                    onChange={(value) => updateField("rentalDropoffDate", value)}
                                                />
                                            </div>
                                            <div>
                                                <FieldLabel>{t("servicePages.travel.carType")}</FieldLabel>
                                                <TextInput
                                                    value={formData.carType}
                                                    onChange={(value) => updateField("carType", value)}
                                                    placeholder={t("servicePages.travel.enterCarType")}
                                                />
                                            </div>
                                            <div>
                                                <FieldLabel>{t("servicePages.travel.driverAge")}</FieldLabel>
                                                <TextInput
                                                    type="number"
                                                    min="18"
                                                    value={formData.driverAge}
                                                    onChange={(value) => updateField("driverAge", value)}
                                                    placeholder={t("servicePages.travel.enterAge")}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins h-9 rounded-sm border border-brand-primary px-6 text-[11px] font-semibold text-brand-primary transition hover:bg-brand-primary/5"
                                        >
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            className="font-poppins h-9 rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90"
                                        >
                                            {t("forms.next")}
                                        </button>
                                    </div>
                                </form>
                            )}

                            {step === 8 && (
                                <form className="font-poppins space-y-5" onSubmit={handleSubmit}>
                                    <div>
                                        <h4 className="mb-4 text-base font-semibold text-gray-900">Final Notes</h4>
                                        <FieldLabel>Special Requests</FieldLabel>
                                        <textarea
                                            value={formData.specialRequests}
                                            onChange={(e) => updateField("specialRequests", e.target.value)}
                                            placeholder="Add any accessibility needs, preferred timings, notes for the itinerary, or other travel requirements."
                                            className="font-poppins min-h-[120px] w-full rounded-sm border border-gray-200 px-3 py-2 text-[11px] text-gray-800 transition placeholder:text-gray-400 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-between">
                                        <button
                                            type="button"
                                            onClick={handlePrevious}
                                            className="font-poppins h-9 rounded-sm border border-brand-primary px-6 text-[11px] font-semibold text-brand-primary transition hover:bg-brand-primary/5"
                                        >
                                            {t("forms.back")}
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmittingRequest}
                                            className="font-poppins h-9 rounded-sm bg-brand-primary px-6 text-[11px] font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {isSubmittingRequest ? "Submitting..." : t("servicePages.travel.submitRequest")}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                )}

                {alertState && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                        <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-[0px_24px_60px_rgba(15,23,42,0.2)]">
                            <div
                                className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold ${
                                    alertState.tone === "error"
                                        ? "bg-red-100 text-red-600"
                                        : "bg-emerald-100 text-emerald-600"
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

                <div className="mt-[40px]">
                    <ServiceContent
                        heading={t("servicePages.travel.contentHeading")}
                        description={
                            <>
                                <p>{t("servicePages.travel.contentDesc1")}</p>
                                <p>{t("servicePages.travel.contentDesc2")}</p>
                            </>
                        }
                        images={[
                            "/Services/Travel/1.png",
                            "/Services/Travel/2.jpg",
                            "/Services/Travel/3.jpg",
                        ]}
                        layout="image-left"
                    />
                </div>

                <WhyChooseServices
                    heading={t("servicePages.travel.whyChoose")}
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
                            title: t("servicePages.travel.serviceTailored"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(17, 17)">
                                        <path d="M25.6981 28.3171L22.729 14.7913L28.5022 9.01809C30.9764 6.54386 31.8012 3.2449 30.9764 1.59541C29.327 0.770669 26.028 1.59541 23.5538 4.06964L17.7806 9.84283L4.25479 6.87376C3.43005 6.70881 2.77026 7.03871 2.44036 7.6985L1.94551 8.52325C1.61562 9.34799 1.78057 10.1727 2.44036 10.6676L11.1826 16.4408L7.88366 21.3892H2.93521L1.28572 23.0387L6.23417 26.3377L9.53314 31.2861L11.1826 29.6366V24.6882L16.1311 21.3892L21.9043 30.1315C22.3991 30.7913 23.2239 30.9562 24.0486 30.6263L24.8733 30.2964C25.5331 29.8016 25.863 29.1418 25.6981 28.3171Z" stroke="white" strokeWidth="2.57143" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.travel.serviceEndToEnd"),
                        },
                        {
                            icon: (
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="32" fill="#4A90A4" />
                                    <g transform="translate(15, 20)">
                                        <path d="M17.685 1.8894L17.6688 1.8786L16.2414 0.919205C15.2616 0.260206 14.0928 -0.0594727 12.914 0.00912305C11.7352 0.0777188 10.6114 0.530808 9.7146 1.299L6.21 4.30321C5.96522 4.51253 5.65367 4.62744 5.3316 4.6272H1.35C0.991958 4.6272 0.64858 4.76944 0.395406 5.02261C0.142232 5.27579 0 5.61916 0 5.9772V16.8312C0 17.5764 0.6048 18.1812 1.35 18.1812H5.1084C5.30009 18.1811 5.48961 18.2218 5.66435 18.3006C5.83908 18.3795 5.99503 18.4946 6.1218 18.6384L10.332 23.4264C10.9874 24.1713 11.8935 24.6497 12.8783 24.7708C13.863 24.8919 14.858 24.6473 15.6744 24.0834L16.9056 23.232L18.2268 23.682C19.0432 23.9589 19.9267 23.968 20.7487 23.708C21.5707 23.4481 22.2882 22.9326 22.797 22.2366L23.643 21.081L24.2298 21.1602C25.0425 21.2697 25.8693 21.1299 26.6008 20.7593C27.3323 20.3887 27.9341 19.8048 28.3266 19.0848L28.4148 18.9228H34.65C35.008 18.9228 35.3514 18.7806 35.6046 18.5274C35.8578 18.2742 36 17.9308 36 17.5728V5.97901C36 5.62096 35.8578 5.27758 35.6046 5.02441C35.3514 4.77124 35.008 4.62901 34.65 4.62901H30.6702C30.3464 4.6291 30.0334 4.51284 29.7882 4.3014L26.748 1.6752C25.4799 0.57942 23.8494 -0.0054051 22.1739 0.0345195C20.4984 0.0744441 18.8977 0.736263 17.6832 1.8912M14.7312 3.1602L15.7428 3.84061L12.2148 7.38841C11.8346 7.77079 11.5345 8.22525 11.3323 8.72514C11.1301 9.22503 11.0297 9.76026 11.0371 10.2995C11.0444 10.8387 11.1594 11.3709 11.3753 11.8651C11.5911 12.3593 11.9035 12.8054 12.294 13.1772L12.4164 13.2924C13.8744 14.6802 16.128 14.7882 17.7102 13.5444L21.4524 10.6068L26.235 15.2058C26.4487 15.411 26.5889 15.6807 26.6341 15.9735C26.6793 16.2662 26.627 16.5657 26.4852 16.8258L26.4402 16.905L26.415 16.9518L25.956 17.7924C25.8252 18.0321 25.6247 18.2265 25.3811 18.3499C25.1375 18.4733 24.8622 18.5199 24.5916 18.4836L23.2074 18.2982C22.9669 18.2658 22.7221 18.2989 22.4987 18.3939C22.2754 18.489 22.0819 18.6424 21.9384 18.8382L20.6172 20.6418C20.4477 20.8738 20.2087 21.0456 19.9348 21.1324C19.6609 21.2192 19.3665 21.2163 19.0944 21.1242L17.1324 20.4582C16.9328 20.3903 16.7201 20.3701 16.5113 20.3991C16.3025 20.4282 16.1034 20.5058 15.93 20.6256L14.1408 21.8622C13.8685 22.0504 13.5365 22.1321 13.208 22.0916C12.8795 22.0511 12.5772 21.8913 12.3588 21.6426L8.1486 16.8546C7.76824 16.4227 7.3002 16.0768 6.77566 15.84C6.25111 15.6031 5.68212 15.4808 5.1066 15.4812H2.7V7.3272H5.3298C6.29625 7.32742 7.23093 6.98203 7.965 6.35341L11.4714 3.3492C11.9197 2.96497 12.4815 2.73826 13.0709 2.7038C13.6603 2.66934 14.2448 2.82903 14.7348 3.1584M29.3508 16.2246C29.3573 15.6716 29.2505 15.123 29.0369 14.6128C28.8232 14.1027 28.5074 13.6416 28.1088 13.2582L23.571 8.89501C23.7747 8.63535 23.8762 8.3101 23.8563 7.9807C23.8365 7.6513 23.6967 7.34057 23.4634 7.10723C23.23 6.87389 22.9193 6.73409 22.5899 6.71426C22.2605 6.69443 21.9352 6.79594 21.6756 6.9996L20.7648 7.71421L20.6568 7.7988L16.0452 11.4222C15.7899 11.6228 15.4708 11.7247 15.1465 11.7091C14.8222 11.6936 14.5144 11.5617 14.2794 11.3376L14.157 11.2206C14.0268 11.0967 13.9226 10.948 13.8506 10.7833C13.7786 10.6186 13.7402 10.4412 13.7377 10.2615C13.7352 10.0818 13.7686 9.90333 13.836 9.73668C13.9033 9.57003 14.0033 9.41851 14.13 9.29101L19.467 3.927C20.1898 3.20037 21.1611 2.77478 22.1853 2.73604C23.2094 2.69729 24.2102 3.04826 24.9858 3.71821L28.0224 6.34261C28.7587 6.97836 29.6992 7.32786 30.672 7.3272H33.3V16.2246H29.3508Z" fill="white" />
                                    </g>
                                </svg>
                            ),
                            title: t("servicePages.travel.serviceTrusted"),
                        },
                    ]}
                />

                <WhatOurClientsSay
                    heading={t("servicePages.travel.clientSay")}
                    description={t("servicePages.travel.clientSayDesc")}
                    backgroundImage="/Services/TravelClientBg.png"
                    testimonials={[
                        {
                            text: "\"I couldn't believe how easy everything was. The team thought of every detail, even airport pickup was smooth!\"",
                            name: "Sarah Johnson",
                            image: "/Avatar-2.png",
                        },
                        {
                            text: "\"From the desert tour to the old town walk, everything felt authentic and relaxed. Highly recommended.\"",
                            name: "Michael Chen",
                            image: "/Avatar-1.png",
                        },
                        {
                            text: "\"Booking with TreTrip was the best decision. It saved me so much time and gave me peace of mind.\"",
                            name: "John T., USA",
                            image: "/Avatar-3.png",
                        },
                    ]}
                />

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
