"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="pt-20">
                <section className="bg-brand-primary py-24 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("contact.title")}</h1>
                        <p className="text-xl opacity-90">{t("contact.subtitle")}</p>
                    </div>
                </section>

                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div>
                                <h2 className="text-3xl font-bold text-brand-primary mb-8">{t("contact.getInTouch")}</h2>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-secondary">{t("footer.contactUs")}</p>
                                            <p className="font-semibold text-brand-primary" dir="ltr">+1 (202) 991-2999</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-secondary">Email Us</p>
                                            <p className="font-semibold text-brand-primary">info@tretrip.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                        <div className="bg-brand-primary/10 p-4 rounded-xl text-brand-primary">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-sm text-brand-secondary">Our Office</p>
                                            <p className="font-semibold text-brand-primary">{t("footer.address")}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-brand-secondary mb-2">{t("contact.form.name")}</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-brand-secondary mb-2">{t("contact.form.email")}</label>
                                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-secondary mb-2">{t("contact.form.subject")}</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" placeholder="How can we help?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-brand-secondary mb-2">{t("contact.form.message")}</label>
                                        <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all h-32" placeholder="Tell us about your trip..."></textarea>
                                    </div>
                                    <button className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-all shadow-lg active:scale-95">{t("contact.form.submit")}</button>
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
