"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, CheckCircle2, Home, Zap, Wifi, Car, Building2, ChevronLeft, ChevronRight } from "lucide-react";

export default function UnitPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Header />

            <main className="flex-1 w-full pt-28 pb-16">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Hero Carousel */}
                    <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden mb-10 group">
                        <Image 
                            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80" 
                            alt="The Metropolitan Residence" 
                            fill 
                            className="object-cover"
                        />
                        {/* Overlay Controls */}
                        <div className="absolute top-6 right-6 bg-black/40 text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                            1 / 5
                        </div>
                        <button className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 shadow-md hover:bg-white transition opacity-0 group-hover:opacity-100">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-800 shadow-md hover:bg-white transition opacity-0 group-hover:opacity-100">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        {/* Dots */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                            <div className="w-6 h-1.5 bg-white rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Content */}
                        <div className="flex-1">
                            <div className="mb-8">
                                <h1 className="text-[32px] font-bold font-poppins text-black mb-3 leading-tight">The Metropolitan Residence</h1>
                                <div className="flex items-center text-gray-500 text-[13px] font-poppins mb-6">
                                    <MapPin className="w-[14px] h-[14px] mr-1.5" />
                                    <span>Downtown Chicago, IL</span>
                                </div>
                                <div className="flex items-center gap-6 text-[13px] font-poppins">
                                    <div className="flex items-center text-[#00808C] font-medium">
                                        <CheckCircle2 className="w-[14px] h-[14px] mr-1.5" />
                                        <span>Available</span>
                                    </div>
                                    <div className="text-gray-400 border-l border-gray-200 pl-6">
                                        Starting at <span className="text-black font-bold text-[18px] ml-1">$3,200</span> /month
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h2 className="text-[18px] font-semibold font-poppins text-black mb-5">Unit Details</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Size */}
                                    <div className="bg-[#F9FAFB] p-5 rounded-xl flex items-start gap-4">
                                        <div className="p-0 text-[#00808C]">
                                            <Home className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-gray-500 mb-1 font-poppins">Size</div>
                                            <div className="font-medium text-black text-[13px] font-poppins">850 sqft</div>
                                        </div>
                                    </div>
                                    {/* Utilities */}
                                    <div className="bg-[#F9FAFB] p-5 rounded-xl flex items-start gap-4">
                                        <div className="p-0 text-[#00808C]">
                                            <Zap className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-gray-500 mb-1 font-poppins">Utilities</div>
                                            <div className="font-medium text-black text-[13px] font-poppins">Included</div>
                                        </div>
                                    </div>
                                    {/* Wi-Fi */}
                                    <div className="bg-[#F9FAFB] p-5 rounded-xl flex items-start gap-4">
                                        <div className="p-0 text-[#00808C]">
                                            <Wifi className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-gray-500 mb-1 font-poppins">Wi-Fi</div>
                                            <div className="font-medium text-black text-[13px] font-poppins">Included</div>
                                        </div>
                                    </div>
                                    {/* Parking */}
                                    <div className="bg-[#F9FAFB] p-5 rounded-xl flex items-start gap-4">
                                        <div className="p-0 text-[#00808C]">
                                            <Car className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <div className="text-[11px] text-gray-500 mb-1 font-poppins">Parking</div>
                                            <div className="font-medium text-black text-[13px] font-poppins">Covered garage</div>
                                            <div className="text-[11px] text-gray-400 mt-0.5 font-poppins">$150/month</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <div className="bg-[#F9FAFB] p-7 rounded-2xl">
                                    <div className="flex items-center gap-2.5 mb-6">
                                        <Building2 className="w-[18px] h-[18px] text-[#00808C]" strokeWidth={1.5} />
                                        <h3 className="font-medium text-gray-500 text-[12px] font-poppins uppercase tracking-wide">Building Amenities</h3>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-2.5 text-[13px] text-black font-medium font-poppins">
                                                <div className="w-1 h-1 rounded-full bg-[#00808C]"></div> 24/7 concierge
                                            </li>
                                            <li className="flex items-center gap-2.5 text-[13px] text-black font-medium font-poppins">
                                                <div className="w-1 h-1 rounded-full bg-[#00808C]"></div> Business center
                                            </li>
                                            <li className="flex items-center gap-2.5 text-[13px] text-black font-medium font-poppins">
                                                <div className="w-1 h-1 rounded-full bg-[#00808C]"></div> Pet-friendly
                                            </li>
                                            <li className="flex items-center gap-2.5 text-[13px] text-black font-medium font-poppins">
                                                <div className="w-1 h-1 rounded-full bg-[#00808C]"></div> Storage available
                                            </li>
                                        </ul>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-2.5 text-[13px] text-black font-medium font-poppins">
                                                <div className="w-1 h-1 rounded-full bg-[#00808C]"></div> Fitness center
                                            </li>
                                            <li className="flex items-center gap-2.5 text-[13px] text-black font-medium font-poppins">
                                                <div className="w-1 h-1 rounded-full bg-[#00808C]"></div> Rooftop terrace
                                            </li>
                                            <li className="flex items-center gap-2.5 text-[13px] text-black font-medium font-poppins">
                                                <div className="w-1 h-1 rounded-full bg-[#00808C]"></div> In-unit laundry
                                            </li>
                                            <li className="flex items-center gap-2.5 text-[13px] text-black font-medium font-poppins">
                                                <div className="w-1 h-1 rounded-full bg-[#00808C]"></div> Bike storage
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-[18px] font-bold font-poppins text-black mb-4">About This Home</h2>
                                <p className="text-[13px] text-gray-500 leading-relaxed font-poppins">
                                    This fully furnished one-bedroom apartment offers comfortable, modern living in downtown Chicago. Designed for short or extended stays, it includes contemporary interiors, essential amenities, and convenient access to transportation, dining, and entertainment.
                                </p>
                            </div>
                        </div>

                        {/* Right Sidebar (Booking Card) */}
                        <div className="w-full lg:w-[360px]">
                            <div className="border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8 sticky top-32 bg-white">
                                <div className="text-[12px] text-gray-500 mb-2 font-poppins">Downtown Chicago, IL</div>
                                <h3 className="font-poppins font-medium text-black text-[16px] mb-6">The Metropolitan Residence</h3>
                                <div className="mb-6 pb-6 border-b border-gray-100">
                                    <div className="flex items-baseline gap-1.5">
                                        <span className="text-[26px] font-bold text-black font-poppins">$3,200</span>
                                        <span className="text-[13px] text-gray-500 font-poppins">/month</span>
                                    </div>
                                </div>
                                <button className="w-full bg-[#30818C] hover:bg-[#256a73] text-white font-semibold text-[12px] py-4 rounded-lg transition-colors tracking-wider font-poppins mb-4">
                                    REQUEST TO BOOK
                                </button>
                                <div className="text-center text-[11px] text-gray-400 font-poppins">
                                    You won't be charged yet
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
