"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t, dir } = useLanguage();

    return (
        <footer className="bg-brand-primary text-white pt-16 pb-8">
            <div className="max-w-[90rem] mx-auto px-6 md:px-[50px]">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                    {/* Logo & Description Column */}
                    <div className="space-y-5">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/Logo.png"
                                alt="TreTrip Logo"
                                width={150}
                                height={50}
                                className="h-14 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-white/70 leading-relaxed font-poppins text-[14px] italic">
                            Get away from your crazy work schedule and breathe again. Enjoy vivid destinations, serene views & moments you&apos;ll always remember.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[18px] font-semibold mb-6 font-space text-brand-accent">{t("footer.quickLinks")}</h4>
                        <ul className="space-y-3 text-white/80 font-poppins text-[15px]">
                            <li><Link href="/services/travel" className="hover:text-white transition-colors">{t("services.items.travel.title")}</Link></li>
                            <li><Link href="/services/medical" className="hover:text-white transition-colors">{t("services.items.medical.title")}</Link></li>
                            <li><Link href="/services/business" className="hover:text-white transition-colors">{t("services.items.business.title")}</Link></li>
                            <li><Link href="/services/shipping" className="hover:text-white transition-colors">{t("services.items.shipping.title")}</Link></li>
                            <li><Link href="/services/transport" className="hover:text-white transition-colors">{t("services.items.transport.title")}</Link></li>
                            <li><Link href="/services/events" className="hover:text-white transition-colors">{t("services.items.events.title")}</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-[18px] font-semibold mb-6 font-space text-brand-accent">{t("footer.company")}</h4>
                        <ul className="space-y-3 text-white/80 font-poppins text-[15px]">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/#programs" className="hover:text-white transition-colors">{t("nav.programs")}</Link></li>
                            <li><Link href="/#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">{t("nav.contact")}</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-[18px] font-semibold mb-6 font-space text-brand-accent">{t("footer.contactUs")}</h4>
                        <div className="space-y-5">
                            <a href="tel:+12029912999" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors font-poppins text-[14px]">
                                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-white block">Phone</span>
                                    <span dir="ltr">+1 202 991-2999</span>
                                </div>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=12027706480" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors font-poppins text-[14px]">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 mt-0.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                <div>
                                    <span className="font-semibold text-white block">Whatsapp</span>
                                    <span dir="ltr">+1 (202) 770-6480</span>
                                </div>
                            </a>
                            <a href="mailto:reservations@tretrip.com" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors font-poppins text-[14px]">
                                <Mail size={16} className="flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-semibold text-white block">Email</span>
                                    <span>reservations@tretrip.com</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons — Centered */}
                <div className="flex justify-center gap-4 mb-8">
                    <a href="https://www.facebook.com/profile.php?id=100063837548951" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><Facebook size={20} /></a>
                    <a href="https://www.instagram.com/tretrip" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors"><Instagram size={20} /></a>
                    <a href="https://twitter.com/tretrip20" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                </div>

                {/* Copyright */}
                <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[13px] font-poppins text-white/60 italic">
                    <p>Copyright © {new Date().getFullYear()} TreTrip All Rights Reverend</p>
                    <p>Designed and developed by <Link href="https://entertab.net/" target="_blank" className="text-brand-accent hover:text-white transition-colors">Entertab</Link></p>
                </div>
            </div>
        </footer>
    );
}
