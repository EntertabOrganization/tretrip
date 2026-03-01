"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';
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
                                width={180}
                                height={80}
                                className="brightness-0 invert"
                            />
                        </Link>
                        <p className="text-white/70 leading-relaxed font-poppins text-[18px] italic">
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
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 mt-0.5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
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
                    <a href="https://www.facebook.com/profile.php?id=100063837548951" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.0301C24 5.38947 18.624 0 12 0C5.376 0 0 5.38947 0 12.0301C0 17.8526 4.128 22.7008 9.6 23.8195V15.6391H7.2V12.0301H9.6V9.02256C9.6 6.70075 11.484 4.81203 13.8 4.81203H16.8V8.42105H14.4C13.74 8.42105 13.2 8.96241 13.2 9.62406V12.0301H16.8V15.6391H13.2V24C19.26 23.3985 24 18.2737 24 12.0301Z" /></svg>
                    </a>
                    <a href="https://www.instagram.com/tretrip" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.2336 0C14.5835 0.00359991 15.2687 0.0107997 15.8603 0.0275993L16.0931 0.0359991C16.3619 0.0455989 16.627 0.0575985 16.9474 0.0719982C18.2242 0.131997 19.0953 0.333592 19.8597 0.629985C20.6516 0.934777 21.3188 1.34757 21.986 2.01355C22.5964 2.61322 23.0685 3.33889 23.3695 4.1399C23.6659 4.90428 23.8675 5.77546 23.9275 7.05343C23.9419 7.37262 23.9539 7.63782 23.9635 7.90781L23.9707 8.1406C23.9887 8.73099 23.9959 9.41617 23.9983 10.7661L23.9995 11.6613V13.2333C24.0024 14.1085 23.9932 14.9838 23.9719 15.8588L23.9647 16.0916C23.9551 16.3616 23.9431 16.6268 23.9287 16.946C23.8687 18.224 23.6647 19.0939 23.3695 19.8595C23.0685 20.6605 22.5964 21.3862 21.986 21.9859C21.3863 22.5963 20.6607 23.0685 19.8597 23.3694C19.0953 23.6658 18.2242 23.8674 16.9474 23.9274L16.0931 23.9634L15.8603 23.9706C15.2687 23.9874 14.5835 23.9958 13.2336 23.9982L12.3385 23.9994H10.7677C9.8921 24.0025 9.01646 23.9933 8.14107 23.9718L7.90828 23.9646C7.62343 23.9538 7.33864 23.9414 7.05393 23.9274C5.77719 23.8674 4.90603 23.6658 4.14047 23.3694C3.33991 23.0683 2.61468 22.5961 2.01538 21.9859C1.40455 21.3863 0.931966 20.6606 0.630651 19.8595C0.334266 19.0951 0.132676 18.224 0.0726788 16.946L0.0366807 16.0916L0.0306811 15.8588C0.00856149 14.9838 -0.00143908 14.1086 0.000682522 13.2333V10.7661C-0.00263878 9.89088 0.00616171 9.01562 0.0270813 8.1406L0.0354808 7.90781C0.0450803 7.63782 0.0570797 7.37262 0.071479 7.05343C0.131476 5.77546 0.333066 4.90548 0.629451 4.1399C0.931469 3.33856 1.40488 2.61286 2.01658 2.01355C2.61553 1.40342 3.34034 0.931266 4.14047 0.629985C4.90603 0.333592 5.77599 0.131997 7.05393 0.0719982C7.37311 0.0575985 7.6395 0.0455989 7.90828 0.0359991L8.14107 0.0287992C9.01606 0.00747907 9.8913 -0.0017216 10.7665 0.00119988L13.2336 0ZM12.0001 5.99986C10.4089 5.99986 8.88281 6.63198 7.75765 7.75717C6.63249 8.88236 6.00038 10.4084 6.00038 11.9997C6.00038 13.591 6.63249 15.1171 7.75765 16.2422C8.88281 17.3674 10.4089 17.9996 12.0001 17.9996C13.5913 17.9996 15.1173 17.3674 16.2425 16.2422C17.3677 15.1171 17.9998 13.591 17.9998 11.9997C17.9998 10.4084 17.3677 8.88236 16.2425 7.75717C15.1173 6.63198 13.5913 5.99986 12.0001 5.99986ZM12.0001 8.3998C12.4728 8.39972 12.9409 8.49275 13.3777 8.67359C13.8145 8.85443 14.2114 9.11954 14.5457 9.45376C14.88 9.78799 15.1453 10.1848 15.3262 10.6215C15.5072 11.0583 15.6004 11.5264 15.6005 11.9991C15.6006 12.4719 15.5075 12.94 15.3267 13.3768C15.1459 13.8136 14.8808 14.2105 14.5466 14.5448C14.2123 14.8791 13.8155 15.1444 13.3788 15.3254C12.9421 15.5064 12.474 15.5995 12.0013 15.5996C11.0465 15.5996 10.1309 15.2203 9.45582 14.5452C8.78072 13.8701 8.40146 12.9545 8.40146 11.9997C8.40146 11.045 8.78072 10.1293 9.45582 9.45419C10.1309 8.77907 11.0465 8.3998 12.0013 8.3998M18.301 4.1999C17.9032 4.1999 17.5216 4.35793 17.2404 4.63923C16.9591 4.92053 16.801 5.30205 16.801 5.69986C16.801 6.09768 16.9591 6.4792 17.2404 6.7605C17.5216 7.04179 17.9032 7.19983 18.301 7.19983C18.6988 7.19983 19.0803 7.04179 19.3616 6.7605C19.6429 6.4792 19.8009 6.09768 19.8009 5.69986C19.8009 5.30205 19.6429 4.92053 19.3616 4.63923C19.0803 4.35793 18.6988 4.1999 18.301 4.1999Z" /></svg>
                    </a>
                    <a href="https://twitter.com/tretrip20" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9 1.125H22.5806L14.5406 10.3376L24 22.8759H16.5943L10.7897 15.273L4.15543 22.8759H0.471429L9.07029 13.0187L0 1.12671H7.59429L12.8331 8.07471L18.9 1.125ZM17.6057 20.6679H19.6457L6.48 3.21814H4.29257L17.6057 20.6679Z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/tretrip-llc/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                        </svg>
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
