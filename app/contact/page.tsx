"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternationalPhoneInput from "@/components/InternationalPhoneInput";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type ContactFormData = {
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    serviceType: string;
    message: string;
};

type AlertState = {
    title: string;
    message: string;
    tone: "error" | "success";
} | null;

const INITIAL_CONTACT_FORM: ContactFormData = {
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    serviceType: "",
    message: "",
};

export default function ContactPage() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<ContactFormData>(INITIAL_CONTACT_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alertState, setAlertState] = useState<AlertState>(null);

    const services = [
        t("services.items.travel.title"),
        t("services.items.medical.title"),
        t("services.items.business.title"),
        t("services.items.transport.title"),
        t("services.items.shipping.title"),
        t("services.items.events.title"),
    ];

    const updateField = <K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) => {
        setFormData((current) => ({ ...current, [field]: value }));
    };

    const showAlert = (tone: "error" | "success", title: string, message: string) => {
        setAlertState({ tone, title, message });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.fullName.trim() || !formData.emailAddress.trim() || !formData.serviceType.trim() || !formData.message.trim()) {
            showAlert("error", "Missing information", "Please complete your name, email, service type, and message before sending.");
            return;
        }

        setIsSubmitting(true);

        try {
            const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const response = await fetch(`${apiBaseUrl}/contact-us`, {
                method: "POST",
                headers: {
                    Accept: "*/*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok || !result?.success) {
                throw new Error(result?.message || "Unable to send your contact request right now.");
            }

            showAlert("success", "Message sent", "Your contact request has been submitted successfully.");
            setFormData(INITIAL_CONTACT_FORM);
        } catch (error) {
            showAlert(
                "error",
                "Unable to send",
                error instanceof Error ? error.message : "Something went wrong while sending your message."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="relative pt-32 pb-20 overflow-hidden flex-1">
                <div className="absolute inset-y-0 right-0 w-[35%] bg-[#2D7A84] hidden lg:block z-0">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-7">
                            <h1 className="font-space text-[42px] md:text-[56px] font-bold text-[#2D7A84] mb-4 leading-tight">
                                {t("contact.getInTouch")}
                            </h1>
                            <p className="font-poppins text-gray-600 text-lg mb-12 max-w-2xl leading-relaxed">
                                {t("contact.subtitle")}
                            </p>

                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-gray-800 font-poppins">Full Name *</label>
                                        <input
                                            type="text"
                                            value={formData.fullName}
                                            onChange={(e) => updateField("fullName", e.target.value)}
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all font-poppins bg-white"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-gray-800 font-poppins">Email Address *</label>
                                        <input
                                            type="email"
                                            value={formData.emailAddress}
                                            onChange={(e) => updateField("emailAddress", e.target.value)}
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all font-poppins bg-white"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-gray-800 font-poppins">Phone Number</label>
                                        <InternationalPhoneInput
                                            value={formData.phoneNumber}
                                            onChange={(value) => updateField("phoneNumber", value)}
                                            placeholder="Enter your phone number"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-gray-800 font-poppins">Service Type *</label>
                                        <div className="relative">
                                            <select
                                                value={formData.serviceType}
                                                onChange={(e) => updateField("serviceType", e.target.value)}
                                                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all font-poppins bg-white appearance-none text-gray-700"
                                                required
                                            >
                                                <option value="" disabled>Select a service</option>
                                                {services.map((service) => (
                                                    <option key={service} value={service}>{service}</option>
                                                ))}
                                            </select>
                                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-gray-800 font-poppins">Message *</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => updateField("message", e.target.value)}
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all h-32 font-poppins bg-white resize-none"
                                        placeholder="Tell us about your travel needs, timeline, or any support you would like us to arrange."
                                        required
                                    />
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#2D7A84] text-white px-20 py-4 rounded-md font-bold text-[14px] hover:bg-[#25666e] transition-all shadow-md active:scale-95 font-space tracking-[0.4em] uppercase disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "SENDING" : "SEND"}
                                    </button>
                                </div>
                            </form>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24">
                                <div className="flex items-center gap-4">
                                    <div className="text-[#2D7A84]"><Phone size={28} strokeWidth={1.5} /></div>
                                    <div>
                                        <h3 className="font-space text-[15px] font-bold text-gray-900 leading-tight">Phone</h3>
                                        <p className="font-poppins text-[#2D7A84] text-[15px] font-medium">+1 202 991-2999</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-[#2D7A84]"><MessageCircle size={28} strokeWidth={1.5} /></div>
                                    <div>
                                        <h3 className="font-space text-[15px] font-bold text-gray-900 leading-tight">Whatsapp</h3>
                                        <p className="font-poppins text-[#2D7A84] text-[15px] font-medium" dir="ltr">+1 (202) 770-6480</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-[#2D7A84]"><Mail size={28} strokeWidth={1.5} /></div>
                                    <div>
                                        <h3 className="font-space text-[15px] font-bold text-gray-900 leading-tight">Email</h3>
                                        <p className="font-poppins text-[#2D7A84] text-[15px] font-medium">reservations@tretrip.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 relative lg:pt-16 lg:pl-10">
                            <div className="shadow-2xl w-full aspect-[4/5] overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps?cid=9732019789832210141&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en-US&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {alertState && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-[0px_24px_60px_rgba(15,23,42,0.2)]">
                        <div className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold ${alertState.tone === "error" ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"}`}>
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

            <Footer />
        </div>
    );
}
