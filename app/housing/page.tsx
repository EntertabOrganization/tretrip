"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Partners from "@/components/Partners";
import { useLanguage } from "@/context/LanguageContext";


export default function HousingPage() {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="relative pt-20 overflow-hidden">
                <section
                    className="relative overflow-hidden min-h-[80vh] flex items-center text-white"
                    style={{
                        backgroundImage: "url(/Housing/HeroBg.png)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72),rgba(0,0,0,0.4),rgba(0,0,0,0.15))]" />
                    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
                                Homes that move with you.
                            </h1>
                            <p className="text-lg sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-8">
                                Fully furnished homes designed for short and extended stays, adapting to your plans, wherever life takes you.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                                <button
                                    className="text-white text-[16px] font-medium transition-all hover:opacity-90"
                                    style={{
                                        width: '240.64px',
                                        height: '56px',
                                        borderRadius: '10px',
                                        boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A',
                                        background: '#00808C'
                                    }}
                                >
                                    Browse Available Homes
                                </button>
                                <button
                                    className="text-white text-[16px] font-medium transition-all hover:bg-white/20"
                                    style={{
                                        width: '240.64px',
                                        height: '56px',
                                        borderRadius: '10px',
                                        border: '1px solid #FFFFFF',
                                        background: '#FFFFFF1A',
                                        boxShadow: '0px 4px 6px -4px #0000001A, 0px 10px 15px -3px #0000001A'
                                    }}
                                >
                                    REQUEST A QUOTE
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What we offer */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center mb-12">
                            <h2 className="font-space font-bold text-[34px] leading-[40px] text-center text-black mb-4">
                                What we Offer
                            </h2>
                            <p className="font-['Inter'] font-normal text-[14.6px] leading-[24px] text-center text-[#4A5565] max-w-2xl">
                                Living made easy, from day one
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="p-8 flex flex-col items-center">
                                <div className="bg-[#00646F1A] rounded-[50px] w-14 h-14 mb-6 flex items-center justify-center text-[#00808C]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                </div>
                                <h3 className="font-poppins font-bold text-[19.1px] leading-[28px] text-center text-black mb-3">
                                    Fully Furnished Homes
                                </h3>
                                <p className="font-poppins font-normal text-[16px] leading-[26px] text-center text-[#4A5565]">
                                    Move in ready homes with modern furniture, fully equipped kitchens, and thoughtfully designed spaces, so settling in feels natural, not rushed.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="p-8 flex flex-col items-center">
                                <div className="bg-[#00646F1A] rounded-[50px] w-14 h-14 mb-6 flex items-center justify-center text-[#00808C]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" y1="20" x2="12.01" y2="20" /></svg>
                                </div>
                                <h3 className="font-poppins font-bold text-[19.1px] leading-[28px] text-center text-black mb-3">
                                    Utilities & Wi-Fi Included
                                </h3>
                                <p className="font-poppins font-normal text-[16px] leading-[26px] text-center text-[#4A5565]">
                                    One simple rate that includes utilities, internet, and essential services. Everything is ready when you arrive.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="p-8 flex flex-col items-center">
                                <div className="bg-[#00646F1A] rounded-[50px] w-14 h-14 mb-6 flex items-center justify-center text-[#00808C]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                                </div>
                                <h3 className="font-poppins font-bold text-[19.1px] leading-[28px] text-center text-black mb-3">
                                    Flexible Short & Extended Stays
                                </h3>
                                <p className="font-poppins font-normal text-[16px] leading-[26px] text-center text-[#4A5565]">
                                    Stay for weeks or months. Adjust as your plans evolve. No rigid terms, no long-term pressure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it works */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center mb-16">
                            <h2 className="font-space font-bold text-[34px] leading-[40px] text-center text-black mb-4">
                                How it works
                            </h2>
                            <p className="font-['Inter'] font-normal text-[14.6px] leading-[24px] text-center text-[#4A5565] max-w-2xl">
                                A straightforward process, from finding a home to feeling settled
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {/* Step 1 */}
                            <div
                                className="flex flex-col bg-white p-6 relative"
                                style={{
                                    width: '264px',
                                    height: '300px',
                                    borderRadius: '14px',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'
                                }}
                            >
                                <div className="w-14 h-14 mb-5 rounded-lg bg-[#00808C] flex items-center justify-center text-white">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                </div>
                                <h4 className="font-poppins font-bold text-[13.5px] leading-[20px] text-[#00808C] mb-2 uppercase">
                                    Step 01
                                </h4>
                                <h3 className="font-poppins font-bold text-[19px] leading-[26px] text-black mb-2">
                                    Browse homes
                                </h3>
                                <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#4A5565]">
                                    Discover a curated selection of furnished homes available for short and extended stays.
                                </p>
                                <div className="hidden lg:block absolute top-1/2 -right-[24px] w-[24px] h-[2px] bg-[#E5E7EB] transform -translate-y-1/2"></div>
                            </div>

                            {/* Step 2 */}
                            <div
                                className="flex flex-col bg-white p-6 relative"
                                style={{
                                    width: '264px',
                                    height: '300px',
                                    borderRadius: '14px',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'
                                }}
                            >
                                <div className="w-14 h-14 mb-5 rounded-lg bg-[#00808C] flex items-center justify-center text-white">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V7L15 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14 2V6C14 6.53043 14.2107 7.03914 14.5858 7.41421C14.9609 7.78929 15.4696 8 16 8H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 13H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16 17H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h4 className="font-poppins font-bold text-[13.5px] leading-[20px] text-[#00808C] mb-2 uppercase">
                                    Step 02
                                </h4>
                                <h3 className="font-poppins font-bold text-[19px] leading-[26px] text-black mb-2">
                                    Request a quote
                                </h3>
                                <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#4A5565]">
                                    Share your dates and preferences, and we'll prepare a personalized offer that fits your needs. Receive a detailed proposal
                                </p>
                                <div className="hidden lg:block absolute top-1/2 -right-[24px] w-[24px] h-[2px] bg-[#E5E7EB] transform -translate-y-1/2"></div>
                            </div>

                            {/* Step 3 */}
                            <div
                                className="flex flex-col bg-white p-6 relative"
                                style={{
                                    width: '264px',
                                    height: '300px',
                                    borderRadius: '14px',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'
                                }}
                            >
                                <div className="w-14 h-14 mb-5 rounded-lg bg-[#00808C] flex items-center justify-center text-white">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                </div>
                                <h4 className="font-poppins font-bold text-[13.5px] leading-[20px] text-[#00808C] mb-2 uppercase">
                                    Step 03
                                </h4>
                                <h3 className="font-poppins font-bold text-[19px] leading-[26px] text-black mb-2">
                                    We confirm availability
                                </h3>
                                <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#4A5565]">
                                    Our team reviews availability, aligns the details with you, and confirms everything clearly.
                                </p>
                                <div className="hidden lg:block absolute top-1/2 -right-[24px] w-[24px] h-[2px] bg-[#E5E7EB] transform -translate-y-1/2"></div>
                            </div>

                            {/* Step 4 */}
                            <div
                                className="flex flex-col bg-white p-6 relative"
                                style={{
                                    width: '264px',
                                    height: '300px',
                                    borderRadius: '14px',
                                    border: '1px solid #E5E7EB',
                                    boxShadow: '0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A'
                                }}
                            >
                                <div className="w-14 h-14 mb-5 rounded-lg bg-[#00808C] flex items-center justify-center text-white">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                </div>
                                <h4 className="font-poppins font-bold text-[13.5px] leading-[20px] text-[#00808C] mb-2 uppercase">
                                    Step 04
                                </h4>
                                <h3 className="font-poppins font-bold text-[19px] leading-[26px] text-black mb-2">
                                    Move in with ease
                                </h3>
                                <p className="font-poppins font-normal text-[14px] leading-[22px] text-[#4A5565]">
                                    Arrive to a fully prepared home and enjoy a smooth, stress-free check-in.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why TreTrip */}
                <section className="py-16 md:py-24 bg-[#F9FAFB]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center mb-16">
                            <h2 className="font-space font-bold text-[34px] leading-[40px] text-center text-black mb-4">
                                Why TreTrip
                            </h2>
                            <p className="font-['Inter'] font-normal text-[14.6px] leading-[24px] text-center text-[#4A5565] max-w-2xl">
                                Because where you stay should move with your life
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-5xl mx-auto">
                            {/* Feature 1 */}
                            <div className="flex flex-row items-start gap-5 border border-[#E5E7EB] bg-white p-6 rounded-[16px] shadow-sm">
                                <div className="flex-shrink-0 w-14 h-14 bg-[#00646F1A] rounded-xl flex items-center justify-center text-[#00808C]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 22V4C6 3.46957 6.21071 2.96086 6.58579 2.58579C6.96086 2.21071 7.46957 2 8 2H16C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4V22H6Z" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H6" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M18 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H18" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 6H14" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 10H14" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 14H14" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10 18H14" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-poppins font-bold text-[19px] leading-[28px] text-black mb-2">
                                        Carefully Selected Homes
                                    </h3>
                                    <p className="font-poppins font-normal text-[14.8px] leading-[24px] text-[#4A5565]">
                                        Every home earns its place through comfort, reliability, and quality.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex flex-row items-start gap-5 border border-[#E5E7EB] bg-white p-6 rounded-[16px] shadow-sm">
                                <div className="flex-shrink-0 w-14 h-14 bg-[#00646F1A] rounded-xl flex items-center justify-center text-[#00808C]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 2V6" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M16 2V6" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3 10H21" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-poppins font-bold text-[19px] leading-[28px] text-black mb-2">
                                        Stays That Adapt
                                    </h3>
                                    <p className="font-poppins font-normal text-[14.8px] leading-[24px] text-[#4A5565]">
                                        Your stay adjusts to your timeline, whether short-term or extended.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex flex-row items-start gap-5 border border-[#E5E7EB] bg-white p-6 rounded-[16px] shadow-sm">
                                <div className="flex-shrink-0 w-14 h-14 bg-[#00646F1A] rounded-xl flex items-center justify-center text-[#00808C]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 12H4C4.53043 12 5.03914 12.2107 5.41421 12.5858C5.78929 12.9609 6 13.4696 6 14V17C6 17.5304 5.78929 18.0391 5.41421 18.4142C5.03914 18.7893 4.53043 19 4 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H16C15.4696 19 14.9609 18.7893 14.5858 18.4142C14.2107 18.0391 14 17.5304 14 17V14C14 13.4696 14.2107 12.9609 14.5858 12.5858C14.9609 12.2107 15.4696 12 16 12H19" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-poppins font-bold text-[19px] leading-[28px] text-black mb-2">
                                        Dedicated Human Support
                                    </h3>
                                    <p className="font-poppins font-normal text-[14.8px] leading-[24px] text-[#4A5565]">
                                        Our team is available to support you before arrival and throughout your stay.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex flex-row items-start gap-5 border border-[#E5E7EB] bg-white p-6 rounded-[16px] shadow-sm">
                                <div className="flex-shrink-0 w-14 h-14 bg-[#00646F1A] rounded-xl flex items-center justify-center text-[#00808C]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2V22" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#00808C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-poppins font-bold text-[19px] leading-[28px] text-black mb-2">
                                        Transparent pricing
                                    </h3>
                                    <p className="font-poppins font-normal text-[14.8px] leading-[24px] text-[#4A5565]">
                                        What you see is what you pay. No hidden fees, no unexpected costs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 md:py-24 bg-white px-4">
                    <div
                        className="mx-auto flex flex-col items-center justify-center p-8 md:p-12 text-center text-white"
                        style={{
                            maxWidth: '1054px',
                            minHeight: '336px',
                            borderRadius: '16px',
                            background: '#00808C',
                        }}
                    >
                        <h2 className="font-poppins font-bold text-[40px] leading-[40px] mb-4">
                            Find a home that moves with you
                        </h2>
                        <p className="font-poppins text-[16px] md:text-[18px] text-white/90 max-w-xl mx-auto mb-10 leading-relaxed">
                            Trusted by individuals, families, and teams looking for flexible, fully furnished living.
                        </p>
                        <button
                            className="bg-white text-[#00808C] font-poppins font-semibold text-[15.1px] leading-[24px] uppercase px-8 py-4 rounded-lg transition-all hover:bg-gray-100 shadow-sm"
                        >
                            EXPLORE AVAILABLE Homes
                        </button>
                    </div>
                </section>

                <Footer />
            </main>
        </div>
    );
}
