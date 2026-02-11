"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t, dir } = useLanguage();

    return (
        <footer className="bg-brand-primary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/Logo.png"
                                alt="TreTrip Logo"
                                width={180}
                                height={60}
                                className="h-16 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-300 leading-relaxed font-light">
                            {t("footer.desc")}
                        </p>
                        <div className="flex space-x-4 rtl:space-x-reverse">
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-secondary transition-colors"><Facebook size={18} /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-secondary transition-colors"><Instagram size={18} /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-secondary transition-colors"><Twitter size={18} /></Link>
                            <Link href="#" className="p-2 bg-white/10 rounded-full hover:bg-brand-secondary transition-colors"><Linkedin size={18} /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">{t("footer.quickLinks")}</h4>
                        <ul className="space-y-4 text-gray-300 font-light">
                            <li><Link href="/services/travel" className="hover:text-brand-secondary transition-colors">{t("services.items.travel.title")}</Link></li>
                            <li><Link href="/services/medical" className="hover:text-brand-secondary transition-colors">{t("services.items.medical.title")}</Link></li>
                            <li><Link href="/services/business" className="hover:text-brand-secondary transition-colors">{t("services.items.business.title")}</Link></li>
                            <li><Link href="/services/shipping" className="hover:text-brand-secondary transition-colors">{t("services.items.shipping.title")}</Link></li>
                            <li><Link href="/services/transport" className="hover:text-brand-secondary transition-colors">{t("services.items.transport.title")}</Link></li>
                            <li><Link href="/services/events" className="hover:text-brand-secondary transition-colors">{t("services.items.events.title")}</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6">{t("footer.company")}</h4>
                        <ul className="space-y-4 text-gray-300 font-light">
                            <li><Link href="/about" className="hover:text-brand-secondary transition-colors">{t("nav.about")}</Link></li>
                            <li><Link href="/#programs" className="hover:text-brand-secondary transition-colors">{t("nav.programs")}</Link></li>
                            <li><Link href="/#testimonials" className="hover:text-brand-secondary transition-colors text-white font-medium">{t("nav.contact")}</Link></li>
                            <li><Link href="/contact" className="hover:text-brand-secondary transition-colors">{t("nav.contact")}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-semibold mb-6">{t("footer.contactUs")}</h4>
                        <div className="space-y-4">
                            <a href="tel:+12029912999" className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-colors">
                                <Phone size={18} className="text-white opacity-70" />
                                <span dir="ltr">+1 202 991-2999</span>
                            </a>
                            <a href="mailto:info@tretrip.com" className="flex items-center space-x-3 rtl:space-x-reverse text-gray-300 hover:text-white transition-colors">
                                <Mail size={18} className="text-white opacity-70" />
                                <span>info@tretrip.com</span>
                            </a>
                            <div className="flex items-start space-x-3 rtl:space-x-reverse text-gray-300">
                                <MapPin size={18} className="mt-1 text-white opacity-70 flex-shrink-0" />
                                <span className="font-light">{t("footer.address")}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-sm font-light text-gray-400">
                    <p>© {new Date().getFullYear()} TreTrip. {t("footer.rights")} <Link href="https://entertab.net/" className="text-white hover:text-brand-secondary">Entertab</Link></p>
                </div>
            </div>
        </footer>
    );
}
