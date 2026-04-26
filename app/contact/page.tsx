"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const { t, dir } = useLanguage();

    const services = [
        t("services.items.travel.title"),
        t("services.items.medical.title"),
        t("services.items.business.title"),
        t("services.items.transport.title"),
        t("services.items.shipping.title"),
        t("services.items.events.title"),
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />
            <main className="relative pt-32 pb-20 overflow-hidden flex-1">
                {/* Right Decorative Sidebar */}
                <div className="absolute inset-y-0 right-0 w-[35%] bg-[#2D7A84] hidden lg:block -z-10">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Left Side: Form */}
                        <div className="lg:col-span-7">
                            <h1 className="font-space text-[42px] md:text-[56px] font-bold text-[#2D7A84] mb-4 leading-tight">
                                {t("contact.getInTouch")}
                            </h1>
                            <p className="font-poppins text-gray-600 text-lg mb-12 max-w-2xl leading-relaxed">
                                {t("contact.subtitle")}
                            </p>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-gray-800 font-poppins">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all font-poppins bg-white"
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-gray-800 font-poppins">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all font-poppins bg-white"
                                            placeholder=""
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-gray-800 font-poppins">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all font-poppins bg-white"
                                            placeholder=""
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[14px] font-bold text-gray-800 font-poppins">
                                            Service Type *
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all font-poppins bg-white appearance-none text-gray-400"
                                                required
                                            >
                                                <option value="" disabled selected>Select a service</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-gray-800 font-poppins">
                                        Message
                                    </label>
                                    <textarea
                                        className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-1 focus:ring-brand-teal outline-none transition-all h-32 font-poppins bg-white resize-none"
                                        placeholder="Tell us how we can help you..."
                                    ></textarea>
                                </div>

                                <div className="flex justify-end pt-4">
                                    <button
                                        type="submit"
                                        className="bg-[#2D7A84] text-white px-20 py-4 rounded-md font-bold text-[14px] hover:bg-[#25666e] transition-all shadow-md active:scale-95 font-space tracking-[0.4em] uppercase"
                                    >
                                        SEND
                                    </button>
                                </div>
                            </form>

                            {/* Bottom Contact Info (Inside Left Column) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24">
                                <div className="flex items-center gap-4">
                                    <div className="text-[#2D7A84]">
                                        <Phone size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-space text-[15px] font-bold text-gray-900 leading-tight">Phone</h3>
                                        <p className="font-poppins text-[#2D7A84] text-[15px] font-medium">+1 202 991-2999</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="text-[#2D7A84]">
                                        <MessageCircle size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-space text-[15px] font-bold text-gray-900 leading-tight">Whatsapp</h3>
                                        <p className="font-poppins text-[#2D7A84] text-[15px] font-medium" dir="ltr">+1 (202) 770-6480</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="text-[#2D7A84]">
                                        <Mail size={28} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="font-space text-[15px] font-bold text-gray-900 leading-tight">Email</h3>
                                        <p className="font-poppins text-[#2D7A84] text-[15px] font-medium">reservations@tretrip.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Map Container */}
                        <div className="lg:col-span-5 relative lg:pt-16 lg:pl-10">
                            <div className="bg-white p-6 rounded-[48px] shadow-2xl w-full aspect-[4/5] overflow-hidden relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50450.40939527289!2d-77.2662057783203!3d38.9171732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64af08c84738d%3A0xc3626786f4a7c067!2sTysons%2C%20VA!5e0!3m2!1sen!2sus!4v1714041600000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-[32px]"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
