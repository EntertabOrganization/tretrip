"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const { t, dir } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-12 sm:py-16 md:py-24 text-white overflow-hidden" style={{
                    background: "linear-gradient(0deg, rgba(0, 100, 111, 0) 0%, #00646F 100%), #00646F1A",
                }}>
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: "url('/ContactBg.png')",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            opacity: 0.15,
                        }}
                        aria-hidden="true"
                    />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <h1 className="font-space text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold mb-3 md:mb-4">{t("contact.title")}</h1>
                        <p className="font-poppins text-[16px] sm:text-[18px] md:text-[20px] text-white/90">{t("contact.subtitle")}</p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-12 sm:py-16 md:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start ${dir === "rtl" ? "text-right" : "text-left"}`}>
                            {/* Contact Info */}
                            <div>
                                <h2 className="font-space text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-bold text-brand-primary mb-6 md:mb-8">{t("contact.getInTouch")}</h2>
                                <div className="space-y-5">
                                    <a href="tel:+12029912999" className={`flex items-center gap-4`}>
                                        <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                                            <Phone size={22} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-secondary font-poppins">Phone</p>
                                            <p className="font-semibold text-brand-primary font-poppins" dir="ltr">+1 (202) 991-2999</p>
                                        </div>
                                    </a>
                                    <a href="https://api.whatsapp.com/send?phone=12029046675" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-4`}>
                                        <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-secondary font-poppins">WhatsApp</p>
                                            <p className="font-semibold text-brand-primary font-poppins" dir="ltr">+1 (202) 904-6675</p>
                                        </div>
                                    </a>
                                    <a href="mailto:info@tretrip.com" className={`flex items-center gap-4`}>
                                        <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                                            <Mail size={22} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-secondary font-poppins">Email</p>
                                            <p className="font-semibold text-brand-primary font-poppins">info@tretrip.com</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Social Icons */}
                                <div className={`flex gap-3 mt-8 ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
                                    <a href="https://www.facebook.com/profile.php?id=100063837548951" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-brand-primary/10 rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"><Facebook size={18} /></a>
                                    <a href="https://www.instagram.com/tretrip" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-brand-primary/10 rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"><Instagram size={18} /></a>
                                    <a href="https://twitter.com/tretrip20" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-brand-primary/10 rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"><Twitter size={18} /></a>
                                    <a href="https://www.linkedin.com/company/tretrip-llc/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-brand-primary/10 rounded-full text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"><Linkedin size={18} /></a>
                                </div>
                            </div>

                            {/* Center: Logo Image */}
                            <div className="flex justify-center items-center">
                                <Image
                                    src="/AboutUsLogo.png"
                                    alt="TreTrip"
                                    width={300}
                                    height={300}
                                    className="w-full max-w-[280px] h-auto"
                                />
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-100 shadow-xl">
                                <form className="space-y-4 md:space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-brand-secondary mb-2 font-poppins">{t("contact.form.name")}</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-poppins" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-brand-secondary mb-2 font-poppins">{t("contact.form.email")}</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-poppins" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-secondary mb-2 font-poppins">{t("contact.form.subject")}</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all font-poppins" placeholder="How can we help?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-secondary mb-2 font-poppins">{t("contact.form.message")}</label>
                                        <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all h-32 font-poppins" placeholder="Tell us about your trip..."></textarea>
                                    </div>
                                    <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg active:scale-95 font-poppins">{t("contact.form.submit")}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
